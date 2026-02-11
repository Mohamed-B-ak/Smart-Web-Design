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
              className="fi flex items-center gap-4 bg-[#12121c] border border-[rgba(124,92,252,0.08)] rounded-xl p-5 hover:border-[rgba(124,92,252,0.25)] transition-all group"
            >
              <div className="w-11 h-11 rounded-xl bg-[rgba(124,92,252,0.1)] flex items-center justify-center shrink-0 group-hover:bg-[rgba(124,92,252,0.2)] transition-colors">
                <f.icon className="w-5 h-5 text-[#9b8afb]" />
              </div>
              <span className="text-[15px] font-medium">{f.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
