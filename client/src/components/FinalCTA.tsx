import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MessageCircle, Sparkles } from "lucide-react";

export default function FinalCTA() {
  const { t, lang } = useLanguage();
  const isRTL = lang === "ar";

  return (
    <section
      data-testid="section-final-cta"
      className="relative overflow-visible py-24 md:py-32"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#f4f0fa] via-white to-[rgba(90,24,154,0.06)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(90,24,154,0.08)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(157,78,221,0.06)_0%,_transparent_60%)]" />

      <div
        className="absolute top-10 right-[15%] w-32 h-32 rounded-full opacity-15 float-gentle"
        style={{
          background:
            "radial-gradient(circle, rgba(90,24,154,0.2), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-10 left-[10%] w-24 h-24 rounded-full opacity-10 float-slow"
        style={{
          background:
            "radial-gradient(circle, rgba(157,78,221,0.2), transparent 70%)",
          animationDelay: "2s",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <div className="inline-flex items-center gap-2 mb-6">
          <Sparkles
            className="w-5 h-5 text-[#9d4edd]"
            style={{ animation: "pulseGlow 2s infinite" }}
          />
        </div>

        <h2
          data-testid="text-finalcta-title"
          className="text-3xl font-bold tracking-tight text-[#1a0a2e] sm:text-4xl md:text-5xl"
        >
          {t("finalcta.title")}
        </h2>

        <p
          data-testid="text-finalcta-desc"
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#4a3a62]"
        >
          {t("finalcta.desc")}
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            data-testid="button-finalcta-start"
            className="w-full gradient-bg text-white shadow-lg shadow-[rgba(90,24,154,0.25)] sm:w-auto shimmer"
          >
            {isRTL ? <ArrowRight className="h-4 w-4 rotate-180" /> : null}
            {t("finalcta.btn1")}
            {!isRTL ? <ArrowRight className="h-4 w-4" /> : null}
          </Button>

          <Button
            data-testid="button-finalcta-advisor"
            variant="outline"
            className="w-full border-[rgba(90,24,154,0.2)] text-[#5a189a] hover:border-[rgba(90,24,154,0.4)] sm:w-auto"
          >
            <Phone className="h-4 w-4" />
            {t("finalcta.btn2")}
          </Button>

          <Button
            data-testid="button-finalcta-whatsapp"
            variant="outline"
            className="w-full border-[rgba(90,24,154,0.2)] text-[#5a189a] hover:border-[rgba(90,24,154,0.4)] sm:w-auto"
          >
            <MessageCircle className="h-4 w-4" />
            {t("finalcta.btn3")}
          </Button>
        </div>
      </div>
    </section>
  );
}
