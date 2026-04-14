"use client";

import { useLanguage } from '@/context/LanguageContext';
import { GitBranch, Heart, Globe, Link2, FileText, Brain } from 'lucide-react';

const CSS = `
  .feat-root {
    font-family: 'din-next-lt-arabic-b4fd9f01e2', sans-serif;
    padding: 96px 24px;
  }
  .feat-wrap {
    max-width: 1280px;
    margin: 0 auto;
  }
  .feat-head {
    text-align: center;
    margin-bottom: 56px;
  }
  .feat-tag {
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
  .feat-tag::before {
    content: '';
    width: 24px;
    height: 2px;
    border-radius: 999px;
    background: linear-gradient(90deg, #672D92, #7f47ac);
    display: inline-block;
  }
  .feat-title {
    font-family: 'din-next-lt-arabic-b4fd9f01e2', sans-serif;
    font-size: clamp(1.8rem, 3.5vw, 2.8rem);
    font-weight: 800;
    line-height: 1.15;
    color: #0a0a0a;
    white-space: nowrap;
  }
  .feat-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }
  .feat-card {
    display: flex;
    align-items: center;
    gap: 16px;
    background: rgba(255,255,255,0.85);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border-radius: 16px;
    padding: 20px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  }
  .feat-icon {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: rgba(103,45,146,0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: #672D92;
  }
  .feat-label {
    font-size: 0.92rem;
    font-weight: 500;
    color: #1a0a2e;
  }

  @media (max-width: 900px) {
    .feat-grid { grid-template-columns: repeat(2, 1fr); }
    .feat-title { white-space: normal; }
  }
  @media (max-width: 500px) {
    .feat-grid { grid-template-columns: 1fr; }
  }
`;

export default function Features() {
  const { t, lang } = useLanguage();

  const features = [
    { icon: GitBranch, label: t('features.f1') },
    { icon: Heart, label: t('features.f2') },
    { icon: Globe, label: t('features.f3') },
    { icon: Link2, label: t('features.f4') },
    { icon: FileText, label: t('features.f5') },
    { icon: Brain, label: t('features.f6') },
  ];

  return (
    <>
      <style>{CSS}</style>

      <section
        id="features"
        className="feat-root"
        dir={lang === "ar" ? "rtl" : "ltr"}
        data-testid="section-features"
      >
        <div className="feat-wrap">
          <div className="feat-head">
            <div className="feat-tag">{t('features.label')}</div>
            <h2 className="feat-title">{t('features.title')}</h2>
          </div>

          <div className="feat-grid">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="feat-card">
                  <div className="feat-icon">
                    <Icon size={20} />
                  </div>
                  <span className="feat-label">{f.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}