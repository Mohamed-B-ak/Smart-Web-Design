import { useEffect, useRef } from "react";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

/* ─── GLOBAL STYLES injected once ─── */
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');

  .sondos-pp {
    /* --- Variables --- */
    --bg: #F3F0FF; /* Fond violet très clair (comme la photo 1) */
    --bg-glass: rgba(255, 255, 255, 0.85); /* Cartes blanches semi-transparentes */
    --border-glass: rgba(90, 24, 154, 0.15);
    --brand-light: #9d4edd;
    --brand-deep: #5a189a;
    --text-main: #1e1b2e;
    --text-muted: #6b7280;

    /* --- Base --- */
    font-family: 'Instrument Sans', sans-serif;
    background-color: var(--bg);
    color: var(--text-main);
    line-height: 1.7;
    overflow-x: hidden;
    position: relative;
    padding-bottom: 60px;
  }

  /* --- Blobs (Effets d'ambiance violets) --- */
  .sondos-pp .blob {
    position: absolute; border-radius: 50%; pointer-events: none; z-index: 0; filter: blur(80px); opacity: 0.5;
  }
  .sondos-pp .blob1 {
    width: 500px; height: 500px; top: -100px; right: -100px;
    background: radial-gradient(circle, rgba(157,78,221,0.3) 0%, transparent 70%);
  }
  .sondos-pp .blob2 {
    width: 400px; height: 400px; bottom: 10%; left: -80px;
    background: radial-gradient(circle, rgba(90,24,154,0.2) 0%, transparent 70%);
  }
  .sondos-pp .blob3 {
    width: 300px; height: 300px; top: 40%; right: 5%;
    background: radial-gradient(circle, rgba(157,78,221,0.2) 0%, transparent 70%);
  }

  /* --- HEADER (Style HERO avec Grille) --- */
  .sondos-pp header {
    position: relative; z-index: 1;
    text-align: center; padding: 100px 24px 80px;
    /* Dégradé violet foncé en haut qui s'estompe */
    background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(90,24,154,0.2) 0%, transparent 70%);
  }
  
  /* Grille de fond uniquement dans le header */
  .sondos-pp header::before {
    content: '';
    position: absolute; inset: 0; z-index: -1; pointer-events: none;
    background-image: 
      linear-gradient(rgba(90,24,154,.05) 1px, transparent 1px), 
      linear-gradient(90deg, rgba(90,24,154,.05) 1px, transparent 1px);
    background-size: 60px 60px;
    /* Masque pour effacer la grille en bas */
    mask-image: radial-gradient(ellipse at center, black 20%, transparent 65%);
    -webkit-mask-image: radial-gradient(ellipse at center, black 20%, transparent 65%);
  }

  .sondos-pp .logo-row {
    display: inline-flex; align-items: center; gap: 10px; margin-bottom: 24px;
  }
  .sondos-pp .logo-icon {
    width: 40px; height: 40px; background: var(--brand-deep); border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    color: white; font-weight: bold;
    box-shadow: 0 4px 16px rgba(90,24,154,0.3);
  }
  .sondos-pp .logo-name {
    font-family: 'Instrument Sans', sans-serif; font-size: 18px;
    font-weight: 800; color: var(--text-main);
  }
  .sondos-pp .page-title {
    font-family: 'Instrument Sans', sans-serif;
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700; color: var(--text-main); line-height: 1.1;
    margin-bottom: 20px; letter-spacing: -0.03em;
  }
  .sondos-pp .page-title .hi {
    background: linear-gradient(135deg, var(--brand-deep), var(--brand-light));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .sondos-pp .page-sub {
    font-size: 1.1rem; color: var(--text-muted); font-weight: 500; margin-bottom: 24px;
  }
  .sondos-pp .date-pill {
    display: inline-flex; align-items: center; gap: 7px;
    background: var(--bg-glass); backdrop-filter: blur(12px);
    border: 1px solid var(--border-glass);
    color: var(--brand-light); font-size: 11px; font-weight: 600;
    padding: 6px 16px; border-radius: 50px;
    box-shadow: 0 2px 10px rgba(124,58,237,0.1);
  }
  .sondos-pp .date-dot {
    width: 6px; height: 6px; border-radius: 50%; background: #22C55E; /* Vert */
  }

  /* --- CONTAINER --- */
  .sondos-pp .wrap {
    max-width: 820px; margin: 0 auto;
    padding: 0 24px; position: relative; z-index: 1;
  }

  /* --- GLASS CARDS (Intro, Disclaimer, Toc, Calls) --- */
  .sondos-pp .intro-box,
  .sondos-pp .disclaimer,
  .sondos-pp .toc,
  .sondos-pp .calls-box {
    background: var(--bg-glass);
    backdrop-filter: blur(20px);
    border: 1px solid var(--border-glass);
    border-radius: 24px;
    box-shadow: 0 4px 24px rgba(90,24,154,0.04);
    position: relative; overflow: hidden;
  }

  /* --- INTRO BOX --- */
  .sondos-pp .intro-box {
    padding: 40px; margin-bottom: 44px;
  }
  .sondos-pp .intro-box h2 {
    font-family: 'Instrument Sans', sans-serif; font-size: 1.5rem;
    font-weight: 700; color: var(--text-main); line-height: 1.3;
    margin-bottom: 16px;
  }
  .sondos-pp .intro-box h2 em {
    color: var(--brand-light); font-style: normal;
  }
  .sondos-pp .intro-box p {
    font-size: 0.95rem; color: var(--text-muted); line-height: 1.8;
  }
  .sondos-pp .intro-box ul { list-style: none; margin-top: 14px; }
  .sondos-pp .intro-box ul li {
    color: var(--text-main); font-size: 0.9rem;
    padding: 6px 0; display: flex; align-items: flex-start; gap: 9px;
  }
  .sondos-pp .intro-box ul li::before {
    content: '✦'; color: var(--brand-light); flex-shrink: 0; font-size: 10px; margin-top: 4px;
  }

  /* --- DISCLAIMER --- */
  .sondos-pp .disclaimer {
    padding: 16px 20px; margin-bottom: 40px;
    font-size: 0.85rem; color: var(--text-muted); line-height: 1.6;
    background: rgba(157,78,221,0.1); /* Fond légèrement plus violet */
    border-color: rgba(157,78,221,0.2);
  }
  .sondos-pp .disclaimer strong { color: var(--brand-deep); }

  /* --- TOC --- */
  .sondos-pp .toc {
    padding: 26px 30px; margin-bottom: 48px;
  }
  .sondos-pp .toc-title {
    font-size: 11px; font-weight: 700; letter-spacing: 2px;
    text-transform: uppercase; color: var(--brand-light); margin-bottom: 14px;
  }
  .sondos-pp .toc-list {
    list-style: none; display: grid;
    grid-template-columns: 1fr 1fr; gap: 7px 20px;
  }
  .sondos-pp .toc-list li a {
    color: var(--text-muted); text-decoration: none; font-size: 13px;
    transition: color .18s; display: flex; align-items: center; gap: 7px;
  }
  .sondos-pp .toc-list li a::before {
    content: '◆'; font-size: 5px; color: var(--brand-light); flex-shrink: 0;
  }
  .sondos-pp .toc-list li a:hover { color: var(--brand-deep); }

  /* --- SECTIONS --- */
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
    background: var(--brand-deep); color: white;
    font-family: 'Instrument Sans', sans-serif; font-size: 11px; font-weight: 800;
    width: 28px; height: 28px; border-radius: 8px;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0; margin-top: 3px;
  }
  .sondos-pp .sec-title {
    font-family: 'Instrument Sans', sans-serif; font-size: 1.3rem;
    font-weight: 700; color: var(--text-main); line-height: 1.3;
  }
  .sondos-pp .sec-body {
    padding-inline-start: 42px; font-size: 0.95rem;
    line-height: 1.9; color: #334155;
  }
  .sondos-pp .sec-body p { margin-bottom: 10px; }
  .sondos-pp .sec-body ul { list-style: none; margin: 9px 0; }
  .sondos-pp .sec-body ul li {
    padding: 6px 0; border-bottom: 1px solid rgba(90,24,154,0.08);
    display: flex; align-items: flex-start; gap: 9px; font-size: 0.94rem;
  }
  .sondos-pp .sec-body ul li::before {
    content: '—'; color: var(--brand-light); flex-shrink: 0; font-weight: 700;
  }
  .sondos-pp .sec-body ul li:last-child { border-bottom: none; }
  .sondos-pp .note {
    background: rgba(90,24,154,0.1);
    border-inline-start: 3px solid var(--brand-light);
    padding: 12px 16px; border-radius: 0 8px 8px 0;
    margin: 12px 0; font-size: 0.9rem; color: var(--brand-deep); line-height: 1.75;
  }
  .sondos-pp[dir="ltr"] .note { border-radius: 8px 0 0 8px; }

  /* --- CALLS BOX --- */
  .sondos-pp .calls-box {
    padding: 24px 28px; margin-top: 14px;
  }
  .sondos-pp .calls-badge {
    display: inline-flex; align-items: center; gap: 6px;
    background: rgba(90,24,154,0.08); border: 1px solid var(--border-glass);
    color: var(--brand-deep); font-size: 10px; font-weight: 700;
    padding: 4px 12px; border-radius: 20px; margin-bottom: 13px;
    letter-spacing: 1px; text-transform: uppercase;
  }
  .sondos-pp .calls-box ul { list-style: none; }
  .sondos-pp .calls-box ul li {
    font-size: 0.9rem; color: var(--text-main); padding: 6px 0;
    border-bottom: 1px solid rgba(90,24,154,0.08);
    display: flex; align-items: flex-start; gap: 9px;
  }
  .sondos-pp .calls-box ul li::before {
    content: '✓'; color: #22C55E; font-weight: 800; flex-shrink: 0;
  }
  .sondos-pp .calls-box ul li:last-child { border-bottom: none; }
  .sondos-pp .calls-note {
    background: var(--bg); color: var(--text-main);
    border-radius: 9px; padding: 12px 16px; margin-top: 14px;
    font-size: 0.88rem; line-height: 1.7; border: 1px solid var(--border-glass);
  }
  .sondos-pp .calls-note strong { color: var(--brand-deep); }

  .sondos-pp hr.rule {
    border: none; border-top: 1px solid rgba(90,24,154,0.1); margin: 34px 0;
  }

  /* --- CONTACT CARD --- */
  .sondos-pp .contact-card {
    background: linear-gradient(135deg, var(--brand-deep), var(--brand-light));
    color: white; border-radius: 18px;
    padding: 36px; margin-top: 44px; position: relative; overflow: hidden;
    box-shadow: 0 20px 40px rgba(90,24,154,0.25);
  }
  .sondos-pp .contact-card::before {
    content: ''; position: absolute; inset: 0;
    background: radial-gradient(ellipse 70% 70% at 0% 0%, rgba(255,255,255,0.1), transparent 60%);
  }
  .sondos-pp .contact-card h3 {
    font-family: 'Instrument Sans', sans-serif; font-size: 1.2rem;
    font-weight: 700; color: #fff; margin-bottom: 12px; position: relative;
  }
  .sondos-pp .contact-card p {
    font-size: 0.9rem; color: rgba(255,255,255,.9); line-height: 2; position: relative;
  }
  .sondos-pp .contact-card a { color: #fff; text-decoration: underline; font-weight: 600;}

  /* --- CLOSING --- */
  .sondos-pp .closing { text-align: center; padding: 52px 0 16px; }
  .sondos-pp .closing .orn {
    color: var(--brand-light); font-size: 16px; letter-spacing: 4px;
    margin-bottom: 16px; opacity: .5;
  }
  .sondos-pp .closing p {
    font-family: 'Instrument Sans', sans-serif; font-size: 1.1rem;
    font-weight: 700; color: var(--text-main); line-height: 1.65;
    max-width: 520px; margin: 0 auto;
  }
  .sondos-pp .closing p em { color: var(--brand-light); font-style: normal; }

  /* --- ANIMATIONS --- */
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

  @media(max-width:540px){
    .sondos-pp .toc-list { grid-template-columns: 1fr; }
    .sondos-pp .intro-box { padding: 24px 20px; }
    .sondos-pp .wrap { padding: 0 16px 60px; }
    .sondos-pp .sec-body { padding-left: 0; margin-top: 12px; }
    .sondos-pp .sec-head { flex-direction: column; align-items: flex-start; gap: 8px; }
    .sondos-pp header { padding-top: 60px; }
  }
`;

/* ─── Helpers ─── */

/** Renders a translated string, converting **text** to <strong>text</strong> */
function T({ k, className }: { k: string; className?: string }) {
  const { t } = useLanguage();
  const raw = t(k);
  const parts = raw.split(/(\*\*[^*]+\*\*)/g);
  const el = (
    <>
      {parts.map((p, i) => {
        if (p.startsWith("**") && p.endsWith("**")) {
          return <strong key={i}>{p.slice(2, -2)}</strong>;
        }
        return <React.Fragment key={i}>{p}</React.Fragment>;
      })}
    </>
  );
  return className ? <span className={className}>{el}</span> : <>{el}</>;
}

/* ─── Section config type ─── */
interface ListItem {
  titleKey?: string;
  textKey: string;
}

interface SectionConfig {
  titleKey: string;
  paragraphs?: string[];
  list?: ListItem[];
  note?: string;
  callBox?: {
    badgeKey: string;
    items: string[];
    noteStrongKey?: string;
    noteKey: string;
  };
}

/* ─── Sections definition (same for both languages) ─── */
const SECTIONS: SectionConfig[] = [
  {
    titleKey: "pp.sec1.title",
    paragraphs: ["pp.sec1.p1", "pp.sec1.p2"],
  },
  {
    titleKey: "pp.sec2.title",
    paragraphs: ["pp.sec2.p1"],
    list: [
      { titleKey: "pp.sec2.list1_title", textKey: "pp.sec2.list1" },
      { titleKey: "pp.sec2.list2_title", textKey: "pp.sec2.list2" },
      { titleKey: "pp.sec2.list3_title", textKey: "pp.sec2.list3" },
      { titleKey: "pp.sec2.list4_title", textKey: "pp.sec2.list4" },
      { titleKey: "pp.sec2.list5_title", textKey: "pp.sec2.list5" },
    ],
    note: "pp.sec2.note",
  },
  {
    titleKey: "pp.sec3.title",
    paragraphs: ["pp.sec3.p1"],
    list: [
      { textKey: "pp.sec3.list1" },
      { textKey: "pp.sec3.list2" },
      { textKey: "pp.sec3.list3" },
      { textKey: "pp.sec3.list4" },
      { textKey: "pp.sec3.list5" },
      { textKey: "pp.sec3.list6" },
      { textKey: "pp.sec3.list7" },
    ],
    note: "pp.sec3.note",
  },
  {
    titleKey: "pp.sec4.title",
    paragraphs: ["pp.sec4.p1"],
    callBox: {
      badgeKey: "pp.sec4.badge",
      items: ["pp.sec4.list1", "pp.sec4.list2", "pp.sec4.list3", "pp.sec4.list4"],
      noteStrongKey: "pp.sec4.note_strong",
      noteKey: "pp.sec4.note",
    },
  },
  {
    titleKey: "pp.sec5.title",
    paragraphs: ["pp.sec5.p1"],
    list: [
      { titleKey: "pp.sec5.list1_title", textKey: "pp.sec5.list1" },
      { titleKey: "pp.sec5.list2_title", textKey: "pp.sec5.list2" },
      { titleKey: "pp.sec5.list3_title", textKey: "pp.sec5.list3" },
      { titleKey: "pp.sec5.list4_title", textKey: "pp.sec5.list4" },
    ],
    note: "pp.sec5.note",
  },
  {
    titleKey: "pp.sec6.title",
    paragraphs: ["pp.sec6.p1"],
    list: [
      { textKey: "pp.sec6.list1" },
      { textKey: "pp.sec6.list2" },
      { textKey: "pp.sec6.list3" },
    ],
    note: "pp.sec6.note",
  },
  {
    titleKey: "pp.sec7.title",
    paragraphs: ["pp.sec7.p1"],
    list: [
      { titleKey: "pp.sec7.list1_title", textKey: "pp.sec7.list1" },
      { titleKey: "pp.sec7.list2_title", textKey: "pp.sec7.list2" },
      { titleKey: "pp.sec7.list3_title", textKey: "pp.sec7.list3" },
      { titleKey: "pp.sec7.list4_title", textKey: "pp.sec7.list4" },
      { titleKey: "pp.sec7.list5_title", textKey: "pp.sec7.list5" },
    ],
    note: "pp.sec7.note",
  },
  {
    titleKey: "pp.sec8.title",
    paragraphs: ["pp.sec8.p1"],
  },
  {
    titleKey: "pp.sec9.title",
    paragraphs: ["pp.sec9.p1"],
  },
  {
    titleKey: "pp.sec10.title",
    paragraphs: ["pp.sec10.p1"],
  },
  {
    titleKey: "pp.sec11.title",
    paragraphs: ["pp.sec11.p1"],
  },
  {
    titleKey: "pp.sec12.title",
    paragraphs: ["pp.sec12.p1"],
  },
];

const AR_NUMS = ["١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", "١٠", "١١", "١٢"];

/* ─── Section Component with IntersectionObserver ─── */
function Section({
  id,
  num,
  titleKey,
  config,
}: {
  id: string;
  num: string;
  titleKey: string;
  config: SectionConfig;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) el.classList.add("vis");
      },
      { threshold: 0.07 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="sec" id={id} ref={ref}>
      <div className="sec-head">
        <div className="sec-num">{num}</div>
        <h2 className="sec-title">
          <T k={titleKey} />
        </h2>
      </div>
      <div className="sec-body">
        {config.paragraphs?.map((pk) => (
          <p key={pk}>
            <T k={pk} />
          </p>
        ))}

        {config.list && (
          <ul>
            {config.list.map((item, i) => (
              <li key={i}>
                {item.titleKey && (
                  <>
                    <strong>
                      <T k={item.titleKey} />
                    </strong>
                    {": "}
                  </>
                )}
                <T k={item.textKey} />
              </li>
            ))}
          </ul>
        )}

        {config.callBox && (
          <div className="calls-box">
            <div className="calls-badge">
              <T k={config.callBox.badgeKey} />
            </div>
            <ul>
              {config.callBox.items.map((itemKey, i) => (
                <li key={i}>
                  <T k={itemKey} />
                </li>
              ))}
            </ul>
            <div className="calls-note">
              🔐{" "}
              {config.callBox.noteStrongKey && (
                <strong>
                  <T k={config.callBox.noteStrongKey} />
                </strong>
              )}{" "}
              <T k={config.callBox.noteKey} />
            </div>
          </div>
        )}

        {config.note && (
          <div className="note">
            <T k={config.note} />
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── MAIN COMPONENT ─── */
export default function SondosPrivacyPolicy() {
  const { lang, t } = useLanguage();
  const isAr = lang === "ar";
  const nums = isAr
    ? AR_NUMS
    : SECTIONS.map((_, i) => String(i + 1));

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
    <div className="sondos-pp" dir={isAr ? "rtl" : "ltr"}>
      {/* blobs */}
      <div className="blob blob1" />
      <div className="blob blob2" />
      <div className="blob blob3" />

      {/* ── HEADER ── */}
      <header>
        <h1 className="page-title anim-2">
          <span className="hi">
            <T k="pp.title" />
          </span>
        </h1>
        <p className="page-sub anim-3">
          <T k="pp.subtitle" />
        </p>
        <div className="date-pill anim-4">
          <span className="date-dot" />
          <T k="pp.date" />
        </div>
      </header>

      {/* ── WRAP ── */}
      <div className="wrap">
        {/* ── INTRO BOX ── */}
        <div className="intro-box anim-5">
          <h2>
            <T k="pp.intro.line1" />
            <br />
            <em>
              <T k="pp.intro.highlight" />
            </em>
          </h2>
          <p>
            <T k="pp.intro.desc" />
          </p>
          <ul>
            <li>
              <T k="pp.intro.list1" />
            </li>
            <li>
              <T k="pp.intro.list2" />
            </li>
            <li>
              <T k="pp.intro.list3" />
            </li>
          </ul>
        </div>

        {/* ── DISCLAIMER ── */}
        <div className="disclaimer anim-6">
          <T k="pp.disclaimer" />
        </div>

        {/* ── TABLE OF CONTENTS ── */}
        <nav className="toc anim-7">
          <div className="toc-title">
            <T k="pp.toc_title" />
          </div>
          <ul className="toc-list">
            {SECTIONS.map((s, i) => (
              <li key={s.titleKey}>
                <a href={`#pp-${nums[i]}`}>
                  {nums[i]}. <T k={s.titleKey} />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── SECTIONS ── */}
        {SECTIONS.map((s, i) => (
          <React.Fragment key={s.titleKey}>
            <Section
              id={`pp-${nums[i]}`}
              num={nums[i]}
              titleKey={s.titleKey}
              config={s}
            />
            {i < SECTIONS.length - 1 && <hr className="rule" />}
          </React.Fragment>
        ))}

        {/* ── CONTACT CARD ── */}
        <div className="contact-card">
          <h3>
            <T k="pp.contact.title" />
          </h3>
          <p>
            📩{" "}
            <T k="pp.contact.email_label" />
            :{" "}
            <a href="mailto:info@sondos-ai.com">info@sondos-ai.com</a>
            <br />
            🌐{" "}
            <T k="pp.contact.website_label" />
            :{" "}
            <a href="https://sondos-ai.com">sondos-ai.com</a>
            <br />
            📍{" "}
            <T k="pp.contact.location_label" />
            :{" "}
            <T k="pp.contact.location" />
          </p>
        </div>

        {/* ── CLOSING ── */}
        <div className="closing">
          <div className="orn">✦ ✦ ✦</div>
          <p>
            <T k="pp.closing.line1" />
            <br />
            <em>
              <T k="pp.closing.line2" />
            </em>
          </p>
        </div>
      </div>
    </div>
  );
}