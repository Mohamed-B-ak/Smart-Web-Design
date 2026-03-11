import AnimatedBackground from "@/sections/AnimatedBackground";
import { useLanguage } from "@/context/LanguageContext";
import { useState, useRef, useEffect } from "react";

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyTTA4r2iPpv9jRKF521S4mn9eIPd-JvNFt6dgY-BjO63pM2h6akBuWwHxYFTJ5dyV3Vg/exec";

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

  // Reset custom validity messages when language changes
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

  const remainingDigits = TOTAL_PHONE_DIGITS - formData.phone.length;

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
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
              {t("demo.success")}
            </p>
          </div>
        ) : (
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            {/* Name & Company — required validation */}
            {[
              {
                label: t("demo.full_name"),
                name: "name",
                type: "text",
                placeholder: t("demo.full_name_placeholder"),
              },
              {
                label: t("demo.company"),
                name: "company",
                type: "text",
                placeholder: t("demo.company_placeholder"),
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
                  onInvalid={(e) =>
                    e.currentTarget.setCustomValidity(t("validation.required"))
                  }
                  onInput={(e) => e.currentTarget.setCustomValidity("")}
                  placeholder={field.placeholder}
                  className="w-full border border-[#e5def5] rounded-xl px-4 py-3 outline-none focus:border-[#5a189a]"
                />
              </div>
            ))}

            {/* Email — custom invalid message */}
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

            {/* Phone — custom invalid message */}
            <div>
              <label className="block text-sm mb-1">{t("demo.phone")}</label>
              <div className="relative flex items-center border border-[#e5def5] rounded-xl overflow-hidden focus-within:border-[#5a189a]">
                <span
                  className={`px-3 py-3 bg-[#f6f3fb] text-[#5a189a] font-semibold text-sm select-none ${
                    isRTL ? "border-l" : "border-r"
                  } border-[#e5def5]`}
                >
                  {t("demo.phone_prefix")}
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
                  onInvalid={(e) =>
                    e.currentTarget.setCustomValidity(
                      t("validation.phone_invalid"),
                    )
                  }
                  onInput={(e) => e.currentTarget.setCustomValidity("")}
                  placeholder={t("demo.phone_placeholder")}
                  maxLength={TOTAL_PHONE_DIGITS}
                  pattern={`\\d{${TOTAL_PHONE_DIGITS}}`}
                  className="flex-1 px-4 py-3 outline-none bg-white text-sm"
                  style={{ direction: "ltr" }}
                />
                {formData.phone.length > 0 && (
                  <span className="px-3 text-sm font-medium">
                    {formData.phone.length === TOTAL_PHONE_DIGITS ? (
                      <span className="text-green-500">✓</span>
                    ) : (
                      <span className="text-red-400">
                        {formData.phone.length}/{TOTAL_PHONE_DIGITS}
                      </span>
                    )}
                  </span>
                )}
              </div>
              {formData.phone.length > 0 &&
                formData.phone.length < TOTAL_PHONE_DIGITS && (
                  <p
                    className={`text-red-400 text-xs mt-1 ${isRTL ? "text-right" : "text-left"}`}
                  >
                    {t("demo.phone_digits_remaining", { n: remainingDigits })}
                  </p>
                )}
            </div>

            {/* Industry Dropdown */}
            <div>
              <label className="block text-sm mb-1">{t("demo.industry")}</label>
              <div className="relative">
                <select
                  name="industry"
                  required
                  value={formData.industry}
                  onChange={handleChange}
                  onInvalid={(e) =>
                    e.currentTarget.setCustomValidity(t("validation.required"))
                  }
                  onInput={(e) => e.currentTarget.setCustomValidity("")}
                  style={{
                    direction: isRTL ? "rtl" : "ltr",
                    color: formData.industry === "" ? "#a89bbf" : "#1a1a1a",
                  }}
                  className="w-full border border-[#e5def5] rounded-xl px-4 py-3 pr-10 outline-none focus:border-[#5a189a] bg-white appearance-none cursor-pointer"
                >
                  <option value="" disabled hidden style={{ color: "#a89bbf" }}>
                    — {t("demo.industry_select_placeholder")} —
                  </option>
                  {industries.map((sector) => (
                    <option
                      key={sector}
                      value={sector}
                      style={{ color: "#1a1a1a" }}
                    >
                      {sector}
                    </option>
                  ))}
                </select>
                <div
                  className={`pointer-events-none absolute inset-y-0 ${
                    isRTL ? "left-4" : "right-4"
                  } flex items-center`}
                >
                  <svg
                    className="w-4 h-4 text-[#9d4edd]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Questions */}
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
                {t("demo.error")}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-4 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-[#5a189a] to-[#9d4edd] hover:opacity-90 transition disabled:opacity-60"
            >
              {status === "loading" ? t("demo.loading") : t("demo.submit")}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
