import React, { useState, useEffect } from "react";
import { Link } from "wouter";

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

  const colors = {
    primary: "#5a189a",
    primaryLight: "#7209b7",
    accent: "#9d4edd",
    bgLight: "#f3e8ff",
    bgLighter: "#faf5ff",
    textDark: "#1a0a2e",
    textMuted: "#6b5b95",
    white: "#FFFFFF",
    success: "#10B981",
    warning: "#F59E0B",
    danger: "#EF4444",
  };

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
    const { agents, avgSalary, dailyCalls, avgHandleTime, waitTime } =
      roiInputs;
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

  return (
    <div className="min-h-screen bg-white font-sans" dir="rtl">
      <style>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float-gentle {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-15px) translateX(-10px);
          }
        }

        .animate-fade-up {
          animation: fade-up 0.6s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-100 {
          animation-delay: 0.1s;
        }

        .animation-delay-150 {
          animation-delay: 0.15s;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .float-gentle {
          animation: float-gentle 6s ease-in-out infinite;
        }

        .float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
      `}</style>

      {/* ==================== HERO SECTION ==================== */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-16 overflow-hidden"
        style={{ background: colors.bgLighter }}
      >
        {/* GRID BACKGROUND */}
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

        {/* FLOATING BLOBS */}
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
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-[rgba(90,24,154,0.08)] border border-[rgba(90,24,154,0.2)] rounded-full text-[13px] font-medium text-[#9d4edd] mb-7 animate-fade-up backdrop-blur-sm">
            <span className="text-lg">📞</span>
            <span className="w-2 h-2 rounded-full bg-[#00d68f]" />
            <span>مستقبل مراكز الاتصال</span>
          </div>

          <h1 className="font-['Instrument_Sans',sans-serif] text-[clamp(38px,5.5vw,68px)] font-bold leading-[1.08] tracking-tight mb-3 animate-fade-up animation-delay-100">
            وفّر
            <span
              className="inline-block mx-2"
              style={{
                background: "linear-gradient(135deg, #5a189a, #9d4edd)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              70%
            </span>
            من تكلفة
            <br />
            مركز الاتصال
          </h1>

          <p className="text-[clamp(16px,1.8vw,19px)] font-semibold text-[#1a0a2e] max-w-[580px] mx-auto leading-relaxed mb-4 animate-fade-up animation-delay-150">
            سندس يتعامل مع 75% من مكالماتك تلقائياً بجودة أعلى
          </p>

          <p className="text-[clamp(14px,1.6vw,17px)] text-[#4a3a62] max-w-[680px] mx-auto leading-relaxed mb-9 animate-fade-up animation-delay-200">
            وقت انتظار صفر، و24/7 - بينما فريقك يركز على الحالات المهمة
          </p>

          {/* STATS CARDS */}
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
                <div className="text-xl font-bold text-[#5a189a]">
                  {stat.value}
                </div>
                <div className="text-xs text-[#8878a0]">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA BUTTON */}
          <div className="flex justify-center animate-fade-up animation-delay-400">
            <Link
              to="/demo"
              className="group inline-flex items-center gap-2 px-8 py-3.5 text-[15px] font-semibold text-white rounded-full hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(90,24,154,0.4)] transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #5a189a, #9d4edd)",
                boxShadow: "0 10px 40px rgba(90,24,154,0.25)",
              }}
            >
              احجز عرض توضيحي
              <span className="text-xl group-hover:-translate-x-1 transition-transform">
                ←
              </span>
            </Link>
          </div>
        </div>

        {/* WAVE SVG */}
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

      {/* ==================== PROBLEMS SECTION ==================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(28px,4vw,40px)] font-bold leading-tight mb-4 text-[#1a0a2e]">
              تحديات مراكز الاتصال
              <span
                className="inline-block mr-2"
                style={{
                  background: "linear-gradient(135deg, #5a189a, #9d4edd)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                التقليدية
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: "💸",
                title: "تكلفة باهظة",
                desc: "رواتب، تدريب، معدات، إدارة = آلاف الريالات شهرياً",
                color: colors.danger,
              },
              {
                icon: "⏰",
                title: "انتظار طويل",
                desc: "العملاء ينتظرون دقائق ويغادرون محبطين",
                color: colors.warning,
              },
              {
                icon: "🔄",
                title: "دوران الموظفين",
                desc: "30-50% يغادرون سنوياً = تدريب مستمر",
                color: colors.accent,
              },
              {
                icon: "📉",
                title: "جودة متفاوتة",
                desc: "كل موظف يرد بطريقته = تجربة غير موحدة",
                color: colors.primary,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border-2 border-dashed text-center transition-all hover:shadow-lg"
                style={{ borderColor: item.color + "40" }}
              >
                <div
                  className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl"
                  style={{ background: item.color + "15" }}
                >
                  {item.icon}
                </div>
                <h3 className="font-bold mb-2 text-[#1a0a2e]">{item.title}</h3>
                <p className="text-sm text-[#6b5b95]">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center my-12">
            <div
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl"
              style={{ background: colors.bgLight }}
            >
              <span className="text-2xl">⬇️</span>
              <span className="font-bold text-[#5a189a]">سندس يحل كل هذا</span>
              <span className="text-2xl">⬇️</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "💰",
                title: "توفير 70%",
                desc: "تكلفة ثابتة ومتوقعة بدون مفاجآت",
                color: colors.success,
              },
              {
                icon: "⚡",
                title: "0 انتظار",
                desc: "رد فوري على كل مكالمة في أي وقت",
                color: colors.primary,
              },
              {
                icon: "🔒",
                title: "استقرار 100%",
                desc: "لا إجازات، لا استقالات، لا مرض",
                color: colors.accent,
              },
              {
                icon: "⭐",
                title: "جودة موحدة",
                desc: "نفس المستوى الممتاز في كل مكالمة",
                color: colors.warning,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl text-center transition-all hover:shadow-xl hover:-translate-y-1"
                style={{
                  background: item.color + "10",
                  border: `2px solid ${item.color}30`,
                }}
              >
                <div
                  className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl text-white"
                  style={{ background: item.color }}
                >
                  {item.icon}
                </div>
                <h3 className="font-bold mb-2 text-[#1a0a2e]">{item.title}</h3>
                <p className="text-sm text-[#6b5b95]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== STATS SECTION ==================== */}
      <section
        id="stats-section"
        className="py-16"
        style={{ background: colors.bgLighter }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div
                  className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl transition-transform group-hover:scale-110"
                  style={{
                    background: "white",
                    boxShadow: "0 4px 14px rgba(0,0,0,0.05)",
                  }}
                >
                  {stat.icon}
                </div>
                <div className="text-3xl sm:text-4xl font-bold mb-2 text-[#5a189a]">
                  {statsVisible ? stat.value : "0"}
                </div>
                <div className="text-sm font-medium text-[#6b5b95]">
                  {stat.label}
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
            <h2 className="text-[clamp(28px,4vw,40px)] font-bold leading-tight mb-4 text-[#1a0a2e]">
              حلول لكل نوع
              <span
                className="inline-block mr-2"
                style={{
                  background: "linear-gradient(135deg, #5a189a, #9d4edd)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                مكالمات
              </span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {segments.map((segment, idx) => (
              <button
                key={segment.id}
                onClick={() => setActiveSegment(idx)}
                className="px-6 py-3.5 rounded-2xl flex items-center gap-3 font-semibold transition-all duration-300"
                style={{
                  background:
                    activeSegment === idx
                      ? "linear-gradient(135deg, #5a189a, #9d4edd)"
                      : "white",
                  color: activeSegment === idx ? "white" : colors.textDark,
                  boxShadow:
                    activeSegment === idx
                      ? "0 8px 24px rgba(90,24,154,0.4)"
                      : "0 2px 12px rgba(0,0,0,0.06)",
                }}
              >
                <span className="text-2xl">{segment.icon}</span>
                <span>{segment.name}</span>
              </button>
            ))}
          </div>

          <div
            className="rounded-3xl overflow-hidden shadow-2xl"
            style={{ boxShadow: "0 20px 60px rgba(90,24,154,0.15)" }}
          >
            <div className="grid md:grid-cols-2">
              <div className="p-8 sm:p-10" style={{ background: "#FEF2F2" }}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">😫</span>
                  <h3 className="text-xl font-bold text-[#991B1B]">التحديات</h3>
                </div>
                <ul className="space-y-4">
                  {segments[activeSegment].painPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">✗</span>
                      <span className="text-[#7F1D1D]">{point}</span>
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
                  <h3 className="text-xl font-bold text-[#5a189a]">مع سندس</h3>
                </div>
                <ul className="space-y-4">
                  {segments[activeSegment].solutions.map((solution, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[#10B981]">✓</span>
                      <span className="text-[#1a0a2e]">{solution}</span>
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
                  <div className="text-sm font-medium mb-2 text-[#6b5b95]">
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
                        <div className="text-2xl font-bold text-[#5a189a]">
                          {value}
                        </div>
                        <div className="text-xs text-[#6b5b95]">
                          {key === "waitTime"
                            ? "الانتظار"
                            : key === "cost"
                              ? "التكلفة"
                              : key === "quality"
                                ? "الجودة"
                                : key === "capacity"
                                  ? "السعة"
                                  : key === "reach"
                                    ? "الوصول"
                                    : key === "efficiency"
                                      ? "الكفاءة"
                                      : key === "automation"
                                        ? "الأتمتة"
                                        : key === "availability"
                                          ? "التوفر"
                                          : key === "training"
                                            ? "التدريب"
                                            : key === "qualification"
                                              ? "التأهيل"
                                              : key === "followUp"
                                                ? "المتابعة"
                                                : key === "CAC"
                                                  ? "تكلفة الاكتساب"
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

      {/* ==================== COMPARISON SECTION ==================== */}
      <section
        id="المقارنة"
        className="py-24"
        style={{ background: colors.bgLighter }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(28px,4vw,40px)] font-bold leading-tight mb-4 text-[#1a0a2e]">
              مقارنة شاملة:
              <span
                className="inline-block mr-2"
                style={{
                  background: "linear-gradient(135deg, #5a189a, #9d4edd)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                تقليدي vs سندس
              </span>
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
                className="px-6 py-3 rounded-xl font-semibold transition-all"
                style={{
                  background:
                    activeComparison === tab.id ? colors.primary : "white",
                  color:
                    activeComparison === tab.id ? "white" : colors.textDark,
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div
              className="rounded-2xl overflow-hidden"
              style={{ background: "white", border: "2px solid #FEE2E2" }}
            >
              <div
                className="p-4 text-center"
                style={{ background: "#FEE2E2" }}
              >
                <span className="text-2xl mr-2">🏢</span>
                <span className="font-bold text-[#991B1B]">
                  مركز اتصال تقليدي
                </span>
              </div>
              <div className="p-6 space-y-3">
                {comparisonData[activeComparison].traditional.map((item, i) => (
                  <div
                    key={i}
                    className={`flex justify-between items-center p-3 rounded-lg ${item.highlight ? "font-bold" : ""}`}
                    style={{
                      background: item.highlight ? "#FEE2E2" : colors.bgLighter,
                      color: item.highlight ? "#DC2626" : colors.textDark,
                    }}
                  >
                    <span>{item.item}</span>
                    <span>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="rounded-2xl overflow-hidden shadow-xl"
              style={{
                background: "white",
                border: `2px solid ${colors.primary}`,
              }}
            >
              <div
                className="p-4 text-center"
                style={{
                  background: "linear-gradient(135deg, #5a189a, #9d4edd)",
                }}
              >
                <span className="text-2xl mr-2">🚀</span>
                <span className="font-bold text-white">مع سندس AI</span>
              </div>
              <div className="p-6 space-y-3">
                {comparisonData[activeComparison].sondos.map((item, i) => (
                  <div
                    key={i}
                    className={`flex justify-between items-center p-3 rounded-lg ${item.highlight ? "font-bold" : ""}`}
                    style={{
                      background: item.highlight
                        ? colors.bgLight
                        : colors.bgLighter,
                      color: item.highlight ? colors.success : colors.textDark,
                    }}
                  >
                    <span>{item.item}</span>
                    <span>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {activeComparison === "cost" && (
            <div
              className="mt-8 p-6 rounded-2xl text-center"
              style={{
                background: "linear-gradient(135deg, #5a189a, #9d4edd)",
              }}
            >
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(28px,4vw,40px)] font-bold leading-tight mb-4 text-[#1a0a2e]">
              مميزات
              <span
                className="inline-block mr-2"
                style={{
                  background: "linear-gradient(135deg, #5a189a, #9d4edd)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                متقدمة
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
                <h3 className="text-xl font-bold mb-3 text-[#1a0a2e]">
                  {feature.title}
                </h3>
                <p className="text-sm mb-5 leading-relaxed text-[#6b5b95]">
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

      {/* ==================== ROI CALCULATOR ==================== */}
      <section
        id="حاسبة التوفير"
        className="py-24"
        style={{ background: colors.bgLighter }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-[clamp(28px,4vw,40px)] font-bold leading-tight mb-4 text-[#1a0a2e]">
              احسب
              <span
                className="inline-block mr-2"
                style={{
                  background: "linear-gradient(135deg, #5a189a, #9d4edd)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                توفيرك السنوي
              </span>
            </h2>
            <p className="text-[#6b5b95]">
              أدخل بيانات مركز الاتصال الحالي واكتشف كم يمكنك توفيره
            </p>
          </div>

          <div className="rounded-3xl p-8 sm:p-10 shadow-xl bg-white">
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              {[
                {
                  label: "عدد موظفي مركز الاتصال",
                  key: "agents",
                  min: 5,
                  max: 100,
                  step: 1,
                  display: `${roiInputs.agents} موظف`,
                  pct: roiInputs.agents,
                },
                {
                  label: "متوسط الراتب الشهري (ر.س)",
                  key: "avgSalary",
                  min: 4000,
                  max: 12000,
                  step: 500,
                  display: `${roiInputs.avgSalary.toLocaleString()} ر.س`,
                  pct: (roiInputs.avgSalary - 4000) / 80,
                },
                {
                  label: "المكالمات اليومية",
                  key: "dailyCalls",
                  min: 100,
                  max: 2000,
                  step: 50,
                  display: `${roiInputs.dailyCalls} مكالمة`,
                  pct: roiInputs.dailyCalls / 20,
                },
                {
                  label: "متوسط وقت الانتظار الحالي (دقائق)",
                  key: "waitTime",
                  min: 1,
                  max: 10,
                  step: 1,
                  display: `${roiInputs.waitTime} دقائق`,
                  pct: roiInputs.waitTime * 10,
                },
              ].map(({ label, key, min, max, step, display, pct }) => (
                <div key={key}>
                  <label className="block text-sm font-medium mb-3 text-[#1a0a2e]">
                    {label}
                  </label>
                  <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={roiInputs[key]}
                    onChange={(e) =>
                      setRoiInputs({
                        ...roiInputs,
                        [key]: parseInt(e.target.value),
                      })
                    }
                    className="w-full h-3 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(90deg, ${colors.primary} ${pct}%, ${colors.bgLight} ${pct}%)`,
                    }}
                  />
                  <div className="text-center mt-2 text-2xl font-bold text-[#5a189a]">
                    {display}
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
                    color: colors.danger,
                    sub: "شهرياً",
                  },
                  {
                    label: "مع سندس",
                    value: `${roiResults.sondosMonthlyCost.toLocaleString()} ر.س`,
                    color: colors.success,
                    sub: "شهرياً",
                  },
                  {
                    label: "التوفير الشهري",
                    value: `${roiResults.monthlySavings.toLocaleString()} ر.س`,
                    color: colors.primary,
                    sub: `${roiResults.savingsPercent}% توفير`,
                  },
                  {
                    label: "الموظفين المتبقين",
                    value: `${roiResults.remainingAgents} موظف`,
                    color: colors.accent,
                    sub: "للحالات المعقدة",
                  },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white">
                    <div className="text-xs mb-1 text-[#6b5b95]">
                      {item.label}
                    </div>
                    <div
                      className="text-xl font-bold"
                      style={{ color: item.color }}
                    >
                      {item.value}
                    </div>
                    <div className="text-xs text-[#6b5b95]">{item.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="p-6 rounded-2xl text-center"
              style={{
                background: "linear-gradient(135deg, #5a189a, #9d4edd)",
              }}
            >
              <div className="text-white/80 mb-2">التوفير السنوي المتوقع</div>
              <div className="text-white text-5xl font-bold mb-2">
                {roiResults.annualSavings.toLocaleString()} ر.س
              </div>
              <div className="text-white/80 text-sm">
                + {roiResults.missedCallsRecovered.toLocaleString()} مكالمة
                إضافية مردودة شهرياً
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== INTEGRATIONS ==================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(28px,4vw,40px)] font-bold leading-tight mb-4 text-[#1a0a2e]">
              يتكامل مع
              <span
                className="inline-block mr-2"
                style={{
                  background: "linear-gradient(135deg, #5a189a, #9d4edd)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                أنظمتك الحالية
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {integrations.map((int, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border-2 text-center transition-all hover:shadow-xl hover:-translate-y-1"
                style={{ borderColor: colors.bgLight }}
              >
                <div className="text-4xl mb-3">{int.icon}</div>
                <div className="font-semibold text-[#1a0a2e]">{int.name}</div>
                <div
                  className="text-xs mt-1 px-2 py-0.5 rounded-full inline-block"
                  style={{
                    background: colors.bgLight,
                    color: colors.textMuted,
                  }}
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
            <h2 className="text-[clamp(28px,4vw,40px)] font-bold leading-tight mb-4 text-[#1a0a2e]">
              قصص نجاح
              <span
                className="inline-block mr-2"
                style={{
                  background: "linear-gradient(135deg, #5a189a, #9d4edd)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                مراكز الاتصال
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
            <p className="text-xl sm:text-2xl leading-relaxed mb-8 text-[#1a0a2e]">
              {testimonials[currentTestimonial].quote}
            </p>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, #5a189a, #9d4edd)",
                  }}
                >
                  {testimonials[currentTestimonial].image}
                </div>
                <div>
                  <div className="font-bold text-lg text-[#1a0a2e]">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-sm text-[#6b5b95]">
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
                        ? "linear-gradient(135deg, #5a189a, #9d4edd)"
                        : colors.primary + "30",
                    width: currentTestimonial === idx ? "32px" : "12px",
                  }}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PRICING ==================== */}
      <section id="الأسعار" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(28px,4vw,40px)] font-bold leading-tight mb-4 text-[#1a0a2e]">
              باقات
              <span
                className="inline-block mr-2"
                style={{
                  background: "linear-gradient(135deg, #5a189a, #9d4edd)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                مراكز الاتصال
              </span>
            </h2>
            <p className="text-[#6b5b95]">أسعار تنافسية تناسب حجم عملك</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div
              className="p-8 rounded-3xl bg-white border-2 transition-all hover:shadow-xl"
              style={{ borderColor: colors.bgLight }}
            >
              <div className="text-sm font-bold mb-3 text-[#5a189a]">
                فريق صغير
              </div>
              <div className="mb-2">
                <span className="text-5xl font-bold text-[#1a0a2e]">
                  15,000
                </span>
                <span className="text-[#6b5b95] mr-1"> ر.س/شهر</span>
              </div>
              <p className="text-sm mb-8 text-[#6b5b95]">
                حتى 200 مكالمة يومياً
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "مكالمات واردة وصادرة",
                  "تحويل ذكي للموظفين",
                  "لوحة تحكم أساسية",
                  "تقارير يومية",
                  "دعم فني",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-[#6b5b95]"
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
                  background: "linear-gradient(135deg, #5a189a, #9d4edd)",
                }}
              >
                الأكثر شعبية ⭐
              </div>
              <div className="text-sm font-bold mb-3 mt-2 text-[#5a189a]">
                فريق متوسط
              </div>
              <div className="mb-2">
                <span className="text-5xl font-bold text-[#1a0a2e]">
                  25,000
                </span>
                <span className="text-[#6b5b95] mr-1"> ر.س/شهر</span>
              </div>
              <p className="text-sm mb-8 text-[#6b5b95]">
                حتى 500 مكالمة يومياً
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "كل مميزات الفريق الصغير",
                  "تكامل CRM كامل",
                  "تحليلات متقدمة",
                  "تسجيل المكالمات",
                  "أولوية في الدعم",
                  "تقارير مخصصة",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-[#6b5b95]"
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
                  background: "linear-gradient(135deg, #5a189a, #9d4edd)",
                  boxShadow: "0 8px 24px rgba(90,24,154,0.4)",
                }}
              >
                ابدأ الآن
              </button>
            </div>

            <div
              className="p-8 rounded-3xl bg-white border-2 transition-all hover:shadow-xl"
              style={{ borderColor: colors.bgLight }}
            >
              <div className="text-sm font-bold mb-3 text-[#9d4edd]">
                مؤسسة كبيرة
              </div>
              <div className="mb-2">
                <span className="text-5xl font-bold text-[#1a0a2e]">مخصص</span>
              </div>
              <p className="text-sm mb-8 text-[#6b5b95]">مكالمات غير محدودة</p>
              <ul className="space-y-4 mb-8">
                {[
                  "كل مميزات الفريق المتوسط",
                  "مدير حساب مخصص",
                  "SLA مضمون 99.9%",
                  "تكامل مخصص",
                  "تدريب الفريق",
                  "دعم 24/7",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-[#6b5b95]"
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
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="py-24" style={{ background: colors.bgLighter }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(28px,4vw,40px)] font-bold leading-tight mb-4 text-[#1a0a2e]">
              أسئلة
              <span
                className="inline-block mr-2"
                style={{
                  background: "linear-gradient(135deg, #5a189a, #9d4edd)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
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
                  <span className="font-semibold text-lg text-[#1a0a2e]">
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
                  <div className="px-6 pb-6 text-sm leading-relaxed text-[#6b5b95]">
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
          background: "linear-gradient(135deg, #5a189a, #9d4edd)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-6xl mb-6">📞</div>
          <h2 className="text-[clamp(28px,4vw,48px)] font-bold leading-tight mb-6 text-white">
            جاهز توفّر 70%
            <br />
            من تكلفة مركز الاتصال؟
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
            انضم لأكثر من 50 مركز اتصال يستخدمون سندس لتقديم خدمة أفضل بتكلفة
            أقل
          </p>

          {/* CTA BUTTON */}
          <div className="flex justify-center mb-12">
            <Link
              to="/demo"
              className="inline-flex items-center gap-2 px-10 py-5 bg-white rounded-2xl font-bold text-lg shadow-2xl transition-all duration-300 hover:-translate-y-1"
              style={{ color: colors.primary }}
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
