// js/app.js

// لیست 30 مسئله — از آسان تا سخت
const problems = [
    { id:1, title:"زبان {0,1}* با تعداد فردِ 1", type:"dfa_odd1", desc:"DFA دو حالته که تعداد 1 ها را دنبال می‌کند (q1 پذیرش)." },
    { id:2, title:"زبان {0,1}* با تعداد زوجِ 1", type:"dfa_even1", desc:"همان بالا؛ اما q0 حالت پذیرش است." },
    { id:3, title:"رشته‌هایی که با 0 تمام می‌شوند", type:"dfa_end0", desc:"تشخیص انتها 0." },
    { id:4, title:"رشته‌هایی که با 1 شروع می‌شوند", type:"dfa_start1", desc:"اولین کاراکتر 1 باشد." },
    { id:5, title:"رشته‌هایی که شامل زیررشته '01' هستند", type:"dfa_contains_01", desc:"شناسایی وقوع 01 در متن." },
    { id:6, title:"رشته‌هایی که طولشان مضربِ 3 است", type:"dfa_len_mod3", desc:"سه حالت بر اساس طول %3." },
    { id:7, title:"رشته‌هایی که حداقل یک 1 دارند", type:"dfa_atleast1", desc:"DFA ساده برای وجود حداقل یک 1." },
    { id:8, title:"رشته‌هایی که هیچ 1 پشت‌سرهم ندارند", type:"dfa_no_double1", desc:"مانع از دو 1 متوالی." },
    { id:9, title:"رشته‌هایی که به '00' ختم می‌شوند", type:"dfa_end00", desc:"پایان با 00." },
    { id:10, title:"تعداد 1ها مضرب 3 است", type:"dfa_ones_mod3", desc:"سه حالت شمارش 1ها." },
    { id:11, title:"شامل زیررشته '101' باشد", type:"dfa_contains_101", desc:"شناسایی 101." },
    { id:12, title:"0ها زوج و 1ها فرد", type:"dfa_even0_odd1", desc:"ترکیب شرایط روی تعداد 0 و 1." },
    { id:13, title:"هیچ 0 قبل از 1 نیاید (شکل 111...000...)", type:"dfa_zeros_after_ones", desc:"فرمت 1*0*." },
    { id:14, title:"شروع و پایان برابر (هر دو 0 یا هر دو 1)", type:"dfa_start_end_same", desc:"مشخص می‌کند اولین و آخرین حرف برابرند." },
    { id:15, title:"حداکثر دو 1", type:"dfa_atmost_two_ones", desc:"مجاز تا دو بار 1." },
    { id:16, title:"NFA: زبان‌هایی که شامل 'ab' هستند", type:"nfa_contains_ab", desc:"NFA نمونه با چند مسیر." },
    { id:17, title:"ε-NFA برای (0+1)*1(0+1)", type:"epsilon_nfa_pattern", desc:"مثال ε-NFA با ε انتقال." },
    { id:18, title:"NFA برای (ab)*", type:"nfa_ab_star", desc:"حلقه‌ی زوجی 'ab'." },
    { id:19, title:"DFA معادل NFA بالا (تبدیل NFA→DFA)", type:"dfa_from_nfa_abstar", desc:"DFA معادل (ab)*." },
    { id:20, title:"زبان (0+1)*011", type:"dfa_ends_with_011", desc:"پایان با 011 — معمولاً DFA 4 حالته." },
    { id:21, title:"Regex → DFA: (0+1)*00(0+1)*", type:"regex_00_anywhere", desc:"شناسایی حداقل یک '00' در متن." },
    { id:22, title:"ماشینی برای تشخیص معکوس (نمایش مفهومی)", type:"concept_reverse", desc:"نمایش مفهومی (این زبان غیرمنظم است — فقط توضیح)." },
    { id:23, title:"مقدمه PDA: زبان متقارن درباره میانه", type:"pda_symmetric", desc:"نمایش PDA ساده برای تمرین آموزشی." },
    { id:24, title:"PDA: رشته‌هایی با تعداد برابر 0 و 1", type:"pda_equal_0_1", desc:"PDA کلاسیک برای a^n b^n نوع." },
    { id:25, title:"PDA: {a^n b^n | n ≥ 0}", type:"pda_anbn", desc:"PDA استاندارد." },
    { id:26, title:"PDA: {a^n b^m | n < m}", type:"pda_n_less_m", desc:"PDA پیشرفته‌تر — نمایش اصولی." },
    { id:27, title:"TM: جمع دو عدد باینری (نمایش ساده‌شده)", type:"tm_add_binary", desc:"نمایش و دیاگرام حالت‌های کلیدی." },
    { id:28, title:"TM: تشخیص w#w (حضور تکرار) — نمایش مفهومی", type:"tm_w_hash_w", desc:"نمایش مراحل اصلی الگوریتم." },
    { id:29, title:"TM: a^n b^n c^n (نیاز به چندنوار) — نمایش مفهومی", type:"tm_ancn", desc:"توضیح و شمای کلی ماشین چندنوار." },
    { id:30, title:"TM: برعکس کردن رشته روی نوار", type:"tm_reverse", desc:"طرح کلی ماشین تورینگ برای reverse." }
  ];
  
  // المان‌ها
  const listEl = document.getElementById("list");
  const diagramCanvas = document.getElementById("diagramCanvas");
  const diagramHeader = document.getElementById("diagramHeader");
  const diagramFooter = document.getElementById("diagramFooter");
  const searchInput = document.getElementById("search");
  const showDescCheckbox = document.getElementById("showDesc");
  
  // ساخت کارت‌ها
  function renderList(filter=""){
    listEl.innerHTML="";
    const f = filter.trim().toLowerCase();
    problems.forEach(p=>{
      if(f && !(p.title+ " " + p.desc).toLowerCase().includes(f)) return;
      const card = document.createElement("div");
      card.className="card";
      const h3 = document.createElement("h3"); h3.textContent = `${p.id}. ${p.title}`;
      const pdesc = document.createElement("p"); pdesc.textContent = p.desc;
      const btns = document.createElement("div"); btns.className="btns";
      const btnShow = document.createElement("button"); btnShow.className="btn"; btnShow.textContent="نمایش نمودار";
      btnShow.onclick = ()=> drawFSM(p.type, p);
      const btnExplain = document.createElement("button"); btnExplain.className="btn"; btnExplain.textContent="توضیحات";
      btnExplain.onclick = ()=> alert(`${p.title}\n\n${p.desc}`);
      btns.appendChild(btnShow); btns.appendChild(btnExplain);
      card.appendChild(h3);
      if(showDescCheckbox.checked) card.appendChild(pdesc);
      card.appendChild(btns);
      listEl.appendChild(card);
    });
  }
  
  // فیلتر جستجو
  searchInput.addEventListener("input", e=> renderList(e.target.value));
  showDescCheckbox.addEventListener("change", ()=> renderList(searchInput.value));
  
  // رسم نمودارها بر اساس type
  function drawFSM(type, meta){
    diagramHeader.textContent = `${meta.id}. ${meta.title}`;
    diagramFooter.textContent = meta.desc || "";
    let svg = "";
  
    // یک helper برای تعریف marker arrow
    const defs = `<defs>
      <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
        <path d="M0,0 L0,6 L9,3 z" fill="#1976d2" />
      </marker>
    </defs>`;
  
    switch(type){
      // 1
      case "dfa_odd1":
        svg = `<svg width="780" height="320" viewBox="0 0 780 320" xmlns="http://www.w3.org/2000/svg">
          ${defs}
          <rect x="6" y="6" width="768" height="308" rx="10" fill="#ffffff" stroke="rgba(21,101,192,0.06)"/>
          <circle cx="220" cy="170" r="44" stroke="#1565c0" stroke-width="3" fill="#e8f4ff"/>
          <text x="220" y="170" text-anchor="middle" dominant-baseline="middle" font-size="18" fill="#0d47a1">q0</text>
  
          <circle cx="500" cy="170" r="44" stroke="#1565c0" stroke-width="6" fill="#e8f4ff"/>
          <text x="500" y="170" text-anchor="middle" dominant-baseline="middle" font-size="18" fill="#0d47a1">q1</text>
  
          <!-- start arrow -->
          <path d="M110,170 Q170,170 196,170" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
          <text x="128" y="150" font-size="13" fill="#0d47a1">شروع</text>
  
          <!-- q0 loop 0 -->
          <path d="M220,120 Q180,80 220,40 Q260,80 220,120" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/>
          <text x="220" y="30" font-size="13" fill="#0d47a1">0</text>
  
          <!-- q1 loop 0 -->
          <path d="M500,120 Q460,80 500,40 Q540,80 500,120" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/>
          <text x="500" y="30" font-size="13" fill="#0d47a1">0</text>
  
          <!-- q0 -> q1 on 1 -->
          <path d="M264,150 Q350,90 436,150" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/>
          <text x="350" y="110" font-size="14" fill="#0d47a1">1</text>
  
          <!-- q1 -> q0 on 1 -->
          <path d="M436,190 Q350,250 264,190" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/>
          <text x="350" y="230" font-size="14" fill="#0d47a1">1</text>
  
          </svg>`;
        break;
  
      // 2
      case "dfa_even1":
        svg = `<svg width="780" height="320" viewBox="0 0 780 320" xmlns="http://www.w3.org/2000/svg">
          ${defs}
          <rect x="6" y="6" width="768" height="308" rx="10" fill="#fff"/>
          <circle cx="220" cy="170" r="44" stroke="#1565c0" stroke-width="6" fill="#e8f4ff"/>
          <text x="220" y="170" text-anchor="middle" dominant-baseline="middle" font-size="18" fill="#0d47a1">q0</text>
          <circle cx="500" cy="170" r="44" stroke="#1565c0" stroke-width="3" fill="#e8f4ff"/>
          <text x="500" y="170" text-anchor="middle" dominant-baseline="middle" font-size="18" fill="#0d47a1">q1</text>
          <path d="M110,170 Q170,170 196,170" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
          <text x="128" y="150" font-size="13" fill="#0d47a1">شروع</text>
          <path d="M220,120 Q180,80 220,40 Q260,80 220,120" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/>
          <text x="220" y="30" font-size="13" fill="#0d47a1">0</text>
          <path d="M500,120 Q460,80 500,40 Q540,80 500,120" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/>
          <text x="500" y="30" font-size="13" fill="#0d47a1">0</text>
          <path d="M264,150 Q350,90 436,150" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/>
          <text x="350" y="110" font-size="14" fill="#0d47a1">1</text>
          <path d="M436,190 Q350,250 264,190" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/>
          <text x="350" y="230" font-size="14" fill="#0d47a1">1</text>
        </svg>`;
        break;
  
      // 3
      case "dfa_end0":
        svg = `<svg width="780" height="260" viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg">
          ${defs}
          <rect x="6" y="6" width="768" height="248" rx="10" fill="#fff"/>
          <circle cx="220" cy="130" r="44" stroke="#1565c0" stroke-width="3" fill="#f7fbff"/>
          <text x="220" y="130" text-anchor="middle" dominant-baseline="middle">q0</text>
          <circle cx="420" cy="130" r="44" stroke="#1565c0" stroke-width="6" fill="#f7fbff"/>
          <text x="420" y="130" text-anchor="middle" dominant-baseline="middle">q_accept</text>
          <circle cx="620" cy="130" r="44" stroke="#1565c0" stroke-width="3" fill="#f7fbff"/>
          <text x="620" y="130" text-anchor="middle" dominant-baseline="middle">q_reject</text>
  
          <path d="M120,130 Q170,130 196,130" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
          <text x="138" y="110" font-size="13">شروع</text>
  
          <!-- transitions -->
          <path d="M264,130 Q340,80 416,130" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/>
          <text x="340" y="95" font-size="13">0</text>
  
          <path d="M264,130 Q340,180 416,130" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/>
          <text x="340" y="180" font-size="13">1</text>
  
          <path d="M464,130 Q540,80 616,130" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/>
          <text x="540" y="95" font-size="13">1</text>
  
          <path d="M464,130 Q540,180 616,130" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/>
          <text x="540" y="180" font-size="13">0</text>
        </svg>`;
        break;
  
      // 4
      case "dfa_start1":
        svg = `<svg width="720" height="200" viewBox="0 0 720 200" xmlns="http://www.w3.org/2000/svg">
          ${defs}
          <circle cx="220" cy="100" r="44" stroke="#1565c0" stroke-width="6" fill="#eef7ff"/><text x="220" y="100" text-anchor="middle" dominant-baseline="middle">q_start1_accept</text>
          <circle cx="460" cy="100" r="44" stroke="#1565c0" stroke-width="3" fill="#eef7ff"/><text x="460" y="100" text-anchor="middle" dominant-baseline="middle">q_other</text>
          <path d="M110,100 Q170,100 196,100" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/><text x="130" y="80">شروع</text>
          <path d="M264,100 Q350,40 436,100" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/><text x="350" y="70">1</text>
          <path d="M264,120 Q350,180 436,120" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/><text x="350" y="165">0</text>
          <path d="M496,100 Q560,100 586,100" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/>
        </svg>`;
        break;
  
      // 5
      case "dfa_contains_01":
        svg = `<svg width="760" height="220" viewBox="0 0 760 220" xmlns="http://www.w3.org/2000/svg">
          ${defs}
          <circle cx="160" cy="110" r="36" stroke="#1565c0" stroke-width="3" fill="#f1f9ff"/><text x="160" y="110">q0</text>
          <circle cx="360" cy="110" r="36" stroke="#1565c0" stroke-width="3" fill="#f1f9ff"/><text x="360" y="110">q1</text>
          <circle cx="560" cy="110" r="36" stroke="#1565c0" stroke-width="6" fill="#f1f9ff"/><text x="560" y="110">q2*</text>
          <path d="M90,110 Q130,110 148,110" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/><text x="105" y="90">شروع</text>
  
          <path d="M196,110 Q260,60 316,110" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/>
          <text x="256" y="80">0</text>
  
          <path d="M196,140 Q260,190 316,140" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/>
          <text x="256" y="190">1</text>
  
          <path d="M396,110 Q460,60 516,110" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/>
          <text x="456" y="80">1</text>
  
          <path d="M396,140 Q460,190 516,140" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/>
          <text x="456" y="190">0</text>
        </svg>`;
        break;
  
      // 6
      case "dfa_len_mod3":
        svg = `<svg width="840" height="260" viewBox="0 0 840 260" xmlns="http://www.w3.org/2000/svg">
          ${defs}
          <circle cx="160" cy="130" r="38" stroke="#1565c0" stroke-width="3" fill="#f9fbff"/><text x="160" y="130">r0</text>
          <circle cx="380" cy="130" r="38" stroke="#1565c0" stroke-width="3" fill="#f9fbff"/><text x="380" y="130">r1</text>
          <circle cx="600" cy="130" r="38" stroke="#1565c0" stroke-width="6" fill="#f9fbff"/><text x="600" y="130">r2*</text>
          <path d="M80,130 Q120,130 148,130" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
          <path d="M198,130 Q270,80 336,130" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/><text x="270" y="95">any</text>
          <path d="M416,130 Q488,80 556,130" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/><text x="488" y="95">any</text>
          <path d="M556,130 Q488,180 416,130" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/><text x="488" y="170">any</text>
          <path d="M336,130 Q270,180 198,130" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/><text x="270" y="170">any</text>
        </svg>`;
        break;
  
      // 7
      case "dfa_atleast1":
        svg = `<svg width="720" height="160" viewBox="0 0 720 160" xmlns="http://www.w3.org/2000/svg">
          ${defs}
          <circle cx="180" cy="80" r="36" stroke="#1565c0" stroke-width="3" fill="#f8fdff"/><text x="180" y="80">q0</text>
          <circle cx="420" cy="80" r="36" stroke="#1565c0" stroke-width="6" fill="#f8fdff"/><text x="420" y="80">q1*</text>
          <path d="M110,80 Q150,80 168,80" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
          <path d="M216,80 Q300,40 384,80" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/><text x="300" y="55">1</text>
          <path d="M216,110 Q300,140 384,110" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/><text x="300" y="140">0</text>
          <path d="M466,80 Q540,80 566,80" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/>
        </svg>`;
        break;
  
      // 8
      case "dfa_no_double1":
        svg = `<svg width="760" height="200" viewBox="0 0 760 200" xmlns="http://www.w3.org/2000/svg">
          ${defs}
          <circle cx="140" cy="100" r="36" stroke="#1565c0" stroke-width="3" fill="#fff"/>
          <text x="140" y="100">q0</text>
          <circle cx="340" cy="100" r="36" stroke="#1565c0" stroke-width="3" fill="#fff"/>
          <text x="340" y="100">q1</text>
          <circle cx="540" cy="100" r="36" stroke="#1565c0" stroke-width="6" fill="#fff"/>
          <text x="540" y="100">q_accept</text>
  
          <path d="M70,100 Q110,100 128,100" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
          <!-- q0 on 0 stay q0 -->
          <path d="M176,100 Q220,70 264,100" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/><text x="220" y="85">0</text>
          <!-- q0 on 1 -> q1 -->
          <path d="M176,140 Q220,180 264,140" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/><text x="220" y="175">1</text>
          <!-- q1 on 0 -> accept -->
          <path d="M386,100 Q460,70 516,100" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/><text x="446" y="80">0</text>
          <!-- q1 on 1 -> reject (not drawn) -->
        </svg>`;
        break;
  
      // 9
      case "dfa_end00":
        svg = `<svg width="740" height="220" viewBox="0 0 740 220" xmlns="http://www.w3.org/2000/svg">
          ${defs}
          <circle cx="140" cy="110" r="34" stroke="#1565c0" stroke-width="3"/><text x="140" y="110">s</text>
          <circle cx="300" cy="110" r="34" stroke="#1565c0" stroke-width="3"/><text x="300" y="110">q1</text>
          <circle cx="460" cy="110" r="34" stroke="#1565c0" stroke-width="6"/><text x="460" y="110">q2*</text>
  
          <path d="M80,110 Q120,110 136,110" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
          <path d="M174,110 Q240,60 286,110" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/><text x="230" y="80">0</text>
          <path d="M174,140 Q240,190 286,140" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/><text x="230" y="175">1</text>
          <path d="M336,110 Q400,60 446,110" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/><text x="396" y="80">0</text>
          <path d="M336,140 Q400,190 446,140" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/><text x="396" y="175">1</text>
        </svg>`;
        break;
  
      // 10
      case "dfa_ones_mod3":
        svg = `<svg width="820" height="260" viewBox="0 0 820 260" xmlns="http://www.w3.org/2000/svg">
          ${defs}
          <circle cx="140" cy="130" r="36" stroke="#1565c0" stroke-width="3"/><text x="140" y="130">r0*</text>
          <circle cx="360" cy="130" r="36" stroke="#1565c0" stroke-width="3"/><text x="360" y="130">r1</text>
          <circle cx="580" cy="130" r="36" stroke="#1565c0" stroke-width="3"/><text x="580" y="130">r2</text>
  
          <path d="M80,130 Q120,130 138,130" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
          <path d="M176,130 Q250,80 316,130" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/><text x="246" y="95">1</text>
          <path d="M396,130 Q470,80 536,130" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/><text x="466" y="95">1</text>
          <path d="M616,130 Q690,80 756,130" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/><text x="686" y="95">1</text>
          <!-- loops on any state for 0 -->
          <path d="M140,86 Q100,46 140,20 Q180,46 140,86" stroke="#1976d2" stroke-width="2.2" fill="none" marker-end="url(#arrow)"/><text x="140" y="10">0</text>
          <path d="M360,86 Q320,46 360,20 Q400,46 360,86" stroke="#1976d2" stroke-width="2.2" fill="none" marker-end="url(#arrow)"/><text x="360" y="10">0</text>
          <path d="M580,86 Q540,46 580,20 Q620,46 580,86" stroke="#1976d2" stroke-width="2.2" fill="none" marker-end="url(#arrow)"/><text x="580" y="10">0</text>
        </svg>`;
        break;
  
      // 11
      case "dfa_contains_101":
        svg = `<svg width="780" height="240" viewBox="0 0 780 240" xmlns="http://www.w3.org/2000/svg">
          ${defs}
          <circle cx="120" cy="120" r="30" stroke="#1565c0"/><text x="120" y="120">s</text>
          <circle cx="260" cy="120" r="30" stroke="#1565c0"/><text x="260" y="120">q1</text>
          <circle cx="400" cy="120" r="30" stroke="#1565c0"/><text x="400" y="120">q2</text>
          <circle cx="540" cy="120" r="30" stroke="#1565c0" stroke-width="6"/><text x="540" y="120">acc*</text>
  
          <path d="M60,120 Q100,120 116,120" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
          <path d="M150,120 Q210,80 246,120" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/><text x="200" y="95">1</text>
          <path d="M294,120 Q354,80 390,120" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/><text x="330" y="95">0</text>
          <path d="M434,120 Q494,80 530,120" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/><text x="480" y="95">1</text>
        </svg>`;
        break;
  
      // 12
      case "dfa_even0_odd1":
        svg = `<svg width="900" height="300" viewBox="0 0 900 300" xmlns="http://www.w3.org/2000/svg">
          ${defs}
          <text x="40" y="36" font-size="13">ایده: حالت‌ها زوج/فرد برای هر نماد → 4 حالت</text>
          <!-- q00 q01 q10 q11 -->
          <circle cx="200" cy="160" r="36" stroke="#1565c0"/><text x="200" y="160">q00</text>
          <circle cx="380" cy="160" r="36" stroke="#1565c0"/><text x="380" y="160">q01</text>
          <circle cx="560" cy="160" r="36" stroke="#1565c0"/><text x="560" y="160">q10</text>
          <circle cx="740" cy="160" r="36" stroke="#1565c0" stroke-width="6"/><text x="740" y="160">q11*</text>
  
          <path d="M120,160 Q160,160 178,160" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
          <text x="140" y="140">شروع</text>
  
          <!-- چند transition نمونه (کامنت: برای کامل کردن همه نیاز به جدول کامل است) -->
          <path d="M236,160 Q308,120 356,160" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/><text x="296" y="128">1</text>
          <path d="M236,190 Q308,230 356,190" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/><text x="296" y="230">0</text>
        </svg>`;
        break;
  
      // 13
      case "dfa_zeros_after_ones":
        svg = `<svg width="760" height="200" viewBox="0 0 760 200" xmlns="http://www.w3.org/2000/svg">
          ${defs}
          <circle cx="140" cy="100" r="36" stroke="#1565c0"/><text x="140" y="100">start</text>
          <circle cx="360" cy="100" r="36" stroke="#1565c0" stroke-width="6"/><text x="360" y="100">1*0*</text>
          <path d="M80,100 Q120,100 138,100" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
          <path d="M176,100 Q260,40 336,100" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/><text x="260" y="70">1</text>
          <path d="M176,120 Q260,180 336,120" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/><text x="260" y="170">0</text>
        </svg>`;
        break;
  
      // 14
      case "dfa_start_end_same":
        svg = `<svg width="820" height="260" viewBox="0 0 820 260" xmlns="http://www.w3.org/2000/svg">
          ${defs}
          <text x="40" y="40" font-size="13">ایده: 4 حالت (first0/1 × last0/1) یا حالت ذخیره اولین کاراکتر</text>
          <circle cx="220" cy="140" r="42" stroke="#1565c0"/><text x="220" y="140">q_start0</text>
          <circle cx="420" cy="140" r="42" stroke="#1565c0"/><text x="420" y="140">q_start1</text>
          <circle cx="620" cy="140" r="42" stroke="#1565c0" stroke-width="6"/><text x="620" y="140">accept?</text>
        </svg>`;
        break;
  
      // 15
      case "dfa_atmost_two_ones":
        svg = `<svg width="760" height="220" viewBox="0 0 760 220" xmlns="http://www.w3.org/2000/svg">
          ${defs}
          <circle cx="120" cy="110" r="30" stroke="#1565c0"/><text x="120" y="110">0</text>
          <circle cx="260" cy="110" r="30" stroke="#1565c0"/><text x="260" y="110">1</text>
          <circle cx="400" cy="110" r="30" stroke="#1565c0"/><text x="400" y="110">2</text>
          <circle cx="540" cy="110" r="30" stroke="#1565c0" stroke-width="3"/><text x="540" y="110">rej</text>
          <path d="M80,110 Q110,110 118,110" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
          <path d="M150,110 Q210,80 236,110" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/><text x="200" y="90">1</text>
          <path d="M296,110 Q356,80 384,110" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/><text x="340" y="90">1</text>
          <path d="M436,110 Q496,80 524,110" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/><text x="480" y="90">1</text>
        </svg>`;
        break;
  
      // 16 NFA contains 'ab'
      case "nfa_contains_ab":
        svg = `<svg width="820" height="240" viewBox="0 0 820 240" xmlns="http://www.w3.org/2000/svg">
          ${defs}
          <text x="30" y="26" font-size="13">NFA نمونه: تا زمانی که 'a' نیاید در q0 می‌ماند؛ بعد از 'a' به q1 می‌رود؛ با 'b' به q2 می‌رسد.</text>
          <circle cx="160" cy="140" r="30" stroke="#1565c0"/><text x="160" y="140">q0</text>
          <circle cx="360" cy="140" r="30" stroke="#1565c0"/><text x="360" y="140">q1</text>
          <circle cx="560" cy="140" r="30" stroke="#1565c0" stroke-width="6"/><text x="560" y="140">q2*</text>
  
          <path d="M100,140 Q140,140 156,140" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
          <path d="M196,140 Q260,80 336,140" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/><text x="256" y="110">a</text>
          <path d="M396,140 Q460,80 536,140" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/><text x="456" y="110">b</text>
        </svg>`;
        break;
  
      // 17 epsilon-nfa
      case "epsilon_nfa_pattern":
        svg = `<svg width="820" height="260" viewBox="0 0 820 260" xmlns="http://www.w3.org/2000/svg">
          ${defs}
          <text x="30" y="26" font-size="13">ε-NFA برای (0+1)*1(0+1) : از state اولیه با ε به حلقه اصلی می‌رود، سپس باید یک 1 بخواند.</text>
          <circle cx="160" cy="140" r="28" stroke="#1565c0"/><text x="160" y="140">s</text>
          <circle cx="320" cy="140" r="28" stroke="#1565c0"/><text x="320" y="140">loop</text>
          <circle cx="520" cy="140" r="28" stroke="#1565c0" stroke-width="6"/><text x="520" y="140">acc</text>
  
          <path d="M120,140 Q200,100 280,140" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/><text x="200" y="112">ε</text>
          <path d="M356,140 Q440,80 496,140" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/><text x="420" y="110">1</text>
        </svg>`;
        break;
  
      // 18 NFA (ab)*
      case "nfa_ab_star":
        svg = `<svg width="760" height="200" viewBox="0 0 760 200" xmlns="http://www.w3.org/2000/svg">
          ${defs}
          <text x="20" y="26" font-size="13">NFA برای (ab)* : حلقه‌ای که ab را می‌سازد.</text>
          <circle cx="140" cy="100" r="28" stroke="#1565c0" /><text x="140" y="100">s/acc</text>
          <circle cx="320" cy="100" r="28" stroke="#1565c0" /><text x="320" y="100">q1</text>
          <path d="M168,100 Q240,60 296,100" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/><text x="232" y="78">a</text>
          <path d="M344,100 Q420,140 476,100" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/><text x="420" y="130">b</text>
          <path d="M504,100 Q440,60 384,100" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/><text x="440" y="78">ε</text>
        </svg>`;
        break;
  
      // 19 DFA from NFA (ab)*
      case "dfa_from_nfa_abstar":
        svg = `<svg width="760" height="220" viewBox="0 0 760 220" xmlns="http://www.w3.org/2000/svg">
          ${defs}
          <text x="20" y="26" font-size="13">نمونهٔ بصری: DFA معادل (ab)* — حالات ترکیبی نمایش داده شده (t0,t1,...)</text>
          <circle cx="160" cy="120" r="36" stroke="#1565c0"/><text x="160" y="120">S</text>
          <circle cx="360" cy="120" r="36" stroke="#1565c0" stroke-width="6"/><text x="360" y="120">acc</text>
          <circle cx="560" cy="120" r="36" stroke="#1565c0"/><text x="560" y="120">r</text>
        </svg>`;
        break;
  
      // 20 ends with 011
      case "dfa_ends_with_011":
        svg = `<svg width="840" height="220" viewBox="0 0 840 220" xmlns="http://www.w3.org/2000/svg">
          ${defs}
          <text x="30" y="28" font-size="13">DFA برای پایان با 011 — معمولاً 4 حالت نیاز است (حافظهٔ آخرین بیت‌ها)</text>
          <circle cx="160" cy="120" r="30" stroke="#1565c0"/><text x="160" y="120">s</text>
          <circle cx="320" cy="120" r="30" stroke="#1565c0"/><text x="320" y="120">q1</text>
          <circle cx="480" cy="120" r="30" stroke="#1565c0"/><text x="480" y="120">q2</text>
          <circle cx="640" cy="120" r="30" stroke="#1565c0" stroke-width="6"/><text x="640" y="120">q3*</text>
        </svg>`;
        break;
  
      // 21 regex 00 anywhere
      case "regex_00_anywhere":
        svg = `<svg width="760" height="220" viewBox="0 0 760 220" xmlns="http://www.w3.org/2000/svg">
          ${defs}
          <text x="20" y="26" font-size="13">Regex: (0+1)*00(0+1)* — ماشین به دنبال دو صفر متوالی است.</text>
          <circle cx="160" cy="120" r="30" stroke="#1565c0"/><text x="160" y="120">s</text>
          <circle cx="320" cy="120" r="30" stroke="#1565c0"/><text x="320" y="120">s0</text>
          <circle cx="480" cy="120" r="30" stroke="#1565c0" stroke-width="6"/><text x="480" y="120">acc</text>
        </svg>`;
        break;
  
      // 22 conceptual reverse (non-regular)
      case "concept_reverse":
        svg = `<svg width="780" height="260" viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg">
          ${defs}
          <text x="20" y="40" font-size="14">توجه: تشخیص اینکه رشته معکوس شده است (palindrome) معمولاً غیرمنظم — نیاز به PDA یا TM.</text>
          <text x="20" y="80" font-size="13">اینجا تنها یک نمودار مفهومی/توضیح نمایش داده می‌شود.</text>
          <rect x="40" y="100" width="680" height="120" rx="8" fill="#fff" stroke="#1976d2"/>
          <text x="120" y="160" font-size="13">روش: با استفاده از استک (PDA) نیمهٔ اول را روی استک می‌گذاریم، سپس نیمه دوم را مقایسه می‌کنیم.</text>
        </svg>`;
        break;
  
      // 23 PDA symmetric (concept)
      case "pda_symmetric":
        svg = `<svg width="820" height="260" viewBox="0 0 820 260" xmlns="http://www.w3.org/2000/svg">
          ${defs}
          <text x="20" y="28" font-size="13">PDA (نمایش ساده): برای بررسی تقارن میانی — از push/pop استفاده می‌شود.</text>
          <circle cx="200" cy="140" r="36" stroke="#1565c0"/><text x="200" y="140">q_push</text>
          <circle cx="420" cy="140" r="36" stroke="#1565c0"/><text x="420" y="140">q_pop</text>
          <circle cx="640" cy="140" r="36" stroke="#1565c0" stroke-width="6"/><text x="640" y="140">acc</text>
        </svg>`;
        break;
  
      // 24 PDA equal 0 and 1 (a^n b^n)
      case "pda_equal_0_1":
        svg = `<svg width="820" height="260" viewBox="0 0 820 260" xmlns="http://www.w3.org/2000/svg">
          ${defs}
          <text x="20" y="30" font-size="13">PDA برای a^n b^n: هنگام خواندن aها push، هنگام خواندن bها pop.</text>
          <circle cx="180" cy="140" r="34" stroke="#1565c0"/><text x="180" y="140">q_start</text>
          <circle cx="420" cy="140" r="34" stroke="#1565c0"/><text x="420" y="140">q_loop</text>
          <circle cx="660" cy="140" r="34" stroke="#1565c0" stroke-width="6"/><text x="660" y="140">acc</text>
        </svg>`;
        break;
  
      // 25 PDA anbn
      case "pda_anbn":
        svg = `<svg width="820" height="260" viewBox="0 0 820 260" xmlns="http://www.w3.org/2000/svg">
          ${defs}
          <text x="20" y="30" font-size="13">PDA استاندارد برای {a^n b^n}</text>
          <rect x="40" y="60" width="720" height="160" rx="8" fill="#fff" stroke="#1976d2"/>
          <text x="120" y="140" font-size="13">push 'A' برای هر a → سپس روی bها pop 'A'</text>
        </svg>`;
        break;
  
      // 26 PDA n < m
      case "pda_n_less_m":
        svg = `<svg width="820" height="260" viewBox="0 0 820 260" xmlns="http://www.w3.org/2000/svg">
          ${defs}
          <text x="20" y="30" font-size="13">PDA برای n < m (نمایش مختصر): باید در پایان استک خالی نشود و تعداد bها بیشتر باشد.</text>
          <circle cx="200" cy="140" r="36" stroke="#1565c0"/><text x="200" y="140">q</text>
        </svg>`;
        break;
  
      // 27 TM add binary (concept)
      case "tm_add_binary":
        svg = `<svg width="920" height="300" viewBox="0 0 920 300" xmlns="http://www.w3.org/2000/svg">
          ${defs}
          <text x="20" y="28" font-size="13">TM: جمع دو عدد باینری — نمایش مراحل کلی (از راست به چپ با carry)</text>
          <rect x="40" y="60" width="840" height="200" rx="8" fill="#fff" stroke="#1976d2"/>
          <text x="80" y="140" font-size="13">حالت‌ها: scan-right, add-with-carry, write, move-left, halt</text>
        </svg>`;
        break;
  
      // 28 TM w#w
      case "tm_w_hash_w":
        svg = `<svg width="880" height="300" viewBox="0 0 880 300" xmlns="http://www.w3.org/2000/svg">
          ${defs}
          <text x="20" y="28" font-size="13">TM برای بررسی w#w: الگوریتم اصلی → مارک کردن کاراکتر اول از چپ و مطابقت با اولین از سمت راست و تکرار.</text>
          <rect x="40" y="60" width="800" height="200" rx="8" fill="#fff" stroke="#1976d2"/>
          <text x="120" y="150" font-size="13">مراحل: mark-left, scan-to-right, match, return</text>
        </svg>`;
        break;
  
      // 29 TM a^n b^n c^n
      case "tm_ancn":
        svg = `<svg width="880" height="320" viewBox="0 0 880 320" xmlns="http://www.w3.org/2000/svg">
          ${defs}
          <text x="20" y="28" font-size="13">a^n b^n c^n: نیاز به TM چندنوار یا چندین عبور؛ در اینجا شمای کلی نشان داده شده.</text>
          <rect x="40" y="60" width="800" height="240" rx="8" fill="#fff" stroke="#1976d2"/>
          <text x="120" y="160" font-size="13">روش: مارک/مچ کردن یک a با یک b و یک c در عبورهای متعدد (یا استفاده از دومین نوار)</text>
        </svg>`;
        break;
  
      // 30 TM reverse
      case "tm_reverse":
        svg = `<svg width="880" height="300" viewBox="0 0 880 300" xmlns="http://www.w3.org/2000/svg">
          ${defs}
          <text x="20" y="28" font-size="13">ماشین تورینگ: برعکس کردن رشته — معمولاً با ذخیره موقت و بازنویسی یا استفاده از نوار دوم.</text>
          <rect x="40" y="60" width="800" height="200" rx="8" fill="#fff" stroke="#1976d2"/>
          <text x="120" y="150" font-size="13">مراحل: move-to-end, copy-backwards, halt</text>
        </svg>`;
        break;
  
      default:
        svg = `<div style="padding:20px"><strong>این نمودار هنوز آماده نشده.</strong></div>`;
        break;
    }
  
    diagramCanvas.innerHTML = svg;
  }
  
  // render اولیه
  renderList("");
  
  // اگر خواستی فوراً نمایش اولین مورد:
  drawFSM(problems[0].type, problems[0]);
  