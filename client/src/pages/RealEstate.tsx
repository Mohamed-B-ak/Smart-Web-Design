import IndustryPage from '@/components/IndustryPage';
import { useLanguage } from '@/context/LanguageContext';
import { Building, Home, Target, Phone, RefreshCw } from 'lucide-react';

export default function RealEstate() {
  const { lang } = useLanguage();
  return (
    <IndustryPage
      icon={<Building className="w-8 h-8" />}
      heroTitle={lang === 'ar' ? 'كل اتصال فرصة — لا تفوّت واحدة منها' : 'Every Call Is an Opportunity — Don\'t Miss One'}
      heroDescription={lang === 'ar' ? 'في سوق العقارات السعودي سريع الحركة، كل مكالمة فائتة قد تعني صفقة ضائعة. سندس AI يضمن أن كل عميل محتمل يحصل على رد فوري — 24 ساعة، 7 أيام.' : 'In Saudi Arabia\'s fast-moving real estate market, every missed call could mean a lost deal. Sondos AI ensures every potential client gets an instant response — 24/7.'}
      useCases={[
        { icon: <Home className="w-6 h-6" />, title: lang === 'ar' ? 'جدولة معاينات العقارات' : 'Property Viewing Scheduling', description: lang === 'ar' ? 'التفاوض على المواعيد المناسبة وحجز معاينات مع مزامنة تلقائية لتقويم فريق المبيعات.' : 'Negotiate suitable times and book viewings with automatic sync to sales team calendars.' },
        { icon: <Target className="w-6 h-6" />, title: lang === 'ar' ? 'تأهيل العملاء المحتملين' : 'Lead Qualification', description: lang === 'ar' ? 'مطابقة العقارات المتاحة في نظام CRM مع احتياجات العميل — تقديم توصيات مخصصة وتحويل الجادين لفريق المبيعات.' : 'Match available properties in CRM with client needs — provide personalized recommendations and transfer serious leads to sales.' },
        { icon: <Phone className="w-6 h-6" />, title: lang === 'ar' ? 'توليد عملاء من المالكين' : 'Owner Lead Generation', description: lang === 'ar' ? 'الاتصال بمالكي العقارات المعلنة على المنصات لاقتراح خدمات الوساطة — زيادة عدد العروض.' : 'Contact property owners listed on platforms to propose brokerage services — increase listings.' },
        { icon: <RefreshCw className="w-6 h-6" />, title: lang === 'ar' ? 'المتابعة الآلية' : 'Automated Follow-up', description: lang === 'ar' ? 'متابعة تلقائية مع العملاء المحتملين الذين أبدوا اهتماماً — لا يسقط أحد من القمع البيعي.' : 'Automated follow-up with interested leads — no one falls through the sales funnel.' },
      ]}
      ctaText={lang === 'ar' ? 'ضاعف صفقاتك العقارية' : 'Double Your Real Estate Deals'}
    />
  );
}