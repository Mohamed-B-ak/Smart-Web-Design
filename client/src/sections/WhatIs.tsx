import { useLanguage } from "@/context/LanguageContext";
import { Brain, Sparkles, BarChart3, Shield, Bot, Zap } from "lucide-react";

export default function WhatIs() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Brain,
      title: t("whatis.f1_title"),
      desc: t("whatis.f1_desc"),
      color: "#7b2cbf",
    },
    {
      icon: Sparkles,
      title: t("whatis.f2_title"),
      desc: t("whatis.f2_desc"),
      color: "#9d4edd",
    },
    {
      icon: BarChart3,
      title: t("whatis.f3_title"),
      desc: t("whatis.f3_desc"),
      color: "#5a189a",
    },

    // ⭐ NOUVELLES CARTES
    {
      icon: Bot,
      title: t("whatis.f4_title"),
      desc: t("whatis.f4_desc"),
      color: "#7b2cbf",
    },
    {
      icon: Shield,
      title: t("whatis.f5_title"),
      desc: t("whatis.f5_desc"),
      color: "#9d4edd",
    },
    {
      icon: Zap,
      title: t("whatis.f6_title"),
      desc: t("whatis.f6_desc"),
      color: "#5a189a",
    },
  ];

  return (
    <section id="whatis" className="py-24 px-6" data-testid="section-whatis">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-16">
          <span className="section-label mb-4 block">{t("whatis.label")}</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-5">
            {t("whatis.title")}
          </h2>
          <p className="text-[#4a3a62] text-lg max-w-[640px] mx-auto">
            {t("whatis.desc")}
          </p>
        </div>

        {/* GRID 6 CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="fi bg-white border border-[rgba(90,24,154,0.1)] rounded-2xl p-8 
                         hover:border-[rgba(90,24,154,0.3)] 
                         hover:shadow-[0_12px_40px_rgba(90,24,154,0.12)] 
                         hover:-translate-y-1 transition-all duration-500 group"
            >
              {/* ICON BLOCK */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5
                           bg-gradient-to-br from-white to-[#f3ecff]
                           shadow-lg shadow-[rgba(90,24,154,0.15)]
                           group-hover:scale-110 
                           group-hover:shadow-[0_12px_45px_rgba(90,24,154,0.25)]
                           transition-all duration-500"
              >
                <f.icon
                  className="w-8 h-8 transition-transform duration-500 group-hover:rotate-6"
                  style={{ color: f.color }}
                />
              </div>

              <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
              <p className="text-[#4a3a62] text-[15px] leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
