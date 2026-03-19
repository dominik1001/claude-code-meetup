# Slide 07 — The Agentic Loop

## Position in Arc
Third concept — the heart of the talk. Also where the Marbles story lives.

## Visual
- Background: near black `#080808`
- Four colored step boxes in a row: OBSERVE → THINK → ACT → LOOP
- Loop-back label: "↺ starts again"
- Callout box below with gold left accent bar — the Marbles real story

## The Four Steps

| Step | Color | Meaning |
|------|-------|---------|
| OBSERVE | Green | Reads the context window — files, instructions, conversation |
| THINK | Blue | Reasons about what to do next |
| ACT | Gold | Executes — writes code, runs a command, reads a file |
| LOOP | Grey | Goes back to the start with updated context |

## The Marbles Story (callout box)

**Label:** Real story
**Setup:** Detecting what projects users work on — from their email inbox.

| Attempt | Result |
|---------|--------|
| ✗ Clustering algorithm | Groups, doesn't understand |
| ✗ Prompt engineering | Better, but hands it a fixed snapshot |
| ✓ **Agentic search** | Claude decides what to look for, hunts, reassesses |

## Spoken Words
> "So how does something with no persistent memory actually get anything done? The answer is the agentic loop."

> "Every time you give Claude Code a task, it doesn't just answer once and stop. It loops. It observes what's in its context window. It thinks about what to do. It acts — maybe reads a file, runs a command, writes some code. Then it loops back to the start with new information in its context."

> "It doesn't need memory because every loop refreshes its understanding. It's not remembering — it's re-reading."

*Advance to the callout section:*

> "Let me make this real. At Marbles, we wanted to figure out what projects our users were actually working on — just from their email inbox. We tried three things."

> "First, a clustering algorithm. Smart, but rigid — it groups patterns, it doesn't understand context."

> "Then prompt engineering. Better, but we were still handing Claude a fixed snapshot. Garbage in, garbage out."

> "Then we tried agentic search. Now Claude decides what to look for, goes and finds it, comes back, reassesses. It hunts rather than receives. The results were in a completely different league."

> "That experience is actually what made me want to give this talk tonight."

## Timing
~3 minutes (the longest slide — it carries the most content)

## Design Notes
- Four boxes are color-coded to reinforce distinctness of each phase
- The callout box is visually separate from the main diagram — a story within the concept
- Gold left accent bar on callout signals "this is real, not abstract"
- ✗ marks in grey, ✓ mark in green — the elimination round reads instantly

## Why This Slide Exists
This is the core technical concept of the talk, made practical by a real story.
The three-attempt narrative works because the audience watches the other approaches fail first —
which makes agentic search feel earned, not just asserted.
The Marbles mention is one sentence of context, zero slides of marketing.

## Image Option
The background or a side panel could use the **Figure with a Lantern** photographic image
(see style-guide.md prompt #4) — the hunter in darkness is a direct visual metaphor for agentic search.
