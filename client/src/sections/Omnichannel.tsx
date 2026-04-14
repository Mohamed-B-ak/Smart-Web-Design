"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Phone, MessageCircle, Mail, Share2 } from "lucide-react";

const CSS = `
  .omni-root {
    font-family: 'din-next-lt-arabic-b4fd9f01e2', sans-serif;
    padding: 96px 24px;
  }
  .omni-wrap {
    max-width: 1100px;
    margin: 0 auto;
  }
  .omni-head {
    text-align: center;
    margin-bottom: 56px;
  }
  
  /* Style dyal l'tag fo9 ( exact mn WhatIs ) */
  .omni-tag {
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
  .omni-tag::before {
    content: '';
    width: 24px;
    height: 2px;
    border-radius: 999px;
    background: linear-gradient(90deg, #672D92, #7f47ac);
    display: inline-block;
  }

  /* Style dyal title ( exact mn WhatIs ) */
  .omni-title {
    font-family: 'din-next-lt-arabic-b4fd9f01e2', sans-serif;
    font-size: clamp(1.8rem, 3.5vw, 2.8rem);
    font-weight: 800;
    line-height: 1.15;
    color: #0a0a0a;
    margin-bottom: 14px;
  }
  
  /* Style dyal description */
  .omni-desc {
    font-size: 1rem;
    font-weight: 500;
    color: #4a3a62;
    line-height: 1.85;
    max-width: 580px;
    margin: 0 auto;
  }

  .omni-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }

  /* Style dyal l carte ( Glassmorphism mn WhatIs ) */
  .omni-card {
    background: rgba(255,255,255,0.85);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border: 1px solid rgba(90,24,154,0.1); /* Les couleurs dyal l'border sghira homa li kanou */
    border-radius: 24px;
    padding: 32px 28px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
    text-align: center;
    transition: all 0.5s ease;
  }
  .omni-card:hover {
    border-color: rgba(90,24,154,0.25);
    box-shadow: 0 12px 40px rgba(90,24,154,0.1);
    transform: translateY(-4px);
  }

  /* Style dyal l'icon ( exact mn WhatIs ) */
  .omni-icon-wrap {
    width: 48px;
    height: 48px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    transition: transform 0.3s ease;
  }
  .omni-card:hover .omni-icon-wrap {
    transform: scale(1.1);
  }

  /* Style dial texte */
  .omni-label {
    font-size: 1.1rem;
    font-weight: 700;
    color: #1a0a2e;
    margin-bottom: 12px;
  }

  /* Style dial progress bar */
  .omni-bar-bg {
    width: 100%;
    height: 8px;
    background: rgba(0,0,0,0.04); /* Loun khafif li kan */
    border-radius: 999px;
    overflow: hidden;
    margin-bottom: 8px;
  }
  .omni-bar-fill {
    height: 100%;
    border-radius: 999px;
    transition: width 1s ease;
  }
  .omni-pct {
    font-size: 13px;
    color: #8878a0; /* Loun dyal 100% li kan */
  }

  @media (max-width: 1023px) {
    .omni-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 639px) {
    .omni-grid { grid-template-columns: 1fr; }
  }
`;

export default function Omnichannel() {
  // Zidt "lang" bach t5dem l RTL
  const { t, lang } = useLanguage();

  // LES COULEURS TLEQAW KIMA HOMA (Orange, Vert, Bleu, Violet)
  const channels = [
    { icon: Phone, label: t("omni.voice"), color: "#5a189a", pct: 100 },
    { icon: MessageCircle, label: t("omni.chat"), color: "#00d68f", pct: 100 },
    { icon: Mail, label: t("omni.email"), color: "#4facfe", pct: 100 },
    { icon: Share2, label: t("omni.social"), color: "#ffa940", pct: 100 },
  ];

  return (
    <>
      <style>{CSS}</style>

      <section
        className="omni-root"
        dir={lang === "ar" ? "rtl" : "ltr"}
        data-testid="section-omnichannel"
      >
        <div className="omni-wrap">
          
          <div className="omni-head">
            <div className="omni-tag">{t("omni.label")}</div>
            <h2 className="omni-title">{t("omni.title")}</h2>
            <p className="omni-desc">{t("omni.desc")}</p>
          </div>

          <div className="omni-grid">
            {channels.map((ch, i) => {
              const Icon = ch.icon;
              return (
                <div key={i} className="omni-card">
                  {/* Icon khdam b loun dyalo bla ma ytbaddel (inline style) */}
                  <div
                    className="omni-icon-wrap"
                    style={{ backgroundColor: `${ch.color}15` }}
                  >
                    <Icon
                      size={24}
                      style={{ color: ch.color }}
                    />
                  </div>
                  
                  <p className="omni-label">{ch.label}</p>
                  
                  {/* Progress bar khdam b loun dyalo bla ma ytbaddel */}
                  <div className="omni-bar-bg">
                    <div
                      className="omni-bar-fill"
                      style={{ width: `${ch.pct}%`, backgroundColor: ch.color }}
                    />
                  </div>
                  
                  <p className="omni-pct">{ch.pct}%</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}