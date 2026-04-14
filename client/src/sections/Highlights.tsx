"use client";

import { useLanguage } from "@/context/LanguageContext";
import { TrendingDown, Clock, Zap, Target } from "lucide-react";

const CSS = `
  .hl-root {
    font-family: 'din-next-lt-arabic-b4fd9f01e2', sans-serif;
    padding: 96px 24px;
  }
  .hl-wrap {
    max-width: 1280px;
    margin: 0 auto;
  }
  .hl-head {
    text-align: center;
    margin-bottom: 56px;
  }
  .hl-tag {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: #672D92;
    margin-bottom: 16px;
  }
  .hl-tag::before {
    content: '';
    width: 24px;
    height: 2px;
    border-radius: 999px;
    background: linear-gradient(90deg, #672D92, #7f47ac);
    display: inline-block;
  }
  .hl-title {
    font-family: 'din-next-lt-arabic-b4fd9f01e2', sans-serif;
    font-size: clamp(1.8rem, 3.5vw, 2.8rem);
    font-weight: 800;
    line-height: 1.15;
    color: #0a0a0a;
    white-space: nowrap;
  }
  .hl-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }
  .hl-card {
    background: rgba(255,255,255,0.85);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border: 1px solid rgba(103,45,146,0.1);
    border-radius: 24px;
    padding: 32px 24px;
    text-align: center;
    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  }
  .hl-icon-wrap {
    width: 48px;
    height: 48px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
  }
  .hl-card-title {
    font-size: 1.05rem;
    font-weight: 700;
    color: #1a0a2e;
    margin-bottom: 8px;
  }
  .hl-card-desc {
    font-size: 0.88rem;
    color: #4a3a62;
    line-height: 1.7;
  }

  @media (max-width: 900px) {
    .hl-grid { grid-template-columns: repeat(2, 1fr); }
    .hl-title { white-space: normal; }
  }
  @media (max-width: 500px) {
    .hl-grid { grid-template-columns: 1fr; }
  }
`;

export default function Highlights() {
  const { t, lang } = useLanguage();

  const items = [
    {
      icon: TrendingDown,
      title: t("highlights.h1_title"),
      desc: t("highlights.h1_desc"),
      bg: "rgba(0,214,143,0.08)",
      color: "#00d68f",
    },
    {
      icon: Clock,
      title: t("highlights.h2_title"),
      desc: t("highlights.h2_desc"),
      bg: "rgba(79,172,254,0.08)",
      color: "#4facfe",
    },
    {
      icon: Zap,
      title: t("highlights.h3_title"),
      desc: t("highlights.h3_desc"),
      bg: "rgba(255,169,64,0.08)",
      color: "#ffa940",
    },
    {
      icon: Target,
      title: t("highlights.h4_title"),
      desc: t("highlights.h4_desc"),
      bg: "rgba(103,45,146,0.06)",
      color: "#672D92",
    },
  ];

  return (
    <>
      <style>{CSS}</style>

      <section
        id="highlights"
        className="hl-root"
        dir={lang === "ar" ? "rtl" : "ltr"}
        data-testid="section-highlights"
      >
        <div className="hl-wrap">
          <div className="hl-head">
            <div className="hl-tag">{t("highlights.label")}</div>
            <h2 className="hl-title">{t("highlights.title")}</h2>
          </div>

          <div className="hl-grid">
            {items.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="hl-card">
                  <div
                    className="hl-icon-wrap"
                    style={{ background: item.bg, color: item.color }}
                  >
                    <Icon size={24} />
                  </div>
                  <h3 className="hl-card-title">{item.title}</h3>
                  <p className="hl-card-desc">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}