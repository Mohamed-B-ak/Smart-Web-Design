import { useLanguage } from '@/context/LanguageContext';

const logos = [
  'Microsoft', 'Google', 'Amazon', 'Salesforce', 'HubSpot',
  'Zendesk', 'Twilio', 'Slack', 'Shopify', 'Oracle',
];

export default function LogoCarousel() {
  const { t } = useLanguage();

  return (
    <section className="py-16 overflow-hidden" data-testid="section-logo-carousel">
      <p className="text-center text-[13px] font-medium text-[#8a8aa0] uppercase tracking-widest mb-10">
        {t('logo_carousel.title')}
      </p>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#f8f9fc] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#f8f9fc] to-transparent z-10" />
        <div className="flex animate-scroll-x">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-10 flex items-center justify-center h-12"
            >
              <span className="text-[18px] font-semibold text-[#3a3a4a] tracking-wider whitespace-nowrap">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
