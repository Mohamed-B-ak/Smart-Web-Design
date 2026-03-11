"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

/* ─── INLINE STYLES using index.css color tokens ─── */
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&family=Manrope:wght@200..800&family=Instrument+Sans:wght@400;500;600;700;800&display=swap');

  :root {
    --bg: #f4f0fa;
    --bg2: #ece6f5;
    --bg3: #e0d6ee;
    --bg4: #d4c9e6;
    --card: #ffffff;
    --white: #fff;
    --t1: #1a0a2e;
    --t2: #4a3a62;
    --t3: #8878a0;
    --accent: #5a189a;
    --accent2: #7b2cbf;
    --accent3: #9d4edd;
    --accent-light: #c77dff;
    --accent-glow: rgba(90, 24, 154, 0.35);
    --green: #00d68f;
    --blue: #4facfe;
    --orange: #ffa940;
    --red: #ff6b6b;
  }

  .sondos-root {
    font-family: 'IBM Plex Sans Arabic', 'Manrope', sans-serif;
    background: var(--bg);
    color: var(--t1);
    overflow-x: hidden;
    position: relative;
  }

  /* ── BG BLOBS ── */
  .sondos-bg {
    position: fixed;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    overflow: hidden;
    background: linear-gradient(135deg, #f4f0fa 0%, #ece6f5 60%, #e0d6ee 100%);
  }

  .blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.45;
  }

  .blob-1 {
    width: 55vw; height: 55vw;
    background: radial-gradient(circle, #c77dff 0%, #9d4edd 60%, transparent 100%);
    top: -15%; right: -15%;
    animation: floatSlow 14s ease-in-out infinite;
  }

  .blob-2 {
    width: 40vw; height: 40vw;
    background: radial-gradient(circle, #7b2cbf 0%, #5a189a 60%, transparent 100%);
    bottom: -10%; left: -10%;
    animation: floatSlow 18s ease-in-out infinite reverse;
  }

  .blob-3 {
    width: 28vw; height: 28vw;
    background: radial-gradient(circle, #4facfe 0%, #c77dff 70%, transparent 100%);
    top: 40%; left: 35%;
    animation: floatGentle 11s ease-in-out infinite;
    opacity: 0.25;
  }

  .bg-dots {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle, rgba(90,24,154,0.08) 1px, transparent 1px);
    background-size: 32px 32px;
  }

  /* ── CONTENT ── */
  .sondos-content {
    position: relative;
    z-index: 1;
  }

  /* ── HERO ── */
  .hero {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 80px 32px;
    text-align: center;
  }

  .hero-chip {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: rgba(255,255,255,0.75);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(90,24,154,0.2);
    border-radius: 999px;
    padding: 6px 16px 6px 10px;
    margin-bottom: 40px;
    font-size: 0.72rem;
    font-weight: 600;
    color: var(--t2);
    letter-spacing: 0.3px;
    animation: fadeUp 0.7s ease both;
    box-shadow: 0 2px 16px rgba(90,24,154,0.08);
  }

  .chip-dot {
    width: 7px; height: 7px;
    border-radius: 50%;
    background: var(--green);
    box-shadow: 0 0 10px rgba(0,214,143,0.6);
    animation: dotPulse 2s ease-in-out infinite;
  }

  .chip-tag {
    background: linear-gradient(135deg, #5a189a, #9d4edd);
    color: white;
    font-size: 0.6rem;
    font-weight: 700;
    padding: 2px 8px;
    border-radius: 999px;
    letter-spacing: 1px;
  }

  .hero h1 {
    font-family: 'Instrument Sans', 'IBM Plex Sans Arabic', sans-serif;
    font-size: clamp(2.8rem, 6vw, 4.5rem);
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -0.02em;
    color: var(--t1);
    margin-bottom: 20px;
    animation: fadeUp 0.7s 0.08s ease both;
  }

  .hero h1 .gradient-text {
    background: linear-gradient(135deg, #9d4edd 0%, #5a189a 50%, #7b2cbf 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hero-sub {
    font-size: clamp(0.95rem, 1.5vw, 1.1rem);
    color: var(--t2);
    max-width: 560px;
    margin: 0 auto 44px;
    line-height: 1.9;
    animation: fadeUp 0.7s 0.16s ease both;
  }

  .hero-ctas {
    display: flex;
    gap: 12px;
    justify-content: center;
    flex-wrap: wrap;
    animation: fadeUp 0.7s 0.24s ease both;
    margin-bottom: 64px;
  }

  .btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: linear-gradient(135deg, #5a189a, #7b2cbf, #9d4edd);
    background-size: 200% 200%;
    animation: gradientShift 6s ease infinite;
    color: white;
    padding: 13px 28px;
    border-radius: 12px;
    font-weight: 700;
    font-size: 0.9rem;
    text-decoration: none;
    box-shadow: 0 6px 28px rgba(90,24,154,0.4), 0 0 60px rgba(90,24,154,0.12);
    border: none;
    cursor: pointer;
    transition: transform 0.15s, box-shadow 0.15s;
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 36px rgba(90,24,154,0.5);
  }

  .btn-secondary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(255,255,255,0.7);
    backdrop-filter: blur(12px);
    color: var(--accent);
    padding: 13px 28px;
    border-radius: 12px;
    font-weight: 600;
    font-size: 0.9rem;
    text-decoration: none;
    border: 1.5px solid rgba(90,24,154,0.2);
    cursor: pointer;
    transition: all 0.15s;
  }

  .btn-secondary:hover {
    border-color: var(--accent);
    background: rgba(90,24,154,0.06);
  }

  /* ── STATS BAR ── */
  .stats-bar {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    background: rgba(255,255,255,0.65);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(90,24,154,0.12);
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 8px 40px rgba(90,24,154,0.1);
    animation: fadeUp 0.7s 0.34s ease both;
    max-width: 720px;
    width: 100%;
  }

  .stat-cell {
    padding: 24px 20px;
    text-align: center;
    border-left: 1px solid rgba(90,24,154,0.08);
    transition: background 0.2s;
  }

  .stat-cell:last-child { border-left: none; }
  .stat-cell:hover { background: rgba(90,24,154,0.04); }

  .stat-n {
    display: block;
    font-size: 2rem;
    font-weight: 800;
    color: var(--accent);
    line-height: 1;
    margin-bottom: 5px;
    letter-spacing: -1px;
    font-family: 'Manrope', sans-serif;
  }

  .stat-l {
    font-size: 0.65rem;
    color: var(--t3);
    font-weight: 600;
    letter-spacing: 0.5px;
  }

  /* ── TICKER ── */
  .ticker-outer {
    overflow: hidden;
    border-top: 1px solid rgba(90,24,154,0.08);
    border-bottom: 1px solid rgba(90,24,154,0.08);
    background: rgba(255,255,255,0.5);
  }

  .ticker-inner {
    display: flex;
    width: max-content;
    animation: marquee 32s linear infinite;
  }

  .ticker-inner:hover { animation-play-state: paused; }

  .ti {
    display: flex;
    align-items: center;
    gap: 0;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--t3);
    white-space: nowrap;
    font-family: 'Manrope', sans-serif;
  }

  .ti-item {
    padding: 14px 28px;
    border-left: 1px solid rgba(90,24,154,0.08);
    transition: color 0.2s;
  }

  .ti-item:hover { color: var(--accent); }

  .ti-sep {
    padding: 14px 12px;
    color: var(--accent-light);
    border-left: 1px solid rgba(90,24,154,0.08);
  }

  /* ── SECTION COMMONS ── */
  .section {
    padding: 100px 0;
    position: relative;
  }

  .section + .section {
    border-top: 1px solid rgba(90,24,154,0.07);
  }

  .wrap {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 32px;
  }

  .s-tag {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: var(--accent3);
    margin-bottom: 16px;
  }

  .s-tag::before {
    content: '';
    width: 24px;
    height: 2px;
    border-radius: 999px;
    background: linear-gradient(90deg, #5a189a, #9d4edd);
    display: inline-block;
  }

  .s-h {
    font-family: 'Instrument Sans', 'IBM Plex Sans Arabic', sans-serif;
    font-size: clamp(1.8rem, 3vw, 2.5rem);
    font-weight: 800;
    line-height: 1.2;
    letter-spacing: -0.02em;
    color: var(--t1);
    margin-bottom: 14px;
  }

  .s-h .hi {
    background: linear-gradient(135deg, #9d4edd 0%, #5a189a 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .s-p {
    font-size: 0.95rem;
    color: var(--t2);
    line-height: 1.85;
    max-width: 480px;
  }

  /* ── SERVICES ── */
  .svc-wrap {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 80px;
    align-items: start;
  }

  .svc-left { position: sticky; top: 80px; }

  .tech-row { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 24px; }

  .t-pill {
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.5px;
    font-family: 'Manrope', sans-serif;
    padding: 4px 10px;
    border-radius: 999px;
    border: 1.5px solid rgba(90,24,154,0.15);
    color: var(--t2);
    background: rgba(255,255,255,0.6);
    transition: all 0.2s;
    cursor: default;
  }

  .t-pill.on, .t-pill:hover {
    border-color: var(--accent3);
    color: var(--accent);
    background: rgba(90,24,154,0.06);
  }

  .svc-table { display: flex; flex-direction: column; }

  .svc-row {
    display: grid;
    grid-template-columns: 48px 1fr 20px;
    align-items: center;
    gap: 20px;
    padding: 22px 18px;
    border-radius: 12px;
    border-bottom: 1px solid rgba(90,24,154,0.06);
    transition: all 0.2s;
    cursor: default;
    position: relative;
    overflow: hidden;
  }

  .svc-row::after {
    content: '';
    position: absolute;
    right: 0; top: 0; bottom: 0;
    width: 0;
    background: linear-gradient(90deg, transparent, rgba(90,24,154,0.05));
    transition: width 0.3s;
  }

  .svc-row:hover { background: rgba(90,24,154,0.04); }
  .svc-row:hover::after { width: 100%; }
  .svc-row:hover .svc-num { color: var(--accent3); }
  .svc-row:hover .svc-arr { opacity: 1; transform: translateX(-4px); }

  .svc-num {
    font-family: 'Manrope', sans-serif;
    font-size: 0.68rem;
    font-weight: 700;
    color: var(--t3);
    letter-spacing: 1px;
    transition: color 0.2s;
    text-align: center;
  }

  .svc-body h3 { font-size: 0.97rem; font-weight: 700; color: var(--t1); margin-bottom: 4px; }
  .svc-body p { font-size: 0.8rem; color: var(--t2); line-height: 1.65; }
  .svc-arr { font-size: 0.8rem; color: var(--accent3); opacity: 0; transition: all 0.25s; }

  /* ── PROOF ── */
  .proof-top { text-align: center; margin-bottom: 56px; }

  .proof-nums {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    background: rgba(90,24,154,0.1);
    border: 1px solid rgba(90,24,154,0.1);
    border-radius: 16px;
    overflow: hidden;
    margin-bottom: 40px;
  }

  .pn-cell {
    background: rgba(255,255,255,0.6);
    backdrop-filter: blur(12px);
    padding: 44px 36px;
    transition: background 0.2s;
    position: relative;
    overflow: hidden;
  }

  .pn-cell::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(90,24,154,0.06), transparent);
    opacity: 0;
    transition: opacity 0.3s;
  }

  .pn-cell:hover { background: rgba(255,255,255,0.85); }
  .pn-cell:hover::before { opacity: 1; }

  .pn-label {
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: var(--t3);
    font-family: 'Manrope', sans-serif;
    margin-bottom: 18px;
    display: block;
  }

  .pn-num {
    font-size: clamp(3.5rem, 6vw, 5.5rem);
    font-weight: 800;
    line-height: 1;
    letter-spacing: -3px;
    color: var(--accent);
    display: block;
    margin-bottom: 12px;
    font-family: 'Manrope', sans-serif;
  }

  .pn-desc { font-size: 0.85rem; color: var(--t2); line-height: 1.7; }
  .pn-desc strong { color: var(--t1); font-weight: 700; }

  /* Stories */
  .stories-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }

  .story {
    background: rgba(255,255,255,0.7);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(90,24,154,0.1);
    border-radius: 16px;
    padding: 28px 24px;
    transition: all 0.25s;
    cursor: default;
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(90,24,154,0.06);
  }

  .story::before {
    content: '';
    position: absolute;
    top: 0; right: 0; left: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, #9d4edd, transparent);
    opacity: 0;
    transition: opacity 0.3s;
  }

  .story:hover {
    border-color: rgba(90,24,154,0.25);
    background: rgba(255,255,255,0.9);
    box-shadow: 0 8px 40px rgba(90,24,154,0.12);
    transform: translateY(-2px);
  }

  .story:hover::before { opacity: 1; }

  .story-tag {
    font-size: 0.6rem;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--t3);
    font-family: 'Manrope', sans-serif;
    margin-bottom: 14px;
    display: block;
  }

  .story-big {
    font-size: 3rem;
    font-weight: 800;
    color: var(--accent);
    line-height: 1;
    letter-spacing: -2px;
    margin-bottom: 8px;
    font-family: 'Manrope', sans-serif;
  }

  .story-title { 
    font-family: 'Instrument Sans', 'IBM Plex Sans Arabic', sans-serif;
    font-size: 0.9rem; 
    font-weight: 700; 
    color: var(--t1); 
    margin-bottom: 10px; 
    letter-spacing: -0.01em;
  }
  .story-desc { font-size: 0.78rem; color: var(--t2); line-height: 1.7; margin-bottom: 18px; }

  .story-q {
    border-top: 1px solid rgba(90,24,154,0.08);
    padding-top: 14px;
    font-size: 0.78rem;
    color: var(--t2);
    line-height: 1.6;
    font-style: italic;
  }

  .story-who {
    font-size: 0.62rem;
    font-weight: 700;
    color: var(--t3);
    letter-spacing: 1px;
    margin-top: 7px;
    font-family: 'Manrope', sans-serif;
    font-style: normal;
  }

  /* ── TERMINAL / WORKFLOW ── */
  .wf-top { text-align: center; margin-bottom: 52px; }

  .terminal {
    max-width: 860px;
    margin: 0 auto;
    background: rgba(255,255,255,0.8);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(90,24,154,0.15);
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(90,24,154,0.12), 0 2px 8px rgba(90,24,154,0.06);
  }

  .term-bar {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 13px 18px;
    background: rgba(90,24,154,0.04);
    border-bottom: 1px solid rgba(90,24,154,0.08);
  }

  .td { width: 10px; height: 10px; border-radius: 50%; }
  .td-r { background: #ff6b6b; }
  .td-y { background: #ffa940; }
  .td-g { background: #00d68f; }

  .term-title {
    font-size: 0.7rem;
    color: var(--t3);
    font-family: 'Manrope', sans-serif;
    margin-right: auto;
  }

  .term-live {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 0.62rem;
    font-weight: 700;
    color: var(--green);
    font-family: 'Manrope', sans-serif;
    letter-spacing: 0.5px;
  }

  .tlive-dot {
    width: 5px; height: 5px;
    border-radius: 50%;
    background: var(--green);
    animation: dotPulse 1.8s infinite;
  }

  .term-body {
    padding: 20px;
    font-family: 'Manrope', sans-serif;
    font-size: 0.74rem;
    line-height: 1.8;
  }

  .trow {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 10px;
    border-radius: 8px;
    border-bottom: 1px solid rgba(90,24,154,0.05);
    transition: background 0.15s;
  }

  .trow:last-child { border-bottom: none; }
  .trow:hover { background: rgba(90,24,154,0.03); }

  .tr-n {
    font-size: 0.55rem;
    font-weight: 700;
    color: var(--t3);
    min-width: 22px;
    letter-spacing: 1px;
  }

  .tr-icon {
    width: 26px; height: 26px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    flex-shrink: 0;
  }

  .ic-g { background: rgba(0,214,143,0.12); }
  .ic-b { background: rgba(90,24,154,0.1); }
  .ic-a { background: rgba(255,169,64,0.12); }

  .tr-name { color: var(--t1); font-weight: 600; min-width: 190px; }
  .tr-type { color: var(--t3); font-size: 0.66rem; flex: 1; }

  .tr-st {
    font-size: 0.6rem;
    font-weight: 700;
    padding: 2px 8px;
    border-radius: 999px;
    letter-spacing: 0.5px;
  }

  .st-ok { background: rgba(0,214,143,0.12); color: #00b87a; }
  .st-run { background: rgba(90,24,154,0.1); color: var(--accent3); }

  .branch-sep {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px;
    border-bottom: 1px solid rgba(90,24,154,0.05);
  }

  .bline { flex: 1; height: 1px; background: rgba(90,24,154,0.1); }
  .blabel {
    font-size: 0.58rem;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--orange);
    font-family: 'Manrope', sans-serif;
  }

  .split { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 10px 0; }

  .sp-col {
    background: rgba(90,24,154,0.02);
    border: 1px solid rgba(90,24,154,0.07);
    border-radius: 10px;
    padding: 14px;
  }

  .sp-head {
    font-size: 0.58rem;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 10px;
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(90,24,154,0.07);
  }

  .sp-head-a { color: var(--green); }
  .sp-head-b { color: var(--orange); }

  .sp-row {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 5px 0;
    border-bottom: 1px solid rgba(90,24,154,0.05);
  }

  .sp-row:last-child { border-bottom: none; }
  .sp-icon { font-size: 0.7rem; width: 14px; text-align: center; }
  .sp-name { color: var(--t2); font-size: 0.68rem; flex: 1; }
  .sp-tag { color: var(--t3); font-size: 0.6rem; }

  /* Wf stats */
  .wf-nums {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1px;
    background: rgba(90,24,154,0.08);
    border: 1px solid rgba(90,24,154,0.1);
    border-radius: 14px;
    overflow: hidden;
    margin-top: 28px;
    max-width: 860px;
    margin-left: auto;
    margin-right: auto;
  }

  .wf-n {
    background: rgba(255,255,255,0.65);
    backdrop-filter: blur(10px);
    padding: 22px 18px;
    text-align: center;
  }

  .wf-big {
    display: block;
    font-size: 1.8rem;
    font-weight: 800;
    color: var(--accent);
    font-family: 'Manrope', sans-serif;
    letter-spacing: -1px;
    margin-bottom: 4px;
  }

  .wf-lab { font-size: 0.62rem; color: var(--t3); font-family: 'Manrope', sans-serif; letter-spacing: 0.5px; }

  /* ── STACK ── */
  .stack-top { text-align: center; margin-bottom: 56px; }

  .stack-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    background: rgba(90,24,154,0.08);
    border: 1px solid rgba(90,24,154,0.1);
    border-radius: 16px;
    overflow: hidden;
  }

  .stack-card {
    background: rgba(255,255,255,0.65);
    backdrop-filter: blur(12px);
    padding: 36px 30px;
    transition: background 0.2s;
    position: relative;
  }

  .stack-card-num {
    position: absolute;
    top: 20px; left: 20px;
    font-size: 0.6rem;
    font-weight: 700;
    color: var(--t3);
    font-family: 'Manrope', sans-serif;
    letter-spacing: 2px;
  }

  .stack-card:hover { background: rgba(255,255,255,0.9); }

  .stack-cat {
    font-size: 0.6rem;
    font-weight: 700;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: var(--accent3);
    margin-bottom: 10px;
    font-family: 'Manrope', sans-serif;
  }

  .stack-title { 
    font-family: 'Instrument Sans', 'IBM Plex Sans Arabic', sans-serif;
    font-size: 1rem; 
    font-weight: 800; 
    color: var(--t1); 
    margin-bottom: 10px; 
    letter-spacing: -0.01em;
  }
  .stack-desc { font-size: 0.82rem; color: var(--t2); line-height: 1.7; margin-bottom: 18px; }

  .stack-tools { display: flex; flex-wrap: wrap; gap: 5px; }

  .st-tag {
    font-size: 0.6rem;
    font-weight: 700;
    font-family: 'Manrope', sans-serif;
    padding: 3px 9px;
    border-radius: 999px;
    letter-spacing: 0.3px;
    border: 1.5px solid rgba(90,24,154,0.12);
    color: var(--t2);
    background: rgba(255,255,255,0.8);
    transition: all 0.2s;
  }

  .st-tag:hover { border-color: var(--accent3); color: var(--accent); }

  /* ── TESTIMONIALS ── */
  .testi-top { text-align: center; margin-bottom: 56px; }

  .testi-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
    margin-bottom: 44px;
  }

  .tcard {
    background: rgba(255,255,255,0.7);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(90,24,154,0.1);
    border-radius: 16px;
    padding: 30px 26px;
    transition: all 0.25s;
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(90,24,154,0.06);
  }

  .tcard::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, #9d4edd, transparent);
    opacity: 0;
    transition: opacity 0.3s;
  }

  .tcard:hover {
    border-color: rgba(90,24,154,0.22);
    background: rgba(255,255,255,0.92);
    box-shadow: 0 8px 40px rgba(90,24,154,0.1);
  }

  .tcard:hover::after { opacity: 1; }

  .tc-stars { color: var(--orange); font-size: 0.78rem; letter-spacing: 3px; margin-bottom: 14px; }
  .tc-q { font-size: 0.9rem; color: var(--t1); line-height: 1.75; margin-bottom: 22px; font-weight: 500; }

  .tc-who {
    display: flex;
    align-items: center;
    gap: 12px;
    border-top: 1px solid rgba(90,24,154,0.07);
    padding-top: 16px;
  }

  .tc-av {
    width: 34px; height: 34px;
    border-radius: 50%;
    background: linear-gradient(135deg, #5a189a, #9d4edd);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    color: white;
    font-weight: 700;
    flex-shrink: 0;
  }

  .tc-name { 
    font-family: 'Instrument Sans', 'IBM Plex Sans Arabic', sans-serif;
    font-size: 0.8rem; 
    font-weight: 700; 
    color: var(--t1); 
    margin-bottom: 2px; 
    letter-spacing: -0.01em;
  }
  .tc-role { font-size: 0.68rem; color: var(--t3); font-family: 'Manrope', sans-serif; }

  .tc-badge {
    font-size: 0.58rem;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--accent3);
    border: 1.5px solid rgba(90,24,154,0.2);
    border-radius: 999px;
    padding: 2px 9px;
    font-family: 'Manrope', sans-serif;
    margin-right: auto;
  }

  /* Sectors */
  .sectors-wrap { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }

  .sector {
    font-size: 0.72rem;
    font-weight: 600;
    font-family: 'Manrope', sans-serif;
    padding: 7px 16px;
    border-radius: 999px;
    border: 1.5px solid rgba(90,24,154,0.12);
    color: var(--t2);
    background: rgba(255,255,255,0.6);
    transition: all 0.2s;
  }

  .sector:hover {
    border-color: var(--accent3);
    color: var(--accent);
    background: rgba(90,24,154,0.05);
  }

  /* ── CTA ── */
  .cta-section {
    padding: 140px 0;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .cta-glow {
    position: absolute;
    top: -100px; left: 50%;
    transform: translateX(-50%);
    width: 600px; height: 400px;
    background: radial-gradient(ellipse, rgba(157,78,221,0.18), transparent 70%);
    pointer-events: none;
  }

  .cta-label {
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--t3);
    margin-bottom: 20px;
    font-family: 'Manrope', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
  }

  .cta-label::before, .cta-label::after {
    content: '';
    width: 28px; height: 1.5px;
    background: linear-gradient(90deg, #5a189a, #9d4edd);
    border-radius: 999px;
    display: inline-block;
  }

  .cta-h {
    font-family: 'Instrument Sans', 'IBM Plex Sans Arabic', sans-serif;
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    font-weight: 800;
    line-height: 1;
    letter-spacing: -0.02em;
    color: var(--t1);
    margin-bottom: 20px;
  }

  .cta-h .dim { color: var(--t3); }

  .cta-sub {
    font-size: 0.97rem;
    color: var(--t2);
    max-width: 440px;
    margin: 0 auto 44px;
    line-height: 1.85;
  }

  /* ── REVEAL ── */
  .rv {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1);
  }

  .rv.in { opacity: 1; transform: translateY(0); }
  .d1 { transition-delay: 0.05s; }
  .d2 { transition-delay: 0.1s; }
  .d3 { transition-delay: 0.15s; }

  /* ── KEYFRAMES ── */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(18px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes marquee {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }

  @keyframes floatGentle {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-14px); }
  }

  @keyframes floatSlow {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    33% { transform: translateY(-10px) rotate(1.5deg); }
    66% { transform: translateY(-5px) rotate(-1deg); }
  }

  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @keyframes dotPulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(0,214,143,0.5); }
    50% { box-shadow: 0 0 0 8px rgba(0,214,143,0); }
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 900px) {
    .svc-wrap, .proof-nums, .stories-grid, .stack-grid, .testi-grid {
      grid-template-columns: 1fr;
    }
    .svc-left { position: static; }
    .split { grid-template-columns: 1fr; }
    .wf-nums { grid-template-columns: 1fr 1fr; }
    .stats-bar { grid-template-columns: 1fr 1fr; }
    .wrap { padding: 0 16px; }
    .section { padding: 64px 0; }
  }
