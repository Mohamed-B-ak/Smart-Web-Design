import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import FinalCTA from "@/components/FinalCTA";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import {
  Tag,
  Users,
  CalendarX,
  Link,
  Globe,
  Languages,
  Shield,
  ArrowRight,
  Phone,
  Palette,
  TrendingUp,
  DollarSign,
  ChevronDown,
  ChevronUp,
  Calculator,
  CreditCard,
  Banknote,
} from "lucide-react";

export default function Partner() {
  const { t, lang } = useLanguage();
  const isRTL = lang === "ar";

  const [clientPrice, setClientPrice] = useState(0.75);
  const [monthlyMinutes, setMonthlyMinutes] = useState(19000);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const revenue = monthlyMinutes * clientPrice;
  const cost = 1570 + Math.max(0, monthlyMinutes - 3500) * 0.35;
  const monthlyProfit = revenue - cost;
  const annualProfit = monthlyProfit * 12;

  const featureCards = [
    { icon: Tag, titleKey: "partner.f1_title", descKey: "partner.f1_desc" },
    { icon: Users, titleKey: "partner.f2_title", descKey: "partner.f2_desc" },
    {
      icon: CalendarX,
      titleKey: "partner.f3_title",
      descKey: "partner.f3_desc",
    },
    { icon: Users, titleKey: "partner.f4_title", descKey: "partner.f4_desc" },
    { icon: Link, titleKey: "partner.f5_title", descKey: "partner.f5_desc" },
    { icon: Globe, titleKey: "partner.f6_title", descKey: "partner.f6_desc" },
    {
      icon: Languages,
      titleKey: "partner.f7_title",
      descKey: "partner.f7_desc",
    },
    { icon: Shield, titleKey: "partner.f8_title", descKey: "partner.f8_desc" },
  ];

  const opportunityCards = [
    {
      icon: Palette,
      titleKey: "partner.opp1_title",
      descKey: "partner.opp1_desc",
    },
    {
      icon: DollarSign,
      titleKey: "partner.opp2_title",
      descKey: "partner.opp2_desc",
    },
    {
      icon: TrendingUp,
      titleKey: "partner.opp3_title",
      descKey: "partner.opp3_desc",
    },
  ];

  const faqs = [
    { qKey: "partner.faq1_q", aKey: "partner.faq1_a" },
    { qKey: "partner.faq2_q", aKey: "partner.faq2_a" },
    { qKey: "partner.faq3_q", aKey: "partner.faq3_a" },
    { qKey: "partner.faq4_q", aKey: "partner.faq4_a" },
  ];

  return (
    <main data-testid="page-partner">
      {/* Hero Section */}
      <section
        data-testid="section-partner-hero"
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-visible"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#f4f0fa] via-white to-[rgba(90,24,154,0.1)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(90,24,154,0.1)_0%,_transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h1
            data-testid="text-partner-hero-title"
            className="fi text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl leading-tight"
          >
            {t("partner.hero_title")}
          </h1>
          <p
            data-testid="text-partner-hero-desc"
            className="fi mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600"
          >
            {t("partner.hero_desc")}
          </p>
          <div className="fi mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              data-testid="button-partner-start"
              className="w-full bg-gradient-to-r from-[#5a189a] to-[#7b2cbf] text-white shadow-lg shadow-[rgba(90,24,154,0.25)] border-[#5a189a] sm:w-auto"
            >
              {isRTL ? <ArrowRight className="h-4 w-4 rotate-180" /> : null}
              {t("partner.hero_cta1")}
              {!isRTL ? <ArrowRight className="h-4 w-4" /> : null}
            </Button>
            <Button
              data-testid="button-partner-book"
              variant="outline"
              className="w-full border-[rgba(90,24,154,0.2)] text-[#5a189a] sm:w-auto"
            >
              <Phone className="h-4 w-4" />
              {t("partner.hero_cta2")}
            </Button>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section
        data-testid="section-partner-why"
        className="py-20 md:py-28 px-6"
      >
        <div className="mx-auto max-w-6xl">
          <h2
            data-testid="text-partner-why-title"
            className="fi text-3xl font-bold text-center text-gray-900 sm:text-4xl"
          >
            {t("partner.why_title")}
          </h2>
          <p
            data-testid="text-partner-why-desc"
            className="fi mx-auto mt-4 max-w-2xl text-center text-gray-600 text-lg"
          >
            {t("partner.why_desc")}
          </p>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featureCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <Card
                  key={idx}
                  data-testid={`card-partner-feature-${idx}`}
                  className="fi group p-6 rounded-2xl border border-gray-100 bg-white transition-shadow duration-300 hover:shadow-md hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(90,24,154,0.06)]">
                    <Icon className="h-6 w-6 text-[#5a189a] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-gray-900">
                    {t(card.titleKey)}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                    {t(card.descKey)}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Opportunity Section */}
      <section
        data-testid="section-partner-opportunity"
        className="py-20 md:py-28 px-6 bg-gradient-to-b from-[rgba(90,24,154,0.05)] to-white"
      >
        <div className="mx-auto max-w-5xl">
          <h2
            data-testid="text-partner-opp-title"
            className="fi text-3xl font-bold text-center text-gray-900 sm:text-4xl"
          >
            {t("partner.opp_title")}
          </h2>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {opportunityCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <Card
                  key={idx}
                  data-testid={`card-partner-opp-${idx}`}
                  className="fi group relative overflow-visible rounded-2xl border-0 bg-gradient-to-br from-[#5a189a] to-[#7b2cbf] p-8 text-white hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold">{t(card.titleKey)}</h3>
                  <p className="mt-3 text-sm text-purple-100 leading-relaxed">
                    {t(card.descKey)}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partner Pricing Details */}
      <section
        data-testid="section-partner-pricing"
        className="py-20 md:py-28 px-6"
      >
        <div className="mx-auto max-w-4xl">
          <h2
            data-testid="text-partner-pricing-title"
            className="fi text-3xl font-bold text-center text-gray-900 sm:text-4xl"
          >
            {t("partner.pricing_title")}
          </h2>
          <div className="fi mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="group p-6 rounded-2xl border border-gray-100 bg-white text-center hover:-translate-y-1 transition-all duration-500">
              <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-full bg-[rgba(90,24,154,0.06)]">
                <Banknote className="h-6 w-6 text-[#5a189a] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="mt-4 text-sm text-gray-500">
                {t("partner.price_per_min_label")}
              </p>
              <p
                data-testid="text-partner-per-min"
                className="mt-1 text-3xl font-bold text-[#5a189a]"
              >
                0.35{" "}
                <span className="text-base font-normal text-gray-500">
                  {t("partner.sar_min")}
                </span>
              </p>
            </Card>
            <Card className="group p-6 rounded-2xl border border-gray-100 bg-white text-center hover:-translate-y-1 transition-all duration-500">
              <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-full bg-[rgba(90,24,154,0.06)]">
                <Calculator className="h-6 w-6 text-[#5a189a] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="mt-4 text-sm text-gray-500">
                {t("partner.monthly_sub_label")}
              </p>
              <p
                data-testid="text-partner-monthly-price"
                className="mt-1 text-3xl font-bold text-[#5a189a]"
              >
                1,570{" "}
                <span className="text-base font-normal text-gray-500">
                  {t("partner.sar_month")}
                </span>
              </p>
              <p className="mt-1 text-sm text-gray-400">
                {t("partner.annual_price")}: 1,330 {t("partner.sar_month")}
              </p>
            </Card>
            <Card className="group p-6 rounded-2xl border border-gray-100 bg-white text-center hover:-translate-y-1 transition-all duration-500">
              <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-full bg-[rgba(90,24,154,0.06)]">
                <CreditCard className="h-6 w-6 text-[#5a189a] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="mt-4 text-sm text-gray-500">
                {t("partner.billing_label")}
              </p>
              <p
                data-testid="text-partner-billing"
                className="mt-1 text-base font-semibold text-gray-900"
              >
                {t("partner.billing_desc")}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Partner Profit Calculator */}

      {/* Partner FAQ */}
      <section
        data-testid="section-partner-faq"
        className="py-20 md:py-28 px-6"
      >
        <div className="mx-auto max-w-3xl">
          <h2
            data-testid="text-partner-faq-title"
            className="fi text-3xl font-bold text-center text-gray-900 sm:text-4xl"
          >
            {t("partner.faq_title")}
          </h2>
          <div className="mt-12 space-y-4">
            {faqs.map((faq, idx) => (
              <Card
                key={idx}
                data-testid={`card-partner-faq-${idx}`}
                className="fi rounded-2xl border border-gray-100 bg-white overflow-visible"
              >
                <button
                  data-testid={`button-partner-faq-${idx}`}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span className="text-base font-semibold text-gray-900">
                    {t(faq.qKey)}
                  </span>
                  {openFaq === idx ? (
                    <ChevronUp className="h-5 w-5 text-[#5a189a] shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5">
                    <p
                      data-testid={`text-partner-faq-answer-${idx}`}
                      className="text-sm text-gray-600 leading-relaxed"
                    >
                      {t(faq.aKey)}
                    </p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </main>
  );
}
