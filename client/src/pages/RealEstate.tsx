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
  const [isAnnual, setIsAnnual] = useState<boolean>(false);

  const [roiInputs, setRoiInputs] = useState({
    dailyCalls: 80,
    missedPercent: 35,
    avgDealValue: 25000,
    monthlyLeads: 100,
    conversionRate: 15,
  });

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

  const statKeyLabel = (key: string) =>
    ({
      leads: "زيادة العملاء",
      response: "وقت الرد",
      deals: "زيادة الصفقات",
      satisfaction: "رضا العملاء",
      efficiency: "زيادة الكفاءة",
      conversion: "معدل التحويل",
    })[key] ?? key;

  return (
    <div
      dir="rtl"
      className="min-h-screen font-arabic bg-[var(--bg)] text-[var(--t1)]"
    >
      {/* ==================== HERO SECTION ==================== */}
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
            الحل الأمثل للقطاع العقاري
          </div>

          <h1 className="font-['Instrument_Sans',sans-serif] text-[clamp(38px,5.5vw,68px)] font-bold leading-[1.08] tracking-tight mb-6 max-w-4xl mx-auto animate-fade-up animation-delay-100">
            لا تفقد <span className="text-[#9d4edd]">عميل عقاري</span>
            <br />
            واحد بعد اليوم
          </h1>

          <p className="text-[clamp(16px,1.8vw,19px)] font-semibold text-[var(--t1)] max-w-[580px] mx-auto leading-relaxed mb-4 animate-fade-up animation-delay-150">
            سندس يرد على استفسارات العملاء 24/7، يأهّل المشترين الجادين، ويحجز
            مواعيد المعاينة تلقائياً
          </p>

          <p className="text-[clamp(14px,1.6vw,17px)] text-[var(--t2)] max-w-[680px] mx-auto leading-relaxed mb-9 animate-fade-up animation-delay-200">
            ✓ +150 شركة عقارية &nbsp;·&nbsp; ✓ +200,000 مكالمة شهرياً
            &nbsp;·&nbsp; ✓ رد في 3 ثوانٍ
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-up animation-delay-300">
            {[
              { value: "+45%", label: "عملاء مؤهلين", icon: "📈" },
              { value: "100%", label: "معدل الرد", icon: "📞" },
              { value: "+30%", label: "صفقات مغلقة", icon: "🤝" },
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

          <div className="flex items-center justify-center gap-3.5 mb-12 flex-wrap animate-fade-up animation-delay-300">
            <a
              href="/demo"
              className="group inline-flex items-center gap-2 px-8 py-3.5 text-[15px] font-semibold text-white gradient-bg glow rounded-full hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(90,24,154,0.4)] transition-all duration-300 shimmer"
            >
              احجز عرضك التجريبي
            </a>
          </div>
        </div>
      </section>

      {/* ==================== PROBLEMS SECTION ==================== */}
      <section className="py-20 bg-[var(--bg2)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="font-['Instrument_Sans',sans-serif] text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4">
              هل تواجه هذه <span className="text-[#9d4edd]">التحديات؟</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: "📵",
                title: "مكالمات فائتة",
                desc: "40% من الاستفسارات تضيع بسبب انشغال الفريق",
              },
              {
                icon: "⏰",
                title: "ساعات محدودة",
                desc: "العملاء يتصلون بعد ساعات العمل ولا أحد يرد",
              },
              {
                icon: "😤",
                title: "عملاء غير مؤهلين",
                desc: "وقت طويل في محادثات مع عملاء غير جادين",
              },
              {
                icon: "📉",
                title: "فرص ضائعة",
                desc: "منافسيك يردون أسرع ويكسبون العميل",
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "✅",
                title: "رد 100%",
                desc: "كل مكالمة يتم الرد عليها في أقل من 3 ثوانٍ",
              },
              {
                icon: "🌙",
                title: "متاح 24/7",
                desc: "سندس يعمل حتى في منتصف الليل والعطلات",
              },
              {
                icon: "🎯",
                title: "تأهيل ذكي",
                desc: "أسئلة ذكية تحدد العملاء الجادين فوراً",
              },
              {
                icon: "🚀",
                title: "رد فوري",
                desc: "العميل يحصل على معلومات قبل المنافسين",
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
              حلول مخصصة لكل <span className="text-[#9d4edd]">نوع عمل</span>
            </h2>
            <p className="text-[var(--t2)] text-lg">
              سندس يتكيف مع طبيعة عملك العقاري
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

      {/* ==================== FEATURES SECTION ==================== */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Instrument_Sans',sans-serif] text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4">
              مميزات مصممة <span className="text-[#9d4edd]">للعقاريين</span>
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
      <section id="roi" className="py-24 px-6 bg-[var(--bg2)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[13px] font-medium mb-3 text-[#9d4edd]">
              🧮 حاسبة مبنية على بيانات حقيقية
            </p>
            <h2 className="font-['Instrument_Sans',sans-serif] text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight">
              احسب <span className="text-[#9d4edd]">عائد استثمارك</span>
            </h2>
            <p className="mt-3 text-[var(--t2)]">
              اكتشف كم يمكنك توفيره وكسبه مع سندس
            </p>
          </div>

          <div className="rounded-3xl p-8 sm:p-10 bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border border-[rgba(90,24,154,0.15)] shadow-[0_0_60px_rgba(90,24,154,0.08)]">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {[
                {
                  label: "المكالمات اليومية",
                  key: "dailyCalls",
                  min: 20,
                  max: 200,
                  step: 5,
                  suffix: " مكالمة",
                },
                {
                  label: "نسبة المكالمات الفائتة",
                  key: "missedPercent",
                  min: 10,
                  max: 60,
                  step: 5,
                  suffix: "%",
                },
                {
                  label: "متوسط قيمة الصفقة (ر.س)",
                  key: "avgDealValue",
                  min: 5000,
                  max: 100000,
                  step: 5000,
                  suffix: " ر.س",
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
                  الخسارة الحالية (شهرياً)
                </div>
                <div className="text-3xl font-bold text-red-500">
                  {roiResults.currentLoss.toLocaleString()} ر.س
                </div>
              </div>
              <div className="p-6 rounded-2xl text-center bg-[rgba(90,24,154,0.06)] border border-[rgba(90,24,154,0.15)]">
                <div className="text-sm mb-2 text-[#9d4edd]">
                  تكلفة سندس (شهرياً)
                </div>
                <div className="text-3xl font-bold text-[#9d4edd]">
                  {roiResults.sondosCost.toLocaleString()} ر.س
                </div>
              </div>
              <div className="p-6 rounded-2xl text-center bg-[rgba(16,185,129,0.07)] border border-[rgba(16,185,129,0.2)]">
                <div className="text-sm mb-2 text-emerald-600">
                  صافي الربح (شهرياً)
                </div>
                <div className="text-3xl font-bold text-emerald-600">
                  +{roiResults.netGain.toLocaleString()} ر.س
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <div className="inline-flex flex-wrap justify-center items-center gap-4 px-8 py-4 rounded-2xl gradient-bg">
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
      </section> */}

      {/* ==================== USE CASES ==================== */}
      <section id="usecases" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Instrument_Sans',sans-serif] text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4">
              شاهد سندس <span className="text-[#9d4edd]">أثناء العمل</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, idx) => (
              <div
                key={idx}
                className="rounded-3xl overflow-hidden bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border border-[rgba(90,24,154,0.1)] shadow-[0_0_40px_rgba(90,24,154,0.08)]"
              >
                <div className="px-6 py-4 font-bold bg-[rgba(90,24,154,0.06)] text-[var(--t1)] border-b border-[rgba(90,24,154,0.08)]">
                  {useCase.title}
                </div>
                <div className="p-6 space-y-4">
                  {useCase.conversation.map((msg, i) => (
                    <div
                      key={i}
                      className={`p-4 rounded-2xl text-sm ${msg.role === "ai" ? "rounded-tr-md max-w-[85%] mr-auto bg-[rgba(90,24,154,0.06)] border border-[rgba(90,24,154,0.1)] text-[var(--t1)]" : "rounded-tl-md max-w-[75%] ml-auto gradient-bg text-white"}`}
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
      <section className="py-24 px-6 bg-[var(--bg2)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Instrument_Sans',sans-serif] text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-4">
              قصص نجاح <span className="text-[#9d4edd]">عقارية</span>
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

      {/* ==================== PRICING ==================== */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-['Instrument_Sans',sans-serif] text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-tight mb-6">
              باقات <span className="text-[#9d4edd]">العقاريين</span>
            </h2>

            {/* ── Toggle شهري / سنوي ── */}
            <div className="inline-flex items-center gap-1 p-1 rounded-full bg-[rgba(90,24,154,0.08)] border border-[rgba(90,24,154,0.15)]">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  !isAnnual
                    ? "gradient-bg text-white shadow-md"
                    : "text-[var(--t2)] hover:text-[var(--t1)]"
                }`}
              >
                شهري
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  isAnnual
                    ? "gradient-bg text-white shadow-md"
                    : "text-[var(--t2)] hover:text-[var(--t1)]"
                }`}
              >
                سنوي
              </button>
            </div>

            {isAnnual && (
              <p className="mt-3 text-sm text-emerald-500 font-medium">
                🎉 وفّر حتى 10% مع الاشتراك السنوي
              </p>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* ── Starter ── */}
            <div className="p-8 rounded-3xl bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border border-[rgba(90,24,154,0.12)]">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">🟢</span>
                <span className="text-sm font-bold text-emerald-500">
                  Starter
                </span>
              </div>
              <p className="text-[clamp(24px,2.5vw,32px)] font-['Instrument_Sans',sans-serif] font-bold tracking-tight mb-1 text-[var(--t1)] transition-all duration-300">
                {isAnnual ? "26,989" : "2,499"} ر.س
              </p>
              <p className="text-sm mb-6 text-[var(--t2)]">
                {isAnnual ? "/سنة" : "/شهر"} · للمكاتب العقارية الصغيرة
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
                  <li key={i} className="text-sm flex gap-2 text-[var(--t2)]">
                    <span>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="/demo"
                className="block w-full py-3 rounded-full text-center font-semibold border border-[rgba(90,24,154,0.2)] text-[var(--t1)] hover:bg-[rgba(90,24,154,0.05)] hover:border-[rgba(90,24,154,0.35)] transition-all duration-300"
              >
                ابدأ الآن
              </a>
            </div>

            {/* ── Professional ── */}
            <div className="p-8 rounded-3xl relative gradient-bg glow border-2 border-[rgba(157,78,221,0.6)]">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-3 py-1 rounded-full bg-white text-[#5a189a] font-bold shadow">
                الأكثر شعبية ⭐
              </span>
              <div className="flex items-center gap-2 mb-3 mt-2">
                <span className="text-xl">🟣</span>
                <span className="text-sm font-bold text-white">
                  Professional
                </span>
              </div>
              <p className="text-[clamp(24px,2.5vw,32px)] font-['Instrument_Sans',sans-serif] font-bold tracking-tight mb-1 text-white transition-all duration-300">
                {isAnnual ? "86,389" : "7,999"} ر.س
              </p>
              <p className="text-sm mb-6 text-purple-200">
                {isAnnual ? "/سنة" : "/شهر"} · لشركات الوساطة المتوسطة
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
                  <li key={i} className="text-sm flex gap-2 text-white">
                    <span>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="/demo"
                className="block w-full py-3 rounded-full text-center font-semibold bg-white text-[#5a189a] hover:opacity-90 transition-opacity shimmer"
              >
                ابدأ الآن
              </a>
            </div>

            {/* ── Enterprise ── */}
            <div className="p-8 rounded-3xl bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border border-[rgba(90,24,154,0.12)]">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">⚫</span>
                <span className="text-sm font-bold text-[var(--t1)]">
                  Enterprise
                </span>
              </div>
              <p className="text-[clamp(24px,2.5vw,32px)] font-['Instrument_Sans',sans-serif] font-bold tracking-tight mb-1 text-[var(--t1)] transition-all duration-300">
                {isAnnual ? "269,989" : "24,999"} ر.س
              </p>
              <p className="text-sm mb-6 text-[var(--t2)]">
                {isAnnual ? "/سنة" : "/شهر"} · للمطورين العقاريين والشركات
                الكبرى
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
                  <li key={i} className="text-sm flex gap-2 text-[var(--t2)]">
                    <span>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="/demo"
                className="block w-full py-3 rounded-full text-center font-semibold border border-[rgba(90,24,154,0.2)] text-[var(--t1)] hover:bg-[rgba(90,24,154,0.05)] hover:border-[rgba(90,24,154,0.35)] transition-all duration-300"
              >
                تواصل معنا
              </a>
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
          <div className="text-6xl mb-6">🏢</div>
          <h2 className="font-['Instrument_Sans',sans-serif] text-[clamp(28px,4vw,48px)] font-bold leading-[1.08] tracking-tight mb-6 text-white">
            جاهز تكسب كل عميل
            <br />
            عقاري محتمل؟
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
            انضم لأكثر من 150 شركة عقارية سعودية تستخدم سندس لزيادة مبيعاتها
          </p>
          <div className="flex justify-center mb-12">
            <a
              href="/demo"
              className="inline-flex items-center gap-2 px-10 py-5 bg-[rgba(255,255,255,0.95)] rounded-2xl font-bold text-lg shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-white text-[#5a189a] shimmer"
            >
              احجز عرضك التجريبي
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
