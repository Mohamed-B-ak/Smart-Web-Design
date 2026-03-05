import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import "../index.css";

const SondosCallCenter = () => {
  const [activeSegment, setActiveSegment] = useState(0);
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [activeComparison, setActiveComparison] = useState("cost");

  const [roiInputs, setRoiInputs] = useState({
    agents: 20,
    avgSalary: 6000,
    dailyCalls: 500,
    avgHandleTime: 5,
    waitTime: 3,
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
      id: "inbound",
      name: "المكالمات الواردة",
      icon: "📞",
      description: "استقبال مكالمات العملاء والرد على الاستفسارات",
      painPoints: [
        "طوابير انتظار طويلة تُغضب العملاء",
        "تكلفة عالية للموظفين بدوام كامل",
        "جودة خدمة غير متسقة بين الموظفين",
      ],
      solutions: [
        "رد فوري بدون انتظار - 0 ثانية",
        "تكلفة ثابتة بغض النظر عن الحجم",
        "جودة موحدة 100% في كل مكالمة",
      ],
      stats: { waitTime: "0 ثانية", cost: "-70%", quality: "100%" },
      useCases: [
        "الرد على الاستفسارات",
        "حجز المواعيد",
        "الدعم الفني المبدئي",
        "توجيه المكالمات",
      ],
    },
    {
      id: "outbound",
      name: "المكالمات الصادرة",
      icon: "📱",
      description: "حملات الاتصال والمتابعة مع العملاء",
      painPoints: [
        "إنتاجية منخفضة للموظفين",
        "رفض كثير من العملاء للمكالمات",
        "صعوبة الوصول لأعداد كبيرة",
      ],
      solutions: [
        "آلاف المكالمات المتزامنة",
        "نبرة ودودة تقلل الرفض",
        "تغطية 100% للقائمة المستهدفة",
      ],
      stats: { capacity: "10x", reach: "100%", efficiency: "+300%" },
      useCases: [
        "حملات التسويق",
        "تذكير المواعيد",
        "استطلاعات الرأي",
        "متابعة العملاء",
      ],
    },
    {
      id: "support",
      name: "خدمة العملاء",
      icon: "🎧",
      description: "دعم فني وحل مشاكل العملاء",
      painPoints: [
        "أسئلة متكررة تستهلك وقت الفريق",
        "دوران عالي للموظفين",
        "تدريب مكلف ومستمر",
      ],
      solutions: [
        "حل 80% من الاستفسارات تلقائياً",
        "لا دوران، لا إجازات، لا تأخير",
        "تحديث فوري بدون تدريب",
      ],
      stats: { automation: "80%", availability: "24/7", training: "0 ر.س" },
      useCases: [
        "الأسئلة الشائعة",
        "حالة الطلبات",
        "معلومات المنتجات",
        "الشكاوى البسيطة",
      ],
    },
    {
      id: "sales",
      name: "المبيعات الهاتفية",
      icon: "💼",
      description: "تأهيل العملاء وإتمام الصفقات",
      painPoints: [
        "وقت طويل في تأهيل عملاء غير مناسبين",
        "فقدان عملاء بسبب بطء المتابعة",
        "تكلفة عالية لكل عميل مكتسب",
      ],
      solutions: [
        "تأهيل ذكي يوفر 70% من الوقت",
        "متابعة فورية = لا عميل ضائع",
        "تقليل تكلفة الاكتساب 50%",
      ],
      stats: { qualification: "+70%", followUp: "فوري", CAC: "-50%" },
      useCases: [
        "تأهيل العملاء المحتملين",
        "حجز عروض توضيحية",
        "متابعة العروض",
        "البيع المتقاطع",
      ],
    },
  ];

  const features = [
    {
      icon: "⚡",
      title: "رد فوري - 0 انتظار",
      description:
        'العميل يتصل ويحصل على رد في أقل من 3 ثوانٍ. لا طوابير، لا "جميع موظفينا مشغولون"',
      highlight: "< 3 ثوانٍ",
    },
    {
      icon: "📈",
      title: "سعة غير محدودة",
      description:
        "سواء 10 مكالمات أو 10,000 مكالمة متزامنة، سندس يتعامل معها بنفس الجودة",
      highlight: "∞ مكالمة",
    },
    {
      icon: "🎯",
      title: "تأهيل ذكي",
      description:
        "أسئلة مخصصة تحدد جدية العميل، احتياجاته، وأولويته قبل التحويل للفريق",
      highlight: "Lead Scoring",
    },
    {
      icon: "🔄",
      title: "تحويل سلس",
      description:
        "عندما يحتاج العميل موظف بشري، سندس يحوّل المكالمة مع ملخص كامل للمحادثة",
      highlight: "Warm Transfer",
    },
    {
      icon: "📊",
      title: "تحليلات متقدمة",
      description:
        "لوحة تحكم شاملة: أسباب الاتصال، معدل الحل، رضا العملاء، وتوقعات الذروة",
      highlight: "Real-time",
    },
    {
      icon: "🌐",
      title: "متعدد اللغات",
      description: "عربي فصيح، لهجات سعودية، إنجليزي - سندس يتحدث لغة عميلك",
      highlight: "3+ لغات",
    },
  ];

  const testimonials = [
    {
      quote:
        "كان عندنا 15 موظف للرد على المكالمات. الآن سندس يتعامل مع 70% منها وفريقنا يركز على الحالات المعقدة. وفرنا 40% من التكلفة.",
      name: "أ. عبدالله الشهري",
      role: "مدير مركز الاتصال",
      company: "شركة الاتصالات المتقدمة",
      image: "👨‍💼",
      metric: "توفير 40% من التكلفة",
    },
    {
      quote:
        "متوسط وقت الانتظار كان 4 دقائق. بعد سندس أصبح صفر. تقييم رضا العملاء ارتفع من 3.2 إلى 4.7 نجوم.",
      name: "أ. منى الحربي",
      role: "مديرة تجربة العملاء",
      company: "بنك الاستثمار السعودي",
      image: "👩‍💼",
      metric: "4.7⭐ رضا العملاء",
    },
    {
      quote:
        "نحتاج نتصل بـ 5000 عميل شهرياً للتذكير بالمواعيد. كان يحتاج 3 موظفين بدوام كامل. الآن سندس يعملها في ساعات.",
      name: "د. فيصل المالكي",
      role: "المدير التنفيذي",
      company: "مجمع الرعاية الطبية",
      image: "👨‍⚕️",
      metric: "5000 مكالمة/شهر آلياً",
    },
  ];

  const faqs = [
    {
      q: "هل سندس يستبدل فريق مركز الاتصال بالكامل؟",
      a: "ليس بالضرورة. سندس مصمم ليكون الخط الأول (Tier 1) - يتعامل مع 70-80% من المكالمات الروتينية ويحوّل الحالات المعقدة لفريقك. هذا يتيح لموظفيك التركيز على ما يحتاج لمسة بشرية فعلاً.",
    },
    {
      q: "كيف يتعامل مع العملاء الغاضبين؟",
      a: 'سندس مدرّب على اكتشاف نبرة الغضب أو الإحباط. في هذه الحالات، يعتذر بتعاطف، يحاول حل المشكلة، وإذا استمر الغضب، يحوّل فوراً لموظف بشري مع تنبيه "عميل يحتاج اهتمام خاص".',
    },
    {
      q: "هل يتكامل مع نظام مركز الاتصال الحالي؟",
      a: "نعم! سندس يتكامل مع أشهر أنظمة مراكز الاتصال: Genesys، Avaya، Cisco، Five9، وغيرها. كذلك يتكامل مع CRM مثل Salesforce وZoho، وأنظمة التذاكر مثل Zendesk.",
    },
    {
      q: "ماذا عن جودة الصوت واللهجة؟",
      a: "سندس يستخدم أحدث تقنيات تحويل النص لصوت (TTS) مع أصوات طبيعية جداً. متاح بالعربية الفصحى واللهجات السعودية (نجدية، حجازية، شرقية) والإنجليزية. يمكنك اختيار الصوت المناسب لعلامتك التجارية.",
    },
    {
      q: "كيف أضمن أن سندس يرد بشكل صحيح؟",
      a: "نبدأ بمرحلة تدريب نخصص فيها السيناريوهات والردود لعملك. ثم مرحلة اختبار نراقب فيها المكالمات ونحسّن. بعد الإطلاق، لديك لوحة تحكم لمراجعة المحادثات وتعديل الردود في أي وقت.",
    },
    {
      q: "ما الفرق بينكم وبين IVR التقليدي؟",
      a: 'IVR يقول "اضغط 1 للمبيعات، اضغط 2 للدعم" - محبط وبطيء. سندس يتحدث بشكل طبيعي: "كيف أقدر أساعدك؟" ويفهم ما يقوله العميل بأي طريقة. الفرق كالفرق بين الرسائل النصية والمحادثة الحقيقية.',
    },
  ];

  const stats = [
    { value: "2M+", label: "مكالمة شهرياً", icon: "📞" },
    { value: "50+", label: "مركز اتصال", icon: "🏢" },
    { value: "70%", label: "توفير في التكلفة", icon: "💰" },
    { value: "0 ثانية", label: "وقت الانتظار", icon: "⚡" },
  ];

  const comparisonData = {
    cost: {
      title: "مقارنة التكلفة الشهرية",
      traditional: [
        { item: "رواتب 20 موظف", value: "120,000 ر.س" },
        { item: "تأمينات وبدلات", value: "24,000 ر.س" },
        { item: "تدريب وتطوير", value: "8,000 ر.س" },
        { item: "معدات ومكاتب", value: "15,000 ر.س" },
        { item: "إدارة وإشراف", value: "18,000 ر.س" },
        { item: "الإجمالي", value: "185,000 ر.س", highlight: true },
      ],
      sondos: [
        { item: "اشتراك سندس", value: "25,000 ر.س" },
        { item: "5 موظفين للحالات المعقدة", value: "30,000 ر.س" },
        { item: "تأمينات وبدلات", value: "6,000 ر.س" },
        { item: "بدون تدريب إضافي", value: "0 ر.س" },
        { item: "بدون معدات إضافية", value: "0 ر.س" },
        { item: "الإجمالي", value: "61,000 ر.س", highlight: true },
      ],
      savings: "124,000 ر.س/شهر",
    },
    quality: {
      title: "مقارنة الجودة",
      traditional: [
        { item: "وقت الانتظار", value: "3-5 دقائق" },
        { item: "نسبة المكالمات المردودة", value: "75%" },
        { item: "ساعات العمل", value: "8-12 ساعة" },
        { item: "اتساق الجودة", value: "متفاوت" },
        { item: "القدرة في الذروة", value: "محدودة" },
      ],
      sondos: [
        { item: "وقت الانتظار", value: "0 ثانية" },
        { item: "نسبة المكالمات المردودة", value: "100%" },
        { item: "ساعات العمل", value: "24/7/365" },
        { item: "اتساق الجودة", value: "100%" },
        { item: "القدرة في الذروة", value: "غير محدودة" },
      ],
    },
    scale: {
      title: "مقارنة القدرة على التوسع",
      traditional: [
        { item: "وقت توظيف موظف جديد", value: "2-4 أسابيع" },
        { item: "تكلفة التوظيف", value: "5,000+ ر.س" },
        { item: "وقت التدريب", value: "2-4 أسابيع" },
        { item: "معدل دوران الموظفين", value: "30-50% سنوياً" },
        { item: "التوسع الموسمي", value: "صعب ومكلف" },
      ],
      sondos: [
        { item: "وقت زيادة السعة", value: "فوري" },
        { item: "تكلفة التوسع", value: "حسب الاستخدام" },
        { item: "وقت التدريب", value: "ساعات" },
        { item: "معدل الدوران", value: "0%" },
        { item: "التوسع الموسمي", value: "تلقائي ومرن" },
      ],
    },
  };

  const integrations = [
    { name: "Genesys", icon: "☁️", type: "مركز اتصال" },
    { name: "Avaya", icon: "📞", type: "مركز اتصال" },
    { name: "Cisco", icon: "🔗", type: "مركز اتصال" },
    { name: "Five9", icon: "5️⃣", type: "مركز اتصال" },
    { name: "Salesforce", icon: "☁️", type: "CRM" },
    { name: "Zoho", icon: "📊", type: "CRM" },
    { name: "Zendesk", icon: "🎫", type: "تذاكر" },
    { name: "Freshdesk", icon: "🎧", type: "تذاكر" },
    { name: "WhatsApp", icon: "💬", type: "تواصل" },
    { name: "Microsoft Teams", icon: "👥", type: "تواصل" },
  ];

  const calculateROI = () => {
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
    const currentAnswerRate = 0.75;
    const sondosAnswerRate = 1.0;
    const missedCallsRecovered =
      dailyCalls * 30 * (sondosAnswerRate - currentAnswerRate);
    return {
      currentMonthlyCost: Math.round(currentMonthlyCost),
      sondosMonthlyCost: Math.round(sondosMonthlyCost),
      monthlySavings: Math.round(monthlySavings),
      annualSavings: Math.round(annualSavings),
      savingsPercent,
      remainingAgents,
      missedCallsRecovered: Math.round(missedCallsRecovered),
    };
  };

  const roiResults = calculateROI();

  const statKeyLabel = (key: string) =>
    ({
      waitTime: "الانتظار",
      cost: "التكلفة",
      quality: "الجودة",
      capacity: "السعة",
      reach: "الوصول",
      efficiency: "الكفاءة",
      automation: "الأتمتة",
      availability: "التوفر",
      training: "التدريب",
      qualification: "التأهيل",
      followUp: "المتابعة",
      CAC: "تكلفة الاكتساب",
    })[key] ?? key;

  return (
    <div
      dir="rtl"
      className="min-h-screen font-arabic bg-[var(--bg)] text-[var(--t1)]"
    >
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-16 overflow-hidden">
        {/* gradient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(90,24,154,0.15) 0%, transparent 70%)",
          }}
        />
        {/* grid */}
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
        {/* blobs */}
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
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-[rgba(90,24,154,0.08)] border border-[rgba(90,24,154,0.2)] rounded-full text-[13px] font-medium text-[#9d4edd] mb-7 animate-fade-up backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#00d68f]" />
            مستقبل مراكز الاتصال
          </div>

          {/* Headline */}
          <h1 className="font-['Instrument_Sans',sans-serif] text-[clamp(38px,5.5vw,68px)] font-bold leading-[1.08] tracking-tight mb-6 max-w-4xl mx-auto animate-fade-up animation-delay-100">
            وفّر <span className="text-[#9d4edd]">70%</span> من تكلفة
            <br />
            مركز الاتصال
          </h1>

          {/* Subheadline */}
          <p className="text-[clamp(16px,1.8vw,19px)] font-semibold text-[var(--t1)] max-w-[580px] mx-auto leading-relaxed mb-4 animate-fade-up animation-delay-150">
            سندس يتعامل مع 75% من مكالماتك تلقائياً بجودة أعلى
          </p>

          {/* Social proof */}
          <p className="text-[clamp(14px,1.6vw,17px)] text-[var(--t2)] max-w-[680px] mx-auto leading-relaxed mb-9 animate-fade-up animation-delay-200">
            ✓ وقت انتظار صفر &nbsp;·&nbsp; ✓ 24/7 بدون انقطاع &nbsp;·&nbsp; ✓
            فريقك يركز على الحالات المهمة
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-up animation-delay-300">
            {[
              { value: "0 ثانية", label: "وقت انتظار", icon: "⚡" },
              { value: "75%", label: "أتمتة", icon: "🤖" },
              { value: "70%", label: "توفير", icon: "💰" },
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

          {/* CTA */}
          <div className="flex items-center justify-center gap-3.5 mb-12 flex-wrap animate-fade-up animation-delay-300">
            <Link
              to="/demo"
              className="group inline-flex items-center gap-2 px-8 py-3.5 text-[15px] font-semibold text-white gradient-bg glow rounded-full hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(90,24,154,0.4)] transition-all duration-300 shimmer"
            >
              احجز عرض توضيحي
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== PROBLEMS SECTION ==================== */}
      <section className="py-20 bg-[var(--bg2)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="font-['Instrument_Sans',sans-serif] text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4">
              تحديات مراكز الاتصال{" "}
              <span className="text-[#9d4edd]">التقليدية</span>
            </h2>
          </div>

          {/* Problems */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: "💸",
                title: "تكلفة باهظة",
                desc: "رواتب، تدريب، معدات، إدارة = آلاف الريالات شهرياً",
              },
              {
                icon: "⏰",
                title: "انتظار طويل",
                desc: "العملاء ينتظرون دقائق ويغادرون محبطين",
              },
              {
                icon: "🔄",
                title: "دوران الموظفين",
                desc: "30-50% يغادرون سنوياً = تدريب مستمر",
              },
              {
                icon: "📉",
                title: "جودة متفاوتة",
                desc: "كل موظف يرد بطريقته = تجربة غير موحدة",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl text-center transition-all hover:shadow-lg bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border border-[rgba(239,68,68,0.2)] hover:border-[rgba(239,68,68,0.35)]"
              >
                <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl bg-[rgba(239,68,68,0.07)]">
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
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[rgba(90,24,154,0.06)] border border-[rgba(90,24,154,0.15)]">
              <span className="text-2xl">⬇️</span>
              <span className="font-bold text-[#9d4edd]">سندس يحل كل هذا</span>
              <span className="text-2xl">⬇️</span>
            </div>
          </div>

          {/* Solutions */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "💰",
                title: "توفير 70%",
                desc: "تكلفة ثابتة ومتوقعة بدون مفاجآت",
              },
              {
                icon: "⚡",
                title: "0 انتظار",
                desc: "رد فوري على كل مكالمة في أي وقت",
              },
              {
                icon: "🔒",
                title: "استقرار 100%",
                desc: "لا إجازات، لا استقالات، لا مرض",
              },
              {
                icon: "⭐",
                title: "جودة موحدة",
                desc: "نفس المستوى الممتاز في كل مكالمة",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl text-center transition-all hover:shadow-xl hover:-translate-y-1 bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border border-[rgba(90,24,154,0.2)]"
              >
                <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl text-white gradient-bg">
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

      {/* ==================== SEGMENTS SECTION ==================== */}
      <section id="solutions" className="py-24 px-6 bg-[var(--bg2)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Instrument_Sans',sans-serif] text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4">
              حلول لكل نوع <span className="text-[#9d4edd]">مكالمات</span>
            </h2>
            <p className="text-[var(--t2)] text-lg">
              سندس يتكيف مع طبيعة مركز اتصالك
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
                  <span className="text-2xl">{segment.icon}</span>
                  <span>{segment.name}</span>
                </button>
              );
            })}
          </div>

          <div className="rounded-3xl overflow-hidden border border-[rgba(90,24,154,0.15)] shadow-[0_20px_60px_rgba(90,24,154,0.12)]">
            <div className="grid md:grid-cols-2">
              {/* pain */}
              <div className="p-8 sm:p-10 bg-[rgba(239,68,68,0.05)] border-b md:border-b-0 md:border-l border-[rgba(90,24,154,0.08)]">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">😫</span>
                  <h3 className="text-xl font-bold text-red-400">
                    التحديات الحالية
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
              <div className="flex flex-wrap justify-center gap-8">
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
      </section>

      {/* ==================== COMPARISON SECTION ==================== */}
      <section id="comparison" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Instrument_Sans',sans-serif] text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4">
              مقارنة شاملة:{" "}
              <span className="text-[#9d4edd]">تقليدي vs سندس</span>
            </h2>
          </div>

          <div className="flex justify-center gap-3 mb-10">
            {[
              { id: "cost", label: "💰 التكلفة" },
              { id: "quality", label: "⭐ الجودة" },
              { id: "scale", label: "📈 التوسع" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveComparison(tab.id)}
                className={`px-5 py-2.5 rounded-full text-[13px] font-medium transition-all duration-300 border backdrop-blur-sm ${
                  activeComparison === tab.id
                    ? "gradient-bg glow text-white border-[rgba(90,24,154,0.4)]"
                    : "bg-[rgba(90,24,154,0.04)] border-[rgba(90,24,154,0.12)] text-[var(--t2)] hover:border-[rgba(90,24,154,0.25)]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Traditional */}
            <div className="rounded-2xl overflow-hidden bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border border-[rgba(239,68,68,0.2)]">
              <div className="p-4 text-center bg-[rgba(239,68,68,0.07)] border-b border-[rgba(239,68,68,0.15)]">
                <span className="text-2xl mr-2">🏢</span>
                <span className="font-bold text-red-400">
                  مركز اتصال تقليدي
                </span>
              </div>
              <div className="p-6 space-y-3">
                {comparisonData[activeComparison].traditional.map((item, i) => (
                  <div
                    key={i}
                    className={`flex justify-between items-center p-3 rounded-lg text-sm ${
                      item.highlight
                        ? "font-bold bg-[rgba(239,68,68,0.08)] text-red-500"
                        : "bg-[rgba(90,24,154,0.03)] text-[var(--t1)]"
                    }`}
                  >
                    <span>{item.item}</span>
                    <span>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sondos */}
            <div className="rounded-2xl overflow-hidden bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border border-[rgba(90,24,154,0.3)] shadow-[0_0_40px_rgba(90,24,154,0.1)]">
              <div className="p-4 text-center gradient-bg border-b border-[rgba(90,24,154,0.15)]">
                <span className="text-2xl mr-2">🚀</span>
                <span className="font-bold text-white">مع سندس AI</span>
              </div>
              <div className="p-6 space-y-3">
                {comparisonData[activeComparison].sondos.map((item, i) => (
                  <div
                    key={i}
                    className={`flex justify-between items-center p-3 rounded-lg text-sm ${
                      item.highlight
                        ? "font-bold bg-[rgba(16,185,129,0.08)] text-emerald-600"
                        : "bg-[rgba(90,24,154,0.03)] text-[var(--t1)]"
                    }`}
                  >
                    <span>{item.item}</span>
                    <span>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {activeComparison === "cost" && (
            <div className="mt-8 p-6 rounded-2xl text-center gradient-bg glow">
              <div className="text-white/80 text-sm mb-1">التوفير الشهري</div>
              <div className="text-white text-4xl font-bold">
                {comparisonData.cost.savings}
              </div>
              <div className="text-white/80 text-sm mt-1">
                = 1,488,000 ر.س سنوياً
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ==================== FEATURES SECTION ==================== */}
      <section id="features" className="py-24 px-6 bg-[var(--bg2)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Instrument_Sans',sans-serif] text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4">
              مميزات مصممة{" "}
              <span className="text-[#9d4edd]">لمراكز الاتصال</span>
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

      {/* ==================== ROI CALCULATOR ==================== 
      <section id="roi" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[13px] font-medium mb-3 text-[#9d4edd]">
              🧮 حاسبة مبنية على بيانات حقيقية
            </p>
            <h2 className="font-['Instrument_Sans',sans-serif] text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight">
              احسب <span className="text-[#9d4edd]">توفيرك السنوي</span>
            </h2>
            <p className="mt-3 text-[var(--t2)]">
              أدخل بيانات مركز الاتصال الحالي واكتشف كم يمكنك توفيره
            </p>
          </div>

          <div className="rounded-3xl p-8 sm:p-10 bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border border-[rgba(90,24,154,0.15)] shadow-[0_0_60px_rgba(90,24,154,0.08)]">
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {[
                {
                  label: "عدد موظفي مركز الاتصال",
                  key: "agents",
                  min: 5,
                  max: 100,
                  step: 1,
                  suffix: " موظف",
                },
                {
                  label: "متوسط الراتب الشهري (ر.س)",
                  key: "avgSalary",
                  min: 4000,
                  max: 12000,
                  step: 500,
                  suffix: " ر.س",
                },
                {
                  label: "المكالمات اليومية",
                  key: "dailyCalls",
                  min: 100,
                  max: 2000,
                  step: 50,
                  suffix: " مكالمة",
                },
                {
                  label: "متوسط وقت الانتظار الحالي (دقائق)",
                  key: "waitTime",
                  min: 1,
                  max: 10,
                  step: 1,
                  suffix: " دقائق",
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

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl text-center bg-[rgba(239,68,68,0.07)] border border-[rgba(239,68,68,0.2)]">
                <div className="text-sm mb-2 text-red-400">
                  التكلفة الحالية (شهرياً)
                </div>
                <div className="text-3xl font-bold text-red-500">
                  {roiResults.currentMonthlyCost.toLocaleString()} ر.س
                </div>
              </div>
              <div className="p-6 rounded-2xl text-center bg-[rgba(90,24,154,0.06)] border border-[rgba(90,24,154,0.15)]">
                <div className="text-sm mb-2 text-[#9d4edd]">
                  مع سندس (شهرياً)
                </div>
                <div className="text-3xl font-bold text-[#9d4edd]">
                  {roiResults.sondosMonthlyCost.toLocaleString()} ر.س
                </div>
              </div>
              <div className="p-6 rounded-2xl text-center bg-[rgba(16,185,129,0.07)] border border-[rgba(16,185,129,0.2)]">
                <div className="text-sm mb-2 text-emerald-600">
                  التوفير الشهري
                </div>
                <div className="text-3xl font-bold text-emerald-600">
                  +{roiResults.monthlySavings.toLocaleString()} ر.س
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <div className="inline-flex flex-wrap justify-center items-center gap-4 px-8 py-4 rounded-2xl gradient-bg">
                <span className="text-white text-lg">التوفير السنوي:</span>
                <span className="text-white text-4xl font-bold">
                  {roiResults.annualSavings.toLocaleString()} ر.س
                </span>
                <span className="text-white/80 text-sm">
                  + {roiResults.missedCallsRecovered.toLocaleString()} مكالمة
                  إضافية/شهر
                </span>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* ==================== INTEGRATIONS ==================== */}
      <section className="py-24 px-6 bg-[var(--bg2)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Instrument_Sans',sans-serif] text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4">
              يتكامل مع <span className="text-[#9d4edd]">أنظمتك الحالية</span>
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
                  {int.type}
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
              قصص نجاح <span className="text-[#9d4edd]">مراكز الاتصال</span>
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
      <section className="py-24 px-6 bg-[var(--bg2)]">
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
          <div className="text-6xl mb-6">📞</div>
          <h2 className="font-['Instrument_Sans',sans-serif] text-[clamp(28px,4vw,48px)] font-bold leading-[1.08] tracking-tight mb-6 text-white">
            جاهز توفّر 70%
            <br />
            من تكلفة مركز الاتصال؟
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
            انضم لأكثر من 50 مركز اتصال يستخدمون سندس لتقديم خدمة أفضل بتكلفة
            أقل
          </p>
          <div className="flex justify-center mb-12">
            <Link
              to="/demo"
              className="inline-flex items-center gap-2 px-10 py-5 bg-[rgba(255,255,255,0.95)] rounded-2xl font-bold text-lg shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-white text-[#5a189a] shimmer"
            >
              احجز عرض توضيحي
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-white/70 text-sm">
            <span>🔗 تكامل مع Genesys & Avaya</span>
            <span>🎧 دعم فني 24/7</span>
            <span>📊 تقارير مفصلة</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SondosCallCenter;
