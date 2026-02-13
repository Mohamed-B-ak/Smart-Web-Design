import { useLanguage } from '@/context/LanguageContext';

const integrations = [
  { name: 'Salesforce', color: '#00A1E0' },
  { name: 'HubSpot', color: '#FF7A59' },
  { name: 'Zendesk', color: '#03363D' },
  { name: 'Slack', color: '#4A154B' },
  { name: 'Microsoft Teams', color: '#6264A7' },
  { name: 'Twilio', color: '#F22F46' },
  { name: 'Zapier', color: '#FF4F00' },
  { name: 'Freshdesk', color: '#25C16F' },
  { name: 'Zoho', color: '#C8202B' },
  { name: 'Intercom', color: '#6AFDEF' },
  { name: 'Jira', color: '#0052CC' },
  { name: 'Shopify', color: '#7AB55C' },
];

export default function Integrations() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6" data-testid="section-integrations">
      <div className="max-w-[1100px] mx-auto text-center">
        <span className="section-label mb-4 block">{t('integrations.label')}</span>
        <h2 className="text-3xl md:text-5xl font-bold mb-5">{t('integrations.title')}</h2>
        <p className="text-[#5a5a72] text-lg max-w-[580px] mx-auto mb-14">{t('integrations.desc')}</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {integrations.map((item, i) => (
            <div
              key={i}
              className="fi flex items-center gap-3 bg-white border border-[rgba(124,92,252,0.08)] rounded-xl p-4 hover:border-[rgba(124,92,252,0.25)] transition-all"
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-[13px] font-bold shrink-0"
                style={{ backgroundColor: item.color }}
              >
                {item.name.charAt(0)}
              </div>
              <span className="text-[14px] font-medium text-[#3a3a52] truncate">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
