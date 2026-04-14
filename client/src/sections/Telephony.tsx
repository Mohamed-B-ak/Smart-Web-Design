"use client";

import { useLanguage } from '@/context/LanguageContext';
import { Cloud, Server, Wifi, Radio } from 'lucide-react';

const CSS = `
  .tele-root {
    font-family: 'din-next-lt-arabic-b4fd9f01e2', sans-serif;
    padding: 96px 24px;
  }
  .tele-wrap {
    max-width: 1100px;
    margin: 0 auto;
  }
  .tele-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: center;
  }
  
  /* Text Section Styles (Exact mn WhatIs) */
  .tele-tag {
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
  .tele-tag::before {
    content: '';
    width: 24px;
    height: 2px;
    border-radius: 999px;
    background: linear-gradient(90deg, #672D92, #7f47ac);
    display: inline-block;
  }
  .tele-title {
    font-family: 'din-next-lt-arabic-b4fd9f01e2', sans-serif;
    font-size: clamp(1.8rem, 3.5vw, 2.8rem);
    font-weight: 800;
    line-height: 1.15;
    color: #0a0a0a;
    margin-bottom: 14px;
  }
  .tele-desc {
    font-size: 1rem;
    font-weight: 500;
    color: #4a3a62;
    line-height: 1.85;
    margin-bottom: 32px;
  }

  /* Features List Styles */
  .tele-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .tele-item {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .tele-icon-wrap {
    width: 48px;
    height: 48px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(90,24,154,0.1);
    color: #7b2cbf;
    transition: transform 0.3s ease;
    flex-shrink: 0;
  }
  .tele-item:hover .tele-icon-wrap {
    transform: scale(1.1);
  }
  .tele-item-label {
    font-size: 1rem;
    font-weight: 500;
    color: #3a3a52;
  }

  /* Card Styles (Glassmorphism Exact mn WhatIs) */
  .tele-card {
    background: rgba(255,255,255,0.85);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border: 1px solid rgba(90,24,154,0.15);
    border-radius: 24px;
    padding: 32px 28px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  }
  .tele-status-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 24px;
  }
  .tele-status-dot {
    width: 12px;
    height: 12px;
    border-radius: 999px;
    background: #00d68f;
  }
  .tele-status-text {
    font-size: 0.8rem;
    color: #8878a0;
    font-family: monospace;
  }

  /* Region List Styles */
  .tele-region-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .tele-region-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #f0f2f8;
    border-radius: 12px;
    padding: 12px 16px;
  }
  .tele-region-name {
    font-size: 0.8rem;
    color: #4a3a62;
  }
  .tele-region-stats {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .tele-region-ping {
    font-size: 0.8rem;
    color: #00d68f;
  }
  .tele-region-dot {
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: #00d68f;
  }

  @media (max-width: 1023px) {
    .tele-grid {
      grid-template-columns: 1fr;
    }
  }
`;

export default function Telephony() {
  const { lang, t } = useLanguage();

  const features = [
    { icon: Cloud, label: lang === 'en' ? 'Cloud-Native Architecture' : 'بنية سحابية أصلية' },
    { icon: Server, label: lang === 'en' ? 'Auto-Scaling Infrastructure' : 'بنية تحتية ذاتية التوسع' },
    { icon: Wifi, label: lang === 'en' ? 'HD Voice Quality' : 'جودة صوت عالية الدقة' },
    { icon: Radio, label: lang === 'en' ? 'Global Coverage' : 'تغطية عالمية' },
  ];

  return (
    <>
      <style>{CSS}</style>

      <section
        className="tele-root"
        dir={lang === "ar" ? "rtl" : "ltr"}
        data-testid="section-telephony"
      >
        <div className="tele-wrap">
          <div className="tele-grid">
            
            {/* Text Side */}
            <div>
              <div className="tele-tag">{t('telephony.label')}</div>
              <h2 className="tele-title">{t('telephony.title')}</h2>
              <p className="tele-desc">{t('telephony.desc')}</p>
              
              <div className="tele-list">
                {features.map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <div key={i} className="tele-item">
                      <div className="tele-icon-wrap">
                        <Icon size={24} />
                      </div>
                      <span className="tele-item-label">{f.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Card Side */}
            <div className="tele-card">
              <div className="tele-status-header">
                <div className="tele-status-dot" />
                <span className="tele-status-text">
                  {lang === 'en' ? 'Network Status: All Systems Operational' : 'حالة الشبكة: جميع الأنظمة تعمل'}
                </span>
              </div>
              
              <div className="tele-region-list">
                {['US East', 'US West', 'EU Central', 'Middle East', 'Asia Pacific'].map((region, i) => (
                  <div key={i} className="tele-region-item">
                    <span className="tele-region-name">{region}</span>
                    <div className="tele-region-stats">
                      <span className="tele-region-ping">{Math.floor(Math.random() * 5 + 8)}ms</span>
                      <div className="tele-region-dot" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}