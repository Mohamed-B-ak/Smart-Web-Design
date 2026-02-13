import { useLanguage } from '@/context/LanguageContext';
import FinalCTA from '@/components/FinalCTA';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import { ReactNode } from 'react';

export interface IndustryPageProps {
  icon: ReactNode; // lucide icon element for the industry
  heroTitle: string;
  heroDescription: string;
  heroStats?: { value: string; label: string }[];
  useCases: { icon: ReactNode; title: string; description: string }[];
  costComparison?: { 
    headers: [string, string]; // e.g. ["Traditional Employee", "Sondos AI"]
    rows: { label: string; traditional: string; sondos: string }[];
  };
  servedList?: string[]; // e.g. "Clinics, Hospitals, etc."
  ctaText: string;
  ctaHref?: string;
}

export default function IndustryPage({
  icon,
  heroTitle,
  heroDescription,
  heroStats,
  useCases,
  costComparison,
  servedList,
  ctaText,
  ctaHref,
}: IndustryPageProps) {
  const { lang } = useLanguage();
  const isRTL = lang === 'ar';

  return (
    <div className="min-h-screen bg-[#f8f9fc]">
      {/* Hero Section */}
      <section 
        data-testid="section-industry-hero"
        className="pt-32 pb-16 px-6"
      >
        <div className="max-w-4xl mx-auto">
          {/* Hero Icon */}
          <div 
            data-testid="icon-hero"
            className="flex justify-center mb-8"
          >
            <div className="w-20 h-20 rounded-2xl bg-[rgba(124,92,252,0.1)] flex items-center justify-center text-[#7c5cfc]">
              {icon}
            </div>
          </div>

          {/* Hero Title */}
          <h1 
            data-testid="text-industry-title"
            className="text-4xl md:text-6xl font-bold text-[#1a1a2e] text-center mb-6"
          >
            {heroTitle}
          </h1>

          {/* Hero Description */}
          <p 
            data-testid="text-industry-description"
            className="text-lg text-[#5a5a72] text-center max-w-3xl mx-auto mb-12"
          >
            {heroDescription}
          </p>

          {/* Stats Grid (if provided) */}
          {heroStats && heroStats.length > 0 && (
            <div 
              data-testid="grid-hero-stats"
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
            >
              {heroStats.map((stat, index) => (
                <div
                  key={index}
                  data-testid={`card-stat-${index}`}
                  className="fi bg-white rounded-2xl p-6 text-center border border-[rgba(0,0,0,0.06)] hover:border-[rgba(124,92,252,0.2)] hover:shadow-lg transition-all"
                >
                  <div className="text-2xl md:text-3xl font-bold text-[#7c5cfc] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#5a5a72]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button
              data-testid="button-hero-cta"
              className="gradient-bg text-white glow px-8 py-6 text-lg font-semibold"
              asChild={!!ctaHref}
            >
              {ctaHref ? (
                <a href={ctaHref}>
                  {isRTL ? <ArrowRight className="h-5 w-5 rotate-180" /> : null}
                  {ctaText}
                  {!isRTL ? <ArrowRight className="h-5 w-5" /> : null}
                </a>
              ) : (
                <>
                  {isRTL ? <ArrowRight className="h-5 w-5 rotate-180" /> : null}
                  {ctaText}
                  {!isRTL ? <ArrowRight className="h-5 w-5" /> : null}
                </>
              )}
            </Button>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section 
        data-testid="section-use-cases"
        className="py-24 px-6"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span 
              data-testid="label-use-cases"
              className="section-label mb-4 block"
            >
              Use Cases
            </span>
            <h2 
              data-testid="text-use-cases-title"
              className="text-3xl md:text-5xl font-bold text-[#1a1a2e]"
            >
              How It Works for Your Industry
            </h2>
          </div>

          <div 
            data-testid="grid-use-cases"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {useCases.map((useCase, index) => (
              <div
                key={index}
                data-testid={`card-use-case-${index}`}
                className="fi bg-white rounded-2xl border border-[rgba(0,0,0,0.06)] p-6 hover:shadow-lg hover:border-[rgba(124,92,252,0.2)] transition-all"
              >
                <div 
                  data-testid={`icon-use-case-${index}`}
                  className="w-14 h-14 rounded-xl bg-[rgba(124,92,252,0.1)] flex items-center justify-center mb-4 text-[#7c5cfc]"
                >
                  {useCase.icon}
                </div>
                <h3 
                  data-testid={`text-use-case-title-${index}`}
                  className="text-xl font-bold text-[#1a1a2e] mb-2"
                >
                  {useCase.title}
                </h3>
                <p 
                  data-testid={`text-use-case-desc-${index}`}
                  className="text-[#5a5a72]"
                >
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison Section (if provided) */}
      {costComparison && (
        <section 
          data-testid="section-cost-comparison"
          className="py-24 px-6"
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 
                data-testid="text-comparison-title"
                className="text-3xl md:text-5xl font-bold text-[#1a1a2e]"
              >
                Why Choose Sondos AI?
              </h2>
            </div>

            <div 
              data-testid="card-comparison-table"
              className="bg-white rounded-2xl overflow-hidden border border-[rgba(0,0,0,0.06)]"
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[rgba(124,92,252,0.1)]">
                      <th 
                        data-testid="header-comparison-label"
                        className="px-6 py-4 text-left font-semibold text-[#1a1a2e]"
                      >
                        Feature
                      </th>
                      <th 
                        data-testid={`header-comparison-${0}`}
                        className="px-6 py-4 text-left font-semibold text-[#5a5a72]"
                      >
                        {costComparison.headers[0]}
                      </th>
                      <th 
                        data-testid={`header-comparison-${1}`}
                        className="px-6 py-4 text-left font-semibold text-[#7c5cfc]"
                      >
                        {costComparison.headers[1]}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {costComparison.rows.map((row, index) => (
                      <tr
                        key={index}
                        data-testid={`row-comparison-${index}`}
                        className={index % 2 === 0 ? 'bg-white' : 'bg-[rgba(124,92,252,0.02)]'}
                      >
                        <td 
                          data-testid={`cell-comparison-label-${index}`}
                          className="px-6 py-4 font-medium text-[#1a1a2e] border-t border-[rgba(0,0,0,0.06)]"
                        >
                          {row.label}
                        </td>
                        <td 
                          data-testid={`cell-comparison-traditional-${index}`}
                          className="px-6 py-4 text-[#5a5a72] border-t border-[rgba(0,0,0,0.06)]"
                        >
                          {row.traditional}
                        </td>
                        <td 
                          data-testid={`cell-comparison-sondos-${index}`}
                          className="px-6 py-4 text-[#7c5cfc] font-medium border-t border-[rgba(0,0,0,0.06)]"
                        >
                          <div className="flex items-center gap-2">
                            {row.sondos === '✓' ? (
                              <>
                                <Check className="h-5 w-5 text-[#00d68f]" />
                                <span className="text-[#00d68f]">{row.sondos}</span>
                              </>
                            ) : (
                              row.sondos
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Served List Section (if provided) */}
      {servedList && servedList.length > 0 && (
        <section 
          data-testid="section-served-list"
          className="py-24 px-6"
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 
                data-testid="text-served-title"
                className="text-3xl md:text-5xl font-bold text-[#1a1a2e]"
              >
                We Serve
              </h2>
            </div>

            <div 
              data-testid="grid-served-list"
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {servedList.map((item, index) => (
                <div
                  key={index}
                  data-testid={`card-served-${index}`}
                  className="fi bg-white rounded-2xl border border-[rgba(0,0,0,0.06)] p-6 flex items-center gap-4 hover:border-[rgba(124,92,252,0.2)] hover:shadow-lg transition-all"
                >
                  <div className="w-6 h-6 rounded-full bg-[#7c5cfc] flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span 
                    data-testid={`text-served-${index}`}
                    className="text-[#1a1a2e] font-medium"
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA Section */}
      <FinalCTA />
    </div>
  );
}
