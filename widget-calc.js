(function () {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Fraunces:wght@400;600;700&family=Inter:wght@400;500;600&display=swap';
  document.head.appendChild(link);

  var style = document.createElement('style');
  style.textContent = [
    '.mbc,.mbc *,.mbc *::before,.mbc *::after{box-sizing:border-box;margin:0;padding:0}',
    '.mbc{font-family:"Inter",sans-serif;background:#faf6ee;padding:40px 0 60px;width:100%;display:block}',
    '.mbc-inner{max-width:700px;margin:0 auto;padding:0 24px}',

    /* Header */
    '.mbc-header{text-align:center;margin-bottom:28px}',
    '.mbc-title{font-family:"Fraunces",serif;font-size:2rem;font-weight:700;color:#1a2b3c;line-height:1.2;margin-bottom:8px}',
    '.mbc-subtitle{font-size:.88rem;color:#6b7e8f;line-height:1.5}',

    /* Mode toggle */
    '.mbc-toggle{display:flex;background:#e8e2d8;border-radius:100px;padding:4px;margin-bottom:24px;gap:4px}',
    '.mbc-tog{flex:1;padding:10px 16px;border-radius:100px;border:none;background:transparent;color:#6b7e8f;font-family:"Inter",sans-serif;font-size:.82rem;font-weight:600;cursor:pointer;transition:background .18s,color .18s;text-align:center}',
    '.mbc-tog.active{background:#1a2b3c;color:#fff}',

    /* Dropdowns row */
    '.mbc-selects{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:20px}',
    '.mbc-sel-group{display:flex;flex-direction:column;gap:7px}',
    '.mbc-lbl{font-size:.67rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#8a9aaa}',
    '.mbc-sel{width:100%;padding:12px 38px 12px 18px;border-radius:100px;border:2px solid #1a2b3c;background:#fff;color:#1a2b3c;font-family:"Inter",sans-serif;font-size:.9rem;font-weight:600;cursor:pointer;appearance:none;-webkit-appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'8\' viewBox=\'0 0 12 8\'%3E%3Cpath d=\'M1 1l5 5 5-5\' stroke=\'%231a2b3c\' stroke-width=\'2\' fill=\'none\' stroke-linecap=\'round\'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 16px center}',
    '.mbc-sel:disabled{opacity:.35;cursor:default;border-color:#ccd5dd}',

    /* Rate card */
    '.mbc-rate-card{background:#fff;border-radius:16px;padding:20px 24px;box-shadow:0 2px 12px rgba(26,43,60,.07);margin-bottom:20px}',
    '.mbc-rate-ph{color:#b8c4cc;font-size:.85rem;text-align:center;padding:10px 0}',
    '.mbc-bonus-pill{display:inline-flex;align-items:center;gap:6px;background:#e6f9f0;color:#1a7a4a;font-size:.7rem;font-weight:700;padding:5px 12px;border-radius:100px;margin-bottom:14px;letter-spacing:.02em}',
    '.mbc-rate-row{display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid #f4f0e8}',
    '.mbc-rate-row:last-child{border-bottom:none}',
    '.mbc-rate-key{font-size:.76rem;color:#8a9aaa;font-weight:500}',
    '.mbc-rate-val{font-family:"Fraunces",serif;font-size:1.2rem;font-weight:700;color:#1a2b3c}',
    '.mbc-rate-val.hi{color:#38b6ff}',

    /* Points input */
    '.mbc-inp-group{margin-bottom:20px}',
    '.mbc-inp-lbl{display:block;font-size:.67rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#8a9aaa;margin-bottom:8px}',
    '.mbc-inp-wrap{position:relative}',
    '.mbc-inp{width:100%;padding:25px 80px 25px 24px!important;min-height:76px!important;border-radius:100px!important;border:2px solid #1a2b3c;background:#fff;color:#1a2b3c;font-family:"Fraunces",serif;font-size:1.4rem;font-weight:700;line-height:1;outline:none;transition:border-color .15s;-webkit-appearance:none;appearance:none;box-sizing:border-box!important}',
    '.mbc-inp:focus{border-color:#38b6ff;box-shadow:0 0 0 3px rgba(56,182,255,.12)}',
    '.mbc-inp::placeholder{color:#d0dae3;font-size:.95rem;font-family:"Inter",sans-serif;font-weight:400;line-height:1}',
    '.mbc-inp-suf{position:absolute;right:26px;top:50%;transform:translateY(-50%);font-size:.67rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#a0b0be;pointer-events:none}',

    /* Result */
    '.mbc-result{background:#1a2b3c;border-radius:16px;padding:28px 32px;display:none}',
    '.mbc-result.on{display:block}',
    '.mbc-res-lbl{font-size:.65rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:#4a6a82;margin-bottom:5px}',
    '.mbc-res-num{font-family:"Fraunces",serif;font-size:3.4rem;font-weight:700;color:#38b6ff;line-height:1;margin-bottom:4px}',
    '.mbc-res-prog{font-size:.82rem;color:#6a8899;margin-bottom:20px}',
    '.mbc-res-row{display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-top:1px solid rgba(255,255,255,.07)}',
    '.mbc-res-row-k{font-size:.78rem;color:#5a7a92}',
    '.mbc-res-row-v{font-family:"Fraunces",serif;font-size:1.1rem;font-weight:700;color:#c8d8e4}',
    '.mbc-res-row-v.blue{color:#38b6ff}',

    /* Footer */
    '.mbc-footer{text-align:center;margin-top:24px}',
    '.mbc-footer a{font-size:.78rem;color:#8a9aaa;text-decoration:none;border-bottom:1px solid #c8d4dc;padding-bottom:1px;transition:color .15s,border-color .15s}',
    '.mbc-footer a:hover{color:#1a2b3c;border-color:#1a2b3c}',

    /* State */
    '.mbc-state{text-align:center;padding:48px 16px;color:#a0b0be;font-size:.88rem}',
  ].join('');
  document.head.appendChild(style);

  var scripts = document.getElementsByTagName('script');
  var me = scripts[scripts.length - 1];

  var wrapper = document.createElement('div');
  wrapper.innerHTML = [
    '<div class="mbc">',
    '  <div class="mbc-inner">',
    '    <div class="mbc-header">',
    '      <h2 class="mbc-title">Transfer Points Calculator</h2>',
    '      <p class="mbc-subtitle">See exactly how many points you\'ll receive — including any active transfer bonuses</p>',
    '    </div>',
    '    <div id="mbc-body"><div class="mbc-state">Loading…</div></div>',
    '    <div class="mbc-footer"><a href="https://milesbeyondborders.com/transfer-bonuses" target="_blank">View all active transfer bonuses →</a></div>',
    '  </div>',
    '</div>',
  ].join('');
  me.parentNode.insertBefore(wrapper, me);

  /* ── Helpers ── */
  var API = 'https://script.google.com/macros/s/AKfycby5q9p_Ik2MA8ePJCH0PjdDeRaCqmO2eSpRRGM6SV3Xf6n4WgI5_gUp3ioNqy6dEbF4/exec';
  var allRates = [], allBonuses = [];
  var cur = { bank: '', loyalty: '', ratio: 1, bonusMult: 1, mode: 'forward' };

  function normBank(p) {
    p = (p || '').toLowerCase();
    if (p.includes('amex') || p.includes('american express') || p.includes('membership')) return 'Amex';
    if (p.includes('bilt'))         return 'Bilt';
    if (p.includes('capital one'))  return 'Capital One';
    if (p.includes('chase') || p.includes('ultimate')) return 'Chase';
    if (p.includes('citi') || p.includes('thankyou') || p.includes('thank you')) return 'Citi';
    if (p.includes('rove'))         return 'Rove';
    if (p.includes('wells fargo'))  return 'Wells Fargo';
    return p;
  }

  function parseRatio(s) {
    var parts = String(s || '1:1').split(':');
    if (parts.length !== 2) return 1;
    var a = parseFloat(parts[0]), b = parseFloat(parts[1]);
    return (a && b) ? b / a : 1;
  }

  function parseBonusFrac(val) {
    if (!val || val === '—') return 0;
    var s = String(val).trim();
    if (s.indexOf('%') !== -1) return parseFloat(s) / 100;
    var n = parseFloat(s);
    if (isNaN(n)) return 0;
    return (n > 0 && n < 1) ? n : n / 100;
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

  function isActive(endDate) {
    var d = parseDate(endDate); if (!d) return false;
    var now = new Date(); now.setHours(0, 0, 0, 0);
    return d >= now;
  }

  function fmtDate(s) {
    var d = parseDate(s); if (!d) return s;
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }

  function fmtNum(n) { return Math.round(n).toLocaleString('en-US'); }
  function fmtEffRate(r) { return '1:' + (Number.isInteger(r) ? r : r.toFixed(2)); }

  function normStr(s) { return (s || '').toLowerCase().replace(/[^a-z0-9]/g, ''); }

  function findBonus(bank, loyalty) {
    var bl = normStr(loyalty);
    return allBonuses.find(function (b) {
      var partner = normStr(b['Partner']);
      return normBank(b['Program']) === bank
        && (partner === bl || partner.includes(bl) || bl.includes(partner))
        && isActive(b['End Date']);
    }) || null;
  }

  /* ── Rate card ── */
  function showRateCard(bank, loyalty) {
    var rate = allRates.find(function (r) {
      return r['Bank Program'] === bank && r['Loyalty Program'] === loyalty;
    });
    if (!rate) return;

    var bonus     = findBonus(bank, loyalty);
    var baseRatio = parseRatio(rate['Transfer Rate']);
    var bonusFrac = bonus ? parseBonusFrac(bonus['Bonus']) : 0;
    var bonusMult = 1 + bonusFrac;
    var effRatio  = baseRatio * bonusMult;

    cur.ratio     = baseRatio;
    cur.bonusMult = bonusMult;
    cur.loyalty   = loyalty;
    cur.bank      = bank;

    var html = '';
    if (bonus) {
      var pct = Math.round(bonusFrac * 100);
      html += '<div class="mbc-bonus-pill">🎉 ' + pct + '% Transfer Bonus Active &nbsp;·&nbsp; Ends ' + fmtDate(bonus['End Date']) + '</div>';
    }
    html += '<div class="mbc-rate-row"><span class="mbc-rate-key">Base Transfer Rate</span><span class="mbc-rate-val">' + rate['Transfer Rate'] + '</span></div>';
    if (bonus) {
      html += '<div class="mbc-rate-row"><span class="mbc-rate-key">Active Bonus</span><span class="mbc-rate-val hi">+' + Math.round(bonusFrac * 100) + '%</span></div>';
      html += '<div class="mbc-rate-row"><span class="mbc-rate-key">Effective Rate</span><span class="mbc-rate-val hi">' + fmtEffRate(effRatio) + '</span></div>';
    }

    document.getElementById('mbc-rate-ph').style.display = 'none';
    var rc = document.getElementById('mbc-rate-content');
    rc.innerHTML = html;
    rc.style.display = 'block';
    document.getElementById('mbc-inp-section').style.display = 'block';
    updateInputLabel();
    calculate();
  }

  /* ── Update input label based on mode ── */
  function updateInputLabel() {
    var lbl = document.getElementById('mbc-inp-lbl');
    var suf = document.getElementById('mbc-inp-suf');
    if (!lbl) return;
    if (cur.mode === 'reverse') {
      lbl.textContent = cur.loyalty ? cur.loyalty + ' points you need' : 'Loyalty points you need';
      if (suf) suf.textContent = cur.loyalty ? cur.loyalty.split(' ')[0].toLowerCase() + ' pts' : 'pts';
    } else {
      lbl.textContent = 'Points to transfer from ' + (cur.bank || 'your bank');
      if (suf) suf.textContent = 'pts';
    }
    var inp = document.getElementById('mbc-input');
    if (inp) { inp.value = ''; inp.placeholder = 'e.g. ' + (cur.mode === 'reverse' ? '100,000' : '50,000'); }
    var res = document.getElementById('mbc-result');
    if (res) res.classList.remove('on');
  }

  /* ── Calculate ── */
  function calculate() {
    var inp = document.getElementById('mbc-input');
    var raw = inp ? inp.value.replace(/[^0-9]/g, '') : '';
    var pts = parseInt(raw, 10);
    var res = document.getElementById('mbc-result');
    if (!res) return;
    if (!pts || !cur.ratio) { res.classList.remove('on'); return; }

    var html = '';

    if (cur.mode === 'forward') {
      var baseOut  = pts * cur.ratio;
      var bonusOut = pts * cur.ratio * cur.bonusMult;
      var hasBonus = cur.bonusMult > 1;
      var mainNum  = hasBonus ? bonusOut : baseOut;

      html += '<div class="mbc-res-lbl">You\'ll receive</div>';
      html += '<div class="mbc-res-num">' + fmtNum(mainNum) + '</div>';
      html += '<div class="mbc-res-prog">' + cur.loyalty + ' points</div>';
      if (hasBonus) {
        html += '<div class="mbc-res-row"><span class="mbc-res-row-k">With transfer bonus</span><span class="mbc-res-row-v blue">' + fmtNum(bonusOut) + ' pts</span></div>';
        html += '<div class="mbc-res-row"><span class="mbc-res-row-k">Without bonus (base rate)</span><span class="mbc-res-row-v">' + fmtNum(baseOut) + ' pts</span></div>';
      }
      html += '<div class="mbc-res-row"><span class="mbc-res-row-k">Points transferred from ' + cur.bank + '</span><span class="mbc-res-row-v">' + fmtNum(pts) + ' pts</span></div>';

    } else {
      /* Reverse: pts = loyalty points needed, solve for bank points */
      var baseNeeded  = pts / cur.ratio;
      var bonusNeeded = pts / (cur.ratio * cur.bonusMult);
      var hasBonus    = cur.bonusMult > 1;
      var mainNum     = hasBonus ? bonusNeeded : baseNeeded;

      html += '<div class="mbc-res-lbl">You\'ll need to transfer</div>';
      html += '<div class="mbc-res-num">' + fmtNum(mainNum) + '</div>';
      html += '<div class="mbc-res-prog">' + cur.bank + ' points</div>';
      if (hasBonus) {
        html += '<div class="mbc-res-row"><span class="mbc-res-row-k">With active bonus</span><span class="mbc-res-row-v blue">' + fmtNum(bonusNeeded) + ' pts</span></div>';
        html += '<div class="mbc-res-row"><span class="mbc-res-row-k">Without bonus (base rate)</span><span class="mbc-res-row-v">' + fmtNum(baseNeeded) + ' pts</span></div>';
      }
      html += '<div class="mbc-res-row"><span class="mbc-res-row-k">Target ' + cur.loyalty + ' points</span><span class="mbc-res-row-v">' + fmtNum(pts) + ' pts</span></div>';
    }

    res.innerHTML = html;
    res.classList.add('on');
  }

  /* ── Build UI ── */
  function buildUI(rates) {
    var banks = [];
    rates.forEach(function (r) { if (banks.indexOf(r['Bank Program']) === -1) banks.push(r['Bank Program']); });
    banks.sort();

    document.getElementById('mbc-body').innerHTML = [
      '<div class="mbc-toggle">',
      '  <button class="mbc-tog active" id="mbc-tog-fwd">How many will I get?</button>',
      '  <button class="mbc-tog" id="mbc-tog-rev">How many do I need?</button>',
      '</div>',
      '<div class="mbc-selects">',
      '  <div class="mbc-sel-group">',
      '    <span class="mbc-lbl">1. Your Bank Program</span>',
      '    <select class="mbc-sel" id="mbc-bank-sel"><option value="">Select program…</option></select>',
      '  </div>',
      '  <div class="mbc-sel-group">',
      '    <span class="mbc-lbl">2. Transfer To</span>',
      '    <select class="mbc-sel" id="mbc-loy-sel" disabled><option value="">Select bank first…</option></select>',
      '  </div>',
      '</div>',
      '<div class="mbc-rate-card">',
      '  <div id="mbc-rate-ph" class="mbc-rate-ph">Select a bank program and loyalty program to see the transfer rate</div>',
      '  <div id="mbc-rate-content" style="display:none"></div>',
      '</div>',
      '<div id="mbc-inp-section" style="display:none">',
      '  <div class="mbc-inp-group">',
      '    <label class="mbc-inp-lbl" id="mbc-inp-lbl" for="mbc-input">Points to transfer</label>',
      '    <div class="mbc-inp-wrap">',
      '      <input class="mbc-inp" type="text" id="mbc-input" placeholder="e.g. 50,000" inputmode="numeric" autocomplete="off">',
      '      <span class="mbc-inp-suf" id="mbc-inp-suf">pts</span>',
      '    </div>',
      '  </div>',
      '  <div class="mbc-result" id="mbc-result"></div>',
      '</div>',
    ].join('');

    /* Toggle buttons */
    document.getElementById('mbc-tog-fwd').addEventListener('click', function () {
      cur.mode = 'forward';
      document.getElementById('mbc-tog-fwd').classList.add('active');
      document.getElementById('mbc-tog-rev').classList.remove('active');
      updateInputLabel();
      calculate();
    });
    document.getElementById('mbc-tog-rev').addEventListener('click', function () {
      cur.mode = 'reverse';
      document.getElementById('mbc-tog-rev').classList.add('active');
      document.getElementById('mbc-tog-fwd').classList.remove('active');
      updateInputLabel();
      calculate();
    });

    /* Bank dropdown */
    var bankSel = document.getElementById('mbc-bank-sel');
    banks.forEach(function (b) {
      var opt = document.createElement('option');
      opt.value = b; opt.textContent = b;
      bankSel.appendChild(opt);
    });

    function resetLoyalty() {
      document.getElementById('mbc-rate-ph').style.display = 'block';
      document.getElementById('mbc-rate-content').style.display = 'none';
      document.getElementById('mbc-inp-section').style.display = 'none';
      var r = document.getElementById('mbc-result');
      if (r) r.classList.remove('on');
    }

    bankSel.addEventListener('change', function () {
      var bank = this.value;
      var lSel = document.getElementById('mbc-loy-sel');
      lSel.innerHTML = '<option value="">Select loyalty program…</option>';
      resetLoyalty();
      cur.bank = bank;
      if (!bank) { lSel.disabled = true; return; }

      var progs = rates.filter(function (r) { return r['Bank Program'] === bank; });
      progs.sort(function (a, b) { return a['Loyalty Program'].localeCompare(b['Loyalty Program']); });

      function addGroup(label, arr) {
        if (!arr.length) return;
        var og = document.createElement('optgroup');
        og.label = label;
        arr.forEach(function (r) {
          var opt = document.createElement('option');
          opt.value = r['Loyalty Program']; opt.textContent = r['Loyalty Program'];
          og.appendChild(opt);
        });
        lSel.appendChild(og);
      }
      addGroup('Airlines', progs.filter(function (r) { return r['Category'] === 'Airlines'; }));
      addGroup('Hotels',   progs.filter(function (r) { return r['Category'] === 'Hotels'; }));
      lSel.disabled = false;
    });

    document.getElementById('mbc-loy-sel').addEventListener('change', function () {
      if (cur.bank && this.value) showRateCard(cur.bank, this.value);
      else resetLoyalty();
    });

    document.getElementById('mbc-input').addEventListener('input', function () {
      var raw = this.value.replace(/[^0-9]/g, '');
      if (raw) {
        var n = parseInt(raw, 10);
        var formatted = n.toLocaleString('en-US');
        var cursorFromEnd = this.value.length - this.selectionEnd;
        this.value = formatted;
        var newPos = Math.max(0, formatted.length - cursorFromEnd);
        this.setSelectionRange(newPos, newPos);
      } else {
        this.value = '';
      }
      calculate();
    });
  }

  /* ── Fetch ── */
  Promise.all([
    fetch(API + '?data=rates').then(function (r) { return r.json(); }),
    fetch(API).then(function (r) { return r.json(); })
  ]).then(function (res) {
    allRates   = res[0];
    allBonuses = res[1];
    buildUI(allRates);
  }).catch(function () {
    document.getElementById('mbc-body').innerHTML =
      '<div class="mbc-state">Unable to load data — please check back shortly.</div>';
  });
})();
