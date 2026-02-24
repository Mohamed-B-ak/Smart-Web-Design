import { useLanguage } from "@/context/LanguageContext";
import FinalCTA from "@/components/FinalCTA";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { ReactNode } from "react";

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
  const isRTL = lang === "ar";

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <section
        data-testid="section-industry-hero"
        className="relative pt-32 pb-20 px-6 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(90,24,154,0.08)_0%,_transparent_60%)]" />
        <div
          className="absolute top-20 right-[10%] w-64 h-64 rounded-full opacity-20 float-slow"
          style={{
            background:
              "radial-gradient(circle, rgba(90,24,154,0.15), transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-10 left-[5%] w-48 h-48 rounded-full opacity-15 float-gentle"
          style={{
            background:
              "radial-gradient(circle, rgba(157,78,221,0.15), transparent 70%)",
            animationDelay: "3s",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div
            data-testid="icon-hero"
            className="flex justify-center mb-8 animate-fade-up"
          >
            <div
              className="w-20 h-20 rounded-2xl bg-[rgba(90,24,154,0.08)] flex items-center justify-center text-[#5a189a] pulse-glow"
              style={{ borderRadius: "24px" }}
            >
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
                  <div className="text-sm text-[#4a3a62]">{stat.label}</div>
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

      {/* Removed default sections: 'Why Choose Sondos AI?', 'Feature', etc. */}

      {servedList && servedList.length > 0 && (
        <section data-testid="section-served-list" className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2
                data-testid="text-served-title"
                className="text-3xl md:text-5xl font-bold text-[#1a0a2e]"
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
                  className="fi group bg-white rounded-2xl border border-[rgba(90,24,154,0.06)] p-6 flex items-center gap-4 hover:border-[rgba(90,24,154,0.15)] hover:shadow-[0_8px_25px_rgba(90,24,154,0.08)] transition-all duration-500 hover:-translate-y-0.5"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#5a189a] to-[#9d4edd] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span
                    data-testid={`text-served-${index}`}
                    className="text-[#1a0a2e] font-medium"
                  >
                    {item}
                  </span>
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
