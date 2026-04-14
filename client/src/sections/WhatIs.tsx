"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Brain, Sparkles, BarChart3, Shield, Bot, Zap } from "lucide-react";

const CSS = `
  .whatis-root {
    font-family: 'din-next-lt-arabic-b4fd9f01e2', sans-serif;
    padding: 96px 24px;
  }
  .whatis-wrap {
    max-width: 1280px;
    margin: 0 auto;
  }
  .whatis-head {
    text-align: center;
    margin-bottom: 56px;
  }
  .whatis-tag {
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
  .whatis-tag::before {
    content: '';
    width: 24px;
    height: 2px;
    border-radius: 999px;
    background: linear-gradient(90deg, #672D92, #7f47ac);
    display: inline-block;
  }
  .whatis-title {
    font-family: 'din-next-lt-arabic-b4fd9f01e2', sans-serif;
    font-size: clamp(1.8rem, 3.5vw, 2.8rem);
    font-weight: 800;
    line-height: 1.15;
    color: #0a0a0a;
    margin-bottom: 14px;
    white-space: nowrap;
  }
  .whatis-desc {
    font-size: 1rem;
    font-weight: 500;
    color: #4a3a62;
    line-height: 1.85;
    max-width: 520px;
    margin: 0 auto;
  }
  .whatis-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }
  .whatis-card {
    background: rgba(255,255,255,0.85);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border: 1px solid rgba(103,45,146,0.1);
    border-radius: 24px;
    padding: 32px 28px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  }
  .whatis-icon-wrap {
    width: 48px;
    height: 48px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    background: rgba(103,45,146,0.06);
    color: #672D92;
  }
  .whatis-card-title {
    font-size: 1.1rem;
    font-weight: 700;
    color: #1a0a2e;
    margin-bottom: 8px;
  }
  .whatis-card-desc {
    font-size: 0.9rem;
    color: #4a3a62;
    line-height: 1.7;
  }

  @media (max-width: 900px) {
    .whatis-grid { grid-template-columns: 1fr; }
    .whatis-title { white-space: normal; }
  }
  @media (min-width: 901px) and (max-width: 1024px) {
    .whatis-grid { grid-template-columns: repeat(2, 1fr); }
  }
`;

export default function WhatIs() {
  const { t, lang } = useLanguage();

  const features = [
    { icon: Brain, title: t("whatis.f1_title"), desc: t("whatis.f1_desc") },
    { icon: Sparkles, title: t("whatis.f2_title"), desc: t("whatis.f2_desc") },
    { icon: BarChart3, title: t("whatis.f3_title"), desc: t("whatis.f3_desc") },
    { icon: Bot, title: t("whatis.f4_title"), desc: t("whatis.f4_desc") },
    { icon: Shield, title: t("whatis.f5_title"), desc: t("whatis.f5_desc") },
    { icon: Zap, title: t("whatis.f6_title"), desc: t("whatis.f6_desc") },
  ];

  return (
    <>
      <style>{CSS}</style>

      <section
        id="whatis"
        className="whatis-root"
        dir={lang === "ar" ? "rtl" : "ltr"}
        data-testid="section-whatis"
      >
        <div className="whatis-wrap">
          <div className="whatis-head">
            <div className="whatis-tag">{t("whatis.label")}</div>
            <h2 className="whatis-title">{t("whatis.title")}</h2>
            <p className="whatis-desc">{t("whatis.desc")}</p>
          </div>

          <div className="whatis-grid">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="whatis-card">
                  <div className="whatis-icon-wrap">
                    <Icon size={24} />
                  </div>
                  <h3 className="whatis-card-title">{f.title}</h3>
                  <p className="whatis-card-desc">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}