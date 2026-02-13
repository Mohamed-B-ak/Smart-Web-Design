import { useLanguage } from '@/context/LanguageContext';
import { Play, ArrowRight, ArrowLeft } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

export default function Hero() {
  const { lang, t } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-16 overflow-hidden" data-testid="section-hero">
      <AnimatedBackground />

      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.03) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)'
        }}
      />

      <div className="relative z-10 max-w-[820px] mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[rgba(124,92,252,0.12)] border border-[rgba(124,92,252,0.25)] rounded-full text-[13px] font-medium text-[#b4a5fd] mb-7 animate-fade-up backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-[#00d68f]" style={{ animation: 'dot-pulse 2s infinite' }} />
          {t('hero.badge')}
        </div>

        <h1 className="font-['Instrument_Sans',sans-serif] text-[clamp(38px,5.5vw,68px)] font-bold leading-[1.08] tracking-tight mb-5 animate-fade-up animation-delay-100">
          {t('hero.title')}<br />
          {lang === 'en' ? 'From The ' : 'من '}
          <span className="gradient-text">{t('hero.title_span')}</span>
        </h1>

        <p className="text-[clamp(16px,1.8vw,19px)] text-[#5a5a72] max-w-[580px] mx-auto leading-relaxed mb-9 animate-fade-up animation-delay-200">
          {t('hero.subtitle')}
        </p>

        <div className="flex items-center justify-center gap-3.5 mb-12 flex-wrap animate-fade-up animation-delay-300">
          <a href="#demo" className="inline-flex items-center gap-2 px-8 py-3.5 text-[15px] font-semibold text-white gradient-bg glow rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(124,92,252,0.35)] transition-all" data-testid="button-hero-demo">
            <Play className="w-4 h-4 fill-current" />
            {t('hero.cta_demo')}
          </a>
          <a href="#" className="inline-flex items-center gap-2 px-8 py-3.5 text-[15px] font-semibold text-[#1a1a2e] border border-[rgba(0,0,0,0.12)] rounded-full hover:bg-[rgba(0,0,0,0.05)] hover:border-[rgba(0,0,0,0.18)] transition-all backdrop-blur-sm" data-testid="button-hero-sales">
            {t('hero.cta_sales')}
            {lang === 'en' ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
          </a>
        </div>
      </div>

      <div className="relative z-10 max-w-[1060px] w-full mx-auto rounded-3xl overflow-hidden border border-[rgba(124,92,252,0.2)] bg-[rgba(255,255,255,0.9)] backdrop-blur-xl shadow-[0_0_100px_rgba(124,92,252,0.2),0_40px_80px_rgba(0,0,0,0.1)] animate-fade-up animation-delay-500">
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-[#ff6b6b]" />
            <div className="w-3 h-3 rounded-full bg-[#ffa940]" />
            <div className="w-3 h-3 rounded-full bg-[#00d68f]" />
            <span className="text-[12px] text-[#8a8aa0] ml-2 font-mono">sondos-ai-dashboard</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[rgba(124,92,252,0.08)] border border-[rgba(124,92,252,0.15)] rounded-2xl p-5">
              <p className="text-[12px] text-[#8a8aa0] uppercase tracking-wider mb-1">{lang === 'en' ? 'Active Calls' : 'مكالمات نشطة'}</p>
              <p className="text-3xl font-bold text-[#1a1a2e]">1,247</p>
              <p className="text-[13px] text-[#00d68f] mt-1">+12.5%</p>
            </div>
            <div className="bg-[rgba(124,92,252,0.08)] border border-[rgba(124,92,252,0.15)] rounded-2xl p-5">
              <p className="text-[12px] text-[#8a8aa0] uppercase tracking-wider mb-1">{lang === 'en' ? 'Resolution Rate' : 'نسبة الحل'}</p>
              <p className="text-3xl font-bold text-[#1a1a2e]">94.8%</p>
              <p className="text-[13px] text-[#00d68f] mt-1">+3.2%</p>
            </div>
            <div className="bg-[rgba(124,92,252,0.08)] border border-[rgba(124,92,252,0.15)] rounded-2xl p-5">
              <p className="text-[12px] text-[#8a8aa0] uppercase tracking-wider mb-1">{lang === 'en' ? 'Avg Response' : 'متوسط الاستجابة'}</p>
              <p className="text-3xl font-bold text-[#1a1a2e]">0.8s</p>
              <p className="text-[13px] text-[#00d68f] mt-1">-15%</p>
            </div>
          </div>
          <div className="mt-6 flex items-end gap-1 h-[80px]">
            {[40, 58, 35, 72, 50, 85, 68, 60, 88, 45, 78, 70, 92, 100, 55, 75, 62, 90, 48, 82].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm"
                style={{
                  height: `${h}%`,
                  background: `linear-gradient(to top, rgba(124,92,252,0.6), rgba(155,138,251,0.3))`,
                  animation: `wave 1.4s ease-in-out infinite`,
                  animationDelay: `${i * 0.08}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
