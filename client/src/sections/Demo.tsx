import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Phone, PhoneOff, Mic } from 'lucide-react';

export default function Demo() {
  const { lang, t } = useLanguage();
  const [active, setActive] = useState(false);
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);

  const demoMessages = lang === 'en'
    ? [
        { role: 'agent', text: 'Hello! Welcome to Sondos AI. How can I assist you today?' },
        { role: 'user', text: 'I need help with my account billing.' },
        { role: 'agent', text: 'I\'d be happy to help with your billing. I can see your account. Your current plan is Premium at $49/month. What would you like to change?' },
        { role: 'user', text: 'Can I downgrade to the basic plan?' },
        { role: 'agent', text: 'Of course! I\'ve processed the downgrade to Basic ($19/month). The change will take effect at your next billing cycle. Is there anything else I can help with?' },
      ]
    : [
        { role: 'agent', text: 'مرحباً! أهلاً بك في سندس AI. كيف يمكنني مساعدتك اليوم؟' },
        { role: 'user', text: 'أحتاج مساعدة بخصوص فاتورة حسابي.' },
        { role: 'agent', text: 'يسعدني مساعدتك. أستطيع رؤية حسابك. خطتك الحالية هي بريميوم بسعر 49 دولار شهرياً. ماذا تريد تغييره؟' },
        { role: 'user', text: 'هل يمكنني تخفيض الخطة إلى الأساسية؟' },
        { role: 'agent', text: 'بالطبع! لقد تمت معالجة التخفيض إلى الخطة الأساسية (19 دولار/شهر). سيسري التغيير في دورة الفوترة القادمة.' },
      ];

  const startDemo = () => {
    setActive(true);
    setMessages([]);
    demoMessages.forEach((msg, i) => {
      setTimeout(() => {
        setMessages((prev) => [...prev, msg]);
      }, (i + 1) * 1500);
    });
    setTimeout(() => setActive(false), demoMessages.length * 1500 + 2000);
  };

  return (
    <section id="demo" className="py-24 px-6" data-testid="section-demo">
      <div className="max-w-[900px] mx-auto text-center">
        <span className="section-label mb-4 block">{t('demo.label')}</span>
        <h2 className="text-3xl md:text-5xl font-bold mb-5">{t('demo.title')}</h2>
        <p className="text-[#a1a1b5] text-lg mb-12">{t('demo.desc')}</p>

        <div className="fi bg-[#12121c] border border-[rgba(124,92,252,0.15)] rounded-3xl p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full gradient-bg flex items-center justify-center ${active ? 'animate-pulse' : ''}`}>
                <Mic className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-[14px] font-semibold text-white">{t('demo.agent')}</p>
                {active && <p className="text-[12px] text-[#00d68f]">{t('demo.speaking')}</p>}
              </div>
            </div>
            {active && (
              <div className="flex items-center gap-1">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-1 bg-[#7c5cfc] rounded-full"
                    style={{
                      animation: 'wave 1.4s ease-in-out infinite',
                      animationDelay: `${i * 0.15}s`,
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="min-h-[280px] bg-[rgba(9,9,15,0.5)] rounded-2xl p-5 mb-6 text-left space-y-4 overflow-y-auto max-h-[360px]">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-3 rounded-2xl text-[14px] leading-relaxed ${
                    msg.role === 'agent'
                      ? 'bg-[rgba(124,92,252,0.15)] text-[#e8e4fd] rounded-bl-sm'
                      : 'bg-[rgba(255,255,255,0.08)] text-[#d1d1d8] rounded-br-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {messages.length === 0 && !active && (
              <div className="flex items-center justify-center h-full text-[#6e6e85] text-[14px]">
                {lang === 'en' ? 'Click start to begin the demo' : 'انقر على ابدأ لبدء العرض'}
              </div>
            )}
          </div>

          <button
            onClick={active ? () => setActive(false) : startDemo}
            className={`inline-flex items-center gap-2 px-8 py-3.5 text-[15px] font-semibold rounded-full transition-all ${
              active
                ? 'bg-[rgba(255,107,107,0.15)] text-[#ff6b6b] border border-[rgba(255,107,107,0.3)]'
                : 'gradient-bg glow text-white hover:-translate-y-0.5'
            }`}
            data-testid="button-start-demo"
          >
            {active ? (
              <>
                <PhoneOff className="w-4 h-4" />
                {lang === 'en' ? 'End Call' : 'إنهاء المكالمة'}
              </>
            ) : (
              <>
                <Phone className="w-4 h-4" />
                {t('demo.start')}
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
