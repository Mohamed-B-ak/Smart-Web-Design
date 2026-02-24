import { useLanguage } from "@/context/LanguageContext";
import { Link } from "wouter";

const integrations = [
  { name: "Salesforce", color: "#00A1E0" },
  { name: "HubSpot", color: "#FF7A59" },
  { name: "Zendesk", color: "#03363D" },
  { name: "Slack", color: "#4A154B" },
  { name: "Microsoft Teams", color: "#6264A7" },
  { name: "Twilio", color: "#F22F46" },
  { name: "Zapier", color: "#FF4F00" },
  { name: "Freshdesk", color: "#25C16F" },
  { name: "Zoho", color: "#C8202B" },
  { name: "Intercom", color: "#6AFDEF" },
  { name: "Jira", color: "#0052CC" },
  { name: "Shopify", color: "#7AB55C" },
];

export default function Integrations() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6" data-testid="section-integrations">
      <div className="max-w-[1100px] mx-auto text-center">
        <span className="section-label mb-4 block">
          {t("integrations.label")}
        </span>

        {/* ✅ Titre fluide */}
        <h2 className="font-bold mb-5 leading-tight tracking-tight text-[clamp(2rem,3.5vw,3.5rem)]">
          {t("integrations.title")}
        </h2>

        <p className="text-[#4a3a62] text-lg max-w-[580px] mx-auto mb-14">
          {t("integrations.desc")}
        </p>

        {/* GRID ITEMS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {integrations.map((item, i) => (
            <div
              key={i}
              className="fi flex items-center gap-3 bg-white border border-[rgba(90,24,154,0.08)] rounded-xl p-4 hover:border-[rgba(90,24,154,0.25)] hover:shadow-[0_12px_40px_rgba(90,24,154,0.1)] hover:-translate-y-1 transition-all duration-500"
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-[13px] font-bold shrink-0"
                style={{ backgroundColor: item.color }}
              >
                {item.name.charAt(0)}
              </div>

              <span className="text-[14px] font-medium text-[#3a3a52] truncate">
                {item.name}
              </span>
            </div>
          ))}
        </div>

        {/* ✅ BOUTON VOIR PLUS — WOUTER */}
        <div className="mt-12 flex justify-center">
          <Link href="/integrations" className="px-7 py-3 rounded-full bg-gradient-to-r from-[#7b2cbf] to-[#9d4edd] text-white font-medium shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
            اقرأ المزيد
          </Link>
        </div>
      </div>
    </section>
  );
}
