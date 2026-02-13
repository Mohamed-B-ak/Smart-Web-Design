import IndustryPage from '@/components/IndustryPage';
import { useLanguage } from '@/context/LanguageContext';
import { Stethoscope, CalendarCheck, Bell, Pill, Star, RefreshCw, ClipboardList } from 'lucide-react';

export default function Healthcare() {
  const { lang } = useLanguage();
  
  return (
    <IndustryPage
      icon={<Stethoscope className="w-8 h-8" />}
      heroTitle={lang === 'ar' ? 'وكيلك الذكي لا ينام — مرضاك يحجزون مواعيدهم على مدار الساعة' : 'Your Smart Agent Never Sleeps — Patients Book 24/7'}
      heroDescription={lang === 'ar' ? 'في القطاع الصحي السعودي، كل مكالمة فائتة قد تعني مريضاً ضائعاً. سندس AI يحوّل استقبال منشأتك الصحية إلى نظام ذكي يعمل 24/7 — يحجز المواعيد، يذكّر المرضى، ويجيب على استفساراتهم بالعربية الفصحى واللهجة السعودية.' : 'In Saudi healthcare, every missed call could mean a lost patient. Sondos AI transforms your facility reception into a 24/7 smart system — booking appointments, reminding patients, and answering inquiries in Arabic and Saudi dialect.'}
      heroStats={[
        { value: lang === 'ar' ? 'أكثر من 80%' : '80%+', label: lang === 'ar' ? 'تقليل التكاليف' : 'Cost Reduction' },
        { value: lang === 'ar' ? 'حتى 70%' : 'Up to 70%', label: lang === 'ar' ? 'تقليل عدم الحضور' : 'No-Show Reduction' },
        { value: '24/7', label: lang === 'ar' ? 'متاح' : 'Available' },
      ]}
      useCases={[
        { icon: <CalendarCheck className="w-6 h-6" />, title: lang === 'ar' ? 'حجز وإدارة مواعيد المرضى' : 'Patient Appointment Management', description: lang === 'ar' ? 'الوكيل يحجز، يؤكد، يعيد جدولة، ويلغي المواعيد تلقائياً — مع مزامنة فورية مع تقويمات الأطباء والأخصائيين.' : 'The agent books, confirms, reschedules, and cancels appointments automatically — with instant sync to doctor calendars.' },
        { icon: <Bell className="w-6 h-6" />, title: lang === 'ar' ? 'تذكيرات المواعيد الآلية' : 'Automated Appointment Reminders', description: lang === 'ar' ? 'اتصال آلي قبل الموعد بـ24 ساعة لتأكيد الحضور — يقلل نسبة عدم الحضور بنسبة تصل إلى 70%.' : 'Automated call 24 hours before appointment to confirm attendance — reduces no-show rate by up to 70%.' },
        { icon: <Pill className="w-6 h-6" />, title: lang === 'ar' ? 'الاستفسارات الطبية العامة' : 'General Medical Inquiries', description: lang === 'ar' ? 'ساعات العمل، التخصصات المتاحة، قبول التأمين، الموقع والاتجاهات — كل الأسئلة المتكررة يجيب عليها الوكيل فوراً.' : 'Working hours, available specialties, insurance acceptance, location — all FAQs answered instantly by the agent.' },
        { icon: <Star className="w-6 h-6" />, title: lang === 'ar' ? 'جمع تقييمات المرضى' : 'Patient Feedback Collection', description: lang === 'ar' ? 'بعد كل زيارة، الوكيل يتصل بالمريض لجمع رأيه — بأسلوب لطيف واحترافي.' : 'After each visit, the agent calls patients to collect feedback — politely and professionally.' },
        { icon: <RefreshCw className="w-6 h-6" />, title: lang === 'ar' ? 'متابعة نتائج الفحوصات' : 'Lab Results Follow-up', description: lang === 'ar' ? 'إخطار المرضى عند جاهزية نتائج تحاليلهم أو أشعتهم — مع حجز موعد مراجعة تلقائياً.' : 'Notify patients when their test results are ready — with automatic follow-up appointment booking.' },
        { icon: <ClipboardList className="w-6 h-6" />, title: lang === 'ar' ? 'التحقق من التأمين' : 'Insurance Verification', description: lang === 'ar' ? 'جمع معلومات التأمين الأولية من المريض قبل الزيارة — لتسريع إجراءات القبول.' : 'Collect initial insurance information before the visit — to speed up admission procedures.' },
      ]}
      costComparison={{
        headers: [lang === 'ar' ? 'موظفة استقبال' : 'Receptionist', lang === 'ar' ? 'سندس AI' : 'Sondos AI'],
        rows: [
          { label: lang === 'ar' ? 'التكلفة الشهرية' : 'Monthly Cost', traditional: lang === 'ar' ? '4,500 - 6,000 ريال' : '4,500 - 6,000 SAR', sondos: lang === 'ar' ? 'من 400 ريال' : 'From 400 SAR' },
          { label: lang === 'ar' ? 'ساعات العمل' : 'Working Hours', traditional: lang === 'ar' ? '8 ساعات (وردية واحدة)' : '8 hours (single shift)', sondos: lang === 'ar' ? '24 ساعة' : '24 hours' },
          { label: lang === 'ar' ? 'المكالمات المتزامنة' : 'Concurrent Calls', traditional: lang === 'ar' ? 'مكالمة واحدة' : '1 call', sondos: lang === 'ar' ? '+50 مكالمة' : '50+ calls' },
          { label: lang === 'ar' ? 'الإجازات والغياب' : 'Sick Leave & Absence', traditional: lang === 'ar' ? 'مطلوبة' : 'Required', sondos: lang === 'ar' ? 'لا يوجد' : 'None' },
          { label: lang === 'ar' ? 'التقارير' : 'Reports', traditional: lang === 'ar' ? 'يدوية' : 'Manual', sondos: lang === 'ar' ? 'آلية ومفصلة' : 'Automated & Detailed' },
          { label: lang === 'ar' ? 'الأخطاء في الحجز' : 'Booking Errors', traditional: lang === 'ar' ? 'واردة' : 'Possible', sondos: lang === 'ar' ? 'شبه معدومة' : 'Nearly Zero' },
        ]
      }}
      servedList={lang === 'ar' ? [
        'العيادات والمجمعات الطبية', 'المستشفيات الخاصة والحكومية', 'عيادات الأسنان',
        'مراكز البصريات', 'مراكز التجميل والليزر', 'مراكز العلاج الطبيعي',
        'الصيدليات', 'المختبرات ومراكز الأشعة'
      ] : [
        'Clinics & Medical Complexes', 'Private & Government Hospitals', 'Dental Clinics',
        'Optical Centers', 'Cosmetic & Laser Centers', 'Physical Therapy Centers',
        'Pharmacies', 'Labs & Radiology Centers'
      ]}
      ctaText={lang === 'ar' ? 'حوّل استقبال منشأتك الصحية اليوم' : 'Transform Your Healthcare Reception Today'}
    />
  );
}
