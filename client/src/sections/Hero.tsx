"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, ArrowLeft, Sparkles } from "lucide-react";

const CSS = `
  @keyframes wave {
    0%, 100% { transform: scaleY(1); }
    50% { transform: scaleY(0.6); }
  }

  .hero-root {
    font-family: 'din-next-lt-arabic-b4fd9f01e2', sans-serif;
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 140px 32px 80px;
    overflow: hidden;
    background: #f8f6fb;
  }
  .hero-grid-bg {
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;
    background-image:
      linear-gradient(rgba(103,45,146,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(103,45,146,0.04) 1px, transparent 1px);
    background-size: 60px 60px;
    mask-image: radial-gradient(ellipse at center, black 20%, transparent 65%);
    -webkit-mask-image: radial-gradient(ellipse at center, black 20%, transparent 65%);
  }
  .hero-glow {
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(103,45,146,0.15) 0%, transparent 70%);
  }
  .hero-content {
    position: relative;
    z-index: 10;
    max-width: 820px;
    margin: 0 auto;
    margin-bottom: 48px;
  }
  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: rgba(103,45,146,0.08);
    border: 1px solid rgba(103,45,146,0.2);
    border-radius: 999px;
    padding: 10px 22px;
    margin-bottom: 36px;
    font-size: 0.8rem;
    font-weight: 600;
    color: #672D92;
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
  }
  .hero-badge-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #00d68f;
  }
  .hero-h1 {
    font-size: clamp(2.4rem, 5.5vw, 4.2rem);
    font-weight: 800;
    line-height: 1.15;
    letter-spacing: -0.02em;
    color: #672D92;
    margin-bottom: 20px;
  }
  .hero-sub {
    font-size: clamp(1rem, 1.8vw, 1.15rem);
    font-weight: 600;
    color: #1a0a2e;
    max-width: 580px;
    margin: 0 auto 12px;
    line-height: 1.85;
  }
  .hero-desc {
    font-size: clamp(0.88rem, 1.6vw, 1rem);
    color: #4a3a62;
    max-width: 680px;
    margin: 0 auto 40px;
    line-height: 1.85;
  }
  .hero-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: linear-gradient(135deg, #672D92, #7f47ac);
    color: white;
    padding: 16px 36px;
    border-radius: 999px;
    font-weight: 700;
    font-size: 0.95rem;
    text-decoration: none;
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 20px rgba(103,45,146,0.35);
    font-family: inherit;
  }

  .hero-dashboard {
    position: relative;
    z-index: 10;
    max-width: 1060px;
    width: 100%;
    margin: 0 auto;
    border-radius: 24px;
    overflow: hidden;
    border: 1px solid rgba(103,45,146,0.15);
    background: rgba(255,255,255,0.85);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    box-shadow: 0 0 100px rgba(103,45,146,0.12), 0 40px 80px rgba(0,0,0,0.08);
  }
  .hero-dashboard-inner {
    padding: 28px 32px;
  }
  @media (min-width: 768px) {
    .hero-dashboard-inner { padding: 36px 40px; }
  }
  .hero-dots {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 28px;
  }
  .hero-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
  .hero-dot-r { background: #ff6b6b; }
  .hero-dot-y { background: #ffa940; }
  .hero-dot-g { background: #00d68f; }
  .hero-dots-label {
    font-size: 0.72rem;
    color: #8878a0;
    margin-left: 8px;
    font-family: monospace;
  }
  .hero-stats-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
  }
  @media (min-width: 768px) {
    .hero-stats-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; }
  }
  .hero-stat-card {
    background: rgba(103,45,146,0.06);
    border: 1px solid rgba(103,45,146,0.1);
    border-radius: 16px;
    padding: 24px;
  }
  .hero-stat-label {
    font-size: 0.72rem;
    color: #8878a0;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin-bottom: 8px;
  }
  .hero-stat-val {
    font-size: 2rem;
    font-weight: 800;
    color: #1a0a2e;
    line-height: 1;
    margin-bottom: 6px;
  }
  .hero-stat-change {
    font-size: 0.8rem;
    color: #00d68f;
    font-weight: 600;
  }
  .hero-bars {
    display: flex;
    align-items: flex-end;
    gap: 3px;
    height: 90px;
    margin-top: 32px;
  }
  .hero-bar {
    flex: 1;
    border-radius: 3px 3px 0 0;
    background: linear-gradient(to top, rgba(103,45,146,0.6), rgba(127,71,172,0.25));
    transform-origin: bottom;
    animation: wave 1.4s ease-in-out infinite;
  }
`;

export default function Hero() {
  const { lang, t } = useLanguage();

  const bars = [40, 58, 35, 72, 50, 85, 68, 60, 88, 45, 78, 70, 92, 100, 55, 75, 62, 90, 48, 82];

  return (
    <>
      <style>{CSS}</style>

      <section className="hero-root" data-testid="section-hero">
        <div className="hero-glow" />
        <div className="hero-grid-bg" />

        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles style={{ width: 14, height: 14, color: "#672D92" }} />
            <span className="hero-badge-dot" />
            {t("hero.badge")}
          </div>

          <h1
            className="hero-h1"
            style={{ fontFamily: "'din-next-lt-arabic-b4fd9f01e2', sans-serif" }}
          >
            {t("hero.title_new")}
          </h1>

          <p className="hero-sub">{t("hero.subtitle_new")}</p>

          <p className="hero-desc">{t("hero.desc")}</p>

          <a href="/demo" className="hero-btn" data-testid="button-hero-book">
            {t("hero.cta_book")}
            {lang === "en" ? (
              <ArrowRight style={{ width: 16, height: 16 }} />
            ) : (
              <ArrowLeft style={{ width: 16, height: 16 }} />
            )}
          </a>
        </div>

        <div className="hero-dashboard">
          <div className="hero-dashboard-inner">
            <div className="hero-dots">
              <span className="hero-dot hero-dot-r" />
              <span className="hero-dot hero-dot-y" />
              <span className="hero-dot hero-dot-g" />
              <span className="hero-dots-label">sondos-ai-dashboard</span>
            </div>

            <div className="hero-stats-grid">
              <div className="hero-stat-card">
                <p className="hero-stat-label">
                  {lang === "en" ? "Active Calls" : "مكالمات نشطة"}
                </p>
                <p className="hero-stat-val">1,247</p>
                <p className="hero-stat-change">+12.5%</p>
              </div>

              <div className="hero-stat-card">
                <p className="hero-stat-label">
                  {lang === "en" ? "Resolution Rate" : "نسبة الحل"}
                </p>
                <p className="hero-stat-val">94.8%</p>
                <p className="hero-stat-change">+3.2%</p>
              </div>

              <div className="hero-stat-card">
                <p className="hero-stat-label">
                  {lang === "en" ? "Avg Response" : "متوسط الاستجابة"}
                </p>
                <p className="hero-stat-val">0.8s</p>
                <p className="hero-stat-change">-15%</p>
              </div>
            </div>

            <div className="hero-bars">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className="hero-bar"
                  style={{ height: `${h}%`, animationDelay: `${i * 0.08}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}