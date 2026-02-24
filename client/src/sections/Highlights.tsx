import { useLanguage } from "@/context/LanguageContext";
import { TrendingDown, Clock, Zap, Target } from "lucide-react";

export default function Highlights() {
  const { t } = useLanguage();

  const items = [
    {
      icon: TrendingDown,
      title: t("highlights.h1_title"),
      desc: t("highlights.h1_desc"),
      color: "#00d68f",
    },
    {
      icon: Clock,
      title: t("highlights.h2_title"),
      desc: t("highlights.h2_desc"),
      color: "#4facfe",
    },
    {
      icon: Zap,
      title: t("highlights.h3_title"),
      desc: t("highlights.h3_desc"),
      color: "#ffa940",
    },
    {
      icon: Target,
      title: t("highlights.h4_title"),
      desc: t("highlights.h4_desc"),
      color: "#7b2cbf",
    },
  ];

  return (
    <section
      id="highlights"
      className="py-24 px-6"
      data-testid="section-highlights"
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-16">
          <span className="section-label mb-4 block">
            {t("highlights.label")}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold">
            {t("highlights.title")}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="fi bg-white border border-[rgba(90,24,154,0.1)] rounded-2xl p-7 text-center hover:border-[rgba(90,24,154,0.25)] hover:shadow-[0_12px_40px_rgba(90,24,154,0.1)] hover:-translate-y-1 transition-all duration-500 group"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-colors"
                style={{ backgroundColor: `${item.color}15` }}
              >
                <item.icon
                  className="w-7 h-7 group-hover:scale-110 transition-transform duration-300"
                  style={{ color: item.color }}
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-[14px] text-[#4a3a62] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
