
import AnimatedBackground from "@/sections/AnimatedBackground";
import { useLanguage } from "@/context/LanguageContext";
import { useState, useRef, useEffect } from "react";

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxmEkbxb6szal4KVAnrEnRq7-jUq9BkdrPLsSvN3tJnBzeTNRyn-B4V4Rpjx5_Yxjn5gA/exec";

const TOTAL_PHONE_DIGITS = 9;

export default function Demo() {
  const { t, tList, lang } = useLanguage();

  const industries = tList("demo.industries");
  const isRTL = lang === "ar";

  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

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

  useEffect(() => {
    emailRef.current?.setCustomValidity("");
    phoneRef.current?.setCustomValidity("");
  }, [lang]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // 🔥 NORMALISATION NUMERO SAOUDIEN
      let phone = formData.phone;

      // si user tape 966 au début → on enlève
      if (phone.startsWith("966")) {
        phone = phone.slice(3);
      }

      const formattedData = {
        ...formData,
        phone: `+966${phone}`,
      };

      const params = new URLSearchParams(formattedData as any).toString();

      await fetch(`${APPS_SCRIPT_URL}?${params}`, {
        method: "GET",
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

  const remainingDigits = TOTAL_PHONE_DIGITS - formData.phone.length;

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden bg-[#f6f3fb]"
    >
      <AnimatedBackground />

      <div className="relative z-10 w-full max-w-xl bg-white/80 backdrop-blur-xl border border-[rgba(90,24,154,0.15)] rounded-3xl shadow-[0_40px_80px_rgba(0,0,0,0.08)] p-8">

        {status !== "success" && (
          <>
            <h1 className="text-3xl font-bold text-center mb-2">
              {t("demo.title1")}
            </h1>
            <p className="text-center text-[#6b5c85] mb-8">
              {t("demo.subtitle")}
            </p>
          </>
        )}

        {status === "success" ? (
          <div className="text-center py-12">
            <div className="text-5xl mb-4">✅</div>
            <p className="text-[#5a189a] font-semibold text-lg">
              {t("demo.success")}
            </p>
          </div>
        ) : (
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>

            {/* Name */}
            <div>
              <label className="block text-sm mb-1">
                {t("demo.full_name")}
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                onInvalid={(e) =>
                  e.currentTarget.setCustomValidity(t("validation.required"))
                }
                onInput={(e) => e.currentTarget.setCustomValidity("")}
                placeholder={t("demo.full_name_placeholder")}
                className="w-full border border-[#e5def5] rounded-xl px-4 py-3 outline-none focus:border-[#5a189a]"
              />
            </div>

            {/* Company */}
            <div>
              <label className="block text-sm mb-1">
                {t("demo.company")}
              </label>
              <input
                type="text"
                name="company"
                required
                value={formData.company}
                onChange={handleChange}
                onInvalid={(e) =>
                  e.currentTarget.setCustomValidity(t("validation.required"))
                }
                onInput={(e) => e.currentTarget.setCustomValidity("")}
                placeholder={t("demo.company_placeholder")}
                className="w-full border border-[#e5def5] rounded-xl px-4 py-3 outline-none focus:border-[#5a189a]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm mb-1">{t("demo.email")}</label>
              <input
                ref={emailRef}
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                onInvalid={(e) =>
                  e.currentTarget.setCustomValidity(
                    t("validation.email_invalid"),
                  )
                }
                onInput={(e) => e.currentTarget.setCustomValidity("")}
                placeholder="email@example.com"
                className="w-full border border-[#e5def5] rounded-xl px-4 py-3 outline-none focus:border-[#5a189a]"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm mb-1">{t("demo.phone")}</label>

              <div className="flex">
                <span className="px-3 py-3 border border-r-0 rounded-l-xl bg-gray-100">
                  +966
                </span>

                <input
                  ref={phoneRef}
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => {
                    const val = e.target.value
                      .replace(/\D/g, "")
                      .slice(0, TOTAL_PHONE_DIGITS);
                    setFormData({ ...formData, phone: val });
                  }}
                  pattern={`\\d{${TOTAL_PHONE_DIGITS}}`}
                  placeholder="5XXXXXXXX"
                  className="w-full border border-[#e5def5] rounded-r-xl px-4 py-3 outline-none focus:border-[#5a189a]"
                />
              </div>
            </div>

            {/* Industry */}
            <div>
              <label className="block text-sm mb-1">{t("demo.industry")}</label>
              <select
                name="industry"
                required
                value={formData.industry}
                onChange={handleChange}
                className="w-full border border-[#e5def5] rounded-xl px-4 py-3 outline-none focus:border-[#5a189a]"
              >
                <option value="">
                  — {t("demo.industry_select_placeholder")} —
                </option>
                {industries.map((sector) => (
                  <option key={sector} value={sector}>
                    {sector}
                  </option>
                ))}
              </select>
            </div>

            {/* Questions */}
            <textarea
              name="questions"
              value={formData.questions}
              onChange={handleChange}
              placeholder={t("demo.questions_placeholder")}
              rows={4}
              className="w-full border border-[#e5def5] rounded-xl px-4 py-3 outline-none focus:border-[#5a189a]"
            />

            {status === "error" && (
              <p className="text-red-500 text-sm text-center">
                {t("demo.error")}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-4 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-[#5a189a] to-[#9d4edd]"
            >
              {status === "loading"
                ? t("demo.loading")
                : t("demo.submit")}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
 
