"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Link } from "wouter";

const CSS = `
  .int-root {
    font-family: 'din-next-lt-arabic-b4fd9f01e2', sans-serif;
    padding: 96px 24px;
  }
  .int-wrap {
    max-width: 1100px;
    margin: 0 auto;
    text-align: center;
  }
  
  /* Style exact dyal l'tag (mn WhatIs) */
  .int-tag {
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
  .int-tag::before {
    content: '';
    width: 24px;
    height: 2px;
    border-radius: 999px;
    background: linear-gradient(90deg, #672D92, #7f47ac);
    display: inline-block;
  }

  /* Style exact dyal title (mn WhatIs) */
  .int-title {
    font-family: 'din-next-lt-arabic-b4fd9f01e2', sans-serif;
    font-size: clamp(2rem, 3.5vw, 3.5rem);
    font-weight: 800;
    line-height: 1.15;
    color: #0a0a0a;
    margin-bottom: 14px;
  }

  /* Style dyal description */
  .int-desc {
    font-size: 1rem;
    font-weight: 500;
    color: #4a3a62;
    line-height: 1.85;
    max-width: 580px;
    margin: 0 auto 56px;
  }

  .int-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }

  /* Style exact dyal l carte (Glassmorphism mn WhatIs) */
  .int-card {
    background: rgba(255,255,255,0.85);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border: 1px solid rgba(90,24,154,0.08);
    border-radius: 24px;
    padding: 20px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
    display: flex;
    align-items: center;
    gap: 14px;
    transition: all 0.5s ease;
  }
  .int-card:hover {
    border-color: rgba(90,24,154,0.25);
    box-shadow: 0 12px 40px rgba(90,24,154,0.1);
    transform: translateY(-4px);
  }

  /* Style dyal l'icon/logo wrap (mn WhatIs) */
  .int-logo-wrap {
    width: 48px;
    height: 48px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    border: 1px solid rgba(0,0,0,0.04);
    flex-shrink: 0;
  }
  .int-logo {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }

  /* Style dyal l texte */
  .int-name {
    font-size: 0.95rem;
    font-weight: 500;
    color: #3a3a52;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* Style dyal l bouton */
  .int-btn {
    display: inline-block;
    margin-top: 48px;
    padding: 14px 32px;
    border-radius: 999px;
    background: linear-gradient(90deg, #7b2cbf, #9d4edd);
    color: white;
    font-size: 1rem;
    font-weight: 600;
    box-shadow: 0 4px 15px rgba(123,44,191,0.3);
    transition: all 0.3s ease;
    text-decoration: none;
  }
  .int-btn:hover {
    box-shadow: 0 8px 25px rgba(123,44,191,0.4);
    transform: translateY(-2px);
  }

  @media (max-width: 1023px) {
    .int-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 639px) {
    .int-grid { grid-template-columns: repeat(2, 1fr); }
  }
`;

const integrations = [
  { name: "Zuora", color: "#FF6B00", logo: "/logos/zuora.png" },
  { name: "Zoom", color: "#2D8CFF", logo: "/logos/zoom.png" },
  { name: "Zoo", color: "#6C5CE7", logo: "/logos/zoo.png" },
  { name: "Zoho Invoice", color: "#C8202B", logo: "/logos/zohoinvoice.png" },
  { name: "Zoho CRM", color: "#C8202B", logo: "/logos/zohocrm.png" },
  { name: "Zoho Books", color: "#C8202B", logo: "/logos/zohobooks.png" },
  { name: "Zendesk", color: "#03363D", logo: "/logos/zendesk.png" },
  { name: "YouTube", color: "#FF0000", logo: "/logos/youtube.png" },
  { name: "Zagomail", color: "#00B894", logo: "/logos/zagomail.png" },
  { name: "ZeroBounce", color: "#34495E", logo: "/logos/zerobounce.png" },
  { name: "WordPress", color: "#21759B", logo: "/logos/wordpress.png" },
  { name: "Xero", color: "#13B5EA", logo: "/logos/xero.png" },
];

export default function Integrations() {
  const { t, lang } = useLanguage();

  const firstTwelve = integrations.slice(0, 12);

  return (
    <>
      <style>{CSS}</style>

      <section
        className="int-root"
        dir={lang === "ar" ? "rtl" : "ltr"}
        data-testid="section-integrations"
      >
        <div className="int-wrap">
          <div className="int-tag">{t("integrations.label")}</div>
          
          <h2 className="int-title">{t("integrations.title")}</h2>
          
          <p className="int-desc">{t("integrations.desc")}</p>

          {/* GRID ITEMS */}
          <div className="int-grid">
            {firstTwelve.map((item) => (
              <div key={item.name} className="int-card">
                {/* LOGO WRAP */}
                <div className="int-logo-wrap">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="int-logo"
                  />
                </div>

                <span className="int-name">{item.name}</span>
              </div>
            ))}
          </div>

          {/* BOUTON VOIR PLUS */}
          <Link href="/integrations" className="int-btn">
            {t("common.read_more")}
          </Link>
        </div>
      </section>
    </>
  );
}