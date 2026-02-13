import IndustryPage from '@/components/IndustryPage';
import { useLanguage } from '@/context/LanguageContext';
import { Wrench, CalendarDays, DollarSign, Target, Phone, MessageSquare, Star } from 'lucide-react';

export default function Services() {
  const { lang } = useLanguage();
  return (
    <IndustryPage
      icon={<Wrench className="w-8 h-8" />}
      heroTitle={lang === 'ar' ? 'ركّز على خدمتك — ودع سندس يتولى المكالمات' : 'Focus on Your Service — Let Sondos Handle the Calls'}
      heroDescription={lang === 'ar' ? 'أتمتة مكالمات الحجز والدعم والمتابعة لصالونات التجميل، ورش الصيانة، شركات النقل، وجميع مقدمي الخدمات.' : 'Automate booking, support, and follow-up calls for beauty salons, maintenance workshops, transport companies, and all service providers.'}
      useCases={[
        { icon: <CalendarDays className="w-6 h-6" />, title: lang === 'ar' ? 'جدولة المواعيد والحجوزات' : 'Appointment & Booking Scheduling', description: lang === 'ar' ? 'للصالونات، ورش الصيانة، شركات الخدمات — جدولة ذكية متصلة بتقويم فريقك.' : 'For salons, workshops, service companies — smart scheduling connected to your team calendar.' },
        { icon: <DollarSign className="w-6 h-6" />, title: lang === 'ar' ? 'تحصيل المستحقات' : 'Payment Collection', description: lang === 'ar' ? 'اتصال احترافي ومهذب بالعملاء ذوي الفواتير المتأخرة.' : 'Professional and polite calls to customers with overdue invoices.' },
        { icon: <Target className="w-6 h-6" />, title: lang === 'ar' ? 'تأهيل العملاء المحتملين' : 'Lead Qualification', description: lang === 'ar' ? 'فلترة المتصلين وتحديد الجادين قبل تحويلهم لفريقك.' : 'Filter callers and identify serious ones before transferring to your team.' },
        { icon: <Phone className="w-6 h-6" />, title: lang === 'ar' ? 'توليد عملاء جدد' : 'New Lead Generation', description: lang === 'ar' ? 'اتصال بالعملاء المحتملين لتقديم خدماتك وبناء قاعدة عملاء أوسع.' : 'Call potential customers to present your services and build a wider customer base.' },
        { icon: <MessageSquare className="w-6 h-6" />, title: lang === 'ar' ? 'دعم العملاء' : 'Customer Support', description: lang === 'ar' ? 'إجابة الاستفسارات ومعالجة الطلبات والشكاوى — بتجربة مخصصة ومهنية.' : 'Answer inquiries and handle requests and complaints — with a personalized, professional experience.' },
        { icon: <Star className="w-6 h-6" />, title: lang === 'ar' ? 'جمع التقييمات' : 'Feedback Collection', description: lang === 'ar' ? 'جمع آراء العملاء بعد كل خدمة لتحسين الجودة المستمر.' : 'Collect customer feedback after each service for continuous quality improvement.' },
      ]}
      ctaText={lang === 'ar' ? 'خلّ خدمتك تتكلم عن نفسها' : 'Let Your Service Speak for Itself'}
    />
  );
}