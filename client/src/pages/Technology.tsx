import React, { useState, useEffect } from "react";
import "../index.css";

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

  const statKeyLabel = (key: string) =>
    ({
      tickets: "التذاكر",
      onboarding: "Onboarding",
      support: "الدعم",
      coverage: "التغطية",
      cost: "التكلفة",
      scale: "التوسع",
      vip: "VIP",
      sla: "SLA",
      response: "الاستجابة",
      rating: "التقييم",
      reviews: "المراجعات",
      uptime: "Uptime",
      resolution: "الحل",
      sales: "المبيعات",
      alerts: "التنبيهات",
      clarity: "الوضوح",
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
            دعم ذكي لشركات التقنية
          </div>

          {/* Headline */}
          <h1 className="font-['Instrument_Sans',sans-serif] text-[clamp(38px,5.5vw,68px)] font-bold leading-[1.08] tracking-tight mb-6 max-w-4xl mx-auto animate-fade-up animation-delay-100">
            قلّل تذاكر الدعم <span className="text-[#9d4edd]">70%</span>
            <br />
            وارفع التحويل 40%
          </h1>

          {/* Subheadline */}
          <p className="text-[clamp(16px,1.8vw,19px)] font-semibold text-[var(--t1)] max-w-[580px] mx-auto leading-relaxed mb-4 animate-fade-up animation-delay-150">
            سندس يحل استفسارات العملاء من قاعدة معرفتك، يساعد في Onboarding،
            ويقدم دعم تقني Level 1 - 24/7 بكل اللغات 🎫
          </p>

          {/* Social proof */}
          <p className="text-[clamp(14px,1.6vw,17px)] text-[var(--t2)] max-w-[680px] mx-auto leading-relaxed mb-9 animate-fade-up animation-delay-200">
            ✓ +100 شركة تقنية &nbsp;·&nbsp; ✓ 500,000+ محادثة شهرياً
            &nbsp;·&nbsp; ✓ 24/7 بكل اللغات
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-up animation-delay-300">
            {[
              { value: "-70%", label: "تذاكر الدعم", icon: "🎫" },
              { value: "+40%", label: "تحويل Trial", icon: "🎯" },
              { value: "24/7", label: "دعم عالمي", icon: "🌍" },
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
          <div className="flex items-center justify-center gap-3.5 mb-10 flex-wrap animate-fade-up animation-delay-300">
            <a
              href="/demo"
              className="group inline-flex items-center gap-2 px-8 py-3.5 text-[15px] font-semibold text-white gradient-bg glow rounded-full hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(90,24,154,0.4)] transition-all duration-300 shimmer"
            >
              احجز عرضك التجريبي
            </a>
          </div>

          {/* Integrations hint */}
          <div className="flex flex-wrap justify-center items-center gap-3 animate-fade-up animation-delay-300">
            <span className="text-sm text-[var(--t2)]">يتكامل مع:</span>
            {["Zendesk", "Intercom", "Notion", "Slack"].map((tool, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full text-xs font-medium bg-[rgba(90,24,154,0.08)] text-[#9d4edd] border border-[rgba(90,24,154,0.15)]"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PROBLEMS SECTION ==================== */}
      <section className="py-20 bg-[var(--bg2)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="font-['Instrument_Sans',sans-serif] text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4">
              تحديات شركات <span className="text-[#9d4edd]">التقنية</span>
            </h2>
          </div>

          {/* Problems */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: "🎫",
                title: "تذاكر متكررة",
                desc: "نفس الأسئلة مراراً تستهلك وقت الفريق",
              },
              {
                icon: "🐌",
                title: "Onboarding بطيء",
                desc: "عملاء جدد يضيعون = Trial لا يتحول",
              },
              {
                icon: "🌍",
                title: "مناطق زمنية",
                desc: "عملاء عالميين يحتاجون دعم 24/7",
              },
              {
                icon: "💸",
                title: "تكلفة الدعم",
                desc: "فريق كبير للدعم = تكلفة عالية",
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
                icon: "🤖",
                title: "-70% تذاكر",
                desc: "إجابات فورية من قاعدة المعرفة",
              },
              {
                icon: "🎯",
                title: "+40% تحويل",
                desc: "Onboarding تفاعلي يرشد العميل",
              },
              {
                icon: "🌐",
                title: "24/7 عالمي",
                desc: "كل اللغات، كل المناطق الزمنية",
              },
              {
                icon: "💰",
                title: "-80% تكلفة",
                desc: "دعم Enterprise بتكلفة Startup",
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
              حلول لكل نوع <span className="text-[#9d4edd]">شركة تقنية</span>
            </h2>
            <p className="text-[var(--t2)] text-lg">
              سندس يتكيف مع طبيعة عملك التقني
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

      {/* ==================== FEATURES SECTION ==================== */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Instrument_Sans',sans-serif] text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4">
              مميزات مصممة <span className="text-[#9d4edd]">للتقنية</span>
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

      {/* ==================== USE CASES ==================== */}
      <section id="usecases" className="py-24 px-6 bg-[var(--bg2)]">
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

      {/* ==================== INTEGRATIONS ==================== */}
      <section id="integrations" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Instrument_Sans',sans-serif] text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4">
              يتكامل مع <span className="text-[#9d4edd]">أدواتك المفضلة</span>
            </h2>
            <p className="text-[var(--t2)]">
              ربط مباشر مع أشهر أدوات الدعم والتطوير
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tool, idx) => (
              <div
                key={idx}
                className="px-6 py-4 rounded-2xl text-center bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border border-[rgba(90,24,154,0.1)] hover:border-[rgba(90,24,154,0.25)] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="text-3xl mb-2">{tool.icon}</div>
                <div className="font-semibold text-[var(--t1)]">
                  {tool.name}
                </div>
                <div className="text-xs mt-1 px-2 py-0.5 rounded-full inline-block bg-[rgba(90,24,154,0.08)] text-[#9d4edd]">
                  {tool.type}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border border-[rgba(90,24,154,0.1)] shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
              <span className="text-2xl">🔌</span>
              <span className="text-[var(--t1)]">
                <strong>API مفتوح</strong> للتكامل مع أي نظام آخر
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ROI CALCULATOR ==================== 
      <section id="roi" className="py-24 px-6 bg-[var(--bg2)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[13px] font-medium mb-3 text-[#9d4edd]">
              🧮 حاسبة مبنية على بيانات حقيقية
            </p>
            <h2 className="font-['Instrument_Sans',sans-serif] text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight">
              احسب <span className="text-[#9d4edd]">عائد الاستثمار</span>
            </h2>
            <p className="mt-3 text-[var(--t2)]">
              اكتشف كم يمكنك توفيره وكسبه مع سندس
            </p>
          </div>

          <div className="rounded-3xl p-8 sm:p-10 bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border border-[rgba(90,24,154,0.15)] shadow-[0_0_60px_rgba(90,24,154,0.08)]">
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {[
                {
                  label: "تذاكر الدعم الشهرية",
                  key: "monthlyTickets",
                  min: 100,
                  max: 10000,
                  step: 100,
                  suffix: " تذكرة",
                },
                {
                  label: "فريق الدعم (عدد الموظفين)",
                  key: "supportAgents",
                  min: 2,
                  max: 30,
                  step: 1,
                  suffix: " موظف",
                },
                {
                  label: "Free Trials الشهرية",
                  key: "monthlyTrials",
                  min: 50,
                  max: 2000,
                  step: 50,
                  suffix: " Trial",
                },
                {
                  label: "نسبة التحويل الحالية",
                  key: "trialConversion",
                  min: 5,
                  max: 30,
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
              <div className="p-6 rounded-2xl text-center bg-[rgba(16,185,129,0.07)] border border-[rgba(16,185,129,0.2)]">
                <div className="text-sm mb-2 text-emerald-600">
                  توفير تكلفة الدعم
                </div>
                <div className="text-2xl font-bold text-emerald-600">
                  {roiResults.supportSavings.toLocaleString()} ر.س
                </div>
                <div className="text-xs text-[var(--t3)]">
                  -{roiResults.agentsReduced} موظف
                </div>
              </div>
              <div className="p-6 rounded-2xl text-center bg-[rgba(90,24,154,0.06)] border border-[rgba(90,24,154,0.15)]">
                <div className="text-sm mb-2 text-[#9d4edd]">
                  زيادة إيرادات التحويل
                </div>
                <div className="text-2xl font-bold text-[#9d4edd]">
                  +{roiResults.conversionGain.toLocaleString()} ر.س
                </div>
                <div className="text-xs text-[var(--t3)]">
                  {roiResults.newConversion}% تحويل جديد
                </div>
              </div>
              <div className="p-6 rounded-2xl text-center bg-[rgba(239,68,68,0.07)] border border-[rgba(239,68,68,0.2)]">
                <div className="text-sm mb-2 text-red-400">تكلفة سندس</div>
                <div className="text-2xl font-bold text-red-500">
                  {roiResults.sondosCost.toLocaleString()} ر.س
                </div>
                <div className="text-xs text-[var(--t3)]">شهرياً</div>
              </div>
              <div className="p-6 rounded-2xl text-center bg-[rgba(16,185,129,0.07)] border border-[rgba(16,185,129,0.2)]">
                <div className="text-sm mb-2 text-emerald-600">
                  تذاكر تُحل تلقائياً
                </div>
                <div className="text-2xl font-bold text-emerald-600">
                  {roiResults.ticketsAutomated.toLocaleString()}
                </div>
                <div className="text-xs text-[var(--t3)]">70% من التذاكر</div>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-flex flex-wrap justify-center items-center gap-4 px-8 py-4 rounded-2xl gradient-bg">
                <span className="text-white text-lg">صافي العائد الشهري:</span>
                <span className="text-white text-4xl font-bold">
                  +{roiResults.netGain.toLocaleString()} ر.س
                </span>
                <span className="text-white/80 text-sm">
                  ROI: {roiResults.roi}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Instrument_Sans',sans-serif] text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4">
              قصص نجاح <span className="text-[#9d4edd]">شركات التقنية</span>
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
          <div className="text-6xl mb-6">💻</div>
          <h2 className="font-['Instrument_Sans',sans-serif] text-[clamp(28px,4vw,48px)] font-bold leading-[1.08] tracking-tight mb-6 text-white">
            جاهز تقلّل تذاكر الدعم 70%
            <br />
            وترفع التحويل 40%؟
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
            انضم لأكثر من 100 شركة تقنية تستخدم سندس لتحسين تجربة العملاء
          </p>
          <div className="flex justify-center mb-12">
            <a
              href="/demo"
              className="inline-flex items-center gap-2 px-10 py-5 bg-[rgba(255,255,255,0.95)] rounded-2xl font-bold text-lg shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-white text-[#5a189a] shimmer"
            >
              احجز عرضك التجريبي
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-white/70 text-sm">
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
