import { useLanguage } from '@/context/LanguageContext';
import { Lock, ShieldCheck, FileCheck, Award } from 'lucide-react';

export default function Security() {
  const { t } = useLanguage();

  const certs = [
    { icon: Lock, label: t('security.f1') },
    { icon: ShieldCheck, label: t('security.f2') },
    { icon: FileCheck, label: t('security.f3') },
    { icon: Award, label: t('security.f4') },
  ];

  return (
    <section className="py-24 px-6" data-testid="section-security">
      <div className="max-w-[1100px] mx-auto text-center">
        <span className="section-label mb-4 block">{t('security.label')}</span>
        <h2 className="text-3xl md:text-5xl font-bold mb-5">{t('security.title')}</h2>
        <p className="text-[#a1a1b5] text-lg max-w-[580px] mx-auto mb-14">{t('security.desc')}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certs.map((c, i) => (
            <div
              key={i}
              className="fi bg-[#12121c] border border-[rgba(124,92,252,0.1)] rounded-2xl p-7 hover:border-[rgba(124,92,252,0.25)] transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-[rgba(124,92,252,0.1)] flex items-center justify-center mx-auto mb-4">
                <c.icon className="w-7 h-7 text-[#9b8afb]" />
              </div>
              <p className="text-[15px] font-medium">{c.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
