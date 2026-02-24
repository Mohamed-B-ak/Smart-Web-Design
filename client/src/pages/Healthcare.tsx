import React, { useMemo, useState } from "react";
import "../index.css";

type FacilityCategory = {
  id: string;
  name: string;
  icon: string;
};

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
  // ==================== DATA ====================
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
        name: "HIS / EMR",
        icon: "🏥",
        desc: "ربط السجلات والملفات",
        status: "beta" as const,
      },
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

  // ==================== STATE ====================
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

  // ==================== ROI LOGIC ====================
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
    let sondosCost = 1500;

    if (roiInputs.dailyCalls > 50 && roiInputs.dailyCalls <= 150) {
      tierName = "Pro";
      sondosCost = 3500;
    } else if (roiInputs.dailyCalls > 150) {
      tierName = "Business";
      sondosCost = 7500;
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

  // ==================== HELPERS (CLASSES) ====================
  const pageBg = "bg-[var(--bg)] text-[var(--t1)]";
  const sectionSoft = "bg-[var(--bg2)]";
  const card = "bg-[var(--card)] border border-[var(--bg4)]";
  const cardSoft =
    "bg-[color:rgba(255,255,255,0.06)] border border-[var(--bg4)]";
  const muted = "text-[var(--t2)]";
  const subtle = "text-[var(--t3)]";

  // ==================== RENDER ====================
  return (
    <div dir="rtl" className={`min-h-screen ${pageBg}`}>
      {/* ==================== HERO ==================== */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects (glow violet basé sur tes variables) */}
        <div className="absolute inset-0">
          <div
            className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-70"
            style={{ background: "var(--accent-glow)" }}
          />
          <div
            className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-40"
            style={{ background: "rgba(157, 78, 221, 0.25)" }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-8"
              style={{
                background: "rgba(90, 24, 154, 0.10)",
                border: "1px solid rgba(90, 24, 154, 0.22)",
                color: "var(--accent3)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "var(--accent3)" }}
              ></span>
              معتمد من وزارة الصحة السعودية
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-[var(--t1)]">حوّل المكالمات الفائتة</span>
              <br />
              <span className="gradient-text">إلى مواعيد محجوزة</span>
            </h1>

            {/* Subheadline */}
            <p
              className={`text-xl ${muted} mb-10 max-w-2xl mx-auto leading-relaxed`}
            >
              نظام استقبال صوتي بالذكاء الاصطناعي يرد على مرضاك 24/7
              <br />
              بلهجة سعودية طبيعية ويحجز المواعيد تلقائياً
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 gradient-bg text-white glow">
                جرّب مجاناً - 14 يوم
              </button>
              <button
                className={`px-8 py-4 rounded-xl font-medium transition-all flex items-center justify-center gap-2 ${card}`}
              >
                <span>🎧</span>
                استمع لعينة صوتية
              </button>
            </div>

            {/* Trust Badges */}
            <div
              className={`flex flex-wrap justify-center gap-8 ${subtle} text-sm`}
            >
              <div className="flex items-center gap-2">
                <span style={{ color: "var(--green)" }}>✓</span>
                <span>+150 منشأة صحية</span>
              </div>
              <div className="flex items-center gap-2">
                <span style={{ color: "var(--green)" }}>✓</span>
                <span>+500,000 مكالمة شهرياً</span>
              </div>
              <div className="flex items-center gap-2">
                <span style={{ color: "var(--green)" }}>✓</span>
                <span>97% دقة التعرف</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PROBLEM/SOLUTION ==================== */}
      <section className={`py-20 ${sectionSoft}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Problem */}
            <div
              className="p-8 rounded-2xl"
              style={{
                background: "rgba(255, 107, 107, 0.06)",
                border: "1px solid rgba(255, 107, 107, 0.25)",
              }}
            >
              <div className="text-4xl mb-4" style={{ color: "var(--red)" }}>
                📉
              </div>
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "var(--red)" }}
              >
                المشكلة
              </h3>
              <ul className={`space-y-3 ${muted}`}>
                <li className="flex items-start gap-3">
                  <span className="mt-1" style={{ color: "var(--red)" }}>
                    ✗
                  </span>
                  <span>40% من المكالمات لا يُرد عليها</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1" style={{ color: "var(--red)" }}>
                    ✗
                  </span>
                  <span>25% من المرضى لا يحضرون مواعيدهم</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1" style={{ color: "var(--red)" }}>
                    ✗
                  </span>
                  <span>موظفو الاستقبال مشغولون أو غير متاحين</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1" style={{ color: "var(--red)" }}>
                    ✗
                  </span>
                  <span>خسارة شهرية تصل لـ 50,000 ريال</span>
                </li>
              </ul>
            </div>

            {/* Solution */}
            <div
              className="p-8 rounded-2xl"
              style={{
                background: "rgba(0, 214, 143, 0.06)",
                border: "1px solid rgba(0, 214, 143, 0.22)",
              }}
            >
              <div className="text-4xl mb-4" style={{ color: "var(--green)" }}>
                ✨
              </div>
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "var(--green)" }}
              >
                الحل مع سندس
              </h3>
              <ul className={`space-y-3 ${muted}`}>
                <li className="flex items-start gap-3">
                  <span className="mt-1" style={{ color: "var(--green)" }}>
                    ✓
                  </span>
                  <span>رد على 100% من المكالمات 24/7</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1" style={{ color: "var(--green)" }}>
                    ✓
                  </span>
                  <span>تقليل عدم الحضور بنسبة 65%</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1" style={{ color: "var(--green)" }}>
                    ✓
                  </span>
                  <span>حجز تلقائي دون تدخل بشري</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1" style={{ color: "var(--green)" }}>
                    ✓
                  </span>
                  <span>ROI إيجابي من الشهر الأول</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FACILITY TYPES SECTION ==================== */}
      <section id="solutions" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              حلول مخصصة لكل <span className="gradient-text">نوع منشأة</span>
            </h2>
            <p className={`${muted} text-lg`}>
              حسب تصنيفات وزارة الصحة السعودية الرسمية
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {facilityCategories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(isActive ? null : cat.id)}
                  className={`px-5 py-3 rounded-xl flex items-center gap-2 transition-all border ${
                    isActive ? "text-white" : "text-[var(--t2)]"
                  }`}
                  style={{
                    background: isActive ? "var(--accent)" : "var(--card)",
                    borderColor: isActive ? "var(--accent2)" : "var(--bg4)",
                  }}
                >
                  <span className="text-xl">{cat.icon}</span>
                  <span className="font-medium">{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Facility Cards */}
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
                    className={`p-6 rounded-2xl cursor-pointer transition-all ${
                      isSelected ? "ai-glow" : ""
                    }`}
                    style={{
                      background: "var(--card)",
                      border: isSelected
                        ? "2px solid var(--accent2)"
                        : "1px solid var(--bg4)",
                    }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-[var(--t1)] mb-1">
                          {name}
                        </h3>
                        <p className={`text-xs ${subtle}`}>
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

                    <p className="text-sm mb-2" style={{ color: "var(--red)" }}>
                      ⚠️ {facility.painPoint}
                    </p>
                    <p className="text-sm" style={{ color: "var(--green)" }}>
                      ✨ {facility.solution}
                    </p>

                    <div
                      className="mt-4 pt-4 text-xs"
                      style={{
                        borderTop: "1px solid var(--bg4)",
                        color: "var(--t3)",
                      }}
                    >
                      {facility.license}
                    </div>
                  </div>
                );
              })}
          </div>

          {/* Show More Button */}
          <div className="text-center mt-8">
            <button className={`px-6 py-3 rounded-xl transition-all ${card}`}>
              عرض جميع التصنيفات ({Object.keys(facilityTypes).length})
            </button>
          </div>
        </div>
      </section>

      {/* ==================== ROI CALCULATOR ==================== */}
      <section id="calculator" className={`py-20 ${sectionSoft}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-4"
              style={{
                background: "rgba(255, 169, 64, 0.12)",
                border: "1px solid rgba(255, 169, 64, 0.25)",
                color: "var(--orange)",
              }}
            >
              <span>🧮</span>
              حاسبة مبنية على بيانات حقيقية
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              احسب <span className="gradient-text">خسائرك الحالية</span> وتوفيرك
              مع سندس
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Inputs Panel */}
            <div className={`rounded-2xl p-6 ${card}`}>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span>⚙️</span>
                بيانات منشأتك
              </h3>

              {selectedFacility && (
                <div
                  className="mb-6 p-4 rounded-xl"
                  style={{
                    background: "rgba(90, 24, 154, 0.08)",
                    border: "1px solid rgba(90, 24, 154, 0.18)",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p
                        className="text-sm"
                        style={{ color: "var(--accent3)" }}
                      >
                        المنشأة المختارة
                      </p>
                      <p className="text-lg font-semibold">
                        {selectedFacility}
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedFacility(null)}
                      className="hover:opacity-80"
                      style={{ color: "var(--t2)" }}
                    >
                      تغيير
                    </button>
                  </div>
                </div>
              )}

              <div className="space-y-6">
                {/* Daily Calls */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className={`text-sm ${muted}`}>
                      المكالمات اليومية
                    </label>
                    <span
                      style={{ color: "var(--green)" }}
                      className="font-mono"
                    >
                      {roiInputs.dailyCalls}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="300"
                    value={roiInputs.dailyCalls}
                    onChange={(e) =>
                      setRoiInputs({
                        ...roiInputs,
                        dailyCalls: parseInt(e.target.value, 10),
                      })
                    }
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                    style={{ background: "var(--bg3)" }}
                  />
                </div>

                {/* Missed Calls % */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className={`text-sm ${muted}`}>
                      نسبة المكالمات الفائتة
                    </label>
                    <span style={{ color: "var(--red)" }} className="font-mono">
                      {roiInputs.missedPercent}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="60"
                    value={roiInputs.missedPercent}
                    onChange={(e) =>
                      setRoiInputs({
                        ...roiInputs,
                        missedPercent: parseInt(e.target.value, 10),
                      })
                    }
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                    style={{ background: "var(--bg3)" }}
                  />
                </div>

                {/* Average Value */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className={`text-sm ${muted}`}>
                      متوسط قيمة الموعد (ريال)
                    </label>
                    <span
                      style={{ color: "var(--orange)" }}
                      className="font-mono"
                    >
                      {roiInputs.avgValue}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="2000"
                    step="50"
                    value={roiInputs.avgValue}
                    onChange={(e) =>
                      setRoiInputs({
                        ...roiInputs,
                        avgValue: parseInt(e.target.value, 10),
                      })
                    }
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                    style={{ background: "var(--bg3)" }}
                  />
                </div>

                {/* Monthly No-Shows */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className={`text-sm ${muted}`}>
                      حالات عدم الحضور الشهرية
                    </label>
                    <span
                      style={{ color: "var(--orange)" }}
                      className="font-mono"
                    >
                      {roiInputs.monthlyNoShows}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={roiInputs.monthlyNoShows}
                    onChange={(e) =>
                      setRoiInputs({
                        ...roiInputs,
                        monthlyNoShows: parseInt(e.target.value, 10),
                      })
                    }
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                    style={{ background: "var(--bg3)" }}
                  />
                </div>

                {/* Staff Count */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className={`text-sm ${muted}`}>
                      عدد موظفي الاستقبال
                    </label>
                    <span
                      style={{ color: "var(--blue)" }}
                      className="font-mono"
                    >
                      {roiInputs.staffCount}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={roiInputs.staffCount}
                    onChange={(e) =>
                      setRoiInputs({
                        ...roiInputs,
                        staffCount: parseInt(e.target.value, 10),
                      })
                    }
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                    style={{ background: "var(--bg3)" }}
                  />
                </div>
              </div>

              <button
                onClick={() => setShowROIResults(true)}
                className="w-full mt-8 py-4 rounded-xl font-semibold text-lg gradient-bg text-white glow"
              >
                احسب الآن
              </button>
            </div>

            {/* Results Panel */}
            <div
              className={`rounded-2xl p-6 border transition-all ${card}`}
              style={{
                borderColor: showROIResults ? "var(--accent2)" : "var(--bg4)",
              }}
            >
              {!showROIResults ? (
                <div
                  className={`h-full flex flex-col items-center justify-center ${subtle} py-12`}
                >
                  <div className="text-6xl mb-4">📊</div>
                  <p className="text-lg">أدخل بياناتك واضغط "احسب الآن"</p>
                  <p className="text-sm">
                    لمعرفة خسائرك الحالية وتوفيرك المتوقع
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Current Losses */}
                  <div
                    className="p-4 rounded-xl"
                    style={{
                      background: "rgba(255, 107, 107, 0.08)",
                      border: "1px solid rgba(255, 107, 107, 0.25)",
                    }}
                  >
                    <h4
                      className="font-semibold mb-3 flex items-center gap-2"
                      style={{ color: "var(--red)" }}
                    >
                      <span>📉</span> خسائرك الشهرية الحالية
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className={muted}>
                          مكالمات فائتة ({roiResults.monthlyMissedCalls})
                        </span>
                        <span
                          className="font-mono"
                          style={{ color: "var(--red)" }}
                        >
                          -{roiResults.missedCallsLoss.toLocaleString()} ر.س
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className={muted}>
                          عدم حضور ({roiInputs.monthlyNoShows})
                        </span>
                        <span
                          className="font-mono"
                          style={{ color: "var(--red)" }}
                        >
                          -{roiResults.noShowLoss.toLocaleString()} ر.س
                        </span>
                      </div>
                      <div
                        className="flex justify-between pt-2 font-semibold"
                        style={{
                          borderTop: "1px solid rgba(255,107,107,0.25)",
                        }}
                      >
                        <span>إجمالي الخسارة</span>
                        <span style={{ color: "var(--red)" }}>
                          -{roiResults.totalCurrentLoss.toLocaleString()} ر.س
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Savings */}
                  <div
                    className="p-4 rounded-xl"
                    style={{
                      background: "rgba(0, 214, 143, 0.08)",
                      border: "1px solid rgba(0, 214, 143, 0.22)",
                    }}
                  >
                    <h4
                      className="font-semibold mb-3 flex items-center gap-2"
                      style={{ color: "var(--green)" }}
                    >
                      <span>✨</span> توفيرك مع سندس
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className={muted}>
                          إيرادات مستردة ({roiResults.recoveredCalls} مكالمة)
                        </span>
                        <span
                          className="font-mono"
                          style={{ color: "var(--green)" }}
                        >
                          +{roiResults.recoveredRevenue.toLocaleString()} ر.س
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className={muted}>
                          توفير عدم الحضور ({roiResults.reducedNoShows})
                        </span>
                        <span
                          className="font-mono"
                          style={{ color: "var(--green)" }}
                        >
                          +{roiResults.noShowSavings.toLocaleString()} ر.س
                        </span>
                      </div>

                      {roiResults.staffSavings > 0 && (
                        <div className="flex justify-between">
                          <span className={muted}>توفير الموظفين</span>
                          <span
                            className="font-mono"
                            style={{ color: "var(--green)" }}
                          >
                            +{roiResults.staffSavings.toLocaleString()} ر.س
                          </span>
                        </div>
                      )}

                      <div
                        className="flex justify-between"
                        style={{ color: "var(--t3)" }}
                      >
                        <span>تكلفة سندس ({roiResults.tierName})</span>
                        <span className="font-mono">
                          -{roiResults.sondosCost.toLocaleString()} ر.س
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Net Result */}
                  <div
                    className="p-6 rounded-xl"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(90,24,154,0.18), rgba(157,78,221,0.10))",
                      border: "1px solid rgba(90,24,154,0.22)",
                    }}
                  >
                    <div className="text-center">
                      <p className={muted + " mb-2"}>صافي التوفير الشهري</p>
                      <p
                        className="text-4xl font-bold mb-2"
                        style={{ color: "var(--accent3)" }}
                      >
                        +{roiResults.netSavings.toLocaleString()} ر.س
                      </p>
                      <p
                        className="text-lg"
                        style={{ color: "var(--accent2)" }}
                      >
                        ROI: {roiResults.roiPercent}%
                      </p>
                    </div>

                    <div
                      className="mt-4 pt-4 grid grid-cols-2 gap-4 text-center"
                      style={{ borderTop: "1px solid rgba(90,24,154,0.22)" }}
                    >
                      <div>
                        <p className="text-2xl font-bold text-[var(--t1)]">
                          {(roiResults.annualSavings / 1000).toFixed(0)}K
                        </p>
                        <p className={`text-xs ${subtle}`}>توفير سنوي (ر.س)</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-[var(--t1)]">
                          {roiResults.tierName}
                        </p>
                        <p className={`text-xs ${subtle}`}>الباقة المقترحة</p>
                      </div>
                    </div>
                  </div>

                  <button className="w-full py-4 rounded-xl font-semibold gradient-bg text-white glow">
                    احصل على عرض سعر مخصص
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== INTEGRATIONS ==================== */}
      <section id="integrations" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              يتكامل مع <span className="gradient-text">أنظمتك الحالية</span>
            </h2>
            <p className={muted}>تكامل سلس مع أنظمة المستشفيات والعيادات</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {integrations.map((int, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-xl transition-all text-center group ${card}`}
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {int.icon}
                </div>
                <h4 className="font-semibold text-[var(--t1)] mb-1">
                  {int.name}
                </h4>
                <p className={`text-xs ${subtle}`}>{int.desc}</p>

                {int.status === "beta" && (
                  <span
                    className="inline-block mt-2 px-2 py-0.5 text-xs rounded-full"
                    style={{
                      background: "rgba(255,169,64,0.18)",
                      color: "var(--orange)",
                      border: "1px solid rgba(255,169,64,0.25)",
                    }}
                  >
                    Beta
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECURITY & COMPLIANCE ==================== */}
      <section id="security" className={`py-20 ${sectionSoft}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-6"
                style={{
                  background: "rgba(79, 172, 254, 0.12)",
                  border: "1px solid rgba(79, 172, 254, 0.25)",
                  color: "var(--blue)",
                }}
              >
                <span>🔒</span>
                أمان على مستوى المؤسسات
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                حماية بيانات المرضى <br />
                <span className="gradient-text">أولويتنا القصوى</span>
              </h2>

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
                    <span className="mt-1" style={{ color: "var(--green)" }}>
                      ✓
                    </span>
                    <div>
                      <strong className="text-[var(--t1)]">{item.title}</strong>
                      <p className={`text-sm ${muted}`}>{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Certifications */}
            <div className="grid grid-cols-2 gap-4">
              {certifications.map((cert, idx) => (
                <div key={idx} className={`p-6 rounded-xl text-center ${card}`}>
                  <div className="text-4xl mb-3">{cert.icon}</div>
                  <h4 className="text-xl font-bold text-[var(--t1)] mb-1">
                    {cert.name}
                  </h4>
                  <p className={`text-sm ${muted}`}>{cert.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">أسئلة شائعة</h2>
            <p className={muted}>كل شيء تحتاج معرفته قبل البدء</p>
          </div>

          <div className="space-y-4">
            {faqs.map((f, idx) => {
              const open = activeFAQ === idx;
              return (
                <div key={idx} className={`rounded-xl overflow-hidden ${card}`}>
                  <button
                    className="w-full text-right px-5 py-4 flex items-center justify-between"
                    onClick={() => setActiveFAQ(open ? null : idx)}
                  >
                    <span className="font-semibold text-[var(--t1)]">
                      {f.q}
                    </span>
                    <span className={subtle}>{open ? "−" : "+"}</span>
                  </button>
                  {open && <div className={`px-5 pb-4 ${muted}`}>{f.a}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* ==================== DASHBOARD PREVIEW ==================== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              لوحة تحكم
              <span className="gradient-text"> ذكية وشاملة</span>
            </h2>
            <p className="text-[var(--t2)]">راقب أداء منشأتك في الوقت الفعلي</p>
          </div>

          {/* Dashboard Mockup */}
          <div className="rounded-2xl border border-[var(--bg4)] bg-[var(--card)] p-6 overflow-hidden">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[var(--bg4)]">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center text-white font-bold">
                  س
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--t1)]">
                    مجمع الشفاء الطبي
                  </h4>
                  <p className="text-xs text-[var(--t3)]">آخر تحديث: الآن</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: "var(--green)" }}
                ></span>
                <span className="text-sm" style={{ color: "var(--green)" }}>
                  نشط
                </span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-[var(--bg2)]">
                <p className="text-[var(--t3)] text-sm mb-1">المكالمات اليوم</p>
                <p className="text-2xl font-bold text-[var(--t1)]">127</p>
                <p className="text-xs" style={{ color: "var(--green)" }}>
                  ↑ 12% من أمس
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[var(--bg2)]">
                <p className="text-[var(--t3)] text-sm mb-1">معدل الرد</p>
                <p
                  className="text-2xl font-bold"
                  style={{ color: "var(--green)" }}
                >
                  98.5%
                </p>
                <p className="text-xs text-[var(--t2)]">الهدف: 95%</p>
              </div>

              <div className="p-4 rounded-xl bg-[var(--bg2)]">
                <p className="text-[var(--t3)] text-sm mb-1">حجوزات جديدة</p>
                <p className="text-2xl font-bold text-[var(--t1)]">34</p>
                <p className="text-xs" style={{ color: "var(--green)" }}>
                  ↑ 8 عن أمس
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[var(--bg2)]">
                <p className="text-[var(--t3)] text-sm mb-1">رضا المرضى</p>
                <p
                  className="text-2xl font-bold"
                  style={{ color: "var(--orange)" }}
                >
                  4.8
                </p>
                <p className="text-xs text-[var(--t2)]">من 5.0</p>
              </div>
            </div>

            {/* Activity Feed */}
            <div className="space-y-3">
              <h5 className="text-sm font-semibold text-[var(--t2)] mb-3">
                آخر النشاطات
              </h5>

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
                  className="flex items-center gap-4 p-3 rounded-lg bg-[var(--bg2)]"
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{
                      background:
                        activity.type === "success"
                          ? "var(--green)"
                          : activity.type === "warning"
                            ? "var(--orange)"
                            : "var(--blue)",
                    }}
                  ></div>

                  <div className="flex-1">
                    <p className="text-sm text-[var(--t1)]">
                      {activity.action}
                    </p>
                    <p className="text-xs text-[var(--t3)]">
                      {activity.detail}
                    </p>
                  </div>

                  <span className="text-xs text-[var(--t3)]">
                    {activity.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* ==================== PRICING ==================== */}
      <section id="pricing" className={`py-20 ${sectionSoft}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              أسعار <span className="gradient-text">شفافة وواضحة</span>
            </h2>
            <p className={muted}>ابدأ مجاناً، ترقّى حسب نموك</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Starter */}
            <div className={`p-6 rounded-2xl ${card}`}>
              <div
                className="text-sm font-medium mb-2"
                style={{ color: "var(--accent3)" }}
              >
                Starter
              </div>
              <div className="mb-4">
                <span className="text-4xl font-bold text-[var(--t1)]">
                  1,500
                </span>
                <span className={`ml-2 ${muted}`}>ر.س/شهر</span>
              </div>
              <p className={`${muted} text-sm mb-6`}>مثالي للعيادات الفردية</p>
              <ul className={`space-y-3 mb-6 ${muted}`}>
                <li className="flex items-center gap-2 text-sm">
                  <span style={{ color: "var(--green)" }}>✓</span>
                  <span>حتى 50 مكالمة يومياً</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span style={{ color: "var(--green)" }}>✓</span>
                  <span>حجز مواعيد آلي</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span style={{ color: "var(--green)" }}>✓</span>
                  <span>تذكيرات واتساب</span>
                </li>
                <li className={`flex items-center gap-2 text-sm ${subtle}`}>
                  <span>✗</span>
                  <span>تكامل HIS/EMR</span>
                </li>
              </ul>
              <button className="w-full py-3 rounded-xl font-medium transition-colors gradient-bg text-white">
                ابدأ مجاناً
              </button>
            </div>

            {/* Pro - Popular */}
            <div
              className="p-6 rounded-2xl relative"
              style={{
                background:
                  "linear-gradient(180deg, rgba(90,24,154,0.12), rgba(255,255,255,0))",
                border: "2px solid var(--accent2)",
              }}
            >
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-sm font-medium rounded-full text-white"
                style={{ background: "var(--accent)" }}
              >
                الأكثر شعبية
              </div>

              <div
                className="text-sm font-medium mb-2"
                style={{ color: "var(--accent3)" }}
              >
                Pro
              </div>
              <div className="mb-4">
                <span className="text-4xl font-bold text-[var(--t1)]">
                  3,500
                </span>
                <span className={`ml-2 ${muted}`}>ر.س/شهر</span>
              </div>
              <p className={`${muted} text-sm mb-6`}>للمجمعات الطبية</p>
              <ul className={`space-y-3 mb-6 ${muted}`}>
                <li className="flex items-center gap-2 text-sm">
                  <span style={{ color: "var(--green)" }}>✓</span>
                  <span>حتى 150 مكالمة يومياً</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span style={{ color: "var(--green)" }}>✓</span>
                  <span>كل مميزات Starter</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span style={{ color: "var(--green)" }}>✓</span>
                  <span>تكامل HIS/EMR</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span style={{ color: "var(--green)" }}>✓</span>
                  <span>تقارير متقدمة</span>
                </li>
              </ul>
              <button className="w-full py-3 rounded-xl font-medium gradient-bg text-white glow">
                ابدأ الآن
              </button>
            </div>

            {/* Business */}
            <div className={`p-6 rounded-2xl ${card}`}>
              <div
                className="text-sm font-medium mb-2"
                style={{ color: "var(--accent3)" }}
              >
                Business
              </div>
              <div className="mb-4">
                <span className="text-4xl font-bold text-[var(--t1)]">
                  7,500
                </span>
                <span className={`ml-2 ${muted}`}>ر.س/شهر</span>
              </div>
              <p className={`${muted} text-sm mb-6`}>
                للمستشفيات والمنشآت الكبيرة
              </p>
              <ul className={`space-y-3 mb-6 ${muted}`}>
                <li className="flex items-center gap-2 text-sm">
                  <span style={{ color: "var(--green)" }}>✓</span>
                  <span>مكالمات غير محدودة</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span style={{ color: "var(--green)" }}>✓</span>
                  <span>كل مميزات Pro</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span style={{ color: "var(--green)" }}>✓</span>
                  <span>مدير حساب مخصص</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span style={{ color: "var(--green)" }}>✓</span>
                  <span>SLA مضمون 99.9%</span>
                </li>
              </ul>
              <button className="w-full py-3 rounded-xl font-medium transition-colors gradient-bg text-white">
                تواصل معنا
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
