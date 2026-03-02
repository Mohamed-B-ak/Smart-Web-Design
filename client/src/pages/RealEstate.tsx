import React, { useEffect, useMemo, useState } from "react";
import "../index.css";

type FAQItem = { q: string; a: string };
type Segment = {
  id: string;
  name: string;
  icon: string;
  description: string;
  painPoints: string[];
  solutions: string[];
  stats: Record<string, string>;
};
type Feature = {
  icon: string;
  title: string;
  description: string;
  highlight: string;
};
type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  image: string;
  metric: string;
};
type Stat = { value: string; label: string; icon: string };
type UseCaseMessage = { role: "ai" | "user"; text: string };
type UseCase = { title: string; conversation: UseCaseMessage[] };

export default function Realstate() {
  const [activeSegment, setActiveSegment] = useState<number>(0);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [statsVisible, setStatsVisible] = useState<boolean>(false);
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0);

  const [roiInputs, setRoiInputs] = useState({
    dailyCalls: 80,
    missedPercent: 35,
    avgDealValue: 25000,
    monthlyLeads: 100,
    conversionRate: 15,
  });

  const colors = useMemo(
    () => ({
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
    }),
    [],
  );

  const segments: Segment[] = useMemo(
    () => [
      {
        id: "offices",
        name: "المكاتب العقارية",
        icon: "🏢",
        description: "بيع وتأجير العقارات السكنية والتجارية",
        painPoints: [
          "فقدان 40% من استفسارات العملاء المحتملين",
          "عدم المتابعة الفورية مع المهتمين",
          "ضياع فرص البيع بسبب انشغال الموظفين",
        ],
        solutions: [
          "رد فوري على كل استفسار 24/7",
          "تأهيل العملاء وجدولة جولات المعاينة",
          "متابعة تلقائية مع العملاء المحتملين",
        ],
        stats: { leads: "+45%", response: "3 ثوانٍ", deals: "+30%" },
      },
      {
        id: "developers",
        name: "شركات التطوير العقاري",
        icon: "🏗️",
        description: "مشاريع سكنية وتجارية ومجمعات",
        painPoints: [
          "حجم كبير من الاستفسارات عن المشاريع",
          "صعوبة تأهيل العملاء الجادين",
          "تكلفة عالية لفريق المبيعات",
        ],
        solutions: [
          "استقبال آلاف الاستفسارات بكفاءة",
          "تأهيل العملاء حسب الميزانية والاهتمام",
          "حجز مواعيد زيارة المشاريع تلقائياً",
        ],
        stats: { leads: "+60%", response: "< 5 ثوانٍ", deals: "+40%" },
      },
      {
        id: "property",
        name: "إدارة الأملاك",
        icon: "🔑",
        description: "إدارة العقارات والإيجارات",
        painPoints: [
          "شكاوى المستأجرين خارج أوقات العمل",
          "متابعة تحصيل الإيجارات",
          "تنسيق مواعيد الصيانة",
        ],
        solutions: [
          "استقبال الشكاوى والطوارئ 24/7",
          "تذكيرات تلقائية بمواعيد الدفع",
          "جدولة مواعيد الصيانة والمعاينة",
        ],
        stats: { satisfaction: "95%", response: "فوري", efficiency: "+50%" },
      },
      {
        id: "brokers",
        name: "الوسطاء العقاريين",
        icon: "🤝",
        description: "وساطة البيع والشراء والتأجير",
        painPoints: [
          "فقدان عملاء بسبب الانشغال",
          "صعوبة المتابعة مع عدة عملاء",
          "المنافسة الشديدة على العملاء",
        ],
        solutions: [
          "عدم فقدان أي فرصة حتى أثناء الانشغال",
          "متابعة منظمة مع كل العملاء",
          "رد احترافي يعكس صورة مهنية",
        ],
        stats: { leads: "+55%", response: "24/7", conversion: "+35%" },
      },
    ],
    [],
  );

  const features: Feature[] = useMemo(
    () => [
      {
        icon: "📞",
        title: "استقبال الاستفسارات",
        description:
          "رد فوري على كل مكالمة بصوت طبيعي يفهم احتياجات العميل العقارية",
        highlight: "رد في 3 ثوانٍ",
      },
      {
        icon: "🎯",
        title: "تأهيل العملاء",
        description:
          "أسئلة ذكية لتحديد الميزانية، الموقع المفضل، ونوع العقار المطلوب",
        highlight: "تأهيل دقيق",
      },
      {
        icon: "📅",
        title: "جدولة المعاينات",
        description:
          "حجز مواعيد جولات المعاينة تلقائياً في تقويم الوكيل أو المكتب",
        highlight: "حجز تلقائي",
      },
      {
        icon: "💬",
        title: "متابعة واتساب",
        description:
          "إرسال تفاصيل العقارات، الصور، والمواقع عبر واتساب تلقائياً",
        highlight: "رسائل فورية",
      },
      {
        icon: "📊",
        title: "تقارير العملاء",
        description:
          "تحليلات شاملة عن اهتمامات العملاء، الأسعار المطلوبة، والمناطق",
        highlight: "رؤى ذكية",
      },
      {
        icon: "🔄",
        title: "متابعة تلقائية",
        description:
          "اتصالات متابعة مع العملاء المحتملين الذين لم يكملوا الحجز",
        highlight: "لا تفقد عميل",
      },
    ],
    [],
  );

  const testimonials: Testimonial[] = useMemo(
    () => [
      {
        quote:
          "سندس زاد معدل الردود على الاستفسارات من 60% إلى 100%. الآن لا نفقد أي عميل محتمل حتى في منتصف الليل.",
        name: "م. خالد الغامدي",
        role: "المدير التنفيذي",
        company: "شركة الغامدي العقارية",
        image: "👨‍💼",
        metric: "+40% في الصفقات",
      },
      {
        quote:
          "وفرنا راتب موظفين اثنين والآن العملاء يحصلون على رد أسرع وأكثر احترافية. ROI إيجابي من الشهر الأول.",
        name: "أ. سارة المطيري",
        role: "مديرة المبيعات",
        company: "دار الإعمار للتطوير",
        image: "👩‍💼",
        metric: "توفير 15,000 ر.س/شهر",
      },
      {
        quote:
          "المستأجرين سعيدين لأنهم يقدرون يبلغون عن أي مشكلة في أي وقت. وأنا أتابع كل شي من لوحة التحكم.",
        name: "أ. فهد العتيبي",
        role: "مالك",
        company: "مجموعة العتيبي للأملاك",
        image: "🧔",
        metric: "95% رضا المستأجرين",
      },
    ],
    [],
  );

  const faqs: FAQItem[] = useMemo(
    () => [
      {
        q: "كيف يفهم سندس احتياجات العميل العقارية؟",
        a: "سندس مدرّب على آلاف المحادثات العقارية. يسأل أسئلة ذكية مثل: نوع العقار (شقة/فيلا/أرض)، الغرض (سكن/استثمار)، الميزانية، الموقع المفضل، وعدد الغرف. ثم يرسل ملخص كامل للوكيل.",
      },
      {
        q: "هل يمكنه إرسال تفاصيل العقارات للعميل؟",
        a: "نعم! سندس يتكامل مع واتساب ويمكنه إرسال صور العقارات، المواقع على الخريطة، الأسعار، والمواصفات تلقائياً بناءً على اهتمام العميل.",
      },
      {
        q: "كيف يتعامل مع العملاء الجادين vs المستفسرين فقط؟",
        a: "سندس يستخدم نظام تأهيل ذكي يصنف العملاء (Hot/Warm/Cold) بناءً على إجاباتهم. العملاء الجادين يتم تحويلهم فوراً أو حجز موعد لهم، بينما المستفسرين يتم متابعتهم لاحقاً.",
      },
      {
        q: "هل يعمل مع أنظمة CRM العقارية؟",
        a: "نعم، سندس يتكامل مع أشهر أنظمة CRM العقارية مثل Zoho، HubSpot، وأنظمة إدارة العقارات المحلية. كل عميل جديد يُضاف تلقائياً مع كل بياناته.",
      },
      {
        q: "ماذا عن مكالمات الشكاوى أو الطوارئ؟",
        a: "سندس يميز بين الاستفسارات العادية والحالات العاجلة. في حالات الطوارئ (تسريب مياه، عطل كهرباء)، يحوّل المكالمة فوراً للمسؤول مع تنبيه واتساب.",
      },
      {
        q: "كم يستغرق تفعيل الخدمة؟",
        a: "التفعيل الأساسي خلال 24-48 ساعة. نخصص السيناريوهات حسب نوع عملك (بيع/تأجير/إدارة أملاك) ونربط مع أنظمتك الحالية.",
      },
    ],
    [],
  );

  const stats: Stat[] = useMemo(
    () => [
      { value: "200K+", label: "مكالمة عقارية شهرياً", icon: "📞" },
      { value: "150+", label: "شركة عقارية", icon: "🏢" },
      { value: "45%", label: "زيادة في العملاء المؤهلين", icon: "📈" },
      { value: "3 ثوانٍ", label: "متوسط وقت الرد", icon: "⚡" },
    ],
    [],
  );

  const useCases: UseCase[] = useMemo(
    () => [
      {
        title: "استفسار عن شقة للإيجار",
        conversation: [
          {
            role: "ai",
            text: "أهلاً وسهلاً بمكتب النخبة العقاري! كيف أقدر أساعدك؟",
          },
          { role: "user", text: "أدور شقة للإيجار في الرياض" },
          { role: "ai", text: "تمام! أي حي تفضل بالرياض؟" },
          { role: "user", text: "النرجس أو الياسمين" },
          { role: "ai", text: "ممتاز! كم غرفة تحتاج وكم ميزانيتك الشهرية؟" },
          { role: "user", text: "3 غرف، لحد 35 ألف سنوي" },
          {
            role: "ai",
            text: "عندنا 3 شقق مناسبة! أقدر أرسلك التفاصيل على واتساب وأحجز لك موعد معاينة. يناسبك باكر الساعة 5؟",
          },
        ],
      },
      {
        title: "استفسار عن مشروع جديد",
        conversation: [
          {
            role: "ai",
            text: "مرحباً بك في شركة الإعمار للتطوير! تبي تعرف عن مشاريعنا؟",
          },
          { role: "user", text: "إيه، عندكم فلل في شمال الرياض؟" },
          {
            role: "ai",
            text: 'عندنا مشروع "واحة النخيل" في حي الملقا. فلل من 4-6 غرف بأسعار تبدأ من 2.5 مليون. تبي أرسلك الكتالوج؟',
          },
          { role: "user", text: "إيه أرسله" },
          {
            role: "ai",
            text: "تم إرساله على واتساب! وعندنا أيام مفتوحة كل سبت للمعاينة. أحجز لك؟",
          },
        ],
      },
    ],
    [],
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

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

  const roiResults = useMemo(() => {
    const { dailyCalls, missedPercent, avgDealValue, conversionRate } =
      roiInputs;
    const monthlyMissedCalls = dailyCalls * (missedPercent / 100) * 30;
    const potentialLeadsLost = monthlyMissedCalls * 0.3;
    const lostDeals = potentialLeadsLost * (conversionRate / 100);
    const currentLoss = lostDeals * avgDealValue;
    const recoveredCalls = monthlyMissedCalls * 0.95;
    const newQualifiedLeads = recoveredCalls * 0.35;
    const additionalDeals = newQualifiedLeads * (conversionRate / 100) * 0.6;
    const recoveredRevenue = additionalDeals * avgDealValue;
    const sondosCost =
      dailyCalls <= 50 ? 1500 : dailyCalls <= 120 ? 3500 : 7500;
    const netGain = recoveredRevenue - sondosCost;
    const roi = sondosCost > 0 ? (netGain / sondosCost) * 100 : 0;
    return {
      monthlyMissedCalls: Math.round(monthlyMissedCalls),
      currentLoss: Math.round(currentLoss),
      recoveredRevenue: Math.round(recoveredRevenue),
      sondosCost,
      netGain: Math.round(netGain),
      roi: Math.round(roi),
      additionalDeals: Math.round(additionalDeals * 10) / 10,
    };
  }, [roiInputs]);

  return (
    <div className="min-h-screen bg-white font-sans" dir="rtl">
      {/* ==================== HERO SECTION ==================== */}
      <section
        className="relative overflow-hidden"
        style={{
          background: colors.bgLighter,
          paddingTop: "5rem",
          paddingBottom: "8rem",
        }}
      >
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl opacity-40"
            style={{ background: colors.bgLight }}
          />
          <div
            className="absolute bottom-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-30"
            style={{ background: colors.accent }}
          />
          <div className="absolute bottom-0 left-0 right-0 h-32 opacity-5">
            <div className="flex justify-around items-end h-full">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-current"
                  style={{
                    width: "60px",
                    height: `${40 + ((i * 17) % 60)}%`,
                    color: colors.primary,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Content - fully centered */}
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
            style={{
              background: colors.white,
              color: colors.primary,
              boxShadow: "0 2px 12px rgba(91, 78, 159, 0.15)",
            }}
          >
            <span className="text-lg">🏢</span>
            <span>الحل الأمثل للقطاع العقاري</span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            style={{ color: colors.textDark }}
          >
            لا تفقد
            <span
              style={{
                background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {" "}
              عميل عقاري{" "}
            </span>
            <br />
            واحد بعد اليوم
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg sm:text-xl mb-10 leading-relaxed max-w-2xl mx-auto"
            style={{ color: colors.textMuted }}
          >
            سندس يرد على استفسارات العملاء 24/7، يأهّل المشترين الجادين، ويحجز
            مواعيد المعاينة تلقائياً
          </p>

          {/* Stats row */}
          <div
            className="inline-flex flex-wrap justify-center gap-8 mb-10 px-8 py-6 rounded-2xl"
            style={{
              background: "white",
              boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
            }}
          >
            {[
              { value: "+45%", label: "عملاء مؤهلين" },
              { value: "100%", label: "معدل الرد" },
              { value: "+30%", label: "صفقات مغلقة" },
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

          {/* CTA */}
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
              هل تواجه هذه
              <span
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {" "}
                التحديات؟
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "📵",
                title: "مكالمات فائتة",
                desc: "40% من الاستفسارات تضيع بسبب انشغال الفريق",
                color: colors.danger,
              },
              {
                icon: "⏰",
                title: "ساعات محدودة",
                desc: "العملاء يتصلون بعد ساعات العمل ولا أحد يرد",
                color: colors.warning,
              },
              {
                icon: "😤",
                title: "عملاء غير مؤهلين",
                desc: "وقت طويل في محادثات مع عملاء غير جادين",
                color: "#8B5CF6",
              },
              {
                icon: "📉",
                title: "فرص ضائعة",
                desc: "منافسيك يردون أسرع ويكسبون العميل",
                color: "#EC4899",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border-2 border-dashed text-center transition-all hover:shadow-lg"
                style={{ borderColor: `${item.color}40` }}
              >
                <div
                  className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl"
                  style={{ background: `${item.color}15` }}
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
                icon: "✅",
                title: "رد 100%",
                desc: "كل مكالمة يتم الرد عليها في أقل من 3 ثوانٍ",
                color: colors.success,
              },
              {
                icon: "🌙",
                title: "متاح 24/7",
                desc: "سندس يعمل حتى في منتصف الليل والعطلات",
                color: colors.primary,
              },
              {
                icon: "🎯",
                title: "تأهيل ذكي",
                desc: "أسئلة ذكية تحدد العملاء الجادين فوراً",
                color: colors.accent,
              },
              {
                icon: "🚀",
                title: "رد فوري",
                desc: "العميل يحصل على معلومات قبل المنافسين",
                color: colors.warning,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl text-center transition-all hover:shadow-xl hover:-translate-y-1"
                style={{
                  background: `${item.color}10`,
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
      <section id="solutions" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: colors.textDark }}
            >
              حلول مخصصة لكل
              <span
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {" "}
                نوع عمل
              </span>
            </h2>
            <p style={{ color: colors.textMuted }} className="text-lg">
              سندس يتكيف مع طبيعة عملك العقاري
            </p>
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
                    التحديات الحالية
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
                        {key === "leads"
                          ? "زيادة العملاء"
                          : key === "response"
                            ? "وقت الرد"
                            : key === "deals"
                              ? "زيادة الصفقات"
                              : key === "satisfaction"
                                ? "رضا العملاء"
                                : key === "efficiency"
                                  ? "زيادة الكفاءة"
                                  : key === "conversion"
                                    ? "معدل التحويل"
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
        id="features"
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
                للعقاريين
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

      {/* ==================== ROI CALCULATOR ==================== */}
      <section id="roi" className="py-24 bg-white">
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
                عائد استثمارك
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: colors.textDark }}
                >
                  المكالمات اليومية
                </label>
                <input
                  type="range"
                  min="20"
                  max="200"
                  value={roiInputs.dailyCalls}
                  onChange={(e) =>
                    setRoiInputs({
                      ...roiInputs,
                      dailyCalls: parseInt(e.target.value),
                    })
                  }
                  className="w-full h-2 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(90deg, ${colors.primary} ${roiInputs.dailyCalls / 2}%, ${colors.bgLight} ${roiInputs.dailyCalls / 2}%)`,
                  }}
                />
                <div
                  className="text-center mt-2 font-bold"
                  style={{ color: colors.primary }}
                >
                  {roiInputs.dailyCalls} مكالمة
                </div>
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: colors.textDark }}
                >
                  نسبة المكالمات الفائتة
                </label>
                <input
                  type="range"
                  min="10"
                  max="60"
                  value={roiInputs.missedPercent}
                  onChange={(e) =>
                    setRoiInputs({
                      ...roiInputs,
                      missedPercent: parseInt(e.target.value),
                    })
                  }
                  className="w-full h-2 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(90deg, ${colors.primary} ${roiInputs.missedPercent}%, ${colors.bgLight} ${roiInputs.missedPercent}%)`,
                  }}
                />
                <div
                  className="text-center mt-2 font-bold"
                  style={{ color: colors.primary }}
                >
                  {roiInputs.missedPercent}%
                </div>
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: colors.textDark }}
                >
                  متوسط قيمة الصفقة (ر.س)
                </label>
                <input
                  type="range"
                  min="5000"
                  max="100000"
                  step="5000"
                  value={roiInputs.avgDealValue}
                  onChange={(e) =>
                    setRoiInputs({
                      ...roiInputs,
                      avgDealValue: parseInt(e.target.value),
                    })
                  }
                  className="w-full h-2 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(90deg, ${colors.primary} ${roiInputs.avgDealValue / 1000}%, ${colors.bgLight} ${roiInputs.avgDealValue / 1000}%)`,
                  }}
                />
                <div
                  className="text-center mt-2 font-bold"
                  style={{ color: colors.primary }}
                >
                  {roiInputs.avgDealValue.toLocaleString()} ر.س
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div
                className="p-6 rounded-2xl text-center"
                style={{ background: "#FEE2E2" }}
              >
                <div className="text-sm mb-2" style={{ color: "#991B1B" }}>
                  الخسارة الحالية (شهرياً)
                </div>
                <div
                  className="text-3xl font-bold"
                  style={{ color: "#DC2626" }}
                >
                  {roiResults.currentLoss.toLocaleString()} ر.س
                </div>
              </div>
              <div
                className="p-6 rounded-2xl text-center"
                style={{ background: colors.bgLight }}
              >
                <div className="text-sm mb-2" style={{ color: colors.primary }}>
                  تكلفة سندس (شهرياً)
                </div>
                <div
                  className="text-3xl font-bold"
                  style={{ color: colors.primary }}
                >
                  {roiResults.sondosCost.toLocaleString()} ر.س
                </div>
              </div>
              <div
                className="p-6 rounded-2xl text-center"
                style={{ background: "#D1FAE5" }}
              >
                <div className="text-sm mb-2" style={{ color: "#065F46" }}>
                  صافي الربح (شهرياً)
                </div>
                <div
                  className="text-3xl font-bold"
                  style={{ color: "#059669" }}
                >
                  +{roiResults.netGain.toLocaleString()} ر.س
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <div
                className="inline-flex flex-wrap justify-center items-center gap-4 px-8 py-4 rounded-2xl"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                }}
              >
                <span className="text-white text-lg">عائد الاستثمار:</span>
                <span className="text-white text-4xl font-bold">
                  {roiResults.roi}%
                </span>
                <span className="text-white/80 text-sm">
                  ≈ {roiResults.additionalDeals} صفقة إضافية/شهر
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== USE CASES ==================== */}
      <section
        id="usecases"
        className="py-24"
        style={{ background: colors.bgLighter }}
      >
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
                  className="px-6 py-4 font-bold"
                  style={{ background: colors.bgLight, color: colors.textDark }}
                >
                  {useCase.title}
                </div>
                <div className="p-6 space-y-4">
                  {useCase.conversation.map((msg, i) => (
                    <div
                      key={i}
                      className={`p-4 rounded-2xl text-sm ${msg.role === "ai" ? "rounded-tr-md max-w-[85%] mr-auto" : "rounded-tl-md max-w-[75%] ml-auto"}`}
                      style={{
                        background:
                          msg.role === "ai" ? colors.bgLight : colors.primary,
                        color: msg.role === "ai" ? colors.textDark : "white",
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
                عقارية
              </span>
            </h2>
          </div>
          <div
            className="max-w-4xl mx-auto p-10 sm:p-14 rounded-3xl shadow-2xl relative"
            style={{ background: colors.bgLight }}
          >
            <div
              className="absolute top-6 right-8 text-8xl font-serif opacity-20"
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
                  background: `${colors.success}20`,
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
                        : `${colors.primary}30`,
                    width: currentTestimonial === idx ? "32px" : "12px",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PRICING ==================== */}
      <section
        id="pricing"
        className="py-24"
        style={{ background: colors.bgLighter }}
      >
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
                العقاريين
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* ===== Starter ===== */}
            <div
              className="p-8 rounded-3xl bg-white transition-all hover:shadow-xl border-2"
              style={{ borderColor: "#10B981" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">🟢</span>
                <span
                  className="text-sm font-bold"
                  style={{ color: "#10B981" }}
                >
                  Starter
                </span>
              </div>
              <div className="mb-2">
                <span
                  className="text-4xl font-bold"
                  style={{ color: colors.textDark }}
                >
                  2,499
                </span>
                <span style={{ color: colors.textMuted }} className="mr-1">
                  {" "}
                  ر.س/شهر
                </span>
              </div>
              <p className="text-sm mb-6" style={{ color: colors.textMuted }}>
                للمكاتب العقارية الصغيرة
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "رد آلي 24/7 على جميع الاستفسارات",
                  "استقبال فوري بدون انتظار",
                  "تحويل للوسيط عند الحاجة",
                  "2 أنواع عقارات",
                  "سيناريو بيع واحد",
                  "تسجيل بيانات العملاء في CRM",
                  "تأكيد زيارة عبر واتساب + SMS",
                  "تذكير قبل 24 ساعة",
                  "Web Widget للموقع",
                  "1,000 دقيقة AI شهريًا",
                  "500 رسالة AI",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm"
                    style={{ color: colors.textMuted }}
                  >
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0"
                      style={{ background: "#D1FAE5", color: "#10B981" }}
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
                style={{ borderColor: "#10B981", color: "#10B981" }}
              >
                ابدأ الآن
              </a>
            </div>

            {/* ===== Professional ===== */}
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
              <div className="flex items-center gap-2 mb-3 mt-2">
                <span className="text-xl">🟣</span>
                <span
                  className="text-sm font-bold"
                  style={{ color: colors.primary }}
                >
                  Professional
                </span>
              </div>
              <div className="mb-2">
                <span
                  className="text-4xl font-bold"
                  style={{ color: colors.textDark }}
                >
                  7,999
                </span>
                <span style={{ color: colors.textMuted }} className="mr-1">
                  {" "}
                  ر.س/شهر
                </span>
              </div>
              <p className="text-sm mb-6" style={{ color: colors.textMuted }}>
                لشركات الوساطة المتوسطة
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "كل مزايا Starter",
                  "5 أنواع عقارات",
                  "5 سيناريوهات بيع",
                  "تذكير مزدوج للزيارة",
                  "متابعة بعد الزيارة",
                  "استبيان رضا العملاء",
                  "حملات تذكير صوتية",
                  "3,000 دقيقة AI شهريًا",
                  "2,000 رسالة AI",
                  "3 مكالمات متزامنة",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm"
                    style={{ color: colors.textMuted }}
                  >
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center text-xs text-white flex-shrink-0"
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

            {/* ===== Enterprise ===== */}
            <div
              className="p-8 rounded-3xl bg-white transition-all hover:shadow-xl border-2"
              style={{ borderColor: "#374151" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">⚫</span>
                <span
                  className="text-sm font-bold"
                  style={{ color: "#374151" }}
                >
                  Enterprise
                </span>
              </div>
              <div className="mb-2">
                <span
                  className="text-4xl font-bold"
                  style={{ color: colors.textDark }}
                >
                  24,999
                </span>
                <span style={{ color: colors.textMuted }} className="mr-1">
                  {" "}
                  ر.س/شهر
                </span>
              </div>
              <p className="text-sm mb-6" style={{ color: colors.textMuted }}>
                للمطورين العقاريين والشركات الكبرى
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "كل مزايا Professional",
                  "أنواع عقارات غير محدودة",
                  "سيناريوهات بيع غير محدودة",
                  "حملات تسويقية صوتية",
                  "Tele-Sales",
                  "Upselling للوحدات الأعلى",
                  "تقارير تحويل متقدمة للإدارة",
                  "15,000 دقيقة AI شهريًا",
                  "7,000 رسالة AI",
                  "10 مكالمات متزامنة",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm"
                    style={{ color: colors.textMuted }}
                  >
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0"
                      style={{ background: "#F3F4F6", color: "#374151" }}
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
                style={{ borderColor: "#374151", color: "#374151" }}
              >
                تواصل معنا
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="py-24 bg-white">
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
                className="rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg"
                style={{ background: colors.bgLighter }}
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
                      background: activeFAQ === idx ? colors.primary : "white",
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
          <div className="text-6xl mb-6">🏢</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
            جاهز تكسب كل عميل
            <br />
            عقاري محتمل؟
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
            انضم لأكثر من 150 شركة عقارية سعودية تستخدم سندس لزيادة مبيعاتها
          </p>

          <div className="flex justify-center">
            <a
              href="/demo"
              className="px-10 py-5 bg-white rounded-2xl font-bold text-lg shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-3xl"
              style={{ color: colors.primary }}
            >
              احجز عرضك التجريبي
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
