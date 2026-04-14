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

const SondosLogistics = () => {
  const { t, lang } = useLanguage();

  const [activeSegment, setActiveSegment] = useState(0);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [activeComparison, setActiveComparison] = useState<
    "cost" | "efficiency" | "visibility"
  >("cost");

  // ─── Data ──────────────────────────────────────────────────────────────────
  const segments = useMemo(
    () => [
      {
        id: "freight",
        nameKey: "log.seg.freight.name",
        icon: "🚚",
        painKeys: [
          "log.seg.freight.pain1",
          "log.seg.freight.pain2",
          "log.seg.freight.pain3",
        ],
        solKeys: [
          "log.seg.freight.sol1",
          "log.seg.freight.sol2",
          "log.seg.freight.sol3",
        ],
        stats: {
          deliveryCost: "log.seg.freight.stat.deliveryCost",
          fleetUtil: "log.seg.freight.stat.fleetUtil",
          onTime: "log.seg.freight.stat.onTime",
        },
      },
      {
        id: "ecommerce",
        nameKey: "log.seg.ecommerce.name",
        icon: "📦",
        painKeys: [
          "log.seg.ecommerce.pain1",
          "log.seg.ecommerce.pain2",
          "log.seg.ecommerce.pain3",
        ],
        solKeys: [
          "log.seg.ecommerce.sol1",
          "log.seg.ecommerce.sol2",
          "log.seg.ecommerce.sol3",
        ],
        stats: {
          stockouts: "log.seg.ecommerce.stat.stockouts",
          prepSpeed: "log.seg.ecommerce.stat.prepSpeed",
          nps: "log.seg.ecommerce.stat.nps",
        },
      },
      {
        id: "cold",
        nameKey: "log.seg.cold.name",
        icon: "❄️",
        painKeys: [
          "log.seg.cold.pain1",
          "log.seg.cold.pain2",
          "log.seg.cold.pain3",
        ],
        solKeys: [
          "log.seg.cold.sol1",
          "log.seg.cold.sol2",
          "log.seg.cold.sol3",
        ],
        stats: {
          thermalBreaks: "log.seg.cold.stat.thermalBreaks",
          compliance: "log.seg.cold.stat.compliance",
          energy: "log.seg.cold.stat.energy",
        },
      },
      {
        id: "international",
        nameKey: "log.seg.international.name",
        icon: "🌍",
        painKeys: [
          "log.seg.international.pain1",
          "log.seg.international.pain2",
          "log.seg.international.pain3",
        ],
        solKeys: [
          "log.seg.international.sol1",
          "log.seg.international.sol2",
          "log.seg.international.sol3",
        ],
        stats: {
          customsDelay: "log.seg.international.stat.customsDelay",
          freightCost: "log.seg.international.stat.freightCost",
          visibility: "log.seg.international.stat.visibility",
        },
      },
    ],
    [],
  );

  const features = useMemo(
    () => [
      {
        icon: "🗺️",
        titleKey: "log.feat1.title",
        descKey: "log.feat1.desc",
        highlightKey: "log.feat1.highlight",
      },
      {
        icon: "📊",
        titleKey: "log.feat2.title",
        descKey: "log.feat2.desc",
        highlightKey: "log.feat2.highlight",
      },
      {
        icon: "🏭",
        titleKey: "log.feat3.title",
        descKey: "log.feat3.desc",
        highlightKey: "log.feat3.highlight",
      },
      {
        icon: "🔧",
        titleKey: "log.feat4.title",
        descKey: "log.feat4.desc",
        highlightKey: "log.feat4.highlight",
      },
      {
        icon: "💬",
        titleKey: "log.feat5.title",
        descKey: "log.feat5.desc",
        highlightKey: "log.feat5.highlight",
      },
      {
        icon: "📡",
        titleKey: "log.feat6.title",
        descKey: "log.feat6.desc",
        highlightKey: "log.feat6.highlight",
      },
    ],
    [],
  );

  const testimonials = useMemo(
    () => [
      {
        quoteKey: "log.test1.quote",
        nameKey: "log.test1.name",
        roleKey: "log.test1.role",
        companyKey: "log.test1.company",
        metricKey: "log.test1.metric",
        image: "👨‍💼",
      },
      {
        quoteKey: "log.test2.quote",
        nameKey: "log.test2.name",
        roleKey: "log.test2.role",
        companyKey: "log.test2.company",
        metricKey: "log.test2.metric",
        image: "👩‍💼",
      },
      {
        quoteKey: "log.test3.quote",
        nameKey: "log.test3.name",
        roleKey: "log.test3.role",
        companyKey: "log.test3.company",
        metricKey: "log.test3.metric",
        image: "👨‍⚕️",
      },
    ],
    [],
  );

  const faqs = useMemo(
    () => [
      { qKey: "log.faq.q1", aKey: "log.faq.a1" },
      { qKey: "log.faq.q2", aKey: "log.faq.a2" },
      { qKey: "log.faq.q3", aKey: "log.faq.a3" },
      { qKey: "log.faq.q4", aKey: "log.faq.a4" },
      { qKey: "log.faq.q5", aKey: "log.faq.a5" },
      { qKey: "log.faq.q6", aKey: "log.faq.a6" },
    ],
    [],
  );

  const stats = useMemo(
    () => [
      { valueKey: "log.stats.packages.value", labelKey: "log.stats.packages", icon: "📦" },
      { valueKey: "log.stats.companies.value", labelKey: "log.stats.companies", icon: "🏢" },
      { valueKey: "log.stats.savings.value", labelKey: "log.stats.savings", icon: "💰" },
      { valueKey: "log.stats.accuracy.value", labelKey: "log.stats.accuracy", icon: "🎯" },
    ],
    [],
  );

  const heroStats = useMemo(
    () => [
      { valueKey: "log.hero.stat1.value", labelKey: "log.hero.stat1.label", icon: "⚡" },
      { valueKey: "log.hero.stat2.value", labelKey: "log.hero.stat2.label", icon: "🤖" },
      { valueKey: "log.hero.stat3.value", labelKey: "log.hero.stat3.label", icon: "💰" },
    ],
    [],
  );

  const problems = useMemo(
    () => [
      { icon: "💸", titleKey: "log.prob1.title", descKey: "log.prob1.desc" },
      { icon: "⏰", titleKey: "log.prob2.title", descKey: "log.prob2.desc" },
      { icon: "📦", titleKey: "log.prob3.title", descKey: "log.prob3.desc" },
      { icon: "👁️", titleKey: "log.prob4.title", descKey: "log.prob4.desc" },
    ],
    [],
  );

  const solutions = useMemo(
    () => [
      { icon: "💰", titleKey: "log.sol1.title", descKey: "log.sol1.desc" },
      { icon: "📡", titleKey: "log.sol2.title", descKey: "log.sol2.desc" },
      { icon: "🔮", titleKey: "log.sol3.title", descKey: "log.sol3.desc" },
      { icon: "📦", titleKey: "log.sol4.title", descKey: "log.sol4.desc" },
    ],
    [],
  );

  const comparisonTabs = useMemo(
    () => [
      { id: "cost", labelKey: "log.comparison.tab.cost" },
      { id: "efficiency", labelKey: "log.comparison.tab.efficiency" },
      { id: "visibility", labelKey: "log.comparison.tab.visibility" },
    ],
    [],
  );

  const comparisonData: Record<string, ComparisonTab> = useMemo(
    () => ({
      cost: {
        titleKey: "log.comparison.cost.title",
        traditional: [
          { itemKey: "log.comparison.cost.trad1.item", valueKey: "log.comparison.cost.trad1.value" },
          { itemKey: "log.comparison.cost.trad2.item", valueKey: "log.comparison.cost.trad2.value" },
          { itemKey: "log.comparison.cost.trad3.item", valueKey: "log.comparison.cost.trad3.value" },
          { itemKey: "log.comparison.cost.trad4.item", valueKey: "log.comparison.cost.trad4.value" },
          { itemKey: "log.comparison.cost.trad5.item", valueKey: "log.comparison.cost.trad5.value" },
          { itemKey: "log.comparison.cost.trad6.item", valueKey: "log.comparison.cost.trad6.value", highlight: true },
        ],
        sondos: [
          { itemKey: "log.comparison.cost.son1.item", valueKey: "log.comparison.cost.son1.value" },
          { itemKey: "log.comparison.cost.son2.item", valueKey: "log.comparison.cost.son2.value" },
          { itemKey: "log.comparison.cost.son3.item", valueKey: "log.comparison.cost.son3.value" },
          { itemKey: "log.comparison.cost.son4.item", valueKey: "log.comparison.cost.son4.value" },
          { itemKey: "log.comparison.cost.son5.item", valueKey: "log.comparison.cost.son5.value" },
          { itemKey: "log.comparison.cost.son6.item", valueKey: "log.comparison.cost.son6.value", highlight: true },
        ],
        savingsKey: "log.comparison.cost.savings",
      },
      efficiency: {
        titleKey: "log.comparison.efficiency.title",
        traditional: [
          { itemKey: "log.comparison.efficiency.trad1.item", valueKey: "log.comparison.efficiency.trad1.value" },
          { itemKey: "log.comparison.efficiency.trad2.item", valueKey: "log.comparison.efficiency.trad2.value" },
          { itemKey: "log.comparison.efficiency.trad3.item", valueKey: "log.comparison.efficiency.trad3.value" },
          { itemKey: "log.comparison.efficiency.trad4.item", valueKey: "log.comparison.efficiency.trad4.value" },
          { itemKey: "log.comparison.efficiency.trad5.item", valueKey: "log.comparison.efficiency.trad5.value" },
        ],
        sondos: [
          { itemKey: "log.comparison.efficiency.son1.item", valueKey: "log.comparison.efficiency.son1.value" },
          { itemKey: "log.comparison.efficiency.son2.item", valueKey: "log.comparison.efficiency.son2.value" },
          { itemKey: "log.comparison.efficiency.son3.item", valueKey: "log.comparison.efficiency.son3.value" },
          { itemKey: "log.comparison.efficiency.son4.item", valueKey: "log.comparison.efficiency.son4.value" },
          { itemKey: "log.comparison.efficiency.son5.item", valueKey: "log.comparison.efficiency.son5.value" },
        ],
      },
      visibility: {
        titleKey: "log.comparison.visibility.title",
        traditional: [
          { itemKey: "log.comparison.visibility.trad1.item", valueKey: "log.comparison.visibility.trad1.value" },
          { itemKey: "log.comparison.visibility.trad2.item", valueKey: "log.comparison.visibility.trad2.value" },
          { itemKey: "log.comparison.visibility.trad3.item", valueKey: "log.comparison.visibility.trad3.value" },
          { itemKey: "log.comparison.visibility.trad4.item", valueKey: "log.comparison.visibility.trad4.value" },
          { itemKey: "log.comparison.visibility.trad5.item", valueKey: "log.comparison.visibility.trad5.value" },
        ],
        sondos: [
          { itemKey: "log.comparison.visibility.son1.item", valueKey: "log.comparison.visibility.son1.value" },
          { itemKey: "log.comparison.visibility.son2.item", valueKey: "log.comparison.visibility.son2.value" },
          { itemKey: "log.comparison.visibility.son3.item", valueKey: "log.comparison.visibility.son3.value" },
          { itemKey: "log.comparison.visibility.son4.item", valueKey: "log.comparison.visibility.son4.value" },
          { itemKey: "log.comparison.visibility.son5.item", valueKey: "log.comparison.visibility.son5.value" },
        ],
      },
    }),
    [],
  );

  const integrations = useMemo(
    () => [
      { name: "SAP", icon: "📊", typeKey: "log.integration.type.erp" },
      { name: "Oracle", icon: "☁️", typeKey: "log.integration.type.erp" },
      { name: "Dynamics 365", icon: "🔷", typeKey: "log.integration.type.erp" },
      { name: "Manhattan", icon: "🏗️", typeKey: "log.integration.type.wms" },
      { name: "Geotab", icon: "📍", typeKey: "log.integration.type.iot" },
      { name: "Samsara", icon: "📡", typeKey: "log.integration.type.iot" },
      { name: "Blue Yonder", icon: "🔵", typeKey: "log.integration.type.wms" },
      { name: "KeepTruckin", icon: "🚛", typeKey: "log.integration.type.iot" },
      { name: "WhatsApp", icon: "💬", typeKey: "log.integration.type.comms" },
      { name: "REST API", icon: "🔗", typeKey: "log.integration.type.api" },
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

  const statKeyLabel = (key: string) => t(`log.stat_label.${key}`) ?? key;

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
            {t("log.hero.badge")}
          </div>

          <h1 className="font-['Instrument_Sans',sans-serif] text-[clamp(38px,5.5vw,68px)] font-bold leading-[1.08] tracking-tight mb-6 max-w-4xl mx-auto animate-fade-up animation-delay-100">
            {t("log.hero.title1")}{" "}
            <span className="text-[#9d4edd]">{t("log.hero.title2")}</span>
            <br />
            {t("log.hero.title3")}
          </h1>

          <p className="text-[clamp(16px,1.8vw,19px)] font-semibold text-[var(--t1)] max-w-[580px] mx-auto leading-relaxed mb-4 animate-fade-up animation-delay-150">
            {t("log.hero.subtitle")}
          </p>

          <p className="text-[clamp(14px,1.6vw,17px)] text-[var(--t2)] max-w-[680px] mx-auto leading-relaxed mb-9 animate-fade-up animation-delay-200">
            {t("log.hero.proof")}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-up animation-delay-300">
            {heroStats.map((stat, i) => (
              <div
                key={i}
                className="px-5 py-4 rounded-2xl text-center bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border border-[rgba(90,24,154,0.15)] shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-xl font-bold text-[#9d4edd]">
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
              className="group inline-flex items-center gap-2 px-8 py-3.5 text-[15px] font-semibold text-white gradient-bg glow rounded-full hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(90,24,154,0.4)] transition-all duration-300 shimmer"
            >
              {t("log.hero.cta")}
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== PROBLEMS ==================== */}
      <section className="py-20 bg-[var(--bg2)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="font-['Instrument_Sans',sans-serif] text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4">
              {t("log.problems.title1")}{" "}
              <span className="text-[#9d4edd]">{t("log.problems.title2")}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {problems.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl text-center transition-all hover:shadow-lg bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border border-[rgba(239,68,68,0.2)] hover:border-[rgba(239,68,68,0.35)]"
              >
                <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl bg-[rgba(239,68,68,0.07)]">
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
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[rgba(90,24,154,0.06)] border border-[rgba(90,24,154,0.15)]">
              <span className="text-2xl">⬇️</span>
              <span className="font-bold text-[#9d4edd]">
                {t("log.problems.bridge")}
              </span>
              <span className="text-2xl">⬇️</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl text-center transition-all hover:shadow-xl hover:-translate-y-1 bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border border-[rgba(90,24,154,0.2)]"
              >
                <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl text-white gradient-bg">
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
                <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border border-[rgba(90,24,154,0.1)] shadow-[0_4px_14px_rgba(0,0,0,0.05)] transition-transform group-hover:scale-110">
                  {stat.icon}
                </div>
                <div className="text-3xl sm:text-4xl font-bold mb-2 text-[#9d4edd]">
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

      {/* ==================== SEGMENTS ==================== */}
      <section className="py-24 px-6 bg-[var(--bg2)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-['Instrument_Sans',sans-serif] text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4">
              {t("log.segments.title1")}{" "}
              <span className="text-[#9d4edd]">{t("log.segments.title2")}</span>
            </h2>
            <p className="text-[var(--t2)] text-lg max-w-2xl mx-auto">
              {t("log.segments.subtitle")}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {segments.map((seg, idx) => (
              <button
                key={seg.id}
                onClick={() => setActiveSegment(idx)}
                className={`px-5 py-2.5 rounded-full text-[13px] font-medium transition-all duration-300 border backdrop-blur-sm ${
                  activeSegment === idx
                    ? "gradient-bg glow text-white border-[rgba(90,24,154,0.4)]"
                    : "bg-[rgba(90,24,154,0.04)] border-[rgba(90,24,154,0.12)] text-[var(--t2)] hover:border-[rgba(90,24,154,0.25)]"
                }`}
              >
                <span className="mr-1.5">{seg.icon}</span>
                {t(seg.nameKey)}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Pains */}
            <div className="p-8 rounded-2xl bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border border-[rgba(239,68,68,0.2)]">
              <h3 className="text-lg font-bold mb-6 text-red-400 flex items-center gap-2">
                <span>⚠️</span> {t("log.segments.pain_title")}
              </h3>
              <div className="space-y-4">
                {segments[activeSegment].painKeys.map((key, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-[rgba(239,68,68,0.04)]">
                    <span className="text-red-400 mt-0.5">✗</span>
                    <span className="text-sm text-[var(--t1)]">{t(key)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div className="p-8 rounded-2xl bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border border-[rgba(90,24,154,0.3)] shadow-[0_0_40px_rgba(90,24,154,0.1)]">
              <h3 className="text-lg font-bold mb-6 text-[#9d4edd] flex items-center gap-2">
                <span>🚀</span> {t("log.segments.solution_title")}
              </h3>
              <div className="space-y-4">
                {segments[activeSegment].solKeys.map((key, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-[rgba(90,24,154,0.04)]">
                    <span className="text-emerald-500 mt-0.5">✓</span>
                    <span className="text-sm text-[var(--t1)]">{t(key)}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 mt-6 pt-6 border-t border-[rgba(90,24,154,0.1)]">
                {Object.entries(segments[activeSegment].stats).map(
                  ([key, val]) => (
                    <div key={key} className="flex-1 text-center">
                      <div className="text-xl font-bold text-[#9d4edd]">
                        {t(val as string)}
                      </div>
                      <div className="text-xs text-[var(--t3)]">
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

      {/* ==================== COMPARISON ==================== */}
      <section id="comparison" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Instrument_Sans',sans-serif] text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4">
              {t("log.comparison.title1")}{" "}
              <span className="text-[#9d4edd]">{t("log.comparison.title2")}</span>
            </h2>
          </div>

          <div className="flex justify-center gap-3 mb-10">
            {comparisonTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveComparison(tab.id as any)}
                className={`px-5 py-2.5 rounded-full text-[13px] font-medium transition-all duration-300 border backdrop-blur-sm ${
                  activeComparison === tab.id
                    ? "gradient-bg glow text-white border-[rgba(90,24,154,0.4)]"
                    : "bg-[rgba(90,24,154,0.04)] border-[rgba(90,24,154,0.12)] text-[var(--t2)] hover:border-[rgba(90,24,154,0.25)]"
                }`}
              >
                {t(tab.labelKey)}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border border-[rgba(239,68,68,0.2)]">
              <div className="p-4 text-center bg-[rgba(239,68,68,0.07)] border-b border-[rgba(239,68,68,0.15)]">
                <span className="text-2xl mr-2">🏢</span>
                <span className="font-bold text-red-400">
                  {t("log.comparison.traditional.header")}
                </span>
              </div>
              <div className="p-6 space-y-3">
                {comparisonData[activeComparison].traditional.map((row, i) => (
                  <div
                    key={i}
                    className={`flex justify-between items-center p-3 rounded-lg text-sm ${
                      row.highlight
                        ? "font-bold bg-[rgba(239,68,68,0.08)] text-red-500"
                        : "bg-[rgba(90,24,154,0.03)] text-[var(--t1)]"
                    }`}
                  >
                    <span>{t(row.itemKey)}</span>
                    <span>{t(row.valueKey)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border border-[rgba(90,24,154,0.3)] shadow-[0_0_40px_rgba(90,24,154,0.1)]">
              <div className="p-4 text-center gradient-bg border-b border-[rgba(90,24,154,0.15)]">
                <span className="text-2xl mr-2">🚀</span>
                <span className="font-bold text-white">
                  {t("log.comparison.sondos.header")}
                </span>
              </div>
              <div className="p-6 space-y-3">
                {comparisonData[activeComparison].sondos.map((row, i) => (
                  <div
                    key={i}
                    className={`flex justify-between items-center p-3 rounded-lg text-sm ${
                      row.highlight
                        ? "font-bold bg-[rgba(16,185,129,0.08)] text-emerald-600"
                        : "bg-[rgba(90,24,154,0.03)] text-[var(--t1)]"
                    }`}
                  >
                    <span>{t(row.itemKey)}</span>
                    <span>{t(row.valueKey)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {activeComparison === "cost" && comparisonData.cost.savingsKey && (
            <div className="mt-8 p-6 rounded-2xl text-center gradient-bg glow">
              <div className="text-white/80 text-sm mb-1">
                {t("log.comparison.monthly_savings")}
              </div>
              <div className="text-white text-4xl font-bold">
                {t(comparisonData.cost.savingsKey!)}
              </div>
              <div className="text-white/80 text-sm mt-1">
                {t("log.comparison.annual")}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ==================== FEATURES ==================== */}
      <section id="features" className="py-24 px-6 bg-[var(--bg2)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Instrument_Sans',sans-serif] text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4">
              {t("log.features.title1")}{" "}
              <span className="text-[#9d4edd]">{t("log.features.title2")}</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-3xl bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border border-[rgba(90,24,154,0.1)] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-[rgba(90,24,154,0.3)] ai-glow"
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 bg-[rgba(90,24,154,0.06)] transition-transform duration-300 group-hover:scale-110">
                  {feat.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[var(--t1)]">
                  {t(feat.titleKey)}
                </h3>
                <p className="text-sm mb-5 leading-relaxed text-[var(--t2)]">
                  {t(feat.descKey)}
                </p>
                <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold bg-[rgba(90,24,154,0.08)] text-[#9d4edd] border border-[rgba(90,24,154,0.15)]">
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
            <h2 className="font-['Instrument_Sans',sans-serif] text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4">
              {t("log.integrations.title1")}{" "}
              <span className="text-[#9d4edd]">{t("log.integrations.title2")}</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {integrations.map((int, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl flex flex-col items-center gap-3 bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border border-[rgba(90,24,154,0.1)] hover:border-[rgba(90,24,154,0.25)] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <span className="text-3xl">{int.icon}</span>
                <span className="font-semibold text-[var(--t1)]">
                  {int.name}
                </span>
                <span className="text-xs px-2 py-1 rounded-full bg-[rgba(90,24,154,0.08)] text-[#9d4edd]">
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
            <h2 className="font-['Instrument_Sans',sans-serif] text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4">
              {t("log.testimonials.title1")}{" "}
              <span className="text-[#9d4edd]">{t("log.testimonials.title2")}</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto p-10 sm:p-14 rounded-3xl bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border border-[rgba(90,24,154,0.15)] shadow-[0_0_60px_rgba(90,24,154,0.1)] relative">
            <div className="absolute top-6 right-8 text-8xl font-serif opacity-10 text-[#5a189a]">
              "
            </div>
            <p className="text-xl sm:text-2xl leading-relaxed mb-8 text-[var(--t1)]">
              {t(testimonials[currentTestimonial].quoteKey)}
            </p>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl gradient-bg shadow-lg">
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
              <div className="px-4 py-2 rounded-xl font-bold bg-[rgba(90,24,154,0.08)] text-[#9d4edd] border border-[rgba(90,24,154,0.2)]">
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
      <section className="py-24 px-6 bg-[var(--bg2)]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Instrument_Sans',sans-serif] text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4">
              {t("log.faq.title1")}{" "}
              <span className="text-[#9d4edd]">{t("log.faq.title2")}</span>
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
                    {t(faq.qKey)}
                    <span className="text-xl ml-4 flex-shrink-0 text-[#9d4edd]">
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
      <section className="py-24 px-6 gradient-bg">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">🚚</div>
          <h2 className="font-['Instrument_Sans',sans-serif] text-[clamp(28px,4vw,48px)] font-bold leading-[1.08] tracking-tight mb-6 text-white">
            {t("log.cta.title1")}
            <br />
            {t("log.cta.title2")}
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
            {t("log.cta.subtitle")}
          </p>
          <div className="flex justify-center mb-12">
            <Link
              to="/demo"
              className="inline-flex items-center gap-2 px-10 py-5 bg-[rgba(255,255,255,0.95)] rounded-2xl font-bold text-lg shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-white text-[#5a189a] shimmer"
            >
              {t("log.cta.button")}
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-white/70 text-sm">
            <span>{t("log.cta.badge1")}</span>
            <span>{t("log.cta.badge2")}</span>
            <span>{t("log.cta.badge3")}</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SondosLogistics;