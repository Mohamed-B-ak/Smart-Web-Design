import AnimatedBackground from "@/sections/AnimatedBackground";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyNHoO38qOg94SmkCZ4GCxGbls8yHj4Q5HBUzESeyWeQnG8IyUCzaD19tSdgtOh92GT7g/exec";

export default function Demo() {
  const { t, lang } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    questions: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const params = new URLSearchParams(formData as any).toString();
      await fetch(`${APPS_SCRIPT_URL}?${params}`, {
        method: "GET",
        mode: "no-cors",
      });
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        industry: "",
        questions: "",
      });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden bg-[#f6f3fb]"
    >
      <AnimatedBackground />
      <div className="relative z-10 w-full max-w-xl bg-white/80 backdrop-blur-xl border border-[rgba(90,24,154,0.15)] rounded-3xl shadow-[0_40px_80px_rgba(0,0,0,0.08)] p-8">
        <h1 className="text-3xl font-bold text-center mb-2">
          {t("demo.title1")}
        </h1>
        <p className="text-center text-[#6b5c85] mb-8">{t("demo.subtitle")}</p>

        {status === "success" ? (
          <div className="text-center py-12">
            <div className="text-5xl mb-4">✅</div>
            <p className="text-[#5a189a] font-semibold text-lg">
              تم إرسال طلبك بنجاح!
            </p>
          </div>
        ) : (
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            {[
              {
                label: t("demo.full_name"),
                name: "name",
                type: "text",
                placeholder: t("demo.full_name_placeholder"),
              },
              {
                label: t("demo.email"),
                name: "email",
                type: "email",
                placeholder: "email@example.com",
              },
              {
                label: t("demo.phone"),
                name: "phone",
                type: "tel",
                placeholder: "+966 XX XXX XXX",
              },
              {
                label: t("demo.company"),
                name: "company",
                type: "text",
                placeholder: t("demo.company_placeholder"),
              },
              {
                label: t("demo.industry"),
                name: "industry",
                type: "text",
                placeholder: t("demo.industry_placeholder"),
              },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-sm mb-1">{field.label}</label>
                <input
                  type={field.type}
                  name={field.name}
                  required
                  value={(formData as any)[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="w-full border border-[#e5def5] rounded-xl px-4 py-3 outline-none focus:border-[#5a189a]"
                />
              </div>
            ))}

            <div>
              <label className="block text-sm mb-1">
                {t("demo.questions")}
              </label>
              <textarea
                name="questions"
                value={formData.questions}
                onChange={handleChange}
                placeholder={t("demo.questions_placeholder")}
                rows={4}
                className="w-full border border-[#e5def5] rounded-xl px-4 py-3 outline-none focus:border-[#5a189a] resize-none"
              />
            </div>

            {status === "error" && (
              <p className="text-red-500 text-sm text-center">
                ❌ Une erreur est survenue. Réessaie.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-4 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-[#5a189a] to-[#9d4edd] hover:opacity-90 transition disabled:opacity-60"
            >
              {status === "loading" ? "⏳ جاري الإرسال..." : t("demo.submit")}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
