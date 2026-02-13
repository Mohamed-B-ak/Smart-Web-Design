import IndustryPage from '@/components/IndustryPage';
import { useLanguage } from '@/context/LanguageContext';
import { ShoppingCart, RotateCcw, Search, MessageSquare, CheckSquare } from 'lucide-react';

export default function Ecommerce() {
  const { lang } = useLanguage();
  
  return (
    <IndustryPage
      icon={<ShoppingCart className="w-8 h-8" />}
      heroTitle={lang === 'ar' ? 'دعم عملاء لا ينام — متجرك مفتوح 24/7' : 'Customer Support That Never Sleeps — Your Store Open 24/7'}
      heroDescription={lang === 'ar' ? 'في التجارة الإلكترونية، سرعة الاستجابة تعني المزيد من المبيعات. سندس AI يتعامل مع مكالمات عملائك فوراً — يتتبع الطلبات، يعالج المرتجعات، ويستعيد السلات المتروكة — بدون أي وقت انتظار.' : 'In e-commerce, response speed means more sales. Sondos AI handles your customer calls instantly — tracking orders, processing returns, and recovering abandoned carts — with zero wait time.'}
      useCases={[
        { icon: <CheckSquare className="w-6 h-6" />, title: lang === 'ar' ? 'تأكيد الطلبات' : 'Order Confirmation', description: lang === 'ar' ? 'اتصال آلي لتأكيد كل طلب جديد — ضمان الدقة والمعالجة السريعة. يقلل معدل الإلغاء بشكل ملحوظ.' : 'Automated call to confirm every new order — ensuring accuracy and fast processing. Significantly reduces cancellation rates.' },
        { icon: <ShoppingCart className="w-6 h-6" />, title: lang === 'ar' ? 'استعادة السلات المتروكة' : 'Abandoned Cart Recovery', description: lang === 'ar' ? 'الوكيل يتصل بالعملاء الذين تركوا سلال تسوقهم — يذكّرهم بمنتجاتهم ويقدم حافزاً لإتمام الشراء. استعد حتى 30% من المبيعات الضائعة.' : 'Agent calls customers who left their carts — reminding them and offering incentives. Recover up to 30% of lost sales.' },
        { icon: <Search className="w-6 h-6" />, title: lang === 'ar' ? 'تتبع الشحنات' : 'Shipment Tracking', description: lang === 'ar' ? 'العميل يتصل ويسأل "وين طلبي؟" — الوكيل يجيب فوراً بتحديث الحالة والموعد المتوقع للتوصيل.' : 'Customer calls asking "Where is my order?" — the agent answers instantly with status update and expected delivery time.' },
        { icon: <RotateCcw className="w-6 h-6" />, title: lang === 'ar' ? 'معالجة المرتجعات والاستبدال' : 'Returns & Exchanges', description: lang === 'ar' ? 'تسجيل طلبات الإرجاع والاستبدال آلياً — مع إرشاد العميل لخطوات الإرجاع.' : 'Process return and exchange requests automatically — guiding customers through return steps.' },
        { icon: <MessageSquare className="w-6 h-6" />, title: lang === 'ar' ? 'دعم ما بعد البيع' : 'After-Sales Support', description: lang === 'ar' ? 'استفسارات المنتجات، الضمان، طرق الدفع — كل شيء يُجاب عليه فوراً.' : 'Product inquiries, warranty, payment methods — everything answered instantly.' },
      ]}
      ctaText={lang === 'ar' ? 'اجعل متجرك يبيع أكثر — بذكاء' : 'Make Your Store Sell Smarter'}
    />
  );
}
