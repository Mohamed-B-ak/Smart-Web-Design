import React, { useState, useEffect } from "react";

// ==================== SONDOS AI - TECH & SOFTWARE LANDING PAGE ====================
// Silicon Valley Grade | Violet Theme | Arabic RTL

const SondosTech = () => {
  const [activeSegment, setActiveSegment] = useState(0);
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const [roiInputs, setRoiInputs] = useState({
    monthlyTickets: 2000,
    avgResolutionTime: 24,
    supportAgents: 8,
    monthlyTrials: 500,
    trialConversion: 15,
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
    tech: "#8B5CF6",
  };

  const segments = [
    {
      id: "saas",
      name: "شركات SaaS",
      icon: "☁️",
      description: "برمجيات كخدمة واشتراكات",
      painPoints: [
        "تذاكر دعم متكررة عن نفس المشاكل",
        "Onboarding بطيء يقلل التحويل",
        "دعم 24/7 متعدد اللغات مكلف",
      ],
      solutions: [
        "حل 70% من التذاكر تلقائياً من قاعدة المعرفة",
        "Onboarding تفاعلي يرفع التحويل 40%",
        "دعم بكل اللغات بتكلفة ثابتة",
      ],
      stats: { tickets: "-70%", onboarding: "+40%", support: "24/7" },
      useCases: [
        "الدعم الفني",
        "Onboarding",
        "شرح المميزات",
        "الفواتير",
        "التجديد",
      ],
    },
    {
      id: "startups",
      name: "الشركات الناشئة",
      icon: "🚀",
      description: "Startups وScale-ups",
      painPoints: [
        "فريق صغير لا يكفي للدعم 24/7",
        "العملاء من مناطق زمنية مختلفة",
        "الميزانية محدودة للتوظيف",
      ],
      solutions: [
        "دعم على مستوى Enterprise بتكلفة Startup",
        "تغطية كل المناطق الزمنية",
        "تكلفة ثابتة تنمو معك",
      ],
      stats: { coverage: "24/7", cost: "-80%", scale: "∞" },
      useCases: [
        "دعم العملاء",
        "جمع Feedback",
        "تأهيل العملاء",
        "العروض التوضيحية",
      ],
    },
    {
      id: "enterprise",
      name: "حلول المؤسسات",
      icon: "🏢",
      description: "Enterprise Software",
      painPoints: [
        "عملاء VIP يتوقعون دعم فوري",
        "تكاملات معقدة تحتاج متابعة",
        "SLAs صارمة يصعب الالتزام بها",
      ],
      solutions: [
        "تعريف فوري لـ VIP ومعاملة خاصة",
        "متابعة التكاملات والمشاريع",
        "استجابة فورية تضمن SLA",
      ],
      stats: { vip: "فوري", sla: "99.9%", response: "< 30 ثانية" },
      useCases: [
        "دعم VIP",
        "متابعة المشاريع",
        "التصعيد الذكي",
        "تقارير العملاء",
      ],
    },
    {
      id: "apps",
      name: "تطبيقات الجوال",
      icon: "📱",
      description: "iOS, Android, Cross-platform",
      painPoints: [
        "تقييمات سلبية بسبب مشاكل غير محلولة",
        "حجم كبير من استفسارات الاستخدام",
        "صعوبة دعم إصدارات متعددة",
      ],
      solutions: [
        "رد سريع يحسّن التقييمات",
        "إجابات فورية من Help Center",
        "دعم مخصص لكل إصدار",
      ],
      stats: { rating: "+0.8⭐", reviews: "+150%", response: "فوري" },
      useCases: [
        "مشاكل التطبيق",
        "الاشتراكات",
        "استرجاع الحساب",
        "شرح المميزات",
      ],
    },
    {
      id: "hosting",
      name: "الاستضافة والسحابة",
      icon: "🖥️",
      description: "Cloud, Hosting, Infrastructure",
      painPoints: [
        "مشاكل تقنية عاجلة 24/7",
        "استفسارات التسعير والخطط",
        "طلبات الترقية والتعديل",
      ],
      solutions: [
        "دعم تقني أولي يحل 50% من المشاكل",
        "حاسبة أسعار ذكية",
        "ترقية وتعديل بالمحادثة",
      ],
      stats: { uptime: "99.9%", resolution: "-50%", sales: "+35%" },
      useCases: [
        "الدعم الفني",
        "التسعير",
        "الترقية",
        "مشاكل DNS",
        "النسخ الاحتياطي",
      ],
    },
    {
      id: "security",
      name: "الأمن السيبراني",
      icon: "🔐",
      description: "Security Solutions",
      painPoints: [
        "تنبيهات أمنية تحتاج استجابة فورية",
        "عملاء قلقون يحتاجون طمأنة",
        "شرح التقارير الأمنية معقد",
      ],
      solutions: [
        "تصنيف التنبيهات وتصعيد العاجل",
        "طمأنة العملاء بمعلومات دقيقة",
        "شرح مبسط للتقارير والتوصيات",
      ],
      stats: { alerts: "فوري", response: "< 1 دقيقة", clarity: "100%" },
      useCases: [
        "التنبيهات الأمنية",
        "شرح التقارير",
        "التوصيات",
        "حالات الطوارئ",
      ],
    },
  ];

  const features = [
    {
      icon: "📚",
      title: "تكامل قاعدة المعرفة",
      description:
        "سندس يتصل بـ Notion, Confluence, Help Center ويجيب من وثائقك مباشرة",
      highlight: "Knowledge Base",
    },
    {
      icon: "🎯",
      title: "Onboarding تفاعلي",
      description:
        "يرشد العملاء الجدد خطوة بخطوة، يجيب أسئلتهم، ويضمن تفعيل ناجح",
      highlight: "+40% تحويل",
    },
    {
      icon: "🎫",
      title: "تقليل تذاكر الدعم",
      description:
        "حل 70% من الاستفسارات فوراً = فريقك يركز على المشاكل الحقيقية",
      highlight: "-70% تذاكر",
    },
    {
      icon: "🔄",
      title: "تجديد الاشتراكات",
      description: "تذكير ذكي قبل انتهاء الاشتراك + عروض مخصصة = تقليل Churn",
      highlight: "-25% Churn",
    },
    {
      icon: "💻",
      title: "دعم تقني ذكي",
      description:
        "خطوات استكشاف الأخطاء، جمع المعلومات التقنية، وتصعيد ذكي للفريق",
      highlight: "L1 Support",
    },
    {
      icon: "🌍",
      title: "متعدد اللغات والمناطق",
      description:
        "دعم بكل اللغات الرئيسية، في كل المناطق الزمنية، بتكلفة واحدة",
      highlight: "24/7 Global",
    },
  ];

  const testimonials = [
    {
      quote:
        "كنا نستقبل 200 تذكرة يومياً. سندس يحل 70% منها تلقائياً الآن. فريق الدعم أصبح يركز على المشاكل المعقدة فقط.",
      name: "م. أحمد الشهري",
      role: "VP of Customer Success",
      company: "منصة SaaS سعودية",
      image: "👨‍💻",
      metric: "-70% تذاكر الدعم",
    },
    {
      quote:
        "نسبة تحويل Trial كانت 12%. بعد Onboarding سندس التفاعلي، ارتفعت إلى 22%. فرق كبير في الإيرادات!",
      name: "أ. سارة القحطاني",
      role: "Growth Manager",
      company: "تطبيق Fintech",
      image: "👩‍💼",
      metric: "+83% تحويل Trial",
    },
    {
      quote:
        "عملاؤنا من 20 دولة. كنا نحتاج فريق متعدد اللغات. سندس يخدمهم بـ 8 لغات 24/7 وتكلفته أقل من موظف واحد.",
      name: "أ. فهد المالكي",
      role: "CEO",
      company: "شركة استضافة",
      image: "🧔",
      metric: "8 لغات بتكلفة موظف",
    },
  ];

  const faqs = [
    {
      q: "كيف يتصل سندس بقاعدة المعرفة الخاصة بنا؟",
      a: "سندس يتكامل مباشرة مع Notion, Confluence, Zendesk, Intercom, GitBook, وأي Help Center عبر API. يقرأ مقالاتك ووثائقك ويجيب العملاء منها مباشرة. يتحدث تلقائياً عند تحديث المحتوى.",
    },
    {
      q: "كيف يساعد في Onboarding العملاء الجدد؟",
      a: "سندس يرحب بالعميل الجديد، يسأله عن أهدافه، يرشده للخطوات الأولى، يجيب أسئلته فوراً، ويتابع معه حتى يصبح مستخدم نشط. يمكنه إرسال رسائل متابعة عبر واتساب أو البريد.",
    },
    {
      q: "هل يستطيع التعامل مع المشاكل التقنية؟",
      a: "نعم! سندس مدرّب على سيناريوهات الدعم الفني: جمع معلومات النظام، خطوات استكشاف الأخطاء، فحص الـ Logs، وتصعيد ذكي للفريق مع كل التفاصيل. يحل 40-50% من المشاكل التقنية الشائعة تلقائياً.",
    },
    {
      q: "كيف يتعامل مع العملاء VIP والـ Enterprise؟",
      a: "سندس يتعرف على عملاء VIP من رقم الهاتف أو البريد. يعاملهم بطريقة مميزة، يمكنه الوصول لبياناتهم الخاصة، وتحويلهم لمدير الحساب المخصص إذا لزم الأمر - مع context كامل عن المحادثة.",
    },
    {
      q: "ما الأنظمة التي يتكامل معها؟",
      a: "سندس يتكامل مع: CRM (Salesforce, HubSpot, Pipedrive)، Help Desk (Zendesk, Freshdesk, Intercom)، Knowledge Base (Notion, Confluence)، Communication (Slack, Teams)، و Billing (Stripe, Paddle). نوفر Webhooks و API لأي تكامل مخصص.",
    },
    {
      q: "كم يستغرق التفعيل؟",
      a: "التفعيل الأساسي (FAQ + Knowledge Base) خلال 3-5 أيام. التكاملات المتقدمة (CRM, Billing) تحتاج 1-2 أسبوع. نوفر فريق Customer Success يساعدك في الإعداد والتخصيص.",
    },
  ];

  const stats = [
    { value: "500K+", label: "محادثة دعم شهرياً", icon: "💬" },
    { value: "100+", label: "شركة تقنية", icon: "🏢" },
    { value: "-70%", label: "تقليل تذاكر الدعم", icon: "🎫" },
    { value: "+40%", label: "تحويل Onboarding", icon: "🎯" },
  ];

  const techStack = [
    { name: "Zendesk", icon: "🎫", type: "Help Desk" },
    { name: "Intercom", icon: "💬", type: "Help Desk" },
    { name: "Freshdesk", icon: "🎧", type: "Help Desk" },
    { name: "Salesforce", icon: "☁️", type: "CRM" },
    { name: "HubSpot", icon: "🧡", type: "CRM" },
    { name: "Notion", icon: "📝", type: "Knowledge" },
    { name: "Confluence", icon: "📚", type: "Knowledge" },
    { name: "Slack", icon: "💼", type: "Communication" },
    { name: "Stripe", icon: "💳", type: "Billing" },
    { name: "GitHub", icon: "🐙", type: "Dev" },
  ];

  const supportTiers = [
    {
      tier: "L0",
      name: "Self-Service",
      percentage: 40,
      description: "FAQ، Knowledge Base، إجابات فورية",
      color: colors.success,
    },
    {
      tier: "L1",
      name: "AI Support",
      percentage: 30,
      description: "استكشاف أخطاء، جمع معلومات، حلول موجهة",
      color: colors.primary,
    },
    {
      tier: "L2",
      name: "Human Support",
      percentage: 20,
      description: "مشاكل معقدة تحتاج خبرة بشرية",
      color: colors.warning,
    },
    {
      tier: "L3",
      name: "Escalation",
      percentage: 10,
      description: "مشاكل حرجة، Engineering، VIP",
      color: colors.danger,
    },
  ];

  const useCaseDemo = [
    {
      title: "🎫 حل تذكرة دعم",
      conversation: [
        { role: "ai", text: "مرحباً! دعم TechApp 🚀\nكيف أقدر أساعدك اليوم؟" },
        { role: "user", text: "التطبيق يعطيني خطأ لما أحاول أرفع ملف" },
        {
          role: "ai",
          text: "آسف على هذا الإزعاج! خلني أساعدك 🔧\n\nما نوع الملف اللي تحاول ترفعه؟ وما حجمه؟",
        },
        { role: "user", text: "PDF حجمه 15 ميجا" },
        {
          role: "ai",
          text: "وجدت المشكلة! 💡\n\nالحد الأقصى لحجم الملف في خطتك هو 10 ميجا.\n\nعندك خيارين:\n1️⃣ ضغط الملف إلى أقل من 10 ميجا\n2️⃣ ترقية لخطة Pro (حد 100 ميجا)\n\nتبي أساعدك في أي منهم؟",
        },
        { role: "user", text: "كم سعر الترقية؟" },
        {
          role: "ai",
          text: "خطة Pro:\n💰 99 ر.س/شهر (بدل 149)\n✅ رفع ملفات حتى 100 ميجا\n✅ مساحة تخزين 50 جيجا\n✅ دعم أولوية\n\nتبي أفعّلها لك؟ أقدر أضيفها لحسابك الآن 😊",
        },
      ],
    },
    {
      title: "🎯 Onboarding عميل جديد",
      conversation: [
        {
          role: "ai",
          text: "مرحباً بك في TechApp! 🎉\n\nأنا هنا أساعدك تبدأ بسرعة.\n\nإيش الهدف الرئيسي من استخدامك للتطبيق؟",
        },
        { role: "user", text: "أبغى أنظم مشاريع فريقي" },
        {
          role: "ai",
          text: "اختيار ممتاز! 👍\n\nخلني أرشدك للخطوات الأولى:\n\n1️⃣ أنشئ مشروعك الأول\n2️⃣ أضف أعضاء الفريق\n3️⃣ أنشئ أول مهمة\n\nتبي أبدأ معك الخطوة الأولى؟",
        },
        { role: "user", text: "إيه" },
        {
          role: "ai",
          text: 'ممتاز! 🚀\n\nاضغط على "مشروع جديد" في الزاوية العليا.\n\nسمّه مثلاً "مشروع تجريبي"\n\nجاهز؟ أخبرني لما تنتهي 😊',
        },
        { role: "user", text: "تم" },
        {
          role: "ai",
          text: 'رائع! 🎊\n\nالآن أضف أعضاء فريقك:\n1. اضغط على "إعدادات المشروع"\n2. اختر "أعضاء الفريق"\n3. أدخل بريدهم الإلكتروني\n\nنصيحة: يمكنك تحديد صلاحيات مختلفة لكل عضو 💡',
        },
      ],
    },
  ];

  const calculateROI = () => {
    const { monthlyTickets, supportAgents, monthlyTrials, trialConversion } =
      roiInputs;
    const agentCost = 8000;
    const currentSupportCost = supportAgents * agentCost;
    const newAgentsNeeded = Math.ceil(supportAgents * 0.35);
    const sondosCost =
      monthlyTickets <= 1000 ? 8000 : monthlyTickets <= 5000 ? 18000 : 35000;
    const newSupportCost = newAgentsNeeded * agentCost + sondosCost;
    const supportSavings = currentSupportCost - newSupportCost;
    const currentTrialRevenue = monthlyTrials * (trialConversion / 100) * 500;
    const newConversion = Math.min(trialConversion * 1.4, 40);
    const newTrialRevenue = monthlyTrials * (newConversion / 100) * 500;
    const conversionGain = newTrialRevenue - currentTrialRevenue;
    const churnReduction = currentTrialRevenue * 0.15;
    const totalBenefit = supportSavings + conversionGain + churnReduction;
    const netGain = totalBenefit - sondosCost;
    const roi = (netGain / sondosCost) * 100;
    return {
      currentSupportCost: Math.round(currentSupportCost),
      newSupportCost: Math.round(newSupportCost),
      supportSavings: Math.round(supportSavings),
      conversionGain: Math.round(conversionGain),
      sondosCost,
      netGain: Math.round(netGain),
      roi: Math.round(roi),
      ticketsAutomated: Math.round(monthlyTickets * 0.7),
      agentsReduced: supportAgents - newAgentsNeeded,
      newConversion: Math.round(newConversion),
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
                <span className="text-lg">💻</span>
                <span>دعم ذكي لشركات التقنية</span>
              </div>

              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                style={{ color: colors.textDark }}
              >
                قلّل تذاكر الدعم
                <span
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {" "}
                  70%{" "}
                </span>
                <br />
                وارفع التحويل 40%
              </h1>

              <p
                className="text-lg sm:text-xl mb-10 leading-relaxed max-w-2xl mx-auto"
                style={{ color: colors.textMuted }}
              >
                سندس يحل استفسارات العملاء من قاعدة معرفتك، يساعد في Onboarding،
                ويقدم دعم تقني Level 1 - 24/7 بكل اللغات
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-10">
                {[
                  { value: "-70%", label: "تذاكر الدعم", icon: "🎫" },
                  { value: "+40%", label: "تحويل Trial", icon: "🎯" },
                  { value: "24/7", label: "دعم عالمي", icon: "🌍" },
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

              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <span className="text-sm" style={{ color: colors.textMuted }}>
                  يتكامل مع:
                </span>
                {["Zendesk", "Intercom", "Notion", "Slack"].map((tool, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: colors.bgLight,
                      color: colors.primary,
                    }}
                  >
                    {tool}
                  </span>
                ))}
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

      {/* ==================== PROBLEMS & SOLUTIONS ==================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: colors.textDark }}
            >
              تحديات شركات
              <span
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {" "}
                التقنية
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: "🎫",
                title: "تذاكر متكررة",
                desc: "نفس الأسئلة مراراً تستهلك وقت الفريق",
                color: colors.danger,
              },
              {
                icon: "🐌",
                title: "Onboarding بطيء",
                desc: "عملاء جدد يضيعون = Trial لا يتحول",
                color: colors.warning,
              },
              {
                icon: "🌍",
                title: "مe�اطق زمنية",
                desc: "عملاء عالميين يحتاجون دعم 24/7",
                color: colors.accent,
              },
              {
                icon: "💸",
                title: "تكلفة الدعم",
                desc: "فريق كبير للدعم = تكلفة عالية",
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

          <div className="text-center my-12">
            <div
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl"
              style={{ background: colors.bgLight }}
            >
              <span className="text-2xl">⬇️</span>
              <span className="font-bold" style={{ color: colors.primary }}>
                سندس يحل كل هذا
              </span>
              <span className="text-2xl">⬇️</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🤖",
                title: "-70% تذاكر",
                desc: "إجابات فورية من قاعدة المعرفة",
                color: colors.success,
              },
              {
                icon: "🎯",
                title: "+40% تحويل",
                desc: "Onboarding تفاعلي يرشد العميل",
                color: colors.primary,
              },
              {
                icon: "🌐",
                title: "24/7 عالمي",
                desc: "كل اللغات، كل المناطق الزمنية",
                color: colors.accent,
              },
              {
                icon: "💰",
                title: "-80% تكلفة",
                desc: "دعم Enterprise بتكلفة Startup",
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
                شركة تقنية
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
                          {key === "tickets"
                            ? "التذاكر"
                            : key === "onboarding"
                              ? "Onboarding"
                              : key === "support"
                                ? "الدعم"
                                : key === "coverage"
                                  ? "التغطية"
                                  : key === "cost"
                                    ? "التكلفة"
                                    : key === "scale"
                                      ? "التوسع"
                                      : key === "vip"
                                        ? "VIP"
                                        : key === "sla"
                                          ? "SLA"
                                          : key === "response"
                                            ? "الاستجابة"
                                            : key === "rating"
                                              ? "التقييم"
                                              : key === "reviews"
                                                ? "المراجعات"
                                                : key === "uptime"
                                                  ? "Uptime"
                                                  : key === "resolution"
                                                    ? "الحل"
                                                    : key === "sales"
                                                      ? "المبيعات"
                                                      : key === "alerts"
                                                        ? "التنبيهات"
                                                        : key === "clarity"
                                                          ? "الوضوح"
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
                للتقنية
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
                أدواتك المفضلة
              </span>
            </h2>
            <p style={{ color: colors.textMuted }}>
              ربط مباشر مع أشهر أدوات الدعم والتطوير
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tool, idx) => (
              <div
                key={idx}
                className="px-6 py-4 rounded-2xl bg-white border-2 text-center transition-all hover:shadow-xl hover:-translate-y-1"
                style={{ borderColor: colors.bgLight }}
              >
                <div className="text-3xl mb-2">{tool.icon}</div>
                <div
                  className="font-semibold"
                  style={{ color: colors.textDark }}
                >
                  {tool.name}
                </div>
                <div
                  className="text-xs mt-1"
                  style={{ color: colors.textMuted }}
                >
                  {tool.type}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl"
              style={{
                background: "white",
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
              }}
            >
              <span className="text-2xl">🔌</span>
              <span style={{ color: colors.textDark }}>
                <strong>API مفتوح</strong> للتكامل مع أي نظام آخر
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ROI CALCULATOR ==================== */}
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
                عائد الاستثمار
              </span>
            </h2>
            <p style={{ color: colors.textMuted }}>
              اكتشف كم يمكنك توفيره وكسبه مع سندس
            </p>
          </div>

          <div
            className="rounded-3xl p-8 sm:p-10 shadow-xl"
            style={{ background: colors.bgLighter }}
          >
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div>
                <label
                  className="block text-sm font-medium mb-3"
                  style={{ color: colors.textDark }}
                >
                  تذاكر الدعم الشهرية
                </label>
                <input
                  type="range"
                  min="100"
                  max="10000"
                  step="100"
                  value={roiInputs.monthlyTickets}
                  onChange={(e) =>
                    setRoiInputs({
                      ...roiInputs,
                      monthlyTickets: parseInt(e.target.value),
                    })
                  }
                  className="w-full h-3 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(90deg, ${colors.primary} ${roiInputs.monthlyTickets / 100}%, ${colors.bgLight} ${roiInputs.monthlyTickets / 100}%)`,
                  }}
                />
                <div
                  className="text-center mt-2 text-2xl font-bold"
                  style={{ color: colors.primary }}
                >
                  {roiInputs.monthlyTickets.toLocaleString()} تذكرة
                </div>
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-3"
                  style={{ color: colors.textDark }}
                >
                  فريق الدعم (عدد الموظفين)
                </label>
                <input
                  type="range"
                  min="2"
                  max="30"
                  value={roiInputs.supportAgents}
                  onChange={(e) =>
                    setRoiInputs({
                      ...roiInputs,
                      supportAgents: parseInt(e.target.value),
                    })
                  }
                  className="w-full h-3 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(90deg, ${colors.primary} ${(roiInputs.supportAgents - 2) * 3.5}%, ${colors.bgLight} ${(roiInputs.supportAgents - 2) * 3.5}%)`,
                  }}
                />
                <div
                  className="text-center mt-2 text-2xl font-bold"
                  style={{ color: colors.primary }}
                >
                  {roiInputs.supportAgents} موظف
                </div>
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-3"
                  style={{ color: colors.textDark }}
                >
                  Free Trials الشهرية
                </label>
                <input
                  type="range"
                  min="50"
                  max="2000"
                  step="50"
                  value={roiInputs.monthlyTrials}
                  onChange={(e) =>
                    setRoiInputs({
                      ...roiInputs,
                      monthlyTrials: parseInt(e.target.value),
                    })
                  }
                  className="w-full h-3 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(90deg, ${colors.primary} ${roiInputs.monthlyTrials / 20}%, ${colors.bgLight} ${roiInputs.monthlyTrials / 20}%)`,
                  }}
                />
                <div
                  className="text-center mt-2 text-2xl font-bold"
                  style={{ color: colors.primary }}
                >
                  {roiInputs.monthlyTrials} Trial
                </div>
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-3"
                  style={{ color: colors.textDark }}
                >
                  نسبة التحويل الحالية
                </label>
                <input
                  type="range"
                  min="5"
                  max="30"
                  value={roiInputs.trialConversion}
                  onChange={(e) =>
                    setRoiInputs({
                      ...roiInputs,
                      trialConversion: parseInt(e.target.value),
                    })
                  }
                  className="w-full h-3 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(90deg, ${colors.primary} ${(roiInputs.trialConversion - 5) * 4}%, ${colors.bgLight} ${(roiInputs.trialConversion - 5) * 4}%)`,
                  }}
                />
                <div
                  className="text-center mt-2 text-2xl font-bold"
                  style={{ color: colors.primary }}
                >
                  {roiInputs.trialConversion}%
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl mb-6 bg-white">
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div
                  className="p-4 rounded-xl"
                  style={{ background: colors.bgLighter }}
                >
                  <div
                    className="text-xs mb-1"
                    style={{ color: colors.textMuted }}
                  >
                    توفير تكلفة الدعم
                  </div>
                  <div
                    className="text-xl font-bold"
                    style={{ color: colors.success }}
                  >
                    {roiResults.supportSavings.toLocaleString()} ر.س
                  </div>
                  <div className="text-xs" style={{ color: colors.textMuted }}>
                    -{roiResults.agentsReduced} موظف
                  </div>
                </div>
                <div
                  className="p-4 rounded-xl"
                  style={{ background: colors.bgLighter }}
                >
                  <div
                    className="text-xs mb-1"
                    style={{ color: colors.textMuted }}
                  >
                    زيادة إيرادات التحويل
                  </div>
                  <div
                    className="text-xl font-bold"
                    style={{ color: colors.primary }}
                  >
                    +{roiResults.conversionGain.toLocaleString()} ر.س
                  </div>
                  <div className="text-xs" style={{ color: colors.textMuted }}>
                    {roiResults.newConversion}% تحويل جديد
                  </div>
                </div>
                <div
                  className="p-4 rounded-xl"
                  style={{ background: colors.bgLighter }}
                >
                  <div
                    className="text-xs mb-1"
                    style={{ color: colors.textMuted }}
                  >
                    تكلفة سندس
                  </div>
                  <div
                    className="text-xl font-bold"
                    style={{ color: colors.accent }}
                  >
                    {roiResults.sondosCost.toLocaleString()} ر.س
                  </div>
                  <div className="text-xs" style={{ color: colors.textMuted }}>
                    شهرياً
                  </div>
                </div>
                <div
                  className="p-4 rounded-xl"
                  style={{ background: colors.bgLighter }}
                >
                  <div
                    className="text-xs mb-1"
                    style={{ color: colors.textMuted }}
                  >
                    تذاكر تُحل تلقائياً
                  </div>
                  <div
                    className="text-xl font-bold"
                    style={{ color: colors.success }}
                  >
                    {roiResults.ticketsAutomated.toLocaleString()}
                  </div>
                  <div className="text-xs" style={{ color: colors.textMuted }}>
                    70% من التذاكر
                  </div>
                </div>
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
                ROI: {roiResults.roi}%
              </div>
            </div>
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
                شركات التقنية
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

      {/* ==================== PRICING ==================== */}
      <section id="الأسعار" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: colors.textDark }}
            >
              أسعار
              <span
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {" "}
                مرنة للتقنية
              </span>
            </h2>
            <p style={{ color: colors.textMuted }}>
              ابدأ مجاناً وادفع حسب النمو
            </p>
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
                Startup
              </div>
              <div className="mb-2">
                <span
                  className="text-5xl font-bold"
                  style={{ color: colors.textDark }}
                >
                  مجاناً
                </span>
              </div>
              <p className="text-sm mb-8" style={{ color: colors.textMuted }}>
                للبداية والتجربة
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "حتى 100 محادثة/شهر",
                  "قاعدة معرفة واحدة",
                  "لغة واحدة",
                  "دعم بالبريد",
                  "تقارير أساسية",
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
                ابدأ مجاناً
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
                Growth
              </div>
              <div className="mb-2">
                <span
                  className="text-5xl font-bold"
                  style={{ color: colors.textDark }}
                >
                  8,000
                </span>
                <span style={{ color: colors.textMuted }} className="mr-1">
                  {" "}
                  ر.س/شهر
                </span>
              </div>
              <p className="text-sm mb-8" style={{ color: colors.textMuted }}>
                للشركات النامية
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "حتى 1,000 محادثة/شهر",
                  "قواعد معرفة متعددة",
                  "5 لغات",
                  "تكامل Zendesk/Intercom",
                  "تحليلات متقدمة",
                  "دعم أولوية",
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
                Scale
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
                للشركات الكبيرة
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "محادثات غير محدودة",
                  "كل مميزات Growth",
                  "مدير نجاح مخصص",
                  "SLA مضمون",
                  "تكاملات مخصصة",
                  "On-premise متاح",
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
          <div className="text-6xl mb-6">💻</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
            جاهز تقلّل تذاكر الدعم 70%
            <br />
            وترفع التحويل 40%؟
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
            انضم لأكثر من 100 شركة تقنية تستخدم سندس لتحسين تجربة العملاء
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

          <div className="flex flex-wrap justify-center gap-4 mt-12 text-white/70 text-sm">
            <span>🔗 Zendesk</span>
            <span>💬 Intercom</span>
            <span>📝 Notion</span>
            <span>💼 Slack</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SondosTech;
