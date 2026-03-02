import AnimatedBackground from "@/sections/AnimatedBackground";
import { useLanguage } from "@/context/LanguageContext";
export default function Demo() {
  const { t, lang } = useLanguage();
  return (
    <section
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden bg-[#f6f3fb]"
    >
      {/* Background AI */}
      <AnimatedBackground />

      <div className="relative z-10 w-full max-w-xl bg-white/80 backdrop-blur-xl border border-[rgba(90,24,154,0.15)] rounded-3xl shadow-[0_40px_80px_rgba(0,0,0,0.08)] p-8">
        <h1 className="text-3xl font-bold text-center mb-2">
          {t("demo.title1")}
        </h1>

        <p className="text-center text-[#6b5c85] mb-8">{t("demo.subtitle")}</p>

        {/* ===== FORM ===== */}
        <form className="flex flex-col gap-5">
          <div>
            <label className="block text-sm mb-1">{t("demo.full_name")}</label>
            <input
              type="text"
              required
              placeholder={t("demo.full_name_placeholder")}
              className="w-full border border-[#e5def5] rounded-xl px-4 py-3 outline-none focus:border-[#5a189a]"
            />
          </div>

          <div>
            <label className="block text-sm mb-1"> {t("demo.email")} </label>
            <input
              type="email"
              required
              placeholder="email@example.com"
              className="w-full border border-[#e5def5] rounded-xl px-4 py-3 outline-none focus:border-[#5a189a]"
            />
          </div>

          <div>
            <label className="block text-sm mb-1"> {t("demo.phone")} </label>
            <input
              type="tel"
              required
              placeholder="+216 XX XXX XXX"
              className="w-full border border-[#e5def5] rounded-xl px-4 py-3 outline-none focus:border-[#5a189a]"
            />
          </div>

          <div>
            <label className="block text-sm mb-1"> {t("demo.company")} </label>
            <input
              type="text"
              required
              placeholder={t("demo.company_placeholder")}
              className="w-full border border-[#e5def5] rounded-xl px-4 py-3 outline-none focus:border-[#5a189a]"
            />
          </div>

          <div>
            <label className="block text-sm mb-1"> {t("demo.industry")} </label>
            <input
              type="text"
              required
              placeholder={t("demo.industry_placeholder")}
              className="w-full border border-[#e5def5] rounded-xl px-4 py-3 outline-none focus:border-[#5a189a]"
            />
          </div>

          {/* 🟣 حقل اختياري : استفسارات */}
          <div>
            <label className="block text-sm mb-1"> {t("demo.full_name")}</label>
            <textarea
              placeholder={t("demo.full_name_placeholder")}
              rows={4}
              className="w-full border border-[#e5def5] rounded-xl px-4 py-3 outline-none focus:border-[#5a189a] resize-none"
            />
          </div>

          <button
            type="submit"
            className="mt-4 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-[#5a189a] to-[#9d4edd] hover:opacity-90 transition"
          >
            {t("demo.submit")}
          </button>
        </form>
      </div>
    </section>
  );
}
