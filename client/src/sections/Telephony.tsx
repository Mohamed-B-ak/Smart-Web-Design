import { useLanguage } from '@/context/LanguageContext';
import { Cloud, Server, Wifi, Radio } from 'lucide-react';

export default function Telephony() {
  const { lang, t } = useLanguage();

  const features = [
    { icon: Cloud, label: lang === 'en' ? 'Cloud-Native Architecture' : 'بنية سحابية أصلية' },
    { icon: Server, label: lang === 'en' ? 'Auto-Scaling Infrastructure' : 'بنية تحتية ذاتية التوسع' },
    { icon: Wifi, label: lang === 'en' ? 'HD Voice Quality' : 'جودة صوت عالية الدقة' },
    { icon: Radio, label: lang === 'en' ? 'Global Coverage' : 'تغطية عالمية' },
  ];

  return (
    <section className="py-24 px-6" data-testid="section-telephony">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="section-label mb-4 block">{t('telephony.label')}</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">{t('telephony.title')}</h2>
            <p className="text-[#a1a1b5] text-lg leading-relaxed mb-8">{t('telephony.desc')}</p>
            <div className="space-y-4">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[rgba(124,92,252,0.1)] flex items-center justify-center shrink-0">
                    <f.icon className="w-5 h-5 text-[#9b8afb]" />
                  </div>
                  <span className="text-[15px] font-medium text-[#d1d1d8]">{f.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="fi bg-[#12121c] border border-[rgba(124,92,252,0.15)] rounded-2xl p-7">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-[#00d68f]" />
              <span className="text-[13px] text-[#6e6e85] font-mono">{lang === 'en' ? 'Network Status: All Systems Operational' : 'حالة الشبكة: جميع الأنظمة تعمل'}</span>
            </div>
            <div className="space-y-3">
              {['US East', 'US West', 'EU Central', 'Middle East', 'Asia Pacific'].map((region, i) => (
                <div key={i} className="flex items-center justify-between bg-[rgba(9,9,15,0.5)] rounded-xl px-4 py-3">
                  <span className="text-[13px] text-[#a1a1b5]">{region}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[13px] text-[#00d68f]">{Math.floor(Math.random() * 5 + 8)}ms</span>
                    <div className="w-2 h-2 rounded-full bg-[#00d68f]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
