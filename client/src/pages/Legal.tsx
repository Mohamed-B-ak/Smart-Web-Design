import IndustryPage from '@/components/IndustryPage';
import { useLanguage } from '@/context/LanguageContext';
import { Scale, ClipboardList, CalendarDays, BarChart3, FileText, CreditCard, RefreshCw } from 'lucide-react';

export default function Legal() {
  const { lang } = useLanguage();
  return (
    <IndustryPage
      icon={<Scale className="w-8 h-8" />}
      heroTitle={lang === 'ar' ? 'استقبال احترافي — يليق بمكتبك القانوني' : 'Professional Reception — Worthy of Your Law Firm'}
      heroDescription={lang === 'ar' ? 'وكيل صوتي ذكي يستقبل العملاء، يجدول الاستشارات، ويتابع القضايا — بسرية تامة واحترافية قانونية.' : 'A smart voice agent receives clients, schedules consultations, and follows up on cases — with complete confidentiality and legal professionalism.'}
      useCases={[
        { icon: <ClipboardList className="w-6 h-6" />, title: lang === 'ar' ? 'استقبال العملاء الجدد' : 'New Client Intake', description: lang === 'ar' ? 'جمع المعلومات الأولية، تحديد طبيعة القضية، وتوجيه العميل للمحامي المناسب — بسرية تامة.' : 'Collect initial information, determine case nature, and direct client to the right lawyer — with full confidentiality.' },
        { icon: <CalendarDays className="w-6 h-6" />, title: lang === 'ar' ? 'جدولة الاستشارات' : 'Consultation Scheduling', description: lang === 'ar' ? 'حجز مواعيد الاستشارات وجلسات المحكمة واجتماعات العملاء مع إدارة تقويمات المحامين.' : 'Book consultations, court sessions, and client meetings while managing lawyer calendars.' },
        { icon: <BarChart3 className="w-6 h-6" />, title: lang === 'ar' ? 'تحديثات القضايا' : 'Case Updates', description: lang === 'ar' ? 'إخطار العملاء بمستجدات قضاياهم، تذكيرات مواعيد المحكمة، وطلبات المستندات.' : 'Notify clients of case updates, court date reminders, and document requests.' },
        { icon: <FileText className="w-6 h-6" />, title: lang === 'ar' ? 'جمع المستندات' : 'Document Collection', description: lang === 'ar' ? 'تذكير العملاء بالأوراق المطلوبة والمواعيد النهائية — مع مكالمات متابعة حتى الاكتمال.' : 'Remind clients of required documents and deadlines — with follow-up calls until completion.' },
        { icon: <CreditCard className="w-6 h-6" />, title: lang === 'ar' ? 'تذكيرات الدفع' : 'Payment Reminders', description: lang === 'ar' ? 'متابعة الفواتير المستحقة وترتيب خطط السداد — بأسلوب مهني ومحترم.' : 'Follow up on outstanding invoices and arrange payment plans — professionally and respectfully.' },
        { icon: <RefreshCw className="w-6 h-6" />, title: lang === 'ar' ? 'إدارة الإحالات' : 'Referral Management', description: lang === 'ar' ? 'تنسيق الإحالات بين المكاتب القانونية والمتخصصين — بسلاسة وتوثيق كامل.' : 'Coordinate referrals between law firms and specialists — seamlessly with full documentation.' },
      ]}
      ctaText={lang === 'ar' ? 'ارتقِ بمكتبك القانوني' : 'Elevate Your Law Firm'}
    />
  );
}
