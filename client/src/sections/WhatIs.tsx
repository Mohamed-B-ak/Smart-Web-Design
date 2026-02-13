import { useLanguage } from '@/context/LanguageContext';
import { MessageSquare, GitBranch, BarChart3 } from 'lucide-react';

export default function WhatIs() {
  const { t } = useLanguage();

  const features = [
    { icon: MessageSquare, title: t('whatis.f1_title'), desc: t('whatis.f1_desc') },
    { icon: GitBranch, title: t('whatis.f2_title'), desc: t('whatis.f2_desc') },
    { icon: BarChart3, title: t('whatis.f3_title'), desc: t('whatis.f3_desc') },
  ];

  return (
    <section id="whatis" className="py-24 px-6" data-testid="section-whatis">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-16">
          <span className="section-label mb-4 block">{t('whatis.label')}</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-5">{t('whatis.title')}</h2>
          <p className="text-[#4a3a62] text-lg max-w-[640px] mx-auto">{t('whatis.desc')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="fi bg-white border border-[rgba(90,24,154,0.1)] rounded-2xl p-8 hover:border-[rgba(90,24,154,0.3)] hover:shadow-[0_12px_40px_rgba(90,24,154,0.1)] hover:-translate-y-1 transition-all duration-500 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[rgba(90,24,154,0.12)] flex items-center justify-center mb-5 group-hover:bg-[rgba(90,24,154,0.2)] transition-colors">
                <f.icon className="w-6 h-6 text-[#7b2cbf] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
              <p className="text-[#4a3a62] text-[15px] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
