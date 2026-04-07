import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';

export interface IndustryPageProps {
  icon: ReactNode;
  heroTitle: string;
  heroDescription: string;
  heroStats?: { value: string; label: string }[];
  useCases: { icon: ReactNode; title: string; description: string }[];
  ctaText: string;
  ctaHref?: string;
}

export default function IndustryPage({
  icon,
  heroTitle,
  heroDescription,
  heroStats,
  useCases,
  ctaText,
  ctaHref,
}: IndustryPageProps) {
  const { lang } = useLanguage();
  const isRTL = lang === 'ar';

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="pt-28 pb-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">

          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              {icon}
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {heroTitle}
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground mb-8">
            {heroDescription}
          </p>

          {/* Stats */}
          {heroStats && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {heroStats.map((stat, i) => (
                <div key={i} className="p-4 border rounded-lg text-center">
                  <div className="text-xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* CTA */}
          <div>
            <Button
              className="bg-primary text-white px-6 py-3 rounded-full"
              asChild={!!ctaHref}
            >
              {ctaHref ? (
                <a href={ctaHref}>
                  {ctaText} {!isRTL && <ArrowRight className="inline ml-2 w-4 h-4" />}
                </a>
              ) : (
                <>
                  {ctaText} {!isRTL && <ArrowRight className="inline ml-2 w-4 h-4" />}
                </>
              )}
            </Button>
          </div>

        </div>
      </section>

      {/* USE CASES */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground">
              How It Works
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="p-5 border rounded-xl bg-white hover:shadow-md transition duration-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-primary">
                    {useCase.icon}
                  </div>
                  <h3 className="font-semibold text-foreground">
                    {useCase.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}