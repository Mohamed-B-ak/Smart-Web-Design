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
        <p className="text-[#4a3a62] text-lg max-w-[580px] mx-auto mb-14">{t('security.desc')}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certs.map((c, i) => (
            <div
              key={i}
              className="fi bg-white border border-[rgba(90,24,154,0.1)] rounded-2xl p-7 hover:border-[rgba(90,24,154,0.25)] hover:shadow-[0_12px_40px_rgba(90,24,154,0.1)] hover:-translate-y-1 transition-all duration-500 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[rgba(90,24,154,0.1)] flex items-center justify-center mx-auto mb-4">
                <c.icon className="w-7 h-7 text-[#7b2cbf] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="text-[15px] font-medium">{c.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
