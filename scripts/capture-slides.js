const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const SLIDES_DIR = path.resolve(__dirname, '../slides');
const OUT_DIR = path.resolve(__dirname, '../slides-pdf-frames');

const WIDTH = 1920;
const HEIGHT = 1080;

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

// Slide definitions: file, how many ArrowDown presses to capture, and initial wait (ms)
const SLIDES = [
  { file: '01-title.html',           steps: 0, waitMs: 3500 },
  { file: '02-dominik.html',         steps: 0, waitMs: 3500 },
  { file: '03-clarke-quote.html',    steps: 0, waitMs: 4000 },
  { file: '04-live-conversation.html', steps: 0, waitMs: 4500 },
  // system-prompt: stage 0 (seal), stage 1 (broken+prompt), stage 2 (punchline), stage 3 (takeaway)
  { file: '05-system-prompt.html',   steps: 3, waitMs: 2000, stepWaitMs: 1200 },
  // agentic-loop: 13 arrow presses (steps array index 0..12, but initial layout shows on load)
  { file: '06-agentic-loop.html',    steps: 13, waitMs: 2000, stepWaitMs: 600 },
  // summary: initial + 3 reveals
  { file: '07-summary.html',         steps: 3, waitMs: 2000, stepWaitMs: 600 },
  { file: '08-end.html',             steps: 0, waitMs: 3500 },
  { file: '09-sources.html',         steps: 0, waitMs: 3500 },
];

async function captureSlide(page, slideFile, slideIdx, steps, waitMs, stepWaitMs = 800) {
  const filePath = `file://${SLIDES_DIR}/${slideFile}`;
  await page.goto(filePath, { waitUntil: 'networkidle' });

  // Wait for initial CSS animations to settle
  await page.waitForTimeout(waitMs);

  const frames = [];

  // Capture initial / final (for no-step slides) state
  const frame0 = path.join(OUT_DIR, `${String(slideIdx + 1).padStart(2, '0')}-${slideFile.replace('.html', '')}-s00.png`);
  await page.screenshot({ path: frame0, fullPage: false });
  frames.push(frame0);
  console.log(`  Captured: ${path.basename(frame0)}`);

  // Advance through steps
  for (let s = 1; s <= steps; s++) {
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(stepWaitMs);
    const framePath = path.join(OUT_DIR, `${String(slideIdx + 1).padStart(2, '0')}-${slideFile.replace('.html', '')}-s${String(s).padStart(2, '0')}.png`);
    await page.screenshot({ path: framePath, fullPage: false });
    frames.push(framePath);
    console.log(`  Captured: ${path.basename(framePath)}`);
  }

  return frames;
}

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: WIDTH, height: HEIGHT });

  const allFrames = [];

  for (let i = 0; i < SLIDES.length; i++) {
    const { file, steps, waitMs, stepWaitMs } = SLIDES[i];
    console.log(`\nSlide ${i + 1}: ${file}`);
    const frames = await captureSlide(page, file, i, steps, waitMs, stepWaitMs);
    allFrames.push(...frames);
  }

  await browser.close();

  // Write frame list for Python
  fs.writeFileSync(path.join(OUT_DIR, 'frames.txt'), allFrames.join('\n'));
  console.log(`\nDone. ${allFrames.length} frames captured.`);
  console.log(`Frames list: ${path.join(OUT_DIR, 'frames.txt')}`);
})();
