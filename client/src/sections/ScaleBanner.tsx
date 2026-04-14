"use client";

import { useLanguage } from '@/context/LanguageContext';

const CSS = `
  .scale-root {
    font-family: 'din-next-lt-arabic-b4fd9f01e2', sans-serif;
    padding: 80px 24px;
  }
  .scale-wrap {
    max-width: 1280px;
    margin: 0 auto;
    text-align: center;
  }
  .scale-title {
    font-family: 'din-next-lt-arabic-b4fd9f01e2', sans-serif;
    font-size: clamp(1.8rem, 3.5vw, 2.8rem);
    font-weight: 800;
    line-height: 1.15;
    color: #0a0a0a;
    margin-bottom: 12px;
    white-space: nowrap;
  }
  .scale-sub {
    font-size: 1rem;
    font-weight: 500;
    color: #4a3a62;
    line-height: 1.85;
    margin-bottom: 56px;
  }
  .scale-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }
  .scale-card {
    background: rgba(255,255,255,0.85);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border: 1px solid rgba(103,45,146,0.1);
    border-radius: 24px;
    padding: 32px 28px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  }
  .scale-val {
    font-size: clamp(2.5rem, 4vw, 3.5rem);
    font-weight: 600;
    color: #672D92;
    line-height: 1;
    margin-bottom: 8px;
    letter-spacing: -1px;
  }
  .scale-label {
    font-size: 0.85rem;
    color: #8878a0;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    .scale-grid { grid-template-columns: repeat(2, 1fr); }
    .scale-title { white-space: normal; }
  }
`;

export default function ScaleBanner() {
  const { t, lang } = useLanguage();

  const stats = [
    { value: '10M+', label: t('scale.calls') },
    { value: '40+', label: t('scale.languages') },
    { value: '99.9%', label: t('scale.uptime') },
    { value: '98%', label: t('scale.satisfaction') },
  ];

  return (
    <>
      <style>{CSS}</style>

      <section
        className="scale-root"
        dir={lang === "ar" ? "rtl" : "ltr"}
        data-testid="section-scale-banner"
      >
        <div className="scale-wrap">
          <h2 className="scale-title">{t('scale.title')}</h2>
          <p className="scale-sub">{t('scale.subtitle')}</p>

          <div className="scale-grid">
            {stats.map((stat, i) => (
              <div key={i} className="scale-card">
                <p className="scale-val">{stat.value}</p>
                <p className="scale-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}