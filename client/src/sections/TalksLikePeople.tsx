"use client";

import { useLanguage } from '@/context/LanguageContext';

const CSS = `
  .talks-root {
    font-family: 'din-next-lt-arabic-b4fd9f01e2', sans-serif;
    padding: 96px 24px;
  }
  .talks-wrap {
    max-width: 1280px;
    margin: 0 auto;
  }
  .talks-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: center;
  }
  .talks-tag {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: #672D92;
    margin-bottom: 16px;
  }
  .talks-tag::before {
    content: '';
    width: 24px;
    height: 2px;
    border-radius: 999px;
    background: linear-gradient(90deg, #672D92, #7f47ac);
    display: inline-block;
  }
  .talks-title {
    font-family: 'din-next-lt-arabic-b4fd9f01e2', sans-serif;
    font-size: clamp(1.8rem, 3.5vw, 2.8rem);
    font-weight: 800;
    line-height: 1.15;
    color: #0a0a0a;
    margin-bottom: 20px;
    white-space: nowrap;
  }
  .talks-desc {
    font-size: 1rem;
    font-weight: 500;
    color: #4a3a62;
    line-height: 1.85;
  }
  .talks-chat {
    background: rgba(255,255,255,0.85);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border: 1px solid rgba(103,45,146,0.15);
    border-radius: 24px;
    padding: 28px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  }
  .talks-msg-row {
    display: flex;
  }
  .talks-msg-row-customer {
    justify-content: flex-end;
  }
  .talks-msg-row-ai {
    justify-content: flex-start;
  }
  .talks-msg-wrap {
    max-width: 85%;
  }
  .talks-msg-label {
    font-size: 0.68rem;
    color: #8878a0;
    margin-bottom: 4px;
    padding: 0 4px;
  }
  .talks-bubble-ai {
    background: rgba(103,45,146,0.12);
    color: #2a2a42;
    padding: 12px 16px;
    border-radius: 16px 16px 4px 16px;
    font-size: 0.88rem;
    line-height: 1.75;
  }
  .talks-bubble-customer {
    background: rgba(0,0,0,0.04);
    color: #3a3a52;
    padding: 12px 16px;
    border-radius: 16px 16px 16px 4px;
    font-size: 0.88rem;
    line-height: 1.75;
  }

  @media (max-width: 900px) {
    .talks-grid { grid-template-columns: 1fr; gap: 40px; }
    .talks-title { white-space: normal; }
  }
`;

const conversationEn = [
  { role: 'customer', text: 'Hi, I received a damaged product in my order #4521.' },
  { role: 'ai', text: "I'm sorry about that! Let me pull up your order right away. I can see order #4521 was delivered yesterday. Would you like a replacement or a refund?" },
  { role: 'customer', text: 'A replacement would be great.' },
  { role: 'ai', text: "Done! I've scheduled a replacement with express shipping. You'll receive it within 2 business days. I've also added a 15% discount to your next order as an apology." },
];

const conversationAr = [
  { role: 'customer', text: 'مرحباً، استلمت منتج تالف في طلبي رقم 4521.' },
  { role: 'ai', text: 'آسف لذلك! دعني أسترجع طلبك فوراً. أرى أن الطلب #4521 تم تسليمه أمس. هل تفضل استبدال أم استرداد؟' },
  { role: 'customer', text: 'الاستبدال سيكون رائعاً.' },
  { role: 'ai', text: 'تم! لقد جدولت استبدالاً بشحن سريع. ستستلمه خلال يومين عمل. كما أضفت خصم 15% على طلبك القادم كاعتذار.' },
];

export default function TalksLikePeople() {
  const { lang, t } = useLanguage();

  const conversation = lang === 'ar' ? conversationAr : conversationEn;

  return (
    <>
      <style>{CSS}</style>

      <section
        className="talks-root"
        dir={lang === "ar" ? "rtl" : "ltr"}
        data-testid="section-talks"
      >
        <div className="talks-wrap">
          <div className="talks-grid">
            {/* Left */}
            <div>
              <div className="talks-tag">{t('talks.label')}</div>
              <h2 className="talks-title">{t('talks.title')}</h2>
              <p className="talks-desc">{t('talks.desc')}</p>
            </div>

            {/* Right — Chat */}
            <div className="talks-chat">
              {conversation.map((msg, i) => (
                <div
                  key={i}
                  className={`talks-msg-row ${msg.role === 'customer' ? 'talks-msg-row-customer' : 'talks-msg-row-ai'}`}
                >
                  <div className="talks-msg-wrap">
                    <p className="talks-msg-label">
                      {msg.role === 'ai'
                        ? (lang === 'en' ? 'Sondos AI' : 'سندس AI')
                        : (lang === 'en' ? 'Customer' : 'العميل')}
                    </p>
                    <div className={msg.role === 'ai' ? 'talks-bubble-ai' : 'talks-bubble-customer'}>
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}