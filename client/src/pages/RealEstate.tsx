import React, { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import "../index.css";

/* ── shared colour tokens ───────────────────── */
const PURPLE = "#672D92";
const PURPLE_RGB = "103,45,146";
const purpleBg = (a: number) => `rgba(${PURPLE_RGB},${a})`;
const purpleBorder = (a: number) => `rgba(${PURPLE_RGB},${a})`;
const purpleGradient = `linear-gradient(135deg, ${PURPLE}, #7f47ac)`;

export default function Realstate() {
  const { t, tList, lang } = useLanguage();
  const dir = lang === "ar" ? "rtl" : "ltr";

  const [activeSegment, setActiveSegment] = useState<number>(0);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [statsVisible, setStatsVisible] = useState<boolean>(false);
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0);
  const [isAnnual, setIsAnnual] = useState<boolean>(false);

  // ─── Segment config (keys only, text via t()) ──────────────────────────────
  const segmentKeys = ["offices", "developers", "property", "brokers"] as const;
  type SegKey = (typeof segmentKeys)[number];

  const segmentStats: Record<SegKey, string[]> = {
    offices: ["leads", "response", "deals"],
    developers: ["leads", "response", "deals"],
    property: ["satisfaction", "response", "efficiency"],
    brokers: ["leads", "response", "conversion"],
  };

  // ─── FAQ keys ─────────────────────────────────────────────────────────────
  const faqKeys = ["q1", "q2", "q3", "q4", "q5", "q6"];

  // ─── Stats keys ───────────────────────────────────────────────────────────
  const statKeys = ["stat1", "stat2", "stat3", "stat4"];

  // ─── Feature keys ─────────────────────────────────────────────────────────
  const featureKeys = ["feat1", "feat2", "feat3", "feat4", "feat5", "feat6"];

  // ─── Use case message counts ───────────────────────────────────────────────
  const usecase1MsgCount = 7;
  const usecase2MsgCount = 5;

  // ─── Testimonial keys ─────────────────────────────────────────────────────
  const testimonialKeys = ["test1", "test2", "test3"];

  // ─── Problem/Solution counts ───────────────────────────────────────────────
  const problemKeys = ["prob1", "prob2", "prob3", "prob4"];
  const solutionKeys = ["sol1", "sol2", "sol3", "sol4"];

  // ─── Pricing plans ────────────────────────────────────────────────────────
  const pricingPlans = [
    { key: "starter", featured: false },
    { key: "pro", featured: true },
    { key: "enterprise", featured: false },
  ] as const;

  // ─── Effects ──────────────────────────────────────────────────────────────
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonialKeys.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsVisible(true);
      },
      { threshold: 0.3 },
    );
    const statsSection = document.getElementById("re-stats-section");
    if (statsSection) observer.observe(statsSection);
    return () => observer.disconnect();
  }, []);

  // ─── Helpers ──────────────────────────────────────────────────────────────
  const activeSegKey = segmentKeys[activeSegment];

  const buildConversation = (
    usecaseKey: string,
    count: number,
  ): { role: "ai" | "user"; text: string }[] =>
    Array.from({ length: count }, (_, i) => {
      const idx = i + 1;
      const isAi = idx % 2 === 1;
      return {
        role: (isAi ? "ai" : "user") as "ai" | "user",
        text: t(`re.${usecaseKey}.msg${idx}.${isAi ? "ai" : "user"}`),
      };
    });

  return (
    <div
      dir={dir}
      className="min-h-screen bg-[var(--bg)] text-[var(--t1)]"
      style={{ fontFamily: "'din-next-lt-arabic-b4fd9f01e2', sans-serif" }}
    >
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${purpleBg(0.15)} 0%, transparent 70%)`,
          }}
        />
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(${purpleBg(0.04)} 1px, transparent 1px), linear-gradient(90deg, ${purpleBg(0.04)} 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse at center, black 20%, transparent 65%)",
          }}
        />
        <div
          className="absolute top-20 left-[10%] w-32 h-32 rounded-full opacity-20 float-gentle"
          style={{
            background: `radial-gradient(circle, ${purpleBg(0.3)}, transparent 70%)`,
          }}
        />
        <div
          className="absolute top-40 right-[15%] w-24 h-24 rounded-full opacity-15 float-slow"
          style={{
            background: `radial-gradient(circle, ${purpleBg(0.3)}, transparent 70%)`,
          }}
        />
        <div
          className="absolute bottom-32 left-[20%] w-20 h-20 rounded-full opacity-10 float-gentle"
          style={{
            background: `radial-gradient(circle, ${purpleBg(0.4)}, transparent 70%)`,
          }}
        />

        <div className="relative z-10 max-w-[820px] mx-auto">
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[13px] font-medium mb-7 animate-fade-up backdrop-blur-sm"
            style={{
              background: purpleBg(0.08),
              border: `1px solid ${purpleBorder(0.2)}`,
              color: PURPLE,
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: "#00d68f" }}
            />
            {t("re.hero.badge")}
          </div>

           <h1
            className="text-[clamp(38px,5.5vw,68px)] font-bold leading-[1.08] tracking-tight mb-6 max-w-4xl mx-auto animate-fade-up animation-delay-100"
            style={{ color: PURPLE }}
          >
            {t("re.hero.title")} <br /> {t("re.hero.title_span")}
          </h1>
          <p className="text-[clamp(16px,1.8vw,19px)] font-semibold text-[var(--t1)] max-w-[580px] mx-auto leading-relaxed mb-4 animate-fade-up animation-delay-150">
            {t("re.hero.subtitle")}
          </p>

          <p className="text-[clamp(14px,1.6vw,17px)] text-[var(--t2)] max-w-[680px] mx-auto leading-relaxed mb-9 animate-fade-up animation-delay-200">
            {t("re.hero.proof")}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-up animation-delay-300">
            {(["stat1", "stat2", "stat3"] as const).map((sk) => (
              <div
                key={sk}
                className="px-5 py-4 rounded-2xl text-center backdrop-blur-xl border shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all hover:shadow-xl hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.85)",
                  borderColor: purpleBorder(0.15),
                }}
              >
                <div className="text-2xl mb-1">{t(`re.hero.${sk}.icon`)}</div>
                <div className="text-xl font-bold" style={{ color: PURPLE }}>
                  {t(`re.hero.${sk}.value`)}
                </div>
                <div className="text-xs text-[var(--t3)]">
                  {t(`re.hero.${sk}.label`)}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-3.5 mb-12 flex-wrap animate-fade-up animation-delay-300">
            <a
              href="/demo"
              className="group inline-flex items-center gap-2 px-8 py-3.5 text-[15px] font-semibold text-white rounded-full hover:-translate-y-1 transition-all duration-300"
              style={{
                background: purpleGradient,
                boxShadow: `0 4px 20px ${purpleBg(0.35)}`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 40px ${purpleBg(0.45)}`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 20px ${purpleBg(0.35)}`;
              }}
            >
              {t("re.hero.cta")}
            </a>
          </div>
        </div>
      </section>

      {/* ==================== PROBLEMS SECTION ==================== */}
      <section className="py-20 bg-[var(--bg2)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4 text-[#0a0a0a]">
              {t("re.problems.title")} {t("re.problems.title_span")}
            </h2>
          </div>

          {/* Problems grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {problemKeys.map((pk) => (
              <div
                key={pk}
                className="p-6 rounded-2xl text-center transition-all hover:shadow-lg backdrop-blur-xl border"
                style={{
                  background: "rgba(255,255,255,0.85)",
                  borderColor: "rgba(239,68,68,0.2)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(239,68,68,0.35)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(239,68,68,0.2)";
                }}
              >
                <div
                  className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl"
                  style={{ background: "rgba(239,68,68,0.07)" }}
                >
                  {t(`re.${pk}.icon`)}
                </div>
                <h3 className="font-bold mb-2 text-[var(--t1)]">
                  {t(`re.${pk}.title`)}
                </h3>
                <p className="text-sm text-[var(--t2)]">{t(`re.${pk}.desc`)}</p>
              </div>
            ))}
          </div>

          {/* Bridge */}
          <div className="text-center my-12">
            <div
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl border"
              style={{
                background: purpleBg(0.06),
                borderColor: purpleBorder(0.15),
              }}
            >
              <span className="text-2xl">⬇️</span>
              <span className="font-bold" style={{ color: PURPLE }}>
                {t("re.bridge.text")}
              </span>
              <span className="text-2xl">⬇️</span>
            </div>
          </div>

          {/* Solutions grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutionKeys.map((sk) => (
              <div
                key={sk}
                className="p-6 rounded-2xl text-center transition-all hover:shadow-xl hover:-translate-y-1 backdrop-blur-xl border"
                style={{
                  background: "rgba(255,255,255,0.85)",
                  borderColor: purpleBorder(0.2),
                }}
              >
                <div
                  className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl text-white shadow-lg"
                  style={{ background: purpleGradient }}
                >
                  {t(`re.${sk}.icon`)}
                </div>
                <h3 className="font-bold mb-2 text-[var(--t1)]">
                  {t(`re.${sk}.title`)}
                </h3>
                <p className="text-sm text-[var(--t2)]">{t(`re.${sk}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== STATS SECTION ==================== */}
      <section id="re-stats-section" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statKeys.map((sk) => (
              <div key={sk} className="text-center group">
                <div
                  className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl backdrop-blur-xl border shadow-[0_4px_14px_rgba(0,0,0,0.05)] transition-transform group-hover:scale-110"
                  style={{
                    background: "rgba(255,255,255,0.85)",
                    borderColor: purpleBorder(0.1),
                  }}
                >
                  {t(`re.stats.${sk}.icon`)}
                </div>
                <div
                  className="text-3xl sm:text-4xl font-bold mb-2"
                  style={{ color: PURPLE }}
                >
                  {statsVisible ? t(`re.stats.${sk}.value`) : "—"}
                </div>
                <div className="text-sm font-medium text-[var(--t2)]">
                  {t(`re.stats.${sk}.label`)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SEGMENTS SECTION ==================== */}
      <section id="solutions" className="py-24 px-6 bg-[var(--bg2)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4 text-[#0a0a0a]">
              {t("re.segments.title")} {t("re.segments.title_span")}
            </h2>
            <p className="text-[var(--t2)] text-lg">
              {t("re.segments.subtitle")}
            </p>
          </div>

          {/* Segment tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {segmentKeys.map((key, idx) => {
              const isActive = activeSegment === idx;
              return (
                <button
                  key={key}
                  onClick={() => setActiveSegment(idx)}
                  className="px-5 py-2.5 rounded-full flex items-center gap-2 text-[13px] font-medium transition-all duration-300 border backdrop-blur-sm"
                  style={{
                    background: isActive ? purpleGradient : purpleBg(0.04),
                    color: isActive ? "#fff" : "var(--t2)",
                    borderColor: isActive
                      ? purpleBorder(0.4)
                      : purpleBorder(0.12),
                    boxShadow: isActive
                      ? `0 4px 20px ${purpleBg(0.3)}`
                      : "none",
                  }}
                >
                  <span className="text-2xl">{t(`re.seg.${key}.icon`)}</span>
                  <span>{t(`re.seg.${key}.name`)}</span>
                </button>
              );
            })}
          </div>

          {/* Segment detail panel */}
          <div
            className="rounded-3xl overflow-hidden border"
            style={{
              borderColor: purpleBorder(0.15),
              boxShadow: `0 20px 60px ${purpleBg(0.12)}`,
            }}
          >
            <div className="grid md:grid-cols-2">
              {/* Pain points */}
              <div
                className="p-8 sm:p-10 border-b md:border-b-0 md:border-l"
                style={{
                  background: "rgba(239,68,68,0.05)",
                  borderColor: purpleBorder(0.08),
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">😫</span>
                  <h3 className="text-xl font-bold text-red-400">
                    {t("re.segments.pain_title")}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {(["pain1", "pain2", "pain3"] as const).map((pk) => (
                    <li key={pk} className="flex items-start gap-3">
                      <span className="text-red-400 mt-1">✗</span>
                      <span className="text-[var(--t2)]">
                        {t(`re.seg.${activeSegKey}.${pk}`)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions */}
              <div className="p-8 sm:p-10" style={{ background: purpleBg(0.04) }}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">🎉</span>
                  <h3 className="text-xl font-bold" style={{ color: PURPLE }}>
                    {t("re.segments.sol_title")}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {(["sol1", "sol2", "sol3"] as const).map((sk) => (
                    <li key={sk} className="flex items-start gap-3">
                      <span style={{ color: PURPLE }}>✓</span>
                      <span className="text-[var(--t1)]">
                        {t(`re.seg.${activeSegKey}.${sk}`)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Segment stats */}
            <div
              className="p-6 bg-[var(--bg)] border-t"
              style={{ borderColor: purpleBorder(0.08) }}
            >
              <div className="flex flex-wrap justify-center gap-8">
                {segmentStats[activeSegKey].map((statKey) => (
                  <div key={statKey} className="text-center">
                    <div
                      className="text-2xl font-bold"
                      style={{ color: PURPLE }}
                    >
                      {t(`re.seg.${activeSegKey}.stat.${statKey}`)}
                    </div>
                    <div className="text-sm text-[var(--t3)]">
                      {t(`re.stat_label.${statKey}`)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FEATURES SECTION ==================== */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4 text-[#0a0a0a]">
              {t("re.features.title")} {t("re.features.title_span")}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featureKeys.map((fk) => (
              <div
                key={fk}
                className="group p-8 rounded-3xl backdrop-blur-xl border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                style={{
                  background: "rgba(255,255,255,0.85)",
                  borderColor: purpleBorder(0.1),
                  boxShadow: "none",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = purpleBorder(0.3);
                  el.style.boxShadow = `0 0 40px ${purpleBg(0.1)}`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = purpleBorder(0.1);
                  el.style.boxShadow = "none";
                }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: purpleBg(0.06) }}
                >
                  {t(`re.${fk}.icon`)}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[var(--t1)]">
                  {t(`re.${fk}.title`)}
                </h3>
                <p className="text-sm mb-5 leading-relaxed text-[var(--t2)]">
                  {t(`re.${fk}.desc`)}
                </p>
                <span
                  className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold border"
                  style={{
                    background: purpleBg(0.08),
                    color: PURPLE,
                    borderColor: purpleBorder(0.15),
                  }}
                >
                  {t(`re.${fk}.highlight`)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== USE CASES ==================== */}
      <section id="usecases" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4 text-[#0a0a0a]">
              {t("re.usecases.title")} {t("re.usecases.title_span")}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Use case 1 */}
            <div
              className="rounded-3xl overflow-hidden backdrop-blur-xl border"
              style={{
                background: "rgba(255,255,255,0.85)",
                borderColor: purpleBorder(0.1),
                boxShadow: `0 0 40px ${purpleBg(0.08)}`,
              }}
            >
              <div
                className="px-6 py-4 font-bold text-[var(--t1)] border-b"
                style={{
                  background: purpleBg(0.06),
                  borderColor: purpleBorder(0.08),
                }}
              >
                {t("re.usecase1.title")}
              </div>
              <div className="p-6 space-y-4">
                {buildConversation("usecase1", usecase1MsgCount).map(
                  (msg, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-2xl text-sm"
                      style={
                        msg.role === "ai"
                          ? {
                              borderRadius: "1rem 1rem 1rem 0.25rem",
                              maxWidth: "85%",
                              marginLeft: "auto",
                              marginRight: 0,
                              background: purpleBg(0.06),
                              border: `1px solid ${purpleBorder(0.1)}`,
                              color: "var(--t1)",
                            }
                          : {
                              borderRadius: "1rem 1rem 0.25rem 1rem",
                              maxWidth: "75%",
                              marginLeft: 0,
                              marginRight: "auto",
                              background: purpleGradient,
                              color: "#fff",
                            }
                      }
                    >
                      {msg.text}
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Use case 2 */}
            <div
              className="rounded-3xl overflow-hidden backdrop-blur-xl border"
              style={{
                background: "rgba(255,255,255,0.85)",
                borderColor: purpleBorder(0.1),
                boxShadow: `0 0 40px ${purpleBg(0.08)}`,
              }}
            >
              <div
                className="px-6 py-4 font-bold text-[var(--t1)] border-b"
                style={{
                  background: purpleBg(0.06),
                  borderColor: purpleBorder(0.08),
                }}
              >
                {t("re.usecase2.title")}
              </div>
              <div className="p-6 space-y-4">
                {buildConversation("usecase2", usecase2MsgCount).map(
                  (msg, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-2xl text-sm"
                      style={
                        msg.role === "ai"
                          ? {
                              borderRadius: "1rem 1rem 1rem 0.25rem",
                              maxWidth: "85%",
                              marginLeft: "auto",
                              marginRight: 0,
                              background: purpleBg(0.06),
                              border: `1px solid ${purpleBorder(0.1)}`,
                              color: "var(--t1)",
                            }
                          : {
                              borderRadius: "1rem 1rem 0.25rem 1rem",
                              maxWidth: "75%",
                              marginLeft: 0,
                              marginRight: "auto",
                              background: purpleGradient,
                              color: "#fff",
                            }
                      }
                    >
                      {msg.text}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="py-24 px-6 bg-[var(--bg2)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4 text-[#0a0a0a]">
              {t("re.testimonials.title")} {t("re.testimonials.title_span")}
            </h2>
          </div>
          <div
            className="max-w-4xl mx-auto p-10 sm:p-14 rounded-3xl backdrop-blur-xl border relative"
            style={{
              background: "rgba(255,255,255,0.85)",
              borderColor: purpleBorder(0.15),
              boxShadow: `0 0 60px ${purpleBg(0.1)}`,
            }}
          >
            <div
              className="absolute top-6 right-8 text-8xl font-serif opacity-10"
              style={{ color: PURPLE }}
            >
              &ldquo;
            </div>
            <p className="text-xl sm:text-2xl leading-relaxed mb-8 text-[var(--t1)]">
              {t(`re.${testimonialKeys[currentTestimonial]}.quote`)}
            </p>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl text-white shadow-lg"
                  style={{ background: purpleGradient }}
                >
                  👨‍💼
                </div>
                <div>
                  <div className="font-bold text-lg text-[var(--t1)]">
                    {t(`re.${testimonialKeys[currentTestimonial]}.name`)}
                  </div>
                  <div className="text-sm text-[var(--t2)]">
                    {t(`re.${testimonialKeys[currentTestimonial]}.role`)} ·{" "}
                    {t(`re.${testimonialKeys[currentTestimonial]}.company`)}
                  </div>
                </div>
              </div>
              <div
                className="px-4 py-2 rounded-xl font-bold border"
                style={{
                  background: purpleBg(0.08),
                  color: PURPLE,
                  borderColor: purpleBorder(0.2),
                }}
              >
                {t(`re.${testimonialKeys[currentTestimonial]}.metric`)}
              </div>
            </div>
            <div className="flex justify-center gap-3 mt-10">
              {testimonialKeys.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className="h-3 rounded-full transition-all duration-300"
                  style={{
                    background:
                      currentTestimonial === idx
                        ? purpleGradient
                        : purpleBg(0.2),
                    width: currentTestimonial === idx ? "32px" : "12px",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PRICING ==================== */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-6 text-[#0a0a0a]">
              {t("re.pricing.title")} {t("re.pricing.title_span")}
            </h2>

            {/* Monthly / Annual toggle */}
            <div
              className="inline-flex items-center gap-1 p-1 rounded-full border"
              style={{
                background: purpleBg(0.08),
                borderColor: purpleBorder(0.15),
              }}
            >
              <button
                onClick={() => setIsAnnual(false)}
                className="px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300"
                style={{
                  background: !isAnnual ? purpleGradient : "transparent",
                  color: !isAnnual ? "#fff" : "var(--t2)",
                  boxShadow: !isAnnual
                    ? `0 2px 10px ${purpleBg(0.3)}`
                    : "none",
                }}
              >
                {t("re.pricing.monthly")}
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className="px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300"
                style={{
                  background: isAnnual ? purpleGradient : "transparent",
                  color: isAnnual ? "#fff" : "var(--t2)",
                  boxShadow: isAnnual
                    ? `0 2px 10px ${purpleBg(0.3)}`
                    : "none",
                }}
              >
                {t("re.pricing.annual")}
              </button>
            </div>

            {isAnnual && (
              <p className="mt-3 text-sm text-emerald-500 font-medium">
                {t("re.pricing.save")}
              </p>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map(({ key, featured }) => {
              const period = isAnnual ? "annual" : "monthly";
              const features = tList(`re.pricing.${key}.features`);

              if (featured) {
                return (
                  <div
                    key={key}
                    className="p-8 rounded-3xl relative border-2"
                    style={{
                      background: purpleGradient,
                      borderColor: purpleBorder(0.6),
                      boxShadow: `0 0 30px ${purpleBg(0.3)}`,
                    }}
                  >
                    <span
                      className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-3 py-1 rounded-full font-bold shadow"
                      style={{ background: "#fff", color: PURPLE }}
                    >
                      {t("re.pricing.popular")}
                    </span>
                    <div className="flex items-center gap-2 mb-3 mt-2">
                      <span className="text-xl">
                        {t(`re.pricing.${key}.tier`)}
                      </span>
                      <span className="text-sm font-bold text-white">
                        {t(`re.pricing.${key}.name`)}
                      </span>
                    </div>
                    <p className="text-[clamp(24px,2.5vw,32px)] font-bold tracking-tight mb-1 text-white transition-all duration-300">
                      {t(`re.pricing.${key}.price.${period}`)}{" "}
                      {lang === "ar" ? "ر.س" : "SAR"}
                    </p>
                    <p className="text-sm mb-6" style={{ color: "#e0d0f0" }}>
                      {t(`re.pricing.${key}.desc.${period}`)}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {features.map((item, i) => (
                        <li key={i} className="text-sm flex gap-2 text-white">
                          <span>✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="/demo"
                      className="block w-full py-3 rounded-full text-center font-semibold transition-opacity"
                      style={{ background: "#fff", color: PURPLE }}
                    >
                      {t(`re.pricing.${key}.cta`)}
                    </a>
                  </div>
                );
              }

              return (
                <div
                  key={key}
                  className="p-8 rounded-3xl backdrop-blur-xl border"
                  style={{
                    background: "rgba(255,255,255,0.85)",
                    borderColor: purpleBorder(0.12),
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">
                      {t(`re.pricing.${key}.tier`)}
                    </span>
                    <span className="text-sm font-bold text-[var(--t1)]">
                      {t(`re.pricing.${key}.name`)}
                    </span>
                  </div>
                  <p className="text-[clamp(24px,2.5vw,32px)] font-bold tracking-tight mb-1 text-[var(--t1)] transition-all duration-300">
                    {t(`re.pricing.${key}.price.${period}`)}{" "}
                    {lang === "ar" ? "ر.س" : "SAR"}
                  </p>
                  <p className="text-sm mb-6 text-[var(--t2)]">
                    {t(`re.pricing.${key}.desc.${period}`)}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {features.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm flex gap-2 text-[var(--t2)]"
                      >
                        <span>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/demo"
                    className="block w-full py-3 rounded-full text-center font-semibold border transition-all duration-300"
                    style={{
                      borderColor: purpleBorder(0.2),
                      color: "var(--t1)",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = purpleBg(0.05);
                      el.style.borderColor = purpleBorder(0.35);
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = "transparent";
                      el.style.borderColor = purpleBorder(0.2);
                    }}
                  >
                    {t(`re.pricing.${key}.cta`)}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="py-24 px-6 bg-[var(--bg2)]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4 text-[#0a0a0a]">
              {t("re.faq.title")} {t("re.faq.title_span")}
            </h2>
          </div>
          <div className="space-y-4">
            {faqKeys.map((fk, idx) => {
              const open = activeFAQ === idx;
              return (
                <div
                  key={fk}
                  className="rounded-2xl overflow-hidden backdrop-blur-xl border transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.85)",
                    borderColor: open
                      ? purpleBorder(0.25)
                      : purpleBorder(0.1),
                  }}
                >
                  <button
                    className="w-full flex items-center justify-between px-6 py-5 text-right font-semibold text-[var(--t1)]"
                    onClick={() => setActiveFAQ(open ? null : idx)}
                  >
                    {t(`re.faq.${fk}`)}
                    <span
                      className="text-xl ml-4 flex-shrink-0"
                      style={{ color: PURPLE }}
                    >
                      {open ? "−" : "+"}
                    </span>
                  </button>
                  {open && (
                    <div className="px-6 pb-5 text-sm leading-relaxed text-[var(--t2)]">
                      {t(`re.faq.${fk.replace("q", "a")}`)}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="py-24 px-6" style={{ background: purpleGradient }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">{t("re.cta.icon")}</div>
          <h2 className="text-[clamp(28px,4vw,48px)] font-bold leading-[1.08] tracking-tight mb-6 text-white">
            {t("re.cta.title")}
            <br />
            {t("re.cta.title2")}
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
            {t("re.cta.subtitle")}
          </p>
          <div className="flex justify-center mb-12">
            <a
              href="/demo"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.95)",
                color: PURPLE,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(255,255,255,0.95)";
              }}
            >
              {t("re.cta.button")}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}