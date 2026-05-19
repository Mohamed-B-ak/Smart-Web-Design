import { useLanguage } from "@/context/LanguageContext";
import { useState, useRef, useEffect } from "react";

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxll13flS5kZ7Pojjf9_x6PEXu4ISbrBFzYI0D9p7G2xvzvnOqLtwh4rPwBdeBgG9B8mg/exec";
const PURPLE = "#672D92";
const PURPLE_RGB = "103,45,146";
const purpleBg = (a: number) => `rgba(${PURPLE_RGB},${a})`;
const purpleBorder = (a: number) => `rgba(${PURPLE_RGB},${a})`;
const purpleGradient = `linear-gradient(135deg, ${PURPLE}, #7f47ac)`;

const TOTAL_DIGITS = 9;

const isValidSaudiNumber = (phone: string): boolean => {
  if (/^5\d{8}$/.test(phone)) return true;
  if (/^1[1-7]\d{7}$/.test(phone)) return true;
  return false;
};

const getHint = (phone: string, isRTL: boolean): string => {
  if (phone.length === 0) return "";
  const rem = TOTAL_DIGITS - phone.length;

  if (phone.startsWith("5") || /^1[1-7]/.test(phone)) {
    return rem > 0
      ? `${rem} ${isRTL ? "أرقام متبقية" : "digits remaining"}`
      : "";
  }
  return isRTL
    ? "يجب أن يبدأ الرقم بـ 5 (جوال) أو 11-17 (أرضي)"
    : "Number must start with 5 (mobile) or 11–17 (landline)";
};

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

  const [phoneError, setPhoneError] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    emailRef.current?.setCustomValidity("");
    phoneRef.current?.setCustomValidity("");
    setPhoneError("");
  }, [lang]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, "");
    const val = raw.slice(0, TOTAL_DIGITS);
    setFormData({ ...formData, phone: val });

    if (val.length > 0 && !isValidSaudiNumber(val)) {
      const msg = isRTL
        ? "رقم غير صالح: يجب أن يبدأ بـ 5 (جوال) أو 11-17 (أرضي)"
        : "Invalid number: must start with 5 (mobile) or 11–17 (landline)";
      phoneRef.current?.setCustomValidity(msg);
      if (val.length >= TOTAL_DIGITS) setPhoneError(msg);
      else setPhoneError("");
    } else {
      phoneRef.current?.setCustomValidity("");
      setPhoneError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Vérification du numéro de téléphone (gardée)
    if (!isValidSaudiNumber(formData.phone)) {
      const msg = isRTL
        ? "يرجى إدخال رقم سعودي صالح"
        : "Please enter a valid Saudi number";
      setPhoneError(msg);
      phoneRef.current?.setCustomValidity(msg);
      phoneRef.current?.reportValidity();
      return;
    }

    setStatus("loading");

    try {
      const formattedData = {
        ...formData,
        phone: `+966${formData.phone}`,
      };

      const params = new URLSearchParams(formattedData as any).toString();
      await fetch(`${APPS_SCRIPT_URL}?${params}`, { method: "GET" });

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", company: "", industry: "", questions: "" });
      setPhoneError("");
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full border rounded-xl px-4 py-3 outline-none transition-all duration-200";

  const hint = getHint(formData.phone, isRTL);
  const isPhoneComplete = isValidSaudiNumber(formData.phone);

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden bg-[var(--bg)]"
    >
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${purpleBg(0.15)} 0%, transparent 70%)` }} />
      <div className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(${purpleBg(0.04)} 1px, transparent 1px), linear-gradient(90deg, ${purpleBg(0.04)} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 20%, transparent 65%)",
        }} />
      <div className="absolute top-20 left-[10%] w-32 h-32 rounded-full opacity-20 float-gentle pointer-events-none"
        style={{ background: `radial-gradient(circle, ${purpleBg(0.3)}, transparent 70%)` }} />
      <div className="absolute top-40 right-[15%] w-24 h-24 rounded-full opacity-15 float-slow pointer-events-none"
        style={{ background: `radial-gradient(circle, ${purpleBg(0.3)}, transparent 70%)` }} />
      <div className="absolute bottom-32 left-[20%] w-20 h-20 rounded-full opacity-10 float-gentle pointer-events-none"
        style={{ background: `radial-gradient(circle, ${purpleBg(0.4)}, transparent 70%)` }} />

      <div className="relative z-10 w-full max-w-xl rounded-3xl p-8 backdrop-blur-xl border"
        style={{ background: "rgba(255,255,255,0.85)", borderColor: purpleBorder(0.15), boxShadow: `0 0 60px ${purpleBg(0.1)}` }}>

        {status !== "success" && (
          <>
            <div className="flex justify-center mb-5">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[13px] font-medium backdrop-blur-sm"
                style={{ background: purpleBg(0.08), border: `1px solid ${purpleBorder(0.2)}`, color: PURPLE }}>
                <span className="w-2 h-2 rounded-full" style={{ background: "#00d68f" }} />
                {t("demo.subtitle")}
              </span>
            </div>
            <h1 className="text-3xl font-bold text-center mb-2" style={{ color: PURPLE }}>
              {t("demo.title1")}
            </h1>
          </>
        )}

        {status === "success" ? (
          <div className="text-center py-12">
            <div className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center text-4xl text-white shadow-lg"
              style={{ background: purpleGradient }}>✅</div>
            <p className="text-lg font-semibold" style={{ color: PURPLE }}>{t("demo.success")}</p>
          </div>
        ) : (
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>

            {/* Name */}
            <div>
              <label className="block text-sm mb-1 font-medium text-[var(--t1)]">{t("demo.full_name")}</label>
              <input type="text" name="name" required value={formData.name} onChange={handleChange}
                onInvalid={(e) => e.currentTarget.setCustomValidity(t("validation.required"))}
                onInput={(e) => e.currentTarget.setCustomValidity("")}
                placeholder={t("demo.full_name_placeholder")} className={inputClass}
                style={{ borderColor: purpleBorder(0.15) }}
                onFocus={(e) => { (e.target as HTMLElement).style.borderColor = PURPLE; }}
                onBlur={(e) => { (e.target as HTMLElement).style.borderColor = purpleBorder(0.15); }} />
            </div>

            {/* Company */}
            <div>
              <label className="block text-sm mb-1 font-medium text-[var(--t1)]">{t("demo.company")}</label>
              <input type="text" name="company" required value={formData.company} onChange={handleChange}
                onInvalid={(e) => e.currentTarget.setCustomValidity(t("validation.required"))}
                onInput={(e) => e.currentTarget.setCustomValidity("")}
                placeholder={t("demo.company_placeholder")} className={inputClass}
                style={{ borderColor: purpleBorder(0.15) }}
                onFocus={(e) => { (e.target as HTMLElement).style.borderColor = PURPLE; }}
                onBlur={(e) => { (e.target as HTMLElement).style.borderColor = purpleBorder(0.15); }} />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm mb-1 font-medium text-[var(--t1)]">{t("demo.email")}</label>
              <input ref={emailRef} type="email" name="email" required value={formData.email} onChange={handleChange}
                onInvalid={(e) => e.currentTarget.setCustomValidity(t("validation.email_invalid"))}
                onInput={(e) => e.currentTarget.setCustomValidity("")}
                placeholder="email@example.com" className={inputClass}
                style={{ borderColor: purpleBorder(0.15) }}
                onFocus={(e) => { (e.target as HTMLElement).style.borderColor = PURPLE; }}
                onBlur={(e) => { (e.target as HTMLElement).style.borderColor = purpleBorder(0.15); }} />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm mb-1 font-medium text-[var(--t1)]">{t("demo.phone")}</label>
              <div className="flex">
                <span className="px-4 py-3 rounded-l-xl text-sm font-medium text-[var(--t2)]"
                  style={{ background: purpleBg(0.06), border: `1px solid ${purpleBorder(0.15)}`, borderRight: "none" }}>
                  +966
                </span>
                <input
                  ref={phoneRef}
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  onInvalid={(e) => {
                    if (!isValidSaudiNumber(formData.phone)) {
                      e.currentTarget.setCustomValidity(
                        isRTL ? "يرجى إدخال رقم سعودي صالح" : "Please enter a valid Saudi number"
                      );
                    }
                  }}
                  onBlur={() => {
                    if (formData.phone.length > 0 && !isValidSaudiNumber(formData.phone)) {
                      setPhoneError(isRTL
                        ? "رقم غير صالح: يجب أن يبدأ بـ 5 (جوال) أو 11-17 (أرضي)"
                        : "Invalid: must start with 5 (mobile) or 11–17 (landline)");
                    }
                  }}
                  placeholder=""
                  className={`${inputClass} rounded-l-none`}
                  style={{
                    borderColor: phoneError
                      ? "#ef4444"
                      : isPhoneComplete
                        ? "#22c55e"
                        : purpleBorder(0.15),
                  }}
                  onFocus={(e) => {
                    if (!phoneError && !isPhoneComplete)
                      (e.target as HTMLElement).style.borderColor = PURPLE;
                  }}
                />
              </div>

              {phoneError ? (
                <p className="text-xs mt-1 text-red-500">{phoneError}</p>
              ) : hint ? (
                <p className="text-xs mt-1 text-[var(--t3)]">{hint}</p>
              ) : isPhoneComplete ? (
                <p className="text-xs mt-1 text-green-500">
                  {isRTL ? "✓ رقم صالح" : "✓ Valid number"}
                </p>
              ) : null}
            </div>

            {/* Industry */}
            <div>
              <label className="block text-sm mb-1 font-medium text-[var(--t1)]">{t("demo.industry")}</label>
              <select name="industry" required value={formData.industry} onChange={handleChange}
                className={inputClass} style={{ borderColor: purpleBorder(0.15) }}
                onFocus={(e) => { (e.target as HTMLElement).style.borderColor = PURPLE; }}
                onBlur={(e) => { (e.target as HTMLElement).style.borderColor = purpleBorder(0.15); }}>
                <option value="">— {t("demo.industry_select_placeholder")} —</option>
                {industries.map((sector) => (
                  <option key={sector} value={sector}>{sector}</option>
                ))}
              </select>
            </div>

            {/* Questions */}
            <div>
              <label className="block text-sm mb-1 font-medium text-[var(--t1)]">{t("demo.questions_placeholder")}</label>
              <textarea name="questions" value={formData.questions} onChange={handleChange}
                placeholder={t("demo.questions_placeholder")} rows={4} className={inputClass}
                style={{ borderColor: purpleBorder(0.15) }}
                onFocus={(e) => { (e.target as HTMLElement).style.borderColor = PURPLE; }}
                onBlur={(e) => { (e.target as HTMLElement).style.borderColor = purpleBorder(0.15); }} />
            </div>

            {status === "error" && (
              <p className="text-red-500 text-sm text-center">{t("demo.error")}</p>
            )}

            <button type="submit" disabled={status === "loading"}
              className="mt-4 py-3.5 rounded-xl text-white font-semibold text-[15px] transition-all duration-300 hover:-translate-y-1 disabled:opacity-60 disabled:hover:translate-y-0"
              style={{ background: purpleGradient, boxShadow: `0 4px 20px ${purpleBg(0.35)}` }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 40px ${purpleBg(0.45)}`; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 20px ${purpleBg(0.35)}`; }}>
              {status === "loading" ? t("demo.loading") : t("demo.submit")}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}