---
name: prestige-style
description: Applies the Prestige-inspired dark theatrical visual style to slides, HTML artifacts, and presentation materials. Use when brand colors, typography, or visual formatting for this presentation apply.
---

# Prestige Style Guide

## Overview

Visual identity inspired by **The Prestige (2006)** — dark, theatrical, high-contrast. Things emerge from darkness. Restraint creates tension. The aesthetic mirrors the content: mystery being revealed, magic being explained.

**Keywords**: styling, brand colors, typography, visual formatting, visual design, dark theme, presentation style, slide design

## Colors

| Role | Name | Hex |
|------|------|-----|
| Background | Near Black | `#080808` |
| Primary Text | Cream | `#F5F0E8` |
| Accent | Gold | `#C9A84C` |
| Dimmed Accent | Gold Dim | `#7A5A10` |
| Secondary Text | Grey | `#606060` |
| Terminal Text | Green | `#00CC44` |
| Terminal BG | Dark Terminal | `#0A1A0A` |
| Seal / Danger | Deep Red | `#8B0000` |

**Rule:** Black dominates. Gold is the only accent. Never use white backgrounds.

## Typography

| Element | Font | Size | Style |
|---------|------|------|-------|
| Main titles | Georgia | 34–60pt | Bold, letter-spaced |
| Pull quotes | Georgia | 26–42pt | Italic |
| Body / captions | Calibri, sans-serif | 13–19pt | Regular or Italic |
| Terminal text | Consolas, monospace | 12–14pt | Monospace |
| Attribution | Calibri, sans-serif | 13–16pt | Regular |

**Rule:** Never more than 5 words on a non-content slide. No bullet points. Ever.

## Layout Principles

- One idea per slide, maximum
- Every slide has a single visual element — no text-only slides
- High contrast between the one thing that matters and everything else
- Breathing room — never fill every inch
- Slow fade transitions only — no snappy animations

## Visual Motif

A **candle flame** appears as a recurring element throughout the presentation — the silent throughline. The same image, more revealed each time.

## Application Rules

### When styling HTML slides
- Set `background: #080808` on the body/root
- Use `color: #F5F0E8` for primary text
- Use `color: #C9A84C` for accents, highlights, and emphasis
- Use `color: #606060` for secondary/dimmed text
- Apply `font-family: Georgia, 'Times New Roman', serif` to headings and quotes
- Apply `font-family: Calibri, Arial, sans-serif` to body text
- Apply `font-family: Consolas, 'Courier New', monospace` to code/terminal blocks
- Terminal blocks get `background: #0A1A0A; color: #00CC44`

### When styling any artifact
- Dark background is non-negotiable
- Gold (`#C9A84C`) is the only accent — no blues, greens, or other colors outside the palette
- Prefer subtle `opacity` and `transition` effects over hard state changes
- Text shadows and glows should be warm-toned (gold), never cool
- Borders, if used, should be `#7A5A10` (dimmed gold) or `#606060` (grey)

## What to Avoid

- White or grey backgrounds
- Bullet points of any kind
- More than one idea per slide
- Decorative lines under titles
- Busy imagery with multiple subjects
- Bright or saturated colors
- Snappy slide transitions
