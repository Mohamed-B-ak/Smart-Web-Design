"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Star } from "lucide-react";

const CSS = `
  .testi-root {
    font-family: 'din-next-lt-arabic-b4fd9f01e2', sans-serif;
    padding: 96px 24px;
  }
  .testi-wrap {
    max-width: 1280px;
    margin: 0 auto;
  }
  .testi-head {
    text-align: center;
    margin-bottom: 56px;
  }
  .testi-tag {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: #672D92;
    margin-bottom: 16px;
  }
  .testi-tag::before {
    content: '';
    width: 24px;
    height: 2px;
    border-radius: 999px;
    background: linear-gradient(90deg, #672D92, #7f47ac);
    display: inline-block;
  }
  .testi-title {
    font-family: 'din-next-lt-arabic-b4fd9f01e2', sans-serif;
    font-size: clamp(1.8rem, 3.5vw, 2.8rem);
    font-weight: 800;
    line-height: 1.15;
    color: #0a0a0a;
    white-space: nowrap;
  }
  .testi-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  .testi-card {
    background: rgba(255,255,255,0.85);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border: 1px solid rgba(103,45,146,0.1);
    border-radius: 24px;
    padding: 32px 28px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  }
  .testi-stars {
    display: flex;
    gap: 4px;
    margin-bottom: 16px;
  }
  .testi-quote {
    font-size: 0.9rem;
    color: #3a3a52;
    line-height: 1.85;
    margin-bottom: 24px;
  }
  .testi-name {
    font-size: 0.88rem;
    font-weight: 700;
    color: #1a0a2e;
    margin-bottom: 4px;
  }
  .testi-role {
    font-size: 0.82rem;
    color: #8878a0;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    .testi-grid { grid-template-columns: 1fr; }
    .testi-title { white-space: normal; }
  }
`;

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
    <>
      <style>{CSS}</style>

      <section
        className="testi-root"
        dir={lang === "ar" ? "rtl" : "ltr"}
        data-testid="section-testimonials"
      >
        <div className="testi-wrap">
          <div className="testi-head">
            <div className="testi-tag">{t("testimonials.label")}</div>
            <h2 className="testi-title">{t("testimonials.title")}</h2>
          </div>

          <div className="testi-grid">
            {testimonialsData.map((item, i) => (
              <div key={i} className="testi-card">
                <div className="testi-stars">
                  {Array.from({ length: item.rating }).map((_, j) => (
                    <Star
                      key={j}
                      size={16}
                      style={{ fill: "#ffa940", color: "#ffa940" }}
                    />
                  ))}
                </div>

                <p className="testi-quote">
                  {lang === "ar" ? item.quoteAr : item.quote}
                </p>

                <div>
                  <p className="testi-name">
                    {lang === "ar" ? item.nameAr : item.name}
                  </p>
                  <p className="testi-role">
                    {lang === "ar" ? item.roleAr : item.role} — {item.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}