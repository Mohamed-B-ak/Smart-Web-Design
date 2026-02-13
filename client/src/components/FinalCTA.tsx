import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';

export default function FinalCTA() {
  const { t, lang } = useLanguage();
  const isRTL = lang === 'ar';

  return (
    <section
      data-testid="section-final-cta"
      className="relative overflow-visible py-24 md:py-32"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-100/60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(147,51,234,0.08)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(168,85,247,0.06)_0%,_transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h2
          data-testid="text-finalcta-title"
          className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl"
        >
          {t('finalcta.title')}
        </h2>

        <p
          data-testid="text-finalcta-desc"
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600"
        >
          {t('finalcta.desc')}
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            data-testid="button-finalcta-start"
            className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-500/25 border-purple-700 sm:w-auto"
          >
            {isRTL ? <ArrowRight className="h-4 w-4 rotate-180" /> : null}
            {t('finalcta.btn1')}
            {!isRTL ? <ArrowRight className="h-4 w-4" /> : null}
          </Button>

          <Button
            data-testid="button-finalcta-advisor"
            variant="outline"
            className="w-full border-purple-300 text-purple-700 sm:w-auto"
          >
            <Phone className="h-4 w-4" />
            {t('finalcta.btn2')}
          </Button>

          <Button
            data-testid="button-finalcta-whatsapp"
            variant="outline"
            className="w-full border-purple-300 text-purple-700 sm:w-auto"
          >
            <MessageCircle className="h-4 w-4" />
            {t('finalcta.btn3')}
          </Button>
        </div>
      </div>
    </section>
  );
}
