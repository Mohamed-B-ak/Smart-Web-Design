"use client";

import React from "react";
import { useLanguage } from '@/context/LanguageContext';

const CSS = `
  /* Style ScaleBanner adapté au thème Violet Sobre */
  .iso-root {
    font-family: 'din-next-lt-arabic-b4fd9f01e2', sans-serif;
    padding: 100px 24px;
    /* Fond violet clair uni */
    background-color: #f3eff9; 
    position: relative;
    overflow: hidden;
  }
  
  .iso-wrap {
    max-width: 1280px;
    margin: 0 auto;
    text-align: center;
    position: relative;
    z-index: 1;
  }
  
  /* Titre en NOIR comme demandé */
  .iso-title {
    font-family: 'din-next-lt-arabic-b4fd9f01e2', sans-serif;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 800;
    line-height: 1.15;
    color: #0a0a0a; /* NOIR */
    margin-bottom: 12px;
  }
  
  .iso-sub {
    font-size: 1.1rem;
    font-weight: 500;
    color: #4a3a62; /* Texte gris-violet */
    line-height: 1.6;
    margin-bottom: 64px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  /* Grille 3 colonnes */
  .iso-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  /* Cartes "Verre Blanc" */
  .iso-card {
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(103, 45, 146, 0.15); 
    border-radius: 24px;
    padding: 40px 28px;
    box-shadow: 0 8px 32px rgba(103, 45, 146, 0.06);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  }

  .iso-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(103, 45, 146, 0.12);
    border-color: rgba(103, 45, 146, 0.4);
  }

  /* Icône ISO */
  .iso-icon-wrap {
    width: 110px;
    height: 110px;
    margin-bottom: 24px;
    position: relative;
  }
  
  .iso-ring-text {
    animation: rotate 20s linear infinite;
    transform-origin: center;
  }
  @keyframes rotate {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }

  /* Textes */
  .iso-name {
    font-size: 1.4rem;
    font-weight: 700;
    color: #0a0a0a; /* Titre des cartes en noir aussi */
    margin-bottom: 10px;
    line-height: 1.3;
  }
  .iso-desc {
    font-size: 0.95rem;
    color: #5d4c75;
    line-height: 1.6;
    margin-bottom: 20px;
  }
  
  /* Bouton/Badge */
  .iso-badge-tag {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 18px;
    background: #672D92;
    border-radius: 999px;
    font-size: 0.85rem;
    font-weight: 700;
    color: #ffffff;
    cursor: default;
    transition: background 0.2s;
  }
  .iso-badge-tag:hover {
    background: #5b2582;
  }
  .iso-badge-dot {
    width: 6px;
    height: 6px;
    background: #00d68f;
    border-radius: 50%;
    box-shadow: 0 0 6px #00d68f;
  }

  @media (max-width: 768px) {
    .iso-grid { grid-template-columns: 1fr; }
  }
`;

export default function IsoCertifications() {
  const { t } = useLanguage();
  
  // Utilisation des clés de traduction dynamiques
  const certifications = [
    {
      id: '27001',
      title: t('iso.27001.title'),
      desc: t('iso.27001.desc'),
      color: '#672D92',
      icon: 'star'
    },
    {
      id: '9001',
      title: t('iso.9001.title'),
      desc: t('iso.9001.desc'),
      color: '#d4b483', // Une couleur dorée pour la qualité
      icon: 'star'
    },
    {
      id: '10002',
      title: t('iso.10002.title'),
      desc: t('iso.10002.desc'),
      color: '#672D92',
      icon: 'star'
    }
  ];

  return (
    <>
      <style>{CSS}</style>

      <section
        className="iso-root"
        dir="rtl"
        id="certifications"
      >
        <div className="iso-wrap">
          <h2 className="iso-title">{t('iso.title')}</h2>
          <p className="iso-sub">{t('iso.subtitle')}</p>

          <div className="iso-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="iso-card">
                <div className="iso-icon-wrap">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id={`grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ffffff" stopOpacity="1"/>
                        <stop offset="100%" stopColor="#f8f6fb" stopOpacity="1"/>
                      </linearGradient>
                      <path id={`circle-${index}`} d="M 100,100 m -85,0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0"/>
                    </defs>

                    <circle cx="100" cy="100" r="95" fill="none" stroke="#ffffff" strokeWidth="2"/>
                    <circle cx="100" cy="100" r="88" fill="none" stroke={cert.color} strokeWidth="2" opacity="0.1"/>

                    <g className="iso-ring-text">
                      <text fontFamily="sans-serif" fontSize="9" fontWeight="700" fill={cert.color} letterSpacing="1.5">
                        <textPath href={`#circle-${index}`} startOffset="0%">
                          ISO CERTIFIED · SONDOS AI · {cert.id} ·
                        </textPath>
                      </text>
                    </g>

                    <circle cx="100" cy="100" r="78" fill={`url(#grad-${index})`} stroke="rgba(103,45,146,0.08)" strokeWidth="1"/>

                    {cert.icon === 'shield' && (
                      <g transform="translate(100,100) scale(1.3)">
                        <path d="M-14 -24 L-24 -14 L-24 10 C-24 24 -10 32 0 38 C10 32 24 24 24 10 L24 -14 Z" fill="none" stroke={cert.color} strokeWidth="2.5"/>
                        <path d="M-8 4 L-2 10 L10 -4" fill="none" stroke="#00d68f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      </g>
                    )}
                    {cert.icon === 'star' && (
                      <g transform="translate(100,100) scale(1.3)">
                        <polygon points="0,-22 5,-8 20,-8 8,1 12,16 0,8 -12,16 -8,1 -20,-8 -5,-8" fill="none" stroke={cert.color} strokeWidth="2.5"/>
                      </g>
                    )}
                    {cert.icon === 'cycle' && (
                      <g transform="translate(100,100) scale(1.3)">
                        <path d="M0 -22 C-14 -22 -26 -10 -26 4 C-26 18 -14 30 0 30" fill="none" stroke={cert.color} strokeWidth="2.5" strokeLinecap="round"/>
                        <path d="M-26 4 L-32 4 L-26 -2" fill="none" stroke={cert.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M0 30 C14 30 26 18 26 4 C26 -10 14 -22 0 -22" fill="none" stroke={cert.color} strokeWidth="2.5" strokeLinecap="round"/>
                        <path d="M26 4 L32 4 L26 10" fill="none" stroke={cert.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </g>
                    )}

                    <text x="100" y="150" textAnchor="middle" fontFamily="'din-next-lt-arabic-b4fd9f01e2', sans-serif" fontSize="24" fill="#672D92" fontWeight="800">{cert.id}</text>
                  </svg>
                </div>

                <h3 className="iso-name">{cert.title}</h3>
                <p className="iso-desc">{cert.desc}</p>
                
                <div className="iso-badge-tag">
                  <span className="iso-badge-dot"></span>
                  {t('iso.badge')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}