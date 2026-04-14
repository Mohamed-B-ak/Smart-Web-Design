import React, { useState, useEffect, useMemo } from "react";
import { Link } from "wouter";
import "../index.css";
import { useLanguage } from "@/context/LanguageContext";

// ─── Types ────────────────────────────────────────────────────────────────────
type ComparisonRow = { itemKey: string; valueKey: string; highlight?: boolean };
type ComparisonTab = {
  titleKey: string;
  traditional: ComparisonRow[];
  sondos: ComparisonRow[];
  savingsKey?: string;
};

/* ── shared colour tokens ───────────────────── */
const PURPLE = "#672D92";
const PURPLE_RGB = "103,45,146";
const purpleBg = (a: number) => `rgba(${PURPLE_RGB},${a})`;
const purpleBorder = (a: number) => `rgba(${PURPLE_RGB},${a})`;

const SondosCallCenter = () => {
  const { t, lang } = useLanguage();

  const [activeSegment, setActiveSegment] = useState(0);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [activeComparison, setActiveComparison] = useState<
    "cost" | "quality" | "scale"
  >("cost");

  const [roiInputs, setRoiInputs] = useState({
    agents: 20,
    avgSalary: 6000,
    dailyCalls: 500,
    avgHandleTime: 5,
    waitTime: 3,
  });

  // ─── Data ──────────────────────────────────────────────────────────────────
  const segments = useMemo(
    () => [
      {
        id: "inbound",
        nameKey: "cc.seg.inbound.name",
        icon: "📞",
        painKeys: [
          "cc.seg.inbound.pain1",
          "cc.seg.inbound.pain2",
          "cc.seg.inbound.pain3",
        ],
        solKeys: [
          "cc.seg.inbound.sol1",
          "cc.seg.inbound.sol2",
          "cc.seg.inbound.sol3",
        ],
        stats: {
          waitTime: "cc.seg.inbound.stat.waitTime",
          cost: "cc.seg.inbound.stat.cost",
          quality: "cc.seg.inbound.stat.quality",
        },
      },
      {
        id: "outbound",
        nameKey: "cc.seg.outbound.name",
        icon: "📱",
        painKeys: [
          "cc.seg.outbound.pain1",
          "cc.seg.outbound.pain2",
          "cc.seg.outbound.pain3",
        ],
        solKeys: [
          "cc.seg.outbound.sol1",
          "cc.seg.outbound.sol2",
          "cc.seg.outbound.sol3",
        ],
        stats: {
          capacity: "cc.seg.outbound.stat.capacity",
          reach: "cc.seg.outbound.stat.reach",
          efficiency: "cc.seg.outbound.stat.efficiency",
        },
      },
      {
        id: "support",
        nameKey: "cc.seg.support.name",
        icon: "🎧",
        painKeys: [
          "cc.seg.support.pain1",
          "cc.seg.support.pain2",
          "cc.seg.support.pain3",
        ],
        solKeys: [
          "cc.seg.support.sol1",
          "cc.seg.support.sol2",
          "cc.seg.support.sol3",
        ],
        stats: {
          automation: "cc.seg.support.stat.automation",
          availability: "cc.seg.support.stat.availability",
          training: "cc.seg.support.stat.training",
        },
      },
      {
        id: "sales",
        nameKey: "cc.seg.sales.name",
        icon: "💼",
        painKeys: [
          "cc.seg.sales.pain1",
          "cc.seg.sales.pain2",
          "cc.seg.sales.pain3",
        ],
        solKeys: [
          "cc.seg.sales.sol1",
          "cc.seg.sales.sol2",
          "cc.seg.sales.sol3",
        ],
        stats: {
          qualification: "cc.seg.sales.stat.qualification",
          followUp: "cc.seg.sales.stat.followUp",
          CAC: "cc.seg.sales.stat.CAC",
        },
      },
    ],
    [],
  );

  const features = useMemo(
    () => [
      {
        icon: "⚡",
        titleKey: "cc.feat1.title",
        descKey: "cc.feat1.desc",
        highlightKey: "cc.feat1.highlight",
      },
      {
        icon: "📈",
        titleKey: "cc.feat2.title",
        descKey: "cc.feat2.desc",
        highlightKey: "cc.feat2.highlight",
      },
      {
        icon: "🎯",
        titleKey: "cc.feat3.title",
        descKey: "cc.feat3.desc",
        highlightKey: "cc.feat3.highlight",
      },
      {
        icon: "🔄",
        titleKey: "cc.feat4.title",
        descKey: "cc.feat4.desc",
        highlightKey: "cc.feat4.highlight",
      },
      {
        icon: "📊",
        titleKey: "cc.feat5.title",
        descKey: "cc.feat5.desc",
        highlightKey: "cc.feat5.highlight",
      },
      {
        icon: "🌐",
        titleKey: "cc.feat6.title",
        descKey: "cc.feat6.desc",
        highlightKey: "cc.feat6.highlight",
      },
    ],
    [],
  );

  const testimonials = useMemo(
    () => [
      {
        quoteKey: "cc.test1.quote",
        nameKey: "cc.test1.name",
        roleKey: "cc.test1.role",
        companyKey: "cc.test1.company",
        metricKey: "cc.test1.metric",
        image: "👨‍💼",
      },
      {
        quoteKey: "cc.test2.quote",
        nameKey: "cc.test2.name",
        roleKey: "cc.test2.role",
        companyKey: "cc.test2.company",
        metricKey: "cc.test2.metric",
        image: "👩‍💼",
      },
      {
        quoteKey: "cc.test3.quote",
        nameKey: "cc.test3.name",
        roleKey: "cc.test3.role",
        companyKey: "cc.test3.company",
        metricKey: "cc.test3.metric",
        image: "👨‍⚕️",
      },
    ],
    [],
  );

  const faqs = useMemo(
    () => [
      { qKey: "cc.faq.q1", aKey: "cc.faq.a1" },
      { qKey: "cc.faq.q2", aKey: "cc.faq.a2" },
      { qKey: "cc.faq.q3", aKey: "cc.faq.a3" },
      { qKey: "cc.faq.q4", aKey: "cc.faq.a4" },
      { qKey: "cc.faq.q5", aKey: "cc.faq.a5" },
      { qKey: "cc.faq.q6", aKey: "cc.faq.a6" },
    ],
    [],
  );

  const stats = useMemo(
    () => [
      {
        valueKey: "cc.stats.calls.value",
        labelKey: "cc.stats.calls",
        icon: "📞",
      },
      {
        valueKey: "cc.stats.centers.value",
        labelKey: "cc.stats.centers",
        icon: "🏢",
      },
      {
        valueKey: "cc.stats.savings.value",
        labelKey: "cc.stats.savings",
        icon: "💰",
      },
      {
        valueKey: "cc.stats.wait.value",
        labelKey: "cc.stats.wait",
        icon: "⚡",
      },
    ],
    [],
  );

  const heroStats = useMemo(
    () => [
      {
        valueKey: "cc.hero.stat1.value",
        labelKey: "cc.hero.stat1.label",
        icon: "⚡",
      },
      {
        valueKey: "cc.hero.stat2.value",
        labelKey: "cc.hero.stat2.label",
        icon: "🤖",
      },
      {
        valueKey: "cc.hero.stat3.value",
        labelKey: "cc.hero.stat3.label",
        icon: "💰",
      },
    ],
    [],
  );

  const problems = useMemo(
    () => [
      { icon: "💸", titleKey: "cc.prob1.title", descKey: "cc.prob1.desc" },
      { icon: "⏰", titleKey: "cc.prob2.title", descKey: "cc.prob2.desc" },
      { icon: "🔄", titleKey: "cc.prob3.title", descKey: "cc.prob3.desc" },
      { icon: "📉", titleKey: "cc.prob4.title", descKey: "cc.prob4.desc" },
    ],
    [],
  );

  const solutions = useMemo(
    () => [
      { icon: "💰", titleKey: "cc.sol1.title", descKey: "cc.sol1.desc" },
      { icon: "⚡", titleKey: "cc.sol2.title", descKey: "cc.sol2.desc" },
      { icon: "🔒", titleKey: "cc.sol3.title", descKey: "cc.sol3.desc" },
      { icon: "⭐", titleKey: "cc.sol4.title", descKey: "cc.sol4.desc" },
    ],
    [],
  );

  const comparisonTabs = useMemo(
    () => [
      { id: "cost", labelKey: "cc.comparison.tab.cost" },
      { id: "quality", labelKey: "cc.comparison.tab.quality" },
      { id: "scale", labelKey: "cc.comparison.tab.scale" },
    ],
    [],
  );

  const comparisonData: Record<string, ComparisonTab> = useMemo(
    () => ({
      cost: {
        titleKey: "cc.comparison.cost.title",
        traditional: [
          { itemKey: "cc.comparison.cost.trad1.item", valueKey: "cc.comparison.cost.trad1.value" },
          { itemKey: "cc.comparison.cost.trad2.item", valueKey: "cc.comparison.cost.trad2.value" },
          { itemKey: "cc.comparison.cost.trad3.item", valueKey: "cc.comparison.cost.trad3.value" },
          { itemKey: "cc.comparison.cost.trad4.item", valueKey: "cc.comparison.cost.trad4.value" },
          { itemKey: "cc.comparison.cost.trad5.item", valueKey: "cc.comparison.cost.trad5.value" },
          { itemKey: "cc.comparison.cost.trad6.item", valueKey: "cc.comparison.cost.trad6.value", highlight: true },
        ],
        sondos: [
          { itemKey: "cc.comparison.cost.son1.item", valueKey: "cc.comparison.cost.son1.value" },
          { itemKey: "cc.comparison.cost.son2.item", valueKey: "cc.comparison.cost.son2.value" },
          { itemKey: "cc.comparison.cost.son3.item", valueKey: "cc.comparison.cost.son3.value" },
          { itemKey: "cc.comparison.cost.son4.item", valueKey: "cc.comparison.cost.son4.value" },
          { itemKey: "cc.comparison.cost.son5.item", valueKey: "cc.comparison.cost.son5.value" },
          { itemKey: "cc.comparison.cost.son6.item", valueKey: "cc.comparison.cost.son6.value", highlight: true },
        ],
        savingsKey: "cc.comparison.cost.savings",
      },
      quality: {
        titleKey: "cc.comparison.quality.title",
        traditional: [
          { itemKey: "cc.comparison.quality.trad1.item", valueKey: "cc.comparison.quality.trad1.value" },
          { itemKey: "cc.comparison.quality.trad2.item", valueKey: "cc.comparison.quality.trad2.value" },
          { itemKey: "cc.comparison.quality.trad3.item", valueKey: "cc.comparison.quality.trad3.value" },
          { itemKey: "cc.comparison.quality.trad4.item", valueKey: "cc.comparison.quality.trad4.value" },
          { itemKey: "cc.comparison.quality.trad5.item", valueKey: "cc.comparison.quality.trad5.value" },
        ],
        sondos: [
          { itemKey: "cc.comparison.quality.son1.item", valueKey: "cc.comparison.quality.son1.value" },
          { itemKey: "cc.comparison.quality.son2.item", valueKey: "cc.comparison.quality.son2.value" },
          { itemKey: "cc.comparison.quality.son3.item", valueKey: "cc.comparison.quality.son3.value" },
          { itemKey: "cc.comparison.quality.son4.item", valueKey: "cc.comparison.quality.son4.value" },
          { itemKey: "cc.comparison.quality.son5.item", valueKey: "cc.comparison.quality.son5.value" },
        ],
      },
      scale: {
        titleKey: "cc.comparison.scale.title",
        traditional: [
          { itemKey: "cc.comparison.scale.trad1.item", valueKey: "cc.comparison.scale.trad1.value" },
          { itemKey: "cc.comparison.scale.trad2.item", valueKey: "cc.comparison.scale.trad2.value" },
          { itemKey: "cc.comparison.scale.trad3.item", valueKey: "cc.comparison.scale.trad3.value" },
          { itemKey: "cc.comparison.scale.trad4.item", valueKey: "cc.comparison.scale.trad4.value" },
          { itemKey: "cc.comparison.scale.trad5.item", valueKey: "cc.comparison.scale.trad5.value" },
        ],
        sondos: [
          { itemKey: "cc.comparison.scale.son1.item", valueKey: "cc.comparison.scale.son1.value" },
          { itemKey: "cc.comparison.scale.son2.item", valueKey: "cc.comparison.scale.son2.value" },
          { itemKey: "cc.comparison.scale.son3.item", valueKey: "cc.comparison.scale.son3.value" },
          { itemKey: "cc.comparison.scale.son4.item", valueKey: "cc.comparison.scale.son4.value" },
          { itemKey: "cc.comparison.scale.son5.item", valueKey: "cc.comparison.scale.son5.value" },
        ],
      },
    }),
    [],
  );

  const integrations = useMemo(
    () => [
      { name: "Genesys", icon: "☁️", typeKey: "cc.integration.type.callcenter" },
      { name: "Avaya", icon: "📞", typeKey: "cc.integration.type.callcenter" },
      { name: "Cisco", icon: "🔗", typeKey: "cc.integration.type.callcenter" },
      { name: "Five9", icon: "5️⃣", typeKey: "cc.integration.type.callcenter" },
      { name: "Salesforce", icon: "☁️", typeKey: "cc.integration.type.crm" },
      { name: "Zoho", icon: "📊", typeKey: "cc.integration.type.crm" },
      { name: "Zendesk", icon: "🎫", typeKey: "cc.integration.type.tickets" },
      { name: "Freshdesk", icon: "🎧", typeKey: "cc.integration.type.tickets" },
      { name: "WhatsApp", icon: "💬", typeKey: "cc.integration.type.comms" },
      { name: "Microsoft Teams", icon: "👥", typeKey: "cc.integration.type.comms" },
    ],
    [],
  );

  // ─── Effects ───────────────────────────────────────────────────────────────
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsVisible(true);
      },
      { threshold: 0.3 },
    );
    const el = document.getElementById("stats-section");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // ─── ROI ───────────────────────────────────────────────────────────────────
  const roiResults = useMemo(() => {
    const { agents, avgSalary, dailyCalls } = roiInputs;
    const totalSalaries = agents * avgSalary;
    const benefits = totalSalaries * 0.2;
    const training = agents * 400;
    const infrastructure = agents * 750;
    const management = totalSalaries * 0.15;
    const currentMonthlyCost =
      totalSalaries + benefits + training + infrastructure + management;
    const automationRate = 0.75;
    const remainingAgents = Math.ceil(agents * (1 - automationRate));
    const sondosCost =
      dailyCalls <= 200 ? 15000 : dailyCalls <= 500 ? 25000 : 45000;
    const remainingSalaries = remainingAgents * avgSalary;
    const remainingBenefits = remainingSalaries * 0.2;
    const sondosMonthlyCost =
      sondosCost + remainingSalaries + remainingBenefits;
    const monthlySavings = currentMonthlyCost - sondosMonthlyCost;
    const annualSavings = monthlySavings * 12;
    const savingsPercent = Math.round(
      (monthlySavings / currentMonthlyCost) * 100,
    );
    const missedCallsRecovered = Math.round(dailyCalls * 30 * (1.0 - 0.75));
    return {
      currentMonthlyCost: Math.round(currentMonthlyCost),
      sondosMonthlyCost: Math.round(sondosMonthlyCost),
      monthlySavings: Math.round(monthlySavings),
      annualSavings: Math.round(annualSavings),
      savingsPercent,
      remainingAgents,
      missedCallsRecovered,
    };
  }, [roiInputs]);

  const statKeyLabel = (key: string) => t(`cc.stat_label.${key}`) ?? key;

  /* ── gradient used inline ──────────────────── */
  const purpleGradient = `linear-gradient(135deg, ${PURPLE}, #7f47ac)`;

  return (
    <div
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="min-h-screen bg-[var(--bg)] text-[var(--t1)]"
      style={{ fontFamily: "'din-next-lt-arabic-b4fd9f01e2', sans-serif" }}
    >
      {/* ==================== HERO ==================== */}
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
            {t("cc.hero.badge")}
          </div>

          <h1
            className="text-[clamp(38px,5.5vw,68px)] font-bold leading-[1.08] tracking-tight mb-6 max-w-4xl mx-auto animate-fade-up animation-delay-100"
            style={{ color: PURPLE }}
          >
            {t("cc.hero.title1")} {t("cc.hero.title2")} <br />
            {t("cc.hero.title3")}
          </h1>

          <p className="text-[clamp(16px,1.8vw,19px)] font-semibold text-[var(--t1)] max-w-[580px] mx-auto leading-relaxed mb-4 animate-fade-up animation-delay-150">
            {t("cc.hero.subtitle")}
          </p>

          <p className="text-[clamp(14px,1.6vw,17px)] text-[var(--t2)] max-w-[680px] mx-auto leading-relaxed mb-9 animate-fade-up animation-delay-200">
            {t("cc.hero.proof")}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-up animation-delay-300">
            {heroStats.map((stat, i) => (
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
                  {t(stat.valueKey)}
                </div>
                <div className="text-xs text-[var(--t3)]">
                  {t(stat.labelKey)}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-3.5 mb-12 flex-wrap animate-fade-up animation-delay-300">
            <Link
              to="/demo"
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
              {t("cc.hero.cta")}
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== PROBLEMS ==================== */}
      <section className="py-20 bg-[var(--bg2)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4 text-[#0a0a0a]">
              {t("cc.problems.title1")} {t("cc.problems.title2")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {problems.map((item, idx) => (
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
                  {t(item.titleKey)}
                </h3>
                <p className="text-sm text-[var(--t2)]">{t(item.descKey)}</p>
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
                {t("cc.problems.bridge")}
              </span>
              <span className="text-2xl">⬇️</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((item, idx) => (
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
                  {t(item.titleKey)}
                </h3>
                <p className="text-sm text-[var(--t2)]">{t(item.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== STATS ==================== */}
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
                  {statsVisible ? t(stat.valueKey) : "—"}
                </div>
                <div className="text-sm font-medium text-[var(--t2)]">
                  {t(stat.labelKey)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FEATURES ==================== */}
      <section id="features" className="py-24 px-6 bg-[var(--bg2)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4 text-[#0a0a0a]">
              {t("cc.features.title1")} {t("cc.features.title2")}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat, idx) => (
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
                  {feat.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[var(--t1)]">
                  {t(feat.titleKey)}
                </h3>
                <p className="text-sm mb-5 leading-relaxed text-[var(--t2)]">
                  {t(feat.descKey)}
                </p>
                <span
                  className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold border"
                  style={{
                    background: purpleBg(0.08),
                    color: PURPLE,
                    borderColor: purpleBorder(0.15),
                  }}
                >
                  {t(feat.highlightKey)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== INTEGRATIONS ==================== */}
      <section className="py-24 px-6 bg-[var(--bg2)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4 text-[#0a0a0a]">
              {t("cc.integrations.title1")} {t("cc.integrations.title2")}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {integrations.map((int, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl flex flex-col items-center gap-3 backdrop-blur-xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
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
                <span className="font-semibold text-[var(--t1)]">
                  {int.name}
                </span>
                <span
                  className="text-xs px-2 py-1 rounded-full"
                  style={{
                    background: purpleBg(0.08),
                    color: PURPLE,
                  }}
                >
                  {t(int.typeKey)}
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
              {t("cc.testimonials.title1")} {t("cc.testimonials.title2")}
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
              {t(testimonials[currentTestimonial].quoteKey)}
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
                    {t(testimonials[currentTestimonial].nameKey)}
                  </div>
                  <div className="text-sm text-[var(--t2)]">
                    {t(testimonials[currentTestimonial].roleKey)} ·{" "}
                    {t(testimonials[currentTestimonial].companyKey)}
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
                {t(testimonials[currentTestimonial].metricKey)}
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
              {t("cc.faq.title1")} {t("cc.faq.title2")}
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
                    borderColor: open ? purpleBorder(0.25) : purpleBorder(0.1),
                  }}
                >
                  <button
                    className="w-full flex items-center justify-between px-6 py-5 text-right font-semibold text-[var(--t1)]"
                    onClick={() => setActiveFAQ(open ? null : idx)}
                  >
                    {t(faq.qKey)}
                    <span
                      className="text-xl ml-4 flex-shrink-0"
                      style={{ color: PURPLE }}
                    >
                      {open ? "−" : "+"}
                    </span>
                  </button>
                  {open && (
                    <div className="px-6 pb-5 text-sm leading-relaxed text-[var(--t2)]">
                      {t(faq.aKey)}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section
        className="py-24 px-6"
        style={{ background: purpleGradient }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">📞</div>
          <h2 className="text-[clamp(28px,4vw,48px)] font-bold leading-[1.08] tracking-tight mb-6 text-white">
            {t("cc.cta.title1")}
            <br />
            {t("cc.cta.title2")}
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
            {t("cc.cta.subtitle")}
          </p>
          <div className="flex justify-center mb-12">
            <Link
              to="/demo"
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
              {t("cc.cta.button")}
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-white/70 text-sm">
            <span>{t("cc.cta.badge2")}</span>
            <span>{t("cc.cta.badge3")}</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SondosCallCenter;