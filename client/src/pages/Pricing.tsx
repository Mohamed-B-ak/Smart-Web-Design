import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import FinalCTA from "@/components/FinalCTA";
import { Button } from "@/components/ui/button";
import {
  Check,
  X,
  ArrowRight,
  Calculator,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const plans = [
  {
    id: "starter",
    nameAr: "الانطلاقة",
    nameEn: "Starter",
    monthlyPrice: 127,
    annualPrice: 100,
    minutes: 120,
    extraMinRate: 0.75,
    popular: false,
    features: {
      agents: "1",
      campaigns: "1",
      voiceClones: "1",
      monthlyMinutes: "120",
      concurrentCalls: "3",
      multiLang: true,
      multiUser: false,
      elevenLabs: true,
      inboundOutbound: true,
      customPhone: true,
      sipTrunk: true,
      sms: true,
      automations: "900",
      knowledgeBase: true,
      webWidget: true,
      instantScheduling: true,
      humanTransfer: true,
      postCallData: true,
      customDomain: false,
      subAccounts: false,
      customBranding: false,
      stripeIntegration: false,
      emailSupport: true,
      liveChat: true,
      oneOnOneSupport: false,
      earlyAccess: false,
    },
    bestForAr: "عيادة واحدة، صالون تجميل، مكتب محاماة صغير",
    bestForEn: "Clinics, salons, small law offices",
    featuresListAr: [
      "120 دقيقة شهرياً",
      "0.75 ريال/دقيقة إضافية",
      "وكيل ذكي واحد",
      "حملة صادرة واحدة",
      "3 مكالمات متزامنة",
      "استنساخ صوت واحد",
      "900 تشغيل أتمتة",
    ],
    featuresListEn: [
      "120 min/month included",
      "0.75 SAR/extra minute",
      "1 AI agent",
      "1 outbound campaign",
      "3 concurrent calls",
      "1 voice clone",
      "900 automations/month",
    ],
  },
  {
    id: "business",
    nameAr: "الأعمال",
    nameEn: "Business",
    monthlyPrice: 485,
    annualPrice: 385,
    minutes: 700,
    extraMinRate: 0.6,
    popular: true,
    features: {
      agents: "5",
      campaigns: "5",
      voiceClones: "5",
      monthlyMinutes: "700",
      concurrentCalls: "10",
      multiLang: true,
      multiUser: true,
      elevenLabs: true,
      inboundOutbound: true,
      customPhone: true,
      sipTrunk: true,
      sms: true,
      automations: "10,000",
      knowledgeBase: true,
      webWidget: true,
      instantScheduling: true,
      humanTransfer: true,
      postCallData: true,
      customDomain: false,
      subAccounts: false,
      customBranding: false,
      stripeIntegration: false,
      emailSupport: true,
      liveChat: true,
      oneOnOneSupport: false,
      earlyAccess: false,
    },
    bestForAr: "مجمع عيادات، شركة خدمات، متجر إلكتروني",
    bestForEn: "Medical complexes, service companies, e-commerce",
    featuresListAr: [
      "700 دقيقة شهرياً",
      "0.60 ريال/دقيقة إضافية",
      "5 وكلاء أذكياء",
      "5 حملات صادرة",
      "10 مكالمات متزامنة",
      "5 استنساخ صوت",
      "10,000 تشغيل أتمتة",
    ],
    featuresListEn: [
      "700 min/month included",
      "0.60 SAR/extra minute",
      "5 AI agents",
      "5 outbound campaigns",
      "10 concurrent calls",
      "5 voice clones",
      "10,000 automations/month",
    ],
  },
  {
    id: "enterprise",
    nameAr: "المؤسسات",
    nameEn: "Enterprise",
    monthlyPrice: 935,
    annualPrice: 745,
    minutes: 1700,
    extraMinRate: 0.35,
    popular: false,
    features: {
      agents: "Unlimited",
      campaigns: "Unlimited",
      voiceClones: "10",
      monthlyMinutes: "1,700",
      concurrentCalls: "500",
      multiLang: true,
      multiUser: true,
      elevenLabs: true,
      inboundOutbound: true,
      customPhone: true,
      sipTrunk: true,
      sms: true,
      automations: "100,000",
      knowledgeBase: true,
      webWidget: true,
      instantScheduling: true,
      humanTransfer: true,
      postCallData: true,
      customDomain: false,
      subAccounts: false,
      customBranding: false,
      stripeIntegration: false,
      emailSupport: true,
      liveChat: true,
      oneOnOneSupport: false,
      earlyAccess: false,
    },
    bestForAr: "مستشفيات، شركات تأمين، وكالات عقارية كبرى",
    bestForEn: "Hospitals, insurance, large real estate",
    featuresListAr: [
      "1,700 دقيقة شهرياً",
      "0.35 ريال/دقيقة إضافية",
      "وكلاء غير محدودين",
      "حملات غير محدودة",
      "500 مكالمة متزامنة",
      "10 استنساخ صوت",
      "100,000 تشغيل أتمتة",
    ],
    featuresListEn: [
      "1,700 min/month included",
      "0.35 SAR/extra minute",
      "Unlimited AI agents",
      "Unlimited campaigns",
      "500 concurrent calls",
      "10 voice clones",
      "100,000 automations/month",
    ],
  },
  {
    id: "partners",
    nameAr: "الشركاء",
    nameEn: "Partners",
    monthlyPrice: 1570,
    annualPrice: 1330,
    minutes: 3500,
    extraMinRate: 0.35,
    popular: false,
    features: {
      agents: "Unlimited",
      campaigns: "Unlimited",
      voiceClones: "Unlimited",
      monthlyMinutes: "3,500",
      concurrentCalls: "1,000",
      multiLang: true,
      multiUser: true,
      elevenLabs: true,
      inboundOutbound: true,
      customPhone: true,
      sipTrunk: true,
      sms: true,
      automations: "Unlimited",
      knowledgeBase: true,
      webWidget: true,
      instantScheduling: true,
      humanTransfer: true,
      postCallData: true,
      customDomain: true,
      subAccounts: true,
      customBranding: true,
      stripeIntegration: true,
      emailSupport: true,
      liveChat: true,
      oneOnOneSupport: true,
      earlyAccess: true,
    },
    bestForAr: "وكالات التسويق، شركات التقنية، ريادة الأعمال",
    bestForEn: "Marketing agencies, tech companies",
    featuresListAr: [
      "3,500 دقيقة شهرياً",
      "0.35 ريال/دقيقة إضافية",
      "كل شيء غير محدود",
      "1,000 مكالمة متزامنة",
      "White Label كامل",
      "حسابات فرعية غير محدودة",
      "دعم مخصص 1-1",
    ],
    featuresListEn: [
      "3,500 min/month included",
      "0.35 SAR/extra minute",
      "Unlimited everything",
      "1,000 concurrent calls",
      "Full White Label",
      "Unlimited sub-accounts",
      "Dedicated 1-1 support",
    ],
  },
];

const comparisonFeatures = [
  { key: "agents", labelAr: "الوكلاء", labelEn: "Agents" },
  { key: "campaigns", labelAr: "الحملات الصادرة", labelEn: "Campaigns" },
  { key: "voiceClones", labelAr: "استنساخ الصوت", labelEn: "Voice Clones" },
  {
    key: "monthlyMinutes",
    labelAr: "الدقائق الشهرية",
    labelEn: "Monthly Minutes",
  },
  {
    key: "concurrentCalls",
    labelAr: "المكالمات المتوازية",
    labelEn: "Concurrent Calls",
  },
  {
    key: "multiLang",
    labelAr: "وكلاء متعددو اللغات",
    labelEn: "Multi-language",
  },
  {
    key: "multiUser",
    labelAr: "وصول متعدد المستخدمين",
    labelEn: "Multi-user Access",
  },
  { key: "elevenLabs", labelAr: "ElevenLabs مضمن", labelEn: "ElevenLabs" },
  {
    key: "inboundOutbound",
    labelAr: "واردة وصادرة",
    labelEn: "Inbound/Outbound",
  },
  {
    key: "customPhone",
    labelAr: "أرقام هاتف مخصصة",
    labelEn: "Custom Phone Numbers",
  },
  { key: "sipTrunk", labelAr: "SIP Trunk", labelEn: "SIP Trunk" },
  { key: "sms", labelAr: "إرسال SMS", labelEn: "SMS" },
  { key: "automations", labelAr: "أتمتة +300 تكامل", labelEn: "Automations" },
  { key: "knowledgeBase", labelAr: "قاعدة المعرفة", labelEn: "Knowledge Base" },
  { key: "webWidget", labelAr: "ويدجت ويب", labelEn: "Web Widget" },
  {
    key: "instantScheduling",
    labelAr: "جدولة مواعيد فورية",
    labelEn: "Instant Scheduling",
  },
  { key: "humanTransfer", labelAr: "تحويل لبشر", labelEn: "Human Transfer" },
  {
    key: "postCallData",
    labelAr: "استخراج بيانات بعد المكالمة",
    labelEn: "Post-call Data",
  },
  { key: "customDomain", labelAr: "نطاق مخصص", labelEn: "Custom Domain" },
  { key: "subAccounts", labelAr: "حسابات فرعية", labelEn: "Sub-accounts" },
  { key: "customBranding", labelAr: "مظهر مخصص", labelEn: "Custom Branding" },
  {
    key: "stripeIntegration",
    labelAr: "تكامل دفع Stripe",
    labelEn: "Stripe Integration",
  },
  {
    key: "emailSupport",
    labelAr: "دعم بريد إلكتروني",
    labelEn: "Email Support",
  },
  { key: "liveChat", labelAr: "دردشة مباشرة", labelEn: "Live Chat" },
  { key: "oneOnOneSupport", labelAr: "دعم 1-1 مخصص", labelEn: "1-1 Support" },
  {
    key: "earlyAccess",
    labelAr: "وصول مبكر للميزات",
    labelEn: "Early Feature Access",
  },
];

const faqItems = [
  {
    qAr: "هل أدفع رسوم إعداد؟",
    qEn: "Are there any setup fees?",
    aAr: "لا. تدفع فقط اشتراكك الشهري وأي دقائق إضافية فوق المضمنة. فريقنا يساعدك في الإعداد مجاناً.",
    aEn: "No. You only pay your monthly subscription and any extra minutes beyond the included amount. Our team helps you with setup for free.",
  },
  {
    qAr: "هل يمكنني تغيير خطتي؟",
    qEn: "Can I change my plan?",
    aAr: "نعم، في أي وقت. ارتقِ أو خفّض أو ألغِ — التغيير يسري فوراً مع تسوية تلقائية.",
    aEn: "Yes, at any time. Upgrade, downgrade, or cancel — changes take effect immediately with automatic proration.",
  },
  {
    qAr: "هل تُرحل الدقائق غير المستخدمة؟",
    qEn: "Do unused minutes roll over?",
    aAr: "تُعاد تعيينها مع كل دورة فوترة. في خطة الشركاء فقط تُرحل الدقائق للأشهر القادمة.",
    aEn: "Minutes reset with each billing cycle. Only the Partners plan carries unused minutes over to the next month.",
  },
  {
    qAr: "هل تقبلون الدفع بالريال السعودي؟",
    qEn: "Do you accept SAR payments?",
    aAr: "نعم. ندعم الدفع بالريال السعودي وجميع العملات الرئيسية عبر بطاقات الائتمان والتحويل البنكي.",
    aEn: "Yes. We support SAR and all major currencies via credit cards and bank transfers.",
  },
];

function getBestPlan(totalMinutes: number) {
  if (totalMinutes <= 120) return 0;
  if (totalMinutes <= 700) return 1;
  if (totalMinutes <= 1700) return 2;
  return 3;
}

export default function Pricing() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";
  const [isAnnual, setIsAnnual] = useState(true);
  const [monthlyCalls, setMonthlyCalls] = useState(1000);
  const [avgDuration, setAvgDuration] = useState(3);
  const [employeeSalary, setEmployeeSalary] = useState(5000);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const totalMinutes = monthlyCalls * avgDuration;
  const bestPlanIdx = getBestPlan(totalMinutes);
  const plan = plans[bestPlanIdx];
  const planPrice = isAnnual ? plan.annualPrice : plan.monthlyPrice;
  const extraMinutes = Math.max(0, totalMinutes - plan.minutes);
  const sondosCost = planPrice + extraMinutes * plan.extraMinRate;
  const employeesNeeded = Math.ceil(totalMinutes / 9600);
  const employeeCost = employeeSalary * employeesNeeded;
  const savings = employeeCost - sondosCost;

  return (
    <div className="min-h-screen bg-[#f4f0fa]">
      <section data-testid="section-pricing-hero" className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            data-testid="text-pricing-title"
            className="fi text-4xl md:text-6xl font-bold text-[#1a0a2e] mb-6"
          >
            {isAr
              ? "ابدأ مركز اتصالك الذكي — بأسعار تناسب كل ميزانية"
              : "Start Your Smart Call Center — At Prices That Fit Every Budget"}
          </h1>
          <p
            data-testid="text-pricing-subtitle"
            className="fi text-lg text-[#4a3a62] max-w-3xl mx-auto mb-10"
          >
            {isAr
              ? "اختر الخطة المناسبة لحجم أعمالك. كل الخطط تشمل وكلاء صوتيين بالعربية، تكاملات مع أنظمتك، وتقارير مفصلة. ابدأ بالتجربة المجانية — وارتقِ عندما تكون جاهزاً."
              : "Choose the plan that fits your business. All plans include Arabic voice agents, system integrations, and detailed reports. Start with a free trial — upgrade when you're ready."}
          </p>

          <div
            data-testid="toggle-billing"
            className="fi inline-flex items-center gap-3 bg-white rounded-full p-1.5 border border-[rgba(90,24,154,0.08)]"
          >
            <button
              data-testid="button-monthly"
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                !isAnnual
                  ? "bg-[#5a189a] text-white shadow-md"
                  : "text-[#4a3a62]"
              }`}
            >
              {isAr ? "شهري" : "Monthly"}
            </button>
            <button
              data-testid="button-annual"
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                isAnnual
                  ? "bg-[#5a189a] text-white shadow-md"
                  : "text-[#4a3a62]"
              }`}
            >
              {isAr ? "سنوي" : "Annual"}
              <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                {isAr ? "وفّر ~20%" : "Save ~20%"}
              </span>
            </button>
          </div>
        </div>
      </section>

      <section data-testid="section-pricing-cards" className="pb-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((p, idx) => {
            const price = isAnnual ? p.annualPrice : p.monthlyPrice;
            return (
              <div
                key={p.id}
                data-testid={`card-plan-${p.id}`}
                className={`fi group relative bg-white rounded-2xl p-6 flex flex-col hover:-translate-y-1 transition-all duration-500 ${
                  p.popular
                    ? "border-2 border-[#5a189a] shadow-lg shadow-[rgba(90,24,154,0.2)]"
                    : "border border-[rgba(90,24,154,0.06)]"
                }`}
              >
                {p.popular && (
                  <div
                    data-testid="badge-popular"
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#5a189a] text-white text-xs font-bold px-4 py-1 rounded-full"
                  >
                    {isAr ? "الأكثر شعبية" : "Most Popular"}
                  </div>
                )}

                <div className="mb-4">
                  <h3
                    data-testid={`text-plan-name-${p.id}`}
                    className="text-lg font-bold text-[#1a0a2e]"
                  >
                    {isAr ? p.nameAr : p.nameEn}
                  </h3>
                  <p className="text-xs text-[#4a3a62] mt-1">
                    {isAr ? p.bestForAr : p.bestForEn}
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span
                      data-testid={`text-plan-price-${p.id}`}
                      className="text-4xl font-bold text-[#1a0a2e]"
                    >
                      {price}
                    </span>
                    <span className="text-sm text-[#4a3a62]">
                      {isAr ? "ريال/شهر" : "SAR/mo"}
                    </span>
                  </div>
                  {isAnnual && (
                    <p className="text-xs text-[#4a3a62] mt-1 line-through">
                      {p.monthlyPrice} {isAr ? "ريال/شهر" : "SAR/mo"}
                    </p>
                  )}
                </div>

                <ul className="flex-1 space-y-3 mb-6">
                  {(isAr ? p.featuresListAr : p.featuresListEn).map(
                    (feat, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-[#4a3a62]"
                      >
                        <Check className="h-4 w-4 text-[#5a189a] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                        <span>{feat}</span>
                      </li>
                    ),
                  )}
                </ul>

                <Button
                  data-testid={`button-plan-cta-${p.id}`}
                  className={`w-full ${
                    p.popular
                      ? "shimmer bg-gradient-to-r from-[#5a189a] to-[#7b2cbf] text-white shadow-lg shadow-[rgba(90,24,154,0.25)] border-[#5a189a]"
                      : "bg-white text-[#5a189a] border-2 border-[#5a189a]"
                  }`}
                >
                  {isAr ? (
                    <>
                      <ArrowRight className="h-4 w-4 rotate-180" />
                      {idx === 3 ? "تواصل مع فريق الشراكات" : "ابدأ مجاناً"}
                    </>
                  ) : (
                    <>
                      {idx === 3 ? "Contact Partnerships" : "Start Free"}
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            );
          })}
        </div>
      </section>

      <section
        data-testid="section-savings-calculator"
        className="py-24 px-6"
      ></section>

      <section data-testid="section-comparison-table" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label mb-4 block">
              {isAr ? "مقارنة تفصيلية" : "Detailed Comparison"}
            </span>
            <h2
              data-testid="text-comparison-title"
              className="fi text-3xl md:text-5xl font-bold text-[#1a0a2e]"
            >
              {isAr ? "مقارنة تفصيلية للخطط" : "Detailed Plan Comparison"}
            </h2>
          </div>

          <div className="fi bg-white rounded-2xl border border-[rgba(90,24,154,0.06)] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr className="bg-[rgba(90,24,154,0.08)]">
                    <th
                      data-testid="header-feature"
                      className="px-6 py-4 text-left font-semibold text-[#1a0a2e] text-sm"
                    >
                      {isAr ? "الميزة" : "Feature"}
                    </th>
                    {plans.map((p) => (
                      <th
                        key={p.id}
                        data-testid={`header-plan-${p.id}`}
                        className={`px-4 py-4 text-center font-semibold text-sm ${
                          p.popular ? "text-[#5a189a]" : "text-[#4a3a62]"
                        }`}
                      >
                        {isAr ? p.nameAr : p.nameEn}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feat, rowIdx) => (
                    <tr
                      key={feat.key}
                      data-testid={`row-feature-${feat.key}`}
                      className={
                        rowIdx % 2 === 0
                          ? "bg-white"
                          : "bg-[rgba(90,24,154,0.02)]"
                      }
                    >
                      <td className="px-6 py-3.5 text-sm font-medium text-[#1a0a2e] border-t border-[rgba(90,24,154,0.04)]">
                        {isAr ? feat.labelAr : feat.labelEn}
                      </td>
                      {plans.map((p) => {
                        const val =
                          p.features[feat.key as keyof typeof p.features];
                        return (
                          <td
                            key={p.id}
                            data-testid={`cell-${feat.key}-${p.id}`}
                            className={`px-4 py-3.5 text-center text-sm border-t border-[rgba(90,24,154,0.04)] ${
                              p.popular ? "bg-[rgba(90,24,154,0.03)]" : ""
                            }`}
                          >
                            {typeof val === "boolean" ? (
                              val ? (
                                <Check className="h-4 w-4 text-[#00d68f] mx-auto" />
                              ) : (
                                <X className="h-4 w-4 text-gray-300 mx-auto" />
                              )
                            ) : (
                              <span className="font-medium text-[#1a0a2e]">
                                {val === "Unlimited"
                                  ? isAr
                                    ? "غير محدود"
                                    : "Unlimited"
                                  : val}
                              </span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section data-testid="section-pricing-faq" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label mb-4 block">
              {isAr ? "أسئلة شائعة" : "FAQ"}
            </span>
            <h2
              data-testid="text-faq-title"
              className="fi text-3xl md:text-5xl font-bold text-[#1a0a2e]"
            >
              {isAr ? "أسئلة التسعير الشائعة" : "Pricing FAQ"}
            </h2>
          </div>

          <div className="fi space-y-4">
            {faqItems.map((item, idx) => (
              <div
                key={idx}
                data-testid={`card-faq-${idx}`}
                className="bg-white rounded-2xl border border-[rgba(90,24,154,0.06)] overflow-hidden"
              >
                <button
                  data-testid={`button-faq-${idx}`}
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold text-[#1a0a2e]">
                    {isAr ? item.qAr : item.qEn}
                  </span>
                  {openFaq === idx ? (
                    <ChevronUp className="h-5 w-5 text-[#5a189a] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[#4a3a62] flex-shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div
                    data-testid={`text-faq-answer-${idx}`}
                    className="px-6 pb-5 text-[#4a3a62] leading-relaxed"
                  >
                    {isAr ? item.aAr : item.aEn}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
