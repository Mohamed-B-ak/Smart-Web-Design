import { useLanguage } from "@/context/LanguageContext";

const logos = [
  "YouTube",
  "WordPress",
  "WhatsApp Business",
  "Salesforce",
  "HubSpot",
  "Zendesk",
  "Twilio",
  "Slack",
  "Shopify",
  "OpenAI",
];

export default function LogoCarousel() {
  const { t } = useLanguage();

  return (
    <section className="py-16 overflow-hidden">
      <p className="text-center text-[13px] font-medium text-[#8878a0] uppercase tracking-widest mb-10">
        {t("logo_carousel.title")}
      </p>

      <div className="marquee-wrapper">
        {/* fade edges */}
        <div className="marquee-fade left" />
        <div className="marquee-fade right" />

        {/* TRACK 1 */}
        <div className="marquee-track">
          {logos.map((logo, i) => (
            <span key={i} className="marquee-item">
              {logo}
            </span>
          ))}
        </div>

        {/* TRACK 2 (clone parfait) */}
        <div className="marquee-track marquee-track-2">
          {logos.map((logo, i) => (
            <span key={i} className="marquee-item">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
