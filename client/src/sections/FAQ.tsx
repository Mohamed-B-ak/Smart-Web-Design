import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
  ];

  return (
    <section id="faq" className="py-24 px-6" data-testid="section-faq">
      <div className="max-w-[720px] mx-auto">
        <div className="text-center mb-14">
          <span className="section-label mb-4 block">{t("faq.label")}</span>
          <h2 className="text-3xl md:text-5xl font-bold">{t("faq.title")}</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="fi bg-white border border-[rgba(90,24,154,0.1)] rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
                data-testid={`button-faq-${i}`}
              >
                <span className="text-[15px] font-medium">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#8878a0] shrink-0 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5">
                  <p className="text-[14px] text-[#4a3a62] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
