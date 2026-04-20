import { useEffect } from "react";

export default function SondosLanding() {
  useEffect(() => {
    const TOTAL_DIGITS = 9;
    const phoneInput = document.getElementById("fPhone") as HTMLInputElement;
    const emailInput = document.getElementById("fEmail") as HTMLInputElement;
    const emailErr = document.getElementById("emailErr") as HTMLElement;
    const phErr = document.getElementById("phErr") as HTMLElement;
    const digitsHint = document.getElementById("digitsHint") as HTMLElement;
    const formErr = document.getElementById("formErr") as HTMLElement;

    const handlePhone = () => {
      phoneInput.value = phoneInput.value.replace(/\D/g, "").slice(0, TOTAL_DIGITS);
      const remaining = TOTAL_DIGITS - phoneInput.value.length;
      digitsHint.textContent = remaining + " أرقام متبقية";
      if (remaining === 0) {
        digitsHint.classList.add("ok");
        digitsHint.textContent = "✓ الرقم مكتمل";
        phoneInput.classList.remove("err");
        phErr.classList.add("hidden");
      } else {
        digitsHint.classList.remove("ok");
      }
    };
    const handleEmailBlur = () => {
      const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
      if (emailInput.value && !valid) {
        emailErr.classList.remove("hidden");
        emailInput.classList.add("err");
      } else {
        emailErr.classList.add("hidden");
        emailInput.classList.remove("err");
      }
    };
    const handleEmailInput = () => {
      emailErr.classList.add("hidden");
      emailInput.classList.remove("err");
    };
    const handlePhoneBlur = () => {
      if (phoneInput.value && phoneInput.value.length < TOTAL_DIGITS) {
        phoneInput.classList.add("err");
        phErr.classList.remove("hidden");
      } else {
        phoneInput.classList.remove("err");
        phErr.classList.add("hidden");
      }
    };

    phoneInput?.addEventListener("input", handlePhone);
    emailInput?.addEventListener("blur", handleEmailBlur);
    emailInput?.addEventListener("input", handleEmailInput);
    phoneInput?.addEventListener("blur", handlePhoneBlur);

    let countedBento = false;
    const animateCounter = (el: HTMLElement) => {
      const target = parseFloat(el.dataset.count!);
      const prefix = el.dataset.prefix || "";
      const suffix = el.dataset.suffix || "";
      const isFloat = target % 1 !== 0;
      const duration = 1200;
      let startTime: number | null = null;
      const step = (ts: number) => {
        if (!startTime) startTime = ts;
        const p = Math.min((ts - startTime) / duration, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        const cur = target * ease;
        el.textContent = prefix + (isFloat ? cur.toFixed(1) : Math.round(cur)) + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("vis");
            if (!countedBento && (entry.target as HTMLElement).closest(".stats-grid")) {
              countedBento = true;
              (entry.target as HTMLElement)
                .closest(".stats-grid")!
                .querySelectorAll<HTMLElement>("b[data-count]")
                .forEach((c, i) => setTimeout(() => animateCounter(c), i * 150));
            }
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => obs.observe(el));

    const APPS_SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbxmEkbxb6szal4KVAnrEnRq7-jUq9BkdrPLsSvN3tJnBzeTNRyn-B4V4Rpjx5_Yxjn5gA/exec";

    const sub = (e: Event) => {
      e.preventDefault();
      const name = (document.getElementById("fName") as HTMLInputElement).value.trim();
      const company = (document.getElementById("fComp") as HTMLInputElement).value.trim();
      const email = emailInput.value.trim();
      let phone = phoneInput.value;
      const industry = (document.getElementById("fInd") as HTMLSelectElement).value;
      const questions = (document.getElementById("fQ") as HTMLTextAreaElement).value;

      if (!name) { (document.getElementById("fName") as HTMLInputElement).focus(); return; }
      if (!company) { (document.getElementById("fComp") as HTMLInputElement).focus(); return; }
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailErr.classList.remove("hidden"); emailInput.classList.add("err"); emailInput.focus(); return;
      }
      if (phone.length !== TOTAL_DIGITS) {
        phoneInput.classList.add("err"); phErr.classList.remove("hidden"); phoneInput.focus(); return;
      }
      if (!industry) { (document.getElementById("fInd") as HTMLSelectElement).focus(); return; }

      if (phone.startsWith("966")) phone = phone.slice(3);
      const formattedPhone = "+966" + phone;

      const btn = document.getElementById("ctaBtn") as HTMLButtonElement;
      const btnText = document.getElementById("ctaText") as HTMLElement;
      btn.disabled = true;
      btnText.innerHTML = '<span class="sp"></span> جارٍ الإرسال...';
      formErr.classList.add("hidden");

      const params = new URLSearchParams({ name, email, phone: formattedPhone, company, industry, questions });
      fetch(APPS_SCRIPT_URL + "?" + params.toString(), { method: "GET" })
        .then(() => {
          (document.getElementById("fw") as HTMLElement).classList.add("hide");
          const fok = document.getElementById("fok") as HTMLElement;
          fok.classList.remove("hidden");
          fok.style.display = "block";
        })
        .catch(() => {
          formErr.classList.remove("hidden");
          btn.disabled = false;
          btnText.textContent = "تواصل مع فريقنا الآن ←";
        });
    };

    document.getElementById("bkForm")?.addEventListener("submit", sub);

    (window as any).toggleFaq = (el: HTMLElement) => {
      const item = el.parentElement!;
      const isOpen = item.classList.contains("open");
      document.querySelectorAll(".fi.open").forEach((fi) => {
        fi.classList.remove("open");
        fi.querySelector(".fq")?.setAttribute("aria-expanded", "false");
      });
      if (!isOpen) { item.classList.add("open"); el.setAttribute("aria-expanded", "true"); }
    };

    (window as any).resetForm = () => {
      (document.getElementById("fw") as HTMLElement).classList.remove("hide");
      const fok = document.getElementById("fok") as HTMLElement;
      fok.classList.add("hidden");
      fok.style.display = "";
      (document.getElementById("bkForm") as HTMLFormElement).reset();
      const btn = document.getElementById("ctaBtn") as HTMLButtonElement;
      btn.disabled = false;
      (document.getElementById("ctaText") as HTMLElement).textContent = "تواصل مع فريقنا الآن ←";
      emailInput.classList.remove("err"); emailErr.classList.add("hidden");
      phoneInput.classList.remove("err"); phErr.classList.add("hidden");
      digitsHint.classList.remove("ok");
      digitsHint.textContent = TOTAL_DIGITS + " أرقام متبقية";
      formErr.classList.add("hidden");
    };

    return () => {
      phoneInput?.removeEventListener("input", handlePhone);
      emailInput?.removeEventListener("blur", handleEmailBlur);
      emailInput?.removeEventListener("input", handleEmailInput);
      phoneInput?.removeEventListener("blur", handlePhoneBlur);
      obs.disconnect();
    };
  }, []);

  const features = [
    { icon: "🎙️", title: "صوت ذكي طبيعي", desc: "محرك صوتي متقدم يفهم اللهجات السعودية ويتحدث بطلاقة تفوق التوقعات — المتصل يظن أنه يتحدث مع شخص حقيقي." },
    { icon: "🧠", title: "فهم السياق والمقصد", desc: "سندس لا يرد بإجابات جاهزة. يفهم سياق المحادثة، يلتقط النية الحقيقية، ويجاوب بمرونة كاملة." },
    { icon: "📋", title: "بناء سيناريوهات بدون كود", desc: "واجهة سحب وإفلات لبناء مسارات محادثة مخصصة لنشاطك — بدون مطورين، بدون تعقيد." },
    { icon: "🔄", title: "تكامل مع أنظمتك", desc: "يرتبط بسجلاتك CRM، أنظمة الحجز، وقواعد البيانات — البيانات تتحرك تلقائياً بدون تدخل بشري." },
    { icon: "📊", title: "لوحة تحليلات لحظية", desc: "تتبع كل مكالمة: مدتها، النتيجة، تقييم العميل، والمشاعر — قرارات مبنية على بيانات حقيقية." },
    { icon: "⚡", title: "استجابة فورية 24/7", desc: "يرد في أقل من ثانية واحدة. في العطلات، الليل، وأوقات الذروة — لا تفوّت أي فرصة." },
  ];

  const steps = [
    { num: "01", icon: "⚙️", title: "صمّم سيناريو محادثتك", desc: "حدد أسئلة التأهيل، مسارات الرد، وشروط التحويل — كل شيء من واجهة بسيطة.", tag: "بدون كود" },
    { num: "02", icon: "🔗", title: "اربط أنظمتك", desc: "وصّل سندس بهاتفك، CRM، ونظام الحجز — التكامل يتم خلال دقائق.", tag: "دقائق معدودة" },
    { num: "03", icon: "🚀", title: "أطلق وراقب", desc: "سندس يبدأ بالرد فوراً. تابع الأداء من لوحة التحكم وعدّل السيناريوهات بالوقت الفعلي.", tag: "نتائج فورية" },
  ];

  const industries = [
    { icon: "🏢", name: "العقاري", note: "تأهيل المشترين، حجز معارض، متابعة العملاء المحتملين" },
    { icon: "🏥", name: "الرعاية الصحية", note: "حجز المواعيد، تذكير المرضى، الاستقبال الآلي" },
    { icon: "🎓", name: "التعليم والتدريب", note: "تسجيل الطلاب، الرد على الاستفسارات، جدولة الاختبارات" },
    { icon: "🛒", name: "التجارة الإلكترونية", note: "متابعة الطلبات، استرجاع العملاء، دعم ما بعد البيع" },
    { icon: "🏦", name: "الخدمات المالية", note: "تأهيل طلبات التمويل، التحقق من البيانات، التوجيه" },
    { icon: "🚗", name: "قطاع السيارات", note: "حجز اختبارات القيادة، عروض الصيانة، متابعة العملاء" },
    { icon: "🏨", name: "الضيافة والسياحة", note: "حجز الغرف، الرد على الاستفسارات، خدمات الكونسيرج" },
    { icon: "⚖️", name: "الخدمات المهنية", note: "حجز الاستشارات، التأهيل المبدئي، جمع المعلومات" },
  ];

  const differentiators = [
    { title: "عربي بالأولوية", desc: "مدرّب على اللهجات الخليجية والسعودية — ليس ترجمة أو محول نص لصوت. يفهم الثقافة ويتعامل بلغة السوق.", icon: "🇸🇦" },
    { title: "سعودي بالكامل", desc: "مُستضاف على بنية تحتية محلية، بيانات مشفرة، ومعتمد وفق معايير أمنية سعودية ودولية.", icon: "🛡️" },
    { title: "مرن بلا حدود", desc: "غيّر السيناريوهات، أضف مشاريع، عدّل الأصوات — كل شيء من لوحة تحكم واحدة بدون طلب دعم.", icon: "🔧" },
    { title: "نتائج قابلة للقياس", desc: "كل مكالمة مُسجلة ومُحللة. تعرف بالضبط كم عقد أُغلق، كم عميل أُهمل، وأين تتحسن.", icon: "📈" },
  ];

  const faqs = [
    { q: "ما هو سندس AI بالضبط؟", a: "سندس AI هو منصة سعودية توفر وكلاء صوتيين بالذكاء الاصطناعي يردون على مكالمات عملائك تلقائياً. يفهمون السياق، يؤهلون العملاء، يحجزون المواعيد، ويتكاملون مع أنظمتك — كل ذلك بدون تدخل بشري." },
    { q: "كيف يختلف سندس عن الرد الآلي العادي (IVR)؟", a: "الرد الآلي العادي يقدم قوائم أرقام محدودة. سندس يفهم اللغة الطبيعية، يتبع محادثة حقيقية، يتنقل بين المواضيع بمرونة، ويتخذ قرارات ذكية حسب السياق — مثل موظف حقيقي لكن أسرع وأنضب." },
    { q: "هل يحتاج فريقنا لتعلم شيء جديد؟", a: "لا. سندس يُدار من واجهة ويب بسيطة. بناء السيناريوهات يتم بالسحب والإفلات، والتكامل مع أنظمتك يتم مرة واحدة فقط. لا تحتاج خبرة تقنية." },
    { q: "كم يستغرق إطلاق سندس؟", a: "من 24 إلى 48 ساعة للتفعيل الكامل: ربط الخط الهاتفي، إعداد السيناريو، وتكامل الأنظمة. فريقنا يقوم بكل شيء." },
    { q: "هل يمكن لسندس التعامل باللغتين العربية والإنجليزية؟", a: "نعم. سندس يدعم العربية بجميع لهجاتها والإنجليزية، ويمكنه التبديل بينهما خلال نفس المكالمة حسب لغة المتصل." },
    { q: "ماذا يحدث عندما لا يعرف سندس الإجابة؟", a: "سندس يُحوّل المكالمة فوراً لموظف مختص مع ملخص كامل للمحادثة والبيانات المجمّعة — لا معلومة تضيع." },
    { q: "هل البيانات محمية؟", a: "سندس مُستضاف على سحابة محلية معتمدة. جميع البيانات مشفرة بالكامل (في النقل والتخزين) ولا تُشارك مع أي طرف ثالث." },
  ];

  return (
    <>
      <style>{`
        *,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
        :root{
          --brand:#5a189a;--bl:#9d4edd;--bm:#7b2cbf;--bg:rgba(90,24,154,.1);--bd:#4a0e78;--bk:#3c096c;
          --s:#FFFFFF;--s2:rgba(255,255,255,.85);--s3:#f6f3fb;--g:rgba(90,24,154,.04);--gb:rgba(90,24,154,.1);
          --gbs:rgba(90,24,154,.2);--t:#1a0a2e;--t2:#6b5c85;--t3:#9b8fb5;--a:#9d4edd;--as:#5a189a;
          --ag:rgba(90,24,154,.06);--agh:rgba(90,24,154,.12);--gr:#00d68f;--gg:rgba(0,214,143,.08);
          --ggh:rgba(0,214,143,.18);--go:#f59e0b;--input-border:#e5def5;
          --sf:'Amiri',serif;--df:'Noto Kufi Arabic',sans-serif;--mn:'JetBrains Mono',monospace
        }
        html{scroll-behavior:smooth;font-size:16px}
        body{background:var(--s3);color:var(--t);font-family:var(--df);line-height:1.9;overflow-x:hidden;-webkit-font-smoothing:antialiased}
        ::selection{background:var(--brand);color:#fff}
        a{text-decoration:none;color:inherit}
        .container{max-width:1100px;margin:0 auto;padding:0 24px}
        *:focus-visible{outline:2px solid var(--bl);outline-offset:2px;border-radius:4px}
        .orb{position:fixed;border-radius:50%;pointer-events:none;z-index:0}
        .orb-1{width:700px;height:700px;background:rgba(90,24,154,.04);top:-250px;right:-200px;filter:blur(100px);animation:oF 25s ease-in-out infinite}
        .orb-2{width:500px;height:500px;background:rgba(90,24,154,.03);bottom:-150px;left:-150px;filter:blur(100px);animation:oF 30s ease-in-out infinite reverse}
        .orb-3{width:350px;height:350px;background:rgba(157,78,221,.025);top:45%;left:25%;filter:blur(80px);animation:oF 20s ease-in-out infinite 5s}
        @keyframes oF{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(25px,-35px) scale(1.03)}66%{transform:translate(-20px,30px) scale(.97)}}
        @keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
        @keyframes spin{to{transform:rotate(360deg)}}
        .reveal{opacity:0;transform:translateY(30px);transition:opacity .7s cubic-bezier(.16,1,.3,1),transform .7s cubic-bezier(.16,1,.3,1)}.reveal.vis{opacity:1;transform:translateY(0)}
        .d1{transition-delay:.1s}.d2{transition-delay:.2s}.d3{transition-delay:.3s}.d4{transition-delay:.4s}.d5{transition-delay:.5s}.d6{transition-delay:.6s}.d7{transition-delay:.7s}.d8{transition-delay:.8s}
        .card{background:var(--s2);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);border:1px solid var(--gb);border-radius:24px;transition:all .3s cubic-bezier(.16,1,.3,1);box-shadow:0 4px 20px rgba(0,0,0,.04)}
        .card:hover{border-color:var(--gbs);box-shadow:0 12px 40px rgba(90,24,154,.08);transform:translateY(-4px)}
        .card-s{background:var(--s2);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);border:1px solid var(--gb);border-radius:24px;box-shadow:0 4px 20px rgba(0,0,0,.04)}
        .nav{position:sticky;top:0;z-index:100;background:rgba(255,255,255,.8);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);border-bottom:1px solid var(--gb);padding:14px 0}
        .nav-i{display:flex;align-items:center;justify-content:space-between}
        .logo-img{height:42px;width:auto;object-fit:contain;display:block}
        .nav-b{padding:10px 24px;background:linear-gradient(135deg,#5a189a,#9d4edd);color:#fff;font-weight:700;font-size:.78rem;border-radius:100px;border:none;cursor:pointer;transition:all .3s;font-family:var(--df);box-shadow:0 2px 12px var(--bg)}
        .nav-b:hover{transform:translateY(-2px);box-shadow:0 12px 40px rgba(90,24,154,.3)}
        .hero{padding:90px 0 70px;text-align:center;position:relative;z-index:1;overflow:hidden}
        .hero::before{content:'';position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse 80% 60% at 50% 0%,rgba(90,24,154,.12) 0%,transparent 70%)}
        .hero::after{content:'';position:absolute;inset:0;z-index:0;pointer-events:none;background-image:linear-gradient(rgba(90,24,154,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(90,24,154,.04) 1px,transparent 1px);background-size:60px 60px;-webkit-mask-image:radial-gradient(ellipse at center,black 20%,transparent 65%);mask-image:radial-gradient(ellipse at center,black 20%,transparent 65%)}
        .ey{display:inline-flex;align-items:center;gap:8px;padding:7px 20px;border-radius:100px;background:rgba(90,24,154,.08);border:1px solid rgba(90,24,154,.2);font-size:.72rem;font-weight:600;color:var(--bl);margin-bottom:32px;animation:fadeUp .7s ease both .15s;backdrop-filter:blur(8px);position:relative;z-index:1}
        .ey .dot{width:7px;height:7px;border-radius:50%;background:var(--gr);animation:blink 1.5s infinite}
        .h1{font-family:var(--sf);font-size:clamp(2.4rem,5.5vw,3.8rem);font-weight:700;line-height:1.15;margin-bottom:20px;animation:fadeUp .7s ease both .25s;color:var(--bk);position:relative;z-index:1}
        .h1 .hl{color:var(--bl)}
        .sub{font-size:1.08rem;color:var(--t2);max-width:640px;margin:0 auto 48px;line-height:2;font-weight:500;animation:fadeUp .7s ease both .35s;position:relative;z-index:1}
        .sub strong{color:var(--t)}
        .hero-pills{display:flex;flex-wrap:wrap;justify-content:center;gap:10px;animation:fadeUp .7s ease both .45s;position:relative;z-index:1}
        .pill{display:inline-flex;align-items:center;gap:6px;padding:8px 18px;border-radius:100px;background:var(--s2);backdrop-filter:blur(8px);border:1px solid var(--gb);font-size:.75rem;font-weight:600;color:var(--t2);transition:all .3s}
        .pill:hover{border-color:var(--gbs);color:var(--t)}
        .pill span{font-size:1rem}
        .fs{padding:8px 0 72px;position:relative;z-index:1}
        .fc{max-width:540px;margin:0 auto;background:rgba(255,255,255,.8);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);border:1px solid rgba(90,24,154,.15);border-radius:24px;padding:40px 36px;position:relative;overflow:hidden;box-shadow:0 40px 80px rgba(0,0,0,.08)}
        .fc::before{content:'';position:absolute;top:-1px;left:30px;right:30px;height:3px;background:linear-gradient(90deg,transparent,#5a189a,#9d4edd,transparent);border-radius:0 0 4px 4px}
        .fc h2{text-align:center;font-size:1.5rem;font-weight:700;color:var(--t);margin-bottom:2px}
        .fc .desc{text-align:center;font-size:.88rem;color:var(--t2);margin-bottom:28px}
        .ff{margin-bottom:18px}
        .ff label{display:block;font-size:.84rem;font-weight:600;color:var(--t);margin-bottom:6px}
        .ff input,.ff select,.ff textarea{width:100%;padding:12px 16px;background:#fff;border:1px solid var(--input-border);border-radius:14px;color:var(--t);font-size:.9rem;font-family:var(--df);outline:none;transition:all .25s;line-height:1.6}
        .ff input::placeholder,.ff textarea::placeholder{color:var(--t3)}
        .ff input:focus,.ff select:focus,.ff textarea:focus{border-color:var(--brand);box-shadow:0 0 0 3px rgba(90,24,154,.06)}
        .ff input.err{border-color:#ef4444;box-shadow:0 0 0 3px rgba(239,68,68,.06)}
        .ff select{cursor:pointer;-webkit-appearance:none;appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%239b8fb5' d='M6 8L1 3h10z'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:left 14px center;padding-left:36px}
        .ff textarea{resize:vertical;min-height:100px}
        .ff .em{font-size:.72rem;color:#ef4444;margin-top:4px;display:none}
        .phone-wrap{display:flex;gap:0}
        .phone-prefix{display:flex;align-items:center;padding:12px 14px;background:#f3f0f8;border:1px solid var(--input-border);border-left:none;font-size:.88rem;font-weight:600;color:var(--t2);font-family:var(--mn);white-space:nowrap;user-select:none;min-width:64px;justify-content:center}
        [dir="rtl"] .phone-prefix{border-right:none;border-left:1px solid var(--input-border);border-radius:0 14px 14px 0}
        [dir="rtl"] .phone-wrap input{border-radius:14px 0 0 14px}
        .digits-hint{font-size:.68rem;color:var(--t3);margin-top:4px;text-align:right;font-family:var(--mn);direction:ltr}
        .digits-hint.ok{color:var(--gr)}
        .cta{width:100%;padding:14px;margin-top:6px;background:linear-gradient(to left,#5a189a,#9d4edd);color:#fff;font-size:.95rem;font-weight:600;border:none;border-radius:14px;cursor:pointer;font-family:var(--df);transition:all .3s cubic-bezier(.16,1,.3,1);position:relative;overflow:hidden}
        .cta::before{content:'';position:absolute;inset:0;background:linear-gradient(90deg,transparent 30%,rgba(255,255,255,.1) 50%,transparent 70%);background-size:200% 100%;animation:shimmer 3.5s infinite}
        .cta:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 12px 40px rgba(90,24,154,.3)}
        .cta:disabled{opacity:.7;cursor:not-allowed}
        .cta .sp{width:16px;height:16px;border:2px solid rgba(255,255,255,.3);border-top-color:#fff;border-radius:50%;animation:spin .6s linear infinite;display:inline-block;vertical-align:middle;margin-inline-end:6px}
        .fc-ok{display:none;text-align:center;padding:40px 0}
        .fc-ok .ck{font-size:3.5rem;margin-bottom:16px}
        .fc-ok strong{font-size:1.15rem;color:var(--brand);display:block;margin-bottom:8px;font-weight:600}
        .fc-ok small{font-size:.88rem;color:var(--t2);line-height:1.8}
        .fc-ok .back{margin-top:22px;padding:11px 26px;background:var(--g);border:1px solid var(--gb);border-radius:12px;color:var(--brand);font-weight:700;font-size:.8rem;cursor:pointer;font-family:var(--df);transition:all .2s}
        .fc-ok .back:hover{background:var(--s3)}
        .fc-w.hide{display:none}
        .form-error{text-align:center;color:#ef4444;font-size:.82rem;margin-bottom:4px}
        .sect{padding:88px 0;position:relative;z-index:1}
        .sect-hd{text-align:center;margin-bottom:52px}
        .tag{display:inline-flex;padding:6px 16px;border-radius:100px;font-size:.7rem;font-weight:700;margin-bottom:18px;letter-spacing:.02em}
        .tag-a{background:var(--ag);color:var(--a);border:1px solid var(--agh)}
        .tag-p{background:var(--g);color:var(--brand);border:1px solid var(--gbs)}
        .tag-g{background:var(--gg);color:var(--gr);border:1px solid var(--ggh)}
        .sect-t{font-family:var(--sf);font-size:clamp(1.7rem,3.5vw,2.4rem);font-weight:700;line-height:1.3;margin-bottom:12px;color:var(--bk)}
        .sect-d{font-size:.95rem;color:var(--t2);max-width:600px;margin:0 auto;line-height:1.9}
        .stats-grid{display:grid;grid-template-columns:repeat(6,1fr);gap:14px}
        .sc{padding:28px 24px;position:relative;overflow:hidden}
        .sc::before{content:'';position:absolute;top:0;right:0;width:120px;height:120px;background:radial-gradient(circle,rgba(90,24,154,.04),transparent 70%);pointer-events:none}
        .sc b{font-family:var(--mn);font-size:2rem;font-weight:700;color:var(--bl);direction:ltr;text-align:right;display:block;margin-bottom:4px}
        .sc h4{font-size:.92rem;font-weight:700;color:var(--t);margin-bottom:6px}
        .sc p{font-size:.8rem;color:var(--t2);line-height:1.8}
        .feat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
        .feat{padding:32px 26px;position:relative;overflow:hidden}
        .feat::before{content:'';position:absolute;top:0;right:0;width:100px;height:100px;background:radial-gradient(circle,rgba(90,24,154,.04),transparent 70%);pointer-events:none}
        .feat .fi-icon{font-size:2rem;margin-bottom:16px;display:block}
        .feat h4{font-size:.95rem;font-weight:700;color:var(--t);margin-bottom:8px}
        .feat p{font-size:.8rem;color:var(--t2);line-height:1.9}
        .steps-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
        .step{padding:34px 24px;text-align:center}
        .step .n{width:36px;height:36px;border-radius:50%;margin:0 auto 14px;background:linear-gradient(135deg,#5a189a,#9d4edd);display:flex;align-items:center;justify-content:center;font-family:var(--mn);font-size:.7rem;font-weight:700;color:#fff;box-shadow:0 2px 10px var(--bg)}
        .step .ic{font-size:1.8rem;margin-bottom:12px}
        .step h4{font-weight:700;font-size:.94rem;color:var(--t);margin-bottom:8px}
        .step p{font-size:.8rem;color:var(--t2);line-height:1.8}
        .step .tg{display:inline-block;margin-top:12px;padding:4px 12px;background:var(--gg);border:1px solid var(--ggh);border-radius:100px;font-size:.64rem;font-weight:700;color:var(--gr)}
        .ind-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
        .ind{padding:24px 20px;text-align:center}
        .ind .ind-icon{font-size:2rem;margin-bottom:10px;display:block}
        .ind h4{font-size:.88rem;font-weight:700;color:var(--t);margin-bottom:6px}
        .ind p{font-size:.7rem;color:var(--t2);line-height:1.7}
        .diff-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
        .diff{padding:34px 28px;display:flex;gap:20px;align-items:flex-start}
        .diff .diff-icon{font-size:2.2rem;flex-shrink:0;margin-top:2px}
        .diff h4{font-size:.95rem;font-weight:700;color:var(--t);margin-bottom:6px}
        .diff p{font-size:.82rem;color:var(--t2);line-height:1.9}
        .faq{max-width:680px;margin:0 auto}
        .fi{border-bottom:none;margin-bottom:12px}
        .fq{font-size:.92rem;font-weight:700;cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:14px;padding:22px 24px;transition:all .2s;user-select:none;color:var(--t);border-radius:20px}
        .fq:hover{color:var(--brand)}
        .fq em{width:28px;height:28px;border-radius:50%;background:var(--s2);border:1px solid var(--gb);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.9rem;color:var(--bl);transition:all .3s;font-family:var(--mn);font-style:normal}
        .fi.open .fq em{background:linear-gradient(135deg,#5a189a,#9d4edd);color:#fff;border-color:transparent;transform:rotate(45deg)}
        .fa{max-height:0;overflow:hidden;transition:max-height .4s cubic-bezier(.16,1,.3,1),padding .3s;color:var(--t2);font-size:.86rem;line-height:1.9}
        .fi.open .fa{max-height:400px;padding:0 24px 22px}
        .final{background:linear-gradient(135deg,#5a189a,#9d4edd,#3c096c);width:100%;padding:140px 0;text-align:center;position:relative;overflow:hidden}
        .final-card-wrapper{position:relative;z-index:1;max-width:900px;margin:0 auto}
        .final-card .tag-p{background:rgba(255,255,255,.15);color:#fff;border-color:rgba(255,255,255,.3);margin-bottom:24px;backdrop-filter:blur(4px)}
        .final-card h2{font-family:var(--sf);font-size:clamp(2rem,5vw,3.5rem);font-weight:700;line-height:1.2;margin-bottom:24px;color:#fff;letter-spacing:-.02em}
        .final-card .desc{font-size:1.15rem;color:rgba(255,255,255,.9);max-width:650px;margin:0 auto 40px;line-height:1.8}
        .btn-w{display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:18px 48px;background:#ffffff;color:#5a189a;font-weight:800;font-size:1.1rem;border-radius:100px;border:none;cursor:pointer;transition:all .3s cubic-bezier(.16,1,.3,1);font-family:var(--df);box-shadow:0 10px 25px rgba(0,0,0,.2)}
        .btn-w:hover{transform:translateY(-3px);box-shadow:0 15px 35px rgba(0,0,0,.25);background:#f9f9f9}
        .final-card small{display:block;margin-top:24px;font-size:.9rem;color:rgba(255,255,255,.8);letter-spacing:1px}
        .footer{padding:32px 0;border-top:1px solid var(--gb);text-align:center;font-size:.72rem;color:var(--t3);position:relative;z-index:1;background:var(--s)}
        .btn{display:inline-flex;align-items:center;gap:8px;padding:15px 34px;background:linear-gradient(135deg,#5a189a,#9d4edd);color:#fff;font-weight:700;font-size:.9rem;border-radius:100px;border:none;cursor:pointer;transition:all .3s;font-family:var(--df);box-shadow:0 4px 18px var(--bg);position:relative;overflow:hidden}
        .btn::before{content:'';position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,.08),transparent);background-size:200% 100%;animation:shimmer 3.5s infinite}
        .btn:hover{transform:translateY(-2px);box-shadow:0 12px 40px rgba(90,24,154,.3)}
        .btn span{position:relative;z-index:1}
        .sect+.sect:not(.cs){border-top:1px solid var(--gb)}
        .text-center{text-align:center}
        .mt-10{margin-top:40px}
        @media(max-width:900px){.stats-grid{grid-template-columns:1fr 1fr}.sc{grid-column:span 1!important}.feat-grid{grid-template-columns:1fr 1fr}.ind-grid{grid-template-columns:1fr 1fr}.diff-grid{grid-template-columns:1fr}}
        @media(max-width:768px){
          .stats-grid{grid-template-columns:1fr}.feat-grid{grid-template-columns:1fr}.steps-grid{grid-template-columns:1fr}.ind-grid{grid-template-columns:1fr}.diff-grid{grid-template-columns:1fr}
          .hero{padding:44px 0 36px}.h1{font-size:clamp(1.7rem,6vw,2.4rem)}.fc{padding:30px 22px;margin:0 16px}.sect{padding:56px 0}.hero-pills{gap:8px}
          .logo-img{height:36px}.final-card h2{font-size:2rem}.pill{font-size:.7rem;padding:6px 14px}
        }
        @media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}}
      `}</style>

      <link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Noto+Kufi+Arabic:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />

      <div dir="rtl">
        <div className="orb orb-1" /><div className="orb orb-2" /><div className="orb orb-3" />

        <nav className="nav" role="navigation"><div className="container nav-i">
          <div>
            <img src="https://z-cdn-media.chatglm.cn/files/691dd92c-e49d-4224-99e2-96e9272ac6ca.png?auth_key=1875120293-659c933ec20d4141b916829f24451a63-0-30470faeaca6e9a7447478b5d83b4e4c" alt="Sondos AI" className="logo-img" />
          </div>
          <button className="nav-b" onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth", block: "center" })}>تواصل معنا</button>
        </div></nav>

        <main>
          <section className="hero"><div className="container">
            <div className="ey"><span className="dot" aria-hidden="true" /> الذكاء الاصطناعي الصوتي الأول بالعربية</div>
            <h1 className="h1">وكيل صوتي ذكي<br /><span className="hl">يتحدث باسم شركتك</span></h1>
            <p className="sub">
              <strong>سندس AI</strong> هو منصة سعودية تمنحك وكلاء صوتيين بالذكاء الاصطناعي يردون على مكالمات عملائك، يؤهلونهم، ويحجزون المواعيد — تلقائياً وعلى مدار الساعة.
            </p>
            <div className="hero-pills">
              <div className="pill"><span>🎙️</span> صوت طبيعي</div>
              <div className="pill"><span>🧠</span> فهم السياق</div>
              <div className="pill"><span>🔗</span> تكامل CRM</div>
              <div className="pill"><span>📊</span> تحليلات لحظية</div>
              <div className="pill"><span>🇸🇦</span> عربي بالأولوية</div>
            </div>
          </div></section>

          {/* FORM */}
          <section className="fs" id="booking"><div className="container"><div className="fc">
            <div className="fc-w" id="fw">
              <h2>تواصل مع فريقنا</h2>
              <p className="desc">أخبرنا عن نشاطك ونعرض لك كيف يساعدك سندس</p>
              <form id="bkForm" noValidate>
                <div className="ff"><label htmlFor="fName">الاسم الكامل</label><input type="text" id="fName" name="name" required placeholder="أدخل اسمك الكامل" autoComplete="name" /></div>
                <div className="ff"><label htmlFor="fComp">اسم الشركة</label><input type="text" id="fComp" name="company" required placeholder="اسم شركتك أو مؤسستك" autoComplete="organization" /></div>
                <div className="ff"><label htmlFor="fEmail">البريد الإلكتروني</label><input type="email" id="fEmail" name="email" required placeholder="email@example.com" autoComplete="email" /><div className="em" id="emailErr">يرجى إدخال بريد إلكتروني صحيح</div></div>
                <div className="ff">
                  <label htmlFor="fPhone">رقم الجوال</label>
                  <div className="phone-wrap"><span className="phone-prefix">+966</span><input type="tel" id="fPhone" name="phone" required placeholder="5XXXXXXXX" maxLength={9} inputMode="numeric" autoComplete="tel" /></div>
                  <div className="digits-hint" id="digitsHint">9 أرقام متبقية</div>
                  <div className="em" id="phErr">يرجى إدخال 9 أرقام بعد رمز الدولة</div>
                </div>
                <div className="ff">
                  <label htmlFor="fInd">القطاع</label>
                  <select id="fInd" name="industry" required>
                    <option value="">— اختر القطاع —</option>
                    <option value="القطاع الصحي">القطاع الصحي</option>
                    <option value="مراكز الاتصال">مراكز الاتصال</option>
                    <option value="العقارات">العقارات</option>
                    <option value="التكنولوجيا">التكنولوجيا</option>
                    <option value="الحكومة">الحكومة</option>
                    <option value="التأمين">التأمين</option>
                    <option value="التجارة الإلكترونية">التجارة الإلكترونية</option>
                    <option value="قطاع التعليم">قطاع التعليم</option>
                    <option value="القطاع السياحي">القطاع السياحي</option>
                    <option value="قطاع النقل واللوجستيك">قطاع النقل واللوجستيك</option>
                    <option value="قطاع آخر">قطاع آخر</option>
                  </select>
                </div>
                <div className="ff"><label htmlFor="fQ">أسئلة أو ملاحظات <span style={{ color: "var(--t3)", fontWeight: 400 }}>(اختياري)</span></label><textarea id="fQ" name="questions" placeholder="هل عندك سؤال معين أو تحدٍ تواجهه؟" rows={4} /></div>
                <div className="form-error" id="formErr" style={{ display: "none" }}>حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.</div>
                <button type="submit" className="cta" id="ctaBtn"><span id="ctaText">تواصل مع فريقنا الآن ←</span></button>
              </form>
            </div>
            <div className="fc-ok" id="fok">
              <div className="ck" aria-hidden="true">✅</div>
              <strong>تم الإرسال بنجاح!</strong>
              <small>فريقنا سيتواصل معك خلال 24 ساعة<br />لعرض حل مخصص لنشاطك</small>
              <button className="back" onClick={() => (window as any).resetForm()}>إرسال رسالة أخرى</button>
            </div>
          </div></div></section>

          {/* STATS */}
          <section className="sect"><div className="container">
            <div className="sect-hd reveal"><div className="tag tag-a">بالأرقام</div><h2 className="sect-t">منصة <span style={{ color: "var(--bl)" }}>مُثبتة بالنتائج</span></h2></div>
            <div className="stats-grid">
              <div className="sc card reveal d1" style={{ gridColumn: "span 2" }}><b data-count="0.8" data-suffix=" ثانية">0 ثانية</b><h4>زمن الاستجابة</h4><p>أسرع من أي فريق استقبال بشري.</p></div>
              <div className="sc card reveal d2" style={{ gridColumn: "span 2" }}><b data-count="99.2" data-suffix="%">0%</b><h4>دقة فهم اللغة</h4><p>العربية الفصحى واللهجات الخليجية.</p></div>
              <div className="sc card reveal d3" style={{ gridColumn: "span 2" }}><b data-count="3" data-prefix="">0</b><h4>أضعاف حجم الاجتماعات</h4><p>مقارنة بالاعتماد على الفريق فقط.</p></div>
              <div className="sc card reveal d4" style={{ gridColumn: "span 3" }}><b data-count="24" data-suffix="/7">0/7</b><h4>متاح بدون توقف</h4><p>عيد، عطلة، ليل — سندس لا ينام.</p></div>
              <div className="sc card reveal d5" style={{ gridColumn: "span 3" }}><b data-count="12" data-suffix="+ قطاع">0+ قطاع</b><h4>قطاعات يخدمها</h4><p>من العقاري إلى الصحي إلى التجارة الإلكترونية.</p></div>
            </div>
          </div></section>

          {/* FEATURES */}
          <section className="sect cs" style={{ background: "var(--s3)" }}><div className="container">
            <div className="sect-hd reveal">
              <div className="tag tag-p">قدرات المنصة</div>
              <h2 className="sect-t">ليس مجرد رد آلي — <span style={{ color: "var(--gr)" }}>محادثة ذكية حقيقية</span></h2>
              <p className="sect-d">سندس يفهم السياق، يلتقط النية، ويتخذ قرارات — تماماً كأفضل موظف استقبال لديك.</p>
            </div>
            <div className="feat-grid">
              {features.map((f, i) => (
                <div key={i} className={`feat card reveal d${Math.min(i + 1, 6)}`}>
                  <span className="fi-icon">{f.icon}</span>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div></section>

          {/* HOW IT WORKS */}
          <section className="sect"><div className="container">
            <div className="sect-hd reveal"><div className="tag tag-g">كيف يعمل</div><h2 className="sect-t">ثلاث خطوات <span style={{ color: "var(--brand)" }}>فقط</span></h2></div>
            <div className="steps-grid">
              {steps.map((s, i) => (
                <div key={i} className={`step card reveal d${i + 1}`}>
                  <div className="n">{s.num}</div>
                  <div className="ic">{s.icon}</div>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                  <span className="tg">{s.tag}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-10 reveal d4">
              <button className="btn" onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth", block: "center" })}><span>ابدأ الآن ←</span></button>
            </div>
          </div></section>

          {/* INDUSTRIES */}
          <section className="sect" style={{ background: "var(--s3)" }}><div className="container">
            <div className="sect-hd reveal">
              <div className="tag tag-a">القطاعات</div>
              <h2 className="sect-t">مصمم ليناسب <span style={{ color: "var(--bl)" }}>كل قطاع</span></h2>
              <p className="sect-d">سواء كنت في العقارات أو الرعاية الصحية أو التجارة — سندس يتكيف مع طبيعة نشاطك.</p>
            </div>
            <div className="ind-grid">
              {industries.map((ind, i) => (
                <div key={i} className={`ind card reveal d${Math.min(i + 1, 8)}`}>
                  <span className="ind-icon">{ind.icon}</span>
                  <h4>{ind.name}</h4>
                  <p>{ind.note}</p>
                </div>
              ))}
            </div>
          </div></section>

          {/* DIFFERENTIATORS */}
          <section className="sect"><div className="container">
            <div className="sect-hd reveal">
              <div className="tag tag-g">لماذا سندس</div>
              <h2 className="sect-t">ما يميزنا عن <span style={{ color: "var(--bl)" }}>أي حل آخر</span></h2>
            </div>
            <div className="diff-grid">
              {differentiators.map((d, i) => (
                <div key={i} className={`diff card reveal d${i + 1}`}>
                  <span className="diff-icon">{d.icon}</span>
                  <div><h4>{d.title}</h4><p>{d.desc}</p></div>
                </div>
              ))}
            </div>
          </div></section>

          {/* FAQ */}
          <section className="sect" style={{ background: "var(--s3)" }}><div className="container">
            <div className="sect-hd reveal"><div className="tag tag-a">أسئلة شائعة</div><h2 className="sect-t">أكثر ما يُسأل عن سندس</h2></div>
            <div className="faq reveal">
              {faqs.map(({ q, a }, i) => (
                <div key={i} className="fi card-s">
                  <div className="fq" role="button" tabIndex={0} aria-expanded={false}
                    onClick={(e) => (window as any).toggleFaq(e.currentTarget)}
                    onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); (window as any).toggleFaq(e.currentTarget); } }}>
                    {q}<em>+</em>
                  </div>
                  <div className="fa" role="region">{a}</div>
                </div>
              ))}
            </div>
          </div></section>

          {/* FINAL CTA */}
          <section className="final">
            <div className="container">
              <div className="final-card-wrapper reveal">
                <div className="final-card">
                  <div className="tag tag-p">جاهز للبدء؟</div>
                  <h2>حوّل مكالماتك<br />إلى نقاط نمو حقيقية</h2>
                  <p className="desc">تحدث مع فريقنا واكتشف كيف يغيّر سندس طريقة تعاملك مع عملائك — خلال 15 دقيقة فقط.</p>
                  <button className="btn-w" onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth", block: "center" })}>
                    تواصل معنا الآن ↑
                  </button>
                  <small>✓ عرض مخصص · ✓ بدون التزام · ✓ رد خلال 24 ساعة</small>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer"><div className="container">© 2025 سندس AI — المنصة السعودية لأتمتة المكالمات بالذكاء الاصطناعي</div></footer>
      </div>
    </>
  );
}