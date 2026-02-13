import { useLanguage } from '@/context/LanguageContext';
import { GitBranch, Heart, Globe, Link2, FileText, Brain } from 'lucide-react';

export default function Features() {
  const { t } = useLanguage();

  const features = [
    { icon: GitBranch, label: t('features.f1') },
    { icon: Heart, label: t('features.f2') },
    { icon: Globe, label: t('features.f3') },
    { icon: Link2, label: t('features.f4') },
    { icon: FileText, label: t('features.f5') },
    { icon: Brain, label: t('features.f6') },
  ];

  return (
    <section id="features" className="py-24 px-6" data-testid="section-features">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-16">
          <span className="section-label mb-4 block">{t('features.label')}</span>
          <h2 className="text-3xl md:text-5xl font-bold">{t('features.title')}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              className="fi flex items-center gap-4 bg-white border border-[rgba(90,24,154,0.08)] rounded-xl p-5 hover:border-[rgba(90,24,154,0.25)] hover:shadow-[0_12px_40px_rgba(90,24,154,0.1)] hover:-translate-y-1 transition-all duration-500 group"
            >
              <div className="w-11 h-11 rounded-xl bg-[rgba(90,24,154,0.1)] flex items-center justify-center shrink-0 group-hover:bg-[rgba(90,24,154,0.2)] transition-colors">
                <f.icon className="w-5 h-5 text-[#7b2cbf] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-[15px] font-medium">{f.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
