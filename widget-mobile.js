(function () {
  /* ── Styles ── */
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Fraunces:wght@400;600;700&family=Inter:wght@400;500;600&display=swap';
  document.head.appendChild(link);

  var style = document.createElement('style');
  style.textContent = [
    '.mbm *,.mbm *::before,.mbm *::after{box-sizing:border-box;margin:0;padding:0}',
    '.mbm{font-family:"Inter",sans-serif;background:#faf6ee;padding:28px 14px 48px;width:100%;overflow:hidden}',

    /* Header */
    '.mbm-header{text-align:center;margin-bottom:24px}',
    '.mbm-title{font-family:"Fraunces",serif;font-size:1.5rem;font-weight:700;color:#1a2b3c;line-height:1.15;margin-bottom:6px}',
    '.mbm-subtitle{font-size:.82rem;color:#6b7e8f;margin-bottom:4px}',
    '.mbm-updated{font-size:.7rem;color:#a0b0be}',

    /* Filters — horizontal scroll */
    '.mbm-filters{display:flex;gap:7px;overflow-x:auto;padding-bottom:6px;margin-bottom:18px;-webkit-overflow-scrolling:touch;scrollbar-width:none}',
    '.mbm-filters::-webkit-scrollbar{display:none}',
    '.mbm-filter-btn{display:inline-flex;align-items:center;gap:5px;padding:6px 13px;border-radius:100px;border:2px solid #1a2b3c;background:transparent;color:#1a2b3c;font-family:"Inter",sans-serif;font-size:.75rem;font-weight:600;cursor:pointer;white-space:nowrap;flex-shrink:0;transition:all .18s ease}',
    '.mbm-filter-btn.active{background:#1a2b3c;color:#faf6ee}',
    '.mbm-count{display:inline-flex;align-items:center;justify-content:center;background:#38b6ff;color:#fff;font-size:.62rem;font-weight:700;width:15px;height:15px;border-radius:100px}',
    '.mbm-filter-btn.active .mbm-count{background:rgba(255,255,255,.25)}',

    /* List */
    '.mbm-list{display:flex;flex-direction:column;gap:9px;margin-bottom:32px}',

    /* Item card — vertical layout */
    '.mbm-item{background:#fff;border-radius:14px;border-top:3px solid #38b6ff;padding:12px 14px;display:flex;align-items:stretch;gap:10px;box-shadow:0 2px 10px rgba(26,43,60,.06);overflow:hidden;width:100%}',

    /* Left: bonus % */
    '.mbm-bonus-col{flex-shrink:0;text-align:center;width:52px;display:flex;flex-direction:column;justify-content:center}',
    '.mbm-bonus{font-family:"Fraunces",serif;font-size:1.5rem;font-weight:700;color:#38b6ff;line-height:1}',
    '.mbm-bonus-lbl{font-size:.55rem;font-weight:600;letter-spacing:.07em;text-transform:uppercase;color:#a0b0be;margin-top:2px}',

    /* Divider */
    '.mbm-vdivider{width:1px;background:#f0ece3;flex-shrink:0;align-self:stretch}',

    /* Right: info */
    '.mbm-info{flex:1;min-width:0;overflow:hidden}',
    '.mbm-info-top{display:flex;align-items:center;gap:5px;margin-bottom:3px;flex-wrap:nowrap;overflow:hidden}',
    '.mbm-prog{background:#1a2b3c;color:#fff;font-size:.58rem;font-weight:700;letter-spacing:.05em;text-transform:uppercase;padding:3px 7px;border-radius:100px;white-space:nowrap;flex-shrink:0}',
    '.mbm-expiring{background:#fff3cd;color:#c07000;font-size:.58rem;font-weight:700;padding:3px 7px;border-radius:100px;white-space:nowrap;flex-shrink:0}',
    '.mbm-partner{font-family:"Fraunces",serif;font-size:.9rem;font-weight:600;color:#1a2b3c;line-height:1.25;margin-bottom:5px;word-break:break-word}',
    '.mbm-meta{display:flex;align-items:center;gap:8px;flex-wrap:wrap}',
    '.mbm-meta-item{font-size:.7rem;color:#8a9aaa;white-space:nowrap}',
    '.mbm-meta-item strong{color:#1a2b3c;font-weight:600}',
    '.mbm-rating{font-size:.68rem;font-weight:700;padding:2px 6px;border-radius:100px;white-space:nowrap}',
    '.mbm-rating.pos{background:#e6f9f0;color:#1a7a4a}',
    '.mbm-rating.neg{background:#fdecea;color:#c0392b}',

    /* Empty/loading */
    '.mbm-state{text-align:center;padding:40px 16px;color:#a0b0be;font-size:.9rem}',

    /* Expired list */
    '.mbm-exp-label{font-family:"Fraunces",serif;font-size:1rem;font-weight:600;color:#a0b0be;text-align:center;margin-bottom:14px}',
    '.mbm-exp-list{display:flex;flex-direction:column;opacity:.65;border:1px solid #ece8e0;border-radius:12px;overflow:hidden;width:100%}',
    '.mbm-exp-row{display:flex;align-items:center;justify-content:space-between;padding:9px 12px;background:#fff;border-bottom:1px solid #f0ece3;gap:8px;overflow:hidden}',
    '.mbm-exp-row:last-child{border-bottom:none}',
    '.mbm-exp-left{display:flex;flex-direction:column;gap:2px;min-width:0;flex:1;overflow:hidden}',
    '.mbm-exp-prog{background:#e2ddd4;color:#8a9aaa;font-size:.58rem;font-weight:700;letter-spacing:.05em;text-transform:uppercase;padding:2px 6px;border-radius:100px;display:inline-block;align-self:flex-start;margin-bottom:1px}',
    '.mbm-exp-partner{font-size:.8rem;font-weight:600;color:#9aabbb;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}',
    '.mbm-exp-date{font-size:.68rem;color:#bbb}',
    '.mbm-exp-right{text-align:right;flex-shrink:0}',
    '.mbm-exp-bonus{font-family:"Fraunces",serif;font-size:1rem;font-weight:700;color:#ccc}'
  ].join('');
  document.head.appendChild(style);

  /* ── HTML ── */
  var scripts = document.getElementsByTagName('script');
  var me = scripts[scripts.length - 1];
  var wrapper = document.createElement('div');
  wrapper.innerHTML = [
    '<div class="mbm">',
    '  <div class="mbm-header">',
    '    <h2 class="mbm-title">Active Transfer Bonuses</h2>',
    '    <p class="mbm-subtitle">All current transfer bonus offers</p>',
    '    <p class="mbm-updated" id="mbm-updated"></p>',
    '  </div>',
    '  <div class="mbm-filters" id="mbm-filters"><button class="mbm-filter-btn active" data-filter="all">All</button></div>',
    '  <div class="mbm-list" id="mbm-list"><div class="mbm-state">Loading bonuses…</div></div>',
    '  <div id="mbm-expired-wrap" style="display:none">',
    '    <p class="mbm-exp-label">Expired Bonuses</p>',
    '    <div class="mbm-exp-list" id="mbm-exp-list"></div>',
    '  </div>',
    '</div>'
  ].join('');
  me.parentNode.insertBefore(wrapper, me);

  /* ── Helpers ── */
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
    var d = new Date(s); return isNaN(d) ? null : d;
  }

  function today() { var d = new Date(); d.setHours(0,0,0,0); return d; }

  function daysUntil(s) {
    var d = parseDate(s); if (!d) return Infinity;
    return Math.ceil((d - today()) / 86400000);
  }

  function fmtDate(s) {
    var d = parseDate(s); if (!d) return s;
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

  function fmtRating(val) {
    var n = parseInt(val, 10);
    if (!n || n === 0) return '';
    var icon = n > 0 ? '👍' : '👎';
    var cls  = n > 0 ? 'pos' : 'neg';
    var icons = '';
    for (var i = 0; i < Math.abs(n); i++) icons += icon;
    return '<span class="mbm-rating ' + cls + '">' + icons + '</span>';
  }

  /* ── Render active list ── */
  function item(row) {
    var program  = norm(row['Program']);
    var partner  = row['Partner'] || '—';
    var bonus    = fmtBonus(row['Bonus']);
    var end      = row['End Date'] || '';
    var ratio    = row['Bonus Ratio'] || row['Transfer Ratio'] || '—';
    var rating   = fmtRating(row['Rating']);
    var days     = daysUntil(end);
    var expiring = days >= 0 && days <= 7;

    var expiryStr = days === 0 ? 'Today'
      : days === 1 ? 'Tomorrow'
      : expiring   ? 'In ' + days + ' days'
      : fmtDate(end);

    return '<div class="mbm-item">'
      + '<div class="mbm-bonus-col"><span class="mbm-bonus">' + bonus + '</span><span class="mbm-bonus-lbl">Bonus</span></div>'
      + '<div class="mbm-vdivider"></div>'
      + '<div class="mbm-info">'
      +   '<div class="mbm-info-top">'
      +     '<span class="mbm-prog">' + program + '</span>'
      +     (expiring ? '<span class="mbm-expiring">⚡ Soon</span>' : '')
      +   '</div>'
      +   '<div class="mbm-partner">' + partner + '</div>'
      +   '<div class="mbm-meta">'
      +     '<span class="mbm-meta-item">Exp <strong>' + expiryStr + '</strong></span>'
      +     '<span class="mbm-meta-item">Ratio <strong>' + ratio + '</strong></span>'
      +     (rating ? rating : '')
      +   '</div>'
      + '</div>'
      + '</div>';
  }

  function render(data, filter) {
    var active  = data.filter(function(r){ return daysUntil(r['End Date']) >= 0; });
    var expired = data.filter(function(r){ return daysUntil(r['End Date']) < 0; });
    var shown   = filter === 'all' ? active : active.filter(function(r){ return norm(r['Program']) === filter; });

    document.getElementById('mbm-list').innerHTML = shown.length
      ? shown.map(function(r){ return item(r); }).join('')
      : '<div class="mbm-state">No active bonuses for this program.</div>';

    var wrap = document.getElementById('mbm-expired-wrap');
    if (expired.length) {
      wrap.style.display = 'block';
      document.getElementById('mbm-exp-list').innerHTML = expired.map(function(r) {
        return '<div class="mbm-exp-row">'
          + '<div class="mbm-exp-left">'
          +   '<span class="mbm-exp-prog">' + norm(r['Program']) + '</span>'
          +   '<span class="mbm-exp-partner">' + (r['Partner'] || '—') + '</span>'
          +   '<span class="mbm-exp-date">Expired ' + fmtDate(r['End Date']) + '</span>'
          + '</div>'
          + '<div class="mbm-exp-right"><span class="mbm-exp-bonus">' + fmtBonus(r['Bonus']) + '</span></div>'
          + '</div>';
      }).join('');
    } else {
      wrap.style.display = 'none';
    }
  }

  function buildFilters(data) {
    var active   = data.filter(function(r){ return daysUntil(r['End Date']) >= 0; });
    var programs = [];
    active.forEach(function(r){ var p = norm(r['Program']); if (programs.indexOf(p) === -1) programs.push(p); });
    programs.sort();

    var el = document.getElementById('mbm-filters');
    el.innerHTML = '<button class="mbm-filter-btn active" data-filter="all">All <span class="mbm-count">' + active.length + '</span></button>';
    programs.forEach(function(p) {
      var n = active.filter(function(r){ return norm(r['Program']) === p; }).length;
      el.innerHTML += '<button class="mbm-filter-btn" data-filter="' + p + '">' + p + ' <span class="mbm-count">' + n + '</span></button>';
    });
    el.querySelectorAll('.mbm-filter-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        el.querySelectorAll('.mbm-filter-btn').forEach(function(b){ b.classList.remove('active'); });
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
      document.getElementById('mbm-updated').textContent =
        'Last updated: ' + new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    })
    .catch(function() {
      document.getElementById('mbm-list').innerHTML =
        '<div class="mbm-state">Unable to load bonuses — please check back shortly.</div>';
    });
})();
