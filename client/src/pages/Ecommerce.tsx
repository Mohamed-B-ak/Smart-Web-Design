import React, { useState, useEffect } from "react";
import "../index.css";

// ==================== SONDOS AI - E-COMMERCE LANDING PAGE ====================
// Silicon Valley Grade | Violet Theme | Arabic RTL

const SondosEcommerce = () => {
  const [activeSegment, setActiveSegment] = useState(0);

  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // ROI Calculator State
  const [roiInputs, setRoiInputs] = useState({
    dailyOrders: 150,
    supportCalls: 80,
    avgOrderValue: 350,
    cartAbandonment: 70,
    returnRate: 15,
  });

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Animate stats on scroll
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

  // ==================== BRAND COLORS ====================
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

  // ==================== E-COMMERCE DATA ====================
  const segments = [
    {
      id: "stores",
      name: "المتاجر الإلكترونية",
      icon: "🛒",
      description: "سلة، زد، شوبيفاي، ووكومرس",
      painPoints: [
        "استفسارات متكررة عن الطلبات والشحن",
        "ضغط كبير على خدمة العملاء",
        "سلات متروكة بدون متابعة",
      ],
      solutions: [
        "رد فوري على حالة الطلب والتتبع",
        "دعم آلي 24/7 بدون توظيف إضافي",
        "متابعة السلات المتروكة وإتمام البيع",
      ],
      stats: { support: "-60%", recovery: "+35%", satisfaction: "96%" },
    },
    {
      id: "marketplace",
      name: "منصات البيع",
      icon: "🏪",
      description: "أمازون، نون، جرير، إكسترا",
      painPoints: [
        "حجم هائل من استفسارات العملاء",
        "تأخر الردود يؤثر على التقييم",
        "صعوبة إدارة قنوات متعددة",
      ],
      solutions: [
        "رد موحد على كل القنوات",
        "ردود فورية ترفع تقييم البائع",
        "لوحة تحكم مركزية لكل المنصات",
      ],
      stats: { rating: "4.9⭐", response: "< 1 دقيقة", efficiency: "+70%" },
    },
    {
      id: "dropshipping",
      name: "دروبشيبينغ",
      icon: "📦",
      description: "تجارة بدون مخزون",
      painPoints: [
        "استفسارات كثيرة عن مدة التوصيل",
        "شكاوى تأخير الشحن الدولي",
        "عملاء يريدون تتبع مستمر",
      ],
      solutions: [
        "توقعات واضحة لمدة التوصيل",
        "تحديثات استباقية للعميل",
        "ردود مخصصة لكل مرحلة شحن",
      ],
      stats: { complaints: "-50%", tracking: "تلقائي", retention: "+40%" },
    },
    {
      id: "subscriptions",
      name: "الاشتراكات",
      icon: "🔄",
      description: "صناديق شهرية، خدمات متكررة",
      painPoints: [
        "استفسارات عن الإلغاء والتعديل",
        "متابعة التجديدات",
        "استرجاع المشتركين المنسحبين",
      ],
      solutions: [
        "إدارة الاشتراكات بالمحادثة",
        "تذكيرات ذكية قبل التجديد",
        "عروض استبقاء للمنسحبين",
      ],
      stats: { churn: "-25%", renewal: "+30%", LTV: "+45%" },
    },
  ];

  const features = [
    {
      icon: "📍",
      title: "تتبع الطلبات",
      description:
        'العميل يسأل "وين طلبي؟" وسندس يرد بحالة الشحن والموقع فوراً من نظامك',
      highlight: "ربط مباشر",
    },
    {
      icon: "🛒",
      title: "استرجاع السلات",
      description:
        "اتصال أو رسالة تلقائية للعملاء اللي تركوا سلاتهم مع عرض خاص لإتمام الشراء",
      highlight: "+35% استرجاع",
    },
    {
      icon: "↩️",
      title: "طلبات الاسترجاع",
      description:
        "استقبال طلبات الإرجاع والاستبدال، جمع المعلومات، وفتح التذكرة تلقائياً",
      highlight: "بدون انتظار",
    },
    {
      icon: "💬",
      title: "الأسئلة الشائعة",
      description: "رد فوري على أسئلة المنتجات، الأسعار، التوصيل، وطرق الدفع",
      highlight: "90% حل فوري",
    },
    {
      icon: "⭐",
      title: "جمع التقييمات",
      description: "اتصال متابعة بعد التوصيل لجمع تقييم العميل وتحسين المنتجات",
      highlight: "تقييمات أكثر",
    },
    {
      icon: "🎁",
      title: "العروض والتوصيات",
      description: "اقتراح منتجات مكملة وعروض مخصصة بناءً على سجل الشراء",
      highlight: "Upselling ذكي",
    },
  ];

  const testimonials = [
    {
      quote:
        "كان عندنا 3 موظفين لخدمة العملاء. الآن سندس يرد على 80% من الاستفسارات وفريقنا يركز على الحالات المعقدة فقط.",
      name: "أ. محمد الدوسري",
      role: "مؤسس",
      company: "متجر تكنو السعودية",
      image: "👨‍💻",
      metric: "توفير 18,000 ر.س/شهر",
    },
    {
      quote:
        "نسبة السلات المتروكة كانت 75%. بعد تفعيل متابعة سندس الآلية، استرجعنا 35% منها. هذا فرق كبير في الإيرادات!",
      name: "أ. نورة القحطاني",
      role: "مديرة التسويق",
      company: "بوتيك لمسة",
      image: "👩‍💼",
      metric: "+120,000 ر.س/شهر",
    },
    {
      quote:
        "العملاء كانوا يشتكون من بطء الردود. الآن يحصلون على رد في ثوانٍ وتقييمنا في نون صار 4.9 نجوم.",
      name: "أ. فهد العمري",
      role: "صاحب متجر",
      company: "إلكترونيات الخليج",
      image: "🧔",
      metric: "تقييم 4.9⭐",
    },
  ];

  const faqs = [
    {
      q: "كيف يعرف سندس حالة طلب العميل؟",
      a: "سندس يتكامل مباشرة مع منصتك (سلة، زد، شوبيفاي، ووكومرس) وشركات الشحن (أرامكس، سمسا، DHL). عندما يسأل العميل عن طلبه، سندس يسحب المعلومات لحظياً ويرد بالحالة والموقع.",
    },
    {
      q: "كيف يتابع السلات المتروكة؟",
      a: 'عندما يترك عميل سلته، سندس ينتظر فترة محددة (ساعة مثلاً) ثم يتصل أو يرسل واتساب بعرض مخصص. "لاحظنا إنك ما كملت طلبك، عندنا خصم 10% إذا أكملت الآن!"',
    },
    {
      q: "هل يقدر يتعامل مع طلبات الإرجاع؟",
      a: "نعم! سندس يسأل عن سبب الإرجاع، يجمع صور المنتج إذا لزم، ويفتح تذكرة في نظامك. يمكنه أيضاً تقديم بدائل مثل الاستبدال أو رصيد متجر قبل الموافقة على الإرجاع.",
    },
    {
      q: "هل يتكامل مع منصتي الحالية؟",
      a: "نعم، سندس يتكامل مع: سلة، زد، شوبيفاي، ووكومرس، ماجنتو، وأي منصة عبر API. كذلك يتكامل مع شركات الشحن، بوابات الدفع، وأنظمة CRM.",
    },
    {
      q: "ماذا عن الاستفسارات المعقدة؟",
      a: "سندس ذكي في تحديد الحالات اللي تحتاج تدخل بشري (شكوى حادة، طلب تعويض كبير). يحوّل المكالمة للموظف مع ملخص كامل للمحادثة والسجل الشرائي للعميل.",
    },
    {
      q: "كم يستغرق الربط مع متجري؟",
      a: "الربط الأساسي مع سلة وزد يتم خلال ساعات. المنصات الأخرى تحتاج 1-3 أيام. نوفر دعم فني كامل خلال عملية الربط.",
    },
  ];

  const stats = [
    { value: "500K+", label: "طلب تمت متابعته", icon: "📦" },
    { value: "200+", label: "متجر إلكتروني", icon: "🛒" },
    { value: "35%", label: "استرجاع سلات متروكة", icon: "💰" },
    { value: "< 5 ثوانٍ", label: "متوسط وقت الرد", icon: "⚡" },
  ];

  const integrations = [
    { name: "سلة", icon: "🛍️", type: "منصة" },
    { name: "زد", icon: "⚡", type: "منصة" },
    { name: "Shopify", icon: "🛒", type: "منصة" },
    { name: "WooCommerce", icon: "🔌", type: "منصة" },
    { name: "أرامكس", icon: "📦", type: "شحن" },
    { name: "سمسا", icon: "🚚", type: "شحن" },
    { name: "DHL", icon: "✈️", type: "شحن" },
    { name: "تابي", icon: "💳", type: "دفع" },
    { name: "تمارا", icon: "💰", type: "دفع" },
    { name: "WhatsApp", icon: "💬", type: "تواصل" },
  ];

  const useCases = [
    {
      title: "📍 استفسار عن طلب",
      conversation: [
        { role: "ai", text: "أهلاً! متجر تكنو السعودية، كيف أقدر أساعدك؟ 👋" },
        { role: "user", text: "وين طلبي رقم 45892؟" },
        {
          role: "ai",
          text: "طلبك في الطريق! 🚚\n\nالحالة: خرج للتوصيل\nشركة الشحن: أرامكس\nرقم التتبع: 123456789\nالوصول المتوقع: اليوم قبل الساعة 6 مساءً",
        },
        { role: "user", text: "تمام شكراً" },
        {
          role: "ai",
          text: "العفو! راح توصلك رسالة لما يوصل المندوب. تحتاج شي ثاني؟ 😊",
        },
      ],
    },
    {
      title: "🛒 استرجاع سلة متروكة",
      conversation: [
        {
          role: "ai",
          text: "مرحبا! معاك متجر بوتيك لمسة 💜\n\nلاحظنا إنك أضفت منتجات لسلتك ولم تكمل الطلب. كل شي تمام؟",
        },
        { role: "user", text: "إيه بس حسيت الشحن غالي" },
        {
          role: "ai",
          text: "أفهمك! عندي خبر حلو 🎁\n\nلأنك عميل مميز، نقدر نعطيك شحن مجاني على هالطلب. تبي أرسلك رابط السلة؟",
        },
        { role: "user", text: "تمام أرسله" },
        {
          role: "ai",
          text: "تم! ✅ أرسلت الرابط على واتساب مع كود الشحن المجاني: FREE2024\n\nصلاحية الكود 24 ساعة. أي سؤال ثاني؟",
        },
      ],
    },
  ];

  // ROI Calculation
  const calculateROI = () => {
    const {
      dailyOrders,
      supportCalls,
      avgOrderValue,
      cartAbandonment,
      returnRate,
    } = roiInputs;

    const monthlyOrders = dailyOrders * 30;
    const monthlySupportCalls = supportCalls * 30;
    const supportCostPerCall = 8;
    const currentSupportCost = monthlySupportCalls * supportCostPerCall;

    const abandonedCarts = monthlyOrders * (cartAbandonment / 100);
    const potentialLostRevenue = abandonedCarts * avgOrderValue;

    const recoveredCarts = abandonedCarts * 0.35;
    const recoveredRevenue = recoveredCarts * avgOrderValue;

    const automatedSupport = monthlySupportCalls * 0.8;
    const supportSavings = automatedSupport * supportCostPerCall;

    const reducedReturns = monthlyOrders * (returnRate / 100) * 0.2;
    const returnSavings = reducedReturns * avgOrderValue * 0.3;

    const sondosCost =
      dailyOrders <= 50 ? 1500 : dailyOrders <= 150 ? 3500 : 7500;

    const totalSavings = recoveredRevenue + supportSavings + returnSavings;
    const netGain = totalSavings - sondosCost;
    const roi = (netGain / sondosCost) * 100;

    return {
      currentSupportCost: Math.round(currentSupportCost),
      potentialLostRevenue: Math.round(potentialLostRevenue),
      recoveredRevenue: Math.round(recoveredRevenue),
      supportSavings: Math.round(supportSavings),
      sondosCost,
      netGain: Math.round(netGain),
      roi: Math.round(roi),
      recoveredCarts: Math.round(recoveredCarts),
    };
  };

  const roiResults = calculateROI();

  return (
    <div className="min-h-screen bg-white font-sans" dir="rtl">
      {/* ==================== HERO SECTION ==================== */}
      <section
        className="relative pt-32 lg:pt-40 pb-20 overflow-hidden"
        style={{ background: colors.bgLighter }}
      >
        {/* Background Decorations */}
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
              style={{
                background: colors.white,
                color: colors.primary,
                boxShadow: "0 2px 12px rgba(91, 78, 159, 0.15)",
              }}
            >
              <span className="text-lg">🛒</span>
              <span>الحل الأمثل للتجارة الإلكترونية</span>
            </div>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              style={{ color: colors.textDark }}
            >
              حوّل كل
              <span
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {" "}
                سلة متروكة{" "}
              </span>
              <br />
              إلى طلب مكتمل
            </h1>

            <p
              className="text-lg sm:text-xl mb-10 leading-relaxed max-w-2xl mx-auto"
              style={{ color: colors.textMuted }}
            >
              سندس يرد على استفسارات العملاء، يتتبع الطلبات، يسترجع السلات
              المتروكة، ويدير الإرجاع - 24/7 بدون تدخل منك
            </p>

            {/* Stats */}
            <div
              className="flex flex-wrap justify-center gap-6 mb-10 p-6 rounded-2xl"
              style={{
                background: "white",
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
              }}
            >
              {[
                { value: "+35%", label: "استرجاع سلات" },
                { value: "80%", label: "أتمتة الدعم" },
                { value: "5 ثوانٍ", label: "وقت الرد" },
              ].map((stat, i) => (
                <div key={i} className="text-center px-4">
                  <div
                    className="text-2xl font-bold"
                    style={{ color: colors.primary }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm" style={{ color: colors.textMuted }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* ===== CTA — زر واحد فقط يوجه نحو /demo ===== */}
            <div className="flex justify-center">
              <a
                href="/demo"
                className="px-10 py-4 rounded-2xl font-semibold text-lg text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 text-center"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                  boxShadow: `0 10px 40px ${colors.primary}40`,
                }}
              >
                احجز عرضك التجريبي
              </a>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
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
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: colors.textDark }}
            >
              تحديات التجارة الإلكترونية
              <span
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {" "}
                اليومية
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: "🛒",
                title: "70% سلات متروكة",
                desc: "عملاء يضيفون منتجات ولا يكملون الشراء",
                color: colors.danger,
              },
              {
                icon: "❓",
                title: '"وين طلبي؟"',
                desc: "أكثر سؤال متكرر يستهلك وقت فريقك",
                color: colors.warning,
              },
              {
                icon: "↩️",
                title: "15% إرجاع",
                desc: "طلبات إرجاع تحتاج وقت ومتابعة",
                color: colors.accent,
              },
              {
                icon: "😤",
                title: "تأخر الردود",
                desc: "عملاء غاضبين وتقييمات سلبية",
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

          {/* Solution Arrow */}
          <div className="text-center my-12">
            <div
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl"
              style={{ background: colors.bgLight }}
            >
              <span className="text-2xl">⬇️</span>
              <span className="font-bold" style={{ color: colors.primary }}>
                سندس يحل كل هذا تلقائياً
              </span>
              <span className="text-2xl">⬇️</span>
            </div>
          </div>

          {/* Solutions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "💰",
                title: "+35% استرجاع",
                desc: "متابعة آلية تحوّل السلات المتروكة لطلبات",
                color: colors.success,
              },
              {
                icon: "📍",
                title: "تتبع فوري",
                desc: "العميل يعرف مكان طلبه في ثوانٍ",
                color: colors.primary,
              },
              {
                icon: "🔄",
                title: "إرجاع سلس",
                desc: "طلبات الإرجاع تُدار بدون تدخل",
                color: colors.accent,
              },
              {
                icon: "⭐",
                title: "96% رضا",
                desc: "ردود فورية = عملاء سعيدين",
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
                تجارة إلكترونية
              </span>
            </h2>
          </div>

          {/* Segment Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {segments.map((segment, idx) => (
              <button
                key={segment.id}
                onClick={() => setActiveSegment(idx)}
                className="px-6 py-3.5 rounded-2xl flex items-center gap-3 font-semibold transition-all duration-300"
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
                <span className="text-2xl">{segment.icon}</span>
                <span>{segment.name}</span>
              </button>
            ))}
          </div>

          {/* Active Segment Details */}
          <div
            className="rounded-3xl overflow-hidden shadow-2xl"
            style={{ boxShadow: `0 20px 60px ${colors.primary}15` }}
          >
            <div className="grid md:grid-cols-2">
              {/* Pain Points */}
              <div className="p-8 sm:p-10" style={{ background: "#FEF2F2" }}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">😫</span>
                  <h3
                    className="text-xl font-bold"
                    style={{ color: "#991B1B" }}
                  >
                    بدون سندس
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

              {/* Solutions */}
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

            {/* Results Stats */}
            <div
              className="p-6 bg-white border-t"
              style={{ borderColor: colors.bgLight }}
            >
              <div className="flex flex-wrap justify-center gap-8">
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
                        className="text-sm"
                        style={{ color: colors.textMuted }}
                      >
                        {key === "support"
                          ? "تقليل الدعم"
                          : key === "recovery"
                            ? "استرجاع السلات"
                            : key === "satisfaction"
                              ? "رضا العملاء"
                              : key === "rating"
                                ? "تقييم البائع"
                                : key === "response"
                                  ? "وقت الرد"
                                  : key === "efficiency"
                                    ? "زيادة الكفاءة"
                                    : key === "complaints"
                                      ? "تقليل الشكاوى"
                                      : key === "tracking"
                                        ? "التتبع"
                                        : key === "retention"
                                          ? "الاحتفاظ"
                                          : key === "churn"
                                            ? "تقليل الانسحاب"
                                            : key === "renewal"
                                              ? "التجديد"
                                              : key === "LTV"
                                                ? "قيمة العميل"
                                                : key}
                      </div>
                    </div>
                  ),
                )}
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
                للتجارة الإلكترونية
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

      {/* ==================== INTEGRATIONS ==================== */}
      <section id="التكاملات" className="py-24 bg-white">
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
                منصتك المفضلة
              </span>
            </h2>
            <p style={{ color: colors.textMuted }}>
              ربط مباشر مع أشهر منصات التجارة الإلكترونية وشركات الشحن
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {integrations.map((int, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border-2 text-center transition-all hover:shadow-xl hover:-translate-y-1"
                style={{ borderColor: colors.bgLight }}
              >
                <div className="text-4xl mb-3">{int.icon}</div>
                <div
                  className="font-semibold"
                  style={{ color: colors.textDark }}
                >
                  {int.name}
                </div>
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

      {/* ==================== USE CASES ==================== */}
      <section className="py-24" style={{ background: colors.bgLighter }}>
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
                style={{ background: "white" }}
              >
                <div
                  className="px-6 py-4 font-bold flex items-center gap-2"
                  style={{ background: colors.bgLight, color: colors.textDark }}
                >
                  <span>{useCase.title}</span>
                </div>
                <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
                  {useCase.conversation.map((msg, i) => (
                    <div
                      key={i}
                      className={`p-4 rounded-2xl text-sm ${
                        msg.role === "ai"
                          ? "rounded-tr-md max-w-[85%] mr-auto"
                          : "rounded-tl-md max-w-[75%] ml-auto"
                      }`}
                      style={{
                        background:
                          msg.role === "ai" ? colors.bgLight : colors.primary,
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

      {/* ==================== ROI CALCULATOR ==================== 
      <section className="py-24 bg-white">
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
                أرباحك المحتملة
              </span>
            </h2>
            <p style={{ color: colors.textMuted }}>
              اكتشف كم يمكنك كسبه من استرجاع السلات المتروكة
            </p>
          </div>

          <div
            className="rounded-3xl p-8 sm:p-10 shadow-xl"
            style={{ background: colors.bgLighter }}
          >
            {/* Inputs 
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: colors.textDark }}
                >
                  الطلبات اليومية
                </label>
                <input
                  type="range"
                  min="20"
                  max="500"
                  value={roiInputs.dailyOrders}
                  onChange={(e) =>
                    setRoiInputs({
                      ...roiInputs,
                      dailyOrders: parseInt(e.target.value),
                    })
                  }
                  className="w-full h-2 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(90deg, ${colors.primary} ${roiInputs.dailyOrders / 5}%, ${colors.bgLight} ${roiInputs.dailyOrders / 5}%)`,
                  }}
                />
                <div
                  className="text-center mt-2 font-bold"
                  style={{ color: colors.primary }}
                >
                  {roiInputs.dailyOrders} طلب
                </div>
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: colors.textDark }}
                >
                  نسبة السلات المتروكة
                </label>
                <input
                  type="range"
                  min="40"
                  max="90"
                  value={roiInputs.cartAbandonment}
                  onChange={(e) =>
                    setRoiInputs({
                      ...roiInputs,
                      cartAbandonment: parseInt(e.target.value),
                    })
                  }
                  className="w-full h-2 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(90deg, ${colors.primary} ${roiInputs.cartAbandonment}%, ${colors.bgLight} ${roiInputs.cartAbandonment}%)`,
                  }}
                />
                <div
                  className="text-center mt-2 font-bold"
                  style={{ color: colors.primary }}
                >
                  {roiInputs.cartAbandonment}%
                </div>
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: colors.textDark }}
                >
                  متوسط قيمة السلة (ر.س)
                </label>
                <input
                  type="range"
                  min="100"
                  max="1000"
                  step="50"
                  value={roiInputs.avgOrderValue}
                  onChange={(e) =>
                    setRoiInputs({
                      ...roiInputs,
                      avgOrderValue: parseInt(e.target.value),
                    })
                  }
                  className="w-full h-2 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(90deg, ${colors.primary} ${roiInputs.avgOrderValue / 10}%, ${colors.bgLight} ${roiInputs.avgOrderValue / 10}%)`,
                  }}
                />
                <div
                  className="text-center mt-2 font-bold"
                  style={{ color: colors.primary }}
                >
                  {roiInputs.avgOrderValue} ر.س
                </div>
              </div>
            </div>

            {/* Results 
            <div className="grid md:grid-cols-4 gap-4">
              <div
                className="p-5 rounded-2xl text-center"
                style={{ background: "#FEE2E2" }}
              >
                <div className="text-xs mb-1" style={{ color: "#991B1B" }}>
                  إيرادات ضائعة (شهرياً)
                </div>
                <div
                  className="text-2xl font-bold"
                  style={{ color: "#DC2626" }}
                >
                  {roiResults.potentialLostRevenue.toLocaleString()} ر.س
                </div>
              </div>

              <div
                className="p-5 rounded-2xl text-center"
                style={{ background: "#D1FAE5" }}
              >
                <div className="text-xs mb-1" style={{ color: "#065F46" }}>
                  إيرادات مسترجعة
                </div>
                <div
                  className="text-2xl font-bold"
                  style={{ color: "#059669" }}
                >
                  +{roiResults.recoveredRevenue.toLocaleString()} ر.س
                </div>
              </div>

              <div
                className="p-5 rounded-2xl text-center"
                style={{ background: colors.bgLight }}
              >
                <div className="text-xs mb-1" style={{ color: colors.primary }}>
                  تكلفة سندس
                </div>
                <div
                  className="text-2xl font-bold"
                  style={{ color: colors.primary }}
                >
                  {roiResults.sondosCost.toLocaleString()} ر.س
                </div>
              </div>

              <div
                className="p-5 rounded-2xl text-center"
                style={{ background: colors.success + "20" }}
              >
                <div className="text-xs mb-1" style={{ color: "#065F46" }}>
                  صافي الربح
                </div>
                <div
                  className="text-2xl font-bold"
                  style={{ color: colors.success }}
                >
                  +{roiResults.netGain.toLocaleString()} ر.س
                </div>
              </div>
            </div>

            {/* ROI Badge 
            <div className="text-center mt-8">
              <div
                className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                }}
              >
                <span className="text-white text-lg">عائد الاستثمار:</span>
                <span className="text-white text-4xl font-bold">
                  {roiResults.roi}%
                </span>
                <span className="text-white/80 text-sm">
                  ≈ {roiResults.recoveredCarts} سلة مسترجعة/شهر
                </span>
              </div>
            </div>
          </div>
        </div>
      </section> */}

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
                المتاجر
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

            {/* Dots */}
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
                المتاجر الإلكترونية
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
                متجر ناشئ
              </div>
              <div className="mb-2">
                <span
                  className="text-5xl font-bold"
                  style={{ color: colors.textDark }}
                >
                  1,500
                </span>
                <span style={{ color: colors.textMuted }} className="mr-1">
                  {" "}
                  ر.س/شهر
                </span>
              </div>
              <p className="text-sm mb-8" style={{ color: colors.textMuted }}>
                للمتاجر الصغيرة والبداية
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "حتى 50 طلب/يوم",
                  "تتبع الطلبات",
                  "الأسئلة الشائعة",
                  "واتساب تلقائي",
                  "لوحة تحكم",
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
              <a
                href="/demo"
                className="block w-full text-center py-4 rounded-2xl font-semibold border-2 transition-all hover:shadow-lg"
                style={{ borderColor: colors.primary, color: colors.primary }}
              >
                ابدأ مجاناً
              </a>
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
                متجر نامي
              </div>
              <div className="mb-2">
                <span
                  className="text-5xl font-bold"
                  style={{ color: colors.textDark }}
                >
                  3,500
                </span>
                <span style={{ color: colors.textMuted }} className="mr-1">
                  {" "}
                  ر.س/شهر
                </span>
              </div>
              <p className="text-sm mb-8" style={{ color: colors.textMuted }}>
                للمتاجر المتوسطة
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "حتى 200 طلب/يوم",
                  "كل مميزات الناشئ",
                  "استرجاع السلات",
                  "طلبات الإرجاع",
                  "تكامل CRM",
                  "تقارير متقدمة",
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
              <a
                href="/demo"
                className="block w-full text-center py-4 rounded-2xl font-semibold text-white transition-all hover:shadow-xl"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                  boxShadow: `0 8px 24px ${colors.primary}40`,
                }}
              >
                ابدأ الآن
              </a>
            </div>

           
            <div
              className="p-8 rounded-3xl bg-white border-2 transition-all hover:shadow-xl"
              style={{ borderColor: colors.bgLight }}
            >
              <div
                className="text-sm font-bold mb-3"
                style={{ color: colors.accent }}
              >
                متجر كبير
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
                للمتاجر الكبيرة والماركات
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "طلبات غير محدودة",
                  "كل مميزات النامي",
                  "مدير حساب مخصص",
                  "SLA مضمون",
                  "تكامل ERP",
                  "API مخصص",
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
              <a
                href="/demo"
                className="block w-full text-center py-4 rounded-2xl font-semibold border-2 transition-all hover:shadow-lg"
                style={{ borderColor: colors.accent, color: colors.accent }}
              >
                تواصل معنا
              </a>
            </div>
          </div>
        </div>
      </section>  */}

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
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
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
          <div className="text-6xl mb-6">🛒</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
            جاهز تسترجع 35%
            <br />
            من سلاتك المتروكة؟
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
            انضم لأكثر من 200 متجر إلكتروني يستخدمون سندس لزيادة مبيعاتهم
          </p>

          {/* ===== CTA — زر واحد فقط يوجه نحو /demo ===== */}
          <div className="flex justify-center">
            <a
              href="/demo"
              className="px-10 py-5 bg-white rounded-2xl font-bold text-lg shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-3xl"
              style={{ color: colors.primary }}
            >
              احجز عرضك التجريبي
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-12 text-white/70 text-sm">
            <span>🔗 يتكامل مع سلة وزد</span>
            <span>📦 ربط شركات الشحن</span>
            <span>💳 دعم تابي وتمارا</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SondosEcommerce;
