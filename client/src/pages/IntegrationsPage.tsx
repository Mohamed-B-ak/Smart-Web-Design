import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";

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
  { name: "Wootric", color: "#7D3C98", logo: "/logos/wootric.png" },
  { name: "Whatsable", color: "#25D366", logo: "/logos/whatsable.png" },
  {
    name: "WhatsApp Business",
    color: "#25D366",
    logo: "/logos/whatsappbusiness.png",
  },
  { name: "WooCommerce", color: "#96588A", logo: "/logos/woocommerce.png" },
  { name: "Wedof", color: "#F39C12", logo: "/logos/wedof.svg" },
  { name: "Webling", color: "#16A085", logo: "/logos/webling.png" },
  { name: "Webhook", color: "#2C3E50", logo: "/logos/webhook.svg" },
  { name: "Webflow", color: "#4353FF", logo: "/logos/webflow.png" },
  { name: "Vtiger", color: "#F39C12", logo: "/logos/vtiger.png" },
  { name: "Wachat", color: "#27AE60", logo: "/logos/wachat.png" },
  { name: "Utility AI", color: "#8E44AD", logo: "/logos/utilityai.svg" },
  { name: "Village", color: "#1ABC9C", logo: "/logos/village.png" },
  { name: "VBOUT", color: "#E67E22", logo: "/logos/vbout.png" },
  { name: "User Input", color: "#2C3E50", logo: "/logos/userinput.png" },
  { name: "Upgrade.chat", color: "#5865F2", logo: "/logos/upgradechat.png" },
  { name: "Typeform", color: "#262627", logo: "/logos/typeform.png" },
  { name: "Twitter", color: "#1DA1F2", logo: "/logos/twitter.png" },
  { name: "Twin Web Agent", color: "#6C5CE7", logo: "/logos/twinwebagent.png" },
  { name: "Trello", color: "#0079BF", logo: "/logos/trello.png" },
  { name: "TrueLayer", color: "#111827", logo: "/logos/truelayer.png" },
  { name: "Twilio", color: "#F22F46", logo: "/logos/twilio.png" },
  { name: "TidyCal", color: "#2563EB", logo: "/logos/tidycal.png" },
  { name: "Todoist", color: "#E44332", logo: "/logos/todoist.svg" },
  { name: "TickTick", color: "#4772FA", logo: "/logos/ticktick.svg" },
  { name: "Telegram Bot", color: "#0088CC", logo: "/logos/telegrambot.svg" },
  { name: "Tally", color: "#6B46C1", logo: "/logos/tally.svg" },
  { name: "Taskade", color: "#4F46E5", logo: "/logos/taskade.svg" },
  { name: "Text Helper", color: "#2C3E50", logo: "/logos/texthelper.svg" },
  { name: "Tags", color: "#34495E", logo: "/logos/tags.svg" },
  { name: "SurveyMonkey", color: "#00BF6F", logo: "/logos/surveymonkey.svg" },
  { name: "Talkable", color: "#9B59B6", logo: "/logos/talkable.svg" },
  { name: "Straico", color: "#6C5CE7", logo: "/logos/straico.svg" },
  { name: "Stripe", color: "#635BFF", logo: "/logos/stripe.svg" },
  { name: "Supabase", color: "#3ECF8E", logo: "/logos/supabase.svg" },
  { name: "Storage", color: "#2C3E50", logo: "/logos/storage.svg" },
  {
    name: "Stable Diffusion Web UI",
    color: "#000000",
    logo: "/logos/stablediffusion.svg",
  },
  { name: "Stability AI", color: "#111827", logo: "/logos/stabilityai.svg" },
  { name: "Square", color: "#28C101", logo: "/logos/square.svg" },
  { name: "Sperse", color: "#E74C3C", logo: "/logos/sperse.svg" },
  { name: "SOAP", color: "#7F8C8D", logo: "/logos/soap.svg" },
  { name: "Spotify", color: "#1DB954", logo: "/logos/spotify.svg" },
  { name: "SMTP", color: "#34495E", logo: "/logos/smtp.svg" },
  { name: "Slack", color: "#4A154B", logo: "/logos/slack.svg" },
  { name: "Smaily", color: "#F4D03F", logo: "/logos/smaily.svg" },
  { name: "Snowflake", color: "#29B5E8", logo: "/logos/snowflake.svg" },
  { name: "SimplePDF", color: "#E74C3C", logo: "/logos/simplepdf.svg" },
  { name: "Shopify", color: "#7AB55C", logo: "/logos/shopify.svg" },
  { name: "SFTP", color: "#2C3E50", logo: "/logos/sftp.svg" },
  { name: "SendGrid", color: "#00A7E1", logo: "/logos/sendgrid.svg" },
  { name: "SendFox", color: "#F97316", logo: "/logos/sendfox.svg" },
  { name: "Sendy", color: "#3498DB", logo: "/logos/sendy.svg" },
  { name: "Sessions.us", color: "#2563EB", logo: "/logos/sessionsus.svg" },
  { name: "Segment", color: "#1F2937", logo: "/logos/segment.svg" },
  { name: "Salsa", color: "#E74C3C", logo: "/logos/salsa.svg" },
  { name: "Schedule", color: "#2C3E50", logo: "/logos/schedule.svg" },
  { name: "RSS Feed", color: "#F26522", logo: "/logos/rssfeed.svg" },
  { name: "Robolly", color: "#E67E22", logo: "/logos/robolly.svg" },
  { name: "Retable", color: "#16A085", logo: "/logos/retable.svg" },
  { name: "Resend", color: "#111827", logo: "/logos/resend.svg" },
  {
    name: "Reoon Email Verifier",
    color: "#34495E",
    logo: "/logos/reoonemailverifier.svg",
  },
  { name: "Reachinbox", color: "#8E44AD", logo: "/logos/reachinbox.svg" },
  { name: "Razorpay", color: "#0C2451", logo: "/logos/razorpay.svg" },
  { name: "Quickzu", color: "#27AE60", logo: "/logos/quickzu.svg" },
  { name: "RabbitMQ", color: "#FF6600", logo: "/logos/rabbitmq.svg" },
  { name: "re:tune", color: "#6C5CE7", logo: "/logos/retune.svg" },
  { name: "Qdrant", color: "#DC2626", logo: "/logos/qdrant.svg" },
  { name: "Pushover", color: "#E74C3C", logo: "/logos/pushover.svg" },
  { name: "Postgres", color: "#336791", logo: "/logos/postgres.svg" },
  { name: "Pipedrive", color: "#1A1A1A", logo: "/logos/pipedrive.svg" },
  { name: "PostHog", color: "#F54E00", logo: "/logos/posthog.svg" },
  { name: "OpenAI", color: "#10A37F", logo: "/logos/openai.svg" },
  { name: "Notion", color: "#000000", logo: "/logos/notion.svg" },
  {
    name: "Microsoft Teams",
    color: "#6264A7",
    logo: "/logos/microsoftteams.svg",
  },
  { name: "HubSpot", color: "#FF7A59", logo: "/logos/hubspot.svg" },
  { name: "GitHub", color: "#181717", logo: "/logos/github.svg" },
  { name: "GitLab", color: "#FC6D26", logo: "/logos/gitlab.svg" },
  { name: "Google Sheets", color: "#34A853", logo: "/logos/googlesheets.svg" },
  { name: "Google Drive", color: "#4285F4", logo: "/logos/googledrive.svg" },
  {
    name: "Google Calendar",
    color: "#4285F4",
    logo: "/logos/googlecalendar.svg",
  },
  { name: "Gmail", color: "#EA4335", logo: "/logos/gmail.svg" },
  { name: "Dropbox", color: "#0061FF", logo: "/logos/dropbox.svg" },
  { name: "Discord", color: "#5865F2", logo: "/logos/discord.svg" },
  { name: "DeepL", color: "#0F2B46", logo: "/logos/deepl.svg" },
  { name: "Figma", color: "#F24E1E", logo: "/logos/figma.svg" },
];

