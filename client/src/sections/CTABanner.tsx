import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function CTABanner() {
  const { lang, t } = useLanguage();

  return (
    <section className="py-24 px-0" data-testid="section-cta">
      <div className="w-full text-center">
        <div className="fi w-full bg-gradient-to-br from-[rgba(90,24,154,0.15)] to-[rgba(123,44,191,0.05)] border border-[rgba(90,24,154,0.2)] rounded-none md:rounded-3xl p-12 md:p-16 relative overflow-hidden">
          {/* Glow background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(90,24,154,0.15),transparent_70%)]" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-5">
              {t("cta.title")}
            </h2>

            <p className="text-[#4a3a62] text-lg max-w-[500px] mx-auto mb-9">
              {t("cta.desc")}
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a
                href="#demo"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-[15px] font-semibold text-white gradient-bg glow rounded-full hover:-translate-y-0.5 transition-all"
                data-testid="button-cta-start"
              >
                {t("cta.button")}
                {lang === "en" ? (
                  <ArrowRight className="w-4 h-4" />
                ) : (
                  <ArrowLeft className="w-4 h-4" />
                )}
              </a>

              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-[15px] font-semibold text-[#1a0a2e] border border-[rgba(90,24,154,0.12)] rounded-full hover:bg-[rgba(90,24,154,0.05)] transition-all"
                data-testid="button-cta-demo"
              >
                {t("cta.demo")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
