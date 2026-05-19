/* ============================================================
   Templates (12 across 4 categories)
   ============================================================ */
const TEMPLATES = [
  // Receptionist
  { id:'hotel', cat:'receptionist', direction:'Inbound', name:'Hotel FrontDesk Agent',
    desc:'Provide 24/7 coverage for inquiries and bookings, reduce front-desk load, and enhance guest experience.',
    avatar:{ class:'av-green', icon:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21V8l9-5 9 5v13"/><path d="M9 22V12h6v10"/></svg>` },
    role:'AI Receptionist · Hospitality', industry:'Hospitality',
    languages:['en-US','en-GB'], voices:['en-US:Hugo','en-GB:Hugo'],
    greeting:"Good evening, thanks for calling [Hotel Name]. How can I help you tonight?",
    preview:{ user:"Hi, do you have a room available this Friday?", reply:"Yes — for how many guests, and how many nights?" } },
  { id:'restaurant', cat:'receptionist', direction:'Inbound', name:'Restaurant Receptionist',
    desc:'Automate reservation handling and reduce front-of-house call burden by managing reservations, FAQs, and pickup orders.',
    avatar:{ class:'av-blue', icon:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 2v7a3 3 0 0 0 3 3v10"/><path d="M9 2v7a3 3 0 0 1-3 3"/><path d="M18 2v20"/><path d="M14 2c0 4 4 6 4 6"/></svg>` },
    role:'AI Receptionist · Restaurants', industry:'Restaurants',
    languages:['en-US','it-IT'], voices:['en-US:Sofia','it-IT:Sofia'],
    greeting:"Ciao! You've reached [Restaurant Name]. Would you like to book a table or check on an order?",
    preview:{ user:"Can I book a table for two tonight?", reply:"Absolutely — what time works for you?" } },
  { id:'healthcare', cat:'receptionist', direction:'Inbound', name:'Healthcare Receptionist',
    desc:'Medical facility front-desk: triage incoming patient calls and schedule appointments.',
    avatar:{ class:'av-shiraz', icon:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>` },
    role:'AI Receptionist · Healthcare', industry:'Healthcare',
    languages:['en-US','es-ES'], voices:['en-US:Maya','es-ES:Maya'],
    greeting:"Hello, you've reached [Clinic Name]. Are you calling to book an appointment, or is this urgent?",
    preview:{ user:"Hi, I need to reschedule my appointment for Thursday.", reply:"Of course — I see your appointment with Dr. Lee on Thursday at 2pm. What works better for you?" } },

  // Customer Support
  { id:'tech-l1', cat:'support', direction:'Inbound', name:'Tech L1 Support Agent',
    desc:'Reduce burden on support teams; handle repetitive L1 tickets and route complex issues.',
    avatar:{ class:'av-ultra', icon:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>` },
    role:'L1 Support · SaaS', industry:'SaaS / Software',
    languages:['en-US','es-ES'], voices:['en-US:Tessa','es-ES:Tessa'],
    greeting:"Hi! You've reached [Product] support. What can I help you with today?",
    preview:{ user:"My dashboard isn't loading — it just spins.", reply:"Got it. Let's try a refresh first — are you on Chrome or Safari?" } },
  { id:'order-status', cat:'support', direction:'Inbound', name:'E-commerce Order Status Assistant',
    desc:'Highest-volume e-commerce use case: confirm orders, track shipping, handle returns.',
    avatar:{ class:'av-yellow', icon:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><circle cx="8" cy="14" r="1"/></svg>` },
    role:'L1 Support · E-commerce', industry:'E-commerce',
    languages:['en-US','en-AU'], voices:['en-US:Olivia','en-AU:Olivia'],
    greeting:"Hi! Looking for your order status? I can help — what's the order number?",
    preview:{ user:"Where is my order #4521?", reply:"Shipped yesterday, arriving Friday. Want the tracking link via SMS?" } },
  { id:'finance-l1', cat:'support', direction:'Inbound', name:'Finance L1 Support Agent',
    desc:'Pairs with the finance qualifier. Verifies caller, answers FAQs, escalates regulated issues.',
    avatar:{ class:'av-shiraz', icon:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>` },
    role:'L1 Support · FinTech', industry:'FinTech / FinServ',
    languages:['en-US','de-DE'], voices:['en-US:Felix','de-DE:Felix'],
    greeting:"Hello, you've reached [Fintech] support. To get started I'll need to verify your identity — could you confirm your account email?",
    preview:{ user:"I see a charge I don't recognize on my account.", reply:"I can help. First, could you confirm the email on your account?" } },

  // Outbound
  { id:'sales-offer', cat:'outbound', direction:'Outbound', name:'Sales Offer Reminder',
    desc:'Drives conversion by reminding prospects of expiring offers with a clear next step.',
    avatar:{ class:'av-brand', icon:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>` },
    role:'Outbound Sales · SaaS', industry:'SaaS / Software',
    languages:['en-US'], voices:['en-US:Ryan'],
    greeting:"Hi {{firstName}}, this is Ryan from [Brand]. Reaching out about the offer expiring this Friday — got a quick minute?",
    preview:{ user:"Yeah, what's this about?", reply:"Your 30%-off renewal window closes Friday. Got 90 seconds for the highlights?" } },
  { id:'renewal', cat:'outbound', direction:'Outbound', name:'Renewal Reminder',
    desc:'Protects revenue by reminding customers ahead of renewal and answering blockers.',
    avatar:{ class:'av-green', icon:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10"/><polyline points="1 20 1 14 7 14"/><path d="M20.49 15a9 9 0 0 1-14.85 3.36L1 14"/></svg>` },
    role:'Outbound Renewal · Insurance', industry:'Insurance',
    languages:['en-GB','fr-FR'], voices:['en-GB:Nora','fr-FR:Nora'],
    greeting:"Hi {{firstName}}, this is Nora calling about your renewal coming up on {{date}} — got 30 seconds?",
    preview:{ user:"When's it renewing again?", reply:"Your plan renews on the 14th — want the e-signature link to lock it in?" } },
  { id:'debt', cat:'outbound', direction:'Outbound', name:'Debt Collection Reminder',
    desc:'Polite, regulated outbound for overdue balances — empathetic and compliant.',
    avatar:{ class:'av-shiraz', icon:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>` },
    role:'Outbound Collections · FinTech', industry:'FinTech / FinServ',
    languages:['en-US'], voices:['en-US:Sam'],
    greeting:"Hello, this is Sam from [Company]. I'm calling about invoice #{{invoice}}. Is now a good time to talk?",
    preview:{ user:"I need a bit more time.", reply:"Totally understand. I can offer three plan options — want me to run through them?" } },

  // Lead Qualification
  { id:'sales-qual', cat:'qualification', direction:'Outbound', name:'General Sales Pre-qualification',
    desc:'Horizontal baseline: qualify inbound or form-fill leads with BANT-style questions.',
    avatar:{ class:'av-ultra', icon:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3 8-8"/><path d="M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h11"/></svg>` },
    role:'SDR / Pre-qualifier · SaaS', industry:'SaaS / Software',
    languages:['en-US'], voices:['en-US:Maya'],
    greeting:"Hi {{firstName}}, this is Maya from [Brand]. Saw you filled out a form on our site — can I ask a few quick questions?",
    preview:{ user:"Can you tell me more about pricing?", reply:"Absolutely — we have three plans: Starter, Pro, and Enterprise. Want a quick rundown, or can I help you pick the best fit?" } },
  { id:'finance-qual', cat:'qualification', direction:'Outbound', name:'Finance Pre-qualification (Mortgage/Insurance)',
    desc:'Vertical-tuned for financial-services lead screening: assets, intent, eligibility.',
    avatar:{ class:'av-green', icon:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>` },
    role:'Pre-qualifier · FinServ', industry:'FinTech / FinServ',
    languages:['en-US'], voices:['en-US:Eva'],
    greeting:"Hi, this is Eva from [FinServ]. I can help you check if you pre-qualify — could you tell me what product you're exploring?",
    preview:{ user:"I'm looking at a mortgage refinance.", reply:"Got it. To check eligibility I'll ask three quick questions — sound good?" } },
  { id:'realestate', cat:'qualification', direction:'Outbound', name:'Real Estate Qualification',
    desc:'Qualifies property inquiries for agents and brokers — budget, timeline, area.',
    avatar:{ class:'av-yellow', icon:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21V8l9-5 9 5v13"/><path d="M9 22V12h6v10"/></svg>` },
    role:'Inquiry Qualifier · Real Estate', industry:'Real Estate',
    languages:['en-US','de-DE'], voices:['en-US:Lukas','de-DE:Lukas'],
    greeting:"Hi, this is Lukas from [Agency]. Are you looking to buy or rent, and what neighbourhood are you exploring?",
    preview:{ user:"I saw a listing on Hill St — still available?", reply:"Yes, still on the market. Open to a viewing this weekend?" } },
];

const CAT_LABEL = { receptionist:'Receptionist', support:'Customer Support', outbound:'Outbound', qualification:'Lead Qualification' };
const LANG_LABEL = {
  'en-US':{flag:'🇺🇸',name:'English (US)'},
  'en-GB':{flag:'🇬🇧',name:'English (UK)'},
  'en-AU':{flag:'🇦🇺',name:'English (AU)'},
  'es-ES':{flag:'🇪🇸',name:'Spanish (ES)'},
  'fr-FR':{flag:'🇫🇷',name:'French (FR)'},
  'de-DE':{flag:'🇩🇪',name:'German (DE)'},
  'it-IT':{flag:'🇮🇹',name:'Italian (IT)'},
};

/* ============================================================
   Render templates grid
   ============================================================ */
function renderCards(){
  ['receptionist','support','outbound','qualification'].forEach(c => {
    const el = document.getElementById('grid-'+c);
    el.innerHTML = TEMPLATES.filter(t => t.cat === c).map(t => `
      <div class="tpl-card" onclick="openAgent('${t.id}')">
        <div class="tpl-default">
          <div class="avatar-tpl ${t.avatar.class}">${t.avatar.icon}</div>
          <div class="title">${t.name}</div>
          <div class="desc">${t.desc}</div>
          <div class="meta"><span class="chip chip-dir chip-dir-${t.direction.toLowerCase()}">${t.direction}</span><span class="chip">${t.industry}</span></div>
        </div>
        <div class="tpl-preview">
          <div class="bubble bubble-user">${t.preview.user}</div>
          <div class="bubble bubble-agent"><span class="avatar-tpl avatar-tpl-sm ${t.avatar.class}">${t.avatar.icon}</span><span class="bubble-text">${t.preview.reply}</span></div>
          <div class="tpl-name-row"><span class="avatar-tpl avatar-tpl-sm ${t.avatar.class}">${t.avatar.icon}</span><span class="tpl-name">${t.name}</span></div>
        </div>
      </div>`).join('');
  });
}
renderCards();

/* Filter / search */
document.querySelectorAll('#catFilter button').forEach(b => b.addEventListener('click', () => {
  document.querySelectorAll('#catFilter button').forEach(x => x.classList.remove('active'));
  b.classList.add('active');
  const c = b.dataset.cat;
  document.querySelectorAll('.category').forEach(cat => cat.style.display = (c === 'all' || cat.dataset.cat === c) ? '' : 'none');
}));
document.getElementById('searchInput').addEventListener('input', e => {
  const q = e.target.value.toLowerCase().trim();
  document.querySelectorAll('.tpl-card').forEach(card => {
    card.style.display = (!q || card.textContent.toLowerCase().includes(q)) ? '' : 'none';
  });
});

/* ============================================================
   Skills & Scenarios defaults (per template)
   ============================================================ */
const DEFAULT_KB = [
  { name:'Tech-design-requirements.pdf', size:'200 KB' },
  { name:'Tech-design-requirements.pdf', size:'200 KB' },
  { name:'Tech-design-requirements.pdf', size:'200 KB' },
  { name:'Tech-design-requirements.pdf', size:'200 KB' },
];

const ALL_SKILLS = [
  { id:'take_message', name:'Take a message', desc:'Allows the caller to leave a message' },
  { id:'extract_data', name:'Extract Data',   desc:'Pull data from the conversation' },
  { id:'answer',       name:'Answer Questions', desc:'Based on attached knowledge base' },
  { id:'transfer',     name:'Transfer to Human', desc:'Routes caller to the right person at the right time' },
  { id:'custom',       name:'Custom',         desc:'Configure your own skill' },
];

/* Per-template skill enabled set + scenarios */
const TEMPLATE_SKILLS = {
  hotel:        ['take_message','answer','transfer'],
  restaurant:   ['take_message','extract_data','transfer'],
  healthcare:   ['take_message','answer','transfer'],
  'tech-l1':    ['take_message','extract_data','answer','transfer'],
  'order-status':['extract_data','answer'],
  'finance-l1': ['answer','transfer'],
  'sales-offer':['extract_data','transfer'],
  renewal:      ['extract_data','transfer'],
  debt:         ['extract_data','transfer'],
  'sales-qual': ['extract_data','transfer'],
  'finance-qual':['extract_data','transfer'],
  realestate:   ['extract_data','transfer'],
  blank: [],
};
const TEMPLATE_SCENARIOS = {
  hotel: [
    { when:'Caller asks for booking link', reply:'"Let me send that to you via SMS."', action:'Send sms' },
    { when:'Caller asks about local restaurants', reply:'"I can share a list of our partner restaurants."', action:'Send sms' },
  ],
  restaurant: [
    { when:'Caller wants to reserve a table', reply:'"Sure — for how many people, and what time?"', action:'Book reservation' },
  ],
  healthcare: [
    { when:'Caller describes emergency symptoms', reply:"\"Transferring you to a nurse right away.\"", action:'Transfer call' },
    { when:'Caller asks for appointment booking', reply:'"I can find a slot — what day works best?"', action:'Book appointment' },
  ],
  'tech-l1': [
    { when:'Caller asks for booking link', reply:'"Let me send that to you via SMS."', action:'Send sms' },
    { when:'Caller asks for booking link', reply:'"Let me send that to you via SMS."', action:'Send sms' },
  ],
  'order-status': [
    { when:'Caller asks for tracking link', reply:'"Sending the tracking link to your phone now."', action:'Send sms' },
  ],
  'finance-l1': [
    { when:'Caller wants to dispute a transaction', reply:'"Let me connect you with a licensed agent."', action:'Transfer call' },
  ],
  'sales-offer': [
    { when:'Caller wants to book a closing call', reply:'"Great — I have Thursday at 2pm open."', action:'Book meeting' },
  ],
  renewal: [
    { when:'Caller wants to renew now', reply:'"Sending the e-signature link via SMS."', action:'Send sms' },
  ],
  debt: [
    { when:'Caller asks for a payment plan', reply:'"I can offer 3 plan options — which works best?"', action:'Send sms' },
  ],
  'sales-qual': [
    { when:'Lead qualifies (BANT pass)', reply:'"Booking your discovery call now."', action:'Book meeting' },
  ],
  'finance-qual': [
    { when:'Lead pre-qualifies', reply:'"Routing you to a licensed broker."', action:'Transfer call' },
  ],
  realestate: [
    { when:'Caller wants a viewing', reply:'"I have Saturday morning open — works for you?"', action:'Book viewing' },
  ],
  blank: [],
};

/* ============================================================
   Open agent (template → editor)
   ============================================================ */
function openAgent(id){
  let t;
  if (id === 'blank') {
    t = { id:'blank', name:'New VoiceAgent', role:'Untitled · Draft', industry:'',
          languages:['en-US'], voices:['en-US:Nova'],
          greeting:'Hi! Thanks for calling. How can I help today?',
          avatar:{class:'av-brand'} };
  } else {
    t = TEMPLATES.find(x => x.id === id);
  }
  // header
  setCrumb(t.name);
  document.getElementById('agentName').textContent = t.name;
  document.getElementById('agentRole').textContent = t.role;
  document.getElementById('flowCount').textContent = id === 'blank' ? 'not in any workflow yet' : `in ${1 + Math.floor(Math.random()*5)} call workflows`;
  document.getElementById('agentAv').textContent = id === 'blank' ? '+' : 'AI';

  // form fields
  document.getElementById('fldName').value = t.name;
  document.getElementById('fldGreeting').value = t.greeting;
  renderTags('fldLang', t.languages);
  renderTags('fldVoice', t.voices.map(v => v.split(':')[0]));

  // KB
  const kbList = document.getElementById('kbList');
  const kbDocs = id === 'blank' ? [] : DEFAULT_KB;
  document.getElementById('kbCount').textContent = kbDocs.length
    ? `${kbDocs.length} documents uploaded — used by this agent to answer questions`
    : 'No documents uploaded yet';
  kbList.innerHTML = kbDocs.map(d => `
    <div class="kb-row">
      <div class="l">
        <div class="pdficon"></div>
        <div>
          <div class="name">${d.name}</div>
          <div class="size">${d.size} · <span class="check"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg> Complete</span></div>
        </div>
      </div>
      <button class="btn-link">Unlink from Agent</button>
    </div>`).join('');

  // Skills
  const enabled = new Set(TEMPLATE_SKILLS[t.id] || []);
  document.getElementById('skillsList').innerHTML = ALL_SKILLS.map(s => {
    const on = enabled.has(s.id);
    return `<div class="skill-row">
      <div class="l">
        <div class="head"><span class="name">${s.name}</span>${on ? '<span class="badge-added">ADDED</span>' : ''}</div>
        <div class="desc">${s.desc}</div>
      </div>
      ${on
        ? `<button class="edit-btn"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"/></svg> Edit</button>`
        : `<button class="add-btn"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Add</button>`}
    </div>`;
  }).join('');

  // Scenarios
  const scenarios = TEMPLATE_SCENARIOS[t.id] || [];
  document.getElementById('scenariosList').innerHTML = scenarios.length
    ? scenarios.map(s => `
        <div class="scenario-card">
          <div class="scenario-head">
            <span class="label">Template</span>
            <div class="ctrls">
              <button class="ctrl" title="Duplicate"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg></button>
              <button class="ctrl" title="Edit"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"/></svg></button>
              <button class="ctrl danger" title="Delete"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg></button>
            </div>
          </div>
          <div class="scenario-body">
            <div class="key">When</div><div class="val">${s.when}</div>
            <div class="key">Reply</div><div class="val quote">${s.reply}</div>
            <div class="key">Action</div><div class="action-text">${s.action.replace(/sms/gi,'SMS')}</div>
          </div>
        </div>`).join('')
    : `<div style="padding:24px;text-align:center;color:var(--text-tertiary);font-size:13px;border:1px dashed var(--border);border-radius:var(--radius-md)">No scenarios yet. Click "Add scenario" to create your first trigger → reply → action.</div>`;

  // Advanced (JSON config) — set baseline for this template
  loadBaselineForTemplate(t, kbDocs, enabled, scenarios);

  // Switch view
  ['viewList','viewTemplates'].forEach(id => document.getElementById(id).classList.remove('active'));
  document.getElementById('viewEditor').classList.add('active');
  // Default to Form mode
  setMode('form');
  document.querySelector('.content').scrollTop = 0;
}
function showList(){
  ['viewTemplates','viewEditor'].forEach(id => document.getElementById(id).classList.remove('active'));
  document.getElementById('viewList').classList.add('active');
  setCrumb('');
  document.querySelector('.content').scrollTop = 0;
}
function showTemplates(){
  ['viewList','viewEditor'].forEach(id => document.getElementById(id).classList.remove('active'));
  document.getElementById('viewTemplates').classList.add('active');
  setCrumb('New VoiceAgent');
  document.querySelector('.content').scrollTop = 0;
}
function setCrumb(leaf){
  const sep = document.getElementById('crumbSep');
  const el = document.getElementById('crumbLeaf');
  if (leaf) { sep.style.display=''; el.textContent = leaf; }
  else { sep.style.display='none'; el.textContent = ''; }
}

/* Tag rendering */
function renderTags(id, codes){
  const wrap = document.getElementById(id);
  wrap.innerHTML = codes.map(c => {
    const meta = LANG_LABEL[c] || {flag:'🌐',name:c};
    return `<span class="tag"><span class="flag">${meta.flag}</span> ${meta.name} <button class="x">×</button></span>`;
  }).join('') + `<button class="btn-ghost" style="padding:4px 8px;font-size:13px">+ Add</button>`;
}

/* Mode toggle (Form / Advanced) */
function setMode(m){
  document.querySelectorAll('#modeToggle button').forEach(b => b.classList.toggle('active', b.dataset.mode === m));
  document.getElementById('modeForm').classList.toggle('active', m === 'form');
  document.getElementById('modeAdvanced').classList.toggle('active', m === 'advanced');
}
document.querySelectorAll('#modeToggle button').forEach(b => b.addEventListener('click', () => setMode(b.dataset.mode)));

/* ============================================================
   Advanced editor — Tessa-style behavior:
   per-template baseline → live validation, diff, save/import/discard,
   paste detection, repair panel, toast.
   ============================================================ */
const SECTION_NAMES = {
  identity:'Identity', voice:'Voice', behavior:'Behavior',
  transcriber:'Transcriber', skills:'Skills', scenarios:'Scenarios',
  clientMessages:'Client messages', '$schema':'Schema', id:'ID', knowledge:'Knowledge'
};

let baselineConfig = null;
let baselineText = '';
let version = 12;
let lastValidation = { errors:[], warnings:[], parsed:null };

const editorInput      = document.getElementById('editorInput');
const editorHighlight  = document.getElementById('editorHighlight');
const editorGutterInner= document.getElementById('editorGutterInner');
const statusStrip      = document.getElementById('statusStrip');
const statusDot        = document.getElementById('statusDot');
const statusText       = document.getElementById('statusText');
const linesCountEl     = document.getElementById('cfgLines');
const saveBtn          = document.getElementById('saveBtn');
const saveCountEl      = document.getElementById('saveCount');
const discardBtn       = document.getElementById('discardBtn');
const pasteNotice      = document.getElementById('pasteNotice');
const pasteNoticeCount = document.getElementById('pasteNoticeCount');
const pendingBanner    = document.getElementById('pendingBanner');
const pendingCount     = document.getElementById('pendingCount');
const repairPanel      = document.getElementById('repairPanel');
const repairList       = document.getElementById('repairList');

function stringify(o){ return JSON.stringify(o, null, 2); }
function esc(s){ return String(s).replace(/[&<>]/g, c => c==='&'?'&amp;':c==='<'?'&lt;':'&gt;'); }

/* Build a config object from a template */
function buildConfig(t, kbDocs, enabledSet, scenarios){
  const cfg = {
    "$schema": "voiceagent@1.4",
    "id": "tpl-" + (t.id || 'blank'),
    "identity": {
      "name": t.name,
      "role": t.role || '',
      "languages": t.languages || ['en-US']
    },
    "voice": {
      "provider": "elevenlabs",
      "voiceIds": (t.voices || []).reduce((acc, v) => {
        const [lang, voice] = v.split(':');
        acc[lang] = (voice || 'default').toLowerCase();
        return acc;
      }, {}),
      "speed": 1.0,
      "interruptible": true
    },
    "behavior": {
      "model": "claude-sonnet-4-6",
      "tone": "warm",
      "greeting": t.greeting || "Hello, how can I help today?",
      "maxTurnSec": 30
    },
    "transcriber": {
      "provider": "deepgram",
      "language": (t.languages && t.languages[0] || 'en-US').split('-')[0],
      "fallbackPlan": { "autoFallback": { "enabled": true } },
      "confidenceThreshold": 0.4
    },
    "skills": [],
    "scenarios": [],
    "clientMessages": ["conversation-update","function-call","transcript","tool-calls"]
  };
  if (kbDocs && kbDocs.length){
    cfg.knowledge = { sources: kbDocs.map(d => ({ type:'pdf', name:d.name, size:d.size, status:'complete' })) };
  }
  if (enabledSet.has('extract_data')) cfg.skills.push({ name:'extract_data', type:'extract', fields:['customer_name','phone'] });
  if (enabledSet.has('take_message')) cfg.skills.push({ name:'take_message', type:'message' });
  if (enabledSet.has('answer'))       cfg.skills.push({ name:'answer_questions', type:'rag', source:'knowledge_base' });
  if (enabledSet.has('transfer'))     cfg.skills.push({ name:'transfer_to_human', type:'transfer', target:'queue:default' });
  if (enabledSet.has('custom'))       cfg.skills.push({ name:'custom_skill', type:'custom' });
  (scenarios || []).forEach(s => {
    let action = {};
    const a = s.action.toLowerCase();
    if (a.includes('sms'))            action = { type:'send_sms', template:'${booking.smsTemplate}' };
    else if (a.includes('transfer'))  action = { type:'transfer', target:'queue:agents' };
    else if (a.includes('reservation'))action = { type:'booking', system:'opentable' };
    else if (a.includes('appointment'))action = { type:'booking', system:'calendar' };
    else if (a.includes('meeting'))   action = { type:'booking', system:'salesloft' };
    else if (a.includes('viewing'))   action = { type:'booking', system:'crm' };
    cfg.scenarios.push({
      trigger: s.when.toLowerCase(),
      reply: s.reply.replace(/^"|"$/g,''),
      action
    });
  });
  return cfg;
}

/* Load a per-template baseline (called when openAgent runs) */
function loadBaselineForTemplate(t, kbDocs, enabledSet, scenarios){
  baselineConfig = buildConfig(t, kbDocs, enabledSet, scenarios);
  baselineText = stringify(baselineConfig);
  editorInput.value = baselineText;
  version = 12;
  hidePasteNotice();
  onInput();
  syncScroll();
}

/* Line diff: returns 'added'|'modified'|'unchanged' per line */
function computeLineDiff(orig, curr){
  const a = orig.split('\n'), b = curr.split('\n');
  return b.map((l,i) => i >= a.length ? 'added' : (l !== a[i] ? 'modified' : 'unchanged'));
}

/* Syntax highlight + line wrapping for diff tinting */
function tokenize(line){
  let s = esc(line);
  s = s.replace(/\$\{[^}]+\}/g, m => `<span class="tk-tmpl">${m}</span>`);
  s = s.replace(/("(?:[^"\\]|\\.)*")(\s*:)/g, '<span class="tk-key">$1</span><span class="tk-punct">$2</span>');
  s = s.replace(/("(?:[^"\\]|\\.)*")(?=\s*[,\]\n}]|$)/g, m => `<span class="tk-str">${m}</span>`);
  s = s.replace(/\b(true|false|null)\b/g, m => `<span class="tk-bool">${m}</span>`);
  s = s.replace(/(?<![\w."])(-?\d+\.?\d*)(?![\w"])/g, m => `<span class="tk-num">${m}</span>`);
  s = s.replace(/([{}\[\],])/g, m => `<span class="tk-punct">${m}</span>`);
  return s;
}
function renderHighlight(text){
  const diff = computeLineDiff(baselineText, text);
  const errSet = new Set();
  lastValidation.errors.forEach(e => { if (e.line) errSet.add(e.line); });
  return text.split('\n').map((line, i) => {
    let cls = 'line';
    const ln = i + 1;
    if (errSet.has(ln))            cls += ' line-error';
    else if (diff[i] === 'added')  cls += ' line-added';
    else if (diff[i] === 'modified') cls += ' line-modified';
    return `<div class="${cls}">${tokenize(line) || ' '}</div>`;
  }).join('');
}
function renderGutter(text){
  const diff = computeLineDiff(baselineText, text);
  const errSet = new Set();
  lastValidation.errors.forEach(e => { if (e.line) errSet.add(e.line); });
  const lines = text.split('\n');
  let html = '';
  for (let i = 0; i < lines.length; i++){
    const ln = i+1;
    let cls = 'gutter-line';
    if (errSet.has(ln))            cls += ' error';
    else if (diff[i] === 'added')  cls += ' added';
    else if (diff[i] === 'modified') cls += ' modified';
    html += `<div class="${cls}"><span class="marker"></span><span class="num">${ln}</span></div>`;
  }
  editorGutterInner.innerHTML = html;
}

/* ---------- Validation ---------- */
function findLineContaining(text, snippet){
  const lines = text.split('\n');
  for (let i = 0; i < lines.length; i++) if (lines[i].includes(snippet)) return i+1;
  return null;
}
function findSyntaxLine(msg, text){
  const m = /position (\d+)/.exec(msg);
  if (!m) return null;
  const pos = parseInt(m[1], 10);
  let line = 1;
  for (let i = 0; i < pos && i < text.length; i++) if (text.charAt(i) === '\n') line++;
  return line;
}
function validateSchema(parsed, text){
  const errors = [], warnings = [];
  if (!parsed.identity || typeof parsed.identity !== 'object'){
    errors.push({ msg:'Missing required section <code>identity</code>', fixes:[{label:'Restore from saved', action:'insertSection', params:{section:'identity'}, primary:true}] });
  }
  if (!parsed.voice || typeof parsed.voice !== 'object'){
    errors.push({ msg:'Missing required section <code>voice</code>', fixes:[{label:'Restore from saved', action:'insertSection', params:{section:'voice'}, primary:true}] });
  }
  if (!parsed.behavior || typeof parsed.behavior !== 'object'){
    errors.push({ msg:'Missing required section <code>behavior</code>', fixes:[{label:'Restore from saved', action:'insertSection', params:{section:'behavior'}, primary:true}] });
  }
  if (parsed.identity && typeof parsed.identity === 'object'){
    const langs = parsed.identity.languages;
    const missing = !('languages' in parsed.identity) || (Array.isArray(langs) && langs.length === 0);
    if (missing){
      const line = findLineContaining(text, '"languages":') || findLineContaining(text, '"identity":');
      warnings.push({ line, msg:'No language set — default <code>en-US</code> will be used on save.',
        fixes:[{label:'Add en-US', action:'addLanguage', params:{value:'en-US'}, primary:true},
               {label:'Add en-GB', action:'addLanguage', params:{value:'en-GB'}}]});
    }
  }
  if (parsed.behavior && typeof parsed.behavior === 'object'){
    const g = parsed.behavior.greeting;
    if (g === '' || !('greeting' in parsed.behavior)){
      const line = findLineContaining(text, '"greeting":') || findLineContaining(text, '"behavior":');
      warnings.push({ line, msg:'No greeting — a default will be used: <code>"Hello, how can I help today?"</code>',
        fixes:[{label:'Set default greeting', action:'setGreeting', params:{value:'Hello, how can I help today?'}, primary:true}]});
    }
  }
  if (parsed.voice && typeof parsed.voice.speed === 'number'){
    const s = parsed.voice.speed;
    const line = findLineContaining(text, '"speed":');
    if (s < 0.5) errors.push({ line, msg:`<code>voice.speed</code> (${s}) below minimum (0.5)`, fixes:[{label:'Set to 0.5', action:'setSpeed', params:{value:0.5}, primary:true}]});
    else if (s > 1.5) errors.push({ line, msg:`<code>voice.speed</code> (${s}) above maximum (1.5)`, fixes:[{label:'Set to 1.5', action:'setSpeed', params:{value:1.5}}, {label:'Set to 1.2 (recommended)', action:'setSpeed', params:{value:1.2}, primary:true}]});
    else if (s > 1.3) warnings.push({ line, msg:`<code>voice.speed</code> (${s}) near upper bound — may sound rushed`, fixes:[{label:'Set to 1.2', action:'setSpeed', params:{value:1.2}, primary:true}]});
  }
  if (parsed.behavior && parsed.behavior.maxTurnSec !== undefined){
    const m = parsed.behavior.maxTurnSec;
    const line = findLineContaining(text, '"maxTurnSec":');
    if (typeof m !== 'number' || m < 5 || m > 120){
      const v = (typeof m === 'number' && m < 5) ? 5 : 120;
      errors.push({ line, msg:'<code>behavior.maxTurnSec</code> must be between 5 and 120', fixes:[{label:'Set to ' + v, action:'setMaxTurn', params:{value:v}, primary:true}]});
    }
  }
  return { errors, warnings };
}
function validate(){
  const text = editorInput.value;
  let parsed = null;
  let syntaxErrors = [], schema = { errors:[], warnings:[] };
  try { parsed = JSON.parse(text); }
  catch(e){
    syntaxErrors.push({ msg:'Invalid JSON — ' + e.message, line:findSyntaxLine(e.message, text), type:'syntax', fixes:[] });
  }
  if (parsed) schema = validateSchema(parsed, text);
  lastValidation = { errors:[...syntaxErrors, ...schema.errors], warnings:schema.warnings, parsed };
  updateStatusStrip();
  renderRepairPanel();
  return lastValidation;
}
function updateStatusStrip(){
  statusStrip.classList.remove('ok','warn','error');
  const issues = lastValidation.errors.length + lastValidation.warnings.length;
  const noticeOn = pasteNotice && !pasteNotice.hidden;
  if (issues === 0 && !noticeOn){
    statusStrip.hidden = false;
    statusStrip.classList.add('ok');
    statusDot.textContent = '✓';
    statusText.innerHTML = '<strong>No issues</strong>';
  } else {
    statusStrip.hidden = true;
  }
}
function renderRepairPanel(){
  const issues = [
    ...lastValidation.errors.map(e => ({severity:'error', ...e})),
    ...lastValidation.warnings.map(w => ({severity:'warn', ...w}))
  ];
  const oldSummary = document.getElementById('repairSummary');
  if (oldSummary) oldSummary.remove();
  if (!issues.length){ repairPanel.hidden = true; repairList.innerHTML = ''; return; }
  repairPanel.hidden = false;
  if (issues.length >= 2){
    const summary = document.createElement('div');
    summary.className = 'repair-summary'; summary.id = 'repairSummary';
    const ec = lastValidation.errors.length, wc = lastValidation.warnings.length;
    let lbl = '';
    if (ec && wc) lbl = `<strong>${ec} error${ec>1?'s':''}</strong> and <strong>${wc} warning${wc>1?'s':''}</strong>`;
    else if (ec) lbl = `<strong>${ec} error${ec>1?'s':''}</strong> to resolve`;
    else lbl = `<strong>${wc} warning${wc>1?'s':''}</strong> to review`;
    summary.innerHTML = `<span>${lbl}</span><span style="font-size:11px;color:var(--text-tertiary)">Click any row to jump to that line</span>`;
    repairPanel.insertBefore(summary, repairList);
  }
  repairList.innerHTML = issues.map(issue => {
    const iconCls = issue.severity === 'error' ? 'error' : 'warn';
    const sevCls = issue.severity === 'error' ? 'severity-error' : 'severity-warn';
    const lineLabel = issue.line ? `<span class="repair-line">Line ${issue.line}</span>` : '';
    const fixes = (issue.fixes || []).map(f => {
      const cls = 'fix-btn' + (f.primary ? ' primary' : '');
      const params = encodeURIComponent(JSON.stringify(f.params || {}));
      return `<button class="${cls}" data-action="${f.action}" data-params="${params}">${esc(f.label)}</button>`;
    }).join('');
    return `<div class="repair-item ${sevCls}" data-line="${issue.line || ''}">
      <span class="repair-icon ${iconCls}">!</span>
      <div class="repair-content">${lineLabel}<span class="repair-msg">${issue.msg}</span></div>
      <div class="repair-actions">${fixes}</div></div>`;
  }).join('');
}
repairList.addEventListener('click', e => {
  const btn = e.target.closest('.fix-btn');
  if (btn){
    let p = {};
    try { p = JSON.parse(decodeURIComponent(btn.dataset.params || '{}')); } catch {}
    applyFix(btn.dataset.action, p);
    return;
  }
  const row = e.target.closest('.repair-item');
  if (row && row.dataset.line) jumpToLine(parseInt(row.dataset.line, 10));
});
function applyFix(action, params){
  let parsed;
  try { parsed = JSON.parse(editorInput.value); } catch { return; }
  if (action === 'setSpeed'){ parsed.voice = parsed.voice || {}; parsed.voice.speed = params.value; }
  else if (action === 'setMaxTurn'){ parsed.behavior = parsed.behavior || {}; parsed.behavior.maxTurnSec = params.value; }
  else if (action === 'insertSection'){ parsed[params.section] = JSON.parse(JSON.stringify(baselineConfig[params.section])); }
  else if (action === 'addLanguage'){
    parsed.identity = parsed.identity || {};
    if (!Array.isArray(parsed.identity.languages)) parsed.identity.languages = [];
    if (!parsed.identity.languages.includes(params.value)) parsed.identity.languages.push(params.value);
  }
  else if (action === 'setGreeting'){ parsed.behavior = parsed.behavior || {}; parsed.behavior.greeting = params.value; }
  editorInput.value = stringify(parsed); onInput(); syncScroll();
}
function jumpToLine(line){
  const target = (line - 1) * 21;
  editorInput.scrollTop = Math.max(0, target - 60); syncScroll(); editorInput.focus();
  const lines = editorInput.value.split('\n');
  let pos = 0;
  for (let i = 0; i < line - 1 && i < lines.length; i++) pos += lines[i].length + 1;
  editorInput.setSelectionRange(pos, pos);
}

/* Semantic diff for save/import modals */
function semanticDiff(orig, curr, path){
  const diffs = []; path = path || '';
  (function rec(o, c, p){
    if (typeof o !== 'object' || typeof c !== 'object' || o === null || c === null){
      if (o !== c) diffs.push({type:'modified', path:p, old:o, new:c});
      return;
    }
    if (Array.isArray(o) || Array.isArray(c)){
      if (JSON.stringify(o) !== JSON.stringify(c)) diffs.push({type:'modified', path:p, old:o, new:c});
      return;
    }
    const keys = Array.from(new Set([...Object.keys(o), ...Object.keys(c)]));
    for (const k of keys){
      const np = p ? p + '.' + k : k;
      if (!(k in o)) diffs.push({type:'added', path:np, new:c[k]});
      else if (!(k in c)) diffs.push({type:'removed', path:np, old:o[k]});
      else rec(o[k], c[k], np);
    }
  })(orig, curr, path);
  return diffs;
}
function groupDiffsBySection(diffs){
  const g = {};
  diffs.forEach(d => {
    const top = ((d.path || '').split('.')[0] || 'root').split('[')[0];
    (g[top] = g[top] || []).push(d);
  });
  return g;
}
function formatValue(v){
  if (typeof v === 'string') return `"${v}"`;
  if (v === undefined) return 'undefined';
  if (v === null) return 'null';
  if (typeof v === 'object') return JSON.stringify(v);
  return String(v);
}
function renderDiffRow(d){
  if (d.type === 'modified') return `<div class="removed">−  ${esc(d.path)}: ${esc(formatValue(d.old))}</div><div class="added">+  ${esc(d.path)}: ${esc(formatValue(d.new))}</div>`;
  if (d.type === 'added')    return `<div class="added">+  ${esc(d.path)}: ${esc(formatValue(d.new))}</div>`;
  if (d.type === 'removed')  return `<div class="removed">−  ${esc(d.path)}: ${esc(formatValue(d.old))}</div>`;
  return '';
}
function renderSectionedDiff(diffs){
  if (!diffs.length) return '<div class="diff-empty">No semantic changes — only formatting differences</div>';
  const grouped = groupDiffsBySection(diffs);
  const sections = Object.keys(grouped);
  const wholesale = sections.length >= 3 || diffs.length >= 8;
  let html = '';
  if (wholesale){
    html += `<div class="wholesale-notice"><strong>Significant changes detected</strong> — touching ${sections.length} section${sections.length>1?'s':''}. Review by section below.</div>`;
  }
  html += sections.map(sec => {
    const items = grouped[sec];
    const collapsed = items.length > 5;
    const sectionLabel = SECTION_NAMES[sec] || sec;
    return `<div class="diff-section ${collapsed?'collapsed':'expanded'}">
      <button class="diff-section-header" type="button">
        <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
        <span class="section-name">${esc(sectionLabel)}</span>
        <span class="section-count">${items.length} change${items.length>1?'s':''}</span>
      </button>
      <div class="diff-section-body">${items.map(renderDiffRow).join('')}</div>
    </div>`;
  }).join('');
  return html;
}
function bindSectionToggles(container){
  container.addEventListener('click', e => {
    const h = e.target.closest('.diff-section-header');
    if (!h) return;
    const s = h.closest('.diff-section');
    s.classList.toggle('collapsed'); s.classList.toggle('expanded');
  });
}
/* Fallbacks */
function getFallbacks(){
  const fb = [];
  if (!lastValidation.parsed) return fb;
  const p = lastValidation.parsed;
  if (p.identity && typeof p.identity === 'object'){
    const langs = p.identity.languages;
    const missing = !('languages' in p.identity) || (Array.isArray(langs) && langs.length === 0);
    if (missing) fb.push({path:'identity.languages', value:['en-US']});
  }
  if (p.behavior && typeof p.behavior === 'object'){
    const g = p.behavior.greeting;
    if (g === '' || !('greeting' in p.behavior)) fb.push({path:'behavior.greeting', value:'Hello, how can I help today?'});
  }
  return fb;
}
function applyFallbacks(cfg){
  const out = JSON.parse(JSON.stringify(cfg));
  getFallbacks().forEach(fb => {
    const parts = fb.path.split('.');
    let t = out;
    for (let i = 0; i < parts.length - 1; i++){
      if (!t[parts[i]] || typeof t[parts[i]] !== 'object') t[parts[i]] = {};
      t = t[parts[i]];
    }
    t[parts[parts.length-1]] = JSON.parse(JSON.stringify(fb.value));
  });
  return out;
}

/* Save state */
function countPendingChanges(){
  const a = baselineText.split('\n'), b = editorInput.value.split('\n');
  let n = 0;
  for (let i = 0; i < b.length; i++) if (i >= a.length || b[i] !== a[i]) n++;
  return n;
}
function updateSaveState(){
  const pending = countPendingChanges();
  const hasErr = lastValidation.errors.length > 0;
  if (pending > 0){ saveCountEl.textContent = pending; saveCountEl.hidden = false; }
  else saveCountEl.hidden = true;
  saveBtn.disabled = (pending === 0) || hasErr;
  discardBtn.disabled = (pending === 0);
  if (pending > 0){
    pendingCount.textContent = pending + ' unsaved change' + (pending > 1 ? 's' : '');
    pendingBanner.hidden = false;
  } else pendingBanner.hidden = true;
  const lines = editorInput.value.split('\n').length;
  linesCountEl.textContent = lines + ' lines';
}

function onInput(){ validate(); renderEditor(); }
function renderEditor(){
  editorHighlight.innerHTML = renderHighlight(editorInput.value);
  renderGutter(editorInput.value);
  updateSaveState();
}
function syncScroll(){
  editorHighlight.scrollTop = editorInput.scrollTop;
  editorHighlight.scrollLeft = editorInput.scrollLeft;
  editorGutterInner.style.transform = 'translateY(' + (-editorInput.scrollTop) + 'px)';
}

/* Paste detection */
function showPasteNotice(n){ pasteNoticeCount.textContent = n + ' section' + (n>1?'s':''); pasteNotice.hidden = false; updateStatusStrip(); }
function hidePasteNotice(){ pasteNotice.hidden = true; updateStatusStrip(); }
function checkForWholesalePaste(){
  if (!lastValidation.parsed || lastValidation.errors.length > 0) return;
  const diffs = semanticDiff(baselineConfig, lastValidation.parsed);
  const secs = Object.keys(groupDiffsBySection(diffs));
  if (secs.length >= 3 || diffs.length >= 8) showPasteNotice(secs.length);
}
document.getElementById('pasteNoticeCta').addEventListener('click', () => { hidePasteNotice(); openSaveModal(); });
document.getElementById('pasteNoticeDismiss').addEventListener('click', hidePasteNotice);

editorInput.addEventListener('input', e => {
  onInput();
  if (e && e.inputType === 'insertFromPaste') checkForWholesalePaste();
  else if (!pasteNotice.hidden) hidePasteNotice();
});
editorInput.addEventListener('scroll', syncScroll);
editorInput.addEventListener('keydown', e => {
  if ((e.metaKey || e.ctrlKey) && e.key === 's'){ e.preventDefault(); if (!saveBtn.disabled) openSaveModal(); }
  if (e.key === 'Tab'){
    e.preventDefault();
    const s = editorInput.selectionStart, en = editorInput.selectionEnd;
    editorInput.value = editorInput.value.slice(0, s) + '  ' + editorInput.value.slice(en);
    editorInput.selectionStart = editorInput.selectionEnd = s + 2;
    onInput();
  }
});
document.querySelector('.editor-pane').addEventListener('click', () => editorInput.focus());

/* Copy / Try sample paste / Import / Save / Revert buttons */
document.getElementById('copyBtn').addEventListener('click', () => {
  if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(editorInput.value).catch(()=>{});
  showToast('Configuration copied to clipboard');
});
const WHOLESALE_SAMPLE = {
  "$schema":"voiceagent@1.4","id":"sample-riley",
  "identity":{"name":"Riley","role":"Sales Concierge","languages":["en-US"]},
  "voice":{"provider":"openai","voiceIds":{"en-US":"alloy"},"speed":1.1,"interruptible":false},
  "behavior":{"model":"claude-haiku-4-5","tone":"professional","greeting":"Hi, this is Riley from ${company.name}.","maxTurnSec":25},
  "skills":[{"name":"qualify_lead","type":"extract","fields":["company","budget"]}],
  "scenarios":[],
  "clientMessages":["conversation-update","transcript"]
};
document.getElementById('tryPasteBtn').addEventListener('click', () => {
  editorInput.value = stringify(WHOLESALE_SAMPLE); onInput(); syncScroll(); checkForWholesalePaste(); editorInput.focus();
});
discardBtn.addEventListener('click', () => { editorInput.value = baselineText; onInput(); syncScroll(); });
saveBtn.addEventListener('click', openSaveModal);

/* Save modal */
const saveModal = document.getElementById('saveModal');
const saveDiffList = document.getElementById('saveDiffList');
const saveDiffCount = document.getElementById('saveDiffCount');
const fromVersion = document.getElementById('fromVersion');
function renderSaveDiff(){
  const notice = document.getElementById('saveFallbacksNotice');
  if (!lastValidation.parsed){ saveDiffList.innerHTML = '<div class="diff-empty">Configuration is invalid — fix errors first</div>'; saveDiffCount.textContent = '0 field changes'; notice.hidden = true; return; }
  const fbs = getFallbacks();
  const finalCfg = applyFallbacks(lastValidation.parsed);
  const diffs = semanticDiff(baselineConfig, finalCfg);
  saveDiffCount.textContent = diffs.length + ' field change' + (diffs.length === 1 ? '' : 's');
  fromVersion.textContent = 'v' + version;
  if (fbs.length){
    const list = fbs.map(f => `<code>${esc(f.path)}</code> → <code>${esc(JSON.stringify(f.value))}</code>`).join(' · ');
    notice.innerHTML = `<span class="icon">↩</span><span><strong>${fbs.length} default${fbs.length>1?'s':''} will be applied on save:</strong> ${list}</span>`;
    notice.hidden = false;
  } else notice.hidden = true;
  saveDiffList.innerHTML = renderSectionedDiff(diffs);
}
function openSaveModal(){
  validate();
  if (lastValidation.errors.length) return;
  renderSaveDiff();
  saveModal.hidden = false;
  requestAnimationFrame(() => saveModal.classList.add('open'));
}
function closeSaveModal(){ saveModal.classList.remove('open'); setTimeout(() => saveModal.hidden = true, 180); }
document.getElementById('closeSaveModal').addEventListener('click', closeSaveModal);
document.getElementById('cancelSave').addEventListener('click', closeSaveModal);
document.getElementById('confirmSave').addEventListener('click', () => {
  if (!lastValidation.parsed) return;
  const hadFb = getFallbacks().length > 0;
  baselineConfig = applyFallbacks(lastValidation.parsed);
  baselineText = stringify(baselineConfig);
  editorInput.value = baselineText;
  version++;
  onInput();
  closeSaveModal();
  showToast(hadFb ? `Saved · v${version} (defaults applied)` : `Configuration saved · v${version}`);
});

/* Import modal */
const importModal = document.getElementById('importModal');
const importStepPaste = document.getElementById('importStepPaste');
const importStepDiff = document.getElementById('importStepDiff');
const importPasteArea = document.getElementById('importPasteArea');
const importPasteHighlight = document.getElementById('importPasteHighlight');
const importValidateBtn = document.getElementById('importValidate');
const importApplyBtn = document.getElementById('importApply');
const importCancelBtn = document.getElementById('importCancel');
const importBackBtn = document.getElementById('importBack');
const importFooterInfo = document.getElementById('importFooterInfo');
const importDiffList = document.getElementById('importDiffList');
const importDiffCount = document.getElementById('importDiffCount');
const importFromVersion = document.getElementById('importFromVersion');
const pendingNotice = document.getElementById('pendingNotice');
const pendingNoticeCount = document.getElementById('pendingNoticeCount');
const pasteStatus = document.getElementById('pasteStatus');
let importParsed = null;
function openImportModal(){
  importModal.hidden = false;
  requestAnimationFrame(() => importModal.classList.add('open'));
  showImportPasteStep();
  const pending = countPendingChanges();
  if (pending){ pendingNoticeCount.textContent = pending + ' unsaved edit' + (pending>1?'s':''); pendingNotice.hidden = false; }
  else pendingNotice.hidden = true;
}
function closeImportModal(){
  importModal.classList.remove('open');
  setTimeout(() => {
    importModal.hidden = true;
    importPasteArea.value = '';
    importPasteHighlight.innerHTML = '';
    pasteStatus.textContent = 'Empty — paste a configuration JSON to continue';
    pasteStatus.className = '';
    importValidateBtn.disabled = true;
    importFooterInfo.textContent = 'Empty';
    importFooterInfo.className = 'footer-info';
    importParsed = null;
  }, 180);
}
function showImportPasteStep(){
  importStepPaste.hidden = false; importStepDiff.hidden = true;
  importValidateBtn.hidden = false; importApplyBtn.hidden = true;
  importBackBtn.hidden = true; importCancelBtn.hidden = false;
}
function showImportDiffStep(){
  importStepPaste.hidden = true; importStepDiff.hidden = false;
  importValidateBtn.hidden = true; importApplyBtn.hidden = false;
  importBackBtn.hidden = false; importCancelBtn.hidden = true;
  importFromVersion.textContent = 'v' + version;
  const diffs = semanticDiff(baselineConfig, importParsed);
  importDiffCount.textContent = diffs.length + ' field change' + (diffs.length === 1 ? '' : 's');
  importDiffList.innerHTML = renderSectionedDiff(diffs);
  importFooterInfo.textContent = diffs.length + ' changes ready to apply';
  importFooterInfo.className = 'footer-info ok';
}
document.getElementById('importBtn').addEventListener('click', openImportModal);
document.getElementById('closeImportModal').addEventListener('click', closeImportModal);
importCancelBtn.addEventListener('click', closeImportModal);
importBackBtn.addEventListener('click', showImportPasteStep);
importPasteArea.addEventListener('input', () => {
  const v = importPasteArea.value;
  let s = esc(v).replace(/\$\{[^}]+\}/g, m => `<span class="tk-tmpl">${m}</span>`)
    .replace(/("(?:[^"\\]|\\.)*")(\s*:)/g, '<span class="tk-key">$1</span><span class="tk-punct">$2</span>')
    .replace(/("(?:[^"\\]|\\.)*")(?=\s*[,\]\n}]|$)/g, m => `<span class="tk-str">${m}</span>`)
    .replace(/\b(true|false|null)\b/g, m => `<span class="tk-bool">${m}</span>`)
    .replace(/(?<![\w."])(-?\d+\.?\d*)(?![\w"])/g, m => `<span class="tk-num">${m}</span>`)
    .replace(/([{}\[\],])/g, m => `<span class="tk-punct">${m}</span>`);
  importPasteHighlight.innerHTML = s + '\n';
  const trimmed = v.trim();
  importValidateBtn.disabled = (trimmed.length === 0);
  if (!trimmed){ pasteStatus.textContent = 'Empty — paste a configuration JSON to continue'; pasteStatus.className = ''; importFooterInfo.textContent = 'Empty'; importFooterInfo.className = 'footer-info'; }
  else { pasteStatus.textContent = v.split('\n').length + ' lines · ' + v.length + ' chars · ready to validate'; pasteStatus.className = ''; importFooterInfo.textContent = 'Click Validate to check against schema'; importFooterInfo.className = 'footer-info'; }
});
importPasteArea.addEventListener('scroll', () => {
  importPasteHighlight.scrollTop = importPasteArea.scrollTop;
  importPasteHighlight.scrollLeft = importPasteArea.scrollLeft;
});
document.getElementById('importPasteSample').addEventListener('click', () => {
  importPasteArea.value = stringify(WHOLESALE_SAMPLE); importPasteArea.dispatchEvent(new Event('input'));
});
importValidateBtn.addEventListener('click', () => {
  const v = importPasteArea.value.trim();
  try { importParsed = JSON.parse(v); }
  catch(e){ pasteStatus.textContent = 'Invalid JSON · ' + e.message; pasteStatus.className = 'error'; importFooterInfo.textContent = 'Fix JSON above to continue'; importFooterInfo.className = 'footer-info error'; return; }
  const missing = [];
  if (!importParsed.$schema) missing.push('$schema');
  if (!importParsed.identity) missing.push('identity');
  if (!importParsed.voice) missing.push('voice');
  if (!importParsed.behavior) missing.push('behavior');
  if (missing.length){ pasteStatus.textContent = 'Schema check failed · missing: ' + missing.join(', '); pasteStatus.className = 'error'; importFooterInfo.textContent = 'Required sections missing'; importFooterInfo.className = 'footer-info error'; return; }
  pasteStatus.textContent = 'Valid · ' + v.split('\n').length + ' lines'; pasteStatus.className = 'ok';
  showImportDiffStep();
});
importApplyBtn.addEventListener('click', () => {
  if (!importParsed) return;
  baselineConfig = importParsed; baselineText = stringify(baselineConfig);
  editorInput.value = baselineText; version++;
  onInput(); closeImportModal(); showToast('Configuration imported · v' + version);
});

/* Discard modal on view change */
const discardModal = document.getElementById('discardModal');
const discardModalMessage = document.getElementById('discardModalMessage');
function closeDiscardModal(){ discardModal.classList.remove('open'); setTimeout(() => discardModal.hidden = true, 180); }
document.getElementById('discardKeep').addEventListener('click', closeDiscardModal);
document.getElementById('discardConfirm').addEventListener('click', () => { closeDiscardModal(); editorInput.value = baselineText; onInput(); syncScroll(); setMode('form'); });
document.getElementById('discardApplyDefaults').addEventListener('click', () => {
  closeDiscardModal();
  if (!lastValidation.parsed) return;
  baselineConfig = applyFallbacks(lastValidation.parsed);
  baselineText = stringify(baselineConfig);
  editorInput.value = baselineText; version++;
  onInput(); showToast('Saved with defaults · v' + version); setMode('form');
});
/* Override setMode to intercept Form-switch when pending changes exist */
const originalSetMode = setMode;
setMode = function(m){
  const advActive = document.getElementById('modeAdvanced').classList.contains('active');
  if (m === 'form' && advActive){
    const pending = countPendingChanges();
    if (pending > 0){
      const plural = pending > 1 ? 's' : '';
      const fbs = getFallbacks();
      const hasErr = lastValidation.errors.length > 0;
      let msg = `You have ${pending} unsaved change${plural} in the JSON editor. Switching to Form will discard ${pending>1?'them':'it'}.`;
      if (!hasErr && fbs.length) msg += ` Or apply ${fbs.length} default${fbs.length>1?'s':''} (${fbs.map(f=>f.path).join(', ')}) and keep your changes.`;
      discardModalMessage.textContent = msg;
      document.getElementById('discardApplyDefaults').hidden = !(!hasErr && fbs.length);
      discardModal.hidden = false;
      requestAnimationFrame(() => discardModal.classList.add('open'));
      return;
    }
  }
  originalSetMode(m);
};

/* Form pending banner actions */
document.getElementById('formDiscardBtn').addEventListener('click', () => { editorInput.value = baselineText; onInput(); syncScroll(); });
document.getElementById('formGoSaveBtn').addEventListener('click', () => { originalSetMode('advanced'); setTimeout(openSaveModal, 80); });

/* Toast */
function showToast(text){
  const t = document.getElementById('toast');
  document.getElementById('toastText').textContent = text;
  t.classList.add('show');
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => t.classList.remove('show'), 2400);
}

/* Welcome notice localStorage persistence */
const noticeKey = 'cloudtalk.va.advanced-notice.dismissed';
try { if (localStorage.getItem(noticeKey) === 'true') document.getElementById('advancedWelcome').hidden = true; } catch {}
document.getElementById('dismissAdvancedNotice').addEventListener('click', () => {
  document.getElementById('advancedWelcome').hidden = true;
  try { localStorage.setItem(noticeKey, 'true'); } catch {}
});

/* Bind section toggles */
bindSectionToggles(document.getElementById('saveDiffList'));
bindSectionToggles(document.getElementById('importDiffList'));
/* ============================================================
   List view — existing agents
   ============================================================ */
const AGENTS = [
  { name:'Ava',    role:'AI Receptionist',         dir:'out', status:'active',   jobs:['Take Messages','Transfer to Human'], extra:2, calls:1247, dur:'00:04:32' },
  { name:'Ari',    role:'AI Receptionist',         dir:'out', status:'draft',    jobs:['Take Messages','Transfer to Human'], extra:2, calls:1005, dur:'00:00:31' },
  { name:'Cleo',   role:'Technical Support',       dir:'in',  status:'active',   jobs:['Answer Questions','Transfer to Human'], extra:0, calls:963,  dur:'00:00:15' },
  { name:'Eden',   role:'Omnichannel AI Assistant',dir:'in',  status:'active',   jobs:['Take Messages','Custom'],           extra:2, calls:954,  dur:'00:00:22' },
  { name:'Ella',   role:'Virtual Front Desk Agent',dir:'in',  status:'active',   jobs:['Take Messages','Transfer to Human'], extra:2, calls:953,  dur:'00:00:51' },
  { name:'Finn',   role:'Appointment Confirmation',dir:'in',  status:'active',   jobs:['Navigate IVR','Transfer to Human'],  extra:2, calls:888,  dur:'00:01:08' },
  { name:'Filvynn',role:'Appointment Confirmation',dir:'in',  status:'active',   jobs:['Take Messages','Transfer to Human'], extra:2, calls:574,  dur:'00:01:08' },
  { name:'Kai',    role:'Customer Success Agent',  dir:'in',  status:'inactive', jobs:['Take Messages','Transfer to Human'], extra:2, calls:412,  dur:'00:00:01' },
  { name:'Leo',    role:'Customer Success Agent',  dir:'in',  status:'inactive', jobs:['Take Messages','Transfer to Human'], extra:2, calls:100,  dur:'00:00:58' },
  { name:'Lex',    role:'Lead Qualifier',          dir:'in',  status:'inactive', jobs:['Qualify Lead','Extract Data'],       extra:0, calls:723,  dur:'00:08:09' },
];
const STATUS_LABEL = { active:'Active', inactive:'Inactive', draft:'Draft' };
function renderAgents(){
  const body = document.getElementById('agentsBody');
  const filterDir = document.querySelector('#dirFilter button.active').dataset.dir;
  const q = (document.getElementById('listSearch').value || '').toLowerCase().trim();
  const rows = AGENTS.filter(a => {
    if (filterDir !== 'all' && a.dir !== (filterDir === 'inbound' ? 'in' : 'out')) return false;
    if (q && !(a.name+' '+a.role+' '+a.jobs.join(' ')).toLowerCase().includes(q)) return false;
    return true;
  });
  body.innerHTML = rows.map(a => `
    <tr onclick="openAgent('blank')">
      <td>
        <div class="row-name">
          <div class="av-tile ${a.dir === 'in' ? 'in' : 'out'}">
            ${a.dir === 'in'
              ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><line x1="17" y1="7" x2="7" y2="17"/><polyline points="16 17 7 17 7 8"/></svg>'
              : '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>'}
          </div>
          <div>
            <div class="nm">${a.name}</div>
            <div class="role">${a.role}</div>
          </div>
        </div>
      </td>
      <td>
        ${a.status === 'draft'
          ? `<span class="status-cell draft"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"/></svg> Draft</span>`
          : `<span class="status-cell ${a.status}"><span class="dot"></span> ${STATUS_LABEL[a.status]}</span>`}
      </td>
      <td>
        ${a.jobs.map(j => `<span class="job-chip">${j}</span>`).join('')}
        ${a.extra ? `<span class="job-overflow">+${a.extra}</span>` : ''}
      </td>
      <td class="num-cell">${a.calls.toLocaleString()}</td>
      <td class="dur-cell">${a.dur}</td>
      <td style="width:48px"><button class="row-edit" onclick="event.stopPropagation();openAgent('blank')"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"/></svg></button></td>
    </tr>
  `).join('');
}
renderAgents();
document.querySelectorAll('#dirFilter button').forEach(b => b.addEventListener('click', () => {
  document.querySelectorAll('#dirFilter button').forEach(x => x.classList.remove('active'));
  b.classList.add('active');
  renderAgents();
}));
document.getElementById('listSearch').addEventListener('input', renderAgents);

function highlight(line){
  let s = line
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  // template placeholders ${...}
  s = s.replace(/\$\{[^}]+\}/g, m => `<span class="tk-tmpl">${m}</span>`);
  // keys ("..." followed by colon)
  s = s.replace(/"([^"\\]*(?:\\.[^"\\]*)*)"(\s*:)/g,
    (m, k, c) => `<span class="tk-key">"${k}"</span><span class="tk-punct">${c}</span>`);
  // remaining strings ("...")
  s = s.replace(/(?<!<span class="tk-key">)"([^"\\]*(?:\\.[^"\\]*)*)"/g,
    (m, v) => `<span class="tk-str">"${v}"</span>`);
  // numbers
  s = s.replace(/\b-?\d+(\.\d+)?\b/g, m => `<span class="tk-num">${m}</span>`);
  // booleans / null
  s = s.replace(/\b(true|false|null)\b/g, m => `<span class="tk-bool">${m}</span>`);
  // commas/braces/brackets
  s = s.replace(/([{}\[\],])/g, m => `<span class="tk-punct">${m}</span>`);
  return s;
}