const ITEMS_PER_PAGE = 12;

export default function IntegrationsPage() {
  const { t } = useLanguage();
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(integrations.length / ITEMS_PER_PAGE);

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const currentItems = integrations.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  return (
    <main className="pt-32 pb-24 px-6">
      <div className="max-w-[1100px] mx-auto text-center">
        <span className="section-label mb-4 block">
          {t("integrations.label")}
        </span>

        <h1 className="font-bold mb-5 leading-tight tracking-tight text-[clamp(2rem,3.5vw,3.5rem)]">
          {t("integrations.title")}
        </h1>

        <p className="text-[#4a3a62] text-lg max-w-[580px] mx-auto mb-14">
          {t("integrations.desc")}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
          {currentItems.map((item, i) => (
            <div className="fi vis flex items-center gap-3 bg-white border rounded-xl p-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-white border">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="w-5 h-5 object-contain"
                />
              </div>

              <span className="text-[14px] font-medium truncate">
                {item.name}
              </span>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
              className="px-3 py-1.5 rounded-lg border text-sm"
            >
              ←
            </button>

            {[...Array(totalPages)].map((_, i) => {
              const p = i + 1;
              return (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`w-9 h-9 rounded-lg text-sm font-medium
                    ${page === p ? "bg-[#5a189a] text-white" : "border"}`}
                >
                  {p}
                </button>
              );
            })}

            <button
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              disabled={page === totalPages}
              className="px-3 py-1.5 rounded-lg border text-sm"
            >
              →
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
