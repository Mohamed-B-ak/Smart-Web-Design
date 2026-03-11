import React, { useMemo, useState } from "react";
import { Link } from "wouter";
import "../index.css";
import { useLanguage } from "@/context/LanguageContext";

type FacilityCategory = { id: string; nameKey: string; icon: string };
type FacilityDef = {
  category: string;
  nameKey: string;
  officialKey: string;
  painKey: string;
  solutionKey: string;
  licenseKey: string;
};
type RoiInputs = {
  dailyCalls: number;
  missedPercent: number;
  avgValue: number;
  monthlyNoShows: number;
  staffCount: number;
};
type RoiResults = {
  monthlyMissedCalls: number;
  missedCallsLoss: number;
  noShowLoss: number;
  totalCurrentLoss: number;
  recoveredCalls: number;
  recoveredRevenue: number;
  reducedNoShows: number;
  noShowSavings: number;
  staffSavings: number;
  sondosCost: number;
  tierName: string;
  netSavings: number;
  roiPercent: number;
  annualSavings: number;
};

export default function Healthcare() {
  const { t, lang } = useLanguage();

  const facilityCategories: FacilityCategory[] = useMemo(
    () => [
      { id: "hospitals", nameKey: "hc.facility.cat.hospitals", icon: "🏥" },
      { id: "clinics", nameKey: "hc.facility.cat.clinics", icon: "🩺" },
      { id: "centers", nameKey: "hc.facility.cat.centers", icon: "🏢" },
      { id: "labs", nameKey: "hc.facility.cat.labs", icon: "🧪" },
      { id: "pharmacy", nameKey: "hc.facility.cat.pharmacy", icon: "💊" },
      { id: "dentistry", nameKey: "hc.facility.cat.dentistry", icon: "🦷" },
    ],
    [],
  );

  const facilityDefs: FacilityDef[] = useMemo(
    () => [
      {
        category: "hospitals",
        nameKey: "hc.facility.general_hospital.name",
        officialKey: "hc.facility.general_hospital.official",
        painKey: "hc.facility.general_hospital.pain",
        solutionKey: "hc.facility.general_hospital.solution",
        licenseKey: "hc.facility.general_hospital.license",
      },
      {
        category: "hospitals",
        nameKey: "hc.facility.specialist_hospital.name",
        officialKey: "hc.facility.specialist_hospital.official",
        painKey: "hc.facility.specialist_hospital.pain",
        solutionKey: "hc.facility.specialist_hospital.solution",
        licenseKey: "hc.facility.specialist_hospital.license",
      },
      {
        category: "clinics",
        nameKey: "hc.facility.solo_clinic.name",
        officialKey: "hc.facility.solo_clinic.official",
        painKey: "hc.facility.solo_clinic.pain",
        solutionKey: "hc.facility.solo_clinic.solution",
        licenseKey: "hc.facility.solo_clinic.license",
      },
      {
        category: "dentistry",
        nameKey: "hc.facility.dental_clinic.name",
        officialKey: "hc.facility.dental_clinic.official",
        painKey: "hc.facility.dental_clinic.pain",
        solutionKey: "hc.facility.dental_clinic.solution",
        licenseKey: "hc.facility.dental_clinic.license",
      },
      {
        category: "centers",
        nameKey: "hc.facility.general_complex.name",
        officialKey: "hc.facility.general_complex.official",
        painKey: "hc.facility.general_complex.pain",
        solutionKey: "hc.facility.general_complex.solution",
        licenseKey: "hc.facility.general_complex.license",
      },
      {
        category: "centers",
        nameKey: "hc.facility.cosmetic_complex.name",
        officialKey: "hc.facility.cosmetic_complex.official",
        painKey: "hc.facility.cosmetic_complex.pain",
        solutionKey: "hc.facility.cosmetic_complex.solution",
        licenseKey: "hc.facility.cosmetic_complex.license",
      },
      {
        category: "labs",
        nameKey: "hc.facility.lab.name",
        officialKey: "hc.facility.lab.official",
        painKey: "hc.facility.lab.pain",
        solutionKey: "hc.facility.lab.solution",
        licenseKey: "hc.facility.lab.license",
      },
      {
        category: "pharmacy",
        nameKey: "hc.facility.pharmacy.name",
        officialKey: "hc.facility.pharmacy.official",
        painKey: "hc.facility.pharmacy.pain",
        solutionKey: "hc.facility.pharmacy.solution",
        licenseKey: "hc.facility.pharmacy.license",
      },
      {
        category: "centers",
        nameKey: "hc.facility.physio.name",
        officialKey: "hc.facility.physio.official",
        painKey: "hc.facility.physio.pain",
        solutionKey: "hc.facility.physio.solution",
        licenseKey: "hc.facility.physio.license",
      },
      {
        category: "centers",
        nameKey: "hc.facility.radiology.name",
        officialKey: "hc.facility.radiology.official",
        painKey: "hc.facility.radiology.pain",
        solutionKey: "hc.facility.radiology.solution",
        licenseKey: "hc.facility.radiology.license",
      },
      {
        category: "clinics",
        nameKey: "hc.facility.eye.name",
        officialKey: "hc.facility.eye.official",
        painKey: "hc.facility.eye.pain",
        solutionKey: "hc.facility.eye.solution",
        licenseKey: "hc.facility.eye.license",
      },
    ],
    [],
  );

  const integrations = useMemo(
    () => [
      {
        nameKey: "hc.integration.whatsapp.name",
        icon: "💬",
        descKey: "hc.integration.whatsapp.desc",
        status: "live" as const,
      },
      {
        nameKey: "hc.integration.booking.name",
        icon: "📅",
        descKey: "hc.integration.booking.desc",
        status: "live" as const,
      },
      {
        nameKey: "hc.integration.sms.name",
        icon: "📩",
        descKey: "hc.integration.sms.desc",
        status: "live" as const,
      },
      {
        nameKey: "hc.integration.crm.name",
        icon: "📇",
        descKey: "hc.integration.crm.desc",
        status: "beta" as const,
      },
      {
        nameKey: "hc.integration.payments.name",
        icon: "💳",
        descKey: "hc.integration.payments.desc",
        status: "beta" as const,
      },
    ],
    [],
  );

  const certifications = useMemo(
    () => [
      { name: "PDPL", icon: "🇸🇦", descKey: "hc.cert.pdpl.desc" },
      { name: "HIPAA", icon: "🛡️", descKey: "hc.cert.hipaa.desc" },
      { name: "AES-256", icon: "🔐", descKey: "hc.cert.aes.desc" },
      { name: "Audit Logs", icon: "🧾", descKey: "hc.cert.audit.desc" },
    ],
    [],
  );

  const securityFeatures = useMemo(
    () => [
      { titleKey: "hc.security.f1.title", descKey: "hc.security.f1.desc" },
      { titleKey: "hc.security.f2.title", descKey: "hc.security.f2.desc" },
      { titleKey: "hc.security.f3.title", descKey: "hc.security.f3.desc" },
      { titleKey: "hc.security.f4.title", descKey: "hc.security.f4.desc" },
    ],
    [],
  );

  const dashboardStats = useMemo(
    () => [
      {
        labelKey: "hc.dashboard.stat1.label",
        value: "127",
        subKey: "hc.dashboard.stat1.sub",
      },
      {
        labelKey: "hc.dashboard.stat2.label",
        value: "98.5%",
        subKey: "hc.dashboard.stat2.sub",
      },
      {
        labelKey: "hc.dashboard.stat3.label",
        value: "34",
        subKey: "hc.dashboard.stat3.sub",
      },
      {
        labelKey: "hc.dashboard.stat4.label",
        value: "4.8",
        subKey: "hc.dashboard.stat4.sub",
      },
    ],
    [],
  );

  const dashboardActivities = useMemo(
    () => [
      {
        timeKey: "hc.dashboard.time1",
        actionKey: "hc.dashboard.act1.action",
        detailKey: "hc.dashboard.act1.detail",
        type: "success",
      },
      {
        timeKey: "hc.dashboard.time2",
        actionKey: "hc.dashboard.act2.action",
        detailKey: "hc.dashboard.act2.detail",
        type: "info",
      },
      {
        timeKey: "hc.dashboard.time3",
        actionKey: "hc.dashboard.act3.action",
        detailKey: "hc.dashboard.act3.detail",
        type: "warning",
      },
      {
        timeKey: "hc.dashboard.time4",
        actionKey: "hc.dashboard.act4.action",
        detailKey: "hc.dashboard.act4.detail",
        type: "info",
      },
    ],
    [],
  );

  const faqs = useMemo(
    () => [
      { qKey: "hc.faq.q1", aKey: "hc.faq.a1" },
      { qKey: "hc.faq.q2", aKey: "hc.faq.a2" },
      { qKey: "hc.faq.q3", aKey: "hc.faq.a3" },
      { qKey: "hc.faq.q4", aKey: "hc.faq.a4" },
    ],
    [],
  );

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedFacility, setSelectedFacility] = useState<string | null>(null);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly",
  );
  const [roiInputs, setRoiInputs] = useState<RoiInputs>({
    dailyCalls: 60,
    missedPercent: 35,
    avgValue: 300,
    monthlyNoShows: 25,
    staffCount: 2,
  });
  const [showROIResults, setShowROIResults] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const handleFacilitySelect = (nameKey: string) => {
    setSelectedFacility(nameKey);
    setShowROIResults(false);
  };

  const roiResults: RoiResults = useMemo(() => {
    const daysPerMonth = 30;
    const monthlyCalls = roiInputs.dailyCalls * daysPerMonth;
    const monthlyMissedCalls = Math.round(
      (monthlyCalls * roiInputs.missedPercent) / 100,
    );
    const conversionFromRecoveredCalls = 0.55;
    const recoveredCalls = Math.round(
      monthlyMissedCalls * conversionFromRecoveredCalls,
    );
    const recoveredRevenue = recoveredCalls * roiInputs.avgValue;
    const missedCallsLoss = monthlyMissedCalls * roiInputs.avgValue * 0.55;
    const noShowLoss = roiInputs.monthlyNoShows * roiInputs.avgValue;
    const totalCurrentLoss = Math.round(missedCallsLoss + noShowLoss);
    const reduceNoShowRate = 0.65;
    const reducedNoShows = Math.round(
      roiInputs.monthlyNoShows * reduceNoShowRate,
    );
    const noShowSavings = reducedNoShows * roiInputs.avgValue;
    const staffUnitCost = 4500;
    const staffSavings =
      roiInputs.staffCount >= 3 ? Math.round(staffUnitCost * 0.5) : 0;
    let tierName = "Starter";
    let sondosCost = 6900;
    if (roiInputs.dailyCalls > 50 && roiInputs.dailyCalls <= 150) {
      tierName = "Pro";
      sondosCost = 17450;
    } else if (roiInputs.dailyCalls > 150) {
      tierName = "Business";
      sondosCost = 48000;
    }
    const totalSavings = Math.round(
      recoveredRevenue + noShowSavings + staffSavings,
    );
    const netSavings = Math.round(totalSavings - sondosCost);
    const roiPercent =
      sondosCost > 0 ? Math.round((netSavings / sondosCost) * 100) : 0;
    const annualSavings = netSavings * 12;
    return {
      monthlyMissedCalls,
      missedCallsLoss: Math.round(missedCallsLoss),
      noShowLoss: Math.round(noShowLoss),
      totalCurrentLoss,
      recoveredCalls,
      recoveredRevenue: Math.round(recoveredRevenue),
      reducedNoShows,
      noShowSavings: Math.round(noShowSavings),
      staffSavings,
      sondosCost,
      tierName,
      netSavings,
      roiPercent,
      annualSavings,
    };
  }, [roiInputs]);

  // ── shared style tokens ──────────────────────
  const pageBg = "bg-[var(--bg)] text-[var(--t1)]";
  const sectionSoft = "bg-[var(--bg2)]";
  const card = "bg-[var(--card)] border border-[var(--bg4)]";
  const muted = "text-[var(--t2)]";

  const starterFeatures = [
    { key: "hc.pricing.starter.f1", ok: true },
    { key: "hc.pricing.starter.f2", ok: true },
    { key: "hc.pricing.starter.f3", ok: true },
    { key: "hc.pricing.starter.f4", ok: true },
    { key: "hc.pricing.starter.f5", ok: true },
    { key: "hc.pricing.starter.f6", ok: true },
    { key: "hc.pricing.starter.f7", ok: true },
    { key: "hc.pricing.starter.f8", ok: true },
    { key: "hc.pricing.starter.f9", ok: true },
    { key: "hc.pricing.starter.f10", ok: true },
    { key: "hc.pricing.starter.f11", ok: false },
    { key: "hc.pricing.starter.f12", ok: false },
  ];

  const proFeatures = [
    "hc.pricing.pro.f1",
    "hc.pricing.pro.f2",
    "hc.pricing.pro.f3",
    "hc.pricing.pro.f4",
    "hc.pricing.pro.f5",
    "hc.pricing.pro.f6",
    "hc.pricing.pro.f7",
    "hc.pricing.pro.f8",
    "hc.pricing.pro.f9",
    "hc.pricing.pro.f10",
    "hc.pricing.pro.f11",
  ];

  const businessFeatures = [
    "hc.pricing.business.f1",
    "hc.pricing.business.f2",
    "hc.pricing.business.f3",
    "hc.pricing.business.f4",
    "hc.pricing.business.f5",
    "hc.pricing.business.f6",
    "hc.pricing.business.f7",
    "hc.pricing.business.f8",
    "hc.pricing.business.f9",
    "hc.pricing.business.f10",
    "hc.pricing.business.f11",
  ];

  const filteredFacilities = facilityDefs
    .filter((f) => !selectedCategory || f.category === selectedCategory)
    .slice(0, 9);

  return (
    <div
      dir={lang === "ar" ? "rtl" : "ltr"}
      className={`min-h-screen font-arabic ${pageBg}`}
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
            {t("hc.hero.badge")}
          </div>

          <h1 className="font-['Instrument_Sans',sans-serif] text-[clamp(38px,5.5vw,68px)] font-bold leading-[1.08] tracking-tight mb-6 max-w-4xl mx-auto animate-fade-up animation-delay-100">
            {t("hc.hero.title1")}{" "}
            <span className="text-[#9d4edd]">{t("hc.hero.title2")}</span>
          </h1>

          <p className="text-[clamp(16px,1.8vw,19px)] font-semibold text-[#1a0a2e] max-w-[580px] mx-auto leading-relaxed mb-4 animate-fade-up animation-delay-150">
            {t("hc.hero.subtitle")}
          </p>

          <p className="text-[clamp(14px,1.6vw,17px)] text-[#4a3a62] max-w-[680px] mx-auto leading-relaxed mb-9 animate-fade-up animation-delay-200">
            {t("hc.hero.stats")}
          </p>

          <div className="flex items-center justify-center gap-3.5 mb-12 flex-wrap animate-fade-up animation-delay-300">
            <Link
              to="/demo"
              className="group inline-flex items-center gap-2 px-8 py-3.5 text-[15px] font-semibold text-white gradient-bg glow rounded-full hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(90,24,154,0.4)] transition-all duration-300 shimmer"
            >
              {t("hc.hero.cta")}
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== PROBLEM / SOLUTION ==================== */}
      <section className={`py-24 px-6 ${sectionSoft}`}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className={`p-8 rounded-2xl ${card}`}>
            <div className="text-4xl mb-4">📉</div>
            <h3 className="font-['Instrument_Sans',sans-serif] text-[clamp(18px,2vw,22px)] font-bold leading-[1.08] tracking-tight mb-6 text-red-400">
              {t("hc.problem.title")}
            </h3>
            <ul className="space-y-3">
              {(
                [
                  "hc.problem.1",
                  "hc.problem.2",
                  "hc.problem.3",
                  "hc.problem.4",
                ] as const
              ).map((k) => (
                <li key={k} className={`${muted} flex items-start gap-2`}>
                  {t(k)}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="p-8 rounded-2xl border"
            style={{
              background: "rgba(90,24,154,0.08)",
              borderColor: "rgba(157,78,221,0.4)",
            }}
          >
            <div className="text-4xl mb-4">✨</div>
            <h3 className="font-['Instrument_Sans',sans-serif] text-[clamp(18px,2vw,22px)] font-bold leading-[1.08] tracking-tight mb-6 text-[#9d4edd]">
              {t("hc.solution.title")}
            </h3>
            <ul className="space-y-3">
              {(
                [
                  "hc.solution.1",
                  "hc.solution.2",
                  "hc.solution.3",
                  "hc.solution.4",
                ] as const
              ).map((k) => (
                <li key={k} className="flex items-start gap-2 text-[#1a0a2e]">
                  {t(k)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ==================== FACILITY TYPES ==================== */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-['Instrument_Sans',sans-serif] text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4">
              {t("hc.facilities.title")}
            </h2>
            <p className={muted}>{t("hc.facilities.subtitle")}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {facilityCategories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(isActive ? null : cat.id)}
                  className={`px-5 py-2.5 rounded-full flex items-center gap-2 text-[13px] font-medium transition-all duration-300 border backdrop-blur-sm ${
                    isActive
                      ? "bg-[rgba(90,24,154,0.15)] border-[rgba(90,24,154,0.4)] text-[#9d4edd]"
                      : "bg-[rgba(90,24,154,0.04)] border-[rgba(90,24,154,0.12)] text-[#4a3a62] hover:border-[rgba(90,24,154,0.25)]"
                  }`}
                >
                  {cat.icon} {t(cat.nameKey)}
                </button>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFacilities.map((facility) => {
              const isSelected = selectedFacility === facility.nameKey;
              const catIcon = facilityCategories.find(
                (c) => c.id === facility.category,
              )?.icon;
              return (
                <div
                  key={facility.nameKey}
                  onClick={() => handleFacilitySelect(facility.nameKey)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border ${
                    isSelected
                      ? "border-[rgba(90,24,154,0.5)] shadow-[0_0_30px_rgba(90,24,154,0.12)] ai-glow"
                      : "border-[rgba(90,24,154,0.1)] hover:border-[rgba(90,24,154,0.25)]"
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-['Instrument_Sans',sans-serif] font-bold text-[17px] tracking-tight text-[#1a0a2e]">
                        {t(facility.nameKey)}
                      </h4>
                      <p className="text-xs mt-1 text-[#8878a0]">
                        {t(facility.officialKey)}
                      </p>
                    </div>
                    <span className="text-2xl">{catIcon}</span>
                  </div>
                  <div className="text-sm p-3 rounded-xl mb-3 bg-[rgba(255,255,255,0.06)] border border-[rgba(90,24,154,0.08)]">
                    <span className="text-orange-400">⚠️ </span>
                    <span className="text-[#4a3a62]">
                      {t(facility.painKey)}
                    </span>
                  </div>
                  <div
                    className="text-sm p-3 rounded-xl mb-3"
                    style={{
                      background: "rgba(90,24,154,0.06)",
                      border: "1px solid rgba(90,24,154,0.15)",
                    }}
                  >
                    <span>✨ </span>
                    <span className="text-[#1a0a2e]">
                      {t(facility.solutionKey)}
                    </span>
                  </div>
                  <p className="text-xs text-[#8878a0]">
                    {t(facility.licenseKey)}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <button className="text-sm text-[#4a3a62] underline">
              {t("hc.facilities.show_all", { n: facilityDefs.length })}
            </button>
          </div>
        </div>
      </section>

      {/* ==================== INTEGRATIONS ==================== */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-['Instrument_Sans',sans-serif] text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4">
            {t("hc.integrations.title")}
          </h2>
          <p className="mb-12 text-[#4a3a62]">
            {t("hc.integrations.subtitle")}
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {integrations.map((int, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl flex flex-col items-center gap-3 min-w-[140px] bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border border-[rgba(90,24,154,0.1)] hover:border-[rgba(90,24,154,0.25)] transition-all duration-300"
              >
                <span className="text-3xl">{int.icon}</span>
                <span className="font-semibold text-[#1a0a2e]">
                  {t(int.nameKey)}
                </span>
                <span className="text-xs text-[#8878a0]">{t(int.descKey)}</span>
                {int.status === "beta" && (
                  <span className="text-xs px-2 py-1 rounded-full bg-[rgba(90,24,154,0.12)] text-[#9d4edd]">
                    Beta
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECURITY ==================== */}
      <section className={`py-24 px-6 ${sectionSoft}`}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-['Instrument_Sans',sans-serif] text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4">
                {t("hc.security.title")}
              </h2>
              <p className="mb-8 text-[#4a3a62]">{t("hc.security.subtitle")}</p>
              <ul className="space-y-4">
                {securityFeatures.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full flex items-center justify-center text-xs text-white flex-shrink-0 bg-[rgba(90,24,154,0.7)]">
                      ✓
                    </span>
                    <div>
                      <p className="font-semibold text-[#1a0a2e]">
                        {t(item.titleKey)}
                      </p>
                      <p className="text-sm text-[#4a3a62]">
                        {t(item.descKey)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl text-center bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border border-[rgba(90,24,154,0.1)]"
                >
                  <div className="text-3xl mb-2">{cert.icon}</div>
                  <p className="font-bold text-[#1a0a2e]">{cert.name}</p>
                  <p className="text-xs mt-1 text-[#8878a0]">
                    {t(cert.descKey)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== DASHBOARD ==================== */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-['Instrument_Sans',sans-serif] text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4">
              {t("hc.dashboard.title")}
            </h2>
            <p className="text-[#4a3a62]">{t("hc.dashboard.subtitle")}</p>
          </div>

          <div className="rounded-3xl overflow-hidden border border-[rgba(90,24,154,0.15)] bg-[rgba(255,255,255,0.85)] backdrop-blur-xl shadow-[0_0_100px_rgba(90,24,154,0.15),0_40px_80px_rgba(0,0,0,0.08)] ai-glow">
            <div className="flex items-center justify-between px-6 py-4 border-b border-[rgba(90,24,154,0.1)]">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#ff6b6b]" />
                <div className="w-3 h-3 rounded-full bg-[#ffa940]" />
                <div className="w-3 h-3 rounded-full bg-[#00d68f]" />
                <span className="text-[12px] text-[#8878a0] ml-2 font-mono">
                  sondos-healthcare-dashboard
                </span>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-[rgba(34,197,94,0.15)] text-[#22c55e]">
                {t("hc.dashboard.status")}
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[rgba(90,24,154,0.06)]">
              {dashboardStats.map((stat, i) => (
                <div
                  key={i}
                  className="p-6 text-center bg-[rgba(255,255,255,0.85)]"
                >
                  <p className="text-xs mb-2 text-[#8878a0]">
                    {t(stat.labelKey)}
                  </p>
                  <p className="text-2xl font-black text-[#1a0a2e]">
                    {stat.value}
                  </p>
                  <p className="text-xs mt-1 text-[#9d4edd]">
                    {t(stat.subKey)}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-6">
              <h4 className="text-sm font-semibold mb-4 text-[#4a3a62]">
                {t("hc.dashboard.activity.title")}
              </h4>
              <div className="space-y-3">
                {dashboardActivities.map((activity, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between py-3 border-b last:border-0 border-[rgba(90,24,154,0.08)]"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{
                          background:
                            activity.type === "success"
                              ? "#22c55e"
                              : activity.type === "warning"
                                ? "#f59e0b"
                                : "#9d4edd",
                        }}
                      />
                      <div>
                        <p className="text-sm font-medium text-[#1a0a2e]">
                          {t(activity.actionKey)}
                        </p>
                        <p className="text-xs text-[#8878a0]">
                          {t(activity.detailKey)}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs text-[#8878a0]">
                      {t(activity.timeKey)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PRICING ==================== */}
      <section className={`py-24 px-6 ${sectionSoft}`}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-['Instrument_Sans',sans-serif] text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4">
              {t("hc.pricing.title")}
            </h2>
            <p className="text-[#4a3a62] mb-8">{t("hc.pricing.subtitle")}</p>

            <div className="inline-flex items-center gap-1 p-1 rounded-full bg-[rgba(90,24,154,0.08)] border border-[rgba(90,24,154,0.15)]">
              {(["monthly", "yearly"] as const).map((cycle) => (
                <button
                  key={cycle}
                  onClick={() => setBillingCycle(cycle)}
                  className={`px-5 py-2 rounded-full text-[13px] font-semibold transition-all duration-300 ${
                    billingCycle === cycle
                      ? "bg-[#5a189a] text-white shadow-md"
                      : "text-[#4a3a62] hover:text-[#1a0a2e]"
                  }`}
                >
                  {t(
                    cycle === "monthly"
                      ? "hc.pricing.monthly"
                      : "hc.pricing.yearly",
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="p-8 rounded-3xl bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border border-[rgba(90,24,154,0.12)]">
              <h3 className="font-['Instrument_Sans',sans-serif] text-xl font-bold tracking-tight mb-2 text-[#1a0a2e]">
                Starter
              </h3>
              <p className="text-[clamp(24px,2.5vw,32px)] font-['Instrument_Sans',sans-serif] font-bold tracking-tight mb-1 text-[#1a0a2e] transition-all duration-300">
                {billingCycle === "monthly" ? "6,900" : "82,800"}{" "}
                {lang === "ar" ? "ر.س" : "SAR"}
              </p>
              <p className="text-sm mb-6 text-[#4a3a62]">
                {t(
                  billingCycle === "monthly"
                    ? "hc.pricing.starter.desc.monthly"
                    : "hc.pricing.starter.desc.yearly",
                )}
              </p>
              <ul className="space-y-3 mb-8">
                {starterFeatures.map((f, i) => (
                  <li
                    key={i}
                    className={`text-sm flex gap-2 ${f.ok ? "text-[#1a0a2e]" : "text-[#8878a0]"}`}
                  >
                    <span>{f.ok ? "✓" : "✗"}</span> {t(f.key)}
                  </li>
                ))}
              </ul>
              <Link
                to="/demo"
                className="block w-full py-3 rounded-full text-center font-semibold border border-[rgba(90,24,154,0.2)] text-[#1a0a2e] hover:bg-[rgba(90,24,154,0.05)] hover:border-[rgba(90,24,154,0.35)] transition-all duration-300"
              >
                {t("hc.pricing.cta_start")}
              </Link>
            </div>

            {/* Pro */}
            <div className="p-8 rounded-3xl relative gradient-bg glow border-2 border-[rgba(157,78,221,0.6)]">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-3 py-1 rounded-full bg-white text-[#5a189a] font-bold shadow">
                {t("hc.pricing.popular")}
              </span>
              <h3 className="font-['Instrument_Sans',sans-serif] text-xl font-bold tracking-tight mb-2 text-white">
                Pro
              </h3>
              <p className="text-[clamp(24px,2.5vw,32px)] font-['Instrument_Sans',sans-serif] font-bold tracking-tight mb-1 text-white transition-all duration-300">
                {billingCycle === "monthly" ? "17,450" : "209,400"}{" "}
                {lang === "ar" ? "ر.س" : "SAR"}
              </p>
              <p className="text-sm mb-6 text-purple-200">
                {t(
                  billingCycle === "monthly"
                    ? "hc.pricing.pro.desc.monthly"
                    : "hc.pricing.pro.desc.yearly",
                )}
              </p>
              <ul className="space-y-3 mb-8">
                {proFeatures.map((key, i) => (
                  <li key={i} className="text-sm flex gap-2 text-white">
                    <span>✓</span> {t(key)}
                  </li>
                ))}
              </ul>
              <Link
                to="/demo"
                className="block w-full py-3 rounded-full text-center font-semibold bg-white text-[#5a189a] hover:opacity-90 transition-opacity"
              >
                {t("hc.pricing.cta_start")}
              </Link>
            </div>

            {/* Business */}
            <div className="p-8 rounded-3xl bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border border-[rgba(90,24,154,0.12)]">
              <h3 className="font-['Instrument_Sans',sans-serif] text-xl font-bold tracking-tight mb-2 text-[#1a0a2e]">
                Business
              </h3>
              <p className="text-[clamp(24px,2.5vw,32px)] font-['Instrument_Sans',sans-serif] font-bold tracking-tight mb-1 text-[#1a0a2e] transition-all duration-300">
                {billingCycle === "monthly" ? "48,000" : "576,000"}{" "}
                {lang === "ar" ? "ر.س" : "SAR"}
              </p>
              <p className="text-sm mb-6 text-[#4a3a62]">
                {t(
                  billingCycle === "monthly"
                    ? "hc.pricing.business.desc.monthly"
                    : "hc.pricing.business.desc.yearly",
                )}
              </p>
              <ul className="space-y-3 mb-8">
                {businessFeatures.map((key, i) => (
                  <li key={i} className="text-sm flex gap-2 text-[#1a0a2e]">
                    <span>✓</span> {t(key)}
                  </li>
                ))}
              </ul>
              <Link
                to="/demo"
                className="block w-full py-3 rounded-full text-center font-semibold border border-[rgba(90,24,154,0.2)] text-[#1a0a2e] hover:bg-[rgba(90,24,154,0.05)] hover:border-[rgba(90,24,154,0.35)] transition-all duration-300"
              >
                {t("hc.pricing.cta_contact")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-['Instrument_Sans',sans-serif] text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4">
              {t("hc.faq.title")}
            </h2>
            <p className="text-[#4a3a62]">{t("hc.faq.subtitle")}</p>
          </div>
          <div className="space-y-4">
            {faqs.map((f, idx) => {
              const open = activeFAQ === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl overflow-hidden bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border border-[rgba(90,24,154,0.1)] hover:border-[rgba(90,24,154,0.25)] transition-all duration-300"
                >
                  <button
                    className="w-full flex items-center justify-between px-6 py-5 text-right font-semibold text-[#1a0a2e]"
                    onClick={() => setActiveFAQ(open ? null : idx)}
                  >
                    {t(f.qKey)}
                    <span className="text-xl ml-4 flex-shrink-0 text-[#9d4edd]">
                      {open ? "−" : "+"}
                    </span>
                  </button>
                  {open && (
                    <div className="px-6 pb-5 text-sm leading-relaxed text-[#4a3a62]">
                      {t(f.aKey)}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
