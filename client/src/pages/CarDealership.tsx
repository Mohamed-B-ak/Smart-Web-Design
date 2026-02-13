import IndustryPage from '@/components/IndustryPage';
import { useLanguage } from '@/context/LanguageContext';
import { Car, Users, Wrench, Package, DollarSign, Clock, RefreshCw } from 'lucide-react';

export default function CarDealership() {
  const { lang } = useLanguage();
  return (
    <IndustryPage
      icon={<Car className="w-8 h-8" />}
      heroTitle={lang === 'ar' ? 'كل عميل محتمل يستحق متابعة — الآن أصبحت آلية' : 'Every Lead Deserves Follow-up — Now It\'s Automated'}
      heroDescription={lang === 'ar' ? 'لا تفقد عميلاً محتملاً. وكيل صوتي ذكي يتابع العملاء، يحجز تجارب القيادة، ويذكّر بمواعيد الصيانة — تلقائياً.' : 'Never lose a potential customer. A smart voice agent follows up with leads, books test drives, and reminds about maintenance — automatically.'}
      useCases={[
        { icon: <Users className="w-6 h-6" />, title: lang === 'ar' ? 'متابعة عملاء المبيعات' : 'Sales Lead Follow-up', description: lang === 'ar' ? 'اتصال فوري بعملاء الموقع والإعلانات — تأهيل، تقديم عروض، وحجز تجارب قيادة.' : 'Instant calls to website and ad leads — qualify, present offers, and book test drives.' },
        { icon: <Wrench className="w-6 h-6" />, title: lang === 'ar' ? 'مواعيد الصيانة' : 'Maintenance Appointments', description: lang === 'ar' ? 'جدولة الصيانة الدورية والإصلاحات والضمان — مع التحقق من توفر المواعيد.' : 'Schedule periodic maintenance, repairs, and warranty work — with availability checks.' },
        { icon: <Package className="w-6 h-6" />, title: lang === 'ar' ? 'تحديثات المخزون' : 'Inventory Updates', description: lang === 'ar' ? 'إخطار العملاء عند وصول السيارة المطلوبة وجدولة موعد للمعاينة.' : 'Notify customers when their requested car arrives and schedule a viewing appointment.' },
        { icon: <DollarSign className="w-6 h-6" />, title: lang === 'ar' ? 'المساعدة في التمويل' : 'Financing Assistance', description: lang === 'ar' ? 'إرشاد العملاء لخيارات التمويل وجمع معلومات الموافقة المسبقة.' : 'Guide customers through financing options and collect pre-approval information.' },
        { icon: <Clock className="w-6 h-6" />, title: lang === 'ar' ? 'تذكيرات الخدمة' : 'Service Reminders', description: lang === 'ar' ? 'تذكيرات صيانة دورية، إشعارات ضمان، وتنبيهات استدعاء.' : 'Periodic maintenance reminders, warranty notifications, and recall alerts.' },
        { icon: <RefreshCw className="w-6 h-6" />, title: lang === 'ar' ? 'تقييمات المقايضة' : 'Trade-in Evaluations', description: lang === 'ar' ? 'جمع معلومات السيارة الحالية لتقييم المقايضة وحجز موعد التقييم.' : 'Collect current vehicle information for trade-in evaluation and book assessment appointment.' },
      ]}
      ctaText={lang === 'ar' ? 'ضاعف مبيعات معرضك' : 'Double Your Dealership Sales'}
    />
  );
}
