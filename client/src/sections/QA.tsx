"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Shield, CheckCircle, AlertTriangle, BarChart3 } from "lucide-react";

const CSS = `
  .qa-root {
    font-family: 'din-next-lt-arabic-b4fd9f01e2', sans-serif;
    padding: 96px 24px;
  }
  .qa-wrap {
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    align-items: center;
  }
  
  /* Text Section Styles */
  .qa-tag {
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
  .qa-tag::before {
    content: '';
    width: 24px;
    height: 2px;
    border-radius: 999px;
    background: #672D92;
    display: inline-block;
  }
  .qa-title {
    font-family: 'din-next-lt-arabic-b4fd9f01e2', sans-serif;
    font-size: clamp(1.8rem, 3.5vw, 2.8rem);
    font-weight: 800;
    line-height: 1.15;
    color: #0a0a0a;
    margin-bottom: 14px;
  }
  .qa-desc {
    font-size: 1rem;
    font-weight: 500;
    color: #555555;
    line-height: 1.85;
  }

  /* Card Section Styles */
  .qa-card {
    background: rgba(255,255,255,0.85);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border: 1px solid rgba(103,45,146,0.12);
    border-radius: 24px;
    padding: 32px;
    box-shadow: 0 4px 24px rgba(103,45,146,0.07);
  }
  .qa-card-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 24px;
    font-size: 0.9rem;
    font-weight: 700;
    color: #0a0a0a;
  }
  .qa-icon-wrap {
    width: 40px;
    height: 40px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(103,45,146,0.1);
    color: #672D92;
  }
  .qa-metric {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(103,45,146,0.04);
    border-radius: 16px;
    padding: 16px 20px;
    margin-bottom: 12px;
  }
  .qa-metric-label {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 0.9rem;
    color: #555555;
    font-weight: 500;
  }
  .qa-metric-label svg {
    color: #672D92;
  }
  .qa-metric-value {
    font-size: 1rem;
    font-weight: 800;
    color: #672D92;
  }
  .qa-success-box {
    display: flex;
    align-items: center;
    gap: 12px;
    background: rgba(103,45,146,0.08);
    border: 1px solid rgba(103,45,146,0.2);
    border-radius: 16px;
    padding: 16px 20px;
    margin-top: 20px;
    color: #672D92;
    font-size: 0.85rem;
    font-weight: 600;
  }

  @media (max-width: 1024px) {
    .qa-wrap {
      grid-template-columns: 1fr;
      gap: 48px;
    }
  }
`;

export default function QA() {
  const { lang, t } = useLanguage();

  const metrics = [
    { label: lang === 'en' ? 'Calls Analyzed' : 'مكالمات محللة', value: '2.4M', icon: BarChart3 },
    { label: lang === 'en' ? 'Issues Detected' : 'مشاكل مكتشفة', value: '12.3K', icon: AlertTriangle },
    { label: lang === 'en' ? 'Auto-Resolved' : 'محلولة تلقائياً', value: '98.1%', icon: CheckCircle },
  ];

  return (
    <>
      <style>{CSS}</style>

      <section
        className="qa-root"
        dir={lang === "ar" ? "rtl" : "ltr"}
        data-testid="section-qa"
      >
        <div className="qa-wrap">
          
          {/* Card Side */}
          <div className="qa-card">
            <div className="qa-card-header">
              <div className="qa-icon-wrap">
                <Shield size={20} />
              </div>
              <span>{lang === 'en' ? 'Quality Monitor' : 'مراقب الجودة'}</span>
            </div>
            
            <div>
              {metrics.map((m, i) => {
                const Icon = m.icon;
                return (
                  <div key={i} className="qa-metric">
                    <div className="qa-metric-label">
                      <Icon size={18} />
                      <span>{m.label}</span>
                    </div>
                    <span className="qa-metric-value">{m.value}</span>
                  </div>
                );
              })}
            </div>

            <div className="qa-success-box">
              <CheckCircle size={18} />
              <p>
                {lang === 'en'
                  ? 'All systems operating within quality thresholds'
                  : 'جميع الأنظمة تعمل ضمن حدود الجودة'}
              </p>
            </div>
          </div>

          {/* Text Side */}
          <div>
            <div className="qa-tag">{t('qa.label')}</div>
            <h2 className="qa-title">{t('qa.title')}</h2>
            <p className="qa-desc">{t('qa.desc')}</p>
          </div>

        </div>
      </section>
    </>
  );
}