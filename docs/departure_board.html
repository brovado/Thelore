<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Saint Lore Rail Authority — Western Line Departure Board</title>
<style>
  :root{
    --bg: #0a0f10;
    --panel: #0e1418;
    --panel-2:#0d1216;
    --ink: #d9e7f2;
    --muted:#8fa6b3;
    --gold:#f6d47a;
    --amber:#ffb84d;
    --cyan:#6bf0ff;
    --emerald:#7fffb3;
    --rose:#ff6b8a;
    --danger:#ff4976;
    --ok:#86ffc8;
    --warn:#ffd86b;
    --grad1:#0c1a22;
    --grad2:#0c1317;
    --glow: drop-shadow(0 0 .6rem rgba(107,240,255,.45)) drop-shadow(0 0 1.2rem rgba(107,240,255,.25));
  }
  @font-face{
    font-family: "RuneMono";
    src: local("Courier New"), local("Menlo"), local("Consolas");
  }
  *{box-sizing:border-box}
  html,body{height:100%;background: radial-gradient(1200px 600px at 10% 0%, #0c1920 0%, var(--bg) 42%) fixed;}
  body{
    margin:0; color:var(--ink); font-family: Inter, ui-sans-serif, system-ui, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
    overflow:hidden;
  }

  /* Subtle moving rune grid backdrop */
  .grid{
    position:fixed; inset:0; pointer-events:none; opacity:.08; mix-blend-mode:screen;
    background:
      linear-gradient(90deg, transparent 98%, rgba(107,240,255,.25) 100%) 0 0/40px 40px,
      linear-gradient(0deg, transparent 98%, rgba(107,240,255,.25) 100%) 0 0/40px 40px;
    animation: drift 40s linear infinite;
  }
  @keyframes drift{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(40px,40px,0)}}

  /* Header */
  .wrap{display:grid; grid-template-rows:auto auto 1fr auto; gap:12px; height:100%; padding:16px; backdrop-filter: saturate(110%) blur(0.5px);}
  .header{
    display:flex; align-items:center; gap:16px; padding:14px 16px; border-radius:14px;
    background: linear-gradient(180deg, rgba(12,26,34,.8), rgba(10,15,16,.85));
    border:1px solid rgba(107,240,255,.18); box-shadow: inset 0 1px 0 rgba(255,255,255,.05), 0 10px 30px rgba(0,0,0,.35);
  }
  .crest{
    width:56px; height:56px; border-radius:12px;
    background:
      radial-gradient(circle at 35% 30%, rgba(255,255,255,.35), transparent 40%),
      conic-gradient(from 0deg, #0ff 0 40deg, #0af 40 80deg, #0ff 80 180deg, #0af 180 280deg, #0ff 280 360deg);
    filter: var(--glow);
    position:relative; overflow:hidden;
  }
  .crest::after{
    content:""; position:absolute; inset:6px; border-radius:8px;
    background: radial-gradient(circle at 50% 50%, rgba(10,15,16,.9), rgba(10,15,16,.96) 60%);
    box-shadow: inset 0 0 0 1px rgba(107,240,255,.25), inset 0 0 30px rgba(107,240,255,.25);
  }
  .title{display:flex; flex-direction:column; line-height:1.1}
  .title h1{margin:0; font-weight:800; letter-spacing:.8px; font-size:clamp(18px,2.2vw,28px)}
  .title small{color:var(--muted); letter-spacing:.12em; text-transform:uppercase}

  .clock{
    margin-left:auto; display:flex; align-items:center; gap:10px; font-feature-settings:"tnum";
    font-variant-numeric:tabular-nums; color:var(--cyan);
    text-shadow:0 0 12px rgba(107,240,255,.5);
  }
  .clock .dot{width:8px; height:8px; border-radius:50%; background:var(--cyan); box-shadow:0 0 10px var(--cyan)}

  /* Alert ticker */
  .ticker{
    display:flex; align-items:center; gap:12px; padding:10px 14px; border-radius:12px;
    background: linear-gradient(180deg, rgba(12,19,23,.85), rgba(10,14,16,.9));
    border:1px solid rgba(255,216,107,.18);
    box-shadow: inset 0 1px 0 rgba(255,255,255,.04), 0 8px 20px rgba(0,0,0,.25);
    font-size:14px;
  }
  .chip{padding:6px 10px; border-radius:999px; letter-spacing:.08em; text-transform:uppercase; font-weight:700; font-size:11px}
  .chip.warn{background: rgba(255,216,107,.1); color:var(--warn); border:1px solid rgba(255,216,107,.35)}
  .chip.danger{background: rgba(255,73,118,.1); color:var(--danger); border:1px solid rgba(255,73,118,.35)}
  .ticker .marquee{overflow:hidden; white-space:nowrap; flex:1}
  .ticker .marquee span{display:inline-block; padding-left:100%; animation: scroll 28s linear infinite; color:#f0f6ff}
  @keyframes scroll{100%{transform:translateX(-100%)}}

  /* Board panels */
  .board{
    display:grid; grid-template-columns: 2fr 1fr; gap:14px; min-height:0;
  }
  @media (max-width:1050px){ .board{grid-template-columns:1fr} }

  .panel{
    border:1px solid rgba(107,240,255,.16); border-radius:14px; padding:12px;
    background: linear-gradient(180deg, var(--panel), var(--panel-2));
    box-shadow: inset 0 1px 0 rgba(255,255,255,.04), 0 12px 30px rgba(0,0,0,.35);
    min-height:0; display:flex; flex-direction:column;
  }
  .panel h2{
    margin:4px 6px 10px; font-size:13px; letter-spacing:.18em; text-transform:uppercase; color:var(--muted);
  }

  .table{
    width:100%; border-collapse:separate; border-spacing:0 8px; font-family: RuneMono, ui-monospace, monospace;
    font-size: clamp(12px, 1.35vw, 15px);
  }
  .thead .tr{opacity:.9}
  .tr{
    display:grid; grid-template-columns: 100px 1.4fr 1fr 1fr 1.2fr; gap:12px; align-items:center;
    padding:10px 12px; border-radius:10px; background: rgba(4,8,10,.4);
    border:1px solid rgba(107,240,255,.08);
  }
  .thead .tr{background: rgba(107,240,255,.06); border-color: rgba(107,240,255,.12)}
  .td, .th{overflow:hidden; text-overflow:ellipsis; white-space:nowrap}
  .th{color:var(--muted); text-transform:uppercase; letter-spacing:.12em; font-weight:700; font-size:11px}
  .code{font-weight:800; letter-spacing:.06em; color:var(--cyan)}
  .dest{font-weight:700}
  .eta{color:#d6e6ef}
  .status{font-weight:900; letter-spacing:.12em; text-transform:uppercase}
  .note{color:#a9c0cc}

  /* statuses */
  .s-open{color:var(--ok); text-shadow:0 0 10px rgba(134,255,200,.35)}
  .s-init{color:#9ad4ff; text-shadow:0 0 10px rgba(154,212,255,.35)}
  .s-unstable{color:var(--warn); text-shadow:0 0 10px rgba(255,216,107,.35); animation: pulse 2.4s ease-in-out infinite}
  .s-closed{color:#ff9aa8; text-shadow:0 0 10px rgba(255,154,168,.35)}
  .s-caution{color:#ffd27e; text-shadow:0 0 10px rgba(255,210,126,.35); animation: blink 1.5s steps(2, jump-none) infinite}
  @keyframes pulse{0%,100%{opacity:1}50%{opacity:.55}}
  @keyframes blink{50%{opacity:.45}}

  /* spurs smaller table */
  .spurs .tr{grid-template-columns: 140px 1fr 130px 1.4fr}

  /* footer help */
  .footer{
    display:flex; align-items:center; justify-content:space-between; gap:12px; color:var(--muted);
    font-size:12px; padding:2px 4px;
  }
  .kbd{font-family:RuneMono, ui-monospace, monospace; border:1px solid rgba(255,255,255,.15);
    padding:2px 6px; border-radius:6px; color:#e6f2f7; background:rgba(255,255,255,.04)}
  .badge{
    padding:6px 10px; border-radius:999px; border:1px solid rgba(107,240,255,.25); color:var(--cyan);
    background: linear-gradient(180deg, rgba(12,26,34,.5), rgba(6,10,12,.6)); text-shadow:0 0 10px rgba(107,240,255,.35)
  }

  /* glyph corners */
  .panel::before, .panel::after{
    content:""; position:absolute; width:10px; height:10px; border:1px solid rgba(107,240,255,.25);
    filter: drop-shadow(0 0 8px rgba(107,240,255,.35));
  }
  .panel{position:relative}
  .panel::before{top:6px; left:6px; border-right:none; border-bottom:none; border-radius:6px 0 0 0}
  .panel::after{bottom:6px; right:6px; border-left:none; border-top:none; border-radius:0 0 6px 0}

  /* help overlay */
  .help{
    position:fixed; inset:0; background:rgba(2,6,8,.78); display:none; place-items:center; z-index:40;
    color:#e9f6ff; backdrop-filter: blur(2px);
  }
  .help .card{
    max-width:900px; width:min(92%, 900px); background: linear-gradient(180deg, #0b1418, #081014);
    border:1px solid rgba(107,240,255,.22); border-radius:16px; padding:18px 20px; box-shadow: 0 20px 60px rgba(0,0,0,.55);
  }
  .help h3{margin:0 0 8px; letter-spacing:.14em; text-transform:uppercase; color:var(--cyan)}
  .help ul{margin:0; padding-left:18px; line-height:1.7}
  .help .close{margin-top:14px}
  .btn{
    appearance:none; border:1px solid rgba(107,240,255,.25); background: linear-gradient(180deg, #0c1b21, #081115);
    border-radius:10px; padding:8px 10px; color:#dff7ff; cursor:pointer; font-weight:700;
  }
  .btn:hover{filter:brightness(1.1)}
</style>
</head>
<body>
<div class="grid" aria-hidden="true"></div>

<div class="wrap">
  <header class="header">
    <div class="crest" aria-hidden="true"></div>
    <div class="title">
      <h1>Saint Lore Rail Authority</h1>
      <small>Western Line • Continental Magitech Transit • v0.1 Activation Feed</small>
    </div>
    <div class="clock" id="clock" title="Saint Lore Standard Time">
      <span class="dot"></span>
      <span id="clockText">--:--:--</span>
    </div>
  </header>

  <section class="ticker" aria-live="polite">
    <span class="chip warn">System Alert</span>
    <div class="marquee"><span id="ticker">
      Seismic irregularity detected under Segment A-05 (Verdan Reach → Salt-Step). Telemetry pattern unclassified. Please stand clear of maintenance alcoves during transit.
    </span></div>
  </section>

  <main class="board">
    <!-- Primary Routes -->
    <section class="panel">
      <h2>Primary Routes (Active)</h2>
      <div class="table">
        <div class="thead tr">
          <div class="th">Line</div>
          <div class="th">Destination / Route</div>
          <div class="th">Distance / ETA</div>
          <div class="th">Status</div>
          <div class="th">Advisory</div>
        </div>
        <div id="routes"></div>
      </div>
    </section>

    <!-- Spurs -->
    <section class="panel">
      <h2>Secondary Spurs & Service Lines</h2>
      <div class="table spurs">
        <div class="thead tr">
          <div class="th">Spur</div>
          <div class="th">Function</div>
          <div class="th">Status</div>
          <div class="th">Advisory</div>
        </div>
        <div id="spurs"></div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div>
      <span class="badge">Authorized Operators Only</span>
      &nbsp;•&nbsp; Press <span class="kbd">?</span> for help
    </div>
    <div>
      <span class="kbd">D</span> demo &nbsp;|&nbsp; <span class="kbd">F</span> fullscreen &nbsp;|&nbsp; <span class="kbd">R</span> random alert
    </div>
  </footer>
</div>

<!-- Help overlay -->
<div class="help" id="help">
  <div class="card">
    <h3>Board Controls & Integration</h3>
    <ul>
      <li><b>D</b> — toggle demo mode (random status updates)</li>
      <li><b>F</b> — toggle fullscreen</li>
      <li><b>R</b> — inject a random alert headline</li>
      <li><b>API</b> — <code>updateRoute(id, patch)</code>, <code>updateSpur(id, patch)</code>, <code>pushAlert(text)</code></li>
      <li>Data is inline (see <code>routesData</code> / <code>spursData</code>). Replace with a fetch to your wiki JSON if you like.</li>
    </ul>
    <button class="btn close" onclick="document.getElementById('help').style.display='none'">Close</button>
  </div>
</div>

<script>
/* =========================
   Data (edit to taste)
   ========================= */
const routesData = [
  { id:"A-01", dest:"Jugol’s Rest → Djari Crossing", eta:"312 km / 3 days", status:"OPEN", note:"Crystalline walls hum beneath the desert wind." },
  { id:"A-02", dest:"Djari Crossing → Kaerith Vaults", eta:"640 km / 5 days", status:"OPEN", note:"Jungle overgrowth detected along surface vents." },
  { id:"A-03", dest:"Kaerith Vaults → Iron Choir Citadel", eta:"428 km / 4 days", status:"UNSTABLE", note:"Magnetic interference from dormant defense arrays." },
  { id:"A-04", dest:"Iron Choir → Verdan Reach", eta:"509 km / 4 days", status:"OPEN", note:"Temperate canopy returning to service." },
  { id:"A-05", dest:"Verdan Reach → Salt-Step Caverns", eta:"702 km / 6 days", status:"CAUTION", note:"Geothermal pulses exceeding tolerance thresholds." },
  { id:"A-06", dest:"Salt-Step → Glass Veil Plateau", eta:"388 km / 3 days", status:"OPEN", note:"Thin-air plateau; mirage phenomena possible." },
  { id:"A-07", dest:"Glass Veil → Storm-Edge Terminus", eta:"790 km / 6 days", status:"INITIALIZING", note:"Western signal lock achieved; tide readings fluctuating." }
];

const spursData = [
  { id:"B-01", dest:"Harfa Fields Spur", role:"Agricultural freight line", status:"OPEN", note:"Organic anomalies probable along crop sensors." },
  { id:"B-02", dest:"Ebon Switchyard", role:"Maintenance yard", status:"PARTIAL", note:"Beacon looping since activation. No crew detected." },
  { id:"B-03", dest:"Kassad Depot", role:"Chapel-Car & Freight Hold", status:"SEALED", note:"Sanctum pressure equalized; internal choir audible." },
  { id:"B-04", dest:"Marrow Gate", role:"Deep-core tunnel", status:"COLLAPSED", note:"Excavation contingent on Authority clearance." },
  { id:"B-05", dest:"Hollow Ridge Observation", role:"Geological survey", status:"UNKNOWN", note:"Seismic return pattern resembles breathing." }
];

/* =========================
   Renderers
   ========================= */
const routesEl = document.getElementById('routes');
const spursEl  = document.getElementById('spurs');

function statusClass(s){
  const k = s.toLowerCase();
  if(k.includes("open")) return "s-open";
  if(k.includes("initial")) return "s-init";
  if(k.includes("unstable")) return "s-unstable";
  if(k.includes("caution")||k.includes("partial")) return "s-caution";
  if(k.includes("closed")||k.includes("sealed")||k.includes("collapse")) return "s-closed";
  if(k.includes("unknown")) return "s-unstable";
  return "";
}

function rowTemplate(item){
  return `
    <div class="tr" data-id="${item.id}">
      <div class="td code">${item.id}</div>
      <div class="td dest">${item.dest}</div>
      <div class="td eta">${item.eta || "—"}</div>
      <div class="td status ${statusClass(item.status)}">${item.status}</div>
      <div class="td note">${item.note || ""}</div>
    </div>`;
}

function render(){
  routesEl.innerHTML = routesData.map(rowTemplate).join("");
  spursEl.innerHTML  = spursData.map(item => `
    <div class="tr" data-id="${item.id}">
      <div class="td code">${item.id}</div>
      <div class="td dest">${item.dest}</div>
      <div class="td status ${statusClass(item.status)}">${item.status}</div>
      <div class="td note">${item.note || ""}</div>
    </div>`).join("");
}
render();

/* =========================
   Clock & Ticker
   ========================= */
const clockText = document.getElementById("clockText");
function tickClock(){
  const d = new Date();
  const hh = String(d.getHours()).padStart(2,"0");
  const mm = String(d.getMinutes()).padStart(2,"0");
  const ss = String(d.getSeconds()).padStart(2,"0");
  clockText.textContent = `${hh}:${mm}:${ss} SLS`;
}
setInterval(tickClock, 250); tickClock();

const alerts = [
  "Seismic irregularity detected under Segment A-05. Please stand clear of maintenance alcoves.",
  "Telemetry pattern unclassified; elemental signature not found.",
  "Freight advisory: magnetic cargo must be secured in car M-12 or later.",
  "Observation: mirage phenomena reported near Glass Veil Plateau.",
  "Maintenance note: chapel-car at Kassad Depot remains sealed by ecclesiastical order.",
  "Rumor: rival operators authorized for limited runs west of Iron Choir."
];
const ticker = document.getElementById("ticker");
function pushAlert(text){
  ticker.textContent = text;
}
function randomAlert(){ pushAlert(alerts[Math.floor(Math.random()*alerts.length)])}

/* =========================
   Demo mode & API
   ========================= */
let demoTimer = null;

function updateRoute(id, patch){
  const it = routesData.find(r=>r.id===id);
  if(!it) return false;
  Object.assign(it, patch); render(); return true;
}
function updateSpur(id, patch){
  const it = spursData.find(r=>r.id===id);
  if(!it) return false;
  Object.assign(it, patch); render(); return true;
}
window.updateRoute = updateRoute;
window.updateSpur  = updateSpur;
window.pushAlert   = pushAlert;

function toggleDemo(){
  if(demoTimer){ clearInterval(demoTimer); demoTimer=null; pushAlert("Demo mode OFF"); return }
  demoTimer = setInterval(()=>{
    // flip a random row’s status for flair
    const pool = Math.random()<0.6 ? routesData : spursData;
    const it = pool[Math.floor(Math.random()*pool.length)];
    const statuses = ["OPEN","OPEN","CAUTION","UNSTABLE","INITIALIZING","SEALED","PARTIAL","COLLAPSED"];
    const s = statuses[Math.floor(Math.random()*statuses.length)];
    it.status = s; render();
    randomAlert();
  }, 3500);
  pushAlert("Demo mode ON — randomized status updates");
}

/* =========================
   Keyboard shortcuts
   ========================= */
document.addEventListener("keydown", (e)=>{
  if(e.key === "D" || e.key === "d") toggleDemo();
  if(e.key === "F" || e.key === "f"){
    if(!document.fullscreenElement) document.documentElement.requestFullscreen();
    else document.exitFullscreen();
  }
  if(e.key === "?" ) document.getElementById("help").style.display="grid";
  if(e.key === "R" || e.key === "r") randomAlert();
});
document.getElementById("help").addEventListener("click", (e)=>{
  if(e.target.id==="help") e.currentTarget.style.display="none";
});

/* =========================
   Subtle first-boot flourish
   ========================= */
(function boot(){
  // Flicker statuses to simulate lines coming online
  const seq = [...routesData, ...spursData];
  let i = 0;
  const timer = setInterval(()=>{
    if(i>=seq.length){ clearInterval(timer); pushAlert("All routes initialized. Please stand clear of the platforms."); return; }
    seq[i].status = (seq[i].status||"OPEN").toUpperCase();
    render(); i++;
  }, 140);
})();
</script>
</body>
</html>
