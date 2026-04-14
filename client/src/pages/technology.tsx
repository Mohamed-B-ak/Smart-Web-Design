import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import "../index.css";

/* ── shared colour tokens ───────────────────── */
const PURPLE = "#672D92";
const PURPLE_RGB = "103,45,146";
const purpleBg = (a: number) => `rgba(${PURPLE_RGB},${a})`;
const purpleBorder = (a: number) => `rgba(${PURPLE_RGB},${a})`;
const purpleGradient = `linear-gradient(135deg, ${PURPLE}, #7f47ac)`;

const SondosTech = () => {
  const { t, lang } = useLanguage();
  const [activeSegment, setActiveSegment] = useState(0);
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const [roiInputs, setRoiInputs] = useState({
    monthlyTickets: 2000,
    avgResolutionTime: 24,
    supportAgents: 8,
    monthlyTrials: 500,
    trialConversion: 15,
  });

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
      id: "saas",
      name: t("tech.segment.saas.name"),
      icon: "☁️",
      description: t("tech.segment.saas.desc"),
      painPoints: [
        t("tech.segment.saas.pain1"),
        t("tech.segment.saas.pain2"),
        t("tech.segment.saas.pain3"),
      ],
      solutions: [
        t("tech.segment.saas.sol1"),
        t("tech.segment.saas.sol2"),
        t("tech.segment.saas.sol3"),
      ],
      stats: { tickets: "-70%", onboarding: "+40%", support: "24/7" },
      useCases: [
        t("tech.segment.saas.use1"),
        t("tech.segment.saas.use2"),
        t("tech.segment.saas.use3"),
        t("tech.segment.saas.use4"),
        t("tech.segment.saas.use5"),
      ],
    },
    {
      id: "startups",
      name: t("tech.segment.startups.name"),
      icon: "🚀",
      description: t("tech.segment.startups.desc"),
      painPoints: [
        t("tech.segment.startups.pain1"),
        t("tech.segment.startups.pain2"),
        t("tech.segment.startups.pain3"),
      ],
      solutions: [
        t("tech.segment.startups.sol1"),
        t("tech.segment.startups.sol2"),
        t("tech.segment.startups.sol3"),
      ],
      stats: { coverage: "24/7", cost: "-80%", scale: "∞" },
      useCases: [
        t("tech.segment.startups.use1"),
        t("tech.segment.startups.use2"),
        t("tech.segment.startups.use3"),
        t("tech.segment.startups.use4"),
      ],
    },
    {
      id: "enterprise",
      name: t("tech.segment.enterprise.name"),
      icon: "🏢",
      description: t("tech.segment.enterprise.desc"),
      painPoints: [
        t("tech.segment.enterprise.pain1"),
        t("tech.segment.enterprise.pain2"),
        t("tech.segment.enterprise.pain3"),
      ],
      solutions: [
        t("tech.segment.enterprise.sol1"),
        t("tech.segment.enterprise.sol2"),
        t("tech.segment.enterprise.sol3"),
      ],
      stats: {
        vip: t("tech.stat.instant"),
        sla: "99.9%",
        response: t("tech.stat.under30"),
      },
      useCases: [
        t("tech.segment.enterprise.use1"),
        t("tech.segment.enterprise.use2"),
        t("tech.segment.enterprise.use3"),
        t("tech.segment.enterprise.use4"),
      ],
    },
    {
      id: "apps",
      name: t("tech.segment.apps.name"),
      icon: "📱",
      description: t("tech.segment.apps.desc"),
      painPoints: [
        t("tech.segment.apps.pain1"),
        t("tech.segment.apps.pain2"),
        t("tech.segment.apps.pain3"),
      ],
      solutions: [
        t("tech.segment.apps.sol1"),
        t("tech.segment.apps.sol2"),
        t("tech.segment.apps.sol3"),
      ],
      stats: {
        rating: "+0.8⭐",
        reviews: "+150%",
        response: t("tech.stat.instant"),
      },
      useCases: [
        t("tech.segment.apps.use1"),
        t("tech.segment.apps.use2"),
        t("tech.segment.apps.use3"),
        t("tech.segment.apps.use4"),
      ],
    },
    {
      id: "hosting",
      name: t("tech.segment.hosting.name"),
      icon: "🖥️",
      description: t("tech.segment.hosting.desc"),
      painPoints: [
        t("tech.segment.hosting.pain1"),
        t("tech.segment.hosting.pain2"),
        t("tech.segment.hosting.pain3"),
      ],
      solutions: [
        t("tech.segment.hosting.sol1"),
        t("tech.segment.hosting.sol2"),
        t("tech.segment.hosting.sol3"),
      ],
      stats: { uptime: "99.9%", resolution: "-50%", sales: "+35%" },
      useCases: [
        t("tech.segment.hosting.use1"),
        t("tech.segment.hosting.use2"),
        t("tech.segment.hosting.use3"),
        t("tech.segment.hosting.use4"),
        t("tech.segment.hosting.use5"),
      ],
    },
    {
      id: "security",
      name: t("tech.segment.security.name"),
      icon: "🔐",
      description: t("tech.segment.security.desc"),
      painPoints: [
        t("tech.segment.security.pain1"),
        t("tech.segment.security.pain2"),
        t("tech.segment.security.pain3"),
      ],
      solutions: [
        t("tech.segment.security.sol1"),
        t("tech.segment.security.sol2"),
        t("tech.segment.security.sol3"),
      ],
      stats: {
        alerts: t("tech.stat.instant"),
        response: t("tech.stat.under1min"),
        clarity: "100%",
      },
      useCases: [
        t("tech.segment.security.use1"),
        t("tech.segment.security.use2"),
        t("tech.segment.security.use3"),
        t("tech.segment.security.use4"),
      ],
    },
  ];

  const features = [
    {
      icon: "📚",
      title: t("tech.feature.kb.title"),
      description: t("tech.feature.kb.desc"),
      highlight: t("tech.feature.kb.highlight"),
    },
    {
      icon: "🎯",
      title: t("tech.feature.onboarding.title"),
      description: t("tech.feature.onboarding.desc"),
      highlight: t("tech.feature.onboarding.highlight"),
    },
    {
      icon: "🎫",
      title: t("tech.feature.tickets.title"),
      description: t("tech.feature.tickets.desc"),
      highlight: t("tech.feature.tickets.highlight"),
    },
    {
      icon: "🔄",
      title: t("tech.feature.renewal.title"),
      description: t("tech.feature.renewal.desc"),
      highlight: t("tech.feature.renewal.highlight"),
    },
    {
      icon: "💻",
      title: t("tech.feature.techsupport.title"),
      description: t("tech.feature.techsupport.desc"),
      highlight: t("tech.feature.techsupport.highlight"),
    },
    {
      icon: "🌍",
      title: t("tech.feature.global.title"),
      description: t("tech.feature.global.desc"),
      highlight: t("tech.feature.global.highlight"),
    },
  ];

  const testimonials = [
    {
      quote: t("tech.testimonial1.quote"),
      name: t("tech.testimonial1.name"),
      role: t("tech.testimonial1.role"),
      company: t("tech.testimonial1.company"),
      image: "👨‍💻",
      metric: t("tech.testimonial1.metric"),
    },
    {
      quote: t("tech.testimonial2.quote"),
      name: t("tech.testimonial2.name"),
      role: t("tech.testimonial2.role"),
      company: t("tech.testimonial2.company"),
      image: "👩‍💼",
      metric: t("tech.testimonial2.metric"),
    },
    {
      quote: t("tech.testimonial3.quote"),
      name: t("tech.testimonial3.name"),
      role: t("tech.testimonial3.role"),
      company: t("tech.testimonial3.company"),
      image: "🧔",
      metric: t("tech.testimonial3.metric"),
    },
  ];

  const faqs = [
    { q: t("tech.faq1.q"), a: t("tech.faq1.a") },
    { q: t("tech.faq2.q"), a: t("tech.faq2.a") },
    { q: t("tech.faq3.q"), a: t("tech.faq3.a") },
    { q: t("tech.faq4.q"), a: t("tech.faq4.a") },
    { q: t("tech.faq5.q"), a: t("tech.faq5.a") },
    { q: t("tech.faq6.q"), a: t("tech.faq6.a") },
  ];

  const stats = [
    { value: "500K+", label: t("tech.stat.conversations"), icon: "💬" },
    { value: "100+", label: t("tech.stat.companies"), icon: "🏢" },
    { value: "-70%", label: t("tech.stat.tickets"), icon: "🎫" },
    { value: "+40%", label: t("tech.stat.conversion"), icon: "🎯" },
  ];

  const techStack = [
    { name: "Zendesk", icon: "🎫", type: t("tech.integration.helpdesk") },
    { name: "Intercom", icon: "💬", type: t("tech.integration.helpdesk") },
    { name: "Freshdesk", icon: "🎧", type: t("tech.integration.helpdesk") },
    { name: "Salesforce", icon: "☁️", type: t("tech.integration.crm") },
    { name: "HubSpot", icon: "🧡", type: t("tech.integration.crm") },
    { name: "Notion", icon: "📝", type: t("tech.integration.knowledge") },
    { name: "Confluence", icon: "📚", type: t("tech.integration.knowledge") },
    { name: "Slack", icon: "💼", type: t("tech.integration.communication") },
    { name: "Stripe", icon: "💳", type: t("tech.integration.billing") },
    { name: "GitHub", icon: "🐙", type: t("tech.integration.dev") },
  ];

  const useCaseDemo = [
    {
      title: t("tech.usecase.ticket.title"),
      conversation: [
        { role: "ai", text: t("tech.usecase.ticket.msg1") },
        { role: "user", text: t("tech.usecase.ticket.msg2") },
        { role: "ai", text: t("tech.usecase.ticket.msg3") },
        { role: "user", text: t("tech.usecase.ticket.msg4") },
        { role: "ai", text: t("tech.usecase.ticket.msg5") },
        { role: "user", text: t("tech.usecase.ticket.msg6") },
        { role: "ai", text: t("tech.usecase.ticket.msg7") },
      ],
    },
    {
      title: t("tech.usecase.onboarding.title"),
      conversation: [
        { role: "ai", text: t("tech.usecase.onboarding.msg1") },
        { role: "user", text: t("tech.usecase.onboarding.msg2") },
        { role: "ai", text: t("tech.usecase.onboarding.msg3") },
        { role: "user", text: t("tech.usecase.onboarding.msg4") },
        { role: "ai", text: t("tech.usecase.onboarding.msg5") },
        { role: "user", text: t("tech.usecase.onboarding.msg6") },
        { role: "ai", text: t("tech.usecase.onboarding.msg7") },
      ],
    },
  ];

  const calculateROI = () => {
    const { monthlyTickets, supportAgents, monthlyTrials, trialConversion } =
      roiInputs;
    const agentCost = 8000;
    const currentSupportCost = supportAgents * agentCost;
    const newAgentsNeeded = Math.ceil(supportAgents * 0.35);
    const sondosCost =
      monthlyTickets <= 1000 ? 8000 : monthlyTickets <= 5000 ? 18000 : 35000;
    const newSupportCost = newAgentsNeeded * agentCost + sondosCost;
    const supportSavings = currentSupportCost - newSupportCost;
    const currentTrialRevenue = monthlyTrials * (trialConversion / 100) * 500;
    const newConversion = Math.min(trialConversion * 1.4, 40);
    const newTrialRevenue = monthlyTrials * (newConversion / 100) * 500;
    const conversionGain = newTrialRevenue - currentTrialRevenue;
    const churnReduction = currentTrialRevenue * 0.15;
    const totalBenefit = supportSavings + conversionGain + churnReduction;
    const netGain = totalBenefit - sondosCost;
    const roi = (netGain / sondosCost) * 100;
    return {
      currentSupportCost: Math.round(currentSupportCost),
      newSupportCost: Math.round(newSupportCost),
      supportSavings: Math.round(supportSavings),
      conversionGain: Math.round(conversionGain),
      sondosCost,
      netGain: Math.round(netGain),
      roi: Math.round(roi),
      ticketsAutomated: Math.round(monthlyTickets * 0.7),
      agentsReduced: supportAgents - newAgentsNeeded,
      newConversion: Math.round(newConversion),
    };
  };

  const roiResults = calculateROI();

  const statKeyLabel = (key: string) => {
    const labels: Record<string, string> = {
      tickets: t("tech.stat.tickets"),
      onboarding: t("tech.stat.onboarding"),
      support: t("tech.stat.support"),
      coverage: t("tech.stat.coverage"),
      cost: t("tech.stat.cost"),
      scale: t("tech.stat.scale"),
      vip: t("tech.stat.vip"),
      sla: "SLA",
      response: t("tech.stat.response"),
      rating: t("tech.stat.rating"),
      reviews: t("tech.stat.reviews"),
      uptime: "Uptime",
      resolution: t("tech.stat.resolution"),
      sales: t("tech.stat.sales"),
      alerts: t("tech.stat.alerts"),
      clarity: t("tech.stat.clarity"),
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
        {/* gradient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${purpleBg(0.15)} 0%, transparent 70%)`,
          }}
        />
        {/* grid */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(${purpleBg(0.04)} 1px, transparent 1px), linear-gradient(90deg, ${purpleBg(0.04)} 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse at center, black 20%, transparent 65%)",
          }}
        />
        {/* blobs */}
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
            {t("tech.hero.badge")}
          </div>

          {/* Headline - TOUT en violet */}
          <h1
            className="text-[clamp(38px,5.5vw,68px)] font-bold leading-[1.08] tracking-tight mb-6 max-w-4xl mx-auto animate-fade-up animation-delay-100"
            style={{ color: PURPLE }}
          >
            {t("tech.hero.title1")} {t("tech.hero.title2")}
            <br />
            {t("tech.hero.title3")}
          </h1>

          {/* Subheadline */}
          <p className="text-[clamp(16px,1.8vw,19px)] font-semibold text-[var(--t1)] max-w-[580px] mx-auto leading-relaxed mb-4 animate-fade-up animation-delay-150">
            {t("tech.hero.subtitle")}
          </p>

          {/* Social proof */}
          <p className="text-[clamp(14px,1.6vw,17px)] text-[var(--t2)] max-w-[680px] mx-auto leading-relaxed mb-9 animate-fade-up animation-delay-200">
            {t("tech.hero.proof")}
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-up animation-delay-300">
            {[
              { value: "-70%", label: t("tech.stat.tickets"), icon: "🎫" },
              { value: "+40%", label: t("tech.stat.conversion"), icon: "🎯" },
              { value: "24/7", label: t("tech.stat.global"), icon: "🌍" },
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
          <div className="flex items-center justify-center gap-3.5 mb-10 flex-wrap animate-fade-up animation-delay-300">
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
              {t("tech.hero.cta")}
            </a>
          </div>

          {/* Integrations hint */}
          <div className="flex flex-wrap justify-center items-center gap-3 animate-fade-up animation-delay-300">
            <span className="text-sm text-[var(--t2)]">
              {t("tech.integrations.with")}:
            </span>
            {["Zendesk", "Intercom", "Notion", "Slack"].map((tool, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full text-xs font-medium border"
                style={{
                  background: purpleBg(0.08),
                  color: PURPLE,
                  borderColor: purpleBorder(0.15),
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PROBLEMS SECTION ==================== */}
      <section className="py-20 bg-[var(--bg2)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4 text-[#0a0a0a]">
              {t("tech.problems.title")} {t("tech.problems.title2")}
            </h2>
          </div>

          {/* Problems */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: "🎫",
                title: t("tech.problem1.title"),
                desc: t("tech.problem1.desc"),
              },
              {
                icon: "🐌",
                title: t("tech.problem2.title"),
                desc: t("tech.problem2.desc"),
              },
              {
                icon: "🌍",
                title: t("tech.problem3.title"),
                desc: t("tech.problem3.desc"),
              },
              {
                icon: "💸",
                title: t("tech.problem4.title"),
                desc: t("tech.problem4.desc"),
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
                  {item.icon}
                </div>
                <h3 className="font-bold mb-2 text-[var(--t1)]">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--t2)]">{item.desc}</p>
              </div>
            ))}
          </div>

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
                {t("tech.problems.solution")}
              </span>
              <span className="text-2xl">⬇️</span>
            </div>
          </div>

          {/* Solutions */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🤖",
                title: t("tech.solution1.title"),
                desc: t("tech.solution1.desc"),
              },
              {
                icon: "🎯",
                title: t("tech.solution2.title"),
                desc: t("tech.solution2.desc"),
              },
              {
                icon: "🌐",
                title: t("tech.solution3.title"),
                desc: t("tech.solution3.desc"),
              },
              {
                icon: "💰",
                title: t("tech.solution4.title"),
                desc: t("tech.solution4.desc"),
              },
            ].map((item, idx) => (
              <div
                key={idx}
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
      <section id="stats-section" className="py-16 px-6">
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
      <section id="solutions" className="py-24 px-6 bg-[var(--bg2)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4 text-[#0a0a0a]">
              {t("tech.segments.title")} {t("tech.segments.title2")}
            </h2>
            <p className="text-[var(--t2)] text-lg">
              {t("tech.segments.subtitle")}
            </p>
          </div>

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
                  <span className="text-2xl">{segment.icon}</span>
                  <span>{segment.name}</span>
                </button>
              );
            })}
          </div>

          <div
            className="rounded-3xl overflow-hidden border"
            style={{
              borderColor: purpleBorder(0.15),
              boxShadow: `0 20px 60px ${purpleBg(0.12)}`,
            }}
          >
            <div className="grid md:grid-cols-2">
              {/* pain */}
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
                    {t("tech.segments.pain")}
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
              {/* solution */}
              <div className="p-8 sm:p-10" style={{ background: purpleBg(0.04) }}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">🎉</span>
                  <h3 className="text-xl font-bold" style={{ color: PURPLE }}>
                    {t("tech.segments.solution")}
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
            <div
              className="p-6 bg-[var(--bg)] border-t"
              style={{ borderColor: purpleBorder(0.08) }}
            >
              <div className="flex flex-wrap items-center justify-between gap-6">
                <div>
                  <div className="text-sm font-medium mb-2 text-[var(--t2)]">
                    {t("tech.segments.useCases")}:
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
        </div>
      </section>

      {/* ==================== FEATURES SECTION ==================== */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4 text-[#0a0a0a]">
              {t("tech.features.title")} {t("tech.features.title2")}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
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

      {/* ==================== USE CASES ==================== */}
      <section id="usecases" className="py-24 px-6 bg-[var(--bg2)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4 text-[#0a0a0a]">
              {t("tech.usecases.title")} {t("tech.usecases.title2")}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {useCaseDemo.map((useCase, idx) => (
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
                <div className="p-6 space-y-4 max-h-[450px] overflow-y-auto">
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

      {/* ==================== INTEGRATIONS ==================== */}
      <section id="integrations" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4 text-[#0a0a0a]">
              {t("tech.integrations.title")} {t("tech.integrations.title2")}
            </h2>
            <p className="text-[var(--t2)]">
              {t("tech.integrations.subtitle")}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tool, idx) => (
              <div
                key={idx}
                className="px-6 py-4 rounded-2xl text-center backdrop-blur-xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
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
                <div className="text-3xl mb-2">{tool.icon}</div>
                <div className="font-semibold text-[var(--t1)]">
                  {tool.name}
                </div>
                <div
                  className="text-xs mt-1 px-2 py-0.5 rounded-full inline-block"
                  style={{
                    background: purpleBg(0.08),
                    color: PURPLE,
                  }}
                >
                  {tool.type}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl backdrop-blur-xl border shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
              style={{
                background: "rgba(255,255,255,0.85)",
                borderColor: purpleBorder(0.1),
              }}
            >
              <span className="text-2xl">🔌</span>
              <span className="text-[var(--t1)]">
                <strong>{t("tech.integrations.api")}</strong>{" "}
                {t("tech.integrations.api_desc")}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4 text-[#0a0a0a]">
              {t("tech.testimonials.title")} {t("tech.testimonials.title2")}
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
      <section className="py-24 px-6 bg-[var(--bg2)]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4 text-[#0a0a0a]">
              {t("tech.faq.title")} {t("tech.faq.title2")}
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
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="py-24 px-6" style={{ background: purpleGradient }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">💻</div>
          <h2 className="text-[clamp(28px,4vw,48px)] font-bold leading-[1.08] tracking-tight mb-6 text-white">
            {t("tech.cta.title1")}
            <br />
            {t("tech.cta.title2")}
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
            {t("tech.cta.subtitle")}
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
              {t("tech.cta.button")}
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-white/70 text-sm">
            <span>🔗 Zendesk</span>
            <span>💬 Intercom</span>
            <span>📝 Notion</span>
            <span>💼 Slack</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SondosTech;