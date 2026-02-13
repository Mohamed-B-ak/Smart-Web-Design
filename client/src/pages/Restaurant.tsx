import IndustryPage from '@/components/IndustryPage';
import { useLanguage } from '@/context/LanguageContext';
import { UtensilsCrossed, ShoppingBag, CalendarDays, Info, Truck, PartyPopper, Star } from 'lucide-react';

export default function Restaurant() {
  const { lang } = useLanguage();
  return (
    <IndustryPage
      icon={<UtensilsCrossed className="w-8 h-8" />}
      heroTitle={lang === 'ar' ? 'مطعمك لا يتوقف عن الاستقبال — حتى في ساعات الذروة' : 'Your Restaurant Never Stops Taking Orders — Even at Peak Hours'}
      heroDescription={lang === 'ar' ? 'وكيل صوتي ذكي يأخذ طلبات المطعم، يحجز الطاولات، ويجيب على استفسارات العملاء 24/7. تعامل مع 300% مكالمات أكثر.' : 'A smart voice agent takes restaurant orders, books tables, and answers customer inquiries 24/7. Handle 300% more calls.'}
      useCases={[
        { icon: <ShoppingBag className="w-6 h-6" />, title: lang === 'ar' ? 'استقبال الطلبات الهاتفية' : 'Phone Order Taking', description: lang === 'ar' ? 'الوكيل يأخذ الطلب كاملاً — الأصناف، الكميات، التوصيل أو الاستلام — بمحادثة طبيعية ومعرفة كاملة بالقائمة.' : 'Agent takes the full order — items, quantities, delivery or pickup — in natural conversation with full menu knowledge.' },
        { icon: <CalendarDays className="w-6 h-6" />, title: lang === 'ar' ? 'حجوزات الطاولات' : 'Table Reservations', description: lang === 'ar' ? 'إدارة الحجوزات، تأكيدها، ومعالجة الإلغاءات — مع التحقق الفوري من التوفر.' : 'Manage reservations, confirmations, and cancellations — with instant availability checks.' },
        { icon: <Info className="w-6 h-6" />, title: lang === 'ar' ? 'استفسارات العملاء' : 'Customer Inquiries', description: lang === 'ar' ? 'القائمة، الحساسيات الغذائية، ساعات العمل، والعروض — كل شيء يُجاب عليه فوراً.' : 'Menu, food allergies, working hours, and promotions — everything answered instantly.' },
        { icon: <Truck className="w-6 h-6" />, title: lang === 'ar' ? 'تحديثات التوصيل' : 'Delivery Updates', description: lang === 'ar' ? 'إخطار تلقائي بحالة الطلب والوقت المتوقع للتوصيل.' : 'Automatic notifications with order status and expected delivery time.' },
        { icon: <PartyPopper className="w-6 h-6" />, title: lang === 'ar' ? 'حجوزات المناسبات' : 'Event Bookings', description: lang === 'ar' ? 'حجوزات الصالات الخاصة والمناسبات وطلبات التموين — بمرونة واحترافية.' : 'Private hall bookings, events, and catering requests — with flexibility and professionalism.' },
        { icon: <Star className="w-6 h-6" />, title: lang === 'ar' ? 'جمع التقييمات' : 'Feedback Collection', description: lang === 'ar' ? 'بعد كل تجربة، الوكيل يتصل لجمع رأي العميل — بيانات ذهبية لتحسين الخدمة.' : 'After each experience, the agent calls to collect feedback — golden data for service improvement.' },
      ]}
      ctaText={lang === 'ar' ? 'مطعمك يستحق وكيلاً ذكياً' : 'Your Restaurant Deserves a Smart Agent'}
    />
  );
}