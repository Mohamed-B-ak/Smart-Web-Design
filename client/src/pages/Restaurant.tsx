import React, { useState, useEffect } from "react";

const SondosInsurance = () => {
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

  const colors = {
    primary: "#5B4E9F",
    primaryLight: "#6B5BB3",
    accent: "#7C6FBF",
    bgLight: "#EDE9F9",
    bgLighter: "#F7F5FC",
    textDark: "#2D2654",
    textMuted: "#6B6B8D",
    white: "#FFFFFF",
    success: "#10B981",
    warning: "#F59E0B",
    danger: "#EF4444",
  };

  const segments = [
    {
      id: "auto",
      name: "تأمين السيارات",
      icon: "🚗",
      description: "تأمين شامل وضد الغير",
      painPoints: [
        "استفسارات متكررة عن التغطية والأسعار",
        "بلاغات الحوادث تحتاج استجابة فورية",
        "تذكير العملاء بالتجديد يستهلك الفريق",
      ],
      solutions: [
        "عروض أسعار فورية حسب بيانات السيارة",
        "استقبال بلاغات الحوادث 24/7 مع جمع التفاصيل",
        "تذكيرات تلقائية قبل انتهاء الوثيقة",
      ],
      stats: { quotes: "+200%", claims: "24/7", renewal: "+35%" },
      useCases: [
        "عروض الأسعار",
        "بلاغات الحوادث",
        "تجديد الوثائق",
        "استفسارات التغطية",
      ],
    },
    {
      id: "health",
      name: "التأمين الصحي",
      icon: "🏥",
      description: "تأمين طبي للأفراد والشركات",
      painPoints: [
        "أسئلة كثيرة عن الشبكة الطبية والتغطية",
        "موافقات مسبقة تحتاج متابعة",
        "شكاوى تأخر الموافقات",
      ],
      solutions: [
        "معلومات فورية عن المستشفيات والتغطية",
        "متابعة حالة الموافقات تلقائياً",
        "تصعيد الشكاوى العاجلة للمختصين",
      ],
      stats: { satisfaction: "94%", response: "< 10 ثوانٍ", resolution: "85%" },
      useCases: [
        "الشبكة الطبية",
        "الموافقات المسبقة",
        "حدود التغطية",
        "إضافة تابعين",
      ],
    },
    {
      id: "property",
      name: "تأمين الممتلكات",
      icon: "🏠",
      description: "منازل، مباني، تجاري",
      painPoints: [
        "تقييم المخاطر يحتاج معلومات كثيرة",
        "بلاغات الأضرار تحتاج توثيق سريع",
        "تجديدات سنوية كثيرة",
      ],
      solutions: [
        "جمع معلومات التقييم بمحادثة ذكية",
        "استقبال البلاغات مع الصور والتفاصيل",
        "حملات تجديد آلية ومتابعة",
      ],
      stats: { assessment: "-70% وقت", claims: "فوري", retention: "+40%" },
      useCases: [
        "تقييم الممتلكات",
        "بلاغات الأضرار",
        "التجديد السنوي",
        "تعديل التغطية",
      ],
    },
    {
      id: "life",
      name: "تأمين الحياة",
      icon: "💚",
      description: "حماية وادخار",
      painPoints: [
        "منتجات معقدة تحتاج شرح مفصل",
        "عملاء محتملين يحتاجون متابعة طويلة",
        "استفسارات عن المستفيدين والقيمة",
      ],
      solutions: [
        "شرح مبسط للمنتجات حسب احتياج العميل",
        "تأهيل ومتابعة العملاء المحتملين",
        "خدمة المستفيدين والورثة بحساسية",
      ],
      stats: { leads: "+60%", conversion: "+25%", NPS: "4.8⭐" },
      useCases: [
        "شرح المنتجات",
        "تأهيل العملاء",
        "خدمة المستفيدين",
        "تعديل الوثائق",
      ],
    },
    {
      id: "travel",
      name: "تأمين السفر",
      icon: "✈️",
      description: "سفر وطوارئ",
      painPoints: [
        "طلبات عاجلة قبل السفر مباشرة",
        "حالات طوارئ في الخارج",
        "استفسارات التغطية الدولية",
      ],
      solutions: [
        "إصدار فوري للوثائق 24/7",
        "خط طوارئ يعمل بكل اللغات",
        "معلومات واضحة عن التغطية في كل بلد",
      ],
      stats: { issuance: "فوري", emergency: "24/7", languages: "3+" },
      useCases: [
        "إصدار الوثائق",
        "حالات الطوارئ",
        "تمديد التغطية",
        "المطالبات",
      ],
    },
    {
      id: "broker",
      name: "وسطاء التأمين",
      icon: "🤝",
      description: "وساطة وتسويق",
      painPoints: [
        "مقارنة عروض شركات متعددة",
        "متابعة عملاء كثيرين",
        "تجديدات من شركات مختلفة",
      ],
      solutions: [
        "عروض مقارنة من كل الشركات فوراً",
        "إدارة محفظة العملاء بالكامل",
        "تذكيرات موحدة لكل التجديدات",
      ],
      stats: { comparison: "فوري", portfolio: "مركزي", efficiency: "+80%" },
      useCases: ["مقارنة العروض", "إدارة المحفظة", "التجديدات", "خدمة العملاء"],
    },
  ];

  const features = [
    {
      icon: "💬",
      title: "عروض أسعار فورية",
      description:
        "العميل يذكر بيانات سيارته أو عمره ويحصل على عرض سعر تقريبي في ثوانٍ",
      highlight: "< 30 ثانية",
    },
    {
      icon: "🚨",
      title: "استقبال البلاغات 24/7",
      description:
        "حادث في منتصف الليل؟ سندس يستقبل البلاغ، يجمع التفاصيل، ويفتح المطالبة",
      highlight: "لا انتظار",
    },
    {
      icon: "🔔",
      title: "تذكير التجديد الذكي",
      description:
        "اتصالات تلقائية قبل انتهاء الوثيقة بشهر، أسبوعين، وأيام - مع عرض خاص",
      highlight: "+35% تجديد",
    },
    {
      icon: "📋",
      title: "متابعة المطالبات",
      description:
        "العميل يسأل عن مطالبته ويحصل على آخر التحديثات فوراً من النظام",
      highlight: "شفافية كاملة",
    },
    {
      icon: "🎯",
      title: "تأهيل العملاء المحتملين",
      description:
        "أسئلة ذكية تحدد احتياج العميل، ميزانيته، وجديته قبل التحويل للمبيعات",
      highlight: "Lead Scoring",
    },
    {
      icon: "🌐",
      title: "متعدد اللغات",
      description:
        "عربي، إنجليزي، أوردو، فلبيني - سندس يتحدث لغة عميلك في السعودية",
      highlight: "4+ لغات",
    },
  ];

  const testimonials = [
    {
      quote:
        "نسبة تجديد الوثائق كانت 68%. بعد تذكيرات سندس التلقائية ارتفعت إلى 89%. هذا يعني ملايين إضافية سنوياً.",
      name: "أ. خالد الغامدي",
      role: "مدير العمليات",
      company: "شركة الدرع للتأمين",
      image: "👨‍💼",
      metric: "+21% نسبة التجديد",
    },
    {
      quote:
        "كنا نحتاج 8 موظفين للرد على استفسارات التغطية والشبكة الطبية. الآن سندس يتعامل مع 85% منها بدقة عالية.",
      name: "د. سارة المطيري",
      role: "مديرة خدمة العملاء",
      company: "التعاونية للتأمين الصحي",
      image: "👩‍💼",
      metric: "توفير 85% من الاستفسارات",
    },
    {
      quote:
        "بلاغات الحوادث كانت كابوس خارج ساعات العمل. الآن سندس يستقبلها 24/7 ويجهز الملف كامل لفريقنا صباحاً.",
      name: "أ. فهد العتيبي",
      role: "مدير المطالبات",
      company: "وقاية للتأمين",
      image: "🧔",
      metric: "24/7 استقبال بلاغات",
    },
  ];

  const faqs = [
    {
      q: "كيف يعطي سندس عروض أسعار؟",
      a: "سندس يسأل العميل عن البيانات المطلوبة (نوع السيارة، سنة الصنع، العمر، تاريخ المطالبات) ثم يستخدم API للاتصال بنظام التسعير الخاص بك ويعطي عرض سعر فوري. يمكن تخصيصه ليعطي نطاق سعري أو سعر دقيق حسب تفضيلكم.",
    },
    {
      q: "هل يستطيع استقبال بلاغات الحوادث؟",
      a: "نعم! سندس يجمع كل التفاصيل: مكان الحادث، الأطراف المتورطة، الإصابات، الأضرار، ومعلومات الاتصال. يمكنه طلب صور عبر واتساب ويفتح المطالبة في نظامكم تلقائياً. الحالات العاجلة (إصابات خطيرة) يحولها فوراً لفريق الطوارئ.",
    },
    {
      q: "كيف يتعامل مع استفسارات التغطية المعقدة؟",
      a: "سندس مدرّب على وثائقكم وشروط التغطية. يجيب على الأسئلة الشائعة بدقة. للحالات المعقدة أو الاستثناءات، يجمع تفاصيل الحالة ويحولها لمختص مع ملخص كامل. هدفنا حل 80% من الاستفسارات تلقائياً.",
    },
    {
      q: "هل يتكامل مع أنظمة التأمين الموجودة؟",
      a: "نعم، سندس يتكامل مع أشهر أنظمة إدارة التأمين (Policy Administration Systems) وأنظمة المطالبات. كذلك يتكامل مع نجم، ونظام ساما، وأنظمة CRM. نوفر API مرن للتكامل مع أي نظام.",
    },
    {
      q: "ماذا عن خصوصية بيانات العملاء؟",
      a: "أمان البيانات أولويتنا. نلتزم بمتطلبات البنك المركزي (ساما) ونظام حماية البيانات الشخصية (PDPL). كل البيانات مشفرة، والخوادم في السعودية، مع صلاحيات وصول محددة وسجلات مراجعة كاملة.",
    },
    {
      q: "كم يستغرق التفعيل؟",
      a: "التفعيل الأساسي (استفسارات عامة) خلال أسبوع. التكاملات مع أنظمة التسعير والمطالبات تحتاج 2-4 أسابيع. نوفر فريق تنفيذ مخصص لضمان نجاح المشروع.",
    },
  ];

  const stats = [
    { value: "1M+", label: "مكالمة تأمينية شهرياً", icon: "📞" },
    { value: "30+", label: "شركة تأمين", icon: "🏢" },
    { value: "+35%", label: "زيادة في التجديد", icon: "🔄" },
    { value: "24/7", label: "استقبال البلاغات", icon: "🚨" },
  ];

  const insuranceJourney = [
    {
      stage: "الاستفسار",
      icon: "❓",
      traditional: "انتظار 5+ دقائق للرد",
      sondos: "رد فوري في 3 ثوانٍ",
      improvement: "-99% وقت",
    },
    {
      stage: "عرض السعر",
      icon: "💰",
      traditional: "طلب معاودة الاتصال",
      sondos: "عرض سعر فوري",
      improvement: "فوري",
    },
    {
      stage: "الإصدار",
      icon: "📄",
      traditional: "إجراءات ورقية طويلة",
      sondos: "توجيه رقمي سلس",
      improvement: "-80% وقت",
    },
    {
      stage: "البلاغ",
      icon: "🚨",
      traditional: "خارج ساعات العمل = انتظار",
      sondos: "24/7 استقبال فوري",
      improvement: "0 انتظار",
    },
    {
      stage: "المتابعة",
      icon: "📋",
      traditional: "اتصل واستفسر كل مرة",
      sondos: "تحديثات استباقية",
      improvement: "شفافية",
    },
    {
      stage: "التجديد",
      icon: "🔔",
      traditional: "قد ينسى العميل",
      sondos: "تذكير ذكي + عرض",
      improvement: "+35%",
    },
  ];

  const integrations = [
    { name: "نجم", icon: "🚗", type: "حوادث" },
    { name: "ساما", icon: "🏛️", type: "تنظيمي" },
    { name: "Salesforce", icon: "☁️", type: "CRM" },
    { name: "Duck Creek", icon: "🦆", type: "إدارة وثائق" },
    { name: "Guidewire", icon: "🔧", type: "مطالبات" },
    { name: "WhatsApp", icon: "💬", type: "تواصل" },
    { name: "Elm", icon: "🌳", type: "تكامل حكومي" },
    { name: "Absher", icon: "🆔", type: "تحقق" },
  ];

  const useCases = [
    {
      title: "🚗 بلاغ حادث سيارة",
      conversation: [
        { role: "ai", text: "أهلاً! شركة الدرع للتأمين، كيف أقدر أساعدك؟" },
        { role: "user", text: "صار لي حادث وأبغى أبلّغ" },
        {
          role: "ai",
          text: "أتمنى سلامتك! 🙏 خلني أساعدك في البلاغ.\n\nأولاً: هل فيه إصابات لك أو للطرف الثاني؟",
        },
        { role: "user", text: "لا الحمدلله ما فيه إصابات" },
        { role: "ai", text: "الحمدلله على السلامة.\n\nرقم وثيقتك التأمينية؟" },
        { role: "user", text: "123456789" },
        { role: "ai", text: "تمام، أشوف وثيقتك سارية. 👍\n\nوين مكان الحادث؟" },
        { role: "user", text: "طريق الملك فهد تقاطع العليا" },
        {
          role: "ai",
          text: "ممتاز. تقدر ترسل لي صور الأضرار على واتساب؟ رقم: 05XXXXXXXX\n\nوسأرسل لك رابط تقرير نجم لتعبئته. رقم المطالمة: CLM-2024-78543",
        },
      ],
    },
    {
      title: "🔔 تذكير تجديد",
      conversation: [
        {
          role: "ai",
          text: "السلام عليكم أخ محمد! معاك سندس من شركة الأمان للتأمين.\n\nأذكرك إن تأمين سيارتك ينتهي بعد أسبوعين (15 مارس). 📅",
        },
        { role: "user", text: "إيه صحيح، كم التجديد؟" },
        {
          role: "ai",
          text: "لأنك عميل بدون مطالبات هالسنة، عندك خصم VIP! 🌟\n\nتجديد شامل: 2,400 ر.س (بدل 3,200)\nضد الغير: 950 ر.س\n\nتبي أجدد لك الشامل؟",
        },
        { role: "user", text: "إيه جدد الشامل" },
        {
          role: "ai",
          text: "تم! ✅ أرسلت لك رابط الدفع على واتساب.\n\nبعد الدفع، وثيقتك الجديدة توصلك خلال دقائق. شكراً لثقتك فينا! 💜",
        },
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
    const monthlyCallCost = dailyCalls * 30 * callCostTraditional;
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

  return (
    <div className="min-h-screen bg-white font-sans" dir="rtl">
      {/* ==================== HERO SECTION ==================== */}
      <section
        className="relative pt-24 pb-20 overflow-hidden"
        style={{ background: colors.bgLighter }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl opacity-40"
            style={{ background: colors.bgLight }}
          ></div>
          <div
            className="absolute bottom-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-30"
            style={{ background: colors.accent }}
          ></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center min-h-[70vh] justify-center">
            <div className="text-center w-full">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
                style={{
                  background: colors.white,
                  color: colors.primary,
                  boxShadow: "0 2px 12px rgba(91, 78, 159, 0.15)",
                }}
              >
                <span className="text-lg">🛡️</span>
                <span>حلول ذكية لقطاع التأمين</span>
              </div>

              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                style={{ color: colors.textDark }}
              >
                ارفع نسبة
                <span
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {" "}
                  التجديد 35%{" "}
                </span>
                <br />
                وقلّل تكلفة الدعم 70%
              </h1>

              <p
                className="text-lg sm:text-xl mb-10 leading-relaxed max-w-2xl mx-auto"
                style={{ color: colors.textMuted }}
              >
                سندس يتعامل مع استفسارات العملاء، يستقبل البلاغات 24/7، ويذكّر
                بالتجديد تلقائياً - بينما فريقك يركز على الحالات المهمة
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-10">
                {[
                  { value: "+35%", label: "نسبة التجديد", icon: "🔄" },
                  { value: "24/7", label: "استقبال البلاغات", icon: "🚨" },
                  { value: "80%", label: "أتمتة الاستفسارات", icon: "🤖" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="px-5 py-4 rounded-2xl text-center"
                    style={{
                      background: "white",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                    }}
                  >
                    <div className="text-2xl mb-1">{stat.icon}</div>
                    <div
                      className="text-xl font-bold"
                      style={{ color: colors.primary }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="text-xs"
                      style={{ color: colors.textMuted }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* ===== SINGLE BUTTON (Hero) ===== */}
              <div className="flex justify-center">
                <a href="/demo">
                  <button
                    className="px-10 py-4 rounded-2xl font-semibold text-lg text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                    style={{
                      background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                      boxShadow: `0 10px 40px ${colors.primary}40`,
                    }}
                  >
                    احجز عرضك التجريبي
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full h-16"
          >
            <path
              d="M0 100L60 90C120 80 240 60 360 55C480 50 600 60 720 65C840 70 960 70 1080 65C1200 60 1320 50 1380 45L1440 40V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* ==================== STATS SECTION ==================== */}
      <section id="stats-section" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div
                  className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl transition-transform group-hover:scale-110"
                  style={{ background: colors.bgLight }}
                >
                  {stat.icon}
                </div>
                <div
                  className="text-3xl sm:text-4xl font-bold mb-2"
                  style={{ color: colors.primary }}
                >
                  {statsVisible ? stat.value : "0"}
                </div>
                <div
                  className="text-sm font-medium"
                  style={{ color: colors.textMuted }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CUSTOMER JOURNEY ==================== */}
      <section
        id="رحلة العميل"
        className="py-24"
        style={{ background: colors.bgLighter }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: colors.textDark }}
            >
              تحسين كل مرحلة في
              <span
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {" "}
                رحلة العميل
              </span>
            </h2>
            <p style={{ color: colors.textMuted }}>
              سندس يحسّن تجربة العميل في كل نقطة تواصل
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insuranceJourney.map((stage, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-4">{stage.icon}</div>
                <h3
                  className="font-bold text-lg mb-4"
                  style={{ color: colors.textDark }}
                >
                  {stage.stage}
                </h3>
                <div className="space-y-3">
                  <div
                    className="p-3 rounded-lg"
                    style={{ background: "#FEE2E2" }}
                  >
                    <div
                      className="text-xs font-medium mb-1"
                      style={{ color: "#991B1B" }}
                    >
                      ❌ تقليدي
                    </div>
                    <div className="text-sm" style={{ color: "#7F1D1D" }}>
                      {stage.traditional}
                    </div>
                  </div>
                  <div
                    className="p-3 rounded-lg"
                    style={{ background: colors.bgLight }}
                  >
                    <div
                      className="text-xs font-medium mb-1"
                      style={{ color: colors.primary }}
                    >
                      ✓ مع سندس
                    </div>
                    <div className="text-sm" style={{ color: colors.textDark }}>
                      {stage.sondos}
                    </div>
                  </div>
                </div>
                <div
                  className="mt-4 text-center py-2 rounded-full font-bold text-sm"
                  style={{
                    background: colors.success + "20",
                    color: colors.success,
                  }}
                >
                  التحسين: {stage.improvement}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SEGMENTS SECTION ==================== */}
      <section id="الحلول" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: colors.textDark }}
            >
              حلول لكل نوع
              <span
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {" "}
                تأمين
              </span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {segments.map((segment, idx) => (
              <button
                key={segment.id}
                onClick={() => setActiveSegment(idx)}
                className="px-4 py-3 rounded-xl flex items-center gap-2 font-semibold transition-all duration-300 text-sm"
                style={{
                  background:
                    activeSegment === idx
                      ? `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`
                      : "white",
                  color: activeSegment === idx ? "white" : colors.textDark,
                  boxShadow:
                    activeSegment === idx
                      ? `0 8px 24px ${colors.primary}40`
                      : "0 2px 12px rgba(0,0,0,0.06)",
                }}
              >
                <span className="text-xl">{segment.icon}</span>
                <span className="hidden sm:inline">{segment.name}</span>
              </button>
            ))}
          </div>
          <div
            className="rounded-3xl overflow-hidden shadow-2xl"
            style={{ boxShadow: `0 20px 60px ${colors.primary}15` }}
          >
            <div className="grid md:grid-cols-2">
              <div className="p-8 sm:p-10" style={{ background: "#FEF2F2" }}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">😫</span>
                  <h3
                    className="text-xl font-bold"
                    style={{ color: "#991B1B" }}
                  >
                    التحديات
                  </h3>
                </div>
                <ul className="space-y-4">
                  {segments[activeSegment].painPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">✗</span>
                      <span style={{ color: "#7F1D1D" }}>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="p-8 sm:p-10"
                style={{ background: colors.bgLight }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">🎉</span>
                  <h3
                    className="text-xl font-bold"
                    style={{ color: colors.primary }}
                  >
                    مع سندس
                  </h3>
                </div>
                <ul className="space-y-4">
                  {segments[activeSegment].solutions.map((solution, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span style={{ color: colors.success }}>✓</span>
                      <span style={{ color: colors.textDark }}>{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              className="p-6 bg-white border-t"
              style={{ borderColor: colors.bgLight }}
            >
              <div className="flex flex-wrap items-center justify-between gap-6">
                <div>
                  <div
                    className="text-sm font-medium mb-2"
                    style={{ color: colors.textMuted }}
                  >
                    حالات الاستخدام:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {segments[activeSegment].useCases.map((useCase, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-sm"
                        style={{
                          background: colors.bgLight,
                          color: colors.primary,
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
                          style={{ color: colors.primary }}
                        >
                          {value}
                        </div>
                        <div
                          className="text-xs"
                          style={{ color: colors.textMuted }}
                        >
                          {key === "quotes"
                            ? "عروض الأسعار"
                            : key === "claims"
                              ? "البلاغات"
                              : key === "renewal"
                                ? "التجديد"
                                : key === "satisfaction"
                                  ? "الرضا"
                                  : key === "response"
                                    ? "وقت الرد"
                                    : key === "resolution"
                                      ? "الحل الفوري"
                                      : key === "assessment"
                                        ? "التقييم"
                                        : key === "retention"
                                          ? "الاحتفاظ"
                                          : key === "leads"
                                            ? "العملاء"
                                            : key === "conversion"
                                              ? "التحويل"
                                              : key === "NPS"
                                                ? "التقييم"
                                                : key === "issuance"
                                                  ? "الإصدار"
                                                  : key === "emergency"
                                                    ? "الطوارئ"
                                                    : key === "languages"
                                                      ? "اللغات"
                                                      : key === "comparison"
                                                        ? "المقارنة"
                                                        : key === "portfolio"
                                                          ? "المحفظة"
                                                          : key === "efficiency"
                                                            ? "الكفاءة"
                                                            : key}
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
      <section
        id="المميزات"
        className="py-24"
        style={{ background: colors.bgLighter }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: colors.textDark }}
            >
              مميزات مصممة
              <span
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {" "}
                لقطاع التأمين
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-3xl bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: colors.bgLight }}
                >
                  {feature.icon}
                </div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: colors.textDark }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm mb-5 leading-relaxed"
                  style={{ color: colors.textMuted }}
                >
                  {feature.description}
                </p>
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold"
                  style={{
                    background: `${colors.primary}15`,
                    color: colors.primary,
                  }}
                >
                  {feature.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== USE CASES ==================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: colors.textDark }}
            >
              شاهد سندس
              <span
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {" "}
                أثناء العمل
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, idx) => (
              <div
                key={idx}
                className="rounded-3xl overflow-hidden shadow-xl"
                style={{ background: colors.bgLighter }}
              >
                <div
                  className="px-6 py-4 font-bold flex items-center gap-2"
                  style={{ background: colors.bgLight, color: colors.textDark }}
                >
                  {useCase.title}
                </div>
                <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
                  {useCase.conversation.map((msg, i) => (
                    <div
                      key={i}
                      className={`p-4 rounded-2xl text-sm ${msg.role === "ai" ? "rounded-tr-md max-w-[85%] mr-auto" : "rounded-tl-md max-w-[75%] ml-auto"}`}
                      style={{
                        background:
                          msg.role === "ai" ? "white" : colors.primary,
                        color: msg.role === "ai" ? colors.textDark : "white",
                        whiteSpace: "pre-line",
                      }}
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

      {/* ==================== ROI CALCULATOR ==================== */}
      <section className="py-24" style={{ background: colors.bgLighter }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: colors.textDark }}
            >
              احسب
              <span
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {" "}
                عائد الاستثمار
              </span>
            </h2>
            <p style={{ color: colors.textMuted }}>
              اكتشف كم يمكنك كسبه من زيادة التجديد وتقليل تكلفة الدعم
            </p>
          </div>
          <div className="rounded-3xl p-8 sm:p-10 shadow-xl bg-white">
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              {[
                {
                  label: "المكالمات اليومية",
                  key: "dailyCalls",
                  min: 50,
                  max: 1000,
                  step: 50,
                  display: `${roiInputs.dailyCalls} مكالمة`,
                  bg: `${roiInputs.dailyCalls / 10}%`,
                },
                {
                  label: "وثائق للتجديد شهرياً",
                  key: "policyRenewals",
                  min: 100,
                  max: 5000,
                  step: 100,
                  display: `${roiInputs.policyRenewals} وثيقة`,
                  bg: `${roiInputs.policyRenewals / 50}%`,
                },
                {
                  label: "نسبة التجديد الحالية",
                  key: "renewalRate",
                  min: 50,
                  max: 85,
                  step: 1,
                  display: `${roiInputs.renewalRate}%`,
                  bg: `${(roiInputs.renewalRate - 50) * 2.8}%`,
                },
                {
                  label: "متوسط قسط التأمين (ر.س)",
                  key: "avgPremium",
                  min: 1000,
                  max: 10000,
                  step: 500,
                  display: `${roiInputs.avgPremium.toLocaleString()} ر.س`,
                  bg: `${(roiInputs.avgPremium - 1000) / 90}%`,
                },
              ].map((slider) => (
                <div key={slider.key}>
                  <label
                    className="block text-sm font-medium mb-3"
                    style={{ color: colors.textDark }}
                  >
                    {slider.label}
                  </label>
                  <input
                    type="range"
                    min={slider.min}
                    max={slider.max}
                    step={slider.step}
                    value={roiInputs[slider.key]}
                    onChange={(e) =>
                      setRoiInputs({
                        ...roiInputs,
                        [slider.key]: parseInt(e.target.value),
                      })
                    }
                    className="w-full h-3 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(90deg, ${colors.primary} ${slider.bg}, ${colors.bgLight} ${slider.bg})`,
                    }}
                  />
                  <div
                    className="text-center mt-2 text-2xl font-bold"
                    style={{ color: colors.primary }}
                  >
                    {slider.display}
                  </div>
                </div>
              ))}
            </div>
            <div
              className="p-6 rounded-2xl mb-6"
              style={{ background: colors.bgLighter }}
            >
              <div className="grid md:grid-cols-4 gap-4 text-center">
                {[
                  {
                    label: "إيرادات تجديد إضافية",
                    value: `+${roiResults.additionalRevenue.toLocaleString()} ر.س`,
                    sub: "شهرياً",
                    color: colors.success,
                  },
                  {
                    label: "توفير تكلفة الدعم",
                    value: `${roiResults.supportSavings.toLocaleString()} ر.س`,
                    sub: "شهرياً",
                    color: colors.primary,
                  },
                  {
                    label: "تكلفة سندس",
                    value: `${roiResults.sondosCost.toLocaleString()} ر.س`,
                    sub: "شهرياً",
                    color: colors.accent,
                  },
                  {
                    label: "نسبة التجديد الجديدة",
                    value: `${roiResults.newRenewalRate}%`,
                    sub: `+${roiResults.newRenewalRate - roiInputs.renewalRate}%`,
                    color: colors.success,
                  },
                ].map((card, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white">
                    <div
                      className="text-xs mb-1"
                      style={{ color: colors.textMuted }}
                    >
                      {card.label}
                    </div>
                    <div
                      className="text-xl font-bold"
                      style={{ color: card.color }}
                    >
                      {card.value}
                    </div>
                    <div
                      className="text-xs"
                      style={{ color: colors.textMuted }}
                    >
                      {card.sub}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="p-6 rounded-2xl text-center"
              style={{
                background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
              }}
            >
              <div className="text-white/80 mb-2">صافي العائد الشهري</div>
              <div className="text-white text-5xl font-bold mb-2">
                +{roiResults.netGain.toLocaleString()} ر.س
              </div>
              <div className="text-white/80 text-sm">
                ROI: {roiResults.roi}% | +{roiResults.additionalPolicies} وثيقة
                مُجددة إضافية
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== INTEGRATIONS ==================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: colors.textDark }}
            >
              يتكامل مع
              <span
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {" "}
                أنظمة التأمين
              </span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {integrations.map((int, idx) => (
              <div
                key={idx}
                className="px-6 py-4 rounded-2xl bg-white border-2 text-center transition-all hover:shadow-xl hover:-translate-y-1"
                style={{ borderColor: colors.bgLight }}
              >
                <div className="text-3xl mb-2">{int.icon}</div>
                <div
                  className="font-semibold"
                  style={{ color: colors.textDark }}
                >
                  {int.name}
                </div>
                <div
                  className="text-xs mt-1"
                  style={{ color: colors.textMuted }}
                >
                  {int.type}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="py-24" style={{ background: colors.bgLighter }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: colors.textDark }}
            >
              قصص نجاح
              <span
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {" "}
                شركات التأمين
              </span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto p-10 sm:p-14 rounded-3xl shadow-2xl relative bg-white">
            <div
              className="absolute top-6 right-8 text-8xl font-serif opacity-10"
              style={{ color: colors.primary }}
            >
              "
            </div>
            <p
              className="text-xl sm:text-2xl leading-relaxed mb-8"
              style={{ color: colors.textDark }}
            >
              {testimonials[currentTestimonial].quote}
            </p>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                  }}
                >
                  {testimonials[currentTestimonial].image}
                </div>
                <div>
                  <div
                    className="font-bold text-lg"
                    style={{ color: colors.textDark }}
                  >
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-sm" style={{ color: colors.textMuted }}>
                    {testimonials[currentTestimonial].role} •{" "}
                    {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
              <div
                className="px-4 py-2 rounded-xl font-bold"
                style={{
                  background: colors.success + "20",
                  color: colors.success,
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
                        ? `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`
                        : colors.primary + "30",
                    width: currentTestimonial === idx ? "32px" : "12px",
                  }}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PRICING ==================== 
      <section id="الأسعار" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: colors.textDark }}
            >
              باقات
              <span
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {" "}
                شركات التأمين
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div
              className="p-8 rounded-3xl bg-white border-2 transition-all hover:shadow-xl"
              style={{ borderColor: colors.bgLight }}
            >
              <div
                className="text-sm font-bold mb-3"
                style={{ color: colors.primary }}
              >
                شركة ناشئة
              </div>
              <div className="mb-2">
                <span
                  className="text-5xl font-bold"
                  style={{ color: colors.textDark }}
                >
                  15,000
                </span>
                <span style={{ color: colors.textMuted }} className="mr-1">
                  {" "}
                  ر.س/شهر
                </span>
              </div>
              <p className="text-sm mb-8" style={{ color: colors.textMuted }}>
                حتى 200 مكالمة يومياً
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "استفسارات التغطية",
                  "عروض أسعار أولية",
                  "تذكيرات التجديد",
                  "تقارير أساسية",
                  "دعم فني",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm"
                    style={{ color: colors.textMuted }}
                  >
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center text-xs"
                      style={{
                        background: colors.bgLight,
                        color: colors.primary,
                      }}
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <button
                className="w-full py-4 rounded-2xl font-semibold border-2 transition-all hover:shadow-lg"
                style={{ borderColor: colors.primary, color: colors.primary }}
              >
                ابدأ الآن
              </button>
            </div>

            <div
              className="p-8 rounded-3xl relative shadow-2xl scale-105"
              style={{
                background: `linear-gradient(180deg, ${colors.bgLight}, white)`,
                border: `2px solid ${colors.primary}`,
                boxShadow: `0 20px 60px ${colors.primary}30`,
              }}
            >
              <div
                className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full text-xs font-bold text-white"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                }}
              >
                الأكثر شعبية ⭐
              </div>
              <div
                className="text-sm font-bold mb-3 mt-2"
                style={{ color: colors.primary }}
              >
                شركة متوسطة
              </div>
              <div className="mb-2">
                <span
                  className="text-5xl font-bold"
                  style={{ color: colors.textDark }}
                >
                  28,000
                </span>
                <span style={{ color: colors.textMuted }} className="mr-1">
                  {" "}
                  ر.س/شهر
                </span>
              </div>
              <p className="text-sm mb-8" style={{ color: colors.textMuted }}>
                حتى 500 مكالمة يومياً
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "كل مميزات الناشئة",
                  "استقبال البلاغات 24/7",
                  "تكامل نظام الوثائق",
                  "متابعة المطالبات",
                  "تحليلات متقدمة",
                  "أولوية في الدعم",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm"
                    style={{ color: colors.textMuted }}
                  >
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center text-xs text-white"
                      style={{ background: colors.primary }}
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <button
                className="w-full py-4 rounded-2xl font-semibold text-white transition-all hover:shadow-xl"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                  boxShadow: `0 8px 24px ${colors.primary}40`,
                }}
              >
                ابدأ الآن
              </button>
            </div>

            <div
              className="p-8 rounded-3xl bg-white border-2 transition-all hover:shadow-xl"
              style={{ borderColor: colors.bgLight }}
            >
              <div
                className="text-sm font-bold mb-3"
                style={{ color: colors.accent }}
              >
                شركة كبيرة
              </div>
              <div className="mb-2">
                <span
                  className="text-5xl font-bold"
                  style={{ color: colors.textDark }}
                >
                  مخصص
                </span>
              </div>
              <p className="text-sm mb-8" style={{ color: colors.textMuted }}>
                مكالمات غير محدودة
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "كل مميزات المتوسطة",
                  "مدير حساب مخصص",
                  "SLA مضمون 99.9%",
                  "تكامل كامل مع الأنظمة",
                  "تدريب الفريق",
                  "دعم 24/7",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm"
                    style={{ color: colors.textMuted }}
                  >
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center text-xs"
                      style={{
                        background: colors.bgLight,
                        color: colors.accent,
                      }}
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <button
                className="w-full py-4 rounded-2xl font-semibold border-2 transition-all hover:shadow-lg"
                style={{ borderColor: colors.accent, color: colors.accent }}
              >
                تواصل معنا
              </button>
            </div>
          </div>
        </div>
      </section>*/}

      {/* ==================== FAQ ==================== */}
      <section className="py-24" style={{ background: colors.bgLighter }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: colors.textDark }}
            >
              أسئلة
              <span
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {" "}
                شائعة
              </span>
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg bg-white"
              >
                <button
                  onClick={() => setActiveFAQ(activeFAQ === idx ? null : idx)}
                  className="w-full p-6 flex items-center justify-between text-right"
                >
                  <span
                    className="font-semibold text-lg"
                    style={{ color: colors.textDark }}
                  >
                    {faq.q}
                  </span>
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 mr-4"
                    style={{
                      background:
                        activeFAQ === idx ? colors.primary : colors.bgLight,
                      color: activeFAQ === idx ? "white" : colors.primary,
                      transform:
                        activeFAQ === idx ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    ▼
                  </span>
                </button>
                {activeFAQ === idx && (
                  <div
                    className="px-6 pb-6 text-sm leading-relaxed"
                    style={{ color: colors.textMuted }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section
        className="py-24"
        style={{
          background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-6xl mb-6">🛡️</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
            جاهز ترفع نسبة التجديد
            <br />
            وتقلّل تكلفة الدعم؟
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
            انضم لأكثر من 30 شركة تأمين تستخدم سندس لتحسين تجربة العملاء وزيادة
            الإيرادات
          </p>

          {/* ===== SINGLE BUTTON (Final CTA) ===== */}
          <div className="flex justify-center">
            <a href="/demo">
              <button
                className="px-12 py-5 bg-white rounded-2xl font-bold text-lg shadow-2xl transition-all duration-300 hover:-translate-y-1"
                style={{ color: colors.primary }}
              >
                احجز عرضك التجريبي
              </button>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-12 text-white/70 text-sm">
            <span>🔗 تكامل مع نجم وساما</span>
            <span>🔒 متوافق مع PDPL</span>
            <span>📊 تقارير تنظيمية</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SondosInsurance;
