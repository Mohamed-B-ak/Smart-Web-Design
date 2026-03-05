import React, { useState, useEffect } from "react";
import "../index.css";

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

  const statKeyLabel = (key: string) =>
    ({
      automation: "الأتمتة",
      availability: "التوفر",
      accuracy: "الدقة",
      reports: "البلاغات",
      tracking: "التتبع",
      resolution: "الحل",
      booking: "الحجز",
      inquiries: "الاستفسارات",
      noShow: "عدم الحضور",
      admissions: "القبول",
      support: "الدعم",
      satisfaction: "الرضا",
      clarity: "الوضوح",
      compliance: "الامتثال",
      billing: "الفواتير",
      requests: "الطلبات",
      outages: "الأعطال",
    })[key] ?? key;

  return (
    <div
      dir="rtl"
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
            حلول ذكية للقطاع الحكومي
          </div>

          <h1 className="font-['Instrument_Sans',sans-serif] text-[clamp(38px,5.5vw,68px)] font-bold leading-[1.08] tracking-tight mb-6 animate-fade-up animation-delay-100">
            خدمة المستفيد <span className="text-[#9d4edd]">24/7</span>
            <br />
            بدون انتظار
          </h1>

          <p className="text-[clamp(16px,1.8vw,19px)] font-semibold text-[var(--t1)] max-w-[580px] mx-auto leading-relaxed mb-4 animate-fade-up animation-delay-150">
            سندس يتعامل مع 85% من استفسارات المواطنين تلقائياً: متابعة
            المعاملات، حجز المواعيد، استقبال البلاغات - بأمان حكومي وتكامل مع
            نفاذ
          </p>

          <p className="text-[clamp(14px,1.6vw,17px)] text-[var(--t2)] max-w-[680px] mx-auto leading-relaxed mb-9 animate-fade-up animation-delay-200">
            ✓ +20 جهة حكومية &nbsp;·&nbsp; ✓ 5 مليون معاملة شهرياً &nbsp;·&nbsp;
            ✓ 85% أتمتة
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-up animation-delay-300">
            {[
              { value: "85%", label: "أتمتة", icon: "🤖" },
              { value: "24/7", label: "خدمة", icon: "⏰" },
              { value: "4.6⭐", label: "رضا", icon: "😊" },
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
              احجز عرضك التجريبي
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-3 animate-fade-up animation-delay-300">
            {["🔐 معتمد أمنياً", "🇸🇦 خوادم محلية", "📋 متوافق PDPL"].map(
              (badge, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-[rgba(90,24,154,0.08)] text-[#9d4edd] border border-[rgba(90,24,154,0.15)]"
                >
                  {badge}
                </span>
              ),
            )}
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
              رحلة المستفيد <span className="text-[#9d4edd]">المُحسّنة</span>
            </h2>
            <p className="text-[var(--t2)]">
              كيف يحسّن سندس تجربة المواطن في كل خطوة
            </p>
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
      <section id="الحلول" className="py-24 px-6 bg-[var(--bg2)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Instrument_Sans',sans-serif] text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4">
              حلول لكل <span className="text-[#9d4edd]">قطاع حكومي</span>
            </h2>
            <p className="text-[var(--t2)] text-lg">
              سندس يتكيف مع طبيعة كل جهة
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
                  <h3 className="text-xl font-bold text-red-400">التحديات</h3>
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
                  <h3 className="text-xl font-bold text-[#9d4edd]">مع سندس</h3>
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
                    حالات الاستخدام:
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
      <section id="الأمان" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Instrument_Sans',sans-serif] text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4">
              أمان وحوكمة{" "}
              <span className="text-[#9d4edd]">على مستوى حكومي</span>
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
      <section id="المميزات" className="py-24 px-6 bg-[var(--bg2)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Instrument_Sans',sans-serif] text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4">
              مميزات <span className="text-[#9d4edd]">للقطاع الحكومي</span>
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
      <section id="التكاملات" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Instrument_Sans',sans-serif] text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4">
              تكامل مع <span className="text-[#9d4edd]">الأنظمة الحكومية</span>
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
              شاهد سندس <span className="text-[#9d4edd]">أثناء العمل</span>
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

      {/* ==================== ROI CALCULATOR ==================== 
      <section id="roi" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[13px] font-medium mb-3 text-[#9d4edd]">
              🧮 حاسبة مبنية على بيانات حقيقية
            </p>
            <h2 className="font-['Instrument_Sans',sans-serif] text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight">
              احسب <span className="text-[#9d4edd]">الوفورات المتوقعة</span>
            </h2>
          </div>

          <div className="rounded-3xl p-8 sm:p-10 bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border border-[rgba(90,24,154,0.15)] shadow-[0_0_60px_rgba(90,24,154,0.08)]">
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {[
                {
                  label: "المكالمات/الطلبات اليومية",
                  key: "dailyCalls",
                  min: 100,
                  max: 5000,
                  step: 100,
                  suffix: "",
                },
                {
                  label: "عدد موظفي خدمة المستفيدين",
                  key: "employees",
                  min: 10,
                  max: 200,
                  step: 1,
                  suffix: " موظف",
                },
                {
                  label: "متوسط الراتب الشهري (ر.س)",
                  key: "avgSalary",
                  min: 5000,
                  max: 15000,
                  step: 500,
                  suffix: " ر.س",
                },
                {
                  label: "رضا المستفيدين الحالي (%)",
                  key: "citizenSatisfaction",
                  min: 40,
                  max: 85,
                  step: 1,
                  suffix: "%",
                },
              ].map(({ label, key, min, max, step, suffix }) => (
                <div key={key}>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm text-[var(--t2)]">{label}</label>
                    <span className="font-bold text-[var(--t1)]">
                      {(roiInputs as any)[key].toLocaleString()}
                      {suffix}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={(roiInputs as any)[key]}
                    onChange={(e) =>
                      setRoiInputs({
                        ...roiInputs,
                        [key]: parseInt(e.target.value),
                      })
                    }
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                    style={{ background: "rgba(90,24,154,0.12)" }}
                  />
                  <div className="text-center mt-2 font-bold text-[#9d4edd]">
                    {(roiInputs as any)[key].toLocaleString()}
                    {suffix}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <div className="p-6 rounded-2xl text-center bg-[rgba(239,68,68,0.07)] border border-[rgba(239,68,68,0.2)]">
                <div className="text-sm mb-2 text-red-400">التكلفة الحالية</div>
                <div className="text-2xl font-bold text-red-500">
                  {roiResults.currentMonthlyCost.toLocaleString()} ر.س
                </div>
                <div className="text-xs text-[var(--t3)]">شهرياً</div>
              </div>
              <div className="p-6 rounded-2xl text-center bg-[rgba(16,185,129,0.07)] border border-[rgba(16,185,129,0.2)]">
                <div className="text-sm mb-2 text-emerald-600">مع سندس</div>
                <div className="text-2xl font-bold text-emerald-600">
                  {roiResults.newTotalCost.toLocaleString()} ر.س
                </div>
                <div className="text-xs text-[var(--t3)]">شهرياً</div>
              </div>
              <div className="p-6 rounded-2xl text-center bg-[rgba(90,24,154,0.06)] border border-[rgba(90,24,154,0.15)]">
                <div className="text-sm mb-2 text-[#9d4edd]">
                  رضا المستفيدين الجديد
                </div>
                <div className="text-2xl font-bold text-[#9d4edd]">
                  {roiResults.newSatisfaction}%
                </div>
                <div className="text-xs text-[var(--t3)]">
                  +{roiResults.newSatisfaction - roiInputs.citizenSatisfaction}%
                </div>
              </div>
              <div className="p-6 rounded-2xl text-center bg-[rgba(16,185,129,0.07)] border border-[rgba(16,185,129,0.2)]">
                <div className="text-sm mb-2 text-emerald-600">
                  طلبات تُخدم آلياً
                </div>
                <div className="text-2xl font-bold text-emerald-600">
                  {roiResults.automatedCalls.toLocaleString()}
                </div>
                <div className="text-xs text-[var(--t3)]">شهرياً</div>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-flex flex-wrap justify-center items-center gap-4 px-8 py-4 rounded-2xl gradient-bg">
                <span className="text-white text-lg">
                  الوفورات السنوية المتوقعة:
                </span>
                <span className="text-white text-4xl font-bold">
                  {roiResults.annualSavings.toLocaleString()} ر.س
                </span>
                <span className="text-white/80 text-sm">
                  مع تحسين رضا المستفيدين من {roiInputs.citizenSatisfaction}%
                  إلى {roiResults.newSatisfaction}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="py-24 px-6 bg-[var(--bg2)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Instrument_Sans',sans-serif] text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4">
              قصص نجاح <span className="text-[#9d4edd]">الجهات الحكومية</span>
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
              أسئلة <span className="text-[#9d4edd]">شائعة</span>
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
            جاهز لتحسين خدمة المستفيدين
            <br />
            ورفع رضاهم؟
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
            انضم لأكثر من 20 جهة حكومية تستخدم سندس لخدمة المواطنين بشكل أفضل
          </p>
          <div className="flex justify-center mb-12">
            <a
              href="/demo"
              className="inline-flex items-center gap-2 px-10 py-5 bg-[rgba(255,255,255,0.95)] rounded-2xl font-bold text-lg shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-white text-[#5a189a] shimmer"
            >
              احجز عرضك التجريبي
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-white/70 text-sm">
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
