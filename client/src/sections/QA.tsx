import { useLanguage } from '@/context/LanguageContext';
import { Shield, CheckCircle, AlertTriangle, BarChart3 } from 'lucide-react';

export default function QA() {
  const { lang, t } = useLanguage();

  const metrics = [
    { label: lang === 'en' ? 'Calls Analyzed' : 'مكالمات محللة', value: '2.4M', icon: BarChart3 },
    { label: lang === 'en' ? 'Issues Detected' : 'مشاكل مكتشفة', value: '12.3K', icon: AlertTriangle },
    { label: lang === 'en' ? 'Auto-Resolved' : 'محلولة تلقائياً', value: '98.1%', icon: CheckCircle },
  ];

  return (
    <section className="py-24 px-6" data-testid="section-qa">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="fi bg-[#12121c] border border-[rgba(124,92,252,0.15)] rounded-2xl p-7">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-[#9b8afb]" />
              <span className="text-[14px] font-semibold">{lang === 'en' ? 'Quality Monitor' : 'مراقب الجودة'}</span>
            </div>
            <div className="space-y-4">
              {metrics.map((m, i) => (
                <div key={i} className="flex items-center justify-between bg-[rgba(9,9,15,0.5)] rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <m.icon className="w-5 h-5 text-[#6e6e85]" />
                    <span className="text-[14px] text-[#a1a1b5]">{m.label}</span>
                  </div>
                  <span className="text-[16px] font-bold text-white">{m.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-[rgba(0,214,143,0.08)] border border-[rgba(0,214,143,0.2)] rounded-xl p-4 flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-[#00d68f] shrink-0" />
              <p className="text-[13px] text-[#00d68f]">
                {lang === 'en'
                  ? 'All systems operating within quality thresholds'
                  : 'جميع الأنظمة تعمل ضمن حدود الجودة'}
              </p>
            </div>
          </div>

          <div>
            <span className="section-label mb-4 block">{t('qa.label')}</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">{t('qa.title')}</h2>
            <p className="text-[#a1a1b5] text-lg leading-relaxed">{t('qa.desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