`;

export default function SondosHero() {
  const { t, lang } = useLanguage();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((el) => {
          if (el.isIntersecting) el.target.classList.add("in");
        });
      },
      { threshold: 0.08 },
    );
    const els = rootRef.current?.querySelectorAll(".rv");
    els?.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{CSS}</style>

      <div
        className="sondos-root"
        ref={rootRef}
        dir={lang === "ar" ? "rtl" : "ltr"}
      >
        {/* ── BG ── */}
        <div className="sondos-bg">
          <div className="blob blob-1" />
          <div className="blob blob-2" />
          <div className="blob blob-3" />
          <div className="bg-dots" />
        </div>

        <div className="sondos-content">
          {/* ══ HERO ══ */}
          <section className="hero">
            <div className="hero-chip">
              <div className="chip-dot" />
              <span className="chip-tag">{t("hero.chip.tag")}</span>
              {t("hero.chip.text")}
            </div>

            <h1>
              {t("hero.title.line1")}
              <br />
              <span className="gradient-text">{t("hero.title.line2")}</span>
              <br />
              {t("hero.title.line3")}
            </h1>

            <p className="hero-sub">{t("hero.subtitle")}</p>

            <div className="hero-ctas">
              <a href="/demo" className="btn-primary">
                {t("hero.cta.primary")} ←
              </a>
              <a href="#workflow" className="btn-secondary">
                {t("hero.cta.secondary")} →
              </a>
            </div>

            <div className="stats-bar">
              <div className="stat-cell">
                <span className="stat-n">{t("hero.stat1.value")}</span>
                <span className="stat-l">{t("hero.stat1.label")}</span>
              </div>
              <div className="stat-cell">
                <span className="stat-n">{t("hero.stat2.value")}</span>
                <span className="stat-l">{t("hero.stat2.label")}</span>
              </div>
              <div className="stat-cell">
                <span className="stat-n">{t("hero.stat3.value")}</span>
                <span className="stat-l">{t("hero.stat3.label")}</span>
              </div>
              <div className="stat-cell">
                <span className="stat-n">{t("hero.stat4.value")}</span>
                <span className="stat-l">{t("hero.stat4.label")}</span>
              </div>
            </div>
          </section>

          {/* ══ TICKER ══ */}
          <div className="ticker-outer">
            <div className="ticker-inner">
              {[1, 2].map((_, i) => (
                <div className="ti" key={i}>
                  {[
                    "GPT-4o",
                    "Make.com",
                    "n8n",
                    "Claude 3.5",
                    "Vapi",
                    "ElevenLabs",
                    "Gemini",
                    "WhatsApp API",
                    "Airtable",
                    "Slack",
                    "Deepgram",
                    "Llama 3",
                    "Mistral",
                    "Zapier",
                    "REST API",
                  ].map((t, j) => (
                    <span key={j}>
                      <span className="ti-item">{t}</span>
                      <span className="ti-sep">·</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* ══ SERVICES ══ */}
          <section id="services" className="section">
            <div className="wrap">
              <div className="svc-wrap">
                <div className="svc-left rv">
                  <div className="s-tag">{t("services.tag")}</div>
                  <h2 className="s-h">
                    {t("services.title.line1")}
                    <br />
                    {t("services.title.line2")}
                    <br />
                    <span className="hi">{t("services.title.line3")}</span>
                  </h2>
                  <p className="s-p" style={{ marginBottom: 24 }}>
                    {t("services.desc")}
                  </p>
                  <div className="tech-row">
                    {[
                      "Make.com",
                      "n8n",
                      "GPT-4o",
                      "Claude",
                      "Vapi",
                      "ElevenLabs",
                      "WhatsApp API",
                      "Deepgram",
                      "Airtable",
                      "REST API",
                      "Webhooks",
                      "Slack",
                    ].map((pill, i) => (
                      <span key={i} className={`t-pill${i < 5 ? " on" : ""}`}>
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="svc-table rv d2">
                  {[
                    {
                      n: "01",
                      t: t("services.item1.title"),
                      p: t("services.item1.desc"),
                    },
                    {
                      n: "02",
                      t: t("services.item2.title"),
                      p: t("services.item2.desc"),
                    },
                    {
                      n: "03",
                      t: t("services.item3.title"),
                      p: t("services.item3.desc"),
                    },
                    {
                      n: "04",
                      t: t("services.item4.title"),
                      p: t("services.item4.desc"),
                    },
                    {
                      n: "05",
                      t: t("services.item5.title"),
                      p: t("services.item5.desc"),
                    },
                  ].map((s) => (
                    <div key={s.n} className="svc-row">
                      <span className="svc-num">{s.n}</span>
                      <div className="svc-body">
                        <h3>{s.t}</h3>
                        <p>{s.p}</p>
                      </div>
                      <span className="svc-arr">←</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ══ PROOF ══ */}
          <section id="proof" className="section">
            <div className="wrap">
              <div className="proof-top rv">
                <div className="s-tag">{t("proof.tag")}</div>
                <h2 className="s-h">
                  {t("proof.title.line1")}
                  <br />
                  {t("proof.title.line2")}{" "}
                  <span className="hi">{t("proof.title.line3")}</span>
                </h2>
                <p className="s-p" style={{ margin: "0 auto" }}>
                  {t("proof.desc")}
                </p>
              </div>

              <div className="proof-nums rv d2">
                <div className="pn-cell">
                  <span className="pn-label">{t("proof.stat1.label")}</span>
                  <span className="pn-num">{t("proof.stat1.value")}</span>
                  <p className="pn-desc">
                    {t("proof.stat1.desc")}{" "}
                    <strong>{t("proof.stat1.strong")}</strong>
                  </p>
                </div>
                <div className="pn-cell">
                  <span className="pn-label">{t("proof.stat2.label")}</span>
                  <span className="pn-num">{t("proof.stat2.value")}</span>
                  <p className="pn-desc">
                    {t("proof.stat2.desc")}{" "}
                    <strong>{t("proof.stat2.strong")}</strong>
                  </p>
                </div>
                <div className="pn-cell">
                  <span className="pn-label">{t("proof.stat3.label")}</span>
                  <span className="pn-num">{t("proof.stat3.value")}</span>
                  <p className="pn-desc">
                    {t("proof.stat3.desc")}{" "}
                    <strong>{t("proof.stat3.strong")}</strong>
                  </p>
                </div>
              </div>

              <div className="stories-grid rv d3">
                {[
                  {
                    tag: t("proof.story1.tag"),
                    big: t("proof.story1.value"),
                    title: t("proof.story1.title"),
                    desc: t("proof.story1.desc"),
                    q: t("proof.story1.quote"),
                    who: t("proof.story1.who"),
                  },
                  {
                    tag: t("proof.story2.tag"),
                    big: t("proof.story2.value"),
                    title: t("proof.story2.title"),
                    desc: t("proof.story2.desc"),
                    q: t("proof.story2.quote"),
                    who: t("proof.story2.who"),
                  },
                  {
                    tag: t("proof.story3.tag"),
                    big: t("proof.story3.value"),
                    title: t("proof.story3.title"),
                    desc: t("proof.story3.desc"),
                    q: t("proof.story3.quote"),
                    who: t("proof.story3.who"),
                  },
                ].map((s, i) => (
                  <div key={i} className="story">
                    <span className="story-tag">{s.tag}</span>
                    <span className="story-big">{s.big}</span>
                    <div className="story-title">{s.title}</div>
                    <p className="story-desc">{s.desc}</p>
                    <div className="story-q">
                      {s.q}
                      <div className="story-who">— {s.who}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ══ WORKFLOW ══ */}
          <section id="workflow" className="section">
            <div className="wrap">
              <div className="wf-top rv">
                <div className="s-tag">{t("workflow.tag")}</div>
                <h2 className="s-h">
                  {t("workflow.title.line1")}
                  <br />
                  {t("workflow.title.line2")}{" "}
                  <span className="hi">{t("workflow.title.line3")}</span>
                </h2>
                <p className="s-p" style={{ margin: "0 auto 44px" }}>
                  {t("workflow.desc")}
                </p>
              </div>

              <div className="terminal rv d2">
                <div className="term-bar">
                  <div className="td td-r" />
                  <div className="td td-y" />
                  <div className="td td-g" />
                  <span className="term-title">
                    {t("workflow.terminal.title")}
                  </span>
                  <div className="term-live">
                    <div className="tlive-dot" />
                    {t("workflow.terminal.live")}
                  </div>
                </div>
                <div className="term-body">
                  {[
                    {
                      n: "01",
                      ic: "ic-g",
                      icon: "📞",
                      name: t("workflow.step1.name"),
                      type: t("workflow.step1.type"),
                      st: "st-ok",
                      stl: t("workflow.step1.status"),
                    },
                    {
                      n: "02",
                      ic: "ic-b",
                      icon: "🗂",
                      name: t("workflow.step2.name"),
                      type: t("workflow.step2.type"),
                      st: "st-ok",
                      stl: t("workflow.step2.status"),
                    },
                    {
                      n: "03",
                      ic: "ic-b",
                      icon: "🔍",
                      name: t("workflow.step3.name"),
                      type: t("workflow.step3.type"),
                      st: "st-ok",
                      stl: t("workflow.step3.status"),
                    },
                    {
                      n: "04",
                      ic: "ic-a",
                      icon: "🔀",
                      name: t("workflow.step4.name"),
                      type: t("workflow.step4.type"),
                      st: "st-run",
                      stl: t("workflow.step4.status"),
                    },
                  ].map((r) => (
                    <div key={r.n} className="trow">
                      <span className="tr-n">{r.n}</span>
                      <div className={`tr-icon ${r.ic}`}>{r.icon}</div>
                      <span className="tr-name">{r.name}</span>
                      <span className="tr-type">{r.type}</span>
                      <span className={`tr-st ${r.st}`}>{r.stl}</span>
                    </div>
                  ))}

                  <div className="branch-sep">
                    <div className="bline" />
                    <span className="blabel">{t("workflow.branch")}</span>
                    <div className="bline" />
                  </div>

                  <div className="split">
                    <div className="sp-col">
                      <div className="sp-head sp-head-a">
                        {t("workflow.pathA")}
                      </div>
                      {[
                        ["💬", t("workflow.pathA.action1"), "team_alert"],
                        ["🌐", t("workflow.pathA.action2"), "external_sync"],
                        ["⏳", t("workflow.pathA.action3"), "optimal_timing"],
                        ["📲", t("workflow.pathA.action4"), "auto_followup"],
                      ].map(([ic, nm, tg], i) => (
                        <div key={i} className="sp-row">
                          <span className="sp-icon">{ic}</span>
                          <span className="sp-name">{nm}</span>
                          <span className="sp-tag">{tg}</span>
                        </div>
                      ))}
                    </div>
                    <div className="sp-col">
                      <div className="sp-head sp-head-b">
                        {t("workflow.pathB")}
                      </div>
                      {[
                        ["🔀", t("workflow.pathB.action1"), "status_check"],
                        ["💬", t("workflow.pathB.action2"), "context_aware"],
                        ["🌐", t("workflow.pathB.action3"), "update_record"],
                        ["⏰", t("workflow.pathB.action4"), "smart_schedule"],
                      ].map(([ic, nm, tg], i) => (
                        <div key={i} className="sp-row">
                          <span className="sp-icon">{ic}</span>
                          <span className="sp-name">{nm}</span>
                          <span className="sp-tag">{tg}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="wf-nums rv d3">
                {[
                  [t("workflow.stat1.value"), t("workflow.stat1.label")],
                  [t("workflow.stat2.value"), t("workflow.stat2.label")],
                  [t("workflow.stat3.value"), t("workflow.stat3.label")],
                  [t("workflow.stat4.value"), t("workflow.stat4.label")],
                ].map(([b, l], i) => (
                  <div key={i} className="wf-n">
                    <span className="wf-big">{b}</span>
                    <span className="wf-lab">{l}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ══ STACK ══ */}
          <section id="stack" className="section">
            <div className="wrap">
              <div className="stack-top rv">
                <div className="s-tag">{t("stack.tag")}</div>
                <h2 className="s-h">
                  {t("stack.title.line1")}
                  <br />
                  <span className="hi">{t("stack.title.line2")}</span>
                </h2>
                <p className="s-p" style={{ margin: "0 auto 48px" }}>
                  {t("stack.desc")}
                </p>
              </div>
              <div className="stack-grid rv d2">
                {[
                  {
                    n: "01 /",
                    cat: t("stack.card1.cat"),
                    title: t("stack.card1.title"),
                    desc: t("stack.card1.desc"),
                    tools: [
                      "gpt-4o",
                      "claude-3.5",
                      "gemini-1.5",
                      "llama-3",
                      "mistral",
                    ],
                  },
                  {
                    n: "02 /",
                    cat: t("stack.card2.cat"),
                    title: t("stack.card2.title"),
                    desc: t("stack.card2.desc"),
                    tools: [
                      "make.com",
                      "n8n",
                      "zapier",
                      "custom-api",
                      "webhooks",
                    ],
                  },
                  {
                    n: "03 /",
                    cat: t("stack.card3.cat"),
                    title: t("stack.card3.title"),
                    desc: t("stack.card3.desc"),
                    tools: ["vapi", "elevenlabs", "whisper", "deepgram"],
                  },
                ].map((c) => (
                  <div key={c.n} className="stack-card">
                    <span className="stack-card-num">{c.n}</span>
                    <div className="stack-cat">{c.cat}</div>
                    <div className="stack-title">{c.title}</div>
                    <div className="stack-desc">{c.desc}</div>
                    <div className="stack-tools">
                      {c.tools.map((t) => (
                        <span key={t} className="st-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ══ TESTIMONIALS ══ */}
          <section id="testimonials" className="section">
            <div className="wrap">
              <div className="testi-top rv">
                <div className="s-tag">{t("testimonials.tag")}</div>
                <h2 className="s-h">
                  {t("testimonials.title.line1")}
                  <br />
                  <span className="hi">{t("testimonials.title.line2")}</span>
                </h2>
              </div>
              <div className="testi-grid rv d2">
                {[
                  {
                    av: "ر",
                    q: t("testimonial1.quote"),
                    name: t("testimonial1.name"),
                    role: t("testimonial1.role"),
                    badge: t("testimonial1.badge"),
                  },
                  {
                    av: "ف",
                    q: t("testimonial2.quote"),
                    name: t("testimonial2.name"),
                    role: t("testimonial2.role"),
                    badge: t("testimonial2.badge"),
                  },
                  {
                    av: "ع",
                    q: t("testimonial3.quote"),
                    name: t("testimonial3.name"),
                    role: t("testimonial3.role"),
                    badge: t("testimonial3.badge"),
                  },
                  {
                    av: "خ",
                    q: t("testimonial4.quote"),
                    name: t("testimonial4.name"),
                    role: t("testimonial4.role"),
                    badge: t("testimonial4.badge"),
                  },
                ].map((t, i) => (
                  <div key={i} className="tcard">
                    <div className="tc-stars">★★★★★</div>
                    <div className="tc-q">{t.q}</div>
                    <div className="tc-who">
                      <div className="tc-av">{t.av}</div>
                      <div>
                        <div className="tc-name">{t.name}</div>
                        <div className="tc-role">{t.role}</div>
                      </div>
                      <div className="tc-badge">{t.badge}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rv d3">
                <div
                  className="s-tag"
                  style={{ justifyContent: "center", marginBottom: 20 }}
                >
                  {t("testimonials.sectors")}
                </div>
                <div className="sectors-wrap">
                  {[
                    t("sector.healthcare"),
                    t("sector.realestate"),
                    t("sector.retail"),
                    t("sector.logistics"),
                    t("sector.education"),
                    t("sector.banking"),
                    t("sector.hospitality"),
                    t("sector.government"),
                  ].map((s) => (
                    <span key={s} className="sector">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ══ CTA ══ */}
          <section id="cta" className="cta-section">
            <div className="cta-glow" />
            <div className="wrap">
              <div className="rv">
                <div className="cta-label">{t("cta.label")}</div>
                <h2 className="cta-h">
                  {t("cta.title.line1")}
                  <br />
                  <span className="dim">{t("cta.title.line2")}</span>
                </h2>
                <p className="cta-sub">{t("cta.subtitle")}</p>
                <div className="hero-ctas">
                  <a href="/demo" className="btn-primary">
                    {t("cta.button1")} ←
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
