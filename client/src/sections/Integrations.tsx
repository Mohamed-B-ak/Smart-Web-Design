import { useLanguage } from "@/context/LanguageContext";
import { Link } from "wouter";

const integrations = [
  { name: "Zuora", color: "#FF6B00", logo: "/logos/zuora.png" },
  { name: "Zoom", color: "#2D8CFF", logo: "/logos/zoom.png" },
  { name: "Zoo", color: "#6C5CE7", logo: "/logos/zoo.png" },
  { name: "Zoho Invoice", color: "#C8202B", logo: "/logos/zohoinvoice.png" },
  { name: "Zoho CRM", color: "#C8202B", logo: "/logos/zohocrm.png" },
  { name: "Zoho Books", color: "#C8202B", logo: "/logos/zohobooks.png" },
  { name: "Zendesk", color: "#03363D", logo: "/logos/zendesk.png" },
  { name: "YouTube", color: "#FF0000", logo: "/logos/youtube.png" },
  { name: "Zagomail", color: "#00B894", logo: "/logos/zagomail.png" },
  { name: "ZeroBounce", color: "#34495E", logo: "/logos/zerobounce.png" },
  { name: "WordPress", color: "#21759B", logo: "/logos/wordpress.png" },
  { name: "Xero", color: "#13B5EA", logo: "/logos/xero.png" },
];

export default function Integrations() {
  const { t } = useLanguage();

  const firstTwelve = integrations.slice(0, 12);

  return (
    <section className="py-24 px-6" data-testid="section-integrations">
      <div className="max-w-[1100px] mx-auto text-center">
        <span className="section-label mb-4 block">
          {t("integrations.label")}
        </span>

        <h2 className="font-bold mb-5 leading-tight tracking-tight text-[clamp(2rem,3.5vw,3.5rem)]">
          {t("integrations.title")}
        </h2>

        <p className="text-[#4a3a62] text-lg max-w-[580px] mx-auto mb-14">
          {t("integrations.desc")}
        </p>

        {/* GRID ITEMS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {firstTwelve.map((item) => (
            <div
              key={item.name}
              className="fi flex items-center gap-3 bg-white border border-[rgba(90,24,154,0.08)] rounded-xl p-4 hover:border-[rgba(90,24,154,0.25)] hover:shadow-[0_12px_40px_rgba(90,24,154,0.1)] hover:-translate-y-1 transition-all duration-500"
            >
              {/* LOGO */}
              <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-white border shrink-0">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="w-5 h-5 object-contain"
                />
              </div>

              <span className="text-[14px] font-medium text-[#3a3a52] truncate">
                {item.name}
              </span>
            </div>
          ))}
        </div>

        {/* BOUTON VOIR PLUS */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/integrations"
            className="px-7 py-3 rounded-full bg-gradient-to-r from-[#7b2cbf] to-[#9d4edd] text-white font-medium shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            {t("common.read_more")}
          </Link>
        </div>
      </div>
    </section>
  );
}
