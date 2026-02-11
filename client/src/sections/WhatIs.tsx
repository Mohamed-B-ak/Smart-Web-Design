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
          <p className="text-[#a1a1b5] text-lg max-w-[640px] mx-auto">{t('whatis.desc')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="fi bg-[#12121c] border border-[rgba(124,92,252,0.1)] rounded-2xl p-8 hover:border-[rgba(124,92,252,0.3)] transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[rgba(124,92,252,0.12)] flex items-center justify-center mb-5 group-hover:bg-[rgba(124,92,252,0.2)] transition-colors">
                <f.icon className="w-6 h-6 text-[#9b8afb]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
              <p className="text-[#a1a1b5] text-[15px] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
