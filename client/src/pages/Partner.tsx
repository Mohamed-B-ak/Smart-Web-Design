import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import FinalCTA from '@/components/FinalCTA';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
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
} from 'lucide-react';

export default function Partner() {
  const { t, lang } = useLanguage();
  const isRTL = lang === 'ar';

  const [clientPrice, setClientPrice] = useState(0.75);
  const [monthlyMinutes, setMonthlyMinutes] = useState(19000);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const revenue = monthlyMinutes * clientPrice;
  const cost = 1570 + Math.max(0, (monthlyMinutes - 3500)) * 0.35;
  const monthlyProfit = revenue - cost;
  const annualProfit = monthlyProfit * 12;

  const featureCards = [
    { icon: Tag, titleKey: 'partner.f1_title', descKey: 'partner.f1_desc' },
    { icon: Users, titleKey: 'partner.f2_title', descKey: 'partner.f2_desc' },
    { icon: CalendarX, titleKey: 'partner.f3_title', descKey: 'partner.f3_desc' },
    { icon: Users, titleKey: 'partner.f4_title', descKey: 'partner.f4_desc' },
    { icon: Link, titleKey: 'partner.f5_title', descKey: 'partner.f5_desc' },
    { icon: Globe, titleKey: 'partner.f6_title', descKey: 'partner.f6_desc' },
    { icon: Languages, titleKey: 'partner.f7_title', descKey: 'partner.f7_desc' },
    { icon: Shield, titleKey: 'partner.f8_title', descKey: 'partner.f8_desc' },
  ];

  const opportunityCards = [
    { icon: Palette, titleKey: 'partner.opp1_title', descKey: 'partner.opp1_desc' },
    { icon: DollarSign, titleKey: 'partner.opp2_title', descKey: 'partner.opp2_desc' },
    { icon: TrendingUp, titleKey: 'partner.opp3_title', descKey: 'partner.opp3_desc' },
  ];

  const faqs = [
    { qKey: 'partner.faq1_q', aKey: 'partner.faq1_a' },
    { qKey: 'partner.faq2_q', aKey: 'partner.faq2_a' },
    { qKey: 'partner.faq3_q', aKey: 'partner.faq3_a' },
    { qKey: 'partner.faq4_q', aKey: 'partner.faq4_a' },
  ];

  return (
    <main data-testid="page-partner">
      {/* Hero Section */}
      <section data-testid="section-partner-hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-visible">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-100/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(124,92,252,0.1)_0%,_transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h1
            data-testid="text-partner-hero-title"
            className="fi text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl leading-tight"
          >
            {t('partner.hero_title')}
          </h1>
          <p
            data-testid="text-partner-hero-desc"
            className="fi mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600"
          >
            {t('partner.hero_desc')}
          </p>
          <div className="fi mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              data-testid="button-partner-start"
              className="w-full bg-gradient-to-r from-[#7c5cfc] to-[#9b87f5] text-white shadow-lg shadow-purple-500/25 border-[#7c5cfc] sm:w-auto"
            >
              {isRTL ? <ArrowRight className="h-4 w-4 rotate-180" /> : null}
              {t('partner.hero_cta1')}
              {!isRTL ? <ArrowRight className="h-4 w-4" /> : null}
            </Button>
            <Button
              data-testid="button-partner-book"
              variant="outline"
              className="w-full border-purple-300 text-purple-700 sm:w-auto"
            >
              <Phone className="h-4 w-4" />
              {t('partner.hero_cta2')}
            </Button>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section data-testid="section-partner-why" className="py-20 md:py-28 px-6">
        <div className="mx-auto max-w-6xl">
          <h2
            data-testid="text-partner-why-title"
            className="fi text-3xl font-bold text-center text-gray-900 sm:text-4xl"
          >
            {t('partner.why_title')}
          </h2>
          <p
            data-testid="text-partner-why-desc"
            className="fi mx-auto mt-4 max-w-2xl text-center text-gray-600 text-lg"
          >
            {t('partner.why_desc')}
          </p>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featureCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <Card
                  key={idx}
                  data-testid={`card-partner-feature-${idx}`}
                  className="fi p-6 rounded-2xl border border-gray-100 bg-white transition-shadow duration-300 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                    <Icon className="h-6 w-6 text-[#7c5cfc]" />
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
      <section data-testid="section-partner-opportunity" className="py-20 md:py-28 px-6 bg-gradient-to-b from-purple-50/50 to-white">
        <div className="mx-auto max-w-5xl">
          <h2
            data-testid="text-partner-opp-title"
            className="fi text-3xl font-bold text-center text-gray-900 sm:text-4xl"
          >
            {t('partner.opp_title')}
          </h2>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {opportunityCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <Card
                  key={idx}
                  data-testid={`card-partner-opp-${idx}`}
                  className="fi relative overflow-visible rounded-2xl border-0 bg-gradient-to-br from-[#7c5cfc] to-[#9b87f5] p-8 text-white"
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
      <section data-testid="section-partner-pricing" className="py-20 md:py-28 px-6">
        <div className="mx-auto max-w-4xl">
          <h2
            data-testid="text-partner-pricing-title"
            className="fi text-3xl font-bold text-center text-gray-900 sm:text-4xl"
          >
            {t('partner.pricing_title')}
          </h2>
          <div className="fi mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 rounded-2xl border border-gray-100 bg-white text-center">
              <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-full bg-purple-100">
                <Banknote className="h-6 w-6 text-[#7c5cfc]" />
              </div>
              <p className="mt-4 text-sm text-gray-500">{t('partner.price_per_min_label')}</p>
              <p data-testid="text-partner-per-min" className="mt-1 text-3xl font-bold text-[#7c5cfc]">0.35 <span className="text-base font-normal text-gray-500">{t('partner.sar_min')}</span></p>
            </Card>
            <Card className="p-6 rounded-2xl border border-gray-100 bg-white text-center">
              <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-full bg-purple-100">
                <Calculator className="h-6 w-6 text-[#7c5cfc]" />
              </div>
              <p className="mt-4 text-sm text-gray-500">{t('partner.monthly_sub_label')}</p>
              <p data-testid="text-partner-monthly-price" className="mt-1 text-3xl font-bold text-[#7c5cfc]">1,570 <span className="text-base font-normal text-gray-500">{t('partner.sar_month')}</span></p>
              <p className="mt-1 text-sm text-gray-400">{t('partner.annual_price')}: 1,330 {t('partner.sar_month')}</p>
            </Card>
            <Card className="p-6 rounded-2xl border border-gray-100 bg-white text-center">
              <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-full bg-purple-100">
                <CreditCard className="h-6 w-6 text-[#7c5cfc]" />
              </div>
              <p className="mt-4 text-sm text-gray-500">{t('partner.billing_label')}</p>
              <p data-testid="text-partner-billing" className="mt-1 text-base font-semibold text-gray-900">{t('partner.billing_desc')}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Partner Profit Calculator */}
      <section data-testid="section-partner-calculator" className="py-20 md:py-28 px-6 bg-gradient-to-b from-purple-50/50 to-white">
        <div className="mx-auto max-w-3xl">
          <h2
            data-testid="text-partner-calc-title"
            className="fi text-3xl font-bold text-center text-gray-900 sm:text-4xl"
          >
            {t('partner.calc_title')}
          </h2>
          <p className="fi mx-auto mt-4 max-w-xl text-center text-gray-600">
            {t('partner.calc_desc')}
          </p>

          <Card className="fi mt-12 p-8 rounded-2xl border border-gray-100 bg-white">
            <div className="space-y-8">
              {/* Client Price Slider */}
              <div>
                <div className="flex items-center justify-between gap-4 flex-wrap mb-3">
                  <label className="text-sm font-medium text-gray-700">{t('partner.calc_price_label')}</label>
                  <span data-testid="text-partner-client-price" className="text-sm font-bold text-[#7c5cfc]">{clientPrice.toFixed(2)} {t('partner.sar')}</span>
                </div>
                <Slider
                  data-testid="slider-partner-price"
                  min={0.35}
                  max={2}
                  step={0.05}
                  value={[clientPrice]}
                  onValueChange={(val) => setClientPrice(val[0])}
                  className="[&_[role=slider]]:border-[#7c5cfc] [&_[data-orientation=horizontal]>[data-orientation=horizontal]]:bg-[#7c5cfc]"
                />
                <div className="flex items-center justify-between gap-4 mt-1 text-xs text-gray-400">
                  <span>0.35</span>
                  <span>2.00</span>
                </div>
              </div>

              {/* Monthly Minutes Slider */}
              <div>
                <div className="flex items-center justify-between gap-4 flex-wrap mb-3">
                  <label className="text-sm font-medium text-gray-700">{t('partner.calc_minutes_label')}</label>
                  <span data-testid="text-partner-monthly-minutes" className="text-sm font-bold text-[#7c5cfc]">{monthlyMinutes.toLocaleString()} {t('partner.minutes')}</span>
                </div>
                <Slider
                  data-testid="slider-partner-minutes"
                  min={1000}
                  max={100000}
                  step={500}
                  value={[monthlyMinutes]}
                  onValueChange={(val) => setMonthlyMinutes(val[0])}
                  className="[&_[role=slider]]:border-[#7c5cfc] [&_[data-orientation=horizontal]>[data-orientation=horizontal]]:bg-[#7c5cfc]"
                />
                <div className="flex items-center justify-between gap-4 mt-1 text-xs text-gray-400">
                  <span>1,000</span>
                  <span>100,000</span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="rounded-xl bg-gray-50 p-4 text-center">
                <p className="text-xs text-gray-500">{t('partner.calc_revenue')}</p>
                <p data-testid="text-partner-revenue" className="mt-1 text-lg font-bold text-gray-900">{revenue.toLocaleString(undefined, { maximumFractionDigits: 0 })} <span className="text-xs text-gray-500">{t('partner.sar')}</span></p>
              </div>
              <div className="rounded-xl bg-gray-50 p-4 text-center">
                <p className="text-xs text-gray-500">{t('partner.calc_cost')}</p>
                <p data-testid="text-partner-cost" className="mt-1 text-lg font-bold text-gray-900">{cost.toLocaleString(undefined, { maximumFractionDigits: 0 })} <span className="text-xs text-gray-500">{t('partner.sar')}</span></p>
              </div>
              <div className="rounded-xl bg-[#7c5cfc]/10 p-4 text-center">
                <p className="text-xs text-[#7c5cfc]">{t('partner.calc_monthly_profit')}</p>
                <p data-testid="text-partner-monthly-profit" className="mt-1 text-lg font-bold text-[#7c5cfc]">{monthlyProfit.toLocaleString(undefined, { maximumFractionDigits: 0 })} <span className="text-xs">{t('partner.sar')}</span></p>
              </div>
              <div className="rounded-xl bg-[#7c5cfc]/10 p-4 text-center">
                <p className="text-xs text-[#7c5cfc]">{t('partner.calc_annual_profit')}</p>
                <p data-testid="text-partner-annual-profit" className="mt-1 text-lg font-bold text-[#7c5cfc]">{annualProfit.toLocaleString(undefined, { maximumFractionDigits: 0 })} <span className="text-xs">{t('partner.sar')}</span></p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Partner FAQ */}
      <section data-testid="section-partner-faq" className="py-20 md:py-28 px-6">
        <div className="mx-auto max-w-3xl">
          <h2
            data-testid="text-partner-faq-title"
            className="fi text-3xl font-bold text-center text-gray-900 sm:text-4xl"
          >
            {t('partner.faq_title')}
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
                  <span className="text-base font-semibold text-gray-900">{t(faq.qKey)}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="h-5 w-5 text-[#7c5cfc] shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5">
                    <p data-testid={`text-partner-faq-answer-${idx}`} className="text-sm text-gray-600 leading-relaxed">{t(faq.aKey)}</p>
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
