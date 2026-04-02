import { useEffect, useRef } from "react";
import React from "react";

/* ─── GLOBAL STYLES injected once ─── */
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Tajawal:wght@300;400;500;700;800&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap');

  .sondos-pp {
    --bg:  #EDE9F7; --bg2: #E8E3F4; --bg3: #F5F3FB; --bg4: #F0ECFC;
    --purple: #7C3AED; --purple-d: #5B21B6; --purple-l: #A78BFA; --purple-xl: #C4B5FD;
    --pdim: rgba(124,58,237,0.09); --pborder: rgba(124,58,237,0.20);
    --ink: #1E1B2E; --muted: #6B6880; --white: #FFFFFF; --green: #22C55E;
    font-family: 'Tajawal', sans-serif;
    background: var(--bg);
    color: var(--ink);
    line-height: 1.75;
    overflow-x: hidden;
    position: relative;
  }

  /* blobs */
  .sondos-pp .blob {
    position: absolute; border-radius: 50%; pointer-events: none; z-index: 0;
  }
  .sondos-pp .blob1 {
    width: 500px; height: 500px; top: -100px; right: -100px;
    background: radial-gradient(circle, rgba(124,58,237,0.13) 0%, transparent 70%);
  }
  .sondos-pp .blob2 {
    width: 400px; height: 400px; bottom: 10%; left: -80px;
    background: radial-gradient(circle, rgba(167,139,250,0.10) 0%, transparent 70%);
  }
  .sondos-pp .blob3 {
    width: 300px; height: 300px; top: 40%; right: 5%;
    background: radial-gradient(circle, rgba(196,181,253,0.12) 0%, transparent 70%);
  }

  /* lang toggle */
  .sondos-pp .lang-toggle {
    position: sticky; top: 16px; z-index: 200;
    display: flex; justify-content: flex-end; padding: 0 24px;
    margin-bottom: -48px;
  }
  .sondos-pp .lang-wrap {
    display: flex; background: var(--white);
    border: 1px solid var(--pborder); border-radius: 50px;
    padding: 4px; box-shadow: 0 4px 20px rgba(124,58,237,0.14);
  }
  .sondos-pp .lang-btn {
    padding: 7px 16px; border: none; background: transparent;
    color: var(--muted); font-family: 'Tajawal', sans-serif;
    font-size: 12px; font-weight: 600; cursor: pointer;
    border-radius: 50px; transition: all .22s; letter-spacing: .5px;
  }
  .sondos-pp .lang-btn.active { background: var(--purple); color: white; font-weight: 700; }

  /* header */
  .sondos-pp header {
    position: relative; z-index: 1;
    text-align: center; padding: 80px 24px 64px;
  }
  .sondos-pp .logo-row {
    display: inline-flex; align-items: center; gap: 10px; margin-bottom: 32px;
  }
  .sondos-pp .logo-icon {
    width: 40px; height: 40px; background: var(--purple); border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 4px 16px rgba(124,58,237,0.35);
  }
  .sondos-pp .logo-name {
    font-family: 'Syne', sans-serif; font-size: 18px;
    font-weight: 800; color: var(--ink);
  }
  .sondos-pp .logo-name span { color: var(--purple); }
  .sondos-pp .page-title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(2rem, 5vw, 3.2rem);
    font-weight: 800; color: var(--ink); line-height: 1.15;
  }
  .sondos-pp .page-title .hi { color: var(--purple); }
  .sondos-pp .page-sub { font-size: .9rem; color: var(--muted); margin-top: 10px; }
  .sondos-pp .date-pill {
    display: inline-flex; align-items: center; gap: 7px;
    background: var(--white); border: 1px solid var(--pborder);
    color: var(--purple); font-size: 11px; font-weight: 600;
    padding: 6px 16px; border-radius: 50px; margin-top: 20px;
    letter-spacing: .5px; box-shadow: 0 2px 10px rgba(124,58,237,0.1);
  }
  .sondos-pp .date-dot {
    width: 6px; height: 6px; border-radius: 50%; background: var(--green);
  }

  /* wrap */
  .sondos-pp .wrap {
    max-width: 820px; margin: 0 auto;
    padding: 0 24px 80px; position: relative; z-index: 1;
  }

  /* intro box */
  .sondos-pp .intro-box {
    background: var(--purple); border-radius: 18px;
    padding: 36px 40px; margin-bottom: 44px;
    position: relative; overflow: hidden;
  }
  .sondos-pp .intro-box::before {
    content: ''; position: absolute; inset: 0;
    background: radial-gradient(ellipse 80% 80% at 100% 0%, rgba(255,255,255,0.08), transparent 60%);
  }
  .sondos-pp .intro-box h2 {
    font-family: 'Syne', sans-serif; font-size: 1.4rem;
    font-weight: 800; color: white; line-height: 1.5;
    margin-bottom: 16px; position: relative;
  }
  .sondos-pp .intro-box h2 em { color: var(--purple-xl); font-style: normal; }
  .sondos-pp .intro-box p {
    font-size: .93rem; color: rgba(255,255,255,.65);
    line-height: 1.85; position: relative;
  }
  .sondos-pp .intro-box ul { list-style: none; margin-top: 14px; position: relative; }
  .sondos-pp .intro-box ul li {
    color: rgba(255,255,255,.75); font-size: .9rem;
    padding: 5px 0; display: flex; align-items: flex-start; gap: 9px;
  }
  .sondos-pp .intro-box ul li::before {
    content: '✦'; color: var(--purple-xl); flex-shrink: 0;
    font-size: 10px; margin-top: 4px;
  }

  /* disclaimer */
  .sondos-pp .disclaimer {
    background: var(--white); border: 1px solid var(--pborder);
    border-radius: 12px; padding: 14px 18px; margin-bottom: 40px;
    font-size: .84rem; color: var(--muted); line-height: 1.75;
  }
  .sondos-pp .disclaimer strong { color: var(--purple); }

  /* toc */
  .sondos-pp .toc {
    background: var(--white); border: 1px solid var(--pborder);
    border-radius: 16px; padding: 26px 30px; margin-bottom: 48px;
    box-shadow: 0 2px 16px rgba(124,58,237,0.06);
  }
  .sondos-pp .toc-title {
    font-size: 11px; font-weight: 700; letter-spacing: 3px;
    text-transform: uppercase; color: var(--purple); margin-bottom: 14px;
  }
  .sondos-pp .toc-list {
    list-style: none; display: grid;
    grid-template-columns: 1fr 1fr; gap: 7px 20px;
  }
  .sondos-pp .toc-list li a {
    color: var(--muted); text-decoration: none; font-size: 13px;
    transition: color .18s; display: flex; align-items: center; gap: 7px;
  }
  .sondos-pp .toc-list li a::before {
    content: '◆'; font-size: 5px; color: var(--purple); flex-shrink: 0;
  }
  .sondos-pp .toc-list li a:hover { color: var(--purple); }

  /* sections */
  .sondos-pp .sec {
    margin-bottom: 36px;
    opacity: 0; transform: translateY(16px);
    transition: opacity .5s, transform .5s;
  }
  .sondos-pp .sec.vis { opacity: 1; transform: translateY(0); }
  .sondos-pp .sec-head {
    display: flex; align-items: flex-start; gap: 14px; margin-bottom: 14px;
  }
  .sondos-pp .sec-num {
    background: var(--purple); color: white;
    font-family: 'Syne', sans-serif; font-size: 11px; font-weight: 800;
    width: 28px; height: 28px; border-radius: 8px;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0; margin-top: 3px;
  }
  .sondos-pp .sec-title {
    font-family: 'Syne', sans-serif; font-size: 1.2rem;
    font-weight: 700; color: var(--ink); line-height: 1.3;
  }
  .sondos-pp .sec-body {
    padding-right: 42px; font-size: .92rem;
    line-height: 1.9; color: #3d3653;
  }
  .sondos-pp .sec-body p { margin-bottom: 10px; }
  .sondos-pp .sec-body p:last-child { margin-bottom: 0; }
  .sondos-pp .sec-body ul { list-style: none; margin: 9px 0; }
  .sondos-pp .sec-body ul li {
    padding: 6px 0; border-bottom: 1px solid rgba(124,58,237,0.08);
    display: flex; align-items: flex-start; gap: 9px; font-size: .91rem;
  }
  .sondos-pp .sec-body ul li::before {
    content: '—'; color: var(--purple); flex-shrink: 0; font-weight: 700;
  }
  .sondos-pp .sec-body ul li:last-child { border-bottom: none; }
  .sondos-pp .note {
    background: var(--pdim); border-right: 3px solid var(--purple);
    padding: 12px 16px; border-radius: 0 8px 8px 0;
    margin: 12px 0; font-size: .87rem; color: #4a3880; line-height: 1.75;
  }

  /* calls box */
  .sondos-pp .calls-box {
    background: var(--white); border: 1px solid var(--pborder);
    border-radius: 14px; padding: 24px 28px; margin-top: 14px;
    box-shadow: 0 2px 12px rgba(124,58,237,0.06);
  }
  .sondos-pp .calls-badge {
    display: inline-flex; align-items: center; gap: 6px;
    background: var(--pdim); border: 1px solid var(--pborder);
    color: var(--purple); font-size: 10px; font-weight: 700;
    padding: 4px 12px; border-radius: 20px; margin-bottom: 13px;
    letter-spacing: 1px; text-transform: uppercase;
  }
  .sondos-pp .calls-box ul { list-style: none; }
  .sondos-pp .calls-box ul li {
    font-size: .9rem; color: #3d3653; padding: 6px 0;
    border-bottom: 1px solid rgba(124,58,237,0.07);
    display: flex; align-items: flex-start; gap: 9px;
  }
  .sondos-pp .calls-box ul li::before {
    content: '✓'; color: var(--green); font-weight: 800; flex-shrink: 0;
  }
  .sondos-pp .calls-box ul li:last-child { border-bottom: none; }
  .sondos-pp .calls-note {
    background: var(--purple); color: rgba(255,255,255,.82);
    border-radius: 9px; padding: 12px 16px; margin-top: 14px;
    font-size: .86rem; line-height: 1.7;
  }
  .sondos-pp .calls-note strong { color: var(--purple-xl); }

  .sondos-pp hr.rule {
    border: none; border-top: 1px solid rgba(124,58,237,0.12); margin: 34px 0;
  }

  /* contact card */
  .sondos-pp .contact-card {
    background: var(--purple); color: white; border-radius: 18px;
    padding: 36px; margin-top: 44px; position: relative; overflow: hidden;
  }
  .sondos-pp .contact-card::before {
    content: ''; position: absolute; inset: 0;
    background: radial-gradient(ellipse 70% 70% at 0% 0%, rgba(255,255,255,0.07), transparent 60%);
  }
  .sondos-pp .contact-card h3 {
    font-family: 'Syne', sans-serif; font-size: 1.2rem;
    font-weight: 700; color: var(--purple-xl); margin-bottom: 12px; position: relative;
  }
  .sondos-pp .contact-card p {
    font-size: .88rem; color: rgba(255,255,255,.6); line-height: 2.1; position: relative;
  }
  .sondos-pp .contact-card a { color: var(--purple-xl); text-decoration: none; }

  /* closing */
  .sondos-pp .closing { text-align: center; padding: 52px 0 16px; }
  .sondos-pp .closing .orn {
    color: var(--purple); font-size: 16px; letter-spacing: 4px;
    margin-bottom: 16px; opacity: .5;
  }
  .sondos-pp .closing p {
    font-family: 'Syne', sans-serif; font-size: 1.15rem;
    font-weight: 700; color: var(--ink); line-height: 1.65;
    max-width: 520px; margin: 0 auto;
  }
  .sondos-pp .closing p em { color: var(--purple); font-style: normal; }

  /* english overrides */
  .sondos-pp .en-sec { direction: ltr; text-align: left; }
  .sondos-pp .en-sec .sec-body { padding-right: 0; padding-left: 42px; }
  .sondos-pp .en-sec .note {
    border-right: none; border-left: 3px solid var(--purple);
    border-radius: 8px 0 0 8px;
  }

  /* divider */
  .sondos-pp .lang-divider {
    display: flex; align-items: center; gap: 18px; margin: 56px 0 44px;
  }
  .sondos-pp .lang-divider::before,
  .sondos-pp .lang-divider::after {
    content: ''; flex: 1; height: 1px;
    background: linear-gradient(90deg, transparent, var(--pborder), transparent);
  }
  .sondos-pp .lang-divider-lbl {
    font-family: 'Syne', sans-serif; font-size: .95rem;
    color: var(--purple); white-space: nowrap; letter-spacing: 1px;
  }

  /* footer */
  .sondos-pp footer {
    background: var(--ink); text-align: center;
    padding: 28px; font-size: 12px; color: rgba(255,255,255,.28);
  }
  .sondos-pp footer .ft {
    font-family: 'Syne', sans-serif; font-size: 16px;
    font-weight: 800; color: var(--purple-l); letter-spacing: 2px;
    display: block; margin-bottom: 8px;
  }

  @keyframes pp-fadeUp {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .sondos-pp .anim-1 { animation: pp-fadeUp .6s .10s both; }
  .sondos-pp .anim-2 { animation: pp-fadeUp .6s .22s both; }
  .sondos-pp .anim-3 { animation: pp-fadeUp .6s .35s both; }
  .sondos-pp .anim-4 { animation: pp-fadeUp .6s .46s both; }
  .sondos-pp .anim-5 { animation: pp-fadeUp .7s .50s both; }
  .sondos-pp .anim-6 { animation: pp-fadeUp .7s .58s both; }
  .sondos-pp .anim-7 { animation: pp-fadeUp .7s .62s both; }
  .sondos-pp .anim-8 { animation: pp-fadeUp .7s .65s both; }

  @media(max-width:540px){
    .sondos-pp .toc-list { grid-template-columns: 1fr; }
    .sondos-pp .intro-box { padding: 24px 20px; }
    .sondos-pp .wrap { padding: 0 16px 60px; }
  }
`;

/* ─── DATA ─── */
const AR_SECTIONS = [
  {
    id: "ar-1", num: "١", title: "نبذة عنا",
    content: (
      <>
        <p>سندس للذكاء الاصطناعي ("Sondos AI"، "الشركة"، "نحن") شركة تقنية مقرها المملكة العربية السعودية، متخصصة في حلول الأتمتة الصوتية المدعومة بالذكاء الاصطناعي.</p>
        <p>تسري هذه السياسة على موقعنا <strong>sondos-ai.com</strong> وجميع خدماتنا المرتبطة. تلتزم الشركة بالامتثال لنظام حماية البيانات الشخصية السعودي (PDPL) بالقدر المنطبق على نشاطها.</p>
      </>
    ),
  },
  {
    id: "ar-2", num: "٢", title: "البيانات التي نجمعها",
    content: (
      <>
        <p>نجمع البيانات التالية <strong>فقط عند الحاجة</strong>:</p>
        <ul>
          <li><strong>بيانات تعريفية:</strong> الاسم، البريد الإلكتروني، رقم الهاتف، المسمى الوظيفي</li>
          <li><strong>بيانات استخدام:</strong> عناوين IP، نوع الجهاز والمتصفح، أنماط الاستخدام</li>
          <li><strong>بيانات المحادثات:</strong> تسجيلات أو نصوص مكالمات عند الاقتضاء</li>
          <li><strong>بيانات الدفع:</strong> تُعالَج عبر مزودين معتمدين — لا نخزّن بيانات البطاقة</li>
          <li><strong>بيانات التواصل:</strong> رسائل واستفسارات مُرسَلة إلينا</li>
        </ul>
        <div className="note">قد تختلف البيانات المجمعة بحسب طبيعة الخدمة المستخدمة والاتفاقية المبرمة مع الشركة.</div>
      </>
    ),
  },
  {
    id: "ar-3", num: "٣", title: "استخدام البيانات",
    content: (
      <>
        <p>تُستخدم البيانات الشخصية لأغراض مشروعة تشمل:</p>
        <ul>
          <li>تشغيل المنصة وتقديم الخدمات المتفق عليها</li>
          <li>إدارة الحسابات والعلاقات التعاقدية</li>
          <li>تحسين جودة الخدمة ونماذج الذكاء الاصطناعي</li>
          <li>الرد على طلبات الدعم الفني</li>
          <li>إرسال إشعارات تشغيلية ضرورية</li>
          <li>الوفاء بالالتزامات القانونية والتنظيمية السارية</li>
          <li>أغراض تسويقية عند الحصول على موافقة مسبقة</li>
        </ul>
        <div className="note">لا تُستخدم البيانات في اتخاذ قرارات آلية ذات أثر قانوني مباشر دون مراجعة بشرية.</div>
      </>
    ),
  },
  {
    id: "ar-4", num: "٤", title: "بيانات المكالمات",
    content: (
      <>
        <p>نظراً لطبيعة خدماتنا الصوتية، نُولي بيانات المكالمات أعلى مستويات الحماية:</p>
        <div className="calls-box">
          <div className="calls-badge">🔒 بروتوكول المكالمات</div>
          <ul>
            <li>تُسجَّل المكالمات بناءً على الإعدادات المفعّلة في حساب العميل أو بموجب الاتفاقية</li>
            <li>تُستخدم بيانات المكالمات بصورة رئيسية لتقديم الخدمة وتحسين أدائها</li>
            <li>يمكن للعميل إدارة إعدادات التسجيل وفق الصلاحيات المتاحة</li>
            <li>لا تُشارَك بيانات المكالمات مع أطراف خارجية إلا في الحالات المنصوص عليها</li>
          </ul>
          <div className="calls-note">🔐 <strong>ضمان الخصوصية:</strong> تخضع إعدادات التسجيل والاحتفاظ للشروط الواردة في اتفاقية الخدمة الخاصة بكل عميل.</div>
        </div>
      </>
    ),
  },
  {
    id: "ar-5", num: "٥", title: "مشاركة البيانات",
    content: (
      <>
        <p><strong>لا نبيع بياناتك.</strong> قد نشاركها فقط مع:</p>
        <ul>
          <li><strong>مزودو خدمات:</strong> جهات تقنية مساندة ملتزمة بالسرية</li>
          <li><strong>متطلبات قانونية:</strong> استجابةً لطلبات رسمية من جهات حكومية مختصة</li>
          <li><strong>حماية الحقوق:</strong> عند الضرورة للدفاع عن حقوق الشركة</li>
          <li><strong>إعادة هيكلة:</strong> في حال الاندماج أو الاستحواذ مع إبلاغ المستخدمين</li>
        </ul>
        <div className="note">تبذل الشركة جهوداً معقولة للتحقق من التزام مزودي الخدمات بمعايير حماية البيانات.</div>
      </>
    ),
  },
  {
    id: "ar-6", num: "٦", title: "الاحتفاظ بالبيانات",
    content: (
      <>
        <p>نحتفظ بالبيانات للمدة اللازمة لتحقيق الأغراض المذكورة، مع مراعاة:</p>
        <ul>
          <li>متطلبات الأنظمة والتشريعات السعودية السارية</li>
          <li>طبيعة الخدمة المقدمة وشروط اتفاقية المستخدم</li>
          <li>الحاجة المشروعة للاحتفاظ بسجلات تشغيلية أو مالية</li>
        </ul>
        <div className="note">قد تتفاوت مدد الاحتفاظ بحسب نوع البيانات والإطار القانوني المنطبق.</div>
      </>
    ),
  },
  {
    id: "ar-7", num: "٧", title: "حقوقك",
    content: (
      <>
        <p>وفق نظام PDPL السعودي، قد تتوفر لك الحقوق التالية:</p>
        <ul>
          <li><strong>الوصول:</strong> طلب نسخة من بياناتك الشخصية</li>
          <li><strong>التصحيح:</strong> تصحيح بيانات غير دقيقة أو ناقصة</li>
          <li><strong>الحذف:</strong> طلب مسح البيانات في الحالات المنصوص عليها</li>
          <li><strong>الاعتراض:</strong> على معالجة بياناتك لأغراض التسويق المباشر</li>
          <li><strong>سحب الموافقة:</strong> في أي وقت دون أثر رجعي على المعالجة السابقة</li>
        </ul>
        <div className="note">📩 للممارسة حقوقك: <strong>privacy@sondos-ai.com</strong> — سنسعى للرد خلال مدة معقولة.</div>
      </>
    ),
  },
  {
    id: "ar-8", num: "٨", title: "الأمن",
    content: (
      <>
        <p>تبذل الشركة جهوداً معقولة لحماية البيانات من الوصول غير المصرح به أو الفقدان، من خلال تدابير تقنية وتنظيمية مناسبة.</p>
        <p>لا يمكن ضمان أمن المعلومات بصورة مطلقة عبر الإنترنت. في حال الاشتباه بأي حادثة أمنية، يُرجى إبلاغنا فوراً.</p>
      </>
    ),
  },
  {
    id: "ar-9", num: "٩", title: "ملفات تعريف الارتباط",
    content: (
      <p>يستخدم الموقع ملفات تعريف الارتباط لأغراض تشغيلية وتحليلية وتسويقية. يمكنك ضبط إعداداتها من متصفحك في أي وقت، مع العلم أن تعطيل بعضها قد يؤثر على تجربة الاستخدام.</p>
    ),
  },
  {
    id: "ar-10", num: "١٠", title: "الروابط الخارجية",
    content: (
      <p>قد يحتوي الموقع على روابط لمواقع خارجية لا تخضع لهذه السياسة. لا تتحمل الشركة أي مسؤولية عن ممارسات الخصوصية الخاصة بتلك المواقع.</p>
    ),
  },
  {
    id: "ar-11", num: "١١", title: "تعديل السياسة",
    content: (
      <p>تحتفظ الشركة بحق تعديل هذه السياسة في أي وقت، وستسعى إلى الإشارة إلى التغييرات الجوهرية على الموقع. يُعدّ الاطلاع الدوري مسؤولية المستخدم.</p>
    ),
  },
  {
    id: "ar-12", num: "١٢", title: "التواصل معنا",
    content: (
      <p>لأي استفسار يتعلق بهذه السياسة أو ببياناتك الشخصية:</p>
    ),
  },
];

const EN_SECTIONS = [
  {
    id: "en-1", num: "1", title: "About Us",
    content: (
      <>
        <p>Sondos AI ("the Company," "we," "us") is a technology company headquartered in the Kingdom of Saudi Arabia, specialising in AI-powered voice automation solutions.</p>
        <p>This Policy applies to <strong>sondos-ai.com</strong> and related services. The Company complies with Saudi Arabia's Personal Data Protection Law (PDPL) to the extent applicable.</p>
      </>
    ),
  },
  {
    id: "en-2", num: "2", title: "Data We Collect",
    content: (
      <>
        <p>We collect only what we need:</p>
        <ul>
          <li><strong>Identification Data:</strong> Name, email, phone number, job title</li>
          <li><strong>Usage Data:</strong> IP addresses, device and browser type, usage patterns</li>
          <li><strong>Conversation Data:</strong> Call recordings or transcripts where applicable</li>
          <li><strong>Payment Data:</strong> Processed via certified providers — card details not stored</li>
          <li><strong>Communication Data:</strong> Messages and enquiries sent to us</li>
        </ul>
        <div className="note">Data collected may vary depending on the service and agreement in place.</div>
      </>
    ),
  },
  {
    id: "en-3", num: "3", title: "Use of Data",
    content: (
      <>
        <p>Personal data is used for legitimate purposes including:</p>
        <ul>
          <li>Operating the platform and delivering agreed services</li>
          <li>Managing accounts and contractual relationships</li>
          <li>Improving service quality and AI model performance</li>
          <li>Responding to technical support requests</li>
          <li>Sending necessary operational notifications</li>
          <li>Fulfilling applicable legal and regulatory obligations</li>
          <li>Marketing communications where prior consent has been obtained</li>
        </ul>
        <div className="note">Data is not used for fully automated decisions with direct legal effect without human review.</div>
      </>
    ),
  },
  {
    id: "en-4", num: "4", title: "Call Data",
    content: (
      <>
        <p>Given the nature of our voice services, call data is handled under the following framework:</p>
        <div className="calls-box" style={{direction:"ltr",textAlign:"left"}}>
          <div className="calls-badge">🔒 Call Data Protocol</div>
          <ul>
            <li>Calls are recorded based on settings enabled in the client account or per the agreement</li>
            <li>Call data is used primarily to deliver and improve the service</li>
            <li>Clients may manage recording settings within available permissions</li>
            <li>Call data is not shared externally except as set out in this Policy</li>
          </ul>
          <div className="calls-note" style={{direction:"ltr",textAlign:"left"}}>🔐 <strong>Privacy Commitment:</strong> Recording and retention settings are governed by each client's service agreement and may vary accordingly.</div>
        </div>
      </>
    ),
  },
  {
    id: "en-5", num: "5", title: "Data Sharing",
    content: (
      <>
        <p><strong>We do not sell your data.</strong> We may share it only with:</p>
        <ul>
          <li><strong>Service Providers:</strong> Supporting technology partners bound by confidentiality</li>
          <li><strong>Legal Requirements:</strong> In response to formal requests from competent authorities</li>
          <li><strong>Rights Protection:</strong> To defend the Company's legitimate interests</li>
          <li><strong>Restructuring:</strong> In merger/acquisition events, with reasonable notice to users</li>
        </ul>
        <div className="note">The Company makes reasonable efforts to ensure service providers maintain appropriate data protection standards.</div>
      </>
    ),
  },
  {
    id: "en-6", num: "6", title: "Data Retention",
    content: (
      <>
        <p>We retain data for as long as necessary, taking into account:</p>
        <ul>
          <li>Applicable Saudi laws and regulations</li>
          <li>The nature of the service and user agreement terms</li>
          <li>Legitimate operational or financial record-keeping needs</li>
        </ul>
        <div className="note">Retention periods may vary by data type and applicable legal framework.</div>
      </>
    ),
  },
  {
    id: "en-7", num: "7", title: "Your Rights",
    content: (
      <>
        <p>Subject to Saudi Arabia's PDPL, the following rights may be available to you:</p>
        <ul>
          <li><strong>Access:</strong> Request a copy of your personal data</li>
          <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
          <li><strong>Erasure:</strong> Request deletion in legally specified cases</li>
          <li><strong>Objection:</strong> Object to processing for direct marketing</li>
          <li><strong>Withdrawal of Consent:</strong> At any time, without retroactive effect</li>
        </ul>
        <div className="note">📩 To exercise your rights: <strong>privacy@sondos-ai.com</strong> — We will endeavour to respond within a reasonable timeframe.</div>
      </>
    ),
  },
  {
    id: "en-8", num: "8", title: "Security",
    content: (
      <p>The Company takes reasonable steps to protect personal data through appropriate technical and organisational measures. No method of transmission over the internet can be guaranteed entirely secure. If you suspect a security incident, please notify us promptly.</p>
    ),
  },
  {
    id: "en-9", num: "9", title: "Cookies",
    content: (
      <p>The website uses cookies for operational, analytical, and marketing purposes. You may adjust cookie settings through your browser; however, disabling certain cookies may affect your experience.</p>
    ),
  },
  {
    id: "en-10", num: "10", title: "Third-Party Links",
    content: (
      <p>The website may contain links to external sites not governed by this Policy. The Company bears no responsibility for their privacy practices and recommends reviewing their policies.</p>
    ),
  },
  {
    id: "en-11", num: "11", title: "Policy Changes",
    content: (
      <p>The Company reserves the right to modify this Policy at any time and will endeavour to highlight material changes on the website. It is the user's responsibility to review this page periodically.</p>
    ),
  },
  {
    id: "en-12", num: "12", title: "Contact",
    content: (
      <p>For any enquiry relating to this Policy or your personal data:</p>
    ),
  },
];

/* ─── SECTION COMPONENT with IntersectionObserver ─── */
function Section({ id, num, title, children }: { id: string; num: string; title: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) el.classList.add("vis"); },
      { threshold: 0.07 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="sec" id={id} ref={ref}>
      <div className="sec-head">
        <div className="sec-num">{num}</div>
        <h2 className="sec-title">{title}</h2>
      </div>
      <div className="sec-body">{children}</div>
    </div>
  );
}

/* ─── MAIN COMPONENT ─── */
export default function SondosPrivacyPolicy() {
  // inject styles once
  useEffect(() => {
    if (document.getElementById("sondos-pp-styles")) return;
    const style = document.createElement("style");
    style.id = "sondos-pp-styles";
    style.textContent = GLOBAL_CSS;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  return (
    <div className="sondos-pp" dir="rtl">
      {/* blobs */}
      <div className="blob blob1" />
      <div className="blob blob2" />
      <div className="blob blob3" />



      {/* ── HEADER ── */}
      <header id="ar-top">

        <h1 className="page-title anim-2">
          سياسة <span className="hi">الخصوصية</span><br />
          <span style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:400,fontSize:".55em",letterSpacing:"3px",color:"var(--muted)"}}>
            Privacy Policy
          </span>
        </h1>
        <p className="page-sub anim-3">سندس للذكاء الاصطناعي · المملكة العربية السعودية</p>
        <div className="date-pill anim-4">
          <span className="date-dot" />
          آخر تحديث / Last Updated: أبريل 2026 — April 2026
        </div>
      </header>

      {/* ── WRAP ── */}
      <div className="wrap">

        {/* ── ARABIC ── */}
        <div className="intro-box anim-5">
          <h2>بياناتك ليست مجرد معلومات…<br /><em>بل تمثل عملك، عملاءك، وسمعتك.</em></h2>
          <p>في <strong style={{color:"white"}}>Sondos AI</strong>، نتعامل مع الخصوصية كأساس للثقة التي نبنيها مع عملائنا. نصمم أنظمتنا بحيث:</p>
          <ul>
            <li>تحمي بياناتك وتحافظ على سريتها</li>
            <li>تصون خصوصية عملائك وعملياتك</li>
            <li>تضمن استخداماً مسؤولاً وأخلاقياً للذكاء الاصطناعي</li>
          </ul>
        </div>

        <div className="disclaimer anim-6">
          <strong>ملاحظة:</strong> تُطبَّق هذه السياسة على موقع sondos-ai.com وخدماته. تحتفظ الشركة بحق تعديلها في أي وقت. استمرار استخدامك للخدمة يُعدّ قبولاً لأحدث نسخة منشورة.
        </div>

        <nav className="toc anim-7">
          <div className="toc-title">محتويات السياسة</div>
          <ul className="toc-list">
            {AR_SECTIONS.map(s => (
              <li key={s.id}><a href={`#${s.id}`}>{s.num}. {s.title}</a></li>
            ))}
          </ul>
        </nav>

        {AR_SECTIONS.map((s, i) => (
          <div key={s.id}>
            <Section id={s.id} num={s.num} title={s.title}>{s.content}</Section>
            {i < AR_SECTIONS.length - 1 && <hr className="rule" />}
          </div>
        ))}

        <div className="contact-card">
          <h3>سندس للذكاء الاصطناعي — الخصوصية وحماية البيانات</h3>
          <p>
            📩 البريد الإلكتروني: <a href="mailto:privacy@sondos-ai.com">privacy@sondos-ai.com</a><br />
            🌐 الموقع: <a href="https://sondos-ai.com">sondos-ai.com</a><br />
            📍 المقر: المملكة العربية السعودية
          </p>
        </div>

        <div className="closing">
          <div className="orn">✦ ✦ ✦</div>
          <p>نحن لا نحمي البيانات فقط…<br /><em>نحمي الثقة التي بنيت عليها أعمالك.</em></p>
        </div>


      </div>{/* end wrap */}


    </div>
  );
}
