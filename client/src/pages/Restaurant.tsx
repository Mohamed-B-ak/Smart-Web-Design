import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import "../index.css";

/* ── shared colour tokens ───────────────────── */
const PURPLE = "#672D92";
const PURPLE_RGB = "103,45,146";
const purpleBg = (a: number) => `rgba(${PURPLE_RGB},${a})`;
const purpleBorder = (a: number) => `rgba(${PURPLE_RGB},${a})`;
const purpleGradient = `linear-gradient(135deg, ${PURPLE}, #7f47ac)`;

const SondosInsurance = () => {
  const { t, lang } = useLanguage();
  const [activeSegment, setActiveSegment] = useState(0);
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const [roiInputs, setRoiInputs] = useState({
    dailyCalls: 300,
    policyRenewals: 500,
    renewalRate: 70,
    avgPremium: 3000,
    claimsPerDay: 50,
  });

  const testimonials = [
    {
      quote: t("ins.testimonial1.quote"),
      name: t("ins.testimonial1.name"),
      role: t("ins.testimonial1.role"),
      company: t("ins.testimonial1.company"),
      image: "👨‍💼",
      metric: t("ins.testimonial1.metric"),
    },
    {
      quote: t("ins.testimonial2.quote"),
      name: t("ins.testimonial2.name"),
      role: t("ins.testimonial2.role"),
      company: t("ins.testimonial2.company"),
      image: "👩‍💼",
      metric: t("ins.testimonial2.metric"),
    },
    {
      quote: t("ins.testimonial3.quote"),
      name: t("ins.testimonial3.name"),
      role: t("ins.testimonial3.role"),
      company: t("ins.testimonial3.company"),
      image: "🧔",
      metric: t("ins.testimonial3.metric"),
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
      id: "auto",
      name: t("ins.segment.auto.name"),
      icon: "🚗",
      description: t("ins.segment.auto.desc"),
      painPoints: [
        t("ins.segment.auto.pain1"),
        t("ins.segment.auto.pain2"),
        t("ins.segment.auto.pain3"),
      ],
      solutions: [
        t("ins.segment.auto.sol1"),
        t("ins.segment.auto.sol2"),
        t("ins.segment.auto.sol3"),
      ],
      stats: { quotes: "+200%", claims: "24/7", renewal: "+35%" },
      useCases: [
        t("ins.segment.auto.use1"),
        t("ins.segment.auto.use2"),
        t("ins.segment.auto.use3"),
        t("ins.segment.auto.use4"),
      ],
    },
    {
      id: "health",
      name: t("ins.segment.health.name"),
      icon: "🏥",
      description: t("ins.segment.health.desc"),
      painPoints: [
        t("ins.segment.health.pain1"),
        t("ins.segment.health.pain2"),
        t("ins.segment.health.pain3"),
      ],
      solutions: [
        t("ins.segment.health.sol1"),
        t("ins.segment.health.sol2"),
        t("ins.segment.health.sol3"),
      ],
      stats: { satisfaction: "94%", response: "< 10s", resolution: "85%" },
      useCases: [
        t("ins.segment.health.use1"),
        t("ins.segment.health.use2"),
        t("ins.segment.health.use3"),
        t("ins.segment.health.use4"),
      ],
    },
    {
      id: "property",
      name: t("ins.segment.property.name"),
      icon: "🏠",
      description: t("ins.segment.property.desc"),
      painPoints: [
        t("ins.segment.property.pain1"),
        t("ins.segment.property.pain2"),
        t("ins.segment.property.pain3"),
      ],
      solutions: [
        t("ins.segment.property.sol1"),
        t("ins.segment.property.sol2"),
        t("ins.segment.property.sol3"),
      ],
      stats: {
        assessment: "-70%",
        claims: t("ins.stat.instant"),
        retention: "+40%",
      },
      useCases: [
        t("ins.segment.property.use1"),
        t("ins.segment.property.use2"),
        t("ins.segment.property.use3"),
        t("ins.segment.property.use4"),
      ],
    },
    {
      id: "life",
      name: t("ins.segment.life.name"),
      icon: "💚",
      description: t("ins.segment.life.desc"),
      painPoints: [
        t("ins.segment.life.pain1"),
        t("ins.segment.life.pain2"),
        t("ins.segment.life.pain3"),
      ],
      solutions: [
        t("ins.segment.life.sol1"),
        t("ins.segment.life.sol2"),
        t("ins.segment.life.sol3"),
      ],
      stats: { leads: "+60%", conversion: "+25%", NPS: "4.8⭐" },
      useCases: [
        t("ins.segment.life.use1"),
        t("ins.segment.life.use2"),
        t("ins.segment.life.use3"),
        t("ins.segment.life.use4"),
      ],
    },
    {
      id: "travel",
      name: t("ins.segment.travel.name"),
      icon: "✈️",
      description: t("ins.segment.travel.desc"),
      painPoints: [
        t("ins.segment.travel.pain1"),
        t("ins.segment.travel.pain2"),
        t("ins.segment.travel.pain3"),
      ],
      solutions: [
        t("ins.segment.travel.sol1"),
        t("ins.segment.travel.sol2"),
        t("ins.segment.travel.sol3"),
      ],
      stats: {
        issuance: t("ins.stat.instant"),
        emergency: "24/7",
        languages: "3+",
      },
      useCases: [
        t("ins.segment.travel.use1"),
        t("ins.segment.travel.use2"),
        t("ins.segment.travel.use3"),
        t("ins.segment.travel.use4"),
      ],
    },
    {
      id: "broker",
      name: t("ins.segment.broker.name"),
      icon: "🤝",
      description: t("ins.segment.broker.desc"),
      painPoints: [
        t("ins.segment.broker.pain1"),
        t("ins.segment.broker.pain2"),
        t("ins.segment.broker.pain3"),
      ],
      solutions: [
        t("ins.segment.broker.sol1"),
        t("ins.segment.broker.sol2"),
        t("ins.segment.broker.sol3"),
      ],
      stats: {
        comparison: t("ins.stat.instant"),
        portfolio: t("ins.stat.centralized"),
        efficiency: "+80%",
      },
      useCases: [
        t("ins.segment.broker.use1"),
        t("ins.segment.broker.use2"),
        t("ins.segment.broker.use3"),
        t("ins.segment.broker.use4"),
      ],
    },
  ];

  const features = [
    {
      icon: "💬",
      title: t("ins.feature.quotes.title"),
      description: t("ins.feature.quotes.desc"),
      highlight: t("ins.feature.quotes.highlight"),
    },
    {
      icon: "🚨",
      title: t("ins.feature.claims.title"),
      description: t("ins.feature.claims.desc"),
      highlight: t("ins.feature.claims.highlight"),
    },
    {
      icon: "🔔",
      title: t("ins.feature.renewal.title"),
      description: t("ins.feature.renewal.desc"),
      highlight: t("ins.feature.renewal.highlight"),
    },
    {
      icon: "📋",
      title: t("ins.feature.tracking.title"),
      description: t("ins.feature.tracking.desc"),
      highlight: t("ins.feature.tracking.highlight"),
    },
    {
      icon: "🎯",
      title: t("ins.feature.leads.title"),
      description: t("ins.feature.leads.desc"),
      highlight: t("ins.feature.leads.highlight"),
    },
    {
      icon: "🌐",
      title: t("ins.feature.languages.title"),
      description: t("ins.feature.languages.desc"),
      highlight: t("ins.feature.languages.highlight"),
    },
  ];

  const faqs = [
    { q: t("ins.faq1.q"), a: t("ins.faq1.a") },
    { q: t("ins.faq2.q"), a: t("ins.faq2.a") },
    { q: t("ins.faq3.q"), a: t("ins.faq3.a") },
    { q: t("ins.faq4.q"), a: t("ins.faq4.a") },
    { q: t("ins.faq5.q"), a: t("ins.faq5.a") },
    { q: t("ins.faq6.q"), a: t("ins.faq6.a") },
  ];

  const stats = [
    { value: "1M+", label: t("ins.stat.calls"), icon: "📞" },
    { value: "30+", label: t("ins.stat.companies"), icon: "🏢" },
    { value: "+35%", label: t("ins.stat.renewal"), icon: "🔄" },
    { value: "24/7", label: t("ins.stat.claims"), icon: "🚨" },
  ];

  const insuranceJourney = [
    {
      stage: t("ins.journey.stage1"),
      icon: "❓",
      traditional: t("ins.journey.stage1.traditional"),
      sondos: t("ins.journey.stage1.sondos"),
      improvement: t("ins.journey.stage1.improvement"),
    },
    {
      stage: t("ins.journey.stage2"),
      icon: "💰",
      traditional: t("ins.journey.stage2.traditional"),
      sondos: t("ins.journey.stage2.sondos"),
      improvement: t("ins.journey.stage2.improvement"),
    },
    {
      stage: t("ins.journey.stage3"),
      icon: "📄",
      traditional: t("ins.journey.stage3.traditional"),
      sondos: t("ins.journey.stage3.sondos"),
      improvement: t("ins.journey.stage3.improvement"),
    },
    {
      stage: t("ins.journey.stage4"),
      icon: "🚨",
      traditional: t("ins.journey.stage4.traditional"),
      sondos: t("ins.journey.stage4.sondos"),
      improvement: t("ins.journey.stage4.improvement"),
    },
    {
      stage: t("ins.journey.stage5"),
      icon: "📋",
      traditional: t("ins.journey.stage5.traditional"),
      sondos: t("ins.journey.stage5.sondos"),
      improvement: t("ins.journey.stage5.improvement"),
    },
    {
      stage: t("ins.journey.stage6"),
      icon: "🔔",
      traditional: t("ins.journey.stage6.traditional"),
      sondos: t("ins.journey.stage6.sondos"),
      improvement: t("ins.journey.stage6.improvement"),
    },
  ];

  const integrations = [
    {
      name: t("ins.integration.najm"),
      icon: "🚗",
      type: t("ins.integration.type.accidents"),
    },
    {
      name: t("ins.integration.sama"),
      icon: "🏛️",
      type: t("ins.integration.type.regulatory"),
    },
    { name: "Salesforce", icon: "☁️", type: t("ins.integration.type.crm") },
    { name: "Duck Creek", icon: "🦆", type: t("ins.integration.type.policy") },
    { name: "Guidewire", icon: "🔧", type: t("ins.integration.type.claims") },
    {
      name: "WhatsApp",
      icon: "💬",
      type: t("ins.integration.type.communication"),
    },
    {
      name: t("ins.integration.elm"),
      icon: "🌳",
      type: t("ins.integration.type.gov"),
    },
    {
      name: t("ins.integration.absher"),
      icon: "🆔",
      type: t("ins.integration.type.verification"),
    },
  ];

  const useCases = [
    {
      title: t("ins.usecase.claim.title"),
      conversation: [
        { role: "ai", text: t("ins.usecase.claim.msg1") },
        { role: "user", text: t("ins.usecase.claim.msg2") },
        { role: "ai", text: t("ins.usecase.claim.msg3") },
        { role: "user", text: t("ins.usecase.claim.msg4") },
        { role: "ai", text: t("ins.usecase.claim.msg5") },
        { role: "user", text: t("ins.usecase.claim.msg6") },
        { role: "ai", text: t("ins.usecase.claim.msg7") },
      ],
    },
    {
      title: t("ins.usecase.renewal.title"),
      conversation: [
        { role: "ai", text: t("ins.usecase.renewal.msg1") },
        { role: "user", text: t("ins.usecase.renewal.msg2") },
        { role: "ai", text: t("ins.usecase.renewal.msg3") },
        { role: "user", text: t("ins.usecase.renewal.msg4") },
        { role: "ai", text: t("ins.usecase.renewal.msg5") },
      ],
    },
  ];

  const calculateROI = () => {
    const {
      dailyCalls,
      policyRenewals,
      renewalRate,
      avgPremium,
      claimsPerDay,
    } = roiInputs;
    const currentRenewalRevenue =
      policyRenewals * (renewalRate / 100) * avgPremium;
    const callCostTraditional = 12;
    const newRenewalRate = Math.min(renewalRate + 20, 95);
    const newRenewalRevenue =
      policyRenewals * (newRenewalRate / 100) * avgPremium;
    const additionalRevenue = newRenewalRevenue - currentRenewalRevenue;
    const automationRate = 0.8;
    const automatedCalls = dailyCalls * automationRate;
    const supportSavings = automatedCalls * 30 * callCostTraditional;
    const sondosCost =
      dailyCalls <= 200 ? 15000 : dailyCalls <= 500 ? 28000 : 50000;
    const claimsEfficiencyBonus = claimsPerDay * 30 * 50;
    const totalBenefit =
      additionalRevenue + supportSavings + claimsEfficiencyBonus;
    const netGain = totalBenefit - sondosCost;
    const roi = (netGain / sondosCost) * 100;
    return {
      currentRenewalRevenue: Math.round(currentRenewalRevenue),
      additionalRevenue: Math.round(additionalRevenue),
      supportSavings: Math.round(supportSavings),
      sondosCost,
      netGain: Math.round(netGain),
      roi: Math.round(roi),
      newRenewalRate,
      additionalPolicies: Math.round(
        policyRenewals * ((newRenewalRate - renewalRate) / 100),
      ),
    };
  };

  const roiResults = calculateROI();

  const pageBg = "bg-[var(--bg,#f7f5fc)] text-[var(--t1,#1a0a2e)]";
  const sectionSoft = "bg-[var(--bg2,rgba(103,45,146,0.03))]";

  const statKeyLabel = (key: string) => {
    const map: Record<string, string> = {
      quotes: t("ins.stat.quotes"),
      claims: t("ins.stat.claims"),
      renewal: t("ins.stat.renewal"),
      satisfaction: t("ins.stat.satisfaction"),
      response: t("ins.stat.response"),
      resolution: t("ins.stat.resolution"),
      assessment: t("ins.stat.assessment"),
      retention: t("ins.stat.retention"),
      leads: t("ins.stat.leads"),
      conversion: t("ins.stat.conversion"),
      NPS: t("ins.stat.nps"),
      issuance: t("ins.stat.issuance"),
      emergency: t("ins.stat.emergency"),
      languages: t("ins.stat.languages"),
      comparison: t("ins.stat.comparison"),
      portfolio: t("ins.stat.portfolio"),
      efficiency: t("ins.stat.efficiency"),
    };
    return map[key] || key;
  };

  return (
    <div
      dir={lang === "ar" ? "rtl" : "ltr"}
      className={`min-h-screen ${pageBg}`}
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
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[13px] font-medium mb-7 backdrop-blur-sm"
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
            {t("ins.hero.badge")}
          </div>

          {/* Headline - TOUT en violet */}
          <h1
            className="text-[clamp(38px,5.5vw,68px)] font-bold leading-[1.08] tracking-tight mb-6 max-w-4xl mx-auto"
            style={{ color: PURPLE }}
          >
            {t("ins.hero.title1")} {t("ins.hero.title2")}
            <br />
            {t("ins.hero.title3")}
          </h1>

          <p className="text-[clamp(16px,1.8vw,19px)] font-semibold text-[#1a0a2e] max-w-[580px] mx-auto leading-relaxed mb-4">
            {t("ins.hero.subtitle")}
          </p>

          <p className="text-[clamp(14px,1.6vw,17px)] text-[#4a3a62] max-w-[680px] mx-auto leading-relaxed mb-9">
            {t("ins.hero.proof")}
          </p>

          {/* Hero stats pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              {
                value: t("ins.hero.stat1.value"),
                label: t("ins.hero.stat1.label"),
                icon: "🔄",
              },
              {
                value: t("ins.hero.stat2.value"),
                label: t("ins.hero.stat2.label"),
                icon: "🚨",
              },
              {
                value: t("ins.hero.stat3.value"),
                label: t("ins.hero.stat3.label"),
                icon: "🤖",
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="px-5 py-4 rounded-2xl text-center backdrop-blur-xl border shadow-sm"
                style={{
                  background: "rgba(255,255,255,0.85)",
                  borderColor: purpleBorder(0.15),
                }}
              >
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-xl font-bold" style={{ color: PURPLE }}>
                  {stat.value}
                </div>
                <div className="text-xs text-[#8878a0]">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <a href="/demo">
              <button
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
                {t("ins.hero.cta")}
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* ==================== STATS SECTION ==================== */}
      <section id="stats-section" className={`py-16 ${sectionSoft}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div
                  className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl transition-transform group-hover:scale-110"
                  style={{ background: purpleBg(0.08) }}
                >
                  {stat.icon}
                </div>
                <div
                  className="text-3xl sm:text-4xl font-bold mb-2"
                  style={{ color: PURPLE }}
                >
                  {statsVisible ? stat.value : "0"}
                </div>
                <div className="text-sm font-medium text-[#8878a0]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CUSTOMER JOURNEY ==================== */}
      <section id="journey" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4 text-[#0a0a0a]">
              {t("ins.journey.title")} {t("ins.journey.title2")}
            </h2>
            <p className="text-[#4a3a62]">{t("ins.journey.subtitle")}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insuranceJourney.map((stage, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl backdrop-blur-xl border transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.85)",
                  borderColor: purpleBorder(0.1),
                  boxShadow: "none",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = purpleBorder(0.25);
                  el.style.boxShadow = `0 0 30px ${purpleBg(0.08)}`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = purpleBorder(0.1);
                  el.style.boxShadow = "none";
                }}
              >
                <div className="text-4xl mb-4">{stage.icon}</div>
                <h3 className="font-bold text-lg mb-4 text-[#1a0a2e]">
                  {stage.stage}
                </h3>
                <div className="space-y-3">
                  <div
                    className="p-3 rounded-xl"
                    style={{
                      background: "rgba(239,68,68,0.08)",
                      border: "1px solid rgba(239,68,68,0.15)",
                    }}
                  >
                    <div className="text-xs font-medium mb-1 text-red-400">
                      ❌ {t("ins.journey.traditional")}
                    </div>
                    <div className="text-sm text-[#7F1D1D]">
                      {stage.traditional}
                    </div>
                  </div>
                  <div
                    className="p-3 rounded-xl"
                    style={{
                      background: purpleBg(0.06),
                      border: `1px solid ${purpleBorder(0.15)}`,
                    }}
                  >
                    <div
                      className="text-xs font-medium mb-1"
                      style={{ color: PURPLE }}
                    >
                      ✓ {t("ins.journey.withSondos")}
                    </div>
                    <div className="text-sm text-[#1a0a2e]">{stage.sondos}</div>
                  </div>
                </div>
                <div
                  className="mt-4 text-center py-2 rounded-full font-bold text-sm text-[#10B981]"
                  style={{ background: "rgba(16,185,129,0.1)" }}
                >
                  {t("ins.journey.improvement")}: {stage.improvement}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SEGMENTS SECTION ==================== */}
      <section id="solutions" className={`py-24 px-6 ${sectionSoft}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4 text-[#0a0a0a]">
              {t("ins.segments.title")} {t("ins.segments.title2")}
            </h2>
          </div>

          {/* Segment filter pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {segments.map((segment, idx) => {
              const isActive = activeSegment === idx;
              return (
                <button
                  key={segment.id}
                  onClick={() => setActiveSegment(idx)}
                  className="px-5 py-2.5 rounded-full flex items-center gap-2 text-[13px] font-medium transition-all duration-300 border backdrop-blur-sm"
                  style={{
                    background: isActive
                      ? purpleGradient
                      : purpleBg(0.04),
                    color: isActive ? "#fff" : "#4a3a62",
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

          <div
            className="rounded-3xl overflow-hidden border"
            style={{
              borderColor: purpleBorder(0.15),
              boxShadow: `0 0 60px ${purpleBg(0.08)}`,
            }}
          >
            <div className="grid md:grid-cols-2">
              <div
                className="p-8 sm:p-10 border-b md:border-b-0 md:border-l"
                style={{
                  background: "rgba(239,68,68,0.06)",
                  borderColor: purpleBorder(0.1),
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">😫</span>
                  <h3 className="text-xl font-bold text-red-400">
                    {t("ins.segments.pain")}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {segments[activeSegment].painPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-red-400 mt-1">✗</span>
                      <span className="text-[#4a3a62]">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 sm:p-10" style={{ background: purpleBg(0.06) }}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">🎉</span>
                  <h3 className="text-xl font-bold" style={{ color: PURPLE }}>
                    {t("ins.segments.solution")}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {segments[activeSegment].solutions.map((solution, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span style={{ color: PURPLE }}>✓</span>
                      <span className="text-[#1a0a2e]">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              className="p-6 backdrop-blur-xl border-t"
              style={{
                background: "rgba(255,255,255,0.85)",
                borderColor: purpleBorder(0.1),
              }}
            >
              <div className="flex flex-wrap items-center justify-between gap-6">
                <div>
                  <div className="text-sm font-medium mb-2 text-[#8878a0]">
                    {t("ins.segments.useCases")}:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {segments[activeSegment].useCases.map((useCase, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-sm border"
                        style={{
                          background: purpleBg(0.08),
                          color: PURPLE,
                          borderColor: purpleBorder(0.15),
                        }}
                      >
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-6">
                  {Object.entries(segments[activeSegment].stats).map(
                    ([key, value], i) => (
                      <div key={i} className="text-center">
                        <div
                          className="text-2xl font-bold"
                          style={{ color: PURPLE }}
                        >
                          {value}
                        </div>
                        <div className="text-xs text-[#8878a0]">
                          {statKeyLabel(key)}
                        </div>
                      </div>
                    ),
                  )}
                </div>
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
              {t("ins.features.title")} {t("ins.features.title2")}
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
                  style={{ background: purpleBg(0.08) }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#1a0a2e]">
                  {feature.title}
                </h3>
                <p className="text-sm mb-5 leading-relaxed text-[#4a3a62]">
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

      {/* ==================== USE CASES ==================== */}
      <section className={`py-24 px-6 ${sectionSoft}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4 text-[#0a0a0a]">
              {t("ins.usecases.title")} {t("ins.usecases.title2")}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, idx) => (
              <div
                key={idx}
                className="rounded-3xl overflow-hidden border"
                style={{
                  borderColor: purpleBorder(0.12),
                  boxShadow: `0 0 40px ${purpleBg(0.08)}`,
                }}
              >
                <div
                  className="px-6 py-4 font-bold flex items-center gap-2 text-[#1a0a2e] border-b"
                  style={{
                    background: purpleBg(0.06),
                    borderColor: purpleBorder(0.1),
                  }}
                >
                  {useCase.title}
                </div>
                <div
                  className="p-6 space-y-4 max-h-96 overflow-y-auto backdrop-blur-xl"
                  style={{ background: "rgba(255,255,255,0.85)" }}
                >
                  {useCase.conversation.map((msg, i) => (
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
                              background: "rgba(255,255,255,0.9)",
                              border: `1px solid ${purpleBorder(0.1)}`,
                              color: "#1a0a2e",
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

      {/* ==================== INTEGRATIONS ==================== */}
      <section className={`py-24 px-6 ${sectionSoft}`}>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4 text-[#0a0a0a]">
            {t("ins.integrations.title")} {t("ins.integrations.title2")}
          </h2>
          <p className="mb-12 text-[#4a3a62]">
            {t("ins.integrations.subtitle")}
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {integrations.map((int, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl flex flex-col items-center gap-3 min-w-[140px] backdrop-blur-xl border transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.85)",
                  borderColor: purpleBorder(0.1),
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    purpleBorder(0.25);
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    purpleBorder(0.1);
                }}
              >
                <span className="text-3xl">{int.icon}</span>
                <span className="font-semibold text-[#1a0a2e]">{int.name}</span>
                <span
                  className="text-xs px-2 py-0.5 rounded-full inline-block"
                  style={{
                    background: purpleBg(0.08),
                    color: PURPLE,
                  }}
                >
                  {int.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4 text-[#0a0a0a]">
              {t("ins.testimonials.title")} {t("ins.testimonials.title2")}
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
            <p className="text-xl sm:text-2xl leading-relaxed mb-8 text-[#1a0a2e]">
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
                  <div className="font-bold text-lg text-[#1a0a2e]">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-sm text-[#8878a0]">
                    {testimonials[currentTestimonial].role} •{" "}
                    {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
              <div
                className="px-4 py-2 rounded-xl font-bold text-[#10B981]"
                style={{ background: "rgba(16,185,129,0.1)" }}
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
      <section className={`py-24 px-6 ${sectionSoft}`}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4 text-[#0a0a0a]">
              {t("ins.faq.title")} {t("ins.faq.title2")}
            </h2>
            <p className="text-[#4a3a62]">{t("ins.faq.subtitle")}</p>
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
                    className="w-full flex items-start justify-between px-6 py-5 text-right font-semibold text-[#1a0a2e]"
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
                    <div className="px-6 pb-5 text-sm leading-relaxed text-[#4a3a62]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="py-24 px-6 relative overflow-hidden" style={{ background: purpleGradient }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 50% 50%, ${purpleBg(0.12)} 0%, transparent 70%)`,
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">🛡️</div>
          <h2 className="text-[clamp(28px,4vw,48px)] font-bold leading-[1.08] tracking-tight mb-6 text-white">
            {t("ins.cta.title1")}
            <br />
            {t("ins.cta.title2")}
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-white/80">
            {t("ins.cta.subtitle")}
          </p>
          <div className="flex justify-center">
            <a href="/demo">
              <button
                className="px-12 py-4 rounded-full font-bold text-lg text-white hover:-translate-y-1 transition-all duration-300"
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
                {t("ins.cta.button")}
              </button>
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-white/70">
            <span>🔗 {t("ins.cta.badge1")}</span>
            <span>🔒 {t("ins.cta.badge2")}</span>
            <span>📊 {t("ins.cta.badge3")}</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SondosInsurance;