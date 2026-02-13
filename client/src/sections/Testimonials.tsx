import { useLanguage } from '@/context/LanguageContext';
import { Star } from 'lucide-react';

const testimonialsData = [
  {
    name: 'James Mitchell',
    nameAr: 'جيمس ميتشل',
    role: 'VP of Customer Success',
    roleAr: 'نائب رئيس نجاح العملاء',
    company: 'TechCorp',
    quote: 'Sondos AI reduced our call handling time by 60% while improving customer satisfaction scores. The AI agents are remarkably natural.',
    quoteAr: 'خفض سندس AI وقت التعامل مع المكالمات بنسبة 60% مع تحسين درجات رضا العملاء. الوكلاء الذكيون طبيعيون بشكل ملحوظ.',
    rating: 5,
  },
  {
    name: 'Fatima Al-Zahra',
    nameAr: 'فاطمة الزهراء',
    role: 'Head of Operations',
    roleAr: 'رئيسة العمليات',
    company: 'Gulf Telecom',
    quote: 'The multilingual support is incredible. Our Arabic and English speaking customers get the same high-quality experience.',
    quoteAr: 'الدعم متعدد اللغات مذهل. عملاؤنا الناطقون بالعربية والإنجليزية يحصلون على نفس التجربة عالية الجودة.',
    rating: 5,
  },
  {
    name: 'Sarah Kim',
    nameAr: 'سارة كيم',
    role: 'CTO',
    roleAr: 'مديرة التكنولوجيا',
    company: 'FinanceHub',
    quote: 'We deployed Sondos AI in 48 hours and saw immediate results. The integration with our CRM was seamless.',
    quoteAr: 'نشرنا سندس AI خلال 48 ساعة ورأينا نتائج فورية. التكامل مع نظام إدارة العملاء كان سلساً.',
    rating: 5,
  },
];

export default function Testimonials() {
  const { lang, t } = useLanguage();

  return (
    <section className="py-24 px-6" data-testid="section-testimonials">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-16">
          <span className="section-label mb-4 block">{t('testimonials.label')}</span>
          <h2 className="text-3xl md:text-5xl font-bold">{t('testimonials.title')}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((item, i) => (
            <div
              key={i}
              className="fi bg-white border border-[rgba(124,92,252,0.1)] rounded-2xl p-7 hover:border-[rgba(124,92,252,0.25)] transition-all"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[#ffa940] text-[#ffa940]" />
                ))}
              </div>
              <p className="text-[15px] text-[#3a3a52] leading-relaxed mb-6">
                "{lang === 'ar' ? item.quoteAr : item.quote}"
              </p>
              <div>
                <p className="text-[14px] font-semibold text-[#1a1a2e]">
                  {lang === 'ar' ? item.nameAr : item.name}
                </p>
                <p className="text-[13px] text-[#8a8aa0]">
                  {lang === 'ar' ? item.roleAr : item.role} — {item.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
