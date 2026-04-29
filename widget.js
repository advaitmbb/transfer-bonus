(function () {
  /* ── Inject styles ── */
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Fraunces:wght@400;600;700&family=Inter:wght@400;500;600&display=swap';
  document.head.appendChild(link);

  var style = document.createElement('style');
  style.textContent = [
    '.mbb-tracker *,.mbb-tracker *::before,.mbb-tracker *::after{box-sizing:border-box;margin:0;padding:0}',
    '.mbb-tracker{font-family:"Inter",sans-serif;background:#faf6ee;padding:56px 24px 64px;width:100%}',
    '.mbb-header{text-align:center;margin-bottom:40px}',
    '.mbb-title{font-family:"Fraunces",serif;font-size:clamp(1.8rem,4vw,2.6rem);font-weight:700;color:#1a2b3c;line-height:1.15;margin-bottom:10px}',
    '.mbb-subtitle{font-size:.95rem;color:#6b7e8f;margin-bottom:6px}',
    '.mbb-updated{font-size:.78rem;color:#a0b0be}',
    '.mbb-filters{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin-bottom:36px}',
    '.mbb-filter-btn{display:inline-flex;align-items:center;gap:6px;padding:9px 20px;border-radius:100px;border:2px solid #1a2b3c;background:transparent;color:#1a2b3c;font-family:"Inter",sans-serif;font-size:.84rem;font-weight:600;cursor:pointer;transition:all .18s ease;white-space:nowrap}',
    '.mbb-filter-btn:hover{background:rgba(26,43,60,.07)}',
    '.mbb-filter-btn.active{background:#1a2b3c;color:#faf6ee}',
    '.mbb-count{display:inline-flex;align-items:center;justify-content:center;background:#38b6ff;color:#fff;font-size:.68rem;font-weight:700;width:18px;height:18px;border-radius:100px}',
    '.mbb-filter-btn.active .mbb-count{background:rgba(255,255,255,.25)}',
    '.mbb-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;max-width:1080px;margin:0 auto 56px}',
    '@media(max-width:860px){.mbb-grid{grid-template-columns:repeat(2,1fr)}}',
    '@media(max-width:540px){.mbb-grid{grid-template-columns:1fr;gap:16px}}',
    '.mbb-card{background:#fff;border-radius:20px;padding:26px 24px 22px;box-shadow:0 2px 16px rgba(26,43,60,.07);display:flex;flex-direction:column;gap:0;transition:transform .2s ease,box-shadow .2s ease;position:relative}',
    '.mbb-card:hover{transform:translateY(-4px);box-shadow:0 10px 32px rgba(26,43,60,.13)}',
    '.mbb-card::before{content:"";position:absolute;top:0;left:0;right:0;height:4px;background:#38b6ff;border-radius:20px 20px 0 0}',
    '.mbb-card-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:18px}',
    '.mbb-program-badge{background:#1a2b3c;color:#fff;font-size:.68rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:5px 12px;border-radius:100px}',
    '.mbb-expiring-badge{background:#fff3cd;color:#c07000;font-size:.68rem;font-weight:700;padding:5px 10px;border-radius:100px;letter-spacing:.02em}',
    '.mbb-bonus-wrap{margin-bottom:4px}',
    '.mbb-bonus{font-family:"Fraunces",serif;font-size:3.4rem;font-weight:700;color:#38b6ff;line-height:1;display:block}',
    '.mbb-bonus-label{font-size:.72rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#a0b0be;margin-top:2px;display:block}',
    '.mbb-partner{font-family:"Fraunces",serif;font-size:1.2rem;font-weight:600;color:#1a2b3c;line-height:1.25;margin:14px 0 16px}',
    '.mbb-divider{height:1px;background:#f0ece3;margin-bottom:14px}',
    '.mbb-meta{display:flex;flex-direction:column;gap:7px}',
    '.mbb-meta-row{display:flex;justify-content:space-between;align-items:center;font-size:.82rem}',
    '.mbb-meta-label{color:#a0b0be;font-weight:500}',
    '.mbb-meta-value{color:#1a2b3c;font-weight:600}',
    '.mbb-meta-value.expiring{color:#c07000}',
    '.mbb-info-icon{display:inline-flex;align-items:center;justify-content:center;width:14px;height:14px;border-radius:100px;background:#d8e4ee;color:#6b7e8f;font-size:9px;font-weight:700;font-style:normal;cursor:default;line-height:1;flex-shrink:0;margin-left:4px;vertical-align:middle}',
    '#mbb-tip{position:fixed;background:#1a2b3c;color:#fff;font-family:"Inter",sans-serif;font-size:.72rem;font-weight:400;line-height:1.4;padding:7px 10px;border-radius:8px;white-space:nowrap;z-index:99999;pointer-events:none;display:none}',
    '#mbb-tip::after{content:"";position:absolute;top:100%;left:50%;transform:translateX(-50%);border:5px solid transparent;border-top-color:#1a2b3c}',
    '.mbb-state{grid-column:1/-1;text-align:center;padding:56px 24px;color:#a0b0be;font-size:.95rem}',
    '.mbb-section-label{font-family:"Fraunces",serif;font-size:1.1rem;font-weight:600;color:#a0b0be;text-align:center;margin-bottom:20px;max-width:1080px;margin-left:auto;margin-right:auto}',
    '.mbb-expired-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;max-width:1080px;margin:0 auto;opacity:.55}',
    '@media(max-width:860px){.mbb-expired-grid{grid-template-columns:repeat(2,1fr)}}',
    '@media(max-width:540px){.mbb-expired-grid{grid-template-columns:1fr}}',
    '.mbb-card.mbb-expired{background:#f3f0ea;box-shadow:none}',
    '.mbb-card.mbb-expired::before{background:#c8bfb0}',
    '.mbb-card.mbb-expired .mbb-bonus{color:#bbb}',
    '.mbb-card.mbb-expired .mbb-program-badge{background:#9aabbb}',
    '.mbb-card.mbb-expired:hover{transform:none;box-shadow:none}',
    '.mbb-expired-tag{background:#e2ddd4;color:#8a9aaa;font-size:.68rem;font-weight:700;letter-spacing:.04em;padding:5px 10px;border-radius:100px}'
  ].join('');
  document.head.appendChild(style);

  /* ── Inject HTML ── */
  var scripts = document.getElementsByTagName('script');
  var me = scripts[scripts.length - 1];
  var wrapper = document.createElement('div');
  wrapper.innerHTML = [
    '<div class="mbb-tracker">',
    '  <div class="mbb-header">',
    '    <h2 class="mbb-title">Active Transfer Bonuses</h2>',
    '    <p class="mbb-subtitle">All current transfer bonus offers — updated regularly</p>',
    '    <p class="mbb-updated" id="mbb-updated"></p>',
    '  </div>',
    '  <div class="mbb-filters" id="mbb-filters"><button class="mbb-filter-btn active" data-filter="all">All Bonuses</button></div>',
    '  <div class="mbb-grid" id="mbb-grid"><div class="mbb-state">Loading bonuses…</div></div>',
    '  <div id="mbb-expired-wrap" style="display:none">',
    '    <p class="mbb-section-label">Recently Expired</p>',
    '    <div class="mbb-expired-grid" id="mbb-expired-grid"></div>',
    '  </div>',
    '</div>'
  ].join('');
  me.parentNode.insertBefore(wrapper, me);

  /* ── Body-level tooltip ── */
  var tip = document.createElement('div');
  tip.id = 'mbb-tip';
  document.body.appendChild(tip);

  document.addEventListener('mouseover', function(e) {
    var icon = e.target.closest ? e.target.closest('.mbb-info-icon') : null;
    if (!icon) return;
    tip.textContent = icon.getAttribute('data-tip');
    tip.style.visibility = 'hidden';
    tip.style.display = 'block';
    var r   = icon.getBoundingClientRect();
    var tw  = tip.offsetWidth;
    var th  = tip.offsetHeight;
    var left = r.left + r.width / 2 - tw / 2;
    left = Math.max(8, Math.min(left, window.innerWidth - tw - 8));
    tip.style.left = left + 'px';
    tip.style.top  = (r.top + window.scrollY - th - 8) + 'px';
    tip.style.visibility = 'visible';
  });
  document.addEventListener('mouseout', function(e) {
    if (e.target.closest && e.target.closest('.mbb-info-icon')) tip.style.display = 'none';
  });

  /* ── Data & logic ── */
  var API_URL = 'https://script.google.com/macros/s/AKfycby5q9p_Ik2MA8ePJCH0PjdDeRaCqmO2eSpRRGM6SV3Xf6n4WgI5_gUp3ioNqy6dEbF4/exec';

  function norm(p) {
    p = (p || '').toLowerCase();
    if (p.includes('amex') || p.includes('american express') || p.includes('membership')) return 'Amex';
    if (p.includes('bilt'))        return 'Bilt';
    if (p.includes('capital one')) return 'Capital One';
    if (p.includes('chase') || p.includes('ultimate')) return 'Chase';
    if (p.includes('citi') || p.includes('thankyou')) return 'Citi';
    return p;
  }

  function parseDate(s) {
    if (!s) return null;
    s = String(s).trim();
    var pts = s.split('/');
    if (pts.length === 3) {
      var y = parseInt(pts[2], 10);
      if (y < 100) y += 2000;
      return new Date(y, parseInt(pts[0], 10) - 1, parseInt(pts[1], 10));
    }
    var d = new Date(s);
    return isNaN(d) ? null : d;
  }

  function today() { var d = new Date(); d.setHours(0,0,0,0); return d; }

  function daysUntil(s) {
    var d = parseDate(s);
    if (!d) return Infinity;
    return Math.ceil((d - today()) / 86400000);
  }

  function daysAgo(s) {
    var d = parseDate(s);
    if (!d) return Infinity;
    return Math.ceil((today() - d) / 86400000);
  }

  function fmtDate(s) {
    var d = parseDate(s);
    if (!d) return s;
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }

  function fmtBonus(val) {
    if (!val || val === '—') return '—';
    var s = String(val).trim();
    if (s.indexOf('%') !== -1) return s;
    var n = parseFloat(s);
    if (isNaN(n)) return s;
    if (n > 0 && n < 1) return Math.round(n * 100) + '%';
    return Math.round(n) + '%';
  }

  function card(row, expired) {
    var program  = norm(row['Program']);
    var partner  = row['Partner'] || '—';
    var bonus    = fmtBonus(row['Bonus']);
    var end      = row['End Date'] || '';
    var ratio    = row['Transfer Ratio'] || '1:1';
    var days     = daysUntil(end);
    var expiring = !expired && days >= 0 && days <= 7;

    var badge = expired
      ? '<span class="mbb-expired-tag">Expired</span>'
      : expiring ? '<span class="mbb-expiring-badge">⚡ Expiring Soon</span>' : '';

    var expiresVal = expired
      ? '<span class="mbb-meta-value">' + fmtDate(end) + '</span>'
      : days === 0 ? '<span class="mbb-meta-value expiring">Today</span>'
      : days === 1 ? '<span class="mbb-meta-value expiring">Tomorrow</span>'
      : expiring   ? '<span class="mbb-meta-value expiring">In ' + days + ' days</span>'
      :              '<span class="mbb-meta-value">' + fmtDate(end) + '</span>';

    return '<div class="mbb-card' + (expired ? ' mbb-expired' : '') + '">'
      + '<div class="mbb-card-top"><span class="mbb-program-badge">' + program + '</span>' + badge + '</div>'
      + '<div class="mbb-bonus-wrap"><span class="mbb-bonus">' + bonus + '</span><span class="mbb-bonus-label">Transfer Bonus</span></div>'
      + '<div class="mbb-partner">' + partner + '</div>'
      + '<div class="mbb-divider"></div>'
      + '<div class="mbb-meta">'
      + '<div class="mbb-meta-row"><span class="mbb-meta-label">Transfer Ratio'
      + '<i class="mbb-info-icon" data-tip="Ratio already includes the transfer bonus amount">i</i>'
      + '</span><span class="mbb-meta-value">' + ratio + '</span></div>'
      + '<div class="mbb-meta-row"><span class="mbb-meta-label">' + (expired ? 'Expired' : 'Expires') + '</span>' + expiresVal + '</div>'
      + '</div></div>';
  }

  function render(data, filter) {
    var active  = data.filter(function(r){ return daysUntil(r['End Date']) >= 0; });
    var expired = data.filter(function(r){ return daysUntil(r['End Date']) < 0 && daysAgo(r['End Date']) <= 30; });
    var shown   = filter === 'all' ? active : active.filter(function(r){ return norm(r['Program']) === filter; });

    document.getElementById('mbb-grid').innerHTML = shown.length
      ? shown.map(function(r){ return card(r, false); }).join('')
      : '<div class="mbb-state">No active bonuses for this program right now.</div>';

    var wrap = document.getElementById('mbb-expired-wrap');
    if (expired.length) {
      wrap.style.display = 'block';
      document.getElementById('mbb-expired-grid').innerHTML = expired.map(function(r){ return card(r, true); }).join('');
    } else {
      wrap.style.display = 'none';
    }
  }

  function buildFilters(data) {
    var active   = data.filter(function(r){ return daysUntil(r['End Date']) >= 0; });
    var programs = [];
    active.forEach(function(r){ var p = norm(r['Program']); if (programs.indexOf(p) === -1) programs.push(p); });
    programs.sort();

    var el = document.getElementById('mbb-filters');
    el.innerHTML = '<button class="mbb-filter-btn active" data-filter="all">All Bonuses <span class="mbb-count">' + active.length + '</span></button>';
    programs.forEach(function(p) {
      var n = active.filter(function(r){ return norm(r['Program']) === p; }).length;
      el.innerHTML += '<button class="mbb-filter-btn" data-filter="' + p + '">' + p + ' <span class="mbb-count">' + n + '</span></button>';
    });
    el.querySelectorAll('.mbb-filter-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        el.querySelectorAll('.mbb-filter-btn').forEach(function(b){ b.classList.remove('active'); });
        btn.classList.add('active');
        render(data, btn.getAttribute('data-filter'));
      });
    });
  }

  fetch(API_URL)
    .then(function(r){ return r.json(); })
    .then(function(data) {
      buildFilters(data);
      render(data, 'all');
      document.getElementById('mbb-updated').textContent =
        'Last updated: ' + new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    })
    .catch(function() {
      document.getElementById('mbb-grid').innerHTML =
        '<div class="mbb-state">Unable to load bonuses — please check back shortly.</div>';
    });
})();
