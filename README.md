# CloudTalk VoiceAgents — Templates & Editor Prototype

A clickable, zero-build prototype combining two flows into one:

1. **VoiceAgents list** — a table of existing AI voice agents (Inbound / Outbound filter, search, status, jobs, call counts, average duration, pagination).
2. **Templates catalogue** — 12 starter templates across 4 categories (Receptionist, Customer Support, Outbound, Lead Qualification) plus a Blank VoiceAgent.
3. **Editor (Form + Advanced)** — modeled on the live `voiceagent-tessa-edit` Vercel prototype: Personality, Knowledge sources, Skills, Scenarios, plus a JSON Advanced mode with live validation, line-level diff, save/import/discard flows, and toast confirmations.

Built with vanilla HTML/CSS/JS. No framework, no build step.

## Run locally

```bash
open index.html
```

Or serve over HTTP (recommended for `localStorage` and file:// quirks in some browsers):

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Project structure

```
va-prototype/
├── index.html      # markup — list view, templates grid, editor (Form + Advanced)
├── styles.css      # all styles, organised by section
├── app.js          # templates data, navigation, JSON editor logic, validation, diff, modals
└── README.md
```

## Design system

The prototype uses CloudTalk's design tokens pulled from the Figma source:

- Brand: `--brand-500 #0527ff`, `--brand-600 #334fff`, `--brand-25 #f1f3ff`
- Gray cool palette: `--gc-50` → `--gc-900`
- Accent surfaces for agent avatars: Shiraz, Green Pea, Eastern Blue, Ultramarine, Yellow
- Typography: Roboto (UI) + Roboto Mono (code editor)
- Spacing: 8 / 16, radii 8 / 12

## Features

### Templates grid
- 4 categories × 3 templates plus Blank VoiceAgent
- Category filter, search, hover states matching the Figma

### Editor

**Form mode** — fields modeled after Tessa-edit:
- Personality (name, language tags, voice tags, greeting)
- Knowledge sources (banner + document list with Unlink action)
- Skills (Take a message, Extract Data, Answer Questions, Transfer to Human, Custom — per-template enabled set)
- Scenarios (When / Reply / Action cards)

**Advanced mode** — JSON editor:
- Textarea overlaid on a syntax-highlighted `<pre>` with a gutter
- Line-level diff markers in the gutter (green = added, blue = modified, red = error)
- Real-time validation with quick-fix repair panel
- Save / Revert / Copy / Import / Try sample paste buttons
- Save modal with sectioned diff and fallback notice
- Import modal: paste → validate → diff → apply
- Discard confirmation when switching to Form with pending changes
- Wholesale paste detection
- `Cmd/Ctrl + S` to save

## Sources

Built from:
- CloudTalk Figma — AI Receptionist file
- `voiceagent-tessa-edit` Vercel prototype (Tessa)
- VoiceAgents HUB Notion page (template catalogue source)

## License

MIT — see [LICENSE](./LICENSE).
