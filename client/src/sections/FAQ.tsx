"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronDown } from "lucide-react";

const CSS = `
  .faq-root {
    font-family: 'din-next-lt-arabic-b4fd9f01e2', sans-serif;
    padding: 96px 24px;
  }
  .faq-wrap {
    max-width: 720px;
    margin: 0 auto;
  }
  .faq-head {
    text-align: center;
    margin-bottom: 56px;
  }
  
  /* Style exact dyal l'tag (mn WhatIs) */
  .faq-tag {
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
  .faq-tag::before {
    content: '';
    width: 24px;
    height: 2px;
    border-radius: 999px;
    background: linear-gradient(90deg, #672D92, #7f47ac);
    display: inline-block;
  }

  /* Style exact dyal title (mn WhatIs) */
  .faq-title {
    font-family: 'din-next-lt-arabic-b4fd9f01e2', sans-serif;
    font-size: clamp(1.8rem, 3.5vw, 2.8rem);
    font-weight: 800;
    line-height: 1.15;
    color: #0a0a0a;
    margin-bottom: 14px;
  }

  .faq-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  /* Style exact dyal l carte (Glassmorphism mn WhatIs) */
  .faq-item {
    background: rgba(255,255,255,0.85);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border: 1px solid rgba(90,24,154,0.1);
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
    transition: all 0.3s ease;
  }
  .faq-item:hover {
    border-color: rgba(90,24,154,0.2);
  }

  .faq-btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 20px 24px;
    background: transparent;
    border: none;
    cursor: pointer;
    font-family: inherit;
    text-align: left;
  }
  .faq-question {
    font-size: 1rem;
    font-weight: 600;
    color: #3a3a52;
  }
  .faq-icon {
    width: 20px;
    height: 20px;
    color: #8878a0;
    flex-shrink: 0;
    transition: transform 0.3s ease;
  }
  .faq-icon.open {
    transform: rotate(180deg);
  }

  .faq-answer {
    padding: 0 24px 20px 24px;
  }
  .faq-answer-text {
    font-size: 0.9rem;
    color: #4a3a62;
    line-height: 1.85; /* Nefs l line-height dyal WhatIs */
  }
`;

export default function FAQ() {
  const { t, lang } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
  ];

  return (
    <>
      <style>{CSS}</style>

      <section
        id="faq"
        className="faq-root"
        dir={lang === "ar" ? "rtl" : "ltr"}
        data-testid="section-faq"
      >
        <div className="faq-wrap">
          <div className="faq-head">
            <div className="faq-tag">{t("faq.label")}</div>
            <h2 className="faq-title">{t("faq.title")}</h2>
          </div>
          
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="faq-btn"
                  data-testid={`button-faq-${i}`}
                >
                  <span className="faq-question">{faq.q}</span>
                  <ChevronDown
                    className={`faq-icon ${openIndex === i ? "open" : ""}`}
                  />
                </button>
                {openIndex === i && (
                  <div className="faq-answer">
                    <p className="faq-answer-text">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}