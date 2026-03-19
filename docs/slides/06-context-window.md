# Slide 06 — The Context Window

## Position in Arc
Second concept. The container that makes everything else make sense.

## Visual
- Background: near black `#080808`
- Concentric oval "spotlight" glow — gold tones, center of slide
- Label inside the innermost oval: *What Claude can see right now*

## Text

**Title:** THE CONTEXT WINDOW
**Caption:** Everything inside — exists.   Everything outside — doesn't.

## Spoken Words
> "Here's the single most important concept for understanding Claude Code."

> "Imagine a spotlight on a dark stage. Everything inside that spotlight exists for Claude. Everything outside it — doesn't. There's no memory, no awareness of what happened before, no sense of the project history you've built up over months."

> "The system prompt is in there. Your conversation so far is in there. Any files it has read are in there. But the window is finite. There's a limit to how much it can hold. And when something falls outside the light — it's gone."

> "This is why long conversations sometimes feel like Claude 'forgets' things. It hasn't forgotten. It just can't see that far back anymore."

## Timing
~1 minute

## Design Notes
- The concentric oval spotlight is a direct visual translation of the concept
- Caption in Georgia, 20pt, cream — the most important line on the slide
- The label inside the oval is small and italic — it annotates the visual, doesn't compete
- The darkness around the spotlight is the point: it's what Claude *cannot* see

## Why This Slide Exists
Without understanding the context window, the agentic loop doesn't make sense.
It also reframes the "Claude forgot something" frustration users have — it's not a bug, it's architecture.

## Image Option
Replace the illustrated spotlight with the **Empty Stage Spotlight** photographic image (see style-guide.md prompt #3)
for a more cinematic, high-impact version.
