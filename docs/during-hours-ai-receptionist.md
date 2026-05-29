# During-Hours AI Receptionist — Template Spec

Engineering handoff for the **During-Hours AI Receptionist** template.

- **Source playbook:** [Notion · During-Hours AI Receptionist](https://www.notion.so/cloudtalkio/During-Hours-AI-Receptionist-36e2bccf284f81119288c917c8aeb293) (Use Case 02A)
- **Prototype:** [va-prototype](https://github.com/olawanci/va-prototype) → click *New VoiceAgent* → Healthcare → *During-Hours AI Receptionist*
- **Direction:** Inbound · **Complexity:** Low–Medium · **Time to build:** 1–3 days

---

> ## 🚫 The system does NOT add Knowledge Base content
>
> The template seeds **everything else** — name, voice, greeting, skills, scenarios. But the **Knowledge Base documents must be uploaded by the customer**; the system cannot supply them.
>
> The Answer Questions skill is enabled by default, **but it will not answer anything until at least one document is in the customer's Knowledge Base**.
>
> See [Step 3 — Knowledge Base](#step-3--knowledge-base--customer-supplied) for what engineering must ensure and what the customer must own.

---

## What the template seeds vs what the user adds

| Area | Seeded by template | User adds |
|---|---|---|
| Agent profile | Name, direction, language, voice, greeting | Optional rename / re-voice |
| Skills | Answer Questions, Transfer to Human, Extract Information, Take a Message (all four enabled) | Transfer rule pattern + targets; SMS body (if used); Extract Information schema confirmation |
| Scenarios | 5 guardrail scenarios | Optional edits |
| **Knowledge Base** | **— (empty state only)** | **All documents (REQUIRED for Answer Questions to work)** |
| Call Flow Designer | — | Pattern A or B + inbound number + fallback branch |

---

## Step 1 — Agent profile

| UI field | Notion source | Prototype value (seeded) | Notes |
|---|---|---|---|
| **Name** | §Step 1 · Name | `During-Hours AI Receptionist` | Internal label; user may rename. Field hint: "An internal name to help your team identify this agent." |
| **Call Direction** | Playbook header (`Direction: Inbound`) | `Inbound` (Inbound card active) | The template is during-hours inbound only. After-hours is a separate playbook (02B) and a separate agent. |
| **Language** | §Step 1 · Language | `en-US`, `es-ES` | Multi-select. The Notion says "agent detects automatically." Confirm runtime behavior with engineering (auto-detect vs caller-prompted). |
| **Voice** | §Step 1 · Voice | `Maya` · EN · Standard · `+ 1 more` | Voice selector shows the primary voice + secondary count. "Change voice" opens the voice library (TBD). |
| **Goal** | §Step 1 (note) | **empty — by design** | ⚠️ The Notion playbook explicitly says: *"The AI Receptionist wizard does not include a freeform Goal Prompt field. Goal prompts are only available in the **Custom template type**."* For this template the agent's behavior is driven by the seeded skills + scenarios. |
| **Greeting** | §Step 1 · Example greeting | `"Hey there, thanks for calling [Clinic Name]! I'm Aria, your AI assistant. Quick note — many things are faster through our patient portal at [website]. Otherwise, just tell me what's on your mind."` | Field hint: "If empty, the agent will not initiate conversation." Follows the Notion pattern: *greet → mention faster channel → open for question*. |

---

## Step 2 — Skills

All four Notion-recommended skills are pre-enabled by the template.

| UI label | Notion skill | Pre-state | Customer must configure |
|---|---|---|---|
| **Answer Questions** | Answer Questions | Enabled · Recommended | Fallback option (Be honest / Guide to other topics / **Hand over to a person ← recommended**) and target group. *Does nothing without KB content.* |
| **Transfer to Human** | Transfer to Human | Enabled · Recommended | Transfer rule pattern (one of three below). Ask-for-confirmation toggle (recommended: ON). Context shared with agent: caller name + AI-generated summary. |
| **Extract Information** | Extract Information | Enabled · Recommended | Confirm the four property schemas at integration time; do not allow renames post-launch (breaks CRM webhooks). |
| **Take a Message** | Take a Message | Enabled · Optional | Add an explicit scenario to invoke it; the skill does not proactively offer message-taking. |

### Transfer rule patterns (customer chooses one)

Engineering should support all three; the template does **not** seed a specific rule.

1. **Topic-based** — route by what the caller is calling about *(Notion: "Topic-based routing")*
2. **Capability-based** — transfer when the AI can't answer *(Notion: "Capability-based routing")*
3. **Single-agent** — small team, one person handles all escalations *(Notion: "Single-agent routing")*

> ⚠️ The AI Voice Agent does **not** check agent availability before transferring. The customer must configure a fallback branch in Call Flow Designer for when no one answers.

### Extract Information — property schema

From the Notion playbook. Property names are **case-sensitive** and **must not be renamed after go-live** (breaks CRM integrations).

| Property | Type | Instruction for AI |
|---|---|---|
| `CallSummary` | Text | A 2–3 sentence summary. Include the question and how it was resolved. |
| `ReasonForCall` | Text | Primary reason for calling. Use `""` if not clearly stated. |
| `CallTransferred` | Yes/No | `Yes` if transferred to a human. Default: `No`. |
| `QuestionAnswered` | Yes/No | `Yes` if AI fully resolved without a transfer. Default: `No`. |

**Key metric: `QuestionAnswered`.** Below 40% → KB needs more / better content. Above 70% → agent is performing well. Track from day one.

---

## Step 3 — Knowledge Base — **CUSTOMER-SUPPLIED**

> ### 🚫 The system cannot add Knowledge Base content
>
> Every customer's KB is **domain-specific** — there is no generic content the template could pre-fill. The Knowledge Sources card in the prototype renders an empty state on a fresh template and the customer must upload their own documents before the Answer Questions skill produces useful output.

### What engineering must ensure

- Knowledge Sources card is visible and reachable in the agent editor.
- *Add files* split-combo button opens the upload flow; the dropdown caret should expose *Upload new* and *Pick from existing KB*.
- When the agent has zero KB sources, render the empty-state card ("No knowledge added yet" + the CTA copy).
- The Answer Questions skill stays enabled by default, but its fallback option must be configurable (default: *Hand over to a person*).

### What the customer must own

Surface this in onboarding / docs / a tooltip — **not in the agent editor itself**, to avoid clutter.

- **Quality > quantity.** Conflicting, duplicated, or outdated docs make the agent worse, not better.
- **One source of truth per topic.** Q&A format or short direct paragraphs beat dumped T&Cs.
- **Current.** Outdated info is worse than no info.
- **Scoped to actual call topics.** Cover the 20 questions you hear most.
- **Watch `QuestionAnswered`.** Below 40% means rewrite content — not always *add* more.

---

## Step 4 — Scenarios

Five guardrail scenarios pre-seeded by the template:

| When | Reply | Action |
|---|---|---|
| Caller says goodbye or has no more questions | "You're welcome! Have a great rest of your day. Goodbye!" | Hangup |
| Caller idle for 15+ seconds | "I haven't heard anything — are you still there? Feel free to call back anytime." | Hangup |
| Caller asks to speak to a human | "Of course — let me connect you with the team now." | Transfer call |
| Topic is outside the Knowledge Base | "That's a bit outside what I can help with. Let me connect you with the team." | Transfer call |
| Caller asks if they're speaking to a human | "I'm an AI assistant for [Clinic Name]. How can I help?" | Response only |

> Notion: "Your goal prompt handles normal behaviour. Scenarios are guardrails for edge cases only."

---

## Step 5 — Call Flow Designer

Two patterns the customer chooses between — **not seeded** by the template; must be set in CFD.

**Pattern A — AI first, every call** *(high volume)*
```
Inbound call → AI Voice Agent
  ├─ AI resolves → Call ends
  └─ AI transfers → Group → [Destination Team]
                      └─ Unanswered → Fallback (voicemail / message)
```

**Pattern B — Humans first, AI as overflow** *(smaller teams)*
```
Inbound call → Ring [Agent Group] (20–30 sec)
  ├─ Answered → Human handles call
  └─ Unanswered → AI Voice Agent
                    ├─ AI resolves → Call ends
                    └─ AI transfers → Group → [Destination Team]
```

> ⚠️ The AI Voice Agent must be the **last step** in any call flow branch — nothing comes after it.
> ⚠️ During-hours and after-hours agents are **different agents**. Use a Time Router in CFD to send calls to the right one. After-hours setup → Notion Playbook 02B.

---

## Expected results (from the Notion playbook)

For pitch decks / customer expectations, not for the editor UI.

| Metric | Lift |
|---|---|
| Routine calls resolved by AI | Up to 60% |
| Agent pickup rate | +7–10% |
| Wrong-team transfers | ~0% |

Case studies referenced in Notion: Autenti (verified quote, Michał Jarlaczyński), GovPlus, BikeUP.

---

## Open questions for engineering

1. **Voice catalog.** The prototype shows `Maya` + "+1 more". What's the real default voice for healthcare, and how does the "+N more" pill expand — popover list, nav into a voice library, or a full modal?
2. **Multi-language detection.** Notion says "agent detects automatically." Confirm: auto-detect on first caller utterance, vs explicit caller-prompted language picker, vs split agents per language.
3. **Extract Information schema enforcement.** Are property names enforced at the database level, or only at the integration webhook? If only at the webhook, what guardrails prevent rename-after-launch?
4. **Scenario priorities.** When two scenarios match (e.g., "goodbye" + "outside KB"), which fires first? Order in the prototype, explicit priority field, or first-match-wins?
5. **Knowledge Base entry point.** Confirm where the *Add files* / *Open Knowledge Base* actions navigate — in-page modal vs separate route — and whether the dropdown caret is required for v1.
6. **Sticky edit bar.** The prototype mounts a sticky "You have unsaved changes" bar; confirm the dirty-tracking spec (which fields trigger it, what *Discard* reverts to).
7. **Goal field visibility.** Since the AI Receptionist template intentionally has no Goal field per the Notion playbook, should the field be **hidden** entirely on this template (current prototype shows it empty), or kept visible as a no-op for consistency with Custom templates?

---

*Spec mirrors the [During-Hours AI Receptionist Notion playbook](https://www.notion.so/cloudtalkio/During-Hours-AI-Receptionist-36e2bccf284f81119288c917c8aeb293) and the [va-prototype template](https://va-prototype-umber.vercel.app/). Last updated: 2026-05-29.*
