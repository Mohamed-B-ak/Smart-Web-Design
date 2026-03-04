import React, { useState, useEffect } from "react";

const SondosGovernance = () => {
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
    return () => clearInterval(interval);p
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
    gov: "#0369A1",
  };

  const segments = [
    {
      id: "government",
      name: "الجهات الحكومية",
      icon: "🏛️",
      description: "وزارات، هيئات، مؤسسات عامة",
      painPoints: [
        "حجم ضخم من استفسارات المواطنين",
        "ضغط على مراكز الاتصال الحكومية",
        "تفاوت جودة الخدمة بين الموظفين",
      ],
      solutions: [
        "أتمتة 80% من الاستفسارات الروتينية",
        "خدمة 24/7 بدون انتظار",
        "جودة موحدة ومعلومات دقيقة دائماً",
      ],
      stats: { automation: "80%", availability: "24/7", accuracy: "99.5%" },
      useCases: [
        "الاستعلام عن الخدمات",
        "حجز المواعيد",
        "متابعة المعاملات",
        "الشكاوى والبلاغات",
      ],
    },
    {
      id: "municipalities",
      name: "البلديات والأمانات",
      icon: "🏙️",
      description: "خدمات المدن والمناطق",
      painPoints: [
        "بلاغات صيانة ونظافة كثيرة",
        "استفسارات رخص البناء والمحلات",
        "شكاوى المواطنين تحتاج متابعة",
      ],
      solutions: [
        "استقبال البلاغات وتصنيفها تلقائياً",
        "معلومات فورية عن الإجراءات والمتطلبات",
        "متابعة حالة الشكاوى والبلاغات",
      ],
      stats: { reports: "فوري", tracking: "تلقائي", resolution: "+40%" },
      useCases: [
        "بلاغات النظافة",
        "رخص البناء",
        "المخالفات",
        "الاستعلام عن الخدمات",
      ],
    },
    {
      id: "healthcare",
      name: "القطاع الصحي الحكومي",
      icon: "🏥",
      description: "مستشفيات ومراكز صحية حكومية",
      painPoints: [
        "حجز المواعيد يستهلك الموظفين",
        "استفسارات عن الخدمات والتغطية",
        "متابعة نتائج الفحوصات",
      ],
      solutions: [
        "حجز وإلغاء المواعيد تلقائياً",
        "معلومات شاملة عن الخدمات المتاحة",
        "إشعارات استباقية للمرضى",
      ],
      stats: { booking: "آلي", inquiries: "-70%", noShow: "-35%" },
      useCases: [
        "حجز المواعيد",
        "نتائج الفحوصات",
        "الاستعلام عن الأطباء",
        "التأمين الصحي",
      ],
    },
    {
      id: "education",
      name: "قطاع التعليم",
      icon: "🎓",
      description: "جامعات، مدارس، تدريب",
      painPoints: [
        "استفسارات القبول والتسجيل",
        "أسئلة الطلاب عن الإجراءات",
        "دعم أولياء الأمور",
      ],
      solutions: [
        "إجابات فورية عن شروط القبول",
        "إرشاد الطلاب للإجراءات الصحيحة",
        "قناة تواصل موحدة للأهالي",
      ],
      stats: { admissions: "+50%", support: "24/7", satisfaction: "92%" },
      useCases: [
        "القبول والتسجيل",
        "الجداول الدراسية",
        "النتائج",
        "الرسوم والمدفوعات",
      ],
    },
    {
      id: "compliance",
      name: "الامتثال والرقابة",
      icon: "📋",
      description: "هيئات رقابية وتنظيمية",
      painPoints: [
        "استفسارات عن الأنظمة واللوائح",
        "طلبات التراخيص والتصاريح",
        "بلاغات المخالفات",
      ],
      solutions: [
        "شرح مبسط للأنظمة والمتطلبات",
        "إرشاد خطوة بخطوة للتراخيص",
        "استقبال وتصنيف البلاغات",
      ],
      stats: { clarity: "100%", compliance: "+45%", reports: "فوري" },
      useCases: [
        "الأنظمة واللوائح",
        "التراخيص",
        "البلاغات",
        "الاستعلام عن المخالفات",
      ],
    },
    {
      id: "publicservices",
      name: "الخدمات العامة",
      icon: "🛎️",
      description: "كهرباء، مياه، بريد",
      painPoints: [
        "فواتير واستهلاك وشكاوى",
        "طلبات التوصيل والقطع",
        "بلاغات الأعطال العاجلة",
      ],
      solutions: [
        "استعلام فوري عن الفواتير والاستهلاك",
        "طلبات الخدمة بالمحادثة",
        "بلاغات الأعطال 24/7 مع تتبع",
      ],
      stats: { billing: "فوري", requests: "آلي", outages: "24/7" },
      useCases: [
        "الفواتير",
        "طلبات الخدمة",
        "بلاغات الأعطال",
        "تغيير البيانات",
      ],
    },
  ];

  const features = [
    {
      icon: "🔐",
      title: "أمان وخصوصية حكومية",
      description:
        "متوافق مع متطلبات الأمن السيبراني الوطني وحماية البيانات الشخصية (PDPL)",
      highlight: "معتمد",
    },
    {
      icon: "🌐",
      title: "متعدد القنوات",
      description: "هاتف، واتساب، موقع، تطبيق - قناة واحدة موحدة لخدمة المواطن",
      highlight: "Omnichannel",
    },
    {
      icon: "📊",
      title: "لوحة تحكم حكومية",
      description:
        "تقارير أداء، رضا المستفيدين، أوقات الانتظار، وتحليلات متقدمة",
      highlight: "Dashboard",
    },
    {
      icon: "🎯",
      title: "تصنيف ذكي للطلبات",
      description: "تحديد نوع الطلب، الأولوية، والقسم المختص تلقائياً",
      highlight: "Smart Routing",
    },
    {
      icon: "📱",
      title: "تكامل مع الأنظمة الحكومية",
      description: "ربط مع أبشر، نفاذ، توكلنا، والأنظمة الداخلية عبر API آمن",
      highlight: "Integration",
    },
    {
      icon: "♿",
      title: "شامل وسهل الوصول",
      description: "دعم ذوي الإعاقة، كبار السن، ومتعدد اللهجات واللغات",
      highlight: "Accessibility",
    },
  ];

  const testimonials = [
    {
      quote:
        "كنا نستقبل 3000 مكالمة يومياً عن حالة المعاملات. الآن سندس يجيب 85% منها فوراً. المواطن يحصل على المعلومة بدون انتظار.",
      name: "أ. محمد العتيبي",
      role: "مدير خدمات المستفيدين",
      company: "جهة حكومية كبرى",
      image: "👨‍💼",
      metric: "85% أتمتة",
    },
    {
      quote:
        "بلاغات النظافة والصيانة كانت تضيع أحياناً. الآن سندس يستقبلها، يصنفها، ويرسلها للفريق المختص مع إحداثيات الموقع.",
      name: "م. سارة الغامدي",
      role: "مديرة مركز البلاغات",
      company: "أمانة منطقة الرياض",
      image: "👩‍💼",
      metric: "100% تتبع البلاغات",
    },
    {
      quote:
        "رضا المراجعين ارتفع من 3.2 إلى 4.6 نجوم. السبب الرئيسي: لا انتظار + معلومات دقيقة + خدمة 24/7.",
      name: "د. فهد المالكي",
      role: "المشرف العام",
      company: "مستشفى حكومي",
      image: "👨‍⚕️",
      metric: "4.6⭐ رضا المستفيدين",
    },
  ];

  const faqs = [
    {
      q: "هل سندس متوافق مع متطلبات الأمن السيبراني الحكومي؟",
      a: "نعم، سندس مصمم وفق أعلى معايير الأمان: شهادة الهيئة الوطنية للأمن السيبراني، تشفير AES-256، خوادم داخل المملكة، تحقق متعدد الطبقات، وسجلات مراجعة كاملة. متوافق مع PDPL ومتطلبات الحوكمة الرقمية.",
    },
    {
      q: "كيف يتكامل مع الأنظمة الحكومية الموجودة؟",
      a: "سندس يتكامل عبر API آمن مع: نفاذ للتحقق من الهوية، أبشر للخدمات، توكلنا، ومركز التكامل الحكومي. كذلك يتكامل مع أنظمة إدارة المعاملات (DMS)، وأنظمة تخطيط الموارد (ERP) الحكومية.",
    },
    {
      q: "هل يستطيع تنفيذ معاملات فعلية؟",
      a: "نعم، بعد التحقق من هوية المستفيد عبر نفاذ أو OTP، يمكن لسندس: حجز المواعيد، تحديث البيانات، تقديم الطلبات، ومتابعة المعاملات. كل الإجراءات تُسجَّل وتُراجَع.",
    },
    {
      q: "كيف يتعامل مع الشكاوى والبلاغات؟",
      a: "سندس يستقبل الشكوى، يجمع التفاصيل (الموقع، الصور، الوصف)، يصنفها حسب النوع والأولوية، يفتح تذكرة في النظام، ويعطي المستفيد رقم متابعة. يمكن للمستفيد الاستعلام عن حالة بلاغه لاحقاً.",
    },
    {
      q: "هل يدعم اللغة العربية واللهجات؟",
      a: "نعم، سندس يتحدث العربية الفصحى واللهجات السعودية بطلاقة (نجدية، حجازية، شرقية). كذلك يدعم الإنجليزية، الأوردو، والهندية لخدمة جميع المقيمين.",
    },
    {
      q: "ما مدة التفعيل للجهات الحكومية؟",
      a: "التفعيل الأساسي (استفسارات عامة) خلال 2-3 أسابيع. التكاملات مع الأنظمة الحكومية تحتاج 4-8 أسابيع. نوفر فريق تنفيذ مخصص للجهات الحكومية مع دعم فني على مدار الساعة.",
    },
  ];

  const stats = [
    { value: "5M+", label: "معاملة حكومية شهرياً", icon: "📋" },
    { value: "20+", label: "جهة حكومية", icon: "🏛️" },
    { value: "85%", label: "نسبة الأتمتة", icon: "🤖" },
    { value: "4.6⭐", label: "رضا المستفيدين", icon: "😊" },
  ];

  const governmentIntegrations = [
    { name: "نفاذ", icon: "🔐", type: "هوية" },
    { name: "أبشر", icon: "🆔", type: "خدمات" },
    { name: "توكلنا", icon: "📱", type: "تطبيق" },
    { name: "مركز التكامل", icon: "🔗", type: "حكومي" },
    { name: "ناجز", icon: "⚖️", type: "عدل" },
    { name: "إيجار", icon: "🏠", type: "إسكان" },
    { name: "قوى", icon: "👷", type: "عمل" },
    { name: "منصة اعتماد", icon: "💰", type: "مالية" },
  ];

  const citizenJourney = [
    {
      step: 1,
      title: "التواصل",
      icon: "📞",
      description: "المواطن يتصل أو يراسل عبر أي قناة",
      traditional: "انتظار 5-15 دقيقة",
      withSondos: "رد فوري < 3 ثوانٍ",
    },
    {
      step: 2,
      title: "التحقق",
      icon: "🔐",
      description: "التحقق من الهوية عبر نفاذ أو OTP",
      traditional: "سؤال وجواب طويل",
      withSondos: "تحقق آلي آمن",
    },
    {
      step: 3,
      title: "فهم الطلب",
      icon: "🎯",
      description: "تحديد نوع الخدمة المطلوبة",
      traditional: "تحويل بين أقسام",
      withSondos: "فهم فوري وتوجيه صحيح",
    },
    {
      step: 4,
      title: "الخدمة",
      icon: "✅",
      description: "تنفيذ الطلب أو تقديم المعلومة",
      traditional: "إجراءات يدوية",
      withSondos: "تنفيذ آلي فوري",
    },
    {
      step: 5,
      title: "المتابعة",
      icon: "📊",
      description: "تتبع حالة الطلب",
      traditional: "اتصل واستفسر كل مرة",
      withSondos: "إشعارات استباقية",
    },
  ];

  const useCaseDemo = [
    {
      title: "📋 استعلام عن معاملة",
      conversation: [
        {
          role: "ai",
          text: "السلام عليكم! خدمة المستفيدين 🏛️\nكيف أقدر أخدمك اليوم؟",
        },
        { role: "user", text: "أبغى أعرف وين وصلت معاملتي" },
        {
          role: "ai",
          text: "بكل سرور! للاستعلام عن معاملتك، أحتاج:\n\n1️⃣ رقم المعاملة\nأو\n2️⃣ رقم الهوية للتحقق",
        },
        { role: "user", text: "رقم المعاملة 1445-789456" },
        {
          role: "ai",
          text: "تم العثور على معاملتك ✅\n\n📋 نوع المعاملة: طلب تصريح\n📍 الحالة: قيد المراجعة\n🏢 القسم: إدارة التراخيص\n📅 تاريخ الاستلام: 15 يناير\n⏱️ المتوقع: خلال 5 أيام عمل\n\nتبي أرسل لك إشعار لما تتحدث الحالة؟",
        },
        { role: "user", text: "إيه" },
        {
          role: "ai",
          text: "تم تفعيل الإشعارات ✅\n\nراح توصلك رسالة على جوالك المسجل (05XX XXX XX89) عند أي تحديث.\n\nتحتاج شي ثاني؟ 😊",
        },
      ],
    },
    {
      title: "🏙️ بلاغ بلدية",
      conversation: [
        { role: "ai", text: "أهلاً بك في أمانة المنطقة! 🏙️\nكيف أقدر أساعدك؟" },
        { role: "user", text: "فيه حفرة كبيرة في الشارع عندنا" },
        {
          role: "ai",
          text: "شكراً لبلاغك! 🙏\n\nخلني أسجل البلاغ. أحتاج بعض المعلومات:\n\n📍 إيش اسم الحي والشارع؟",
        },
        { role: "user", text: "حي النرجس، شارع الأمير محمد بن سعد" },
        {
          role: "ai",
          text: "تمام! الحفرة قريبة من أي معلم؟ (مسجد، مدرسة، محل معروف)",
        },
        { role: "user", text: "قريبة من مسجد النور" },
        {
          role: "ai",
          text: "ممتاز! تقدر ترسل صورة للحفرة على واتساب (05XXXXXXXX)؟\n\nهذا يساعد الفريق يقيّم الأولوية بشكل أفضل.",
        },
        { role: "user", text: "أرسلتها" },
        {
          role: "ai",
          text: "تم استلام الصورة ✅\n\n📝 رقم البلاغ: BLD-2024-45678\n📍 الموقع: حي النرجس، شارع الأمير محمد بن سعد (قرب مسجد النور)\n🔧 النوع: صيانة طرق - حفرة\n⚡ الأولوية: عالية\n\nالفريق الفني سيتواصل معك قريباً. شكراً لمساهمتك في تحسين المدينة! 💜",
        },
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
    const callsPerEmployee = 40;
    const automationRate = 0.85;
    const remainingCalls = dailyCalls * (1 - automationRate);
    const newEmployeesNeeded = Math.ceil(remainingCalls / callsPerEmployee);
    const sondosCost =
      dailyCalls <= 500 ? 25000 : dailyCalls <= 2000 ? 60000 : 120000;
    const newStaffCost = newEmployeesNeeded * avgSalary;
    const newInfrastructure = newEmployeesNeeded * 800;
    const newTotalCost = sondosCost + newStaffCost + newInfrastructure;
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

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
            style={{
              background: colors.white,
              color: colors.primary,
              boxShadow: "0 2px 12px rgba(91, 78, 159, 0.15)",
            }}
          >
            <span className="text-lg">🏛️</span>
            <span>حلول ذكية للقطاع الحكومي</span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            style={{ color: colors.textDark }}
          >
            خدمة المستفيد
            <span
              style={{
                background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {" "}
              24/7{" "}
            </span>
            بدون انتظار
          </h1>

          <p
            className="text-lg sm:text-xl mb-10 leading-relaxed max-w-2xl mx-auto"
            style={{ color: colors.textMuted }}
          >
            سندس يتعامل مع 85% من استفسارات المواطنين تلقائياً: متابعة
            المعاملات، حجز المواعيد، استقبال البلاغات - بأمان حكومي وتكامل مع
            نفاذ
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              { value: "85%", label: "أتمتة", icon: "🤖" },
              { value: "24/7", label: "خدمة", icon: "⏰" },
              { value: "4.6⭐", label: "رضا", icon: "😊" },
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
                <div className="text-xs" style={{ color: colors.textMuted }}>
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

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {["🔐 معتمد أمنياً", "🇸🇦 خوادم محلية", "📋 متوافق PDPL"].map(
              (badge, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: colors.bgLight,
                    color: colors.primary,
                  }}
                >
                  {badge}
                </span>
              ),
            )}
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

      {/* ==================== CITIZEN JOURNEY ==================== */}
      <section
        id="رحلة المستفيد"
        className="py-24"
        style={{ background: colors.bgLighter }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: colors.textDark }}
            >
              رحلة المستفيد
              <span
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {" "}
                المُحسّنة
              </span>
            </h2>
            <p style={{ color: colors.textMuted }}>
              كيف يحسّن سندس تجربة المواطن في كل خطوة
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {citizenJourney.map((step, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all"
              >
                <div
                  className="absolute -top-3 right-4 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                  }}
                >
                  {step.step}
                </div>
                <div className="text-4xl mb-4 text-center">{step.icon}</div>
                <h3
                  className="font-bold text-center mb-2"
                  style={{ color: colors.textDark }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-xs text-center mb-4"
                  style={{ color: colors.textMuted }}
                >
                  {step.description}
                </p>
                <div className="space-y-2">
                  <div
                    className="p-2 rounded-lg text-xs"
                    style={{ background: "#FEE2E2", color: "#991B1B" }}
                  >
                    ❌ {step.traditional}
                  </div>
                  <div
                    className="p-2 rounded-lg text-xs"
                    style={{
                      background: colors.bgLight,
                      color: colors.success,
                    }}
                  >
                    ✓ {step.withSondos}
                  </div>
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
              حلول لكل
              <span
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {" "}
                قطاع حكومي
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
                          {key === "automation"
                            ? "الأتمتة"
                            : key === "availability"
                              ? "التوفر"
                              : key === "accuracy"
                                ? "الدقة"
                                : key === "reports"
                                  ? "البلاغات"
                                  : key === "tracking"
                                    ? "التتبع"
                                    : key === "resolution"
                                      ? "الحل"
                                      : key === "booking"
                                        ? "الحجز"
                                        : key === "inquiries"
                                          ? "الاستفسارات"
                                          : key === "noShow"
                                            ? "عدم الحضور"
                                            : key === "admissions"
                                              ? "القبول"
                                              : key === "support"
                                                ? "الدعم"
                                                : key === "satisfaction"
                                                  ? "الرضا"
                                                  : key === "clarity"
                                                    ? "الوضوح"
                                                    : key === "compliance"
                                                      ? "الامتثال"
                                                      : key === "billing"
                                                        ? "الفواتير"
                                                        : key === "requests"
                                                          ? "الطلبات"
                                                          : key === "outages"
                                                            ? "الأعطال"
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

      {/* ==================== SECURITY SECTION ==================== */}
      <section
        id="الأمان"
        className="py-24"
        style={{ background: colors.bgLighter }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: colors.textDark }}
            >
              أمان وحوكمة
              <span
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {" "}
                على مستوى حكومي
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🔐",
                title: "تشفير AES-256",
                desc: "كل البيانات مشفرة في النقل والتخزين بأعلى معايير التشفير",
              },
              {
                icon: "🇸🇦",
                title: "خوادم داخل المملكة",
                desc: "البيانات تبقى داخل السعودية، متوافق مع متطلبات السيادة الرقمية",
              },
              {
                icon: "📋",
                title: "متوافق PDPL",
                desc: "متوافق مع نظام حماية البيانات الشخصية السعودي",
              },
              {
                icon: "🛡️",
                title: "معتمد من NCA",
                desc: "متوافق مع متطلبات الهيئة الوطنية للأمن السيبراني",
              },
              {
                icon: "👤",
                title: "تحقق نفاذ",
                desc: "تكامل مع نفاذ للتحقق من هوية المستفيدين",
              },
              {
                icon: "📊",
                title: "سجلات مراجعة",
                desc: "تسجيل كامل لكل العمليات للمراجعة والتدقيق",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3
                  className="font-bold mb-2"
                  style={{ color: colors.textDark }}
                >
                  {item.title}
                </h3>
                <p className="text-sm" style={{ color: colors.textMuted }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FEATURES ==================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: colors.textDark }}
            >
              مميزات
              <span
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {" "}
                للقطاع الحكومي
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-3xl bg-white border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                style={{ borderColor: colors.bgLight }}
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

      {/* ==================== INTEGRATIONS ==================== */}
      <section
        id="التكاملات"
        className="py-24"
        style={{ background: colors.bgLighter }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: colors.textDark }}
            >
              تكامل مع
              <span
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {" "}
                الأنظمة الحكومية
              </span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {governmentIntegrations.map((int, idx) => (
              <div
                key={idx}
                className="px-8 py-6 rounded-2xl bg-white border-2 text-center transition-all hover:shadow-xl hover:-translate-y-1"
                style={{ borderColor: colors.bgLight }}
              >
                <div className="text-4xl mb-3">{int.icon}</div>
                <div className="font-bold" style={{ color: colors.textDark }}>
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
            {useCaseDemo.map((useCase, idx) => (
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
                <div className="p-6 space-y-4 max-h-[450px] overflow-y-auto">
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
                الوفورات المتوقعة
              </span>
            </h2>
          </div>

          <div className="rounded-3xl p-8 sm:p-10 shadow-xl bg-white">
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              {[
                {
                  label: "المكالمات/الطلبات اليومية",
                  key: "dailyCalls",
                  min: 100,
                  max: 5000,
                  step: 100,
                  display: roiInputs.dailyCalls.toLocaleString(),
                  bg: `${roiInputs.dailyCalls / 50}%`,
                },
                {
                  label: "عدد موظفي خدمة المستفيدين",
                  key: "employees",
                  min: 10,
                  max: 200,
                  step: 1,
                  display: `${roiInputs.employees} موظف`,
                  bg: `${(roiInputs.employees - 10) / 1.9}%`,
                },
                {
                  label: "متوسط الراتب الشهري (ر.س)",
                  key: "avgSalary",
                  min: 5000,
                  max: 15000,
                  step: 500,
                  display: `${roiInputs.avgSalary.toLocaleString()} ر.س`,
                  bg: `${(roiInputs.avgSalary - 5000) / 100}%`,
                },
                {
                  label: "رضا المستفيدين الحالي (%)",
                  key: "citizenSatisfaction",
                  min: 40,
                  max: 85,
                  step: 1,
                  display: `${roiInputs.citizenSatisfaction}%`,
                  bg: `${(roiInputs.citizenSatisfaction - 40) * 2.2}%`,
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
                    label: "التكلفة الحالية",
                    value: `${roiResults.currentMonthlyCost.toLocaleString()} ر.س`,
                    sub: "شهرياً",
                    color: colors.danger,
                  },
                  {
                    label: "مع سندس",
                    value: `${roiResults.newTotalCost.toLocaleString()} ر.س`,
                    sub: "شهرياً",
                    color: colors.success,
                  },
                  {
                    label: "رضا المستفيدين الجديد",
                    value: `${roiResults.newSatisfaction}%`,
                    sub: `+${roiResults.newSatisfaction - roiInputs.citizenSatisfaction}%`,
                    color: colors.primary,
                  },
                  {
                    label: "طلبات تُخدم آلياً",
                    value: roiResults.automatedCalls.toLocaleString(),
                    sub: "شهرياً",
                    color: colors.accent,
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
              <div className="text-white/80 mb-2">
                الوفورات السنوية المتوقعة
              </div>
              <div className="text-white text-5xl font-bold mb-2">
                {roiResults.annualSavings.toLocaleString()} ر.س
              </div>
              <div className="text-white/80 text-sm">
                مع تحسين رضا المستفيدين من {roiInputs.citizenSatisfaction}% إلى{" "}
                {roiResults.newSatisfaction}%
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="py-24 bg-white">
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
                الجهات الحكومية
              </span>
            </h2>
          </div>

          <div
            className="max-w-4xl mx-auto p-10 sm:p-14 rounded-3xl shadow-2xl relative"
            style={{ background: colors.bgLighter }}
          >
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
          <div className="text-6xl mb-6">🏛️</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
            جاهز لتحسين خدمة المستفيدين
            <br />
            ورفع رضاهم؟
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
            انضم لأكثر من 20 جهة حكومية تستخدم سندس لخدمة المواطنين بشكل أفضل
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
            <span>🔐 معتمد NCA</span>
            <span>🇸🇦 خوادم محلية</span>
            <span>📋 متوافق PDPL</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SondosGovernance;
