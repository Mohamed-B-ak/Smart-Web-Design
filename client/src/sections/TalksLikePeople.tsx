import { useLanguage } from '@/context/LanguageContext';

export default function TalksLikePeople() {
  const { lang, t } = useLanguage();

  const conversationEn = [
    { role: 'customer', text: 'Hi, I received a damaged product in my order #4521.' },
    { role: 'ai', text: 'I\'m sorry about that! Let me pull up your order right away. I can see order #4521 was delivered yesterday. Would you like a replacement or a refund?' },
    { role: 'customer', text: 'A replacement would be great.' },
    { role: 'ai', text: 'Done! I\'ve scheduled a replacement with express shipping. You\'ll receive it within 2 business days. I\'ve also added a 15% discount to your next order as an apology.' },
  ];

  const conversationAr = [
    { role: 'customer', text: 'مرحباً، استلمت منتج تالف في طلبي رقم 4521.' },
    { role: 'ai', text: 'آسف لذلك! دعني أسترجع طلبك فوراً. أرى أن الطلب #4521 تم تسليمه أمس. هل تفضل استبدال أم استرداد؟' },
    { role: 'customer', text: 'الاستبدال سيكون رائعاً.' },
    { role: 'ai', text: 'تم! لقد جدولت استبدالاً بشحن سريع. ستستلمه خلال يومين عمل. كما أضفت خصم 15% على طلبك القادم كاعتذار.' },
  ];

  const conversation = lang === 'ar' ? conversationAr : conversationEn;

  return (
    <section className="py-24 px-6" data-testid="section-talks">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="section-label mb-4 block">{t('talks.label')}</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">{t('talks.title')}</h2>
            <p className="text-[#5a5a72] text-lg leading-relaxed">{t('talks.desc')}</p>
          </div>

          <div className="fi bg-white border border-[rgba(124,92,252,0.15)] rounded-2xl p-6 space-y-4">
            {conversation.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'customer' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[85%] ${msg.role === 'customer' ? '' : ''}`}>
                  <p className="text-[11px] text-[#8a8aa0] mb-1 px-1">
                    {msg.role === 'ai'
                      ? (lang === 'en' ? 'Sondos AI' : 'سندس AI')
                      : (lang === 'en' ? 'Customer' : 'العميل')}
                  </p>
                  <div
                    className={`px-4 py-3 rounded-2xl text-[14px] leading-relaxed ${
                      msg.role === 'ai'
                        ? 'bg-[rgba(124,92,252,0.12)] text-[#2a2a42] rounded-bl-sm'
                        : 'bg-[rgba(0,0,0,0.04)] text-[#3a3a52] rounded-br-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
