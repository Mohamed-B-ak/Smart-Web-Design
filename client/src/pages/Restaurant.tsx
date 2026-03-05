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

  // ── shared style tokens from healthcare ──
  const pageBg = "bg-[var(--bg,#f7f5fc)] text-[var(--t1,#1a0a2e)]";
  const sectionSoft = "bg-[var(--bg2,rgba(90,24,154,0.03))]";
  const card =
    "bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border border-[rgba(90,24,154,0.1)]";
  const muted = "text-[#4a3a62]";
  const headingFont = "font-['Instrument_Sans',sans-serif]";

  const statKeyLabel = (key) => {
    const map = {
      quotes: "عروض الأسعار",
      claims: "البلاغات",
      renewal: "التجديد",
      satisfaction: "الرضا",
      response: "وقت الرد",
      resolution: "الحل الفوري",
      assessment: "التقييم",
      retention: "الاحتفاظ",
      leads: "العملاء",
      conversion: "التحويل",
      NPS: "التقييم",
      issuance: "الإصدار",
      emergency: "الطوارئ",
      languages: "اللغات",
      comparison: "المقارنة",
      portfolio: "المحفظة",
      efficiency: "الكفاءة",
    };
    return map[key] || key;
  };

  return (
    <div className={`min-h-screen font-sans ${pageBg}`} dir="rtl">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-16 overflow-hidden">
        {/* Background effects from healthcare */}
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
          className="absolute top-20 left-[10%] w-32 h-32 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(90,24,154,0.3), transparent 70%)",
          }}
        />
        <div
          className="absolute top-40 right-[15%] w-24 h-24 rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, rgba(157,78,221,0.3), transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-32 left-[20%] w-20 h-20 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(123,44,191,0.4), transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-[820px] mx-auto">
          {/* Badge — from healthcare inline-flex pill */}
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-[rgba(90,24,154,0.08)] border border-[rgba(90,24,154,0.2)] rounded-full text-[13px] font-medium text-[#9d4edd] mb-7 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#00d68f]" />
            حلول ذكية لقطاع التأمين 🛡️
          </div>

          <h1
            className={`${headingFont} text-[clamp(38px,5.5vw,68px)] font-bold leading-[1.08] tracking-tight mb-6 max-w-4xl mx-auto`}
          >
            ارفع نسبة <span className="text-[#9d4edd]">التجديد 35%</span>
            <br />
            وقلّل تكلفة الدعم 70%
          </h1>

          <p className="text-[clamp(16px,1.8vw,19px)] font-semibold text-[#1a0a2e] max-w-[580px] mx-auto leading-relaxed mb-4">
            سندس يتعامل مع استفسارات العملاء، يستقبل البلاغات 24/7، ويذكّر
            بالتجديد تلقائياً - بينما فريقك يركز على الحالات المهمة
          </p>

          <p className="text-[clamp(14px,1.6vw,17px)] text-[#4a3a62] max-w-[680px] mx-auto leading-relaxed mb-9">
            ✓ +35% نسبة التجديد &nbsp;·&nbsp; ✓ استقبال البلاغات 24/7
            &nbsp;·&nbsp; ✓ 80% أتمتة الاستفسارات
          </p>

          {/* Hero stats pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              { value: "+35%", label: "نسبة التجديد", icon: "🔄" },
              { value: "24/7", label: "استقبال البلاغات", icon: "🚨" },
              { value: "80%", label: "أتمتة الاستفسارات", icon: "🤖" },
            ].map((stat, i) => (
              <div
                key={i}
                className={`px-5 py-4 rounded-2xl text-center ${card} shadow-sm`}
              >
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div
                  className={`${headingFont} text-xl font-bold text-[#9d4edd]`}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-[#8878a0]">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <a href="/demo">
              <button
                className="group inline-flex items-center gap-2 px-8 py-3.5 text-[15px] font-semibold text-white rounded-full hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(90,24,154,0.4)] transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #5a189a, #7b2fff)",
                }}
              >
                احجز عرضك التجريبي
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* ==================== STATS SECTION ==================== */}
      <section id="stats-section" className={`py-16 ${sectionSoft}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl transition-transform group-hover:scale-110 bg-[rgba(90,24,154,0.08)]">
                  {stat.icon}
                </div>
                <div
                  className={`${headingFont} text-3xl sm:text-4xl font-bold mb-2 text-[#9d4edd]`}
                >
                  {statsVisible ? stat.value : "0"}
                </div>
                <div className="text-sm font-medium text-[#8878a0]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CUSTOMER JOURNEY ==================== */}
      <section id="رحلة العميل" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`${headingFont} text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4 text-[#1a0a2e]`}
            >
              تحسين كل مرحلة في{" "}
              <span className="text-[#9d4edd]">رحلة العميل</span>
            </h2>
            <p className={muted}>سندس يحسّن تجربة العميل في كل نقطة تواصل</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insuranceJourney.map((stage, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl ${card} hover:border-[rgba(90,24,154,0.25)] hover:shadow-[0_0_30px_rgba(90,24,154,0.08)] transition-all duration-300`}
              >
                <div className="text-4xl mb-4">{stage.icon}</div>
                <h3
                  className={`${headingFont} font-bold text-lg mb-4 text-[#1a0a2e]`}
                >
                  {stage.stage}
                </h3>
                <div className="space-y-3">
                  <div
                    className="p-3 rounded-xl"
                    style={{
                      background: "rgba(239,68,68,0.08)",
                      border: "1px solid rgba(239,68,68,0.15)",
                    }}
                  >
                    <div className="text-xs font-medium mb-1 text-red-400">
                      ❌ تقليدي
                    </div>
                    <div className="text-sm text-[#7F1D1D]">
                      {stage.traditional}
                    </div>
                  </div>
                  <div
                    className="p-3 rounded-xl"
                    style={{
                      background: "rgba(90,24,154,0.06)",
                      border: "1px solid rgba(90,24,154,0.15)",
                    }}
                  >
                    <div className="text-xs font-medium mb-1 text-[#9d4edd]">
                      ✓ مع سندس
                    </div>
                    <div className="text-sm text-[#1a0a2e]">{stage.sondos}</div>
                  </div>
                </div>
                <div
                  className="mt-4 text-center py-2 rounded-full font-bold text-sm text-[#10B981]"
                  style={{ background: "rgba(16,185,129,0.1)" }}
                >
                  التحسين: {stage.improvement}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SEGMENTS SECTION ==================== */}
      <section id="الحلول" className={`py-24 px-6 ${sectionSoft}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`${headingFont} text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4 text-[#1a0a2e]`}
            >
              حلول لكل نوع <span className="text-[#9d4edd]">تأمين</span>
            </h2>
          </div>

          {/* Segment filter pills — healthcare style */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {segments.map((segment, idx) => {
              const isActive = activeSegment === idx;
              return (
                <button
                  key={segment.id}
                  onClick={() => setActiveSegment(idx)}
                  className={`px-5 py-2.5 rounded-full flex items-center gap-2 text-[13px] font-medium transition-all duration-300 border backdrop-blur-sm ${
                    isActive
                      ? "bg-[rgba(90,24,154,0.15)] border-[rgba(90,24,154,0.4)] text-[#9d4edd]"
                      : "bg-[rgba(90,24,154,0.04)] border-[rgba(90,24,154,0.12)] text-[#4a3a62] hover:border-[rgba(90,24,154,0.25)]"
                  }`}
                >
                  <span className="text-xl">{segment.icon}</span>
                  <span className="hidden sm:inline">{segment.name}</span>
                </button>
              );
            })}
          </div>

          <div className="rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(90,24,154,0.08)] border border-[rgba(90,24,154,0.15)]">
            <div className="grid md:grid-cols-2">
              <div
                className="p-8 sm:p-10"
                style={{
                  background: "rgba(239,68,68,0.06)",
                  borderBottom: "1px solid rgba(239,68,68,0.1)",
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">😫</span>
                  <h3
                    className={`${headingFont} text-xl font-bold text-red-400`}
                  >
                    التحديات
                  </h3>
                </div>
                <ul className="space-y-4">
                  {segments[activeSegment].painPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-red-400 mt-1">✗</span>
                      <span className="text-[#4a3a62]">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="p-8 sm:p-10"
                style={{ background: "rgba(90,24,154,0.06)" }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">🎉</span>
                  <h3
                    className={`${headingFont} text-xl font-bold text-[#9d4edd]`}
                  >
                    مع سندس
                  </h3>
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
            <div className="p-6 bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border-t border-[rgba(90,24,154,0.1)]">
              <div className="flex flex-wrap items-center justify-between gap-6">
                <div>
                  <div className="text-sm font-medium mb-2 text-[#8878a0]">
                    حالات الاستخدام:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {segments[activeSegment].useCases.map((useCase, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-sm bg-[rgba(90,24,154,0.08)] border border-[rgba(90,24,154,0.15)] text-[#9d4edd]"
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
                          className={`${headingFont} text-2xl font-bold text-[#9d4edd]`}
                        >
                          {value}
                        </div>
                        <div className="text-xs text-[#8878a0]">
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
      <section id="المميزات" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`${headingFont} text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4 text-[#1a0a2e]`}
            >
              مميزات مصممة <span className="text-[#9d4edd]">لقطاع التأمين</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`group p-8 rounded-3xl ${card} transition-all duration-300 hover:border-[rgba(90,24,154,0.3)] hover:shadow-[0_0_40px_rgba(90,24,154,0.1)] hover:-translate-y-2`}
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 transition-transform duration-300 group-hover:scale-110 bg-[rgba(90,24,154,0.08)]">
                  {feature.icon}
                </div>
                <h3
                  className={`${headingFont} text-xl font-bold mb-3 text-[#1a0a2e]`}
                >
                  {feature.title}
                </h3>
                <p className="text-sm mb-5 leading-relaxed text-[#4a3a62]">
                  {feature.description}
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold bg-[rgba(90,24,154,0.08)] border border-[rgba(90,24,154,0.15)] text-[#9d4edd]">
                  {feature.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== USE CASES ==================== */}
      <section className={`py-24 px-6 ${sectionSoft}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`${headingFont} text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4 text-[#1a0a2e]`}
            >
              شاهد سندس <span className="text-[#9d4edd]">أثناء العمل</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, idx) => (
              <div
                key={idx}
                className={`rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(90,24,154,0.08)] border border-[rgba(90,24,154,0.12)]`}
              >
                <div className="px-6 py-4 font-bold flex items-center gap-2 bg-[rgba(90,24,154,0.08)] text-[#1a0a2e] border-b border-[rgba(90,24,154,0.1)]">
                  {useCase.title}
                </div>
                <div className="p-6 space-y-4 max-h-96 overflow-y-auto bg-[rgba(255,255,255,0.85)] backdrop-blur-xl">
                  {useCase.conversation.map((msg, i) => (
                    <div
                      key={i}
                      className={`p-4 rounded-2xl text-sm ${msg.role === "ai" ? "rounded-tr-md max-w-[85%] mr-auto border border-[rgba(90,24,154,0.1)]" : "rounded-tl-md max-w-[75%] ml-auto"}`}
                      style={{
                        background:
                          msg.role === "ai"
                            ? "rgba(255,255,255,0.9)"
                            : "linear-gradient(135deg, #5a189a, #7b2fff)",
                        color: msg.role === "ai" ? "#1a0a2e" : "white",
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
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[13px] font-medium mb-3 text-[#9d4edd]">
              🧮 حاسبة مبنية على بيانات حقيقية
            </p>
            <h2
              className={`${headingFont} text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight text-[#1a0a2e]`}
            >
              احسب <span className="text-[#9d4edd]">عائد الاستثمار</span>
            </h2>
            <p className="mt-2 text-[#4a3a62]">
              اكتشف كم يمكنك كسبه من زيادة التجديد وتقليل تكلفة الدعم
            </p>
          </div>

          <div className="rounded-3xl p-8 sm:p-10 shadow-[0_0_60px_rgba(90,24,154,0.08)] bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border border-[rgba(90,24,154,0.15)]">
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              {[
                {
                  label: "المكالمات اليومية",
                  key: "dailyCalls",
                  min: 50,
                  max: 1000,
                  step: 50,
                  display: `${roiInputs.dailyCalls} مكالمة`,
                },
                {
                  label: "وثائق للتجديد شهرياً",
                  key: "policyRenewals",
                  min: 100,
                  max: 5000,
                  step: 100,
                  display: `${roiInputs.policyRenewals} وثيقة`,
                },
                {
                  label: "نسبة التجديد الحالية",
                  key: "renewalRate",
                  min: 50,
                  max: 85,
                  step: 1,
                  display: `${roiInputs.renewalRate}%`,
                },
                {
                  label: "متوسط قسط التأمين (ر.س)",
                  key: "avgPremium",
                  min: 1000,
                  max: 10000,
                  step: 500,
                  display: `${roiInputs.avgPremium.toLocaleString()} ر.س`,
                },
              ].map((slider) => (
                <div key={slider.key}>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm text-[#4a3a62]">
                      {slider.label}
                    </label>
                    <span className={`${headingFont} font-bold text-[#1a0a2e]`}>
                      {slider.display}
                    </span>
                  </div>
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
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                    style={{ background: "rgba(90,24,154,0.12)" }}
                  />
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl mb-6 bg-[rgba(90,24,154,0.04)] border border-[rgba(90,24,154,0.1)]">
              <div className="grid md:grid-cols-4 gap-4 text-center">
                {[
                  {
                    label: "إيرادات تجديد إضافية",
                    value: `+${roiResults.additionalRevenue.toLocaleString()} ر.س`,
                    sub: "شهرياً",
                    color: "#10B981",
                  },
                  {
                    label: "توفير تكلفة الدعم",
                    value: `${roiResults.supportSavings.toLocaleString()} ر.س`,
                    sub: "شهرياً",
                    color: "#9d4edd",
                  },
                  {
                    label: "تكلفة سندس",
                    value: `${roiResults.sondosCost.toLocaleString()} ر.س`,
                    sub: "شهرياً",
                    color: "#7b2fff",
                  },
                  {
                    label: "نسبة التجديد الجديدة",
                    value: `${roiResults.newRenewalRate}%`,
                    sub: `+${roiResults.newRenewalRate - roiInputs.renewalRate}%`,
                    color: "#10B981",
                  },
                ].map((card, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border border-[rgba(90,24,154,0.08)]"
                  >
                    <div className="text-xs mb-1 text-[#8878a0]">
                      {card.label}
                    </div>
                    <div
                      className={`${headingFont} text-xl font-bold`}
                      style={{ color: card.color }}
                    >
                      {card.value}
                    </div>
                    <div className="text-xs text-[#8878a0]">{card.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="p-6 rounded-2xl text-center"
              style={{
                background: "rgba(90,24,154,0.08)",
                border: "1px solid rgba(157,78,221,0.35)",
              }}
            >
              <div className="text-[#4a3a62] mb-2">صافي العائد الشهري</div>
              <div
                className={`${headingFont} text-5xl font-bold mb-2 text-[#9d4edd]`}
              >
                +{roiResults.netGain.toLocaleString()} ر.س
              </div>
              <div className="text-[#4a3a62] text-sm">
                ROI: {roiResults.roi}% | +{roiResults.additionalPolicies} وثيقة
                مُجددة إضافية
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* ==================== INTEGRATIONS ==================== */}
      <section className={`py-24 px-6 ${sectionSoft}`}>
        <div className="max-w-7xl mx-auto text-center">
          <h2
            className={`${headingFont} text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4 text-[#1a0a2e]`}
          >
            يتكامل مع <span className="text-[#9d4edd]">أنظمة التأمين</span>
          </h2>
          <p className="mb-12 text-[#4a3a62]">
            تكامل سلس مع أشهر أنظمة التأمين والجهات التنظيمية
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {integrations.map((int, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl flex flex-col items-center gap-3 min-w-[140px] ${card} hover:border-[rgba(90,24,154,0.25)] transition-all duration-300 hover:-translate-y-1`}
              >
                <span className="text-3xl">{int.icon}</span>
                <span className="font-semibold text-[#1a0a2e]">{int.name}</span>
                <span className="text-xs text-[#8878a0]">{int.type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`${headingFont} text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4 text-[#1a0a2e]`}
            >
              قصص نجاح <span className="text-[#9d4edd]">شركات التأمين</span>
            </h2>
          </div>
          <div
            className={`max-w-4xl mx-auto p-10 sm:p-14 rounded-3xl shadow-[0_0_60px_rgba(90,24,154,0.1)] relative ${card}`}
          >
            <div className="absolute top-6 right-8 text-8xl font-serif opacity-10 text-[#9d4edd]">
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
                    background: "linear-gradient(135deg, #5a189a, #7b2fff)",
                  }}
                >
                  {testimonials[currentTestimonial].image}
                </div>
                <div>
                  <div
                    className={`${headingFont} font-bold text-lg text-[#1a0a2e]`}
                  >
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-sm text-[#8878a0]">
                    {testimonials[currentTestimonial].role} •{" "}
                    {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
              <div
                className="px-4 py-2 rounded-xl font-bold text-[#10B981]"
                style={{ background: "rgba(16,185,129,0.1)" }}
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
                        ? "linear-gradient(135deg, #5a189a, #7b2fff)"
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
      <section className={`py-24 px-6 ${sectionSoft}`}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`${headingFont} text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4 text-[#1a0a2e]`}
            >
              أسئلة <span className="text-[#9d4edd]">شائعة</span>
            </h2>
            <p className="text-[#4a3a62]">كل شيء تحتاج معرفته قبل البدء</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const open = activeFAQ === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl overflow-hidden ${card} hover:border-[rgba(90,24,154,0.25)] transition-all duration-300`}
                >
                  <button
                    className="w-full flex items-center justify-between px-6 py-5 text-right font-semibold text-[#1a0a2e]"
                    onClick={() => setActiveFAQ(open ? null : idx)}
                  >
                    {faq.q}
                    <span className="text-xl ml-4 flex-shrink-0 text-[#9d4edd]">
                      {open ? "−" : "+"}
                    </span>
                  </button>
                  {open && (
                    <div className="px-6 pb-5 text-sm leading-relaxed text-[#4a3a62]">
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
      <section
        className="py-24 px-6 relative overflow-hidden"
        style={{ background: "rgba(90,24,154,0.06)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(90,24,154,0.12) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">🛡️</div>
          <h2
            className={`${headingFont} text-[clamp(28px,4vw,48px)] font-bold leading-[1.08] tracking-tight mb-6 text-[#1a0a2e]`}
          >
            جاهز ترفع نسبة التجديد
            <br />
            <span className="text-[#9d4edd]">وتقلّل تكلفة الدعم؟</span>
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-[#4a3a62]">
            انضم لأكثر من 30 شركة تأمين تستخدم سندس لتحسين تجربة العملاء وزيادة
            الإيرادات
          </p>
          <div className="flex justify-center">
            <a href="/demo">
              <button
                className="px-12 py-4 rounded-full font-bold text-lg text-white hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(90,24,154,0.4)] transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #5a189a, #7b2fff)",
                }}
              >
                احجز عرضك التجريبي
              </button>
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-[#8878a0]">
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
