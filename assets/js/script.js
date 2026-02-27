// ── Page switching ─────────────────────────────────────────────────────────
function gp(page) {
  document.getElementById('home-page').style.display = (page === 'lib') ? 'none' : 'block';
  document.getElementById('library-page').style.display = (page === 'lib') ? 'block' : 'none';
  window.scrollTo(0, 0);
}

// ── Library tab switching ──────────────────────────────────────────────────
function lt(id, btn) {
  document.querySelectorAll('.comp-sec').forEach(function(s) {
    s.classList.remove('active');
  });
  var sec = document.getElementById('sec-' + id);
  if (sec) sec.classList.add('active');
  document.querySelectorAll('.lib-tab-btn').forEach(function(b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  else {
    var match = document.querySelector('.lib-tab-btn[data-tab="' + id + '"]');
    if (match) match.classList.add('active');
  }
}

// ── Ripple effect ──────────────────────────────────────────────────────────
function ripple(e, el) {
  var r = document.createElement('span');
  r.className = 'rip';
  var rect = el.getBoundingClientRect();
  var size = Math.max(rect.width, rect.height);
  r.style.width = r.style.height = size + 'px';
  r.style.left = (e.clientX - rect.left - size / 2) + 'px';
  r.style.top  = (e.clientY - rect.top  - size / 2) + 'px';
  el.appendChild(r);
  setTimeout(function() { r.remove(); }, 600);
}

// ── Hero search ────────────────────────────────────────────────────────────
function heroSearch(){
  const q=(document.getElementById('hero-search')?.value||'').toLowerCase().trim();
  if(!q)return gp('lib');
  gp('lib');
  setTimeout(()=>{
    const secMap={
      button:'buttons',card:'product-cards',badge:'badges',tag:'tags',
      nav:'navigation',filter:'filters',announce:'announcements',quantity:'qty',
      stepper:'qty',discount:'discount',pill:'discount',slider:'filters',
      checkbox:'buttons',toggle:'buttons',radio:'forms',dropdown:'navigation',
    };
    for(const [k,v] of Object.entries(secMap)){
      if(q.includes(k)){lt(v,document.querySelector('.lib-tab-btn[data-tab="'+v+'"]'));return;}
    }
    lt('all',document.querySelector('.lib-tab-btn[data-tab="all"]'));
  },300);
}

// ── Underline tab selection ────────────────────────────────────────────────
function selUlTab(el){
  const tabs = el.parentElement.querySelectorAll('.ul-tab');
  tabs.forEach(t=>{
    t.style.color='var(--mu)';
    t.style.borderBottom='none';
  });
  el.style.color='var(--ac)';
  el.style.borderBottom='2px solid var(--ac)';
}

// ── Fill tab selection ─────────────────────────────────────────────────────
function selFillTab(el){
  const tabs = el.parentElement.querySelectorAll('.fill-tab');
  tabs.forEach(t=>{
    t.style.background='';
    t.style.color='var(--mu)';
    t.style.boxShadow='';
  });
  el.style.background='var(--sf)';
  el.style.color='var(--tx)';
  el.style.boxShadow='0 1px 4px rgba(0,0,0,.3)';
}

// ── Preview grid countdown ─────────────────────────────────────────────────
(function(){
  let end = Date.now() + 3*3600000 + 27*60000 + 53000;
  function tick(){
    let r = Math.max(0, end - Date.now());
    let hEl=document.getElementById('pg-h'), mEl=document.getElementById('pg-m'), sEl=document.getElementById('pg-s');
    if(!hEl) return;
    let h=Math.floor(r/3600000), m=Math.floor((r%3600000)/60000), s=Math.floor((r%60000)/1000);
    hEl.textContent=String(h).padStart(2,'0');
    mEl.textContent=String(m).padStart(2,'0');
    sEl.textContent=String(s).padStart(2,'0');
    if(r>0) setTimeout(tick,1000);
  }
  tick();
})();
