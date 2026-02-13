import { useLanguage } from '@/context/LanguageContext';
import { Phone, MessageCircle, Mail, Share2 } from 'lucide-react';

export default function Omnichannel() {
  const { t } = useLanguage();

  const channels = [
    { icon: Phone, label: t('omni.voice'), color: '#5a189a', pct: 45 },
    { icon: MessageCircle, label: t('omni.chat'), color: '#00d68f', pct: 30 },
    { icon: Mail, label: t('omni.email'), color: '#4facfe', pct: 15 },
    { icon: Share2, label: t('omni.social'), color: '#ffa940', pct: 10 },
  ];

  return (
    <section className="py-24 px-6" data-testid="section-omnichannel">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-16">
          <span className="section-label mb-4 block">{t('omni.label')}</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-5">{t('omni.title')}</h2>
          <p className="text-[#4a3a62] text-lg max-w-[580px] mx-auto">{t('omni.desc')}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {channels.map((ch, i) => (
            <div
              key={i}
              className="fi bg-white border border-[rgba(90,24,154,0.1)] rounded-2xl p-6 text-center hover:border-[rgba(90,24,154,0.25)] hover:shadow-[0_12px_40px_rgba(90,24,154,0.1)] hover:-translate-y-1 transition-all duration-500 group"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: `${ch.color}15` }}
              >
                <ch.icon className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" style={{ color: ch.color }} />
              </div>
              <p className="text-[15px] font-semibold mb-3">{ch.label}</p>
              <div className="w-full bg-[rgba(0,0,0,0.04)] rounded-full h-2">
                <div
                  className="h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${ch.pct}%`, backgroundColor: ch.color }}
                />
              </div>
              <p className="text-[13px] text-[#8878a0] mt-2">{ch.pct}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
