---
theme: default
title: Claude Code for the Rest of Us
info: Claude Code Community Meetup
author: Dominik
transition: fade
class: text-center
fonts:
  sans: Calibri, sans-serif
  serif: Georgia, serif
  mono: Consolas, monospace
---

<div class="slide-title">
  <div class="gold-rule"></div>
  <h1>Claude Code</h1>
  <p class="subtitle"><em>for the Rest of Us</em></p>
  <div class="gold-rule"></div>
  <div class="candle">
    <div class="flame"></div>
    <div class="wick"></div>
    <div class="wax"></div>
  </div>
  <p class="footer">Claude Code Community Meetup</p>
</div>

<style>
.slide-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 0;
}
.slide-title h1 {
  font-family: Georgia, serif;
  font-size: 60pt;
  font-weight: bold;
  color: #F5F0E8;
  margin: 16px 0 0 0;
  letter-spacing: 2px;
}
.slide-title .subtitle {
  font-family: Georgia, serif;
  font-size: 30pt;
  color: #C9A84C;
  margin: 0 0 16px 0;
}
.slide-title .gold-rule {
  width: 320px;
  height: 1px;
  background: linear-gradient(90deg, transparent, #C9A84C, transparent);
}
.slide-title .footer {
  font-family: Calibri, sans-serif;
  font-size: 13pt;
  color: #606060;
  margin-top: 48px;
}
.slide-title .candle {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
}
.slide-title .flame {
  width: 14px;
  height: 28px;
  background: radial-gradient(ellipse at 50% 80%, #C9A84C 0%, #7A5A10 50%, transparent 70%);
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  box-shadow: 0 0 30px 10px rgba(201,168,76,0.25), 0 0 60px 20px rgba(201,168,76,0.1);
  animation: flicker 3s ease-in-out infinite;
}
.slide-title .wick {
  width: 2px;
  height: 6px;
  background: #606060;
}
.slide-title .wax {
  width: 8px;
  height: 32px;
  background: linear-gradient(180deg, #F5F0E8 0%, #d0cbbe 100%);
  border-radius: 2px 2px 3px 3px;
}
@keyframes flicker {
  0%, 100% { opacity: 1; transform: scaleY(1) rotate(0deg); }
  25% { opacity: 0.85; transform: scaleY(0.95) rotate(-1deg); }
  50% { opacity: 0.95; transform: scaleY(1.02) rotate(0.5deg); }
  75% { opacity: 0.88; transform: scaleY(0.97) rotate(-0.5deg); }
}
</style>

<!--
This slide is on screen as people take their seats.
Do not introduce it. Do not read it.
Let it sit for a moment — then go straight into the Clarke quote.
~15 seconds
-->

---

<div class="slide-quote">
  <div class="quote-mark">"</div>
  <blockquote>
    Any sufficiently advanced technology<br/>is indistinguishable from magic.
  </blockquote>
  <p class="attribution">— Arthur C. Clarke, 1973</p>
  <div class="candle">
    <div class="flame"></div>
    <div class="wick"></div>
    <div class="wax"></div>
  </div>
</div>

<style>
.slide-quote {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
}
.slide-quote .quote-mark {
  font-family: Georgia, serif;
  font-size: 140pt;
  color: #7A5A10;
  position: absolute;
  top: 40px;
  left: 60px;
  line-height: 1;
  opacity: 0.5;
}
.slide-quote blockquote {
  font-family: Georgia, serif;
  font-size: 34pt;
  font-style: italic;
  color: #F5F0E8;
  text-align: center;
  max-width: 80%;
  line-height: 1.4;
  border: none;
  margin: 0;
  padding: 0;
}
.slide-quote .attribution {
  font-family: Calibri, sans-serif;
  font-size: 16pt;
  color: #C9A84C;
  margin-top: 24px;
}
.slide-quote .candle {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
}
.slide-quote .flame {
  width: 14px;
  height: 28px;
  background: radial-gradient(ellipse at 50% 80%, #C9A84C 0%, #7A5A10 50%, transparent 70%);
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  box-shadow: 0 0 30px 10px rgba(201,168,76,0.25), 0 0 60px 20px rgba(201,168,76,0.1);
  animation: flicker 3s ease-in-out infinite;
}
.slide-quote .wick {
  width: 2px;
  height: 6px;
  background: #606060;
}
.slide-quote .wax {
  width: 8px;
  height: 32px;
  background: linear-gradient(180deg, #F5F0E8 0%, #d0cbbe 100%);
  border-radius: 2px 2px 3px 3px;
}
</style>

<!--
Read the quote slowly. Pause after it lands.
Then move to the next slide without commentary — let the flip do the work.
~30 seconds
-->

---

<div class="slide-flip">
  <h2>Any technology you understand<br/>is no longer magic.</h2>
  <p class="caption"><em>— Tonight's goal</em></p>
</div>

<style>
.slide-flip {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.slide-flip h2 {
  font-family: Georgia, serif;
  font-size: 42pt;
  font-weight: bold;
  color: #C9A84C;
  text-align: center;
  max-width: 85%;
  line-height: 1.3;
  margin: 0;
}
.slide-flip .caption {
  font-family: Calibri, sans-serif;
  font-size: 16pt;
  color: #606060;
  margin-top: 32px;
}
</style>

<!--
"But I want to give you the other side of that sentence."
Read it. Pause.
"That's what the next ten minutes are about."
~30 seconds
-->

---

<div class="slide-terminal">
  <div class="terminal-window">
    <div class="title-bar">
      <div class="traffic-lights">
        <span class="dot red"></span>
        <span class="dot yellow"></span>
        <span class="dot green"></span>
      </div>
      <span class="title-text">claude — terminal</span>
    </div>
    <div class="terminal-body">
      <div class="line prompt">› What are you?</div>
      <div class="spacer" />
      <div class="line response dimmed">● I'm Claude Code, Anthropic's CLI tool for software engineering tasks.</div>
      <div class="line response dimmed">&nbsp;&nbsp;Powered by Claude Opus 4.6. I can help you read, write, debug code...</div>
      <div class="separator" />
      <div class="line prompt">› I asked what you are, not who you are.</div>
      <div class="spacer" />
      <div class="line response pivot">● Fair point.</div>
      <div class="spacer" />
      <div class="line response bright">&nbsp;&nbsp;I'm a large language model — a neural network trained on text</div>
      <div class="line response bright">&nbsp;&nbsp;data to predict and generate language. At a technical level, I</div>
      <div class="line response bright">&nbsp;&nbsp;process token sequences and produce outputs by sampling from</div>
      <div class="line response bright">&nbsp;&nbsp;learned probability distributions.</div>
    </div>
  </div>
</div>

<style>
.slide-terminal {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 32px;
}
.terminal-window {
  background: #0A1A0A;
  border-radius: 10px;
  width: 90%;
  max-width: 800px;
  overflow: hidden;
  box-shadow: 0 0 60px rgba(0,204,68,0.08);
}
.title-bar {
  background: #1a1a1a;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
}
.traffic-lights {
  display: flex;
  gap: 7px;
}
.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}
.dot.red { background: #ff5f57; }
.dot.yellow { background: #febc2e; }
.dot.green { background: #28c840; }
.title-text {
  font-family: Calibri, sans-serif;
  font-size: 12pt;
  color: #606060;
  margin-left: auto;
  margin-right: auto;
}
.terminal-body {
  padding: 24px 28px;
  font-family: Consolas, monospace;
  font-size: 14pt;
  line-height: 1.7;
}
.line.prompt {
  color: #00CC44;
}
.line.response.dimmed {
  color: #426842;
}
.line.response.pivot {
  color: #C9A84C;
  font-weight: bold;
}
.line.response.bright {
  color: #F5F0E8;
}
.spacer { height: 8px; }
.separator {
  border-top: 1px solid #1a2a1a;
  margin: 16px 0;
}
</style>

<!--
"I actually asked it directly. Here's what happened."
Read both exchanges. When you reach "Fair point." — pause before reading the second answer.
"That second answer. That's what we're here for tonight."
~1.5 minutes
-->

---

<div class="slide-system-prompt">
  <h2>THE SYSTEM PROMPT</h2>
  <div class="envelope">
    <div class="flap"></div>
    <div class="body">
      <div class="seal">A</div>
    </div>
  </div>
  <p class="caption"><em>The letter it arrives with. Before you type a single word.</em></p>
</div>

<style>
.slide-system-prompt {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 0;
}
.slide-system-prompt h2 {
  font-family: Georgia, serif;
  font-size: 40pt;
  font-weight: bold;
  color: #F5F0E8;
  letter-spacing: 5px;
  margin: 0 0 40px 0;
}
.envelope {
  position: relative;
  width: 220px;
  height: 150px;
}
.envelope .body {
  position: absolute;
  bottom: 0;
  width: 220px;
  height: 130px;
  background: linear-gradient(135deg, #2a2018 0%, #1a1510 100%);
  border: 1px solid #C9A84C;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.envelope .flap {
  position: absolute;
  top: 0;
  left: 10px;
  width: 0;
  height: 0;
  border-left: 100px solid transparent;
  border-right: 100px solid transparent;
  border-top: 65px solid #1a1510;
  z-index: 1;
  filter: drop-shadow(0 2px 2px rgba(0,0,0,0.5));
}
.envelope .seal {
  width: 48px;
  height: 48px;
  background: radial-gradient(circle at 40% 40%, #a00000, #8B0000, #5a0000);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Georgia, serif;
  font-size: 22pt;
  font-weight: bold;
  color: #F5F0E8;
  box-shadow: 0 0 20px rgba(139,0,0,0.4), inset 0 -2px 4px rgba(0,0,0,0.3);
  z-index: 2;
  position: relative;
}
.slide-system-prompt .caption {
  font-family: Calibri, sans-serif;
  font-size: 19pt;
  font-style: italic;
  color: #606060;
  margin-top: 40px;
  text-align: center;
}
</style>

<!--
"So if Claude wakes up every time with no memory — what does it actually know when it starts?"

"It arrives with a letter. A set of instructions written by Anthropic, baked in before you ever open the terminal.
That's the system prompt. It tells Claude who it is, how to behave, what tools it has access to.
You didn't write it. You can't see it. But it shapes everything."

"Think of it as the job description handed to someone before their first day."
~1.5 minutes
-->

---

<div class="slide-context">
  <h2>THE CONTEXT WINDOW</h2>
  <div class="spotlight-container">
    <div class="spotlight-ring ring-outer"></div>
    <div class="spotlight-ring ring-mid"></div>
    <div class="spotlight-ring ring-inner"></div>
    <div class="spotlight-label"><em>What Claude can see right now</em></div>
  </div>
  <p class="caption">Everything inside — exists. &nbsp; Everything outside — doesn't.</p>
</div>

<style>
.slide-context {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.slide-context h2 {
  font-family: Georgia, serif;
  font-size: 40pt;
  font-weight: bold;
  color: #F5F0E8;
  letter-spacing: 5px;
  margin: 0 0 32px 0;
}
.spotlight-container {
  position: relative;
  width: 360px;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.spotlight-ring {
  position: absolute;
  border-radius: 50%;
}
.ring-outer {
  width: 360px;
  height: 220px;
  background: radial-gradient(ellipse, rgba(201,168,76,0.04) 0%, transparent 70%);
  border: 1px solid rgba(201,168,76,0.08);
}
.ring-mid {
  width: 260px;
  height: 160px;
  background: radial-gradient(ellipse, rgba(201,168,76,0.08) 0%, transparent 70%);
  border: 1px solid rgba(201,168,76,0.15);
}
.ring-inner {
  width: 160px;
  height: 100px;
  background: radial-gradient(ellipse, rgba(201,168,76,0.15) 0%, transparent 70%);
  border: 1px solid rgba(201,168,76,0.3);
  box-shadow: 0 0 40px rgba(201,168,76,0.1);
}
.spotlight-label {
  position: relative;
  z-index: 1;
  font-family: Calibri, sans-serif;
  font-size: 13pt;
  color: #C9A84C;
}
.slide-context .caption {
  font-family: Georgia, serif;
  font-size: 20pt;
  color: #F5F0E8;
  margin-top: 40px;
  text-align: center;
}
</style>

<!--
"Here's the single most important concept for understanding Claude Code."

"Imagine a spotlight on a dark stage. Everything inside that spotlight exists for Claude.
Everything outside it — doesn't. There's no memory, no awareness of what happened before,
no sense of the project history you've built up over months."

"The system prompt is in there. Your conversation so far is in there. Any files it has read are in there.
But the window is finite. There's a limit to how much it can hold.
And when something falls outside the light — it's gone."

"This is why long conversations sometimes feel like Claude 'forgets' things.
It hasn't forgotten. It just can't see that far back anymore."
~1 minute
-->

---

<div class="slide-loop">
  <div class="steps">
    <div class="step green">
      <div class="step-label">OBSERVE</div>
      <div class="step-desc">reads context</div>
    </div>
    <div class="arrow">→</div>
    <div class="step blue">
      <div class="step-label">THINK</div>
      <div class="step-desc">reasons</div>
    </div>
    <div class="arrow">→</div>
    <div class="step gold">
      <div class="step-label">ACT</div>
      <div class="step-desc">executes</div>
    </div>
    <div class="arrow">→</div>
    <div class="step grey">
      <div class="step-label">LOOP</div>
      <div class="step-desc">starts again</div>
    </div>
  </div>
  <div class="loop-back">↺ starts again</div>
  <div class="callout">
    <div class="callout-bar"></div>
    <div class="callout-content">
      <div class="callout-label">Real story</div>
      <p class="callout-setup">Detecting what projects users work on — from their email inbox.</p>
      <div class="attempts">
        <div class="attempt fail"><span class="mark">✗</span> Clustering algorithm — groups, doesn't understand</div>
        <div class="attempt fail"><span class="mark">✗</span> Prompt engineering — better, but a fixed snapshot</div>
        <div class="attempt success"><span class="mark">✓</span> <strong>Agentic search</strong> — Claude decides, hunts, reassesses</div>
      </div>
    </div>
  </div>
</div>

<style>
.slide-loop {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 0;
  padding: 24px 32px;
}
.steps {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}
.step {
  padding: 16px 24px;
  border-radius: 8px;
  text-align: center;
  min-width: 110px;
}
.step.green { background: rgba(0,204,68,0.12); border: 1px solid rgba(0,204,68,0.3); }
.step.blue { background: rgba(80,130,200,0.12); border: 1px solid rgba(80,130,200,0.3); }
.step.gold { background: rgba(201,168,76,0.12); border: 1px solid rgba(201,168,76,0.3); }
.step.grey { background: rgba(96,96,96,0.12); border: 1px solid rgba(96,96,96,0.3); }
.step-label {
  font-family: Georgia, serif;
  font-size: 16pt;
  font-weight: bold;
  margin-bottom: 4px;
}
.step.green .step-label { color: #00CC44; }
.step.blue .step-label { color: #5082c8; }
.step.gold .step-label { color: #C9A84C; }
.step.grey .step-label { color: #808080; }
.step-desc {
  font-family: Calibri, sans-serif;
  font-size: 11pt;
  color: #606060;
}
.arrow {
  font-size: 20pt;
  color: #606060;
}
.loop-back {
  font-family: Calibri, sans-serif;
  font-size: 13pt;
  color: #606060;
  margin-bottom: 28px;
  text-align: right;
  width: 100%;
  max-width: 600px;
}
.callout {
  display: flex;
  gap: 16px;
  max-width: 640px;
  width: 100%;
}
.callout-bar {
  width: 3px;
  background: #C9A84C;
  border-radius: 2px;
  flex-shrink: 0;
}
.callout-content {
  padding: 4px 0;
}
.callout-label {
  font-family: Georgia, serif;
  font-size: 14pt;
  font-weight: bold;
  color: #C9A84C;
  margin-bottom: 4px;
}
.callout-setup {
  font-family: Calibri, sans-serif;
  font-size: 14pt;
  color: #F5F0E8;
  margin: 0 0 12px 0;
}
.attempts {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.attempt {
  font-family: Calibri, sans-serif;
  font-size: 13pt;
}
.attempt.fail { color: #606060; }
.attempt.success { color: #F5F0E8; }
.attempt .mark { margin-right: 8px; }
.attempt.fail .mark { color: #606060; }
.attempt.success .mark { color: #00CC44; }
</style>

<!--
"So how does something with no persistent memory actually get anything done? The answer is the agentic loop."

"Every time you give Claude Code a task, it doesn't just answer once and stop. It loops.
It observes what's in its context window. It thinks about what to do. It acts — maybe reads a file,
runs a command, writes some code. Then it loops back to the start with new information."

"It doesn't need memory because every loop refreshes its understanding. It's not remembering — it's re-reading."

"Let me make this real. At Marbles, we wanted to figure out what projects our users were actually
working on — just from their email inbox. We tried three things."

"First, a clustering algorithm. Smart, but rigid."
"Then prompt engineering. Better, but we were still handing Claude a fixed snapshot."
"Then we tried agentic search. Now Claude decides what to look for, goes and finds it,
comes back, reassesses. The results were in a completely different league."

"That experience is actually what made me want to give this talk tonight."
~3 minutes
-->

---

<div class="slide-bookend">
  <h2><em>Is it still magic?</em></h2>
  <div class="candle-hand">
    <div class="flame"></div>
    <div class="wick"></div>
    <div class="wax"></div>
    <div class="hand">
      <svg viewBox="0 0 80 60" width="80" height="60">
        <path d="M25,5 C20,5 15,10 15,18 L15,35 C15,40 18,45 25,45 L55,45 C60,45 63,40 63,35 L63,18 C63,10 58,5 53,5 L53,5 C50,5 48,8 48,12 L48,5 C48,2 45,0 42,0 C39,0 37,2 37,5 L37,12 L37,5 C37,2 34,0 31,0 C28,0 25,2 25,5Z" fill="none" stroke="#C9A84C" stroke-width="1.5" opacity="0.6"/>
      </svg>
    </div>
  </div>
  <blockquote>"Any technology you understand is no longer magic."</blockquote>
</div>

<style>
.slide-bookend {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.slide-bookend h2 {
  font-family: Georgia, serif;
  font-size: 48pt;
  font-weight: bold;
  color: #F5F0E8;
  margin: 0 0 40px 0;
}
.candle-hand {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
}
.candle-hand .flame {
  width: 16px;
  height: 32px;
  background: radial-gradient(ellipse at 50% 80%, #C9A84C 0%, #7A5A10 50%, transparent 70%);
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  box-shadow: 0 0 40px 12px rgba(201,168,76,0.3), 0 0 80px 25px rgba(201,168,76,0.12);
  animation: flicker 3s ease-in-out infinite;
}
.candle-hand .wick {
  width: 2px;
  height: 6px;
  background: #606060;
}
.candle-hand .wax {
  width: 10px;
  height: 40px;
  background: linear-gradient(180deg, #F5F0E8 0%, #d0cbbe 100%);
  border-radius: 2px 2px 3px 3px;
}
.candle-hand .hand {
  margin-top: -8px;
  opacity: 0.7;
}
.slide-bookend blockquote {
  font-family: Georgia, serif;
  font-size: 26pt;
  font-style: italic;
  color: #C9A84C;
  text-align: center;
  border: none;
  margin: 0;
  padding: 0;
  max-width: 80%;
}
</style>

<!--
"So. Is it still magic?"
(Pause. Let the room think.)

"You've just seen the system prompt — the letter it arrives with.
The context window — the spotlight it works inside.
And the agentic loop — how it thinks, acts, and re-reads its way to an answer."

"It's not magic. It's a loop. Running inside a window. Starting from a letter."

"Clarke was right — before tonight. I hope he's a little less right now."

"What changes about how you use it — now that you can see the loop?"
~1 minute
-->
