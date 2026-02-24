import { useLanguage } from "@/context/LanguageContext";
import { Star } from "lucide-react";

const testimonialsData = [
  {
    name: "Mohammed Al-Otaibi",
    nameAr: "محمد العتيبي",
    role: "General Manager - Al Waha International Hotel",
    roleAr: "المدير العام لفندق الواحة الدولية",
    company: "Al Waha International Hotel",
    quote:
      "Alhamdulillah, our experience with the Sondos AI platform at Al Waha International Hotel was exceptional. It positively impacted our guest service levels and response time. The platform helped us organize calls, document notes, and track requests effectively, resulting in higher customer satisfaction and service quality.",
    quoteAr:
      "الحمد لله، كانت تجربتنا مع منصة Sondos AI في فندق الواحة الدولية تجربة مميزة أثرت بشكل إيجابي في مستوى خدمة النزلاء وسرعة الاستجابة لاحتياجاتهم. فقد ساعدتنا المنصة في تنظيم الاتصالات وتوثيق الملاحظات ومتابعة الطلبات بفاعلية عالية، مما رفع من مستوى رضا العملاء وجودة الخدمة.",
    rating: 5,
  },
  {
    name: "Sara Al-Dosari",
    nameAr: "سارة الدوسري",
    role: "Head of Services Management Office",
    roleAr: "مديرة مكتب إدارة الخدمات",
    company: "Services Management Office",
    quote:
      "At the Services Management Office, we are proud to use the Sondos AI platform, which has enhanced our communication with customers and organized our workflow more efficiently. It helped us manage calls, provide accurate reports, and improve the overall quality of service, with excellent ongoing technical support.",
    quoteAr:
      "نحن في مكتب إدارة الخدمات نفخر باستخدام منصة Sondos AI التي طوّرت أسلوب تواصلنا مع المراجعين ونظّمت سير العمل بكفاءة أعلى. ساعدتنا في إدارة المكالمات وتوفير تقارير دقيقة انعكست مباشرة على تحسين جودة الخدمة وتسريع إنجاز الطلبات، مع دعم فني متميز ومستمرة.",
    rating: 5,
  },
];

export default function Testimonials() {
  const { lang, t } = useLanguage();

  return (
    <section className="py-24 px-6" data-testid="section-testimonials">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-16">
          <span className="section-label mb-4 block">
            {t("testimonials.label")}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold">
            {t("testimonials.title")}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonialsData.map((item, i) => (
            <div
              key={i}
              className="fi bg-white border border-[rgba(90,24,154,0.1)] rounded-2xl p-7 hover:border-[rgba(90,24,154,0.25)] hover:shadow-[0_12px_40px_rgba(90,24,154,0.1)] hover:-translate-y-1 transition-all duration-500"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-[#ffa940] text-[#ffa940]"
                  />
                ))}
              </div>
              <p className="text-[15px] text-[#3a3a52] leading-relaxed mb-6">
                "{lang === "ar" ? item.quoteAr : item.quote}"
              </p>
              <div>
                <p className="text-[14px] font-semibold text-[#1a0a2e]">
                  {lang === "ar" ? item.nameAr : item.name}
                </p>
                <p className="text-[13px] text-[#8878a0]">
                  {lang === "ar" ? item.roleAr : item.role} — {item.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
