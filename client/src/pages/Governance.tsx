import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import "../index.css";

const SondosGovernance = () => {
  const { t, lang } = useLanguage();
  const [activeSegment, setActiveSegment] = useState(0);
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const [roiInputs, setRoiInputs] = useState({
    dailyCalls: 1000,
    employees: 50,
    avgSalary: 8000,
    citizenSatisfaction: 65,
    serviceChannels: 3,
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
      id: "government",
      name: t("gov.segment.government.name"),
      icon: "🏛️",
      description: t("gov.segment.government.desc"),
      painPoints: [
        t("gov.segment.government.pain1"),
        t("gov.segment.government.pain2"),
        t("gov.segment.government.pain3"),
      ],
      solutions: [
        t("gov.segment.government.sol1"),
        t("gov.segment.government.sol2"),
        t("gov.segment.government.sol3"),
      ],
      stats: { automation: "80%", availability: "24/7", accuracy: "99.5%" },
      useCases: [
        t("gov.segment.government.use1"),
        t("gov.segment.government.use2"),
        t("gov.segment.government.use3"),
        t("gov.segment.government.use4"),
      ],
    },
    {
      id: "municipalities",
      name: t("gov.segment.municipalities.name"),
      icon: "🏙️",
      description: t("gov.segment.municipalities.desc"),
      painPoints: [
        t("gov.segment.municipalities.pain1"),
        t("gov.segment.municipalities.pain2"),
        t("gov.segment.municipalities.pain3"),
      ],
      solutions: [
        t("gov.segment.municipalities.sol1"),
        t("gov.segment.municipalities.sol2"),
        t("gov.segment.municipalities.sol3"),
      ],
      stats: {
        reports: t("gov.stat.instant"),
        tracking: t("gov.stat.automatic"),
        resolution: "+40%",
      },
      useCases: [
        t("gov.segment.municipalities.use1"),
        t("gov.segment.municipalities.use2"),
        t("gov.segment.municipalities.use3"),
        t("gov.segment.municipalities.use4"),
      ],
    },
    {
      id: "healthcare",
      name: t("gov.segment.healthcare.name"),
      icon: "🏥",
      description: t("gov.segment.healthcare.desc"),
      painPoints: [
        t("gov.segment.healthcare.pain1"),
        t("gov.segment.healthcare.pain2"),
        t("gov.segment.healthcare.pain3"),
      ],
      solutions: [
        t("gov.segment.healthcare.sol1"),
        t("gov.segment.healthcare.sol2"),
        t("gov.segment.healthcare.sol3"),
      ],
      stats: {
        booking: t("gov.stat.automatic"),
        inquiries: "-70%",
        noShow: "-35%",
      },
      useCases: [
        t("gov.segment.healthcare.use1"),
        t("gov.segment.healthcare.use2"),
        t("gov.segment.healthcare.use3"),
        t("gov.segment.healthcare.use4"),
      ],
    },
    {
      id: "education",
      name: t("gov.segment.education.name"),
      icon: "🎓",
      description: t("gov.segment.education.desc"),
      painPoints: [
        t("gov.segment.education.pain1"),
        t("gov.segment.education.pain2"),
        t("gov.segment.education.pain3"),
      ],
      solutions: [
        t("gov.segment.education.sol1"),
        t("gov.segment.education.sol2"),
        t("gov.segment.education.sol3"),
      ],
      stats: { admissions: "+50%", support: "24/7", satisfaction: "92%" },
      useCases: [
        t("gov.segment.education.use1"),
        t("gov.segment.education.use2"),
        t("gov.segment.education.use3"),
        t("gov.segment.education.use4"),
      ],
    },
    {
      id: "compliance",
      name: t("gov.segment.compliance.name"),
      icon: "📋",
      description: t("gov.segment.compliance.desc"),
      painPoints: [
        t("gov.segment.compliance.pain1"),
        t("gov.segment.compliance.pain2"),
        t("gov.segment.compliance.pain3"),
      ],
      solutions: [
        t("gov.segment.compliance.sol1"),
        t("gov.segment.compliance.sol2"),
        t("gov.segment.compliance.sol3"),
      ],
      stats: {
        clarity: "100%",
        compliance: "+45%",
        reports: t("gov.stat.instant"),
      },
      useCases: [
        t("gov.segment.compliance.use1"),
        t("gov.segment.compliance.use2"),
        t("gov.segment.compliance.use3"),
        t("gov.segment.compliance.use4"),
      ],
    },
    {
      id: "publicservices",
      name: t("gov.segment.publicservices.name"),
      icon: "🛎️",
      description: t("gov.segment.publicservices.desc"),
      painPoints: [
        t("gov.segment.publicservices.pain1"),
        t("gov.segment.publicservices.pain2"),
        t("gov.segment.publicservices.pain3"),
      ],
      solutions: [
        t("gov.segment.publicservices.sol1"),
        t("gov.segment.publicservices.sol2"),
        t("gov.segment.publicservices.sol3"),
      ],
      stats: {
        billing: t("gov.stat.instant"),
        requests: t("gov.stat.automatic"),
        outages: "24/7",
      },
      useCases: [
        t("gov.segment.publicservices.use1"),
        t("gov.segment.publicservices.use2"),
        t("gov.segment.publicservices.use3"),
        t("gov.segment.publicservices.use4"),
      ],
    },
  ];

  const features = [
    {
      icon: "🔐",
      title: t("gov.feature.security.title"),
      description: t("gov.feature.security.desc"),
      highlight: t("gov.feature.security.highlight"),
    },
    {
      icon: "🌐",
      title: t("gov.feature.omnichannel.title"),
      description: t("gov.feature.omnichannel.desc"),
      highlight: t("gov.feature.omnichannel.highlight"),
    },
    {
      icon: "📊",
      title: t("gov.feature.dashboard.title"),
      description: t("gov.feature.dashboard.desc"),
      highlight: t("gov.feature.dashboard.highlight"),
    },
    {
      icon: "🎯",
      title: t("gov.feature.routing.title"),
      description: t("gov.feature.routing.desc"),
      highlight: t("gov.feature.routing.highlight"),
    },
    {
      icon: "📱",
      title: t("gov.feature.integration.title"),
      description: t("gov.feature.integration.desc"),
      highlight: t("gov.feature.integration.highlight"),
    },
    {
      icon: "♿",
      title: t("gov.feature.accessibility.title"),
      description: t("gov.feature.accessibility.desc"),
      highlight: t("gov.feature.accessibility.highlight"),
    },
  ];

  const testimonials = [
    {
      quote: t("gov.testimonial1.quote"),
      name: t("gov.testimonial1.name"),
      role: t("gov.testimonial1.role"),
      company: t("gov.testimonial1.company"),
      image: "👨‍💼",
      metric: t("gov.testimonial1.metric"),
    },
    {
      quote: t("gov.testimonial2.quote"),
      name: t("gov.testimonial2.name"),
      role: t("gov.testimonial2.role"),
      company: t("gov.testimonial2.company"),
      image: "👩‍💼",
      metric: t("gov.testimonial2.metric"),
    },
    {
      quote: t("gov.testimonial3.quote"),
      name: t("gov.testimonial3.name"),
      role: t("gov.testimonial3.role"),
      company: t("gov.testimonial3.company"),
      image: "👨‍⚕️",
      metric: t("gov.testimonial3.metric"),
    },
  ];

  const faqs = [
    { q: t("gov.faq1.q"), a: t("gov.faq1.a") },
    { q: t("gov.faq2.q"), a: t("gov.faq2.a") },
    { q: t("gov.faq3.q"), a: t("gov.faq3.a") },
    { q: t("gov.faq4.q"), a: t("gov.faq4.a") },
    { q: t("gov.faq5.q"), a: t("gov.faq5.a") },
    { q: t("gov.faq6.q"), a: t("gov.faq6.a") },
  ];

  const stats = [
    { value: "5M+", label: t("gov.stat.transactions"), icon: "📋" },
    { value: "20+", label: t("gov.stat.entities"), icon: "🏛️" },
    { value: "85%", label: t("gov.stat.automation"), icon: "🤖" },
    { value: "4.6⭐", label: t("gov.stat.satisfaction"), icon: "😊" },
  ];

  const governmentIntegrations = [
    {
      name: t("gov.integration.nafath"),
      icon: "🔐",
      type: t("gov.integration.type.identity"),
    },
    {
      name: t("gov.integration.absher"),
      icon: "🆔",
      type: t("gov.integration.type.services"),
    },
    {
      name: t("gov.integration.tawakkalna"),
      icon: "📱",
      type: t("gov.integration.type.app"),
    },
    {
      name: t("gov.integration.integration_center"),
      icon: "🔗",
      type: t("gov.integration.type.gov"),
    },
    {
      name: t("gov.integration.najiz"),
      icon: "⚖️",
      type: t("gov.integration.type.justice"),
    },
    {
      name: t("gov.integration.ejar"),
      icon: "🏠",
      type: t("gov.integration.type.housing"),
    },
    {
      name: t("gov.integration.quwwa"),
      icon: "👷",
      type: t("gov.integration.type.labor"),
    },
    {
      name: t("gov.integration.etimad"),
      icon: "💰",
      type: t("gov.integration.type.finance"),
    },
  ];

  const citizenJourney = [
    {
      step: 1,
      title: t("gov.journey.step1.title"),
      icon: "📞",
      description: t("gov.journey.step1.desc"),
      traditional: t("gov.journey.step1.traditional"),
      withSondos: t("gov.journey.step1.sondos"),
    },
    {
      step: 2,
      title: t("gov.journey.step2.title"),
      icon: "🔐",
      description: t("gov.journey.step2.desc"),
      traditional: t("gov.journey.step2.traditional"),
      withSondos: t("gov.journey.step2.sondos"),
    },
    {
      step: 3,
      title: t("gov.journey.step3.title"),
      icon: "🎯",
      description: t("gov.journey.step3.desc"),
      traditional: t("gov.journey.step3.traditional"),
      withSondos: t("gov.journey.step3.sondos"),
    },
    {
      step: 4,
      title: t("gov.journey.step4.title"),
      icon: "✅",
      description: t("gov.journey.step4.desc"),
      traditional: t("gov.journey.step4.traditional"),
      withSondos: t("gov.journey.step4.sondos"),
    },
    {
      step: 5,
      title: t("gov.journey.step5.title"),
      icon: "📊",
      description: t("gov.journey.step5.desc"),
      traditional: t("gov.journey.step5.traditional"),
      withSondos: t("gov.journey.step5.sondos"),
    },
  ];

  const useCaseDemo = [
    {
      title: t("gov.usecase.inquiry.title"),
      conversation: [
        { role: "ai", text: t("gov.usecase.inquiry.msg1") },
        { role: "user", text: t("gov.usecase.inquiry.msg2") },
        { role: "ai", text: t("gov.usecase.inquiry.msg3") },
        { role: "user", text: t("gov.usecase.inquiry.msg4") },
        { role: "ai", text: t("gov.usecase.inquiry.msg5") },
        { role: "user", text: t("gov.usecase.inquiry.msg6") },
        { role: "ai", text: t("gov.usecase.inquiry.msg7") },
      ],
    },
    {
      title: t("gov.usecase.report.title"),
      conversation: [
        { role: "ai", text: t("gov.usecase.report.msg1") },
        { role: "user", text: t("gov.usecase.report.msg2") },
        { role: "ai", text: t("gov.usecase.report.msg3") },
        { role: "user", text: t("gov.usecase.report.msg4") },
        { role: "ai", text: t("gov.usecase.report.msg5") },
        { role: "user", text: t("gov.usecase.report.msg6") },
        { role: "ai", text: t("gov.usecase.report.msg7") },
      ],
    },
  ];

  const calculateROI = () => {
    const { dailyCalls, employees, avgSalary, citizenSatisfaction } = roiInputs;
    const currentStaffCost = employees * avgSalary;
    const infrastructureCost = employees * 800;
    const trainingCost = employees * 300;
    const currentMonthlyCost =
      currentStaffCost + infrastructureCost + trainingCost;
    const automationRate = 0.85;
    const remainingCalls = dailyCalls * (1 - automationRate);
    const newEmployeesNeeded = Math.ceil(remainingCalls / 40);
    const sondosCost =
      dailyCalls <= 500 ? 25000 : dailyCalls <= 2000 ? 60000 : 120000;
    const newTotalCost =
      sondosCost + newEmployeesNeeded * avgSalary + newEmployeesNeeded * 800;
    const monthlySavings = currentMonthlyCost - newTotalCost;
    const annualSavings = monthlySavings * 12;
    const newSatisfaction = Math.min(citizenSatisfaction + 25, 98);
    const automatedCalls = Math.round(dailyCalls * automationRate * 30);
    return {
      currentMonthlyCost: Math.round(currentMonthlyCost),
      newTotalCost: Math.round(newTotalCost),
      monthlySavings: Math.round(monthlySavings),
      annualSavings: Math.round(annualSavings),
      automatedCalls,
      newSatisfaction,
    };
  };

  const roiResults = calculateROI();

  const statKeyLabel = (key: string) => {
    const labels: Record<string, string> = {
      automation: t("gov.stat.automation"),
      availability: t("gov.stat.availability"),
      accuracy: t("gov.stat.accuracy"),
      reports: t("gov.stat.reports"),
      tracking: t("gov.stat.tracking"),
      resolution: t("gov.stat.resolution"),
      booking: t("gov.stat.booking"),
      inquiries: t("gov.stat.inquiries"),
      noShow: t("gov.stat.noShow"),
      admissions: t("gov.stat.admissions"),
      support: t("gov.stat.support"),
      satisfaction: t("gov.stat.satisfaction"),
      clarity: t("gov.stat.clarity"),
      compliance: t("gov.stat.compliance"),
      billing: t("gov.stat.billing"),
      requests: t("gov.stat.requests"),
      outages: t("gov.stat.outages"),
    };
    return labels[key] ?? key;
  };

  return (
    <div
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="min-h-screen font-arabic bg-[var(--bg)] text-[var(--t1)]"
    >
      {/* ==================== HERO ==================== */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(90,24,154,0.15) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(90,24,154,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(90,24,154,.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse at center, black 20%, transparent 65%)",
          }}
        />
        <div
          className="absolute top-20 left-[10%] w-32 h-32 rounded-full opacity-20 float-gentle"
          style={{
            background:
              "radial-gradient(circle, rgba(90,24,154,0.3), transparent 70%)",
          }}
        />
        <div
          className="absolute top-40 right-[15%] w-24 h-24 rounded-full opacity-15 float-slow"
          style={{
            background:
              "radial-gradient(circle, rgba(157,78,221,0.3), transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-32 left-[20%] w-20 h-20 rounded-full opacity-10 float-gentle"
          style={{
            background:
              "radial-gradient(circle, rgba(123,44,191,0.4), transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-[820px] mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-[rgba(90,24,154,0.08)] border border-[rgba(90,24,154,0.2)] rounded-full text-[13px] font-medium text-[#9d4edd] mb-7 animate-fade-up backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#00d68f]" />
            {t("gov.hero.badge")}
          </div>

          <h1 className="font-['Instrument_Sans',sans-serif] text-[clamp(38px,5.5vw,68px)] font-bold leading-[1.08] tracking-tight mb-6 animate-fade-up animation-delay-100">
            {t("gov.hero.title1")}{" "}
            <span className="text-[#9d4edd]">{t("gov.hero.title2")}</span>
            <br />
            {t("gov.hero.title3")}
          </h1>

          <p className="text-[clamp(16px,1.8vw,19px)] font-semibold text-[var(--t1)] max-w-[580px] mx-auto leading-relaxed mb-4 animate-fade-up animation-delay-150">
            {t("gov.hero.subtitle")}
          </p>

          <p className="text-[clamp(14px,1.6vw,17px)] text-[var(--t2)] max-w-[680px] mx-auto leading-relaxed mb-9 animate-fade-up animation-delay-200">
            {t("gov.hero.proof")}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-up animation-delay-300">
            {[
              { value: "85%", label: t("gov.stat.automation"), icon: "🤖" },
              { value: "24/7", label: t("gov.stat.service"), icon: "⏰" },
              { value: "4.6⭐", label: t("gov.stat.satisfaction"), icon: "😊" },
            ].map((stat, i) => (
              <div
                key={i}
                className="px-5 py-4 rounded-2xl text-center bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border border-[rgba(90,24,154,0.15)] shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-xl font-bold text-[#9d4edd]">
                  {stat.value}
                </div>
                <div className="text-xs text-[var(--t3)]">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-3.5 mb-10 flex-wrap animate-fade-up animation-delay-300">
            <a
              href="/demo"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-[15px] font-semibold text-white gradient-bg glow rounded-full hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(90,24,154,0.4)] transition-all duration-300 shimmer"
            >
              {t("gov.hero.cta")}
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-3 animate-fade-up animation-delay-300">
            {[
              t("gov.badge.security"),
              t("gov.badge.servers"),
              t("gov.badge.compliance"),
            ].map((badge, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full text-xs font-medium bg-[rgba(90,24,154,0.08)] text-[#9d4edd] border border-[rgba(90,24,154,0.15)]"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== STATS ==================== */}
      <section id="stats-section" className="py-16 px-6 bg-[var(--bg2)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border border-[rgba(90,24,154,0.1)] shadow-[0_4px_14px_rgba(0,0,0,0.05)] transition-transform group-hover:scale-110">
                  {stat.icon}
                </div>
                <div className="text-3xl sm:text-4xl font-bold mb-2 text-[#9d4edd]">
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

      {/* ==================== CITIZEN JOURNEY ==================== */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Instrument_Sans',sans-serif] text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4">
              {t("gov.journey.title")}{" "}
              <span className="text-[#9d4edd]">{t("gov.journey.title2")}</span>
            </h2>
            <p className="text-[var(--t2)]">{t("gov.journey.subtitle")}</p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {citizenJourney.map((step, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-2xl bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border border-[rgba(90,24,154,0.1)] hover:border-[rgba(90,24,154,0.25)] transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="absolute -top-3 right-4 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white gradient-bg">
                  {step.step}
                </div>
                <div className="text-4xl mb-4 text-center">{step.icon}</div>
                <h3 className="font-bold text-center mb-2 text-[var(--t1)]">
                  {step.title}
                </h3>
                <p className="text-xs text-center mb-4 text-[var(--t2)]">
                  {step.description}
                </p>
                <div className="space-y-2">
                  <div className="p-2 rounded-lg text-xs bg-[rgba(239,68,68,0.08)] text-red-400">
                    ❌ {step.traditional}
                  </div>
                  <div className="p-2 rounded-lg text-xs bg-[rgba(16,185,129,0.08)] text-emerald-600">
                    ✓ {step.withSondos}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SEGMENTS ==================== */}
      <section id="solutions" className="py-24 px-6 bg-[var(--bg2)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Instrument_Sans',sans-serif] text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4">
              {t("gov.segments.title")}{" "}
              <span className="text-[#9d4edd]">{t("gov.segments.title2")}</span>
            </h2>
            <p className="text-[var(--t2)] text-lg">
              {t("gov.segments.subtitle")}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {segments.map((segment, idx) => {
              const isActive = activeSegment === idx;
              return (
                <button
                  key={segment.id}
                  onClick={() => setActiveSegment(idx)}
                  className={`px-5 py-2.5 rounded-full flex items-center gap-2 text-[13px] font-medium transition-all duration-300 border backdrop-blur-sm ${
                    isActive
                      ? "gradient-bg glow text-white border-[rgba(90,24,154,0.4)]"
                      : "bg-[rgba(90,24,154,0.04)] border-[rgba(90,24,154,0.12)] text-[var(--t2)] hover:border-[rgba(90,24,154,0.25)]"
                  }`}
                >
                  <span className="text-xl">{segment.icon}</span>
                  <span className="hidden sm:inline">{segment.name}</span>
                </button>
              );
            })}
          </div>

          <div className="rounded-3xl overflow-hidden border border-[rgba(90,24,154,0.15)] shadow-[0_20px_60px_rgba(90,24,154,0.12)]">
            <div className="grid md:grid-cols-2">
              <div className="p-8 sm:p-10 bg-[rgba(239,68,68,0.05)] border-b md:border-b-0 md:border-l border-[rgba(90,24,154,0.08)]">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">😫</span>
                  <h3 className="text-xl font-bold text-red-400">
                    {t("gov.segments.pain")}
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
              <div className="p-8 sm:p-10 bg-[rgba(90,24,154,0.04)]">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">🎉</span>
                  <h3 className="text-xl font-bold text-[#9d4edd]">
                    {t("gov.segments.solution")}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {segments[activeSegment].solutions.map((solution, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[#9d4edd]">✓</span>
                      <span className="text-[var(--t1)]">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="p-6 bg-[var(--bg)] border-t border-[rgba(90,24,154,0.08)]">
              <div className="flex flex-wrap items-center justify-between gap-6">
                <div>
                  <div className="text-sm font-medium mb-2 text-[var(--t2)]">
                    {t("gov.segments.useCases")}:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {segments[activeSegment].useCases.map((useCase, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-sm bg-[rgba(90,24,154,0.08)] text-[#9d4edd] border border-[rgba(90,24,154,0.15)]"
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
                        <div className="text-2xl font-bold text-[#9d4edd]">
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

      {/* ==================== SECURITY ==================== */}
      <section id="security" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Instrument_Sans',sans-serif] text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4">
              {t("gov.security.title")}{" "}
              <span className="text-[#9d4edd]">{t("gov.security.title2")}</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🔐",
                title: t("gov.security.item1.title"),
                desc: t("gov.security.item1.desc"),
              },
              {
                icon: "🇸🇦",
                title: t("gov.security.item2.title"),
                desc: t("gov.security.item2.desc"),
              },
              {
                icon: "📋",
                title: t("gov.security.item3.title"),
                desc: t("gov.security.item3.desc"),
              },
              {
                icon: "🛡️",
                title: t("gov.security.item4.title"),
                desc: t("gov.security.item4.desc"),
              },
              {
                icon: "👤",
                title: t("gov.security.item5.title"),
                desc: t("gov.security.item5.desc"),
              },
              {
                icon: "📊",
                title: t("gov.security.item6.title"),
                desc: t("gov.security.item6.desc"),
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-3xl bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border border-[rgba(90,24,154,0.1)] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-[rgba(90,24,154,0.3)] ai-glow"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold mb-2 text-[var(--t1)]">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--t2)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FEATURES ==================== */}
      <section id="features" className="py-24 px-6 bg-[var(--bg2)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Instrument_Sans',sans-serif] text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4">
              {t("gov.features.title")}{" "}
              <span className="text-[#9d4edd]">{t("gov.features.title2")}</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-3xl bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border border-[rgba(90,24,154,0.1)] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-[rgba(90,24,154,0.3)] ai-glow"
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 bg-[rgba(90,24,154,0.06)] transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[var(--t1)]">
                  {feature.title}
                </h3>
                <p className="text-sm mb-5 leading-relaxed text-[var(--t2)]">
                  {feature.description}
                </p>
                <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold bg-[rgba(90,24,154,0.08)] text-[#9d4edd] border border-[rgba(90,24,154,0.15)]">
                  {feature.highlight}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== INTEGRATIONS ==================== */}
      <section id="integrations" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Instrument_Sans',sans-serif] text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4">
              {t("gov.integrations.title")}{" "}
              <span className="text-[#9d4edd]">
                {t("gov.integrations.title2")}
              </span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {governmentIntegrations.map((int, idx) => (
              <div
                key={idx}
                className="px-8 py-6 rounded-2xl text-center bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border border-[rgba(90,24,154,0.1)] hover:border-[rgba(90,24,154,0.25)] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="text-4xl mb-3">{int.icon}</div>
                <div className="font-bold text-[var(--t1)]">{int.name}</div>
                <div className="text-xs mt-1 px-2 py-0.5 rounded-full inline-block bg-[rgba(90,24,154,0.08)] text-[#9d4edd]">
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
            <h2 className="font-['Instrument_Sans',sans-serif] text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4">
              {t("gov.usecases.title")}{" "}
              <span className="text-[#9d4edd]">{t("gov.usecases.title2")}</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {useCaseDemo.map((useCase, idx) => (
              <div
                key={idx}
                className="rounded-3xl overflow-hidden bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border border-[rgba(90,24,154,0.1)] shadow-[0_0_40px_rgba(90,24,154,0.08)]"
              >
                <div className="px-6 py-4 font-bold bg-[rgba(90,24,154,0.06)] text-[var(--t1)] border-b border-[rgba(90,24,154,0.08)]">
                  {useCase.title}
                </div>
                <div className="p-6 space-y-4 max-h-[450px] overflow-y-auto">
                  {useCase.conversation.map((msg, i) => (
                    <div
                      key={i}
                      className={`p-4 rounded-2xl text-sm ${
                        msg.role === "ai"
                          ? "rounded-tr-md max-w-[85%] mr-auto bg-[rgba(90,24,154,0.06)] border border-[rgba(90,24,154,0.1)] text-[var(--t1)]"
                          : "rounded-tl-md max-w-[75%] ml-auto gradient-bg text-white"
                      }`}
                      style={{ whiteSpace: "pre-line" }}
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
            <h2 className="font-['Instrument_Sans',sans-serif] text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4">
              {t("gov.testimonials.title")}{" "}
              <span className="text-[#9d4edd]">
                {t("gov.testimonials.title2")}
              </span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto p-10 sm:p-14 rounded-3xl bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border border-[rgba(90,24,154,0.15)] shadow-[0_0_60px_rgba(90,24,154,0.1)] relative">
            <div className="absolute top-6 right-8 text-8xl font-serif opacity-10 text-[#5a189a]">
              "
            </div>
            <p className="text-xl sm:text-2xl leading-relaxed mb-8 text-[var(--t1)]">
              {testimonials[currentTestimonial].quote}
            </p>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl gradient-bg shadow-lg">
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
              <div className="px-4 py-2 rounded-xl font-bold bg-[rgba(90,24,154,0.08)] text-[#9d4edd] border border-[rgba(90,24,154,0.2)]">
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
                        ? "linear-gradient(135deg,#5a189a,#9d4edd)"
                        : "rgba(90,24,154,0.2)",
                    width: currentTestimonial === idx ? "32px" : "12px",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Instrument_Sans',sans-serif] text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4">
              {t("gov.faq.title")}{" "}
              <span className="text-[#9d4edd]">{t("gov.faq.title2")}</span>
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const open = activeFAQ === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl overflow-hidden bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border border-[rgba(90,24,154,0.1)] hover:border-[rgba(90,24,154,0.25)] transition-all duration-300"
                >
                  <button
                    className="w-full flex items-center justify-between px-6 py-5 text-right font-semibold text-[var(--t1)]"
                    onClick={() => setActiveFAQ(open ? null : idx)}
                  >
                    {faq.q}
                    <span className="text-xl ml-4 flex-shrink-0 text-[#9d4edd]">
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
      <section className="py-24 px-6 gradient-bg">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">🏛️</div>
          <h2 className="font-['Instrument_Sans',sans-serif] text-[clamp(28px,4vw,48px)] font-bold leading-[1.08] tracking-tight mb-6 text-white">
            {t("gov.cta.title1")}
            <br />
            {t("gov.cta.title2")}
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
            {t("gov.cta.subtitle")}
          </p>
          <div className="flex justify-center mb-12">
            <a
              href="/demo"
              className="inline-flex items-center gap-2 px-10 py-5 bg-[rgba(255,255,255,0.95)] rounded-2xl font-bold text-lg shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-white text-[#5a189a] shimmer"
            >
              {t("gov.cta.button")}
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-white/70 text-sm">
            <span>🔐 {t("gov.badge.security")}</span>
            <span>🇸🇦 {t("gov.badge.servers")}</span>
            <span>📋 {t("gov.badge.compliance")}</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SondosGovernance;
