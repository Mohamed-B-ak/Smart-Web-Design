import { useEffect } from "react";

export default function SondosLanding() {
  useEffect(() => {
    // ─── Phone input logic ─────────────────────────────────────────────────
    const TOTAL_DIGITS = 9;
    const arDigits = ["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];
    const toArNum = (n: number) =>
      String(n).replace(/\d/g, (d) => arDigits[+d]);

    const phoneInput = document.getElementById("fPhone") as HTMLInputElement;
    const emailInput = document.getElementById("fEmail") as HTMLInputElement;
    const emailErr = document.getElementById("emailErr") as HTMLElement;
    const phErr = document.getElementById("phErr") as HTMLElement;
    const digitsHint = document.getElementById("digitsHint") as HTMLElement;
    const formErr = document.getElementById("formErr") as HTMLElement;

    const handlePhone = () => {
      phoneInput.value = phoneInput.value.replace(/\D/g, "").slice(0, TOTAL_DIGITS);
      const remaining = TOTAL_DIGITS - phoneInput.value.length;
      digitsHint.textContent = toArNum(remaining) + " أرقام متبقية";
      if (remaining === 0) {
        digitsHint.classList.add("ok");
        digitsHint.textContent = "✓ الرقم مكتمل";
        phoneInput.classList.remove("err");
        phErr.classList.remove("show");
      } else {
        digitsHint.classList.remove("ok");
      }
    };

    const handleEmailBlur = () => {
      const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
      if (emailInput.value && !valid) {
        emailErr.classList.add("show");
        emailInput.classList.add("err");
      } else {
        emailErr.classList.remove("show");
        emailInput.classList.remove("err");
      }
    };

    const handleEmailInput = () => {
      emailErr.classList.remove("show");
      emailInput.classList.remove("err");
    };

    const handlePhoneBlur = () => {
      if (phoneInput.value && phoneInput.value.length < TOTAL_DIGITS) {
        phoneInput.classList.add("err");
        phErr.classList.add("show");
      } else {
        phoneInput.classList.remove("err");
        phErr.classList.remove("show");
      }
    };

    phoneInput?.addEventListener("input", handlePhone);
    emailInput?.addEventListener("blur", handleEmailBlur);
    emailInput?.addEventListener("input", handleEmailInput);
    phoneInput?.addEventListener("blur", handlePhoneBlur);

    // ─── Calculator ────────────────────────────────────────────────────────
    let currentDisplayVal = 1468800;
    let calcAnimFrame: number | null = null;

    const animateCalc = (target: number) => {
      if (calcAnimFrame) cancelAnimationFrame(calcAnimFrame);
      const start = currentDisplayVal;
      const diff = target - start;
      const duration = 400;
      let startTime: number | null = null;
      const el = document.getElementById("ct") as HTMLElement;
      const step = (ts: number) => {
        if (!startTime) startTime = ts;
        const p = Math.min((ts - startTime) / duration, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        currentDisplayVal = Math.round(start + diff * ease);
        el.textContent = "$" + currentDisplayVal.toLocaleString();
        if (p < 1) calcAnimFrame = requestAnimationFrame(step);
        else currentDisplayVal = target;
      };
      calcAnimFrame = requestAnimationFrame(step);
    };

    const cc = () => {
      const c = +(document.getElementById("r1") as HTMLInputElement).value;
      const m = +(document.getElementById("r2") as HTMLInputElement).value;
      const v = +(document.getElementById("r3") as HTMLInputElement).value;
      (document.getElementById("v1") as HTMLElement).textContent = c.toLocaleString();
      (document.getElementById("v2") as HTMLElement).textContent = m + "%";
      (document.getElementById("v3") as HTMLElement).textContent = "$" + v.toLocaleString();
      const loss = Math.round(c * (m / 100) * 0.85 * v * 12);
      (document.getElementById("cn") as HTMLElement).textContent =
        c + " × " + m + "% × 85% × $" + v.toLocaleString() + " × 12";
      animateCalc(loss);
    };

    (window as any).cc = cc;
    cc();

    // ─── Bento counters ────────────────────────────────────────────────────
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

    let countedBento = false;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("vis");
            if (!countedBento && (entry.target as HTMLElement).closest(".bento")) {
              countedBento = true;
              (entry.target as HTMLElement)
                .closest(".bento")!
                .querySelectorAll<HTMLElement>("b[data-count]")
                .forEach((c, i) => {
                  setTimeout(() => animateCounter(c), i * 150);
                });
            }
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => obs.observe(el));

    // ─── Form submit ───────────────────────────────────────────────────────
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
        emailErr.classList.add("show"); emailInput.classList.add("err"); emailInput.focus(); return;
      }
      if (phone.length !== TOTAL_DIGITS) {
        phoneInput.classList.add("err"); phErr.classList.add("show"); phoneInput.focus(); return;
      }
      if (!industry) { (document.getElementById("fInd") as HTMLSelectElement).focus(); return; }

      if (phone.startsWith("966")) phone = phone.slice(3);
      const formattedPhone = "+966" + phone;

      const btn = document.getElementById("ctaBtn") as HTMLButtonElement;
      const btnText = document.getElementById("ctaText") as HTMLElement;
      btn.disabled = true;
      btnText.innerHTML = '<span class="sp"></span> جارٍ الإرسال...';
      formErr.style.display = "none";

      const params = new URLSearchParams({ name, email, phone: formattedPhone, company, industry, questions });
      fetch(APPS_SCRIPT_URL + "?" + params.toString(), { method: "GET" })
        .then(() => {
          (document.getElementById("fw") as HTMLElement).classList.add("hide");
          (document.getElementById("fok") as HTMLElement).classList.add("show");
        })
        .catch(() => {
          formErr.style.display = "block";
          btn.disabled = false;
          btnText.textContent = "احجز استشارتك المجانية الآن ←";
        });
    };

    document.getElementById("bkForm")?.addEventListener("submit", sub);

    // ─── FAQ toggle ────────────────────────────────────────────────────────
    const toggleFaq = (el: HTMLElement) => {
      const item = el.parentElement!;
      const isOpen = item.classList.contains("open");
      document.querySelectorAll(".fi.open").forEach((fi) => {
        fi.classList.remove("open");
        fi.querySelector(".fq")?.setAttribute("aria-expanded", "false");
      });
      if (!isOpen) { item.classList.add("open"); el.setAttribute("aria-expanded", "true"); }
    };
    (window as any).toggleFaq = toggleFaq;

    // ─── Reset form ────────────────────────────────────────────────────────
    const resetForm = () => {
      (document.getElementById("fw") as HTMLElement).classList.remove("hide");
      (document.getElementById("fok") as HTMLElement).classList.remove("show");
      (document.getElementById("bkForm") as HTMLFormElement).reset();
      const btn = document.getElementById("ctaBtn") as HTMLButtonElement;
      btn.disabled = false;
      (document.getElementById("ctaText") as HTMLElement).textContent = "احجز استشارتك المجانية الآن ←";
      emailInput.classList.remove("err"); emailErr.classList.remove("show");
      phoneInput.classList.remove("err"); phErr.classList.remove("show");
      digitsHint.classList.remove("ok");
      digitsHint.textContent = toArNum(TOTAL_DIGITS) + " أرقام متبقية";
      formErr.style.display = "none";
    };
    (window as any).resetForm = resetForm;

    return () => {
      phoneInput?.removeEventListener("input", handlePhone);
      emailInput?.removeEventListener("blur", handleEmailBlur);
      emailInput?.removeEventListener("input", handleEmailInput);
      phoneInput?.removeEventListener("blur", handlePhoneBlur);
      obs.disconnect();
      if (calcAnimFrame) cancelAnimationFrame(calcAnimFrame);
    };
  }, []);

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
        @keyframes popIn{0%{opacity:0;transform:scale(.85) translateY(12px)}60%{transform:scale(1.02) translateY(-2px)}100%{opacity:1;transform:scale(1) translateY(0)}}
        .reveal{opacity:0;transform:translateY(30px);transition:opacity .7s cubic-bezier(.16,1,.3,1),transform .7s cubic-bezier(.16,1,.3,1)}.reveal.vis{opacity:1;transform:translateY(0)}.d1{transition-delay:.1s}.d2{transition-delay:.2s}.d3{transition-delay:.3s}.d4{transition-delay:.4s}.d5{transition-delay:.5s}
        .card{background:var(--s2);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);border:1px solid var(--gb);border-radius:24px;transition:all .3s cubic-bezier(.16,1,.3,1);box-shadow:0 4px 20px rgba(0,0,0,.04)}
        .card:hover{border-color:var(--gbs);box-shadow:0 12px 40px rgba(90,24,154,.08)}
        .gradient-bg{background:linear-gradient(135deg,#5a189a,#9d4edd)}
        .nav{position:sticky;top:0;z-index:100;background:rgba(255,255,255,.8);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);border-bottom:1px solid var(--gb);padding:14px 0}
        .nav-i{display:flex;align-items:center;justify-content:space-between}
        .logo{display:flex;align-items:center;gap:9px}
        .logo-img{height:42px;width:auto;object-fit:contain;display:block}
        .nav-b{padding:10px 24px;background:linear-gradient(135deg,#5a189a,#9d4edd);color:#fff;font-weight:700;font-size:.78rem;border-radius:100px;border:none;cursor:pointer;transition:all .3s;font-family:var(--df);box-shadow:0 2px 12px var(--bg)}
        .nav-b:hover{transform:translateY(-2px);box-shadow:0 12px 40px rgba(90,24,154,.3)}
        .hero{padding:80px 0 64px;text-align:center;position:relative;z-index:1;overflow:hidden}
        .hero::before{content:'';position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse 80% 60% at 50% 0%,rgba(90,24,154,.12) 0%,transparent 70%)}
        .hero::after{content:'';position:absolute;inset:0;z-index:0;pointer-events:none;background-image:linear-gradient(rgba(90,24,154,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(90,24,154,.04) 1px,transparent 1px);background-size:60px 60px;-webkit-mask-image:radial-gradient(ellipse at center,black 20%,transparent 65%);mask-image:radial-gradient(ellipse at center,black 20%,transparent 65%)}
        .ey{display:inline-flex;align-items:center;gap:8px;padding:7px 20px;border-radius:100px;background:rgba(90,24,154,.08);border:1px solid rgba(90,24,154,.2);font-size:.72rem;font-weight:600;color:var(--bl);margin-bottom:32px;animation:fadeUp .7s ease both .15s;backdrop-filter:blur(8px);position:relative;z-index:1}
        .ey .dot{width:7px;height:7px;border-radius:50%;background:var(--gr);animation:blink 1.5s infinite}
        .h1{font-family:var(--sf);font-size:clamp(2.4rem,5.5vw,3.8rem);font-weight:700;line-height:1.15;margin-bottom:20px;animation:fadeUp .7s ease both .25s;color:var(--bk);position:relative;z-index:1}
        .h1 .hl{color:var(--bl)}
        .sub{font-size:1.08rem;color:var(--t2);max-width:600px;margin:0 auto 48px;line-height:2;font-weight:500;animation:fadeUp .7s ease both .35s;position:relative;z-index:1}
        .sub strong{color:var(--t)}
        .bens{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;max-width:860px;margin:0 auto;animation:fadeUp .7s ease both .45s;position:relative;z-index:1}
        .ben{display:flex;align-items:center;gap:14px;padding:22px 20px;text-align:right}
        .ben:hover{transform:translateY(-3px)}
        .ben i{min-width:54px;height:48px;border-radius:14px;background:linear-gradient(135deg,#5a189a,#9d4edd);display:flex;align-items:center;justify-content:center;color:#fff;font-family:var(--mn);font-weight:700;font-size:.9rem;font-style:normal;flex-shrink:0;direction:ltr;box-shadow:0 4px 14px var(--bg)}
        .ben h3{font-size:.84rem;font-weight:700;color:var(--t);margin-bottom:2px}.ben p{font-size:.7rem;color:var(--t3);line-height:1.5}
        .fs{padding:8px 0 72px;position:relative;z-index:1;overflow:hidden}
        .fs::before{content:'';position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse 60% 50% at 50% 30%,rgba(90,24,154,.06) 0%,transparent 70%)}
        .fc{max-width:540px;margin:0 auto;background:rgba(255,255,255,.8);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);border:1px solid rgba(90,24,154,.15);border-radius:24px;padding:40px 36px;position:relative;overflow:hidden;box-shadow:0 40px 80px rgba(0,0,0,.08)}
        .fc::before{content:'';position:absolute;top:-1px;left:30px;right:30px;height:3px;background:linear-gradient(90deg,transparent,#5a189a,#9d4edd,transparent);border-radius:0 0 4px 4px}
        .fc-i{position:relative;z-index:1}
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
        .ff .em.show{display:block}
        .phone-wrap{display:flex;gap:0}
        .phone-prefix{display:flex;align-items:center;padding:12px 14px;background:#f3f0f8;border:1px solid var(--input-border);border-left:none;font-size:.88rem;font-weight:600;color:var(--t2);font-family:var(--mn);white-space:nowrap;user-select:none;min-width:64px;justify-content:center}
        [dir="rtl"] .phone-prefix{border-right:none;border-left:1px solid var(--input-border);border-radius:0 14px 14px 0}
        [dir="rtl"] .phone-wrap input{border-radius:14px 0 0 14px}
        .phone-wrap input:focus{z-index:1}
        .phone-wrap input.err{border-color:#ef4444}
        .digits-hint{font-size:.68rem;color:var(--t3);margin-top:4px;text-align:right;font-family:var(--mn);direction:ltr}
        .digits-hint.ok{color:var(--gr)}
        .cta{width:100%;padding:14px;margin-top:6px;background:linear-gradient(to left,#5a189a,#9d4edd);color:#fff;font-size:.95rem;font-weight:600;border:none;border-radius:14px;cursor:pointer;font-family:var(--df);transition:all .3s cubic-bezier(.16,1,.3,1);position:relative;overflow:hidden}
        .cta::before{content:'';position:absolute;inset:0;background:linear-gradient(90deg,transparent 30%,rgba(255,255,255,.1) 50%,transparent 70%);background-size:200% 100%;animation:shimmer 3.5s infinite}
        .cta:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 12px 40px rgba(90,24,154,.3)}
        .cta:active:not(:disabled){transform:translateY(0)}
        .cta:disabled{opacity:.7;cursor:not-allowed}
        .cta .sp{width:16px;height:16px;border:2px solid rgba(255,255,255,.3);border-top-color:#fff;border-radius:50%;animation:spin .6s linear infinite;display:inline-block;vertical-align:middle;margin-inline-end:6px}
        .fc-ok{display:none;text-align:center;padding:40px 0}
        .fc-ok.show{display:block;animation:popIn .5s cubic-bezier(.16,1,.3,1) both}
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
        .bento{display:grid;grid-template-columns:repeat(6,1fr);gap:14px}
        .bc{padding:28px 24px;position:relative;overflow:hidden}
        .bc::before{content:'';position:absolute;top:0;right:0;width:120px;height:120px;background:radial-gradient(circle,rgba(90,24,154,.04),transparent 70%);pointer-events:none}
        .bc:hover{transform:translateY(-4px)}
        .bc:nth-child(1){grid-column:span 2}.bc:nth-child(2){grid-column:span 2}.bc:nth-child(3){grid-column:span 2}.bc:nth-child(4){grid-column:span 3}.bc:nth-child(5){grid-column:span 3}
        .bc b{font-family:var(--mn);font-size:2rem;font-weight:700;color:var(--bl);direction:ltr;text-align:right;display:block;margin-bottom:4px}
        .bc h4{font-size:.92rem;font-weight:700;color:var(--t);margin-bottom:6px}
        .bc p{font-size:.8rem;color:var(--t2);line-height:1.8}
        .cs{background:var(--s3)}
        .calc{max-width:560px;margin:0 auto;background:var(--s2);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);border:1px solid var(--gb);border-radius:24px;padding:40px 38px;position:relative;overflow:hidden;box-shadow:0 4px 24px rgba(90,24,154,.04)}
        .calc::before{content:'';position:absolute;top:-50px;left:50%;transform:translateX(-50%);width:280px;height:160px;background:radial-gradient(ellipse,rgba(90,24,154,.05),transparent 70%);pointer-events:none}
        .calc-i{position:relative;z-index:1}
        .calc h2{font-family:var(--sf);font-size:1.45rem;font-weight:700;text-align:center;margin-bottom:4px;color:var(--bk)}
        .calc .desc{text-align:center;color:var(--t3);margin-bottom:28px;font-size:.82rem}
        .cf{margin-bottom:20px}
        .cf label{display:flex;justify-content:space-between;font-size:.84rem;color:var(--t2);margin-bottom:10px}
        .cf em{font-family:var(--mn);font-weight:700;color:var(--brand);direction:ltr;font-style:normal}
        .cf input[type=range]{-webkit-appearance:none;width:100%;height:5px;border-radius:3px;background:var(--s3);outline:none;border:1px solid var(--gb)}
        .cf input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:20px;height:20px;border-radius:50%;background:linear-gradient(135deg,#5a189a,#9d4edd);cursor:pointer;box-shadow:0 2px 8px var(--bg);border:2px solid #fff}
        .cr{margin-top:28px;padding:28px;text-align:center;background:linear-gradient(135deg,#5a189a,#9d4edd);border-radius:16px;box-shadow:0 0 40px rgba(90,24,154,.2)}
        .cr small{font-size:.72rem;color:rgba(255,255,255,.8);font-family:var(--mn);letter-spacing:.08em;display:block;margin-bottom:8px;font-weight:600}
        .cr b{font-family:var(--mn);font-size:2.5rem;font-weight:700;color:#fff;direction:ltr;display:block;transition:opacity .15s}
        .cr b.flash{opacity:.6}
        .cr .note{font-size:.7rem;color:rgba(255,255,255,.6);margin-top:8px}
        .cc{text-align:center;margin-top:24px}
        .btn{display:inline-flex;align-items:center;gap:8px;padding:15px 34px;background:linear-gradient(135deg,#5a189a,#9d4edd);color:#fff;font-weight:700;font-size:.9rem;border-radius:100px;border:none;cursor:pointer;transition:all .3s;font-family:var(--df);box-shadow:0 4px 18px var(--bg);position:relative;overflow:hidden}
        .btn::before{content:'';position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,.08),transparent);background-size:200% 100%;animation:shimmer 3.5s infinite}
        .btn:hover{transform:translateY(-2px);box-shadow:0 12px 40px rgba(90,24,154,.3)}
        .btn span{position:relative;z-index:1}
        .steps{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
        .step{padding:34px 24px;text-align:center}
        .step:hover{transform:translateY(-4px)}
        .step .n{width:36px;height:36px;border-radius:50%;margin:0 auto 14px;background:linear-gradient(135deg,#5a189a,#9d4edd);display:flex;align-items:center;justify-content:center;font-family:var(--mn);font-size:.7rem;font-weight:700;color:#fff;box-shadow:0 2px 10px var(--bg)}
        .step .ic{font-size:1.6rem;margin-bottom:12px}
        .step h4{font-weight:700;font-size:.94rem;color:var(--t);margin-bottom:8px}
        .step p{font-size:.8rem;color:var(--t2);line-height:1.8}
        .step .tg{display:inline-block;margin-top:12px;padding:4px 12px;background:var(--gg);border:1px solid var(--ggh);border-radius:100px;font-size:.64rem;font-weight:700;color:var(--gr)}
        .tls{background:var(--s3)}
        .tl{max-width:520px;margin:0 auto;position:relative}
        .tl::before{content:'';position:absolute;right:17px;top:0;bottom:0;width:2px;background:var(--gbs)}
        .tl-i{display:flex;gap:20px;margin-bottom:22px}
        .tl-d{width:36px;height:36px;border-radius:50%;flex-shrink:0;background:linear-gradient(135deg,#5a189a,#9d4edd);display:flex;align-items:center;justify-content:center;font-family:var(--mn);font-size:.65rem;font-weight:700;color:#fff;position:relative;z-index:1;box-shadow:0 2px 10px var(--bg)}
        .tl-c{flex:1;background:var(--s2);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);border:1px solid var(--gb);border-radius:16px;padding:18px 20px;box-shadow:0 2px 12px rgba(0,0,0,.03)}
        .tl-c h4{font-weight:700;font-size:.9rem;color:var(--t);margin-bottom:4px}
        .tl-c p{font-size:.8rem;color:var(--t2);line-height:1.7}
        .tl-tm{display:inline-block;margin-top:8px;padding:4px 10px;background:var(--ag);border:1px solid var(--agh);border-radius:100px;font-size:.64rem;font-weight:700;color:var(--brand)}
        .qc{max-width:600px;margin:0 auto;background:var(--s2);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);border:1px solid var(--gb);border-radius:24px;padding:38px 36px;text-align:center;box-shadow:0 0 60px rgba(90,24,154,.08);position:relative;overflow:hidden}
        .qc::before{content:'"';position:absolute;top:16px;right:28px;font-size:6rem;font-family:var(--sf);color:var(--brand);opacity:.08;line-height:1;pointer-events:none}
        .qc .st{color:var(--go);font-size:.9rem;letter-spacing:3px;margin-bottom:14px;direction:ltr}
        .qc blockquote{font-family:var(--sf);font-size:1.08rem;line-height:2.1;color:var(--t2);font-style:italic;margin-bottom:18px}
        .qc cite{font-style:normal;font-weight:700;font-size:.9rem;color:var(--t);display:block}
        .qc .role{font-size:.72rem;color:var(--t3);margin-top:2px}
        .faq{max-width:640px;margin:0 auto}
        .fi{border-bottom:none;margin-bottom:12px}
        .fq{font-size:.92rem;font-weight:700;cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:14px;padding:22px 24px;transition:all .2s;user-select:none;color:var(--t);border-radius:20px}
        .fq:hover{color:var(--brand)}
        .fq em{width:28px;height:28px;border-radius:50%;background:var(--s2);border:1px solid var(--gb);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.9rem;color:var(--bl);transition:all .3s;font-family:var(--mn);font-style:normal}
        .fi.open .fq em{background:linear-gradient(135deg,#5a189a,#9d4edd);color:#fff;border-color:transparent;transform:rotate(45deg)}
        .fa{max-height:0;overflow:hidden;transition:max-height .4s cubic-bezier(.16,1,.3,1),padding .3s;color:var(--t2);font-size:.86rem;line-height:1.9}
        .fi.open .fa{max-height:300px;padding:0 24px 22px}
        .final{padding:100px 0;text-align:center;position:relative;overflow:hidden;background:linear-gradient(135deg,#5a189a,#9d4edd,#3c096c)}
        .final::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 30% 20%,rgba(255,255,255,.06),transparent 50%);pointer-events:none}
        .final-c{position:relative;z-index:1}
        .final .tag-p{background:rgba(255,255,255,.1);color:rgba(255,255,255,.9);border-color:rgba(255,255,255,.15)}
        .final h2{font-family:var(--sf);font-size:clamp(1.8rem,4.5vw,2.8rem);font-weight:700;line-height:1.25;margin-bottom:16px;color:#fff}
        .final h2 .hl{color:rgba(255,255,255,.75)}
        .final .desc{font-size:.98rem;color:rgba(255,255,255,.7);max-width:480px;margin:0 auto 32px;line-height:1.9}
        .btn-f{display:inline-flex;align-items:center;gap:8px;padding:18px 48px;background:rgba(255,255,255,.95);color:var(--brand);font-weight:800;font-size:1.05rem;border-radius:20px;border:none;cursor:pointer;transition:all .3s cubic-bezier(.16,1,.3,1);font-family:var(--df);box-shadow:0 4px 24px rgba(0,0,0,.1);position:relative;overflow:hidden}
        .btn-f::before{content:'';position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,.3),transparent);background-size:200% 100%;animation:shimmer 3s infinite}
        .btn-f:hover{transform:translateY(-3px);box-shadow:0 12px 48px rgba(0,0,0,.15);background:#fff}
        .footer{padding:32px 0;border-top:1px solid var(--gb);text-align:center;font-size:.72rem;color:var(--t3);position:relative;z-index:1;background:var(--s)}
        .sect+.sect:not(.cs):not(.tls){border-top:1px solid var(--gb)}
        @media(max-width:768px){
          .bens{grid-template-columns:1fr;max-width:400px}
          .bento{grid-template-columns:1fr}
          .bc{grid-column:span 1!important}
          .steps{grid-template-columns:1fr}
          .hero{padding:44px 0 36px}
          .h1{font-size:clamp(1.7rem,6vw,2.4rem)}
          .fc{padding:30px 22px;margin:0 16px}
          .sect{padding:56px 0}
          .faq .fq{padding:18px 20px}
          .fi.open .fa{padding:0 20px 18px}
          .phone-prefix{min-width:54px;font-size:.82rem}
          .logo-img{height:36px}
        }
        @media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}}
      `}</style>

      <link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Noto+Kufi+Arabic:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />

      <div dir="rtl">
        <div className="orb orb-1" /><div className="orb orb-2" /><div className="orb orb-3" />

        <nav className="nav" role="navigation"><div className="container nav-i">
          <div className="logo">
            <img src="https://z-cdn-media.chatglm.cn/files/691dd92c-e49d-4224-99e2-96e9272ac6ca.png?auth_key=1875120293-659c933ec20d4141b916829f24451a63-0-30470faeaca6e9a7447478b5d83b4e4c" alt="Sondos AI Logo" className="logo-img" />
          </div>
          <button className="nav-b" onClick={() => document.querySelector(".fs")?.scrollIntoView({ behavior: "smooth", block: "center" })}>احجز استشارتك</button>
        </div></nav>

        <main>
          <section className="hero"><div className="container">
            <div className="ey"><span className="dot" aria-hidden="true" /> المنصة السعودية الأولى لأتمتة المكالمات بالذكاء الاصطناعي</div>
            <h1 className="h1">كل مكالمة ما ترد عليها<br />هي <span className="hl">صفقة تروح لمنافسك</span></h1>
            <p className="sub"><strong>سندس AI يرد في أقل من ثانية</strong>، يؤهل العميل، ويحجز لك الاجتماع — تلقائياً وبدون توقف.</p>
            <div className="bens">
              <div className="ben card"><i aria-hidden="true">60%</i><div><h3>٦٠٪ من المكالمات بلا رد</h3><p>سندس يرد ٠.٨ ثانية — ٢٤/٧</p></div></div>
              <div className="ben card"><i aria-hidden="true">85%</i><div><h3>٨٥٪ ما يتصلون مرة ثانية</h3><p>سندس يلتقطهم قبل المنافس</p></div></div>
              <div className="ben card"><i aria-hidden="true">3x</i><div><h3>٣ أضعاف الاجتماعات</h3><p>بنفس ميزانيتك الحالية</p></div></div>
            </div>
          </div></section>

          <section className="fs" id="booking"><div className="container"><div className="fc"><div className="fc-i">
            <div className="fc-w" id="fw">
              <h2>احجز استشارتك المجانية</h2>
              <p className="desc">نحلل وضعك ونوريك كم تخسر — بدون أي التزام</p>
              <form id="bkForm" noValidate>
                <div className="ff"><label htmlFor="fName">الاسم الكامل</label><input type="text" id="fName" name="name" required placeholder="أدخل اسمك الكامل" autoComplete="name" /></div>
                <div className="ff"><label htmlFor="fComp">اسم الشركة</label><input type="text" id="fComp" name="company" required placeholder="اسم شركتك أو مؤسستك" autoComplete="organization" /></div>
                <div className="ff"><label htmlFor="fEmail">البريد الإلكتروني</label><input type="email" id="fEmail" name="email" required placeholder="email@example.com" autoComplete="email" /><div className="em" id="emailErr">يرجى إدخال بريد إلكتروني صحيح</div></div>
                <div className="ff">
                  <label htmlFor="fPhone">رقم الجوال</label>
                  <div className="phone-wrap"><span className="phone-prefix">+966</span><input type="tel" id="fPhone" name="phone" required placeholder="5XXXXXXXX" maxLength={9} inputMode="numeric" autoComplete="tel" /></div>
                  <div className="digits-hint" id="digitsHint">٩ أرقام متبقية</div>
                  <div className="em" id="phErr">يرجى إدخال ٩ أرقام بعد رمز الدولة</div>
                </div>
                <div className="ff">
                  <label htmlFor="fInd">القطاع</label>
                  <select id="fInd" name="industry" required>
                    <option value="">— اختر القطاع —</option>
                    <option value="القطاع الصحي">القطاع الصحي</option>
                    <option value="القطاع العقاري">القطاع العقاري</option>
                    <option value="القطاع الحكومي">القطاع الحكومي</option>
                    <option value="تجارة إلكترونية">تجارة إلكترونية</option>
                    <option value="قطاع التأمين">قطاع التأمين</option>
                    <option value="قطاع التعليم">قطاع التعليم</option>
                    <option value="القطاع السياحي">القطاع السياحي</option>
                    <option value="قطاع النقل واللوجستيات">قطاع النقل واللوجستيات</option>
                    <option value="قطاع آخر">قطاع آخر</option>
                  </select>
                </div>
                <div className="ff"><label htmlFor="fQ">أسئلة أو ملاحظات <span style={{ color: "var(--t3)", fontWeight: 400 }}>(اختياري)</span></label><textarea id="fQ" name="questions" placeholder="هل عندك سؤال معين أو تحدٍ تواجهه؟" rows={4} /></div>
                <div className="form-error" id="formErr" style={{ display: "none" }}>حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.</div>
                <button type="submit" className="cta" id="ctaBtn"><span id="ctaText">احجز استشارتك الآن ←</span></button>
              </form>
            </div>
            <div className="fc-ok" id="fok">
              <div className="ck" aria-hidden="true">✅</div>
              <strong>تم الحجز بنجاح!</strong>
              <small>فريقنا سيتواصل معك خلال ٢٤ ساعة<br />مع تقرير خسائر مخصص مجاناً</small>
              <button className="back" onClick={() => (window as any).resetForm()}>حجز استشارة أخرى</button>
            </div>
          </div></div></div></section>

          <section className="sect"><div className="container">
            <div className="sect-hd reveal"><div className="tag tag-a">الأرقام الحقيقية</div><h2 className="sect-t">تسرب إيراداتك <span style={{ color: "var(--bl)" }}>يحدث الآن… بدون أن تلاحظه</span></h2></div>
            <div className="bento">
              <div className="bc card reveal d1"><b data-count="60.8" data-suffix="%">0%</b><h4>مكالمات بلا رد</h4><p>كل رنّة بدون رد = عقد إيجار يروح لمنافسك.</p></div>
              <div className="bc card reveal d2"><b data-count="30" data-prefix="$" data-suffix="K">$0K</b><h4>خسارة لكل مكالمة</h4><p>مكالمة ضائعة = ١٥–٣٠ ألف دولار سنوياً.</p></div>
              <div className="bc card reveal d3"><b data-count="15" data-suffix="h">0h</b><h4>متوسط وقت الرد</h4><p>المشتري اللي تواصل قبل ١٥ ساعة وقّع مع غيرك.</p></div>
              <div className="bc card reveal d4"><b data-count="85" data-suffix="%">0%</b><h4>ما يعاودون الاتصال</h4><p>يروحون للمنافس. لا رسائل. لا فرصة ثانية.</p></div>
              <div className="bc card reveal d5"><b data-count="78" data-suffix="%">0%</b><h4>يختارون أول من يرد</h4><p>ميزانية تسويقك موّلت صفقة منافسك.</p></div>
            </div>
          </div></section>

          <section className="sect cs"><div className="container">
            <div className="calc reveal"><div className="calc-i">
              <h2>كم تخسر <span style={{ color: "var(--brand)" }}>أنت</span>؟</h2>
              <p className="desc">حرّك المؤشرات لأرقامك</p>
              <div className="cf"><label><span>المكالمات شهرياً</span><em id="v1">200</em></label><input type="range" min="50" max="2000" defaultValue="200" step="50" id="r1" onChange={() => (window as any).cc()} aria-label="عدد المكالمات الشهرية" /></div>
              <div className="cf"><label><span>نسبة الضياع</span><em id="v2">60%</em></label><input type="range" min="20" max="80" defaultValue="60" step="5" id="r2" onChange={() => (window as any).cc()} aria-label="نسبة المكالمات الضائعة" /></div>
              <div className="cf"><label><span>قيمة العميل</span><em id="v3">$1,200</em></label><input type="range" min="200" max="5000" defaultValue="1200" step="100" id="r3" onChange={() => (window as any).cc()} aria-label="قيمة العميل الواحد" /></div>
              <div className="cr"><small>خسارتك السنوية</small><b id="ct">$1,468,800</b><div className="note" id="cn">200 × 60% × 85% × $1,200 × 12</div></div>
              <div className="cc"><button className="btn" onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth", block: "center" })}><span>أوقف النزيف — احجز الآن ←</span></button></div>
            </div></div>
          </div></section>

          <section className="sect"><div className="container">
            <div className="sect-hd reveal"><div className="tag tag-p">كيف يعمل</div><h2 className="sect-t">من مكالمة ضائعة إلى <span style={{ color: "var(--gr)" }}>صفقة مُغلقة</span></h2></div>
            <div className="steps">
              <div className="step card reveal d1"><div className="n" aria-hidden="true">01</div><div className="ic" aria-hidden="true">📱</div><h4>يرد فوراً</h4><p>أقل من ثانية. ليلاً، عطلات، أعياد.</p><span className="tg">٠.٨ ثانية</span></div>
              <div className="step card reveal d2"><div className="n" aria-hidden="true">02</div><div className="ic" aria-hidden="true">🎯</div><h4>يؤهل العميل</h4><p>يسأل، يلتقط النية، يسجل في CRM.</p><span className="tg">٩٠ ثانية</span></div>
              <div className="step card reveal d3"><div className="n" aria-hidden="true">03</div><div className="ic" aria-hidden="true">📅</div><h4>يحجز لك</h4><p>العملاء الجادين ينحجزون تلقائياً.</p><span className="tg">3x اجتماعات</span></div>
            </div>
          </div></section>

          <section className="sect tls"><div className="container">
            <div className="sect-hd reveal"><div className="tag tag-g">ماذا بعد الحجز؟</div><h2 className="sect-t">رحلتك <span style={{ color: "var(--brand)" }}>واضحة وبسيطة</span></h2></div>
            <div className="tl reveal">
              <div className="tl-i"><div className="tl-d" aria-hidden="true">1</div><div className="tl-c"><h4>اجتماع تشخيصي مجاني</h4><p>نحلل وضعك ونحسب خسارتك.</p><span className="tl-tm">اليوم — ١٥ دقيقة</span></div></div>
              <div className="tl-i"><div className="tl-d" aria-hidden="true">2</div><div className="tl-c"><h4>إعداد وتخصيص</h4><p>نربط سندس مع هاتفك وCRM.</p><span className="tl-tm">خلال ٤٨ ساعة</span></div></div>
              <div className="tl-i"><div className="tl-d" aria-hidden="true">3</div><div className="tl-c"><h4>الإطلاق</h4><p>سندس يبدأ الرد. فريقنا يتابع.</p><span className="tl-tm">الأسبوع الأول</span></div></div>
              <div className="tl-i"><div className="tl-d" aria-hidden="true">✓</div><div className="tl-c"><h4>صفقات مستعادة</h4><p>صفقة واحدة تغطي سنة كاملة.</p><span className="tl-tm">خلال ٣٠ يوم</span></div></div>
            </div>
          </div></section>

          <section className="sect"><div className="container"><div className="qc reveal">
            <div className="st" aria-label="5 نجوم">★★★★★</div>
            <blockquote>"كنا نفقد ٤٥٪ من مكالماتنا عبر ١٢ عقاراً. في ٩٠ يوم تضاعفت اجتماعاتنا ٣ مرات وقفز معدل التأجير من ٢.١٪ إلى ٦.٨٪"</blockquote>
            <cite>خالد الراشدي</cite><div className="role">نائب رئيس التأهيل — نخيل العقارية</div>
          </div></div></section>

          <section className="sect" style={{ background: "var(--s3)" }}><div className="container">
            <div className="sect-hd reveal"><div className="tag tag-a">أسئلة شائعة</div><h2 className="sect-t">قبل ما تقرر</h2></div>
            <div className="faq reveal">
              {[
                { q: "هل صوت AI يبان آلي؟", a: "لا. سندس يستخدم AI محادثاتي متقدم. كثير من المتصلين ما يعرفون إنهم تكلموا مع AI." },
                { q: "عندنا كول سنتر.", a: "سندس ما يحل محل فريقك — يلتقط المكالمات اللي ما يقدرون يردون عليها. فريقك يركز على المهم فقط." },
                { q: "كم يستغرق التفعيل؟", a: "٤٨ ساعة. يتكامل مع نظامك بدون تغيير بنية تحتية." },
                { q: "يشتغل مع أي حجم؟", a: "من ٥٠ وحدة إلى ٥٠,٠٠٠. فلل أو تجاري — الحساب واحد." },
                { q: "يستاهل الاستثمار؟", a: "صفقة واحدة مستعادة تغطي سنة كاملة. معظم العملاء يشوفون ROI خلال ٣٠ يوم." },
              ].map(({ q, a }, i) => (
                <div key={i} className="fi card">
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

          <section className="final"><div className="container"><div className="final-c reveal">
            <div className="tag tag-p" style={{ marginBottom: "22px" }}>جرّب مجاناً</div>
            <h2>كل دقيقة تمر<br /><span className="hl">عميل يتصل بمنافسك</span></h2>
            <p className="desc">١٥ دقيقة. نوريك كم تخسر وكيف نستعيدها — هذا الأسبوع.</p>
            <button className="btn-f" onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth", block: "center" })}>ارجع واحجز استشارتك ↑</button>
            <small>✓ مجاني · ✓ بدون التزام · ✓ تقرير خسائر مخصص</small>
          </div></div></section>
        </main>

        <footer className="footer"><div className="container">© ٢٠٢٥ سندس AI — المنصة السعودية لأتمتة المكالمات بالذكاء الاصطناعي</div></footer>
      </div>
    </>
  );
}