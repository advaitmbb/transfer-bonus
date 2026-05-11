(function () {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Fraunces:wght@400;600;700&family=Inter:wght@400;500;600&display=swap';
  document.head.appendChild(link);

  var style = document.createElement('style');
  style.textContent = [
    '.mbcm,.mbcm *,.mbcm *::before,.mbcm *::after{box-sizing:border-box;margin:0;padding:0}',
    '.mbcm{font-family:"Inter",sans-serif;background:#faf6ee;padding:20px 0 36px;width:100%;display:block}',

    /* Header */
    '.mbcm-header{text-align:center;margin-bottom:18px;padding:0 10px}',
    '.mbcm-title{font-family:"Fraunces",serif;font-size:1.13rem;font-weight:700;color:#1a2b3c;line-height:1.2;margin-bottom:5px}',
    '.mbcm-subtitle{font-size:.62rem;color:#6b7e8f;line-height:1.5}',

    /* Mode toggle */
    '.mbcm-toggle{display:flex;background:#e8e2d8;border-radius:100px;padding:3px;margin:0 10px 14px;gap:3px}',
    '.mbcm-tog{flex:1;padding:8px 10px;border-radius:100px;border:none;background:transparent;color:#6b7e8f;font-family:"Inter",sans-serif;font-size:.64rem;font-weight:600;cursor:pointer;transition:background .18s,color .18s;text-align:center}',
    '.mbcm-tog.active{background:#1a2b3c;color:#fff}',

    /* Dropdowns — stacked */
    '.mbcm-selects{display:flex;flex-direction:column;gap:12px;padding:0 10px;margin-bottom:14px}',
    '.mbcm-sel-group{display:flex;flex-direction:column;gap:5px}',
    '.mbcm-lbl{font-size:.58rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#8a9aaa}',
    '.mbcm-sel{width:100%;padding:9px 36px 9px 14px;border-radius:100px;border:2px solid #1a2b3c;background:#fff;color:#1a2b3c;font-family:"Inter",sans-serif;font-size:.76rem;font-weight:600;cursor:pointer;appearance:none;-webkit-appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'10\' height=\'6\' viewBox=\'0 0 10 6\'%3E%3Cpath d=\'M1 1l4 4 4-4\' stroke=\'%231a2b3c\' stroke-width=\'2\' fill=\'none\' stroke-linecap=\'round\'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 12px center}',
    '.mbcm-sel:disabled{opacity:.35;cursor:default;border-color:#ccd5dd}',

    /* Rate card */
    '.mbcm-rate-card{background:#fff;border-radius:12px;padding:13px 14px;box-shadow:0 2px 10px rgba(26,43,60,.07);margin:0 10px 14px;overflow:hidden}',
    '.mbcm-rate-ph{color:#b8c4cc;font-size:.72rem;text-align:center;padding:6px 0}',
    '.mbcm-bonus-pill{display:inline-flex;align-items:center;gap:4px;background:#e6f9f0;color:#1a7a4a;font-size:.58rem;font-weight:700;padding:4px 9px;border-radius:100px;margin-bottom:10px;letter-spacing:.02em}',
    '.mbcm-rate-row{display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:1px solid #f4f0e8}',
    '.mbcm-rate-row:last-child{border-bottom:none}',
    '.mbcm-rate-key{font-size:.64rem;color:#8a9aaa;font-weight:500}',
    '.mbcm-rate-val{font-family:"Fraunces",serif;font-size:.95rem;font-weight:700;color:#1a2b3c}',
    '.mbcm-rate-val.hi{color:#38b6ff}',

    /* Input */
    '.mbcm-inp-group{padding:0 10px;margin-bottom:14px}',
    '.mbcm-inp-lbl{display:block;font-size:.58rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#8a9aaa;margin-bottom:7px}',
    '.mbcm-inp-wrap{position:relative}',
    '.mbcm-inp{width:100%;padding:20px 56px 20px 18px!important;min-height:62px!important;border-radius:100px!important;border:2px solid #1a2b3c;background:#fff;color:#1a2b3c;font-family:"Fraunces",serif;font-size:1.1rem;font-weight:700;line-height:1;outline:none;transition:border-color .15s;-webkit-appearance:none;appearance:none;box-sizing:border-box!important}',
    '.mbcm-inp:focus{border-color:#38b6ff;box-shadow:0 0 0 3px rgba(56,182,255,.12)}',
    '.mbcm-inp::placeholder{color:#d0dae3;font-size:.78rem;font-family:"Inter",sans-serif;font-weight:400;line-height:1}',
    '.mbcm-inp-suf{position:absolute;right:18px;top:50%;transform:translateY(-50%);font-size:.56rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#a0b0be;pointer-events:none}',

    /* Result */
    '.mbcm-result{background:#1a2b3c;border-radius:12px;padding:18px 16px;margin:0 10px;display:none}',
    '.mbcm-result.on{display:block}',
    '.mbcm-res-lbl{font-size:.55rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:#4a6a82;margin-bottom:4px}',
    '.mbcm-res-num{font-family:"Fraunces",serif;font-size:2.4rem;font-weight:700;color:#38b6ff;line-height:1;margin-bottom:3px}',
    '.mbcm-res-prog{font-size:.68rem;color:#6a8899;margin-bottom:14px}',
    '.mbcm-res-row{display:flex;justify-content:space-between;align-items:center;padding:7px 0;border-top:1px solid rgba(255,255,255,.07)}',
    '.mbcm-res-row-k{font-size:.64rem;color:#5a7a92}',
    '.mbcm-res-row-v{font-family:"Fraunces",serif;font-size:.9rem;font-weight:700;color:#c8d8e4}',
    '.mbcm-res-row-v.blue{color:#38b6ff}',

    /* Footer */
    '.mbcm-footer{text-align:center;margin-top:18px;padding:0 10px}',
    '.mbcm-footer a{font-size:.66rem;color:#8a9aaa;text-decoration:none;border-bottom:1px solid #c8d4dc;padding-bottom:1px;transition:color .15s,border-color .15s}',

    /* State */
    '.mbcm-state{text-align:center;padding:32px 16px;color:#a0b0be;font-size:.75rem}',
  ].join('');
  document.head.appendChild(style);

  document.documentElement.style.overflowX = 'hidden';
  document.body.style.overflowX = 'hidden';

  var scripts = document.getElementsByTagName('script');
  var me = scripts[scripts.length - 1];

  var wrapper = document.createElement('div');
  wrapper.style.cssText = 'width:100%;max-width:100%;overflow:hidden;display:block';
  wrapper.innerHTML = [
    '<div class="mbcm">',
    '  <div class="mbcm-header">',
    '    <h2 class="mbcm-title">Transfer Points Calculator</h2>',
    '    <p class="mbcm-subtitle">See how many points you\'ll receive including any active bonuses</p>',
    '  </div>',
    '  <div id="mbcm-body"><div class="mbcm-state">Loading…</div></div>',
    '  <div class="mbcm-footer"><a href="https://milesbeyondborders.com/transfer-bonuses" target="_blank">View all active transfer bonuses →</a></div>',
    '</div>',
  ].join('');
  me.parentNode.insertBefore(wrapper, me);

  /* ── Helpers ── */
  var API = 'https://script.google.com/macros/s/AKfycby5q9p_Ik2MA8ePJCH0PjdDeRaCqmO2eSpRRGM6SV3Xf6n4WgI5_gUp3ioNqy6dEbF4/exec';
  var allRates = [], allBonuses = [];
  var cur = { bank: '', loyalty: '', ratio: 1, bonusMult: 1, mode: 'forward' };

  function normBank(p) {
    var original = (p || '').trim();
    p = original.toLowerCase();
    if (p.includes('amex') || p.includes('american express') || p.includes('membership')) return 'Amex';
    if (p.includes('bilt'))         return 'Bilt';
    if (p.includes('capital one'))  return 'Capital One';
    if (p.includes('chase') || p.includes('ultimate')) return 'Chase';
    if (p.includes('citi') || p.includes('thankyou') || p.includes('thank you')) return 'Citi';
    if (p.includes('rove'))         return 'Rove';
    if (p.includes('wells fargo'))  return 'Wells Fargo';
    if (p.includes('rbc') || p.includes('avion')) return 'RBC Avion';
    return original;
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

  function fmtEffRate(r) {
    return '1:' + (Number.isInteger(r) ? r : r.toFixed(2));
  }

  function normStr(s) {
    return (s || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  }

  function findBonus(bank, loyalty) {
    var bl = normStr(loyalty);
    return allBonuses.find(function (b) {
      var partner = normStr(b['Partner']);
      return normBank(b['Program']).toLowerCase() === bank.toLowerCase()
        && (partner === bl || partner.includes(bl) || bl.includes(partner))
        && isActive(b['End Date']);
    }) || null;
  }

  function updateInputLabel() {
    var lbl = document.getElementById('mbcm-inp-lbl');
    var suf = document.getElementById('mbcm-inp-suf');
    if (!lbl) return;
    if (cur.mode === 'reverse') {
      lbl.textContent = cur.loyalty ? cur.loyalty + ' points you need' : 'Loyalty points you need';
      if (suf) suf.textContent = 'pts';
    } else {
      lbl.textContent = 'Points to transfer from ' + (cur.bank || 'your bank');
      if (suf) suf.textContent = 'pts';
    }
    var inp = document.getElementById('mbcm-input');
    if (inp) { inp.value = ''; inp.placeholder = 'e.g. ' + (cur.mode === 'reverse' ? '100,000' : '50,000'); }
    var res = document.getElementById('mbcm-result');
    if (res) res.classList.remove('on');
  }

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

    cur.ratio = baseRatio;
    cur.bonusMult = bonusMult;
    cur.loyalty = loyalty;
    cur.bank = bank;

    var html = '';
    if (bonus) {
      var pct = Math.round(bonusFrac * 100);
      html += '<div class="mbcm-bonus-pill">🎉 ' + pct + '% Bonus Active · Ends ' + fmtDate(bonus['End Date']) + '</div>';
    }
    html += '<div class="mbcm-rate-row"><span class="mbcm-rate-key">Base Transfer Rate</span><span class="mbcm-rate-val">' + rate['Transfer Rate'] + '</span></div>';
    if (bonus) {
      html += '<div class="mbcm-rate-row"><span class="mbcm-rate-key">Active Bonus</span><span class="mbcm-rate-val hi">+' + Math.round(bonusFrac * 100) + '%</span></div>';
      html += '<div class="mbcm-rate-row"><span class="mbcm-rate-key">Effective Rate</span><span class="mbcm-rate-val hi">' + fmtEffRate(effRatio) + '</span></div>';
    }

    document.getElementById('mbcm-rate-ph').style.display = 'none';
    var rc = document.getElementById('mbcm-rate-content');
    rc.innerHTML = html;
    rc.style.display = 'block';
    document.getElementById('mbcm-inp-section').style.display = 'block';
    updateInputLabel();
    calculate();
  }

  function calculate() {
    var inp = document.getElementById('mbcm-input');
    var raw = inp ? inp.value.replace(/[^0-9]/g, '') : '';
    var pts = parseInt(raw, 10);
    var res = document.getElementById('mbcm-result');
    if (!res) return;
    if (!pts || !cur.ratio) { res.classList.remove('on'); return; }

    var hasBonus = cur.bonusMult > 1;
    var html = '';

    if (cur.mode === 'forward') {
      var baseOut  = pts * cur.ratio;
      var bonusOut = pts * cur.ratio * cur.bonusMult;
      var mainNum  = hasBonus ? bonusOut : baseOut;
      html += '<div class="mbcm-res-lbl">You\'ll receive</div>';
      html += '<div class="mbcm-res-num">' + fmtNum(mainNum) + '</div>';
      html += '<div class="mbcm-res-prog">' + cur.loyalty + ' points</div>';
      if (hasBonus) {
        html += '<div class="mbcm-res-row"><span class="mbcm-res-row-k">With transfer bonus</span><span class="mbcm-res-row-v blue">' + fmtNum(bonusOut) + ' pts</span></div>';
        html += '<div class="mbcm-res-row"><span class="mbcm-res-row-k">Without bonus</span><span class="mbcm-res-row-v">' + fmtNum(baseOut) + ' pts</span></div>';
      }
      html += '<div class="mbcm-res-row"><span class="mbcm-res-row-k">Transferred from ' + cur.bank + '</span><span class="mbcm-res-row-v">' + fmtNum(pts) + ' pts</span></div>';
    } else {
      var baseNeeded  = pts / cur.ratio;
      var bonusNeeded = pts / (cur.ratio * cur.bonusMult);
      var mainNum     = hasBonus ? bonusNeeded : baseNeeded;
      html += '<div class="mbcm-res-lbl">You\'ll need to transfer</div>';
      html += '<div class="mbcm-res-num">' + fmtNum(mainNum) + '</div>';
      html += '<div class="mbcm-res-prog">' + cur.bank + ' points</div>';
      if (hasBonus) {
        html += '<div class="mbcm-res-row"><span class="mbcm-res-row-k">With active bonus</span><span class="mbcm-res-row-v blue">' + fmtNum(bonusNeeded) + ' pts</span></div>';
        html += '<div class="mbcm-res-row"><span class="mbcm-res-row-k">Without bonus</span><span class="mbcm-res-row-v">' + fmtNum(baseNeeded) + ' pts</span></div>';
      }
      html += '<div class="mbcm-res-row"><span class="mbcm-res-row-k">Target ' + cur.loyalty + ' points</span><span class="mbcm-res-row-v">' + fmtNum(pts) + ' pts</span></div>';
    }

    res.innerHTML = html;
    res.classList.add('on');
  }

  function buildUI(rates) {
    var banks = [];
    rates.forEach(function (r) { if (banks.indexOf(r['Bank Program']) === -1) banks.push(r['Bank Program']); });
    banks.sort();

    document.getElementById('mbcm-body').innerHTML = [
      '<div class="mbcm-toggle">',
      '  <button class="mbcm-tog active" id="mbcm-tog-fwd">How many will I get?</button>',
      '  <button class="mbcm-tog" id="mbcm-tog-rev">How many do I need?</button>',
      '</div>',
      '<div class="mbcm-selects">',
      '  <div class="mbcm-sel-group">',
      '    <span class="mbcm-lbl">1. Your Bank Program</span>',
      '    <select class="mbcm-sel" id="mbcm-bank-sel"><option value="">Select program…</option></select>',
      '  </div>',
      '  <div class="mbcm-sel-group">',
      '    <span class="mbcm-lbl">2. Transfer To</span>',
      '    <select class="mbcm-sel" id="mbcm-loy-sel" disabled><option value="">Select bank first…</option></select>',
      '  </div>',
      '</div>',
      '<div class="mbcm-rate-card">',
      '  <div id="mbcm-rate-ph" class="mbcm-rate-ph">Select a bank and loyalty program above</div>',
      '  <div id="mbcm-rate-content" style="display:none"></div>',
      '</div>',
      '<div id="mbcm-inp-section" style="display:none">',
      '  <div class="mbcm-inp-group">',
      '    <label class="mbcm-inp-lbl" id="mbcm-inp-lbl" for="mbcm-input">Points to transfer</label>',
      '    <div class="mbcm-inp-wrap">',
      '      <input class="mbcm-inp" type="text" id="mbcm-input" placeholder="e.g. 50,000" inputmode="numeric" autocomplete="off">',
      '      <span class="mbcm-inp-suf" id="mbcm-inp-suf">pts</span>',
      '    </div>',
      '  </div>',
      '  <div class="mbcm-result" id="mbcm-result"></div>',
      '</div>',
    ].join('');

    document.getElementById('mbcm-tog-fwd').addEventListener('click', function () {
      cur.mode = 'forward';
      document.getElementById('mbcm-tog-fwd').classList.add('active');
      document.getElementById('mbcm-tog-rev').classList.remove('active');
      updateInputLabel();
      calculate();
    });
    document.getElementById('mbcm-tog-rev').addEventListener('click', function () {
      cur.mode = 'reverse';
      document.getElementById('mbcm-tog-rev').classList.add('active');
      document.getElementById('mbcm-tog-fwd').classList.remove('active');
      updateInputLabel();
      calculate();
    });

    var bankSel = document.getElementById('mbcm-bank-sel');
    banks.forEach(function (b) {
      var opt = document.createElement('option');
      opt.value = b; opt.textContent = b;
      bankSel.appendChild(opt);
    });

    function resetLoyalty() {
      document.getElementById('mbcm-rate-ph').style.display = 'block';
      document.getElementById('mbcm-rate-content').style.display = 'none';
      document.getElementById('mbcm-inp-section').style.display = 'none';
      var r = document.getElementById('mbcm-result');
      if (r) r.classList.remove('on');
    }

    bankSel.addEventListener('change', function () {
      var bank = this.value;
      var lSel = document.getElementById('mbcm-loy-sel');
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

    document.getElementById('mbcm-loy-sel').addEventListener('change', function () {
      if (cur.bank && this.value) showRateCard(cur.bank, this.value);
      else resetLoyalty();
    });

    document.getElementById('mbcm-input').addEventListener('input', function () {
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

  Promise.all([
    fetch(API + '?data=rates').then(function (r) { return r.json(); }),
    fetch(API).then(function (r) { return r.json(); })
  ]).then(function (res) {
    allRates   = res[0];
    allBonuses = res[1];
    buildUI(allRates);
  }).catch(function () {
    document.getElementById('mbcm-body').innerHTML =
      '<div class="mbcm-state">Unable to load data — please check back shortly.</div>';
  });
})();
