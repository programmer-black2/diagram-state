// مجموعه 20 مثال از نمودارهای حالت برای نظریه ماشین‌ها و زبان‌ها
// تمام نمودارها با SVG خام رسم شده‌اند

// تعریف marker برای فلش‌ها
const defs = `<defs>
  <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
    <path d="M0,0 L0,6 L9,3 z" fill="#1976d2" />
  </marker>
  <marker id="arrowGreen" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
    <path d="M0,0 L0,6 L9,3 z" fill="#2e7d32" />
  </marker>
</defs>`;

export const diagramExamples = [
    {
        id: 1,
        title: "مثال 1: DFA - رشته‌های با تعداد زوج 0",
        description: "زبانی که رشته‌های باینری با تعداد زوج صفر را می‌پذیرد (q0 حالت نهایی)",
        svgContent: `<svg width="700" height="320" viewBox="0 0 700 320" xmlns="http://www.w3.org/2000/svg">
      ${defs}
      <rect x="30" y="2" width="696" height="390" rx="10" fill="#ffffff" stroke="rgba(102,126,234,0.1)" stroke-width="2"/>
      
      <!-- q0: حالت شروع و نهایی -->
      <circle cx="200" cy="160" r="50" stroke="#2e7d32" stroke-width="6" fill="#c8e6c9"/>
      <text x="200" y="168" text-anchor="middle" font-size="22" font-weight="bold" fill="#1b5e20">q0</text>
      
      <!-- q1: حالت عادی -->
      <circle cx="500" cy="160" r="50" stroke="#1565c0" stroke-width="3" fill="#e3f2fd"/>
      <text x="500" y="168" text-anchor="middle" font-size="22" font-weight="bold" fill="#0d47a1">q1</text>
      
      <!-- فلش شروع -->
      <path d="M90,160 Q145,160 170,160" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="105" y="140" font-size="16" font-weight="bold" fill="#1976d2">شروع</text>
      
      <!-- q0 حلقه با 1 -->
      <path d="M200,105 Q155,55 200,5 Q245,55 200,105" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="200" y="-5" text-anchor="middle" font-size="18" font-weight="bold" fill="#1976d2">1</text>
      
      <!-- q1 حلقه با 1 -->
      <path d="M500,105 Q455,55 500,5 Q545,55 500,105" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="500" y="-5" text-anchor="middle" font-size="18" font-weight="bold" fill="#1976d2">1</text>
      
      <!-- q0 -> q1 با 0 -->
      <path d="M250,145 Q350,100 450,145" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="350" y="120" text-anchor="middle" font-size="18" font-weight="bold" fill="#1976d2">0</text>
      
      <!-- q1 -> q0 با 0 -->
      <path d="M450,175 Q350,220 250,175" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="350" y="245" text-anchor="middle" font-size="18" font-weight="bold" fill="#1976d2">0</text>
    </svg>`
    },

    {
        id: 2,
        title: "مثال 2: DFA - رشته‌های ختم شده به 01",
        description: "زبانی که رشته‌های باینری که با 01 ختم می‌شوند را می‌پذیرد",
        svgContent: `<svg width="780" height="280" viewBox="0 0 780 280" xmlns="http://www.w3.org/2000/svg">
      ${defs}
      <rect x="2" y="2" width="776" height="276" rx="10" fill="#ffffff" stroke="rgba(102,126,234,0.1)" stroke-width="2"/>
      
      <circle cx="130" cy="140" r="45" stroke="#1565c0" stroke-width="3" fill="#e3f2fd"/>
      <text x="130" y="148" text-anchor="middle" font-size="20" font-weight="bold" fill="#0d47a1">q0</text>
      
      <circle cx="350" cy="140" r="45" stroke="#1565c0" stroke-width="3" fill="#e3f2fd"/>
      <text x="350" y="148" text-anchor="middle" font-size="20" font-weight="bold" fill="#0d47a1">q1</text>
      
      <circle cx="600" cy="140" r="45" stroke="#2e7d32" stroke-width="6" fill="#c8e6c9"/>
      <text x="600" y="148" text-anchor="middle" font-size="20" font-weight="bold" fill="#1b5e20">q2</text>
      
      <path d="M40,140 Q90,140 108,140" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="55" y="120" font-size="15" font-weight="bold" fill="#1976d2">شروع</text>
      
      <path d="M130,90 Q85,40 130,0 Q175,40 130,90" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="130" y="-8" text-anchor="middle" font-size="17" font-weight="bold" fill="#1976d2">1</text>
      
      <path d="M175,130 Q260,90 325,130" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="250" y="105" text-anchor="middle" font-size="17" font-weight="bold" fill="#1976d2">0</text>
      
      <path d="M350,90 Q305,40 350,0 Q395,40 350,90" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="350" y="-8" text-anchor="middle" font-size="17" font-weight="bold" fill="#1976d2">0</text>
      
      <path d="M395,130 Q495,90 575,130" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="485" y="105" text-anchor="middle" font-size="17" font-weight="bold" fill="#1976d2">1</text>
      
      <path d="M575,150 Q495,190 395,150" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="485" y="210" text-anchor="middle" font-size="17" font-weight="bold" fill="#1976d2">0</text>
      
      <path d="M325,150 Q260,190 175,150" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="250" y="210" text-anchor="middle" font-size="17" font-weight="bold" fill="#1976d2">1</text>
    </svg>`
    },

    {
        id: 3,
        title: "مثال 3: DFA - رشته‌های شامل زیررشته 101",
        description: "زبانی که رشته‌های باینری حاوی زیررشته 101 را می‌پذیرد",
        svgContent: `<svg width="850" height="280" viewBox="0 0 850 280" xmlns="http://www.w3.org/2000/svg">
      ${defs}
      <rect x="2" y="2" width="846" height="276" rx="10" fill="#ffffff" stroke="rgba(102,126,234,0.1)" stroke-width="2"/>
      
      <circle cx="110" cy="140" r="42" stroke="#1565c0" stroke-width="3" fill="#e3f2fd"/>
      <text x="110" y="148" text-anchor="middle" font-size="19" font-weight="bold" fill="#0d47a1">q0</text>
      
      <circle cx="290" cy="140" r="42" stroke="#1565c0" stroke-width="3" fill="#e3f2fd"/>
      <text x="290" y="148" text-anchor="middle" font-size="19" font-weight="bold" fill="#0d47a1">q1</text>
      
      <circle cx="480" cy="140" r="42" stroke="#1565c0" stroke-width="3" fill="#e3f2fd"/>
      <text x="480" y="148" text-anchor="middle" font-size="19" font-weight="bold" fill="#0d47a1">q2</text>
      
      <circle cx="690" cy="140" r="42" stroke="#2e7d32" stroke-width="6" fill="#c8e6c9"/>
      <text x="690" y="148" text-anchor="middle" font-size="19" font-weight="bold" fill="#1b5e20">q3</text>
      
      <path d="M30,140 Q75,140 93,140" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      
      <path d="M110,93 Q65,43 110,3 Q155,43 110,93" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="110" y="-5" text-anchor="middle" font-size="17" font-weight="bold" fill="#1976d2">0</text>
      
      <path d="M152,135 Q220,100 268,135" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="210" y="110" text-anchor="middle" font-size="17" font-weight="bold" fill="#1976d2">1</text>
      
      <path d="M332,135 Q400,100 458,135" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="395" y="110" text-anchor="middle" font-size="17" font-weight="bold" fill="#1976d2">0</text>
      
      <path d="M522,135 Q600,100 668,135" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="595" y="110" text-anchor="middle" font-size="17" font-weight="bold" fill="#1976d2">1</text>
      
      <path d="M690,93 Q645,43 690,3 Q735,43 690,93" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="690" y="-5" text-anchor="middle" font-size="17" font-weight="bold" fill="#1976d2">0,1</text>
      
      <path d="M290,93 Q245,43 290,3 Q335,43 290,93" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="290" y="-5" text-anchor="middle" font-size="17" font-weight="bold" fill="#1976d2">1</text>
      
      <path d="M268,145 Q220,180 152,145" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="210" y="200" text-anchor="middle" font-size="17" font-weight="bold" fill="#1976d2">0</text>
    </svg>`
    },

    {
        id: 4,
        title: "مثال 4: DFA - رشته‌های با تعداد فرد a",
        description: "زبان L = {w | تعداد a در w فرد است}",
        svgContent: `<svg width="750" height="320" viewBox="0 0 750 320" xmlns="http://www.w3.org/2000/svg">
      ${defs}
      <rect x="2" y="2" width="746" height="316" rx="10" fill="#ffffff" stroke="rgba(102,126,234,0.1)" stroke-width="2"/>
      
      <circle cx="220" cy="160" r="55" stroke="#1565c0" stroke-width="3" fill="#e3f2fd"/>
      <text x="220" y="158" text-anchor="middle" font-size="20" font-weight="bold" fill="#0d47a1">q0</text>
      <text x="220" y="178" text-anchor="middle" font-size="14" fill="#555">(زوج)</text>
      
      <circle cx="530" cy="160" r="55" stroke="#2e7d32" stroke-width="6" fill="#c8e6c9"/>
      <text x="530" y="158" text-anchor="middle" font-size="20" font-weight="bold" fill="#1b5e20">q1</text>
      <text x="530" y="178" text-anchor="middle" font-size="14" fill="#2e7d32">(فرد)✓</text>
      
      <path d="M110,160 Q170,160 190,160" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="130" y="140" font-size="16" font-weight="bold" fill="#1976d2">شروع</text>
      
      <path d="M275,145 Q375,90 475,145" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="375" y="115" text-anchor="middle" font-size="20" font-weight="bold" fill="#1976d2">a</text>
      
      <path d="M475,175 Q375,230 275,175" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="375" y="255" text-anchor="middle" font-size="20" font-weight="bold" fill="#1976d2">a</text>
      
      <path d="M220,100 Q170,50 220,0 Q270,50 220,100" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="220" y="-8" text-anchor="middle" font-size="18" font-weight="bold" fill="#1976d2">b</text>
      
      <path d="M530,100 Q480,50 530,0 Q580,50 530,100" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="530" y="-8" text-anchor="middle" font-size="18" font-weight="bold" fill="#1976d2">b</text>
    </svg>`
    },

    {
        id: 5,
        title: "مثال 5: DFA - زبان a*b*",
        description: "زبانی که ابتدا تعدادی a و سپس تعدادی b دارد",
        svgContent: `<svg width="800" height="300" viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg">
      ${defs}
      <rect x="2" y="2" width="796" height="296" rx="10" fill="#ffffff" stroke="rgba(102,126,234,0.1)" stroke-width="2"/>
      
      <circle cx="170" cy="150" r="48" stroke="#2e7d32" stroke-width="6" fill="#c8e6c9"/>
      <text x="170" y="158" text-anchor="middle" font-size="20" font-weight="bold" fill="#1b5e20">q0</text>
      
      <circle cx="400" cy="150" r="48" stroke="#2e7d32" stroke-width="6" fill="#c8e6c9"/>
      <text x="400" y="158" text-anchor="middle" font-size="20" font-weight="bold" fill="#1b5e20">q1</text>
      
      <circle cx="660" cy="150" r="48" stroke="#f44336" stroke-width="3" fill="#ffebee"/>
      <text x="660" y="145" text-anchor="middle" font-size="17" font-weight="bold" fill="#c62828">Dead</text>
      <text x="660" y="165" text-anchor="middle" font-size="13" fill="#c62828">State</text>
      
      <path d="M70,150 Q125,150 145,150" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      
      <path d="M170,97 Q120,47 170,-3 Q220,47 170,97" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="170" y="-12" text-anchor="middle" font-size="18" font-weight="bold" fill="#1976d2">a</text>
      
      <path d="M218,140 Q305,100 372,140" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="295" y="110" text-anchor="middle" font-size="18" font-weight="bold" fill="#1976d2">b</text>
      
      <path d="M400,97 Q350,47 400,-3 Q450,47 400,97" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="400" y="-12" text-anchor="middle" font-size="18" font-weight="bold" fill="#1976d2">b</text>
      
      <path d="M448,145 Q550,100 632,145" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="540" y="110" text-anchor="middle" font-size="18" font-weight="bold" fill="#1976d2">a</text>
      
      <path d="M660,97 Q610,47 660,-3 Q710,47 660,97" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="660" y="-12" text-anchor="middle" font-size="18" font-weight="bold" fill="#1976d2">a,b</text>
    </svg>`
    },

    {
        id: 6,
        title: "مثال 6: DFA - رشته‌های با طول زوج",
        description: "زبان رشته‌های با طول زوج روی {0,1}",
        svgContent: `<svg width="700" height="320" viewBox="0 0 700 320" xmlns="http://www.w3.org/2000/svg">
      ${defs}
      <rect x="2" y="2" width="696" height="316" rx="10" fill="#ffffff" stroke="rgba(102,126,234,0.1)" stroke-width="2"/>
      
      <circle cx="200" cy="160" r="55" stroke="#2e7d32" stroke-width="6" fill="#c8e6c9"/>
      <text x="200" y="158" text-anchor="middle" font-size="20" font-weight="bold" fill="#1b5e20">q0</text>
      <text x="200" y="178" text-anchor="middle" font-size="15" fill="#2e7d32">(زوج)✓</text>
      
      <circle cx="500" cy="160" r="55" stroke="#1565c0" stroke-width="3" fill="#e3f2fd"/>
      <text x="500" y="158" text-anchor="middle" font-size="20" font-weight="bold" fill="#0d47a1">q1</text>
      <text x="500" y="178" text-anchor="middle" font-size="15" fill="#555">(فرد)</text>
      
      <path d="M90,160 Q150,160 170,160" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="110" y="140" font-size="16" font-weight="bold" fill="#1976d2">شروع</text>
      
      <path d="M255,145 Q350,90 445,145" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="350" y="115" text-anchor="middle" font-size="20" font-weight="bold" fill="#1976d2">0,1</text>
      
      <path d="M445,175 Q350,230 255,175" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="350" y="255" text-anchor="middle" font-size="20" font-weight="bold" fill="#1976d2">0,1</text>
    </svg>`
    },

    {
        id: 7,
        title: "مثال 7: DFA - رشته‌های با طول ≥ 3",
        description: "زبانی که رشته‌های با طول حداقل 3 را می‌پذیرد",
        svgContent: `<svg width="850" height="280" viewBox="0 0 850 280" xmlns="http://www.w3.org/2000/svg">
      ${defs}
      <rect x="2" y="2" width="846" height="276" rx="10" fill="#ffffff" stroke="rgba(102,126,234,0.1)" stroke-width="2"/>
      
      <circle cx="100" cy="140" r="40" stroke="#1565c0" stroke-width="3" fill="#e3f2fd"/>
      <text x="100" y="148" text-anchor="middle" font-size="19" font-weight="bold" fill="#0d47a1">q0</text>
      
      <circle cx="280" cy="140" r="40" stroke="#1565c0" stroke-width="3" fill="#e3f2fd"/>
      <text x="280" y="148" text-anchor="middle" font-size="19" font-weight="bold" fill="#0d47a1">q1</text>
      
      <circle cx="460" cy="140" r="40" stroke="#1565c0" stroke-width="3" fill="#e3f2fd"/>
      <text x="460" y="148" text-anchor="middle" font-size="19" font-weight="bold" fill="#0d47a1">q2</text>
      
      <circle cx="660" cy="140" r="40" stroke="#2e7d32" stroke-width="6" fill="#c8e6c9"/>
      <text x="660" y="148" text-anchor="middle" font-size="19" font-weight="bold" fill="#1b5e20">q3</text>
      
      <path d="M30,140 Q70,140 83,140" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      
      <path d="M140,135 Q210,95 257,135" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="200" y="105" text-anchor="middle" font-size="17" font-weight="bold" fill="#1976d2">a,b</text>
      
      <path d="M320,135 Q390,95 437,135" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="380" y="105" text-anchor="middle" font-size="17" font-weight="bold" fill="#1976d2">a,b</text>
      
      <path d="M500,135 Q580,95 637,135" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="570" y="105" text-anchor="middle" font-size="17" font-weight="bold" fill="#1976d2">a,b</text>
      
      <path d="M660,93 Q615,43 660,3 Q705,43 660,93" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="660" y="-5" text-anchor="middle" font-size="17" font-weight="bold" fill="#1976d2">a,b</text>
    </svg>`
    },

    {
        id: 8,
        title: "مثال 8: DFA - عدد باینری بخش‌پذیر بر 3",
        description: "زبانی که اعداد باینری بخش‌پذیر بر 3 را می‌پذیرد",
        svgContent: `<svg width="700" height="500" viewBox="0 0 700 500" xmlns="http://www.w3.org/2000/svg">
      ${defs}
      <marker id="arrowOrange" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
        <path d="M0,0 L0,6 L9,3 z" fill="#ff6f00" />
      </marker>
      <rect x="2" y="2" width="696" height="496" rx="10" fill="#ffffff" stroke="rgba(102,126,234,0.1)" stroke-width="2"/>
      <text x="20" y="35" font-size="14" fill="#666">فرمول: (2×حالت قبلی + ورودی) mod 3 = حالت جدید</text>
      
      <!-- q0: بالا وسط - حالت نهایی (سبز) -->
      <circle cx="350" cy="100" r="50" stroke="#2e7d32" stroke-width="6" fill="#c8e6c9"/>
      <text x="350" y="95" text-anchor="middle" font-size="22" font-weight="bold" fill="#1b5e20">q0</text>
      <text x="350" y="115" text-anchor="middle" font-size="14" fill="#2e7d32">(mod 0)✓</text>
      
      <!-- q1: پایین راست (آبی) -->
      <circle cx="550" cy="350" r="50" stroke="#1565c0" stroke-width="3" fill="#e3f2fd"/>
      <text x="550" y="345" text-anchor="middle" font-size="22" font-weight="bold" fill="#0d47a1">q1</text>
      <text x="550" y="365" text-anchor="middle" font-size="14" fill="#555">(mod 1)</text>
      
      <!-- q2: پایین چپ (آبی) -->
      <circle cx="150" cy="350" r="50" stroke="#1565c0" stroke-width="3" fill="#e3f2fd"/>
      <text x="150" y="345" text-anchor="middle" font-size="22" font-weight="bold" fill="#0d47a1">q2</text>
      <text x="150" y="365" text-anchor="middle" font-size="14" fill="#555">(mod 2)</text>
      
      <!-- فلش شروع -->
      <path d="M250,100 Q305,100 320,100" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="270" y="80" font-size="15" font-weight="bold" fill="#1976d2">شروع</text>
      
      <!-- q0 حلقه با 0 (بالا - آبی) -->
      <path d="M350,45 Q295,-5 350,-55 Q405,-5 350,45" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)" transform="translate(0,55)"/>
      <text x="350" y="10" text-anchor="middle" font-size="18" font-weight="bold" fill="#1976d2">0</text>
      
      <!-- q0 -> q1 با 1 (راست پایین - نارنجی) -->
      <path d="M395,130 Q500,220 520,320" stroke="#ff6f00" stroke-width="2.8" fill="none" marker-end="url(#arrowOrange)"/>
      <text x="470" y="210" text-anchor="middle" font-size="19" font-weight="bold" fill="#ff6f00">1</text>
      
      <!-- q1 -> q2 با 0 (پایین افقی - آبی) -->
      <path d="M520,385 Q350,435 180,385" stroke="#1976d2" stroke-width="2.8" fill="none" marker-end="url(#arrow)"/>
      <text x="350" y="460" text-anchor="middle" font-size="19" font-weight="bold" fill="#1976d2">0</text>
      
      <!-- q2 -> q0 با 1 (چپ بالا - نارنجی) -->
      <path d="M180,320 Q265,210 305,130" stroke="#ff6f00" stroke-width="2.8" fill="none" marker-end="url(#arrowOrange)"/>
      <text x="230" y="210" text-anchor="middle" font-size="19" font-weight="bold" fill="#ff6f00">1</text>
      
      <!-- q2 -> q1 با 0 (وسط بالا - آبی) -->
      <path d="M200,340 Q350,295 500,340" stroke="#1976d2" stroke-width="2.8" fill="none" marker-end="url(#arrow)"/>
      <text x="350" y="305" text-anchor="middle" font-size="19" font-weight="bold" fill="#1976d2">0</text>
      
      <!-- q1 -> q0 با 1 (وسط پایین - نارنجی) -->
      <path d="M500,360 Q350,405 200,360" stroke="#ff6f00" stroke-width="2.8" fill="none" marker-end="url(#arrowOrange)"/>
      <text x="350" y="420" text-anchor="middle" font-size="19" font-weight="bold" fill="#ff6f00">1</text>
      
      <!-- راهنما -->
      <text x="20" y="485" font-size="13" fill="#666">نکته: فلش‌های آبی = ورودی "0" | فلش‌های نارنجی = ورودی "1"</text>
    </svg>`
    },

    {
        id: 9,
        title: "مثال 9: DFA - رشته‌های بدون زیررشته 11",
        description: "زبان رشته‌های روی {0,1} که زیررشته 11 ندارند",
        svgContent: `<svg width="800" height="300" viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg">
      ${defs}
      <rect x="2" y="2" width="796" height="296" rx="10" fill="#ffffff" stroke="rgba(102,126,234,0.1)" stroke-width="2"/>
      
      <circle cx="170" cy="150" r="48" stroke="#2e7d32" stroke-width="6" fill="#c8e6c9"/>
      <text x="170" y="158" text-anchor="middle" font-size="20" font-weight="bold" fill="#1b5e20">q0</text>
      
      <circle cx="400" cy="150" r="48" stroke="#2e7d32" stroke-width="6" fill="#c8e6c9"/>
      <text x="400" y="158" text-anchor="middle" font-size="20" font-weight="bold" fill="#1b5e20">q1</text>
      
      <circle cx="660" cy="150" r="48" stroke="#f44336" stroke-width="3" fill="#ffebee"/>
      <text x="660" y="145" text-anchor="middle" font-size="17" font-weight="bold" fill="#c62828">Dead</text>
      <text x="660" y="165" text-anchor="middle" font-size="13" fill="#c62828">State</text>
      
      <path d="M70,150 Q125,150 145,150" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      
      <path d="M170,97 Q120,47 170,-3 Q220,47 170,97" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="170" y="-12" text-anchor="middle" font-size="18" font-weight="bold" fill="#1976d2">0</text>
      
      <path d="M218,140 Q305,100 372,140" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="295" y="110" text-anchor="middle" font-size="18" font-weight="bold" fill="#1976d2">1</text>
      
      <path d="M372,160 Q305,200 218,160" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="295" y="220" text-anchor="middle" font-size="18" font-weight="bold" fill="#1976d2">0</text>
      
      <path d="M448,145 Q550,100 632,145" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="540" y="110" text-anchor="middle" font-size="18" font-weight="bold" fill="#1976d2">1</text>
      
      <path d="M660,97 Q610,47 660,-3 Q710,47 660,97" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="660" y="-12" text-anchor="middle" font-size="18" font-weight="bold" fill="#1976d2">0,1</text>
    </svg>`
    },

    {
        id: 10,
        title: "مثال 10: DFA - اعداد باینری زوج",
        description: "زبان اعداد باینری که مقدار آن‌ها زوج است (ختم به 0)",
        svgContent: `<svg width="700" height="320" viewBox="0 0 700 320" xmlns="http://www.w3.org/2000/svg">
      ${defs}
      <rect x="2" y="2" width="696" height="316" rx="10" fill="#ffffff" stroke="rgba(102,126,234,0.1)" stroke-width="2"/>
      
      <circle cx="200" cy="160" r="55" stroke="#2e7d32" stroke-width="6" fill="#c8e6c9"/>
      <text x="200" y="158" text-anchor="middle" font-size="20" font-weight="bold" fill="#1b5e20">q0</text>
      <text x="200" y="178" text-anchor="middle" font-size="15" fill="#2e7d32">(زوج)✓</text>
      
      <circle cx="500" cy="160" r="55" stroke="#1565c0" stroke-width="3" fill="#e3f2fd"/>
      <text x="500" y="158" text-anchor="middle" font-size="20" font-weight="bold" fill="#0d47a1">q1</text>
      <text x="500" y="178" text-anchor="middle" font-size="15" fill="#555">(فرد)</text>
      
      <path d="M90,160 Q150,160 170,160" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      
      <path d="M200,100 Q150,50 200,0 Q250,50 200,100" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="200" y="-8" text-anchor="middle" font-size="18" font-weight="bold" fill="#1976d2">0</text>
      
      <path d="M255,145 Q350,90 445,145" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="350" y="115" text-anchor="middle" font-size="20" font-weight="bold" fill="#1976d2">1</text>
      
      <path d="M445,175 Q350,230 255,175" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="350" y="255" text-anchor="middle" font-size="20" font-weight="bold" fill="#1976d2">0</text>
      
      <path d="M500,100 Q450,50 500,0 Q550,50 500,100" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="500" y="-8" text-anchor="middle" font-size="18" font-weight="bold" fill="#1976d2">1</text>
    </svg>`
    },

    {
        id: 11,
        title: "مثال 11: DFA - شامل زیررشته '01'",
        description: "تشخیص وقوع 01 در رشته باینری",
        svgContent: `<svg width="780" height="280" viewBox="0 0 780 280" xmlns="http://www.w3.org/2000/svg">
      ${defs}
      <rect x="2" y="2" width="776" height="276" rx="10" fill="#ffffff" stroke="rgba(102,126,234,0.1)" stroke-width="2"/>
      
      <circle cx="130" cy="140" r="42" stroke="#1565c0" stroke-width="3" fill="#e3f2fd"/>
      <text x="130" y="148" text-anchor="middle" font-size="19" font-weight="bold" fill="#0d47a1">q0</text>
      
      <circle cx="350" cy="140" r="42" stroke="#1565c0" stroke-width="3" fill="#e3f2fd"/>
      <text x="350" y="148" text-anchor="middle" font-size="19" font-weight="bold" fill="#0d47a1">q1</text>
      
      <circle cx="600" cy="140" r="42" stroke="#2e7d32" stroke-width="6" fill="#c8e6c9"/>
      <text x="600" y="148" text-anchor="middle" font-size="19" font-weight="bold" fill="#1b5e20">q2</text>
      
      <path d="M45,140 Q92,140 110,140" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      
      <path d="M130,93 Q80,43 130,3 Q180,43 130,93" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="130" y="-5" text-anchor="middle" font-size="17" font-weight="bold" fill="#1976d2">1</text>
      
      <path d="M172,133 Q260,95 328,133" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="250" y="105" text-anchor="middle" font-size="17" font-weight="bold" fill="#1976d2">0</text>
      
      <path d="M350,93 Q300,43 350,3 Q400,43 350,93" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="350" y="-5" text-anchor="middle" font-size="17" font-weight="bold" fill="#1976d2">0</text>
      
      <path d="M392,133 Q495,95 578,133" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="485" y="105" text-anchor="middle" font-size="17" font-weight="bold" fill="#1976d2">1</text>
      
      <path d="M328,147 Q260,185 172,147" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="250" y="200" text-anchor="middle" font-size="17" font-weight="bold" fill="#1976d2">1</text>
      
      <path d="M600,93 Q550,43 600,3 Q650,43 600,93" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="600" y="-5" text-anchor="middle" font-size="17" font-weight="bold" fill="#1976d2">0,1</text>
    </svg>`
    },

    {
        id: 12,
        title: "مثال 12: NFA - (a|b)*abb",
        description: "رشته‌هایی که با abb ختم می‌شوند",
        svgContent: `<svg width="850" height="280" viewBox="0 0 850 280" xmlns="http://www.w3.org/2000/svg">
      ${defs}
      <rect x="2" y="2" width="846" height="276" rx="10" fill="#ffffff" stroke="rgba(102,126,234,0.1)" stroke-width="2"/>
      
      <circle cx="130" cy="140" r="42" stroke="#1565c0" stroke-width="3" fill="#e3f2fd"/>
      <text x="130" y="148" text-anchor="middle" font-size="19" font-weight="bold" fill="#0d47a1">q0</text>
      
      <circle cx="320" cy="140" r="42" stroke="#1565c0" stroke-width="3" fill="#e3f2fd"/>
      <text x="320" y="148" text-anchor="middle" font-size="19" font-weight="bold" fill="#0d47a1">q1</text>
      
      <circle cx="520" cy="140" r="42" stroke="#1565c0" stroke-width="3" fill="#e3f2fd"/>
      <text x="520" y="148" text-anchor="middle" font-size="19" font-weight="bold" fill="#0d47a1">q2</text>
      
      <circle cx="720" cy="140" r="42" stroke="#2e7d32" stroke-width="6" fill="#c8e6c9"/>
      <text x="720" y="148" text-anchor="middle" font-size="19" font-weight="bold" fill="#1b5e20">q3</text>
      
      <path d="M45,140 Q92,140 110,140" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      
      <path d="M130,93 Q80,43 130,3 Q180,43 130,93" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="130" y="-5" text-anchor="middle" font-size="17" font-weight="bold" fill="#1976d2">a,b</text>
      
      <path d="M172,133 Q245,95 298,133" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="235" y="105" text-anchor="middle" font-size="17" font-weight="bold" fill="#1976d2">a</text>
      
      <path d="M362,133 Q440,95 498,133" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="430" y="105" text-anchor="middle" font-size="17" font-weight="bold" fill="#1976d2">b</text>
      
      <path d="M562,133 Q640,95 698,133" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="630" y="105" text-anchor="middle" font-size="17" font-weight="bold" fill="#1976d2">b</text>
    </svg>`
    },

    {
        id: 13,
        title: "مثال 13: DFA - شروع با 1",
        description: "رشته‌هایی که با 1 شروع می‌شوند",
        svgContent: `<svg width="750" height="320" viewBox="0 0 750 320" xmlns="http://www.w3.org/2000/svg">
      ${defs}
      <rect x="2" y="2" width="746" height="316" rx="10" fill="#ffffff" stroke="rgba(102,126,234,0.1)" stroke-width="2"/>
      
      <circle cx="200" cy="160" r="48" stroke="#1565c0" stroke-width="3" fill="#e3f2fd"/>
      <text x="200" y="168" text-anchor="middle" font-size="20" font-weight="bold" fill="#0d47a1">q0</text>
      
      <circle cx="480" cy="100" r="48" stroke="#2e7d32" stroke-width="6" fill="#c8e6c9"/>
      <text x="480" y="105" text-anchor="middle" font-size="19" font-weight="bold" fill="#1b5e20">Accept</text>
      
      <circle cx="480" cy="220" r="48" stroke="#f44336" stroke-width="3" fill="#ffebee"/>
      <text x="480" y="225" text-anchor="middle" font-size="19" font-weight="bold" fill="#c62828">Reject</text>
      
      <path d="M100,160 Q155,160 175,160" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      
      <path d="M245,145 Q360,90 452,105" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="350" y="100" text-anchor="middle" font-size="18" font-weight="bold" fill="#1976d2">1</text>
      
      <path d="M245,175 Q360,220 452,215" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="350" y="215" text-anchor="middle" font-size="18" font-weight="bold" fill="#1976d2">0</text>
      
      <path d="M480,45 Q425,-5 480,-55 Q535,-5 480,45" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)" transform="translate(0,55)"/>
      <text x="480" y="25" text-anchor="middle" font-size="17" font-weight="bold" fill="#1976d2">0,1</text>
    </svg>`
    },

    {
        id: 14,
        title: "مثال 14: DFA - پایان با 00",
        description: "رشته‌هایی که با 00 تمام می‌شوند",
        svgContent: `<svg width="780" height="280" viewBox="0 0 780 280" xmlns="http://www.w3.org/2000/svg">
      ${defs}
      <rect x="2" y="2" width="776" height="276" rx="10" fill="#ffffff" stroke="rgba(102,126,234,0.1)" stroke-width="2"/>
      
      <circle cx="130" cy="140" r="42" stroke="#1565c0" stroke-width="3" fill="#e3f2fd"/>
      <text x="130" y="148" text-anchor="middle" font-size="19" font-weight="bold" fill="#0d47a1">q0</text>
      
      <circle cx="350" cy="140" r="42" stroke="#1565c0" stroke-width="3" fill="#e3f2fd"/>
      <text x="350" y="148" text-anchor="middle" font-size="19" font-weight="bold" fill="#0d47a1">q1</text>
      
      <circle cx="600" cy="140" r="42" stroke="#2e7d32" stroke-width="6" fill="#c8e6c9"/>
      <text x="600" y="148" text-anchor="middle" font-size="19" font-weight="bold" fill="#1b5e20">q2</text>
      
      <path d="M45,140 Q92,140 110,140" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      
      <path d="M130,93 Q80,43 130,3 Q180,43 130,93" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="130" y="-5" text-anchor="middle" font-size="17" font-weight="bold" fill="#1976d2">1</text>
      
      <path d="M172,133 Q260,95 328,133" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="250" y="105" text-anchor="middle" font-size="17" font-weight="bold" fill="#1976d2">0</text>
      
      <path d="M328,147 Q260,185 172,147" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="250" y="200" text-anchor="middle" font-size="17" font-weight="bold" fill="#1976d2">1</text>
      
      <path d="M392,133 Q495,95 578,133" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="485" y="105" text-anchor="middle" font-size="17" font-weight="bold" fill="#1976d2">0</text>
      
      <path d="M578,147 Q495,185 392,147" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="485" y="200" text-anchor="middle" font-size="17" font-weight="bold" fill="#1976d2">1</text>
    </svg>`
    },

    {
        id: 15,
        title: "مثال 15: DFA - حداکثر دو 1",
        description: "رشته‌های دارای حداکثر دو عدد 1",
        svgContent: `<svg width="900" height="280" viewBox="0 0 900 280" xmlns="http://www.w3.org/2000/svg">
      ${defs}
      <rect x="2" y="2" width="896" height="276" rx="10" fill="#ffffff" stroke="rgba(102,126,234,0.1)" stroke-width="2"/>
      
      <circle cx="110" cy="140" r="40" stroke="#2e7d32" stroke-width="6" fill="#c8e6c9"/>
      <text x="110" y="148" text-anchor="middle" font-size="19" font-weight="bold" fill="#1b5e20">q0</text>
      
      <circle cx="300" cy="140" r="40" stroke="#2e7d32" stroke-width="6" fill="#c8e6c9"/>
      <text x="300" y="148" text-anchor="middle" font-size="19" font-weight="bold" fill="#1b5e20">q1</text>
      
      <circle cx="500" cy="140" r="40" stroke="#2e7d32" stroke-width="6" fill="#c8e6c9"/>
      <text x="500" y="148" text-anchor="middle" font-size="19" font-weight="bold" fill="#1b5e20">q2</text>
      
      <circle cx="720" cy="140" r="40" stroke="#f44336" stroke-width="3" fill="#ffebee"/>
      <text x="720" y="145" text-anchor="middle" font-size="17" font-weight="bold" fill="#c62828">Reject</text>
      
      <path d="M40,140 Q80,140 93,140" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      
      <path d="M110,93 Q60,43 110,3 Q160,43 110,93" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="110" y="-5" text-anchor="middle" font-size="17" font-weight="bold" fill="#1976d2">0</text>
      
      <path d="M150,135 Q225,95 277,135" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="213" y="105" text-anchor="middle" font-size="17" font-weight="bold" fill="#1976d2">1</text>
      
      <path d="M300,93 Q250,43 300,3 Q350,43 300,93" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="300" y="-5" text-anchor="middle" font-size="17" font-weight="bold" fill="#1976d2">0</text>
      
      <path d="M340,135 Q420,95 477,135" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="408" y="105" text-anchor="middle" font-size="17" font-weight="bold" fill="#1976d2">1</text>
      
      <path d="M500,93 Q450,43 500,3 Q550,43 500,93" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="500" y="-5" text-anchor="middle" font-size="17" font-weight="bold" fill="#1976d2">0</text>
      
      <path d="M540,135 Q630,95 697,135" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="618" y="105" text-anchor="middle" font-size="17" font-weight="bold" fill="#1976d2">1</text>
      
      <path d="M720,93 Q670,43 720,3 Q770,43 720,93" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="720" y="-5" text-anchor="middle" font-size="17" font-weight="bold" fill="#1976d2">0,1</text>
    </svg>`
    },

    {
        id: 16,
        title: "مثال 16: DFA - تعداد 1ها مضرب 3",
        description: "سه حالت برای شمارش تعداد 1ها modulo 3",
        svgContent: `<svg width="850" height="280" viewBox="0 0 850 280" xmlns="http://www.w3.org/2000/svg">
      ${defs}
      <rect x="2" y="2" width="846" height="276" rx="10" fill="#ffffff" stroke="rgba(102,126,234,0.1)" stroke-width="2"/>
      
      <circle cx="170" cy="140" r="45" stroke="#2e7d32" stroke-width="6" fill="#c8e6c9"/>
      <text x="170" y="138" text-anchor="middle" font-size="19" font-weight="bold" fill="#1b5e20">r0</text>
      <text x="170" y="158" text-anchor="middle" font-size="13" fill="#2e7d32">(mod 0)✓</text>
      
      <circle cx="425" cy="140" r="45" stroke="#1565c0" stroke-width="3" fill="#e3f2fd"/>
      <text x="425" y="138" text-anchor="middle" font-size="19" font-weight="bold" fill="#0d47a1">r1</text>
      <text x="425" y="158" text-anchor="middle" font-size="13" fill="#555">(mod 1)</text>
      
      <circle cx="680" cy="140" r="45" stroke="#1565c0" stroke-width="3" fill="#e3f2fd"/>
      <text x="680" y="138" text-anchor="middle" font-size="19" font-weight="bold" fill="#0d47a1">r2</text>
      <text x="680" y="158" text-anchor="middle" font-size="13" fill="#555">(mod 2)</text>
      
      <path d="M80,140 Q130,140 148,140" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      
      <path d="M170,90 Q115,40 170,-10 Q225,40 170,90" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="170" y="-18" text-anchor="middle" font-size="16" font-weight="bold" fill="#1976d2">0</text>
      
      <path d="M215,130 Q320,80 403,130" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="310" y="95" text-anchor="middle" font-size="17" font-weight="bold" fill="#1976d2">1</text>
      
      <path d="M425,90 Q370,40 425,-10 Q480,40 425,90" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="425" y="-18" text-anchor="middle" font-size="16" font-weight="bold" fill="#1976d2">0</text>
      
      <path d="M470,130 Q575,80 658,130" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="565" y="95" text-anchor="middle" font-size="17" font-weight="bold" fill="#1976d2">1</text>
      
      <path d="M680,90 Q625,40 680,-10 Q735,40 680,90" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="680" y="-18" text-anchor="middle" font-size="16" font-weight="bold" fill="#1976d2">0</text>
      
      <path d="M658,150 Q575,200 470,150" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="565" y="220" text-anchor="middle" font-size="17" font-weight="bold" fill="#1976d2">1</text>
      
      <path d="M403,150 Q320,200 215,150" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="310" y="220" text-anchor="middle" font-size="17" font-weight="bold" fill="#1976d2">1</text>
    </svg>`
    },

    {
        id: 17,
        title: "مثال 17: DFA - حداقل یک 1",
        description: "رشته‌هایی که حداقل یک 1 دارند",
        svgContent: `<svg width="750" height="320" viewBox="0 0 750 320" xmlns="http://www.w3.org/2000/svg">
      ${defs}
      <rect x="2" y="2" width="746" height="316" rx="10" fill="#ffffff" stroke="rgba(102,126,234,0.1)" stroke-width="2"/>
      
      <circle cx="220" cy="160" r="50" stroke="#1565c0" stroke-width="3" fill="#e3f2fd"/>
      <text x="220" y="168" text-anchor="middle" font-size="21" font-weight="bold" fill="#0d47a1">q0</text>
      
      <circle cx="530" cy="160" r="50" stroke="#2e7d32" stroke-width="6" fill="#c8e6c9"/>
      <text x="530" y="168" text-anchor="middle" font-size="21" font-weight="bold" fill="#1b5e20">q1</text>
      
      <path d="M110,160 Q170,160 190,160" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      
      <path d="M220,105 Q165,55 220,5 Q275,55 220,105" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="220" y="-5" text-anchor="middle" font-size="18" font-weight="bold" fill="#1976d2">0</text>
      
      <path d="M270,145 Q375,85 480,145" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="375" y="110" text-anchor="middle" font-size="20" font-weight="bold" fill="#1976d2">1</text>
      
      <path d="M480,175 Q375,235 270,175" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="375" y="260" text-anchor="middle" font-size="20" font-weight="bold" fill="#1976d2">0</text>
      
      <path d="M530,105 Q475,55 530,5 Q585,55 530,105" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="530" y="-5" text-anchor="middle" font-size="18" font-weight="bold" fill="#1976d2">1</text>
    </svg>`
    },

    {
        id: 18,
        title: "مثال 18: DFA - 0ها زوج و 1ها فرد",
        description: "ترکیب شرایط: تعداد 0ها زوج باشد و تعداد 1ها فرد باشد (حالت نهایی q01)",
        svgContent: `<svg width="800" height="450" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
      ${defs}
      <rect x="2" y="2" width="796" height="446" rx="10" fill="#ffffff" stroke="rgba(102,126,234,0.1)" stroke-width="2"/>
      
      <!-- q00: حالت شروع - بالا چپ -->
      <circle cx="200" cy="130" r="48" stroke="#1565c0" stroke-width="3" fill="#e3f2fd"/>
      <text x="200" y="125" text-anchor="middle" font-size="18" font-weight="bold" fill="#0d47a1">q00</text>
      <text x="200" y="145" text-anchor="middle" font-size="12" fill="#555">(0زوج,1زوج)</text>
      
      <!-- q01: حالت نهایی - بالا راست -->
      <circle cx="600" cy="130" r="48" stroke="#2e7d32" stroke-width="6" fill="#c8e6c9"/>
      <text x="600" y="125" text-anchor="middle" font-size="18" font-weight="bold" fill="#1b5e20">q01</text>
      <text x="600" y="145" text-anchor="middle" font-size="12" fill="#2e7d32">(0زوج,1فرد)✓</text>
      
      <!-- q10: پایین چپ -->
      <circle cx="200" cy="320" r="48" stroke="#1565c0" stroke-width="3" fill="#e3f2fd"/>
      <text x="200" y="315" text-anchor="middle" font-size="18" font-weight="bold" fill="#0d47a1">q10</text>
      <text x="200" y="335" text-anchor="middle" font-size="12" fill="#555">(0فرد,1زوج)</text>
      
      <!-- q11: پایین راست -->
      <circle cx="600" cy="320" r="48" stroke="#1565c0" stroke-width="3" fill="#e3f2fd"/>
      <text x="600" y="315" text-anchor="middle" font-size="18" font-weight="bold" fill="#0d47a1">q11</text>
      <text x="600" y="335" text-anchor="middle" font-size="12" fill="#555">(0فرد,1فرد)</text>
      
      <!-- فلش شروع -->
      <path d="M100,130 Q150,130 172,130" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="120" y="110" font-size="15" font-weight="bold" fill="#1976d2">شروع</text>
      
      <!-- Transitions افقی با 1 (سبز) -->
      <path d="M248,120 Q400,80 552,120" stroke="#2e7d32" stroke-width="2.5" fill="none" marker-end="url(#arrowGreen)"/>
      <text x="400" y="95" text-anchor="middle" font-size="16" font-weight="bold" fill="#2e7d32" 
            style="background:white; padding:2px;">1</text>
      
      <path d="M552,140 Q400,180 248,140" stroke="#2e7d32" stroke-width="2.5" fill="none" marker-end="url(#arrowGreen)"/>
      <text x="400" y="195" text-anchor="middle" font-size="16" font-weight="bold" fill="#2e7d32">1</text>
      
      <path d="M248,310 Q400,270 552,310" stroke="#2e7d32" stroke-width="2.5" fill="none" marker-end="url(#arrowGreen)"/>
      <text x="400" y="285" text-anchor="middle" font-size="16" font-weight="bold" fill="#2e7d32">1</text>
      
      <path d="M552,330 Q400,370 248,330" stroke="#2e7d32" stroke-width="2.5" fill="none" marker-end="url(#arrowGreen)"/>
      <text x="400" y="385" text-anchor="middle" font-size="16" font-weight="bold" fill="#2e7d32">1</text>
      
      <!-- Transitions عمودی با 0 (آبی) -->
      <path d="M190,178 Q170,225 190,272" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/>
      <text x="155" y="230" text-anchor="middle" font-size="16" font-weight="bold" fill="#1976d2">0</text>
      
      <path d="M210,272 Q230,225 210,178" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/>
      <text x="245" y="230" text-anchor="middle" font-size="16" font-weight="bold" fill="#1976d2">0</text>
      
      <path d="M590,178 Q570,225 590,272" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/>
      <text x="555" y="230" text-anchor="middle" font-size="16" font-weight="bold" fill="#1976d2">0</text>
      
      <path d="M610,272 Q630,225 610,178" stroke="#1976d2" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/>
      <text x="645" y="230" text-anchor="middle" font-size="16" font-weight="bold" fill="#1976d2">0</text>
      
      <!-- راهنما -->
      <text x="50" y="420" font-size="13" fill="#666">نکته: فلش‌های سبز = انتقال با "1" | فلش‌های آبی = انتقال با "0"</text>
    </svg>`
    },

    {
        id: 19,
        title: "مثال 19: DFA - شروع و پایان یکسان",
        description: "رشته‌هایی که با سمبل یکسان شروع و ختم می‌شوند",
        svgContent: `<svg width="750" height="380" viewBox="0 0 750 380" xmlns="http://www.w3.org/2000/svg">
      ${defs}
      <rect x="2" y="2" width="746" height="376" rx="10" fill="#ffffff" stroke="rgba(102,126,234,0.1)" stroke-width="2"/>
      <text x="20" y="35" font-size="14" font-weight="normal" fill="#666">ایده: ذخیره اولین کاراکتر و بررسی آخرین</text>
      
      <circle cx="180" cy="190" r="45" stroke="#1565c0" stroke-width="3" fill="#e3f2fd"/>
      <text x="180" y="198" text-anchor="middle" font-size="19" font-weight="bold" fill="#0d47a1">start</text>
      
      <circle cx="480" cy="110" r="45" stroke="#2e7d32" stroke-width="6" fill="#c8e6c9"/>
      <text x="480" y="108" text-anchor="middle" font-size="17" font-weight="bold" fill="#1b5e20">q0✓</text>
      <text x="480" y="128" text-anchor="middle" font-size="12" fill="#2e7d32">(شروع با 0)</text>
      
      <circle cx="480" cy="270" r="45" stroke="#2e7d32" stroke-width="6" fill="#c8e6c9"/>
      <text x="480" y="268" text-anchor="middle" font-size="17" font-weight="bold" fill="#1b5e20">q1✓</text>
      <text x="480" y="288" text-anchor="middle" font-size="12" fill="#2e7d32">(شروع با 1)</text>
      
      <path d="M85,190 Q137,190 158,190" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      
      <path d="M220,170 Q350,120 455,115" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="340" y="125" text-anchor="middle" font-size="17" font-weight="bold" fill="#1976d2">0</text>
      
      <path d="M220,210 Q350,260 455,265" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="340" y="255" text-anchor="middle" font-size="17" font-weight="bold" fill="#1976d2">1</text>
      
      <path d="M480,60 Q425,10 480,-40 Q535,10 480,60" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)" transform="translate(0,40)"/>
      <text x="480" y="25" text-anchor="middle" font-size="16" font-weight="bold" fill="#1976d2">0,1</text>
      
      <path d="M480,320 Q425,370 480,420 Q535,370 480,320" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)" transform="translate(0,-50)"/>
      <text x="480" y="360" text-anchor="middle" font-size="16" font-weight="bold" fill="#1976d2">0,1</text>
    </svg>`
    },

    {
        id: 20,
        title: "مثال 20: NFA با ε-transition",
        description: "مثال NFA با انتقال ε برای الگوی (0+1)*1(0+1)",
        svgContent: `<svg width="850" height="320" viewBox="0 0 850 320" xmlns="http://www.w3.org/2000/svg">
      ${defs}
      <rect x="2" y="2" width="846" height="316" rx="10" fill="#ffffff" stroke="rgba(102,126,234,0.1)" stroke-width="2"/>
      <text x="20" y="35" font-size="14" fill="#666">ε-NFA: از حالت اولیه با ε به حلقه می‌رود، سپس 1 و بعد یک نماد دیگر</text>
      
      <circle cx="150" cy="160" r="42" stroke="#1565c0" stroke-width="3" fill="#e3f2fd"/>
      <text x="150" y="168" text-anchor="middle" font-size="19" font-weight="bold" fill="#0d47a1">s</text>
      
      <circle cx="360" cy="160" r="42" stroke="#1565c0" stroke-width="3" fill="#e3f2fd"/>
      <text x="360" y="168" text-anchor="middle" font-size="19" font-weight="bold" fill="#0d47a1">loop</text>
      
      <circle cx="580" cy="160" r="42" stroke="#1565c0" stroke-width="3" fill="#e3f2fd"/>
      <text x="580" y="168" text-anchor="middle" font-size="19" font-weight="bold" fill="#0d47a1">q1</text>
      
      <circle cx="750" cy="160" r="42" stroke="#2e7d32" stroke-width="6" fill="#c8e6c9"/>
      <text x="750" y="168" text-anchor="middle" font-size="19" font-weight="bold" fill="#1b5e20">acc</text>
      
      <path d="M65,160 Q112,160 130,160" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      
      <path d="M192,153 Q275,110 338,153" stroke="#e91e63" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="265" y="120" text-anchor="middle" font-size="18" font-weight="bold" fill="#e91e63">ε</text>
      
      <path d="M360,113 Q305,63 360,13 Q415,63 360,113" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="360" y="5" text-anchor="middle" font-size="17" font-weight="bold" fill="#1976d2">0,1</text>
      
      <path d="M402,153 Q490,110 558,153" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="480" y="120" text-anchor="middle" font-size="18" font-weight="bold" fill="#1976d2">1</text>
      
      <path d="M622,153 Q685,110 728,153" stroke="#1976d2" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <text x="675" y="120" text-anchor="middle" font-size="17" font-weight="bold" fill="#1976d2">0,1</text>
    </svg>`
    }
];
