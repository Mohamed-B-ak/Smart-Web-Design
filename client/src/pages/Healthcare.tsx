import React, { useMemo, useState } from "react";
import { Link } from "wouter";
import "../index.css";

type FacilityCategory = { id: string; name: string; icon: string };
type FacilityType = {
  category: string;
  officialName: string;
  painPoint: string;
  solution: string;
  license: string;
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
  const facilityCategories: FacilityCategory[] = useMemo(
    () => [
      { id: "hospitals", name: "المستشفيات", icon: "🏥" },
      { id: "clinics", name: "العيادات", icon: "🩺" },
      { id: "centers", name: "المجمعات", icon: "🏢" },
      { id: "labs", name: "المختبرات", icon: "🧪" },
      { id: "pharmacy", name: "الصيدليات", icon: "💊" },
      { id: "dentistry", name: "الأسنان", icon: "🦷" },
    ],
    [],
  );

  const facilityTypes: Record<string, FacilityType> = useMemo(
    () => ({
      "مستشفى عام": {
        category: "hospitals",
        officialName: "مستشفى - ترخيص عام",
        painPoint: "ضغط هائل على الاستقبال وطوارئ مشغولة 24/7",
        solution: "فرز ذكي يوجه المرضى للقسم المناسب + حجز مواعيد العيادات",
        license: "تصنيف: وزارة الصحة - مستشفى",
      },
      "مستشفى تخصصي": {
        category: "hospitals",
        officialName: "مستشفى تخصصي",
        painPoint: "تحويلات كثيرة وتأخير في الرد على المرضى",
        solution: "رد فوري + توجيه حسب التخصص + جدولة دقيقة",
        license: "تصنيف: وزارة الصحة - مستشفى تخصصي",
      },
      "عيادة فردية": {
        category: "clinics",
        officialName: "عيادة - طبيب واحد",
        painPoint: "الطبيب مشغول بالكشف والهاتف يرن بدون رد",
        solution: "رد تلقائي 100% + حجز فوري + تحويل الطوارئ للطبيب",
        license: "تصنيف: وزارة الصحة - عيادة",
      },
      "عيادة أسنان": {
        category: "dentistry",
        officialName: "عيادة أسنان",
        painPoint: "مواعيد كثيرة تتأخر + إلغاءات وعدم حضور",
        solution: "تأكيدات واتساب + إعادة جدولة تلقائية + حجز من المكالمة",
        license: "تصنيف: وزارة الصحة - أسنان",
      },
      "مجمع طبي عام": {
        category: "centers",
        officialName: "مجمع طبي - متعدد التخصصات",
        painPoint: "مرضى محتارين بين التخصصات والأطباء",
        solution: "توجيه حسب الأعراض + توزيع عادل للمواعيد على الأطباء",
        license: "تصنيف: وزارة الصحة - مجمع طبي",
      },
      "مجمع جلدية وتجميل": {
        category: "centers",
        officialName: "مجمع تجميلي",
        painPoint: "حجوزات كثيرة خارج الدوام + ضياع فرص",
        solution: "حجز 24/7 + رسائل تذكير + عروض موجهة",
        license: "تصنيف: وزارة الصحة - مجمع تخصصي",
      },
      "مختبر طبي": {
        category: "labs",
        officialName: "مختبر تحاليل",
        painPoint: "استفسارات متكررة عن النتائج والمواعيد",
        solution: "رد آلي للأسئلة الشائعة + جدولة زيارات + توجيه",
        license: "تصنيف: وزارة الصحة - مختبر",
      },
      صيدلية: {
        category: "pharmacy",
        officialName: "صيدلية مجتمعية",
        painPoint: "استفسارات عن توفر الأدوية والبدائل",
        solution: "تأكيد توفر + حجز + توجيه للبدائل",
        license: "تصنيف: وزارة الصحة - صيدلية",
      },
      "مركز علاج طبيعي": {
        category: "centers",
        officialName: "مركز علاج طبيعي",
        painPoint: "تأخر في الرد يؤدي لفقدان حجوزات",
        solution: "حجز فوري + تذكير جلسات + تقليل الإلغاء",
        license: "تصنيف: وزارة الصحة - مركز",
      },
      "مركز أشعة": {
        category: "centers",
        officialName: "مركز أشعة",
        painPoint: "ازدحام الاتصالات لتحديد موعد وتجهيزات",
        solution: "جمع بيانات المريض + إرسال تعليمات قبل الموعد",
        license: "تصنيف: وزارة الصحة - أشعة",
      },
      "مركز عيون": {
        category: "clinics",
        officialName: "عيون",
        painPoint: "مرضى كبار سن يحتاجون رد سريع وتوجيه",
        solution: "رد لطيف بلهجة محلية + تحديد الطبيب والموعد",
        license: "تصنيف: وزارة الصحة - عيادات تخصصية",
      },
    }),
    [],
  );

  const integrations = useMemo(
    () => [
      {
        name: "واتساب",
        icon: "💬",
        desc: "تذكير وتأكيد المواعيد",
        status: "live" as const,
      },
      {
        name: "نظام المواعيد",
        icon: "📅",
        desc: "حجز مباشر",
        status: "live" as const,
      },
      { name: "SMS", icon: "📩", desc: "رسائل تذكير", status: "live" as const },
      {
        name: "CRM",
        icon: "📇",
        desc: "إدارة العملاء",
        status: "beta" as const,
      },
      {
        name: "Payments",
        icon: "💳",
        desc: "دفعات وتأمين",
        status: "beta" as const,
      },
    ],
    [],
  );

  const certifications = useMemo(
    () => [
      { name: "PDPL", icon: "🇸🇦", desc: "امتثال لحماية البيانات" },
      { name: "HIPAA", icon: "🛡️", desc: "معيار عالمي للرعاية الصحية" },
      { name: "AES-256", icon: "🔐", desc: "تشفير قوي للبيانات" },
      { name: "Audit Logs", icon: "🧾", desc: "سجل مراجعة كامل" },
    ],
    [],
  );

  const faqs = useMemo(
    () => [
      {
        q: "هل يرد النظام بلهجة سعودية طبيعية؟",
        a: "نعم، تم تدريب النموذج ليقدم تجربة صوتية طبيعية ويستخدم مصطلحات مناسبة للسياق السعودي.",
      },
      {
        q: "هل يمكن ربطه بنظام المواعيد الحالي؟",
        a: "نعم، لدينا تكاملات جاهزة وخيارات ربط عبر API حسب نظام منشأتك.",
      },
      {
        q: "هل البيانات مخزنة داخل السعودية؟",
        a: "يمكن توفير استضافة محلية داخل المملكة حسب متطلبات منشأتك والامتثال.",
      },
      {
        q: "كم يحتاج وقت للتركيب؟",
        a: "عادةً الإعداد الأساسي سريع، ثم يتم تخصيص السيناريوهات حسب تخصص المنشأة.",
      },
    ],
    [],
  );

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedFacility, setSelectedFacility] = useState<string | null>(null);
  const [roiInputs, setRoiInputs] = useState<RoiInputs>({
    dailyCalls: 60,
    missedPercent: 35,
    avgValue: 300,
    monthlyNoShows: 25,
    staffCount: 2,
  });
  const [showROIResults, setShowROIResults] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const handleFacilitySelect = (name: string) => {
    setSelectedFacility(name);
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

  // ── shared style tokens (kept for non-Hero sections) ──────────────────────
  const pageBg = "bg-[var(--bg)] text-[var(--t1)]";
  const sectionSoft = "bg-[var(--bg2)]";
  const card = "bg-[var(--card)] border border-[var(--bg4)]";
  const cardSoft =
    "bg-[color:rgba(255,255,255,0.06)] border border-[var(--bg4)]";
  const muted = "text-[var(--t2)]";
  const subtle = "text-[var(--t3)]";

  return (
    <div dir="rtl" className={`min-h-screen font-arabic ${pageBg}`}>
      {/* ==================== HERO ==================== */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-16 overflow-hidden">
        {/* gradient glow — same as Hero.jsx */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(90,24,154,0.15) 0%, transparent 70%)",
          }}
        />

        {/* GRID BACKGROUND — copied from Hero.jsx */}
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

        {/* FLOATING BLOBS — copied from Hero.jsx */}
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

        {/* HERO CONTENT */}
        <div className="relative z-10 max-w-[820px] mx-auto">
          {/* BADGE — same as Hero.jsx */}
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-[rgba(90,24,154,0.08)] border border-[rgba(90,24,154,0.2)] rounded-full text-[13px] font-medium text-[#9d4edd] mb-7 animate-fade-up backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#00d68f]" />
            معتمد من عملاء موثوقين
          </div>

          {/* H1 — same font + clamp as Hero.jsx */}
          <h1 className="font-['Instrument_Sans',sans-serif] text-[clamp(38px,5.5vw,68px)] font-bold leading-[1.08] tracking-tight mb-6 max-w-4xl mx-auto animate-fade-up animation-delay-100">
            حوّل المكالمات الفائتة إلى{" "}
            <span className="text-[#9d4edd]">مواعيد محجوزة</span>
          </h1>

          {/* SUBTITLE — same as Hero.jsx subtitle_new */}
          <p className="text-[clamp(16px,1.8vw,19px)] font-semibold text-[#1a0a2e] max-w-[580px] mx-auto leading-relaxed mb-4 animate-fade-up animation-delay-150">
            نظام استقبال صوتي بالذكاء الاصطناعي يرد على مرضاك 24/7 بلهجة سعودية
            طبيعية ويحجز المواعيد تلقائياً
          </p>

          {/* SOCIAL PROOF — same style as Hero.jsx desc */}
          <p className="text-[clamp(14px,1.6vw,17px)] text-[#4a3a62] max-w-[680px] mx-auto leading-relaxed mb-9 animate-fade-up animation-delay-200">
            ✓ +150 منشأة صحية &nbsp;·&nbsp; ✓ +500,000 مكالمة شهرياً
            &nbsp;·&nbsp; ✓ 97% دقة التعرف
          </p>

          {/* CTA BUTTON — same shimmer/glow style as Hero.jsx */}
          <div className="flex items-center justify-center gap-3.5 mb-12 flex-wrap animate-fade-up animation-delay-300">
            <Link
              to="/demo"
              className="group inline-flex items-center gap-2 px-8 py-3.5 text-[15px] font-semibold text-white gradient-bg glow rounded-full hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(90,24,154,0.4)] transition-all duration-300 shimmer"
            >
              جرّب الآن
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
              المشكلة
            </h3>
            <ul className="space-y-3">
              {[
                "✗ 40% من المكالمات لا يُرد عليها",
                "✗ 25% من المرضى لا يحضرون مواعيدهم",
                "✗ موظفو الاستقبال مشغولون أو غير متاحين",
                "✗ خسارة شهرية تصل لـ 50,000 ريال",
              ].map((item, i) => (
                <li key={i} className={`${muted} flex items-start gap-2`}>
                  {item}
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
              الحل مع سندس
            </h3>
            <ul className="space-y-3">
              {[
                "✓ رد على 100% من المكالمات 24/7",
                "✓ تقليل عدم الحضور بنسبة 65%",
                "✓ حجز تلقائي دون تدخل بشري",
                "✓ ROI إيجابي من الشهر الأول",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-[#1a0a2e]">
                  {item}
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
              حلول مخصصة لكل نوع منشأة
            </h2>
            <p className={muted}>حسب تصنيفات وزارة الصحة السعودية الرسمية</p>
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
                  {cat.icon} {cat.name}
                </button>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(facilityTypes)
              .filter(
                ([_, f]) =>
                  !selectedCategory || f.category === selectedCategory,
              )
              .slice(0, 9)
              .map(([name, facility]) => {
                const isSelected = selectedFacility === name;
                return (
                  <div
                    key={name}
                    onClick={() => handleFacilitySelect(name)}
                    className={`p-6 rounded-2xl cursor-pointer transition-all bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border ${
                      isSelected
                        ? "border-[rgba(90,24,154,0.5)] shadow-[0_0_30px_rgba(90,24,154,0.12)] ai-glow"
                        : "border-[rgba(90,24,154,0.1)] hover:border-[rgba(90,24,154,0.25)]"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-['Instrument_Sans',sans-serif] font-bold text-[17px] tracking-tight text-[#1a0a2e]">
                          {name}
                        </h4>
                        <p className="text-xs mt-1 text-[#8878a0]">
                          {facility.officialName}
                        </p>
                      </div>
                      <span className="text-2xl">
                        {
                          facilityCategories.find(
                            (c) => c.id === facility.category,
                          )?.icon
                        }
                      </span>
                    </div>
                    <div className="text-sm p-3 rounded-xl mb-3 bg-[rgba(255,255,255,0.06)] border border-[rgba(90,24,154,0.08)]">
                      <span className="text-orange-400">⚠️ </span>
                      <span className="text-[#4a3a62]">
                        {facility.painPoint}
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
                        {facility.solution}
                      </span>
                    </div>
                    <p className="text-xs text-[#8878a0]">{facility.license}</p>
                  </div>
                );
              })}
          </div>

          <div className="text-center mt-8">
            <button className="text-sm text-[#4a3a62] underline">
              عرض جميع التصنيفات ({Object.keys(facilityTypes).length})
            </button>
          </div>
        </div>
      </section>

      {/* ==================== ROI CALCULATOR ==================== */}
      <section className={`py-24 px-6 ${sectionSoft}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[13px] font-medium mb-3 text-[#9d4edd]">
              🧮 حاسبة مبنية على بيانات حقيقية
            </p>
            <h2 className="font-['Instrument_Sans',sans-serif] text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight">
              احسب خسائرك الحالية وتوفيرك مع سندس
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* LEFT — inputs */}
            <div className="p-8 rounded-3xl bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border border-[rgba(90,24,154,0.15)] shadow-[0_0_60px_rgba(90,24,154,0.08)]">
              <h3 className="font-['Instrument_Sans',sans-serif] font-bold text-[17px] tracking-tight mb-6 text-[#1a0a2e]">
                ⚙️ بيانات منشأتك
              </h3>

              {selectedFacility && (
                <div
                  className="flex items-center justify-between p-3 rounded-xl mb-6 text-sm"
                  style={{
                    background: "rgba(90,24,154,0.08)",
                    border: "1px solid rgba(157,78,221,0.35)",
                  }}
                >
                  <div>
                    <p className="text-xs text-[#8878a0]">المنشأة المختارة</p>
                    <p className="font-semibold text-[#1a0a2e]">
                      {selectedFacility}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedFacility(null)}
                    className="hover:opacity-80 text-[#4a3a62]"
                  >
                    تغيير
                  </button>
                </div>
              )}

              {[
                {
                  label: "المكالمات اليومية",
                  key: "dailyCalls",
                  min: 10,
                  max: 500,
                  step: 5,
                  val: roiInputs.dailyCalls,
                  suffix: "",
                },
                {
                  label: "نسبة المكالمات الفائتة",
                  key: "missedPercent",
                  min: 5,
                  max: 80,
                  step: 5,
                  val: roiInputs.missedPercent,
                  suffix: "%",
                },
                {
                  label: "متوسط قيمة الموعد (ريال)",
                  key: "avgValue",
                  min: 50,
                  max: 2000,
                  step: 50,
                  val: roiInputs.avgValue,
                  suffix: "",
                },
                {
                  label: "حالات عدم الحضور الشهرية",
                  key: "monthlyNoShows",
                  min: 0,
                  max: 200,
                  step: 5,
                  val: roiInputs.monthlyNoShows,
                  suffix: "",
                },
                {
                  label: "عدد موظفي الاستقبال",
                  key: "staffCount",
                  min: 1,
                  max: 10,
                  step: 1,
                  val: roiInputs.staffCount,
                  suffix: "",
                },
              ].map((slider) => (
                <div key={slider.key} className="mb-6">
                  <div className="flex justify-between mb-2">
                    <label className="text-sm text-[#4a3a62]">
                      {slider.label}
                    </label>
                    <span className="font-bold text-[#1a0a2e]">
                      {slider.val}
                      {slider.suffix}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={slider.min}
                    max={slider.max}
                    step={slider.step}
                    value={slider.val}
                    onChange={(e) =>
                      setRoiInputs({
                        ...roiInputs,
                        [slider.key]: parseInt(e.target.value, 10),
                      })
                    }
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                    style={{ background: "rgba(90,24,154,0.12)" }}
                  />
                </div>
              ))}

              <button
                onClick={() => setShowROIResults(true)}
                className="w-full mt-8 py-4 rounded-full font-semibold text-[15px] text-white gradient-bg glow hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(90,24,154,0.4)] transition-all duration-300 shimmer"
              >
                احسب الآن
              </button>
            </div>

            {/* RIGHT — results */}
            <div className="p-8 rounded-3xl bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border border-[rgba(90,24,154,0.15)] shadow-[0_0_60px_rgba(90,24,154,0.08)]">
              {!showROIResults ? (
                <div className="h-full flex flex-col items-center justify-center text-center gap-4">
                  <div className="text-6xl">📊</div>
                  <p className="text-[#4a3a62]">
                    أدخل بياناتك واضغط "احسب الآن"
                  </p>
                  <p className="text-[#8878a0] text-sm">
                    لمعرفة خسائرك الحالية وتوفيرك المتوقع
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <h4 className="font-['Instrument_Sans',sans-serif] font-bold text-[15px] tracking-tight mb-4 text-red-400">
                      📉 خسائرك الشهرية الحالية
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-[#4a3a62]">
                          مكالمات فائتة ({roiResults.monthlyMissedCalls})
                        </span>
                        <span className="text-red-400 font-semibold">
                          -{roiResults.missedCallsLoss.toLocaleString()} ر.س
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-[#4a3a62]">
                          عدم حضور ({roiInputs.monthlyNoShows})
                        </span>
                        <span className="text-red-400 font-semibold">
                          -{roiResults.noShowLoss.toLocaleString()} ر.س
                        </span>
                      </div>
                      <div className="flex justify-between font-bold pt-2 border-t border-[rgba(90,24,154,0.1)]">
                        <span className="text-[#1a0a2e]">إجمالي الخسارة</span>
                        <span className="text-red-400">
                          -{roiResults.totalCurrentLoss.toLocaleString()} ر.س
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-['Instrument_Sans',sans-serif] font-bold text-[15px] tracking-tight mb-4 text-[#9d4edd]">
                      ✨ توفيرك مع سندس
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-[#4a3a62]">
                          إيرادات مستردة ({roiResults.recoveredCalls} مكالمة)
                        </span>
                        <span className="font-semibold text-[#9d4edd]">
                          +{roiResults.recoveredRevenue.toLocaleString()} ر.س
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-[#4a3a62]">
                          توفير عدم الحضور ({roiResults.reducedNoShows})
                        </span>
                        <span className="font-semibold text-[#9d4edd]">
                          +{roiResults.noShowSavings.toLocaleString()} ر.س
                        </span>
                      </div>
                      {roiResults.staffSavings > 0 && (
                        <div className="flex justify-between text-sm">
                          <span className="text-[#4a3a62]">توفير الموظفين</span>
                          <span className="font-semibold text-[#9d4edd]">
                            +{roiResults.staffSavings.toLocaleString()} ر.س
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between text-sm">
                        <span className="text-[#4a3a62]">
                          تكلفة سندس ({roiResults.tierName})
                        </span>
                        <span className="text-red-400 font-semibold">
                          -{roiResults.sondosCost.toLocaleString()} ر.س
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className="p-6 rounded-2xl text-center"
                    style={{
                      background: "rgba(90,24,154,0.08)",
                      border: "1px solid rgba(157,78,221,0.35)",
                    }}
                  >
                    <p className="text-sm mb-1 text-[#4a3a62]">
                      صافي التوفير الشهري
                    </p>
                    <p className="text-[clamp(28px,3.5vw,42px)] font-['Instrument_Sans',sans-serif] font-bold leading-[1.08] tracking-tight mb-1 text-[#9d4edd]">
                      +{roiResults.netSavings.toLocaleString()} ر.س
                    </p>
                    <p className="text-sm text-[#4a3a62]">
                      ROI: {roiResults.roiPercent}%
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-2xl font-bold text-[#1a0a2e]">
                          {(roiResults.annualSavings / 1000).toFixed(0)}K
                        </p>
                        <p className="text-xs text-[#8878a0]">
                          توفير سنوي (ر.س)
                        </p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-[#1a0a2e]">
                          {roiResults.tierName}
                        </p>
                        <p className="text-xs text-[#8878a0]">
                          الباقة المقترحة
                        </p>
                      </div>
                    </div>
                  </div>

                  <Link
                    to="/demo"
                    className="block w-full py-4 rounded-full font-semibold text-[15px] gradient-bg text-white glow text-center hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(90,24,154,0.4)] transition-all duration-300 shimmer"
                  >
                    احصل على عرض سعر مخصص
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== INTEGRATIONS ==================== */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-['Instrument_Sans',sans-serif] text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4">
            يتكامل مع أنظمتك الحالية
          </h2>
          <p className="mb-12 text-[#4a3a62]">
            تكامل سلس مع أنظمة المستشفيات والعيادات
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {integrations.map((int, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl flex flex-col items-center gap-3 min-w-[140px] bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border border-[rgba(90,24,154,0.1)] hover:border-[rgba(90,24,154,0.25)] transition-all duration-300"
              >
                <span className="text-3xl">{int.icon}</span>
                <span className="font-semibold text-[#1a0a2e]">{int.name}</span>
                <span className="text-xs text-[#8878a0]">{int.desc}</span>
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
                🔒 أمان على مستوى المؤسسات
              </h2>
              <p className="mb-8 text-[#4a3a62]">
                حماية بيانات المرضى أولويتنا القصوى
              </p>
              <ul className="space-y-4">
                {[
                  {
                    title: "تشفير من طرف لطرف",
                    desc: "جميع المكالمات والبيانات مشفرة بمعيار AES-256",
                  },
                  {
                    title: "استضافة محلية",
                    desc: "الخوادم داخل المملكة العربية السعودية",
                  },
                  { title: "صلاحيات دقيقة", desc: "تحكم كامل في من يصل لماذا" },
                  {
                    title: "سجل مراجعة كامل",
                    desc: "تتبع كل إجراء لأغراض المراجعة والامتثال",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full flex items-center justify-center text-xs text-white flex-shrink-0 bg-[rgba(90,24,154,0.7)]">
                      ✓
                    </span>
                    <div>
                      <p className="font-semibold text-[#1a0a2e]">
                        {item.title}
                      </p>
                      <p className="text-sm text-[#4a3a62]">{item.desc}</p>
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
                  <p className="text-xs mt-1 text-[#8878a0]">{cert.desc}</p>
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
              لوحة تحكم ذكية وشاملة
            </h2>
            <p className="text-[#4a3a62]">راقب أداء منشأتك في الوقت الفعلي</p>
          </div>

          {/* Dashboard card — same style as Hero dashboard card */}
          <div className="rounded-3xl overflow-hidden border border-[rgba(90,24,154,0.15)] bg-[rgba(255,255,255,0.85)] backdrop-blur-xl shadow-[0_0_100px_rgba(90,24,154,0.15),0_40px_80px_rgba(0,0,0,0.08)] ai-glow">
            {/* top bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[rgba(90,24,154,0.1)]">
              <div className="flex items-center gap-3">
                {/* macOS dots */}
                <div className="w-3 h-3 rounded-full bg-[#ff6b6b]" />
                <div className="w-3 h-3 rounded-full bg-[#ffa940]" />
                <div className="w-3 h-3 rounded-full bg-[#00d68f]" />
                <span className="text-[12px] text-[#8878a0] ml-2 font-mono">
                  sondos-healthcare-dashboard
                </span>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-[rgba(34,197,94,0.15)] text-[#22c55e]">
                نشط
              </span>
            </div>

            {/* stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[rgba(90,24,154,0.06)]">
              {[
                { label: "المكالمات اليوم", value: "127", sub: "↑ 12% من أمس" },
                { label: "معدل الرد", value: "98.5%", sub: "الهدف: 95%" },
                { label: "حجوزات جديدة", value: "34", sub: "↑ 8 عن أمس" },
                { label: "رضا المرضى", value: "4.8", sub: "من 5.0" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="p-6 text-center bg-[rgba(255,255,255,0.85)]"
                >
                  <p className="text-xs mb-2 text-[#8878a0]">{stat.label}</p>
                  <p className="text-2xl font-black text-[#1a0a2e]">
                    {stat.value}
                  </p>
                  <p className="text-xs mt-1 text-[#9d4edd]">{stat.sub}</p>
                </div>
              ))}
            </div>

            {/* activity feed */}
            <div className="p-6">
              <h4 className="text-sm font-semibold mb-4 text-[#4a3a62]">
                آخر النشاطات
              </h4>
              <div className="space-y-3">
                {[
                  {
                    time: "قبل دقيقة",
                    action: "حجز موعد جديد",
                    detail: "عيادة الباطنية - د. أحمد",
                    type: "success",
                  },
                  {
                    time: "قبل 3 دقائق",
                    action: "تأكيد موعد",
                    detail: "غداً 10:30 ص - محمد العلي",
                    type: "info",
                  },
                  {
                    time: "قبل 5 دقائق",
                    action: "تحويل لموظف",
                    detail: "استفسار معقد - تم التحويل",
                    type: "warning",
                  },
                  {
                    time: "قبل 8 دقائق",
                    action: "إرسال تذكير",
                    detail: "موعد خلال ساعتين - 5 مرضى",
                    type: "info",
                  },
                ].map((activity, idx) => (
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
                          {activity.action}
                        </p>
                        <p className="text-xs text-[#8878a0]">
                          {activity.detail}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs text-[#8878a0]">
                      {activity.time}
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
              أسعار شفافة وواضحة
            </h2>
            <p className="text-[#4a3a62]">ابدأ مجاناً، ترقّى حسب نموك</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="p-8 rounded-3xl bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border border-[rgba(90,24,154,0.12)]">
              <h3 className="font-['Instrument_Sans',sans-serif] text-xl font-bold tracking-tight mb-2 text-[#1a0a2e]">
                Starter
              </h3>
              <p className="text-[clamp(24px,2.5vw,32px)] font-['Instrument_Sans',sans-serif] font-bold tracking-tight mb-1 text-[#1a0a2e]">
                6,900 ر.س
              </p>
              <p className="text-sm mb-6 text-[#4a3a62]">
                /شهر · للعيادات والمراكز الصغيرة
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  { text: "رد آلي 24/7", ok: true },
                  { text: "واتساب + ويب شات", ok: true },
                  { text: "تحويل لموظف بشري", ok: true },
                  { text: "3 تخصصات", ok: true },
                  { text: "3 سيناريوهات جاهزة", ok: true },
                  { text: "تأكيد حجز فوري", ok: true },
                  { text: "تذكير قبل 24 ساعة", ok: true },
                  { text: "2 مكالمات متزامنة", ok: true },
                  { text: "حتى 2,300 دقيقة AI شهريًا", ok: true },
                  { text: "1,000 رسالة AI", ok: true },
                  { text: "لا يشمل حملات Tele-Sales", ok: false },
                  { text: "لا يشمل Upselling", ok: false },
                ].map((f, i) => (
                  <li
                    key={i}
                    className={`text-sm flex gap-2 ${f.ok ? "text-[#1a0a2e]" : "text-[#8878a0]"}`}
                  >
                    <span>{f.ok ? "✓" : "✗"}</span> {f.text}
                  </li>
                ))}
              </ul>
              <Link
                to="/demo"
                className="block w-full py-3 rounded-full text-center font-semibold border border-[rgba(90,24,154,0.2)] text-[#1a0a2e] hover:bg-[rgba(90,24,154,0.05)] hover:border-[rgba(90,24,154,0.35)] transition-all duration-300"
              >
                ابدأ الآن
              </Link>
            </div>

            {/* Pro — Popular */}
            <div className="p-8 rounded-3xl relative gradient-bg glow border-2 border-[rgba(157,78,221,0.6)]">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-3 py-1 rounded-full bg-white text-[#5a189a] font-bold shadow">
                الأكثر طلبًا
              </span>
              <h3 className="font-['Instrument_Sans',sans-serif] text-xl font-bold tracking-tight mb-2 text-white">
                Pro
              </h3>
              <p className="text-[clamp(24px,2.5vw,32px)] font-['Instrument_Sans',sans-serif] font-bold tracking-tight mb-1 text-white">
                17,450 ر.س
              </p>
              <p className="text-sm mb-6 text-purple-200">
                /شهر · للمجمعات الطبية المتوسطة
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "كل مزايا Starter",
                  "10 تخصصات",
                  "10 سيناريوهات مخصصة",
                  "تذكير 48 ساعة + تذكير مزدوج",
                  "متابعة مرضى بعد الزيارة",
                  "استبيان رضا المرضى",
                  "حملات صوتية تذكيرية",
                  "Web Widget",
                  "5 مكالمات متزامنة",
                  "حتى 7,000 دقيقة AI شهريًا",
                  "3,500 رسالة AI",
                ].map((f, i) => (
                  <li key={i} className="text-sm flex gap-2 text-white">
                    <span>✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/demo"
                className="block w-full py-3 rounded-full text-center font-semibold bg-white text-[#5a189a] hover:opacity-90 transition-opacity"
              >
                ابدأ الآن
              </Link>
            </div>

            {/* Business */}
            <div className="p-8 rounded-3xl bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border border-[rgba(90,24,154,0.12)]">
              <h3 className="font-['Instrument_Sans',sans-serif] text-xl font-bold tracking-tight mb-2 text-[#1a0a2e]">
                Business
              </h3>
              <p className="text-[clamp(24px,2.5vw,32px)] font-['Instrument_Sans',sans-serif] font-bold tracking-tight mb-1 text-[#1a0a2e]">
                48,000 ر.س
              </p>
              <p className="text-sm mb-6 text-[#4a3a62]">
                /شهر · للمستشفيات والمنشآت الكبيرة
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "كل مزايا Pro",
                  "تخصصات غير محدودة",
                  "سيناريوهات غير محدودة",
                  "Tele-Sales",
                  "Upselling",
                  "حملات دورية",
                  "12 مكالمة متزامنة",
                  "حتى 24,000 دقيقة AI شهريًا",
                  "10,000 رسالة AI",
                  "تقارير رضا المرضى للإدارة",
                  "تخصيص كامل للسيناريوهات",
                ].map((f, i) => (
                  <li key={i} className="text-sm flex gap-2 text-[#1a0a2e]">
                    <span>✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/demo"
                className="block w-full py-3 rounded-full text-center font-semibold border border-[rgba(90,24,154,0.2)] text-[#1a0a2e] hover:bg-[rgba(90,24,154,0.05)] hover:border-[rgba(90,24,154,0.35)] transition-all duration-300"
              >
                تواصل معنا
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
              أسئلة شائعة
            </h2>
            <p className="text-[#4a3a62]">كل شيء تحتاج معرفته قبل البدء</p>
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
                    {f.q}
                    <span className="text-xl ml-4 flex-shrink-0 text-[#9d4edd]">
                      {open ? "−" : "+"}
                    </span>
                  </button>
                  {open && (
                    <div className="px-6 pb-5 text-sm leading-relaxed text-[#4a3a62]">
                      {f.a}
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
