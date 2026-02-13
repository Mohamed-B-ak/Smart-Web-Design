import { useLanguage } from '@/context/LanguageContext';
import FinalCTA from '@/components/FinalCTA';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import { ReactNode } from 'react';

export interface IndustryPageProps {
  icon: ReactNode;
  heroTitle: string;
  heroDescription: string;
  heroStats?: { value: string; label: string }[];
  useCases: { icon: ReactNode; title: string; description: string }[];
  costComparison?: { 
    headers: [string, string];
    rows: { label: string; traditional: string; sondos: string }[];
  };
  servedList?: string[];
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
    <div className="min-h-screen bg-[var(--bg)]">
      <section 
        data-testid="section-industry-hero"
        className="relative pt-32 pb-20 px-6 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(90,24,154,0.08)_0%,_transparent_60%)]" />
        <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full opacity-20 float-slow" style={{ background: 'radial-gradient(circle, rgba(90,24,154,0.15), transparent 70%)' }} />
        <div className="absolute bottom-10 left-[5%] w-48 h-48 rounded-full opacity-15 float-gentle" style={{ background: 'radial-gradient(circle, rgba(157,78,221,0.15), transparent 70%)', animationDelay: '3s' }} />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div 
            data-testid="icon-hero"
            className="flex justify-center mb-8 animate-fade-up"
          >
            <div className="w-20 h-20 rounded-2xl bg-[rgba(90,24,154,0.08)] flex items-center justify-center text-[#5a189a] pulse-glow" style={{ borderRadius: '24px' }}>
              {icon}
            </div>
          </div>

          <h1 
            data-testid="text-industry-title"
            className="text-4xl md:text-6xl font-bold text-[#1a0a2e] mb-6 animate-fade-up animation-delay-100"
          >
            {heroTitle}
          </h1>

          <p 
            data-testid="text-industry-description"
            className="text-lg text-[#4a3a62] max-w-3xl mx-auto mb-12 animate-fade-up animation-delay-200"
          >
            {heroDescription}
          </p>

          {heroStats && heroStats.length > 0 && (
            <div 
              data-testid="grid-hero-stats"
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
            >
              {heroStats.map((stat, index) => (
                <div
                  key={index}
                  data-testid={`card-stat-${index}`}
                  className="fi glass-card rounded-2xl p-6 text-center hover:shadow-[0_8px_30px_rgba(90,24,154,0.1)] transition-all duration-500 group"
                >
                  <div className="text-2xl md:text-3xl font-bold gradient-text mb-2 group-hover:scale-105 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#4a3a62]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="flex justify-center animate-fade-up animation-delay-300">
            <Button
              data-testid="button-hero-cta"
              className="gradient-bg text-white glow px-8 py-6 text-lg font-semibold shimmer"
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

      <section 
        data-testid="section-use-cases"
        className="py-24 px-6"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span data-testid="label-use-cases" className="section-label mb-4 block">Use Cases</span>
            <h2 data-testid="text-use-cases-title" className="text-3xl md:text-5xl font-bold text-[#1a0a2e]">
              How It Works for Your Industry
            </h2>
          </div>

          <div data-testid="grid-use-cases" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                data-testid={`card-use-case-${index}`}
                className="fi group bg-white rounded-2xl border border-[rgba(90,24,154,0.06)] p-6 hover:shadow-[0_12px_40px_rgba(90,24,154,0.1)] hover:border-[rgba(90,24,154,0.15)] transition-all duration-500 hover:-translate-y-1"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div 
                  data-testid={`icon-use-case-${index}`}
                  className="w-14 h-14 rounded-xl bg-[rgba(90,24,154,0.06)] flex items-center justify-center mb-4 text-[#5a189a] group-hover:bg-[rgba(90,24,154,0.12)] group-hover:scale-110 transition-all duration-300"
                >
                  {useCase.icon}
                </div>
                <h3 
                  data-testid={`text-use-case-title-${index}`}
                  className="text-xl font-bold text-[#1a0a2e] mb-2"
                >
                  {useCase.title}
                </h3>
                <p 
                  data-testid={`text-use-case-desc-${index}`}
                  className="text-[#4a3a62]"
                >
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {costComparison && (
        <section 
          data-testid="section-cost-comparison"
          className="py-24 px-6"
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 data-testid="text-comparison-title" className="text-3xl md:text-5xl font-bold text-[#1a0a2e]">
                Why Choose Sondos AI?
              </h2>
            </div>

            <div 
              data-testid="card-comparison-table"
              className="bg-white rounded-2xl overflow-hidden border border-[rgba(90,24,154,0.08)] shadow-[0_8px_30px_rgba(90,24,154,0.06)]"
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-[rgba(90,24,154,0.08)] to-[rgba(157,78,221,0.05)]">
                      <th data-testid="header-comparison-label" className="px-6 py-4 text-left font-semibold text-[#1a0a2e]">Feature</th>
                      <th data-testid={`header-comparison-${0}`} className="px-6 py-4 text-left font-semibold text-[#4a3a62]">{costComparison.headers[0]}</th>
                      <th data-testid={`header-comparison-${1}`} className="px-6 py-4 text-left font-semibold text-[#5a189a]">{costComparison.headers[1]}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {costComparison.rows.map((row, index) => (
                      <tr
                        key={index}
                        data-testid={`row-comparison-${index}`}
                        className={`${index % 2 === 0 ? 'bg-white' : 'bg-[rgba(90,24,154,0.02)]'} hover:bg-[rgba(90,24,154,0.04)] transition-colors duration-200`}
                      >
                        <td data-testid={`cell-comparison-label-${index}`} className="px-6 py-4 font-medium text-[#1a0a2e] border-t border-[rgba(90,24,154,0.06)]">{row.label}</td>
                        <td data-testid={`cell-comparison-traditional-${index}`} className="px-6 py-4 text-[#4a3a62] border-t border-[rgba(90,24,154,0.06)]">{row.traditional}</td>
                        <td data-testid={`cell-comparison-sondos-${index}`} className="px-6 py-4 text-[#5a189a] font-medium border-t border-[rgba(90,24,154,0.06)]">
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

      {servedList && servedList.length > 0 && (
        <section 
          data-testid="section-served-list"
          className="py-24 px-6"
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 data-testid="text-served-title" className="text-3xl md:text-5xl font-bold text-[#1a0a2e]">We Serve</h2>
            </div>

            <div data-testid="grid-served-list" className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {servedList.map((item, index) => (
                <div
                  key={index}
                  data-testid={`card-served-${index}`}
                  className="fi group bg-white rounded-2xl border border-[rgba(90,24,154,0.06)] p-6 flex items-center gap-4 hover:border-[rgba(90,24,154,0.15)] hover:shadow-[0_8px_25px_rgba(90,24,154,0.08)] transition-all duration-500 hover:-translate-y-0.5"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#5a189a] to-[#9d4edd] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span data-testid={`text-served-${index}`} className="text-[#1a0a2e] font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <FinalCTA />
    </div>
  );
}
