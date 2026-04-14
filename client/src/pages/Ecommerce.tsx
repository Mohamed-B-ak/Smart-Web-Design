import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import "../index.css";

/* ── shared colour tokens ───────────────────── */
const PURPLE = "#672D92";
const PURPLE_RGB = "103,45,146";
const purpleBg = (a: number) => `rgba(${PURPLE_RGB},${a})`;
const purpleBorder = (a: number) => `rgba(${PURPLE_RGB},${a})`;
const purpleGradient = `linear-gradient(135deg, ${PURPLE}, #7f47ac)`;

const SondosEcommerce = () => {
  const { t, lang } = useLanguage();
  const [activeSegment, setActiveSegment] = useState(0);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const [roiInputs, setRoiInputs] = useState({
    dailyOrders: 150,
    supportCalls: 80,
    avgOrderValue: 350,
    cartAbandonment: 70,
    returnRate: 15,
  });

  const testimonials = [
    {
      quote: t("ecom.testimonial1.quote"),
      name: t("ecom.testimonial1.name"),
      role: t("ecom.testimonial1.role"),
      company: t("ecom.testimonial1.company"),
      image: "👨‍💻",
      metric: t("ecom.testimonial1.metric"),
    },
    {
      quote: t("ecom.testimonial2.quote"),
      name: t("ecom.testimonial2.name"),
      role: t("ecom.testimonial2.role"),
      company: t("ecom.testimonial2.company"),
      image: "👩‍💼",
      metric: t("ecom.testimonial2.metric"),
    },
    {
      quote: t("ecom.testimonial3.quote"),
      name: t("ecom.testimonial3.name"),
      role: t("ecom.testimonial3.role"),
      company: t("ecom.testimonial3.company"),
      image: "🧔",
      metric: t("ecom.testimonial3.metric"),
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
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
    const statsSection = document.getElementById("stats-section");
    if (statsSection) observer.observe(statsSection);
    return () => observer.disconnect();
  }, []);

  const segments = [
    {
      id: "stores",
      name: t("ecom.segment.stores.name"),
      icon: "🛒",
      description: t("ecom.segment.stores.desc"),
      painPoints: [
        t("ecom.segment.stores.pain1"),
        t("ecom.segment.stores.pain2"),
        t("ecom.segment.stores.pain3"),
      ],
      solutions: [
        t("ecom.segment.stores.sol1"),
        t("ecom.segment.stores.sol2"),
        t("ecom.segment.stores.sol3"),
      ],
      stats: { support: "-60%", recovery: "+35%", satisfaction: "96%" },
    },
    {
      id: "marketplace",
      name: t("ecom.segment.marketplace.name"),
      icon: "🏪",
      description: t("ecom.segment.marketplace.desc"),
      painPoints: [
        t("ecom.segment.marketplace.pain1"),
        t("ecom.segment.marketplace.pain2"),
        t("ecom.segment.marketplace.pain3"),
      ],
      solutions: [
        t("ecom.segment.marketplace.sol1"),
        t("ecom.segment.marketplace.sol2"),
        t("ecom.segment.marketplace.sol3"),
      ],
      stats: {
        rating: "4.9⭐",
        response: t("ecom.stat.under1min"),
        efficiency: "+70%",
      },
    },
    {
      id: "dropshipping",
      name: t("ecom.segment.dropshipping.name"),
      icon: "📦",
      description: t("ecom.segment.dropshipping.desc"),
      painPoints: [
        t("ecom.segment.dropshipping.pain1"),
        t("ecom.segment.dropshipping.pain2"),
        t("ecom.segment.dropshipping.pain3"),
      ],
      solutions: [
        t("ecom.segment.dropshipping.sol1"),
        t("ecom.segment.dropshipping.sol2"),
        t("ecom.segment.dropshipping.sol3"),
      ],
      stats: {
        complaints: "-50%",
        tracking: t("ecom.stat.automatic"),
        retention: "+40%",
      },
    },
    {
      id: "subscriptions",
      name: t("ecom.segment.subscriptions.name"),
      icon: "🔄",
      description: t("ecom.segment.subscriptions.desc"),
      painPoints: [
        t("ecom.segment.subscriptions.pain1"),
        t("ecom.segment.subscriptions.pain2"),
        t("ecom.segment.subscriptions.pain3"),
      ],
      solutions: [
        t("ecom.segment.subscriptions.sol1"),
        t("ecom.segment.subscriptions.sol2"),
        t("ecom.segment.subscriptions.sol3"),
      ],
      stats: { churn: "-25%", renewal: "+30%", LTV: "+45%" },
    },
  ];

  const features = [
    {
      icon: "📍",
      title: t("ecom.feature.tracking.title"),
      description: t("ecom.feature.tracking.desc"),
      highlight: t("ecom.feature.tracking.highlight"),
    },
    {
      icon: "🛒",
      title: t("ecom.feature.cart.title"),
      description: t("ecom.feature.cart.desc"),
      highlight: t("ecom.feature.cart.highlight"),
    },
    {
      icon: "↩️",
      title: t("ecom.feature.returns.title"),
      description: t("ecom.feature.returns.desc"),
      highlight: t("ecom.feature.returns.highlight"),
    },
    {
      icon: "💬",
      title: t("ecom.feature.faq.title"),
      description: t("ecom.feature.faq.desc"),
      highlight: t("ecom.feature.faq.highlight"),
    },
    {
      icon: "⭐",
      title: t("ecom.feature.reviews.title"),
      description: t("ecom.feature.reviews.desc"),
      highlight: t("ecom.feature.reviews.highlight"),
    },
    {
      icon: "🎁",
      title: t("ecom.feature.upsell.title"),
      description: t("ecom.feature.upsell.desc"),
      highlight: t("ecom.feature.upsell.highlight"),
    },
  ];

  const faqs = [
    { q: t("ecom.faq1.q"), a: t("ecom.faq1.a") },
    { q: t("ecom.faq2.q"), a: t("ecom.faq2.a") },
    { q: t("ecom.faq3.q"), a: t("ecom.faq3.a") },
    { q: t("ecom.faq4.q"), a: t("ecom.faq4.a") },
    { q: t("ecom.faq5.q"), a: t("ecom.faq5.a") },
    { q: t("ecom.faq6.q"), a: t("ecom.faq6.a") },
  ];

  const stats = [
    { value: "500K+", label: t("ecom.stat.orders"), icon: "📦" },
    { value: "200+", label: t("ecom.stat.stores"), icon: "🛒" },
    { value: "35%", label: t("ecom.stat.recovery"), icon: "💰" },
    {
      value: t("ecom.stat.under5sec"),
      label: t("ecom.stat.response"),
      icon: "⚡",
    },
  ];

  const integrations = [
    {
      name: t("ecom.integration.salla"),
      icon: "🛍️",
      type: t("ecom.integration.type.platform"),
    },
    {
      name: t("ecom.integration.zid"),
      icon: "⚡",
      type: t("ecom.integration.type.platform"),
    },
    { name: "Shopify", icon: "🛒", type: t("ecom.integration.type.platform") },
    {
      name: "WooCommerce",
      icon: "🔌",
      type: t("ecom.integration.type.platform"),
    },
    {
      name: t("ecom.integration.aramex"),
      icon: "📦",
      type: t("ecom.integration.type.shipping"),
    },
    {
      name: t("ecom.integration.smsa"),
      icon: "🚚",
      type: t("ecom.integration.type.shipping"),
    },
    { name: "DHL", icon: "✈️", type: t("ecom.integration.type.shipping") },
    {
      name: t("ecom.integration.tabby"),
      icon: "💳",
      type: t("ecom.integration.type.payment"),
    },
    {
      name: t("ecom.integration.tamara"),
      icon: "💰",
      type: t("ecom.integration.type.payment"),
    },
    {
      name: "WhatsApp",
      icon: "💬",
      type: t("ecom.integration.type.communication"),
    },
  ];

  const useCases = [
    {
      title: t("ecom.usecase.tracking.title"),
      conversation: [
        { role: "ai", text: t("ecom.usecase.tracking.msg1") },
        { role: "user", text: t("ecom.usecase.tracking.msg2") },
        { role: "ai", text: t("ecom.usecase.tracking.msg3") },
        { role: "user", text: t("ecom.usecase.tracking.msg4") },
        { role: "ai", text: t("ecom.usecase.tracking.msg5") },
      ],
    },
    {
      title: t("ecom.usecase.cart.title"),
      conversation: [
        { role: "ai", text: t("ecom.usecase.cart.msg1") },
        { role: "user", text: t("ecom.usecase.cart.msg2") },
        { role: "ai", text: t("ecom.usecase.cart.msg3") },
        { role: "user", text: t("ecom.usecase.cart.msg4") },
        { role: "ai", text: t("ecom.usecase.cart.msg5") },
      ],
    },
  ];

  const statKeyLabel = (key: string) => {
    const labels: Record<string, string> = {
      support: t("ecom.stat.support"),
      recovery: t("ecom.stat.recovery"),
      satisfaction: t("ecom.stat.satisfaction"),
      rating: t("ecom.stat.rating"),
      response: t("ecom.stat.response"),
      efficiency: t("ecom.stat.efficiency"),
      complaints: t("ecom.stat.complaints"),
      tracking: t("ecom.stat.tracking"),
      retention: t("ecom.stat.retention"),
      churn: t("ecom.stat.churn"),
      renewal: t("ecom.stat.renewal"),
      LTV: t("ecom.stat.ltv"),
    };
    return labels[key] ?? key;
  };

  return (
    <div
      dir={lang === "ar" ? "rtl" : "ltr"}
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
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[13px] font-medium mb-7 backdrop-blur-sm"
            style={{
              background: purpleBg(0.08),
              border: `1px solid ${purpleBorder(0.2)}`,  // ✅ FIX 1
              color: PURPLE,
            }}
          >
            <span className="text-lg">🛒</span>
            <span>{t("ecom.hero.badge")}</span>
          </div>

          <h1
            className="text-[clamp(38px,5.5vw,68px)] font-bold leading-[1.08] tracking-tight mb-6"
            style={{ color: PURPLE }}
          >
            {t("ecom.hero.title1")} {t("ecom.hero.title2")}
            <br />
            {t("ecom.hero.title3")}
          </h1>

          <p className="text-[clamp(16px,1.8vw,19px)] font-semibold text-[var(--t1)] max-w-[580px] mx-auto leading-relaxed mb-4">
            {t("ecom.hero.subtitle")}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              {
                value: t("ecom.hero.stat1.value"),
                label: t("ecom.hero.stat1.label"),
                icon: "💰",
              },
              {
                value: t("ecom.hero.stat2.value"),
                label: t("ecom.hero.stat2.label"),
                icon: "🤖",
              },
              {
                value: t("ecom.hero.stat3.value"),
                label: t("ecom.hero.stat3.label"),
                icon: "⚡",
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="px-5 py-4 rounded-2xl text-center backdrop-blur-xl border shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all hover:shadow-xl hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.85)",
                  borderColor: purpleBorder(0.15),
                }}
              >
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-xl font-bold" style={{ color: PURPLE }}>
                  {stat.value}
                </div>
                <div className="text-xs text-[var(--t3)]">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center justify-center gap-3.5 mb-10 flex-wrap">
            <a
              href="/demo"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-[15px] font-semibold text-white rounded-full hover:-translate-y-1 transition-all duration-300"
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
              {t("ecom.hero.cta")}
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              t("ecom.hero.badge1"),
              t("ecom.hero.badge2"),
              t("ecom.hero.badge3"),
            ].map((badge, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full text-xs font-medium border"
                style={{
                  background: purpleBg(0.08),
                  color: PURPLE,
                  borderColor: purpleBorder(0.15),
                }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PROBLEMS SECTION ==================== */}
      <section className="py-20 bg-[var(--bg)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4 text-[#0a0a0a]">
              {t("ecom.problems.title")} {t("ecom.problems.title2")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: "🛒",
                title: t("ecom.problem1.title"),
                desc: t("ecom.problem1.desc"),
              },
              {
                icon: "❓",
                title: t("ecom.problem2.title"),
                desc: t("ecom.problem2.desc"),
              },
              {
                icon: "↩️",
                title: t("ecom.problem3.title"),
                desc: t("ecom.problem3.desc"),
              },
              {
                icon: "😤",
                title: t("ecom.problem4.title"),
                desc: t("ecom.problem4.desc"),
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl text-center transition-all hover:shadow-lg backdrop-blur-xl border"
                style={{
                  background: "rgba(255,255,255,0.85)",
                  borderColor: "rgba(239,68,68,0.2)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(239,68,68,0.35)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(239,68,68,0.2)";
                }}
              >
                <div
                  className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl"
                  style={{ background: "rgba(239,68,68,0.08)" }}
                >
                  {item.icon}
                </div>
                <h3 className="font-bold mb-2 text-[var(--t1)]">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--t2)]">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Solution Arrow */}
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
                {t("ecom.problems.solution")}
              </span>
              <span className="text-2xl">⬇️</span>
            </div>
          </div>

          {/* Solutions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "💰",
                title: t("ecom.solution1.title"),
                desc: t("ecom.solution1.desc"),
              },
              {
                icon: "📍",
                title: t("ecom.solution2.title"),
                desc: t("ecom.solution2.desc"),
              },
              {
                icon: "🔄",
                title: t("ecom.solution3.title"),
                desc: t("ecom.solution3.desc"),
              },
              {
                icon: "⭐",
                title: t("ecom.solution4.title"),
                desc: t("ecom.solution4.desc"),
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl text-center transition-all hover:shadow-xl hover:-translate-y-1 backdrop-blur-xl border"
                style={{
                  background: "rgba(255,255,255,0.85)",
                  borderColor: purpleBorder(0.1),
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = purpleBorder(0.25);
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = purpleBorder(0.1);
                }}
              >
                <div
                  className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl text-white shadow-lg"
                  style={{ background: purpleGradient }}
                >
                  {item.icon}
                </div>
                <h3 className="font-bold mb-2 text-[var(--t1)]">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--t2)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== STATS SECTION ==================== */}
      <section id="stats-section" className="py-16 px-6 bg-[var(--bg2)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div
                  className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl backdrop-blur-xl border shadow-[0_4px_14px_rgba(0,0,0,0.05)] transition-transform group-hover:scale-110"
                  style={{
                    background: "rgba(255,255,255,0.85)",
                    borderColor: purpleBorder(0.1),
                  }}
                >
                  {stat.icon}
                </div>
                <div
                  className="text-3xl sm:text-4xl font-bold mb-2"
                  style={{ color: PURPLE }}
                >
                  {statsVisible ? stat.value : "—"}
                </div>
                <div className="text-sm font-medium text-[var(--t2)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SEGMENTS SECTION ==================== */}
      <section id="solutions" className="py-24 px-6 bg-[var(--bg)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4 text-[#0a0a0a]">
              {t("ecom.segments.title")} {t("ecom.segments.title2")}
            </h2>
          </div>

          {/* Segment Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {segments.map((segment, idx) => {
              const isActive = activeSegment === idx;
              return (
                <button
                  key={segment.id}
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
                  <span className="text-xl">{segment.icon}</span>
                  <span className="hidden sm:inline">{segment.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Segment Details */}
          <div
            className="rounded-3xl overflow-hidden border"
            style={{
              borderColor: purpleBorder(0.15),
              boxShadow: `0 20px 60px ${purpleBg(0.12)}`,  // ✅ FIX 2
            }}
          >
            <div className="grid md:grid-cols-2">
              {/* Pain Points */}
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
                    {t("ecom.segments.without")}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {segments[activeSegment].painPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-red-400 mt-1">✗</span>
                      <span className="text-[var(--t2)]">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions */}
              <div className="p-8 sm:p-10" style={{ background: purpleBg(0.04) }}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">🎉</span>
                  <h3 className="text-xl font-bold" style={{ color: PURPLE }}>
                    {t("ecom.segments.with")}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {segments[activeSegment].solutions.map((solution, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span style={{ color: PURPLE }}>✓</span>
                      <span className="text-[var(--t1)]">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Results Stats */}
            <div
              className="p-6 bg-[var(--bg)] border-t"
              style={{ borderColor: purpleBorder(0.08) }}
            >
              <div className="flex flex-wrap justify-center gap-8">
                {Object.entries(segments[activeSegment].stats).map(
                  ([key, value], i) => (
                    <div key={i} className="text-center">
                      <div
                        className="text-2xl font-bold"
                        style={{ color: PURPLE }}
                      >
                        {value}
                      </div>
                      <div className="text-sm text-[var(--t3)]">
                        {statKeyLabel(key)}
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FEATURES SECTION ==================== */}
      <section id="features" className="py-24 px-6 bg-[var(--bg2)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4 text-[#0a0a0a]">
              {t("ecom.features.title")} {t("ecom.features.title2")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-3xl backdrop-blur-xl border transition-all duration-300 hover:-translate-y-2"
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
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[var(--t1)]">
                  {feature.title}
                </h3>
                <p className="text-sm mb-5 leading-relaxed text-[var(--t2)]">
                  {feature.description}
                </p>
                <span
                  className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold border"
                  style={{
                    background: purpleBg(0.08),
                    color: PURPLE,
                    borderColor: purpleBorder(0.15),
                  }}
                >
                  {feature.highlight}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== INTEGRATIONS ==================== */}
      <section className="py-24 px-6 bg-[var(--bg)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4 text-[#0a0a0a]">
              {t("ecom.integrations.title")} {t("ecom.integrations.title2")}
            </h2>
            <p className="text-[var(--t2)]">
              {t("ecom.integrations.subtitle")}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {integrations.map((int, idx) => (
              <div
                key={idx}
                className="px-8 py-6 rounded-2xl text-center backdrop-blur-xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.85)",
                  borderColor: purpleBorder(0.1),
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = purpleBorder(0.25);
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = purpleBorder(0.1);
                }}
              >
                <div className="text-4xl mb-3">{int.icon}</div>
                <div className="font-semibold text-[var(--t1)]">{int.name}</div>
                <div
                  className="text-xs mt-1 px-2 py-0.5 rounded-full inline-block"
                  style={{
                    background: purpleBg(0.08),
                    color: PURPLE,
                  }}
                >
                  {int.type}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== USE CASES ==================== */}
      <section className="py-24 px-6 bg-[var(--bg2)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4 text-[#0a0a0a]">
              {t("ecom.usecases.title")} {t("ecom.usecases.title2")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, idx) => (
              <div
                key={idx}
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
                  {useCase.title}
                </div>
                <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
                  {useCase.conversation.map((msg, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-2xl text-sm"
                      style={
                        msg.role === "ai"
                          ? {
                              borderRadius: "1rem 1rem 1rem 1rem 0.25rem",
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
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="py-24 px-6 bg-[var(--bg2)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4 text-[#0a0a0a]">
              {t("ecom.testimonials.title")} {t("ecom.testimonials.title2")}
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
              {testimonials[currentTestimonial].quote}
            </p>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl text-white shadow-lg"
                  style={{ background: purpleGradient }}
                >
                  {testimonials[currentTestimonial].image}
                </div>
                <div>
                  <div className="font-bold text-lg text-[var(--t1)]">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-sm text-[var(--t2)]">
                    {testimonials[currentTestimonial].role} ·{" "}
                    {testimonials[currentTestimonial].company}
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
                {testimonials[currentTestimonial].metric}
              </div>
            </div>
            <div className="flex justify-center gap-3 mt-10">
              {testimonials.map((_, idx) => (
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

      {/* ==================== FAQ ==================== */}
      <section className="py-24 px-6 bg-[var(--bg)]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4 text-[#0a0a0a]">
              {t("ecom.faq.title")} {t("ecom.faq.title2")}
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const open = activeFAQ === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl overflow-hidden backdrop-blur-xl border transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.85)",
                    borderColor: open
                      ? purpleBorder(0.25)
                      : purpleBorder(0.1),
                  }}
                >
                  <button
                    className="w-full flex items-start justify-between px-6 py-5 text-right font-semibold text-[var(--t1)]"
                    onClick={() => setActiveFAQ(open ? null : idx)}
                  >
                    <span className="flex-1 leading-relaxed">{faq.q}</span>
                    <span
                      className="text-xl ml-4 flex-shrink-0 mt-0.5"
                      style={{ color: PURPLE }}
                    >
                      {open ? "−" : "+"}
                    </span>
                  </button>
                  {open && (
                    <div className="px-6 pb-5 text-sm leading-relaxed text-[var(--t2)]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );  // ✅ FIX 3
            })}
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="py-24 px-6" style={{ background: purpleGradient }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">🛒</div>
          <h2 className="text-[clamp(28px,4vw,48px)] font-bold leading-[1.08] tracking-tight mb-6 text-white">
            {t("ecom.cta.title1")}
            <br />
            {t("ecom.cta.title2")}
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
            {t("ecom.cta.subtitle")}
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
              {t("ecom.cta.button")}
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-12 text-white/70 text-sm">
            <span>🔗 {t("ecom.cta.badge1")}</span>
            <span>📦 {t("ecom.cta.badge2")}</span>
            <span>💳 {t("ecom.cta.badge3")}</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SondosEcommerce;