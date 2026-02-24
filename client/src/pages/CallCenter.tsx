import IndustryPage from "@/components/IndustryPage";
import { useLanguage } from "@/context/LanguageContext";
import {
  Headphones,
  PhoneIncoming,
  PhoneOutgoing,
  CreditCard,
  ArrowRightLeft,
} from "lucide-react";

export default function CallCenter() {
  const { lang } = useLanguage();
  return (
    <IndustryPage
      icon={<Headphones className="w-8 h-8" />}
      heroTitle={
        lang === "ar"
          ? "مركز اتصال ذكي — يتعامل كالبشر ويعمل كالآلة"
          : "Smart Call Center — Human Touch, Machine Efficiency"
      }
      heroDescription={
        lang === "ar"
          ? "سندس AI يُحدث نقلة نوعية في مراكز الاتصال. وكلاء صوتيون يديرون المكالمات الواردة والصادرة باحترافية — دعم فني، استبيانات رضا، تحصيل ديون، وتأهيل عملاء — مع خفض التكاليف التشغيلية بأكثر من 80%."
          : "Sondos AI revolutionizes call centers. Voice agents manage inbound and outbound calls professionally — tech support, satisfaction surveys, debt collection, and lead qualification — cutting operational costs by over 80%."
      }
      useCases={[
        {
          icon: <PhoneIncoming className="w-6 h-6" />,
          title:
            lang === "ar" ? "المكالمات الواردة الذكية" : "Smart Inbound Calls",
          description:
            lang === "ar"
              ? "أتمتة كل أنواع المكالمات الواردة: دعم عملاء، استفسارات تقنية، طلبات معلومات. صفر وقت انتظار، صفر طوابير."
              : "Automate all inbound calls: customer support, technical inquiries, info requests. Zero wait time, zero queues.",
        },
        {
          icon: <PhoneOutgoing className="w-6 h-6" />,
          title:
            lang === "ar"
              ? "المكالمات الصادرة الآلية"
              : "Automated Outbound Calls",
          description:
            lang === "ar"
              ? "تأكيد مواعيد، جمع ملاحظات، توليد عملاء محتملين — الوكيل يتصل تلقائياً من قوائمك."
              : "Appointment confirmation, feedback collection, lead generation — the agent calls automatically from your lists.",
        },
        {
          icon: <CreditCard className="w-6 h-6" />,
          title: lang === "ar" ? "تحصيل الديون" : "Debt Collection",
          description:
            lang === "ar"
              ? "اتصال احترافي بالعملاء ذوي المبالغ المستحقة — تقديم معلومات الرصيد وخيارات السداد مع امتثال كامل."
              : "Professional calls to customers with outstanding balances — providing balance info and payment options with full compliance.",
        },
        {
          icon: <ArrowRightLeft className="w-6 h-6" />,
          title:
            lang === "ar" ? "التحويل للفريق البشري" : "Human Team Transfer",
          description:
            lang === "ar"
              ? "عندما يحتاج العميل تدخلاً بشرياً — التحويل يتم بسلاسة مع نقل كامل لسياق المحادثة."
              : "When a customer needs human intervention — transfer happens seamlessly with full conversation context.",
        },
      ]}
      ctaText={
        lang === "ar"
          ? "حوّل مركز اتصالك إلى مركز ذكي"
          : "Transform Your Call Center Into a Smart Center"
      }
    />
  );
}
