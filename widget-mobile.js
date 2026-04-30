(function () {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Fraunces:wght@400;600;700&family=Inter:wght@400;500;600&display=swap';
  document.head.appendChild(link);

  var style = document.createElement('style');
  style.textContent = [
    '.mbm,.mbm *,.mbm *::before,.mbm *::after{box-sizing:border-box;margin:0;padding:0}',

    /* Wrapper — fully constrained */
    '.mbm{font-family:"Inter",sans-serif;background:#faf6ee;padding:18px 0 30px;width:100%;display:block}',
    '.mbm-inner{padding:0;width:100%}',

    /* Header */
    '.mbm-header{text-align:center;margin-bottom:18px}',
    '.mbm-title{font-family:"Fraunces",serif;font-size:1.13rem;font-weight:700;color:#1a2b3c;line-height:1.2;margin-bottom:5px}',
    '.mbm-subtitle{font-size:.62rem;color:#6b7e8f;margin-bottom:3px}',
    '.mbm-updated{font-size:.53rem;color:#a0b0be}',

    /* Filters */
    '.mbm-select-wrap{padding:0 10px;margin-bottom:12px;width:100%;box-sizing:border-box}',
    '.mbm-select{width:100%;padding:8px 36px 8px 12px;border-radius:100px;border:2px solid #1a2b3c;background:#fff;color:#1a2b3c;font-family:"Inter",sans-serif;font-size:.64rem;font-weight:600;cursor:pointer;appearance:none;-webkit-appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'10\' height=\'6\' viewBox=\'0 0 10 6\'%3E%3Cpath d=\'M1 1l4 4 4-4\' stroke=\'%231a2b3c\' stroke-width=\'2\' fill=\'none\' stroke-linecap=\'round\'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 12px center}',

    /* List */
    '.mbm-list{display:flex;flex-direction:column;gap:7px;margin-bottom:24px;width:100%;padding:0 10px;box-sizing:border-box}',

    /* Card */
    '.mbm-card{background:#fff;border-radius:11px;border-top:3px solid #38b6ff;padding:8px 9px;box-shadow:0 2px 8px rgba(26,43,60,.06);width:100%;display:block;overflow:hidden}',
    '.mbm-card-top{display:flex;align-items:center;gap:4px;margin-bottom:4px;flex-wrap:wrap}',
    '.mbm-prog{background:#1a2b3c;color:#fff;font-size:.44rem;font-weight:700;letter-spacing:.05em;text-transform:uppercase;padding:2px 6px;border-radius:100px;white-space:nowrap}',
    '.mbm-expiring{background:#fff3cd;color:#c07000;font-size:.44rem;font-weight:700;padding:2px 6px;border-radius:100px;white-space:nowrap}',
    '.mbm-card-mid{display:flex;align-items:baseline;gap:6px;margin-bottom:3px;flex-wrap:wrap}',
    '.mbm-bonus{font-family:"Fraunces",serif;font-size:1.5rem;font-weight:700;color:#38b6ff;line-height:1}',
    '.mbm-bonus-lbl{font-size:.45rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#a0b0be}',
    '.mbm-partner{font-family:"Fraunces",serif;font-size:.71rem;font-weight:600;color:#1a2b3c;line-height:1.3;margin-bottom:5px;word-wrap:break-word;overflow-wrap:break-word}',
    '.mbm-divider{height:1px;background:#f0ece3;margin-bottom:5px}',
    '.mbm-meta{display:flex;align-items:center;gap:6px;flex-wrap:wrap}',
    '.mbm-meta-item{font-size:.53rem;color:#8a9aaa}',
    '.mbm-meta-item strong{color:#1a2b3c;font-weight:600}',
    '.mbm-rating{font-size:.51rem;font-weight:700;padding:2px 5px;border-radius:100px;display:inline-flex;align-items:center;gap:2px}',
    '.mbm-rating.pos{background:#e6f9f0;color:#1a7a4a}',
    '.mbm-rating.neg{background:#fdecea;color:#c0392b}',
    '.mbm-rating-lbl{font-size:.41rem;font-weight:700;letter-spacing:.04em;text-transform:uppercase;opacity:.8}',
    '.mbm-rating-icons{font-size:.47rem}',

    /* State */
    '.mbm-state{text-align:center;padding:28px 16px;color:#a0b0be;font-size:.66rem}',

    /* Expired */
    '.mbm-exp-label{font-family:"Fraunces",serif;font-size:.75rem;font-weight:600;color:#a0b0be;text-align:center;margin-bottom:10px}',
    '.mbm-exp-wrap-inner{padding:0 10px;box-sizing:border-box;width:100%}',
    '.mbm-exp-list{display:flex;flex-direction:column;opacity:.65;border:1px solid #ece8e0;border-radius:9px;overflow:hidden;width:100%}',
    '.mbm-exp-row{display:flex;align-items:center;padding:7px 9px;background:#fff;border-bottom:1px solid #f0ece3;gap:8px;width:100%;overflow:hidden}',
    '.mbm-exp-row:last-child{border-bottom:none}',
    '.mbm-exp-bonus{font-family:"Fraunces",serif;font-size:.83rem;font-weight:700;color:#ccc;flex-shrink:0;width:33px;text-align:center}',
    '.mbm-exp-info{flex:1;min-width:0;overflow:hidden}',
    '.mbm-exp-prog{background:#e2ddd4;color:#8a9aaa;font-size:.43rem;font-weight:700;letter-spacing:.05em;text-transform:uppercase;padding:2px 5px;border-radius:100px;display:inline-block;margin-bottom:2px}',
    '.mbm-exp-partner{font-size:.6rem;font-weight:600;color:#9aabbb;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block}',
    '.mbm-exp-date{font-size:.50rem;color:#bbb}'
  ].join('');
  document.head.appendChild(style);

  /* ── HTML ── */
  var scripts = document.getElementsByTagName('script');
  var me = scripts[scripts.length - 1];

  /* Force page to not scroll horizontally */
  document.documentElement.style.overflowX = 'hidden';
  document.body.style.overflowX = 'hidden';

  var wrapper = document.createElement('div');
  wrapper.style.cssText = 'width:100%;max-width:100%;overflow:hidden;display:block';
  wrapper.innerHTML = [
    '<div class="mbm">',
    '  <div class="mbm-inner">',
    '    <div class="mbm-header">',
    '      <h2 class="mbm-title">Active Transfer Bonuses</h2>',
    '      <p class="mbm-subtitle">All current transfer bonus offers</p>',
    '      <p class="mbm-updated" id="mbm-updated"></p>',
    '    </div>',
    '  </div>',
    '  <div class="mbm-select-wrap">',
    '    <select class="mbm-select" id="mbm-select"><option value="all">All Programs</option></select>',
    '  </div>',
    '  <div class="mbm-inner">',
    '    <div class="mbm-list" id="mbm-list"><div class="mbm-state">Loading bonuses…</div></div>',
    '    <div id="mbm-expired-wrap" style="display:none">',
    '      <p class="mbm-exp-label">Expired Bonuses</p>',
    '      <div class="mbm-exp-wrap-inner">',
    '        <div class="mbm-exp-list" id="mbm-exp-list"></div>',
    '      </div>',
    '    </div>',
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
    return '<span class="mbm-rating ' + cls + '"><span class="mbm-rating-lbl">Advait\'s Rating</span><span class="mbm-rating-icons">' + icons + '</span></span>';
  }

  function card(row) {
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

    return '<div class="mbm-card">'
      + '<div class="mbm-card-top">'
      +   '<span class="mbm-prog">' + program + '</span>'
      +   (expiring ? '<span class="mbm-expiring">⚡ Ends Soon</span>' : '')
      + '</div>'
      + '<div class="mbm-card-mid"><span class="mbm-bonus">' + bonus + '</span><span class="mbm-bonus-lbl">Transfer Bonus</span></div>'
      + '<div class="mbm-partner">' + partner + '</div>'
      + '<div class="mbm-divider"></div>'
      + '<div class="mbm-meta">'
      +   '<span class="mbm-meta-item">Exp <strong>' + expiryStr + '</strong></span>'
      +   '<span class="mbm-meta-item">Ratio <strong>' + ratio + '</strong></span>'
      +   (rating ? rating : '')
      + '</div>'
      + '</div>';
  }

  function render(data, filter) {
    var active  = data.filter(function(r){ return daysUntil(r['End Date']) >= 0; });
    var expired = data.filter(function(r){ return daysUntil(r['End Date']) < 0; });
    var shown   = filter === 'all' ? active : active.filter(function(r){ return norm(r['Program']) === filter; });

    document.getElementById('mbm-list').innerHTML = shown.length
      ? shown.map(function(r){ return card(r); }).join('')
      : '<div class="mbm-state">No active bonuses for this program.</div>';

    var wrap = document.getElementById('mbm-expired-wrap');
    if (expired.length) {
      wrap.style.display = 'block';
      document.getElementById('mbm-exp-list').innerHTML = expired.map(function(r) {
        return '<div class="mbm-exp-row">'
          + '<div class="mbm-exp-bonus">' + fmtBonus(r['Bonus']) + '</div>'
          + '<div class="mbm-exp-info">'
          +   '<span class="mbm-exp-prog">' + norm(r['Program']) + '</span>'
          +   '<span class="mbm-exp-partner">' + (r['Partner'] || '—') + '</span>'
          +   '<span class="mbm-exp-date">Expired ' + fmtDate(r['End Date']) + '</span>'
          + '</div>'
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

    var sel = document.getElementById('mbm-select');
    sel.innerHTML = '<option value="all">All Programs (' + active.length + ')</option>';
    programs.forEach(function(p) {
      var n = active.filter(function(r){ return norm(r['Program']) === p; }).length;
      sel.innerHTML += '<option value="' + p + '">' + p + ' (' + n + ')</option>';
    });
    sel.addEventListener('change', function() {
      render(data, sel.value);
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
