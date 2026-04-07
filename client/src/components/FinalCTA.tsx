import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  const { t, lang } = useLanguage();
  const isRTL = lang === 'ar';

  return (
    <section className="py-16 px-6 bg-primary text-white text-center">
      <div className="max-w-2xl mx-auto">

        {/* Title */}
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          {t('finalcta.title')}
        </h2>

        {/* Description */}
        <p className="text-white/80 mb-6 text-base md:text-lg">
          {t('finalcta.desc')}
        </p>

        {/* CTA */}
        <div className="flex justify-center">
          <Button className="bg-white text-primary px-6 py-3 rounded-full font-semibold">
            {isRTL ? <ArrowRight className="ml-2 rotate-180 w-4 h-4" /> : null}
            {t('finalcta.button')}
            {!isRTL ? <ArrowRight className="ml-2 w-4 h-4" /> : null}
          </Button>
        </div>

      </div>
    </section>
  );
}