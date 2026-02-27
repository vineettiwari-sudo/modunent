// ── Page switching ─────────────────────────────────────────────
function gp(page) {
  document.getElementById('home-page').style.display =
    (page === 'lib') ? 'none' : 'block';

  document.getElementById('library-page').style.display =
    (page === 'lib') ? 'block' : 'none';

  window.scrollTo(0, 0);
}

// ── Library tab switching ──────────────────────────────────────
function lt(id, btn) {
  document.querySelectorAll('.comp-sec').forEach(function(s) {
    s.classList.remove('active');
  });

  var sec = document.getElementById('sec-' + id);
  if (sec) sec.classList.add('active');

  document.querySelectorAll('.lib-tab-btn').forEach(function(b) {
    b.classList.remove('active');
  });

  if (btn) btn.classList.add('active');
  else {
    var match = document.querySelector('.lib-tab-btn[data-tab="' + id + '"]');
    if (match) match.classList.add('active');
  }
}

// ── Ripple effect ──────────────────────────────────────────────
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

// ── Home page interactive elements ─────────────────────────────
function toggleRadio() {
  var el = document.getElementById('radioO');
  if (el) el.classList.toggle('sel');
}

function shuffleBars() {
  var bars = document.querySelectorAll('.bc-bar');
  bars.forEach(function(b) {
    b.style.height = (20 + Math.random() * 70) + '%';
    b.classList.toggle('hi', Math.random() > 0.4);
    b.classList.toggle('lo', Math.random() <= 0.4);
  });
}

function sendMsg() {
  var inp = document.getElementById('mif');
  if (!inp) return;
  inp.value = '';
  inp.focus();
}

function toggleMorn() {
  var b = document.getElementById('mornB');
  var t = document.getElementById('mornT');
  if (!b) return;
  b.classList.toggle('on');
  if (t) t.classList.toggle('on');
}

function earlyClick() {
  var p = document.getElementById('earlyP');
  if (!p) return;
  p.innerHTML = "You're <strong>in</strong>! 🎉";
  setTimeout(function() {
    p.innerHTML = "Get ear<strong>ly</strong> access";
  }, 2000);
}

function toggleStar() {
  var si = document.getElementById('ghSi');
  var n  = document.getElementById('ghN');
  if (!si) return;
  si.classList.toggle('on');
  if (n) n.textContent = si.classList.contains('on') ? '7' : '6';
}

function toggleApply(btn) {
  if (!btn) return;
  btn.classList.toggle('done');
  var t = document.getElementById('aplT');
  if (t) t.textContent =
    btn.classList.contains('done') ? 'Applied ✓' : 'Apply Now';
}

function spinSq() {
  var sq = document.getElementById('sqEl');
  if (!sq) return;
  sq.classList.toggle('spin');
  if (sq.classList.contains('spin')) {
    setTimeout(function() {
      sq.classList.remove('spin');
    }, 1400);
  }
}

// ── Auto Init (from your final file) ───────────────────────────
document.addEventListener('DOMContentLoaded', function(){

  document.querySelectorAll('.lib-tab-btn')
    .forEach(function(btn){
      btn.addEventListener('click', function(){
        lt(btn.dataset.tab, btn);
      });
    });

  setInterval(shuffleBars, 2000);

});
