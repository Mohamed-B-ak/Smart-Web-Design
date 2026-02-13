import IndustryPage from '@/components/IndustryPage';
import { useLanguage } from '@/context/LanguageContext';
import { Landmark, CreditCard, ClipboardList, Search } from 'lucide-react';

export default function DebtCollection() {
  const { lang } = useLanguage();
  return (
    <IndustryPage
      icon={<Landmark className="w-8 h-8" />}
      heroTitle={lang === 'ar' ? 'تحصيل ذكي — أعلى استرداد، أقل تكلفة' : 'Smart Collection — Higher Recovery, Lower Cost'}
      heroDescription={lang === 'ar' ? 'زِد معدلات الاسترداد بنسبة 40% مع وكيل صوتي ذكي يتواصل مع المدينين باحترافية وامتثال كامل — 24/7.' : 'Increase recovery rates by 40% with a smart voice agent that communicates with debtors professionally and with full compliance — 24/7.'}
      heroStats={[
        { value: lang === 'ar' ? 'حتى 40%' : 'Up to 40%', label: lang === 'ar' ? 'زيادة معدلات الاسترداد' : 'Recovery Rate Increase' },
        { value: '100%', label: lang === 'ar' ? 'امتثال' : 'Compliance' },
      ]}
      useCases={[
        { icon: <CreditCard className="w-6 h-6" />, title: lang === 'ar' ? 'تذكيرات الدفع' : 'Payment Reminders', description: lang === 'ar' ? 'اتصال احترافي ومنتظم بالعملاء ذوي المبالغ المستحقة — مع امتثال كامل لأنظمة التحصيل.' : 'Professional and regular calls to customers with outstanding amounts — with full compliance to collection regulations.' },
        { icon: <ClipboardList className="w-6 h-6" />, title: lang === 'ar' ? 'إعداد خطط السداد' : 'Payment Plan Setup', description: lang === 'ar' ? 'التفاوض على خطط دفع مرنة، جمع التزامات السداد، وجدولة مكالمات المتابعة — تلقائياً.' : 'Negotiate flexible payment plans, collect payment commitments, and schedule follow-up calls — automatically.' },
        { icon: <Search className="w-6 h-6" />, title: lang === 'ar' ? 'التحقق من بيانات الحساب' : 'Account Data Verification', description: lang === 'ar' ? 'تحديث بيانات الاتصال والتحقق من المعلومات — لضمان حملات تحصيل ناجحة.' : 'Update contact data and verify information — ensuring successful collection campaigns.' },
      ]}
      ctaText={lang === 'ar' ? 'ارفع معدلات استردادك' : 'Boost Your Recovery Rates'}
    />
  );
}
