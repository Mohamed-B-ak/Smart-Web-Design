import { useLanguage } from "@/context/LanguageContext";
import { Phone, ArrowRight, ArrowLeft, Sparkles } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";
import { useState } from "react";
import AgentsModal from "@/components/AgentsModal";

export default function Hero() {
  const { lang, t } = useLanguage();
  const [openAgents, setOpenAgents] = useState(false);

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-16 overflow-hidden"
      data-testid="section-hero"
    >
      <AnimatedBackground />

      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(90,24,154,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(90,24,154,.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse at center, black 20%, transparent 65%)",
        }}
      />

      {/* FLOATING BLOBS */}
      <div
        className="absolute top-20 left-[10%] w-32 h-32 rounded-full opacity-20 float-gentle"
        style={{
          background:
            "radial-gradient(circle, rgba(90,24,154,0.3), transparent 70%)",
        }}
      />
      <div
        className="absolute top-40 right-[15%] w-24 h-24 rounded-full opacity-15 float-slow"
        style={{
          background:
            "radial-gradient(circle, rgba(157,78,221,0.3), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-32 left-[20%] w-20 h-20 rounded-full opacity-10 float-gentle"
        style={{
          background:
            "radial-gradient(circle, rgba(123,44,191,0.4), transparent 70%)",
        }}
      />

      {/* HERO CONTENT */}
      <div className="relative z-10 max-w-[820px] mx-auto">
        <div className="inline-flex items-center gap-2 px-5 py-2 bg-[rgba(90,24,154,0.08)] border border-[rgba(90,24,154,0.2)] rounded-full text-[13px] font-medium text-[#9d4edd] mb-7 animate-fade-up backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span className="w-2 h-2 rounded-full bg-[#00d68f]" />
          {t("hero.badge")}
        </div>

        <h1 className="font-['Instrument_Sans',sans-serif] text-[clamp(38px,5.5vw,68px)] font-bold leading-[1.08] tracking-tight mb-3 animate-fade-up animation-delay-100">
          {t("hero.title_new")}
        </h1>

        <p className="text-[clamp(16px,1.8vw,19px)] font-semibold text-[#1a0a2e] max-w-[580px] mx-auto leading-relaxed mb-4 animate-fade-up animation-delay-150">
          {t("hero.subtitle_new")}
        </p>

        <p className="text-[clamp(14px,1.6vw,17px)] text-[#4a3a62] max-w-[680px] mx-auto leading-relaxed mb-9 animate-fade-up animation-delay-200">
          {t("hero.desc")}
        </p>

        {/* BUTTONS */}
        <div className="flex items-center justify-center gap-3.5 mb-12 flex-wrap animate-fade-up animation-delay-300">
          {/* BOUTON VIOLET → POPUP AGENTS */}
          <button
            onClick={() => setOpenAgents(true)}
            className="group inline-flex items-center gap-2 px-8 py-3.5 text-[15px] font-semibold text-white gradient-bg glow rounded-full hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(90,24,154,0.4)] transition-all duration-300 shimmer"
            data-testid="button-hero-try"
          >
            <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            {t("hero.cta_try")}
          </button>

          {/* BOUTON PAGE FORMULAIRE */}
          <a
            href="/demo"
            className="group inline-flex items-center gap-2 px-8 py-3.5 text-[15px] font-semibold text-[#1a0a2e] border border-[rgba(90,24,154,0.15)] rounded-full hover:bg-[rgba(90,24,154,0.05)] hover:border-[rgba(90,24,154,0.3)] transition-all duration-300 backdrop-blur-sm"
            data-testid="button-hero-book"
          >
            {t("hero.cta_book")}
            {lang === "en" ? (
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            ) : (
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            )}
          </a>
        </div>
      </div>

      {/* DASHBOARD CARD */}
      <div className="relative z-10 max-w-[1060px] w-full mx-auto rounded-3xl overflow-hidden border border-[rgba(90,24,154,0.15)] bg-[rgba(255,255,255,0.85)] backdrop-blur-xl shadow-[0_0_100px_rgba(90,24,154,0.15),0_40px_80px_rgba(0,0,0,0.08)] animate-fade-up animation-delay-500 ai-glow">
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-[#ff6b6b]" />
            <div className="w-3 h-3 rounded-full bg-[#ffa940]" />
            <div className="w-3 h-3 rounded-full bg-[#00d68f]" />
            <span className="text-[12px] text-[#8878a0] ml-2 font-mono">
              sondos-ai-dashboard
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[rgba(90,24,154,0.06)] border border-[rgba(90,24,154,0.1)] rounded-2xl p-5">
              <p className="text-[12px] text-[#8878a0] uppercase tracking-wider mb-1">
                {lang === "en" ? "Active Calls" : "مكالمات نشطة"}
              </p>
              <p className="text-3xl font-bold text-[#1a0a2e]">1,247</p>
              <p className="text-[13px] text-[#00d68f] mt-1">+12.5%</p>
            </div>

            <div className="bg-[rgba(90,24,154,0.06)] border border-[rgba(90,24,154,0.1)] rounded-2xl p-5">
              <p className="text-[12px] text-[#8878a0] uppercase tracking-wider mb-1">
                {lang === "en" ? "Resolution Rate" : "نسبة الحل"}
              </p>
              <p className="text-3xl font-bold text-[#1a0a2e]">94.8%</p>
              <p className="text-[13px] text-[#00d68f] mt-1">+3.2%</p>
            </div>

            <div className="bg-[rgba(90,24,154,0.06)] border border-[rgba(90,24,154,0.1)] rounded-2xl p-5">
              <p className="text-[12px] text-[#8878a0] uppercase tracking-wider mb-1">
                {lang === "en" ? "Avg Response" : "متوسط الاستجابة"}
              </p>
              <p className="text-3xl font-bold text-[#1a0a2e]">0.8s</p>
              <p className="text-[13px] text-[#00d68f] mt-1">-15%</p>
            </div>
          </div>

          <div className="mt-6 flex items-end gap-1 h-[80px]">
            {[
              40, 58, 35, 72, 50, 85, 68, 60, 88, 45, 78, 70, 92, 100, 55, 75,
              62, 90, 48, 82,
            ].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm"
                style={{
                  height: `${h}%`,
                  background: `linear-gradient(to top, rgba(90,24,154,0.6), rgba(157,78,221,0.25))`,
                  animation: `wave 1.4s ease-in-out infinite`,
                  animationDelay: `${i * 0.08}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* MODAL AGENTS */}
      <AgentsModal open={openAgents} onClose={() => setOpenAgents(false)} />
    </section>
  );
}
