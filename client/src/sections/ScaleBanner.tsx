import { useLanguage } from '@/context/LanguageContext';

export default function ScaleBanner() {
  const { t } = useLanguage();

  const stats = [
    { value: '10M+', label: t('scale.calls') },
    { value: '40+', label: t('scale.languages') },
    { value: '99.9%', label: t('scale.uptime') },
    { value: '98%', label: t('scale.satisfaction') },
  ];

  return (
    <section className="py-20 px-6" data-testid="section-scale-banner">
      <div className="max-w-[1100px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">{t('scale.title')}</h2>
        <p className="text-[#4a3a62] text-lg mb-14">{t('scale.subtitle')}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="fi bg-white border border-[rgba(90,24,154,0.12)] rounded-2xl p-8 hover:shadow-[0_12px_40px_rgba(90,24,154,0.1)] hover:-translate-y-1 transition-all duration-500"
            >
              <p className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.value}</p>
              <p className="text-[14px] text-[#8878a0]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
