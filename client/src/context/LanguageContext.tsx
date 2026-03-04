import { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    "nav.product": "Product",
    "nav.pricing": "Pricing",
    "nav.for_business": "For Business",
    "nav.for_developers": "For Developers",
    "nav.resources": "Resources",
    "nav.company": "Company",
    "nav.login": "Login",
    "nav.contact_sales": "Contact Sales",
    "nav.try_free": "Try For Free",
    "hero.badge": "#1 AI Voice Agent Platform for Automating Calls",
    "hero.title": "Meet Your AI Call Center",
    "hero.title_span": "Future",
    "hero.subtitle":
      "Build, deploy, and manage next-generation AI voice agents that sound human, execute tasks, and scale effortlessly.",
    "hero.cta_demo": "Try Our Live Demo",
    "hero.cta_sales": "Contact Sales",
    "logo_carousel.title": "Trusted by leading companies worldwide",
    "scale.title": "Built to Scale",
    "scale.subtitle":
      "Handle millions of calls with enterprise-grade reliability",
    "scale.calls": "Calls Processed",
    "scale.languages": "Languages Supported",
    "scale.uptime": "Uptime",
    "scale.satisfaction": "Customer Satisfaction",
    "whatis.label": "What is Sondos AI",
    "whatis.title": "The Next Generation of Customer Communication",
    "whatis.desc":
      "Sondos AI is a comprehensive AI-powered call center platform that transforms how businesses handle customer interactions. Our intelligent voice agents understand context, respond naturally, and resolve issues autonomously.",
    "whatis.f1_title": "Natural Conversations",
    "whatis.f1_desc":
      "AI agents that understand context and respond like real humans",
    "whatis.f2_title": "Smart Routing",
    "whatis.f2_desc":
      "Intelligent call routing based on customer intent and history",
    "whatis.f3_title": "Real-time Analytics",
    "whatis.f3_desc":
      "Live dashboards with actionable insights and performance metrics",
    "whatis.f4_title": "Smart Agents",
    "whatis.f4_desc":
      "Voice and text AI agents that interact naturally with customers.",

    "whatis.f5_title": "Advanced Security",
    "whatis.f5_desc":
      "Your data protected with the highest global security standards.",

    "whatis.f6_title": "Lightning Speed",
    "whatis.f6_desc":
      "Instant responses and real-time analysis of every interaction.",
    "common.read_more": "Read More",
    "demo.label": "Live Demo",
    "demo.title": "See Sondos AI in Action",
    "demo.desc":
      "Experience the power of our AI voice agents with a live demonstration",
    "demo.start": "Start Demo Call",
    "demo.agent": "AI Agent",
    "demo.speaking": "Speaking...",
    "testimonials.label": "Testimonials",
    "testimonials.title": "What Our Clients Say",
    "talks.label": "Natural Language",
    "talks.title": "Talks Like People, Thinks Like AI",
    "talks.desc":
      "Our AI agents engage in natural, flowing conversations that customers love. Powered by advanced NLP and contextual understanding.",
    "highlights.label": "Highlights",
    "highlights.title": "Why Choose Sondos AI",
    "highlights.h1_title": "70% Cost Reduction",
    "highlights.h1_desc":
      "Automate routine calls and reduce operational costs dramatically",
    "highlights.h2_title": "24/7 Availability",
    "highlights.h2_desc": "Never miss a customer call with always-on AI agents",
    "highlights.h3_title": "< 1s Response Time",
    "highlights.h3_desc": "Ultra-fast AI processing for seamless conversations",
    "highlights.h4_title": "95% Resolution Rate",
    "highlights.h4_desc":
      "First-call resolution powered by intelligent automation",
    "features.label": "Features",
    "features.title": "Everything You Need",
    "features.f1": "Intelligent Call Routing",
    "features.f2": "Sentiment Analysis",
    "features.f3": "Multi-language Support",
    "features.f4": "CRM Integration",
    "features.f5": "Call Recording & Transcription",
    "features.f6": "Custom AI Training",
    "qa.label": "Quality Assurance",
    "qa.title": "Enterprise-Grade Quality",
    "qa.desc":
      "Every interaction is monitored, analyzed, and optimized for the best customer experience.",
    "omni.label": "Omnichannel",
    "omni.title": "One Platform, Every Channel",
    "omni.desc":
      "Seamlessly manage voice calls, chat, email, and social media from a single dashboard.",
    "omni.voice": "Voice Calls",
    "omni.chat": "Live Chat",
    "omni.email": "Email",
    "omni.social": "Social Media",
    "telephony.label": "Telephony",
    "telephony.title": "Cloud-Native Telephony",
    "telephony.desc":
      "Enterprise-grade telephony infrastructure built for the modern cloud era.",
    "security.label": "Security",
    "security.title": "Bank-Grade Security",
    "security.desc":
      "Your data is protected with the highest security standards and compliance certifications.",
    "security.f1": "End-to-end Encryption",
    "security.f2": "SOC 2 Type II Certified",
    "security.f3": "GDPR Compliant",
    "security.f4": "ISO 27001 Certified",
    "integrations.label": "Integrations",
    "integrations.title": "Connect With Your Stack",
    "integrations.desc": "Seamlessly integrate with the tools you already use.",
    "faq.label": "FAQ",
    "faq.title": "Frequently Asked Questions",
    "faq.q1": "How does Sondos AI handle multiple languages?",
    "faq.a1":
      "Our AI agents support 40+ languages with native-level fluency, automatically detecting and switching between languages during conversations.",
    "faq.q2": "What is the setup time?",
    "faq.a2":
      "Most customers are up and running within 48 hours. Our team handles the complete setup, including CRM integration and custom training.",
    "faq.q3": "Can I customize the AI voice?",
    "faq.a3":
      "Yes, you can choose from multiple voice profiles or create a custom voice that matches your brand identity.",
    "faq.q4": "What happens when the AI can't resolve an issue?",
    "faq.a4":
      "Our intelligent escalation system seamlessly transfers the call to a human agent with full context, ensuring no information is lost.",
    "faq.q5": "Is there a free trial?",
    "faq.a5":
      "Yes, we offer a 14-day free trial with full access to all features. No credit card required.",
    "cta.title": "Ready to Transform Your Call Center?",
    "cta.desc":
      "Join hundreds of companies already using Sondos AI to deliver exceptional customer experiences.",
    "cta.button": "Get Started Free",
    "cta.demo": "Schedule a Demo",
    "footer.desc":
      "AI-powered call center platform that transforms customer communication with intelligent voice agents.",
    "footer.product": "Product",
    "footer.company": "Company",
    "footer.resources": "Resources",
    "footer.legal": "Legal",
    "footer.about": "About Us",
    "footer.careers": "Careers",
    "footer.blog": "Blog",
    "footer.docs": "Documentation",
    "footer.api": "API Reference",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "blog.title": "Blog",
    "blog.subtitle":
      "Insights, updates, and best practices from the Sondos AI team",
    "blog.read_more": "Read More",
    "blog.back": "Back to Blog",
    "blog.min_read": "min read",
    "nav.industries": "Industries",
    "nav.partner": "Partner",
    "hero.title_new":
      "Smart Calls With Human Voice — Serving Your Customers 24/7",
    "hero.subtitle_new":
      "Your smart voice agent books appointments, follows up with customers, and manages your calls — in Arabic and Saudi dialect.",
    "hero.desc":
      "Sondos AI is the Saudi integrated platform for automating phone calls with AI. Voice agents that speak naturally and understand your customers needs — booking appointments, qualifying leads, and providing support — in 100+ languages, with 300+ integrations, and full compliance with Saudi regulations.",
    "hero.stat1_val": "50,000+",
    "hero.stat1_label": "Calls Processed",
    "hero.stat2_val": "100+",
    "hero.stat2_label": "Languages & Dialects",
    "hero.stat3_val": "300+",
    "hero.stat3_label": "Ready Integrations",
    "hero.stat4_val": "24/7",
    "hero.stat4_label": "Non-stop Service",
    "hero.cta_try": "Try a Free Call Now",
    "hero.cta_book": "Book Your Demo",
    "whysondos.title": "Why Choose Sondos AI for Your Business in Saudi?",
    "whysondos.desc":
      "In a world where digital transformation is accelerating c�� and in a kingdom leading Vision 2030 — it is no longer acceptable for your customers to wait on hold or miss a call. Sondos AI turns every call into an opportunity.",
    "whysondos.f1_title": "Designed for Saudi Market",
    "whysondos.f1_desc":
      "Understands Saudi dialect and local culture. Your voice agent speaks your customers language naturally.",
    "whysondos.f2_title": "Ready in 60 Seconds",
    "whysondos.f2_desc":
      "No programmers or weeks of setup needed. Create your agent and connect it in one minute.",
    "whysondos.f3_title": "Integrates With Your Systems",
    "whysondos.f3_desc":
      "From hospital systems to sales CRM — Sondos connects to 300+ tools you already use.",
    "whysondos.f4_title": "Secure & Compliant",
    "whysondos.f4_desc":
      "Full data protection and compliance with Saudi PDPL and GDPR regulations.",
    "whysondos.f5_title": "Smart Reports",
    "whysondos.f5_desc":
      "Every call recorded and analyzed — recordings, transcripts, and charts to help you decide.",
    "whysondos.f6_title": "Works While You Sleep",
    "whysondos.f6_desc":
      "24 hours, 7 days a week. No holidays, no absences, no delays.",
    "howit.title": "How Does Sondos AI Work?",
    "howit.s1_title": "Create Your Smart Agent",
    "howit.s1_desc":
      "Define the agent personality, language, and voice tone. Upload your business info for it to learn from.",
    "howit.s2_title": "Connect Your Systems",
    "howit.s2_desc":
      "Connect the agent to your calendar, CRM, or any of 300+ integrations — drag and drop, no code.",
    "howit.s3_title": "Activate Your Number",
    "howit.s3_desc":
      "Choose a Saudi or international number, or connect your current numbers via SIP.",
    "howit.s4_title": "Monitor Results",
    "howit.s4_desc":
      "Track every call from the dashboard: recordings, transcripts, conversion rates, and satisfaction.",
    "finalcta.title": "The Future of Calls Has Begun — Are You Ready?",
    "finalcta.desc":
      "Voice AI is not the future — it is the present. Every day you delay, your competitors advance. Start today with Sondos AI.",
    "finalcta.btn1": "Start Free — No Credit Card",
    "finalcta.btn2": "Talk to Our Advisor",
    "finalcta.btn3": "Message Us on WhatsApp",
    "agents.title": "Choose your smart assistant",
    "agents.choose_dialect": "Choose dialect to start",
    "agents.ready": "Ready",
    "agents.soon": "Coming soon",
    "agents.voice_ready": "Voice assistant is ready",
    "agents.press_to_start": "Press to start",
    "agents.start_conversation": "Start conversation",
    "agents.connecting": "Connecting…",
    "agents.please_wait": "Please wait a moment",
    "agents.in_call": "In conversation",
    "agents.end_call": "Press to end call",
    "agents.coming_soon": "Assistant coming soon…",
    "agents.saudi": "Speak Saudi",
    "agents.emirati": "Speak Emirati",
    "agents.egyptian": "Speak Egyptian",
    "demo.title1": "Book Your Demo",
    "demo.subtitle":
      "Fill out the form and our team will contact you within 24 hours",

    "demo.full_name": "Full Name *",
    "demo.full_name_placeholder": "Enter your name",

    "demo.email": "Email Address *",
    "demo.phone": "Phone Number *",

    "demo.company": "Company Name *",
    "demo.company_placeholder": "Enter your company name",

    "demo.industry": "Industry *",
    "demo.industry_placeholder":
      "Example: Real estate, Healthcare, E-commerce...",

    "demo.questions": "Questions (Optional)",
    "demo.questions_placeholder":
      "Write your question or any additional details...",

    "demo.submit": "Submit Request 🚀",
    "footer.description_line1": "AI-powered smart contact center platform",
    "footer.description_line2":
      "Redefining how you communicate with your customers.",

    "footer.contact": "Contact Us",
    "footer.email": "Email",
    "footer.phone": "Phone Number",

    "footer.follow_us": "Follow Us",
    "footer.rights": "All rights reserved © 2026 Sondos AI",
    "partner.hero_title":
      "Launch Your Own Smart Calls Platform — Under Your Brand",
    "partner.hero_desc":
      "The Voice AI market is booming globally — and Saudi Arabia's Vision 2030 is accelerating digital transformation. Partner with Sondos to launch your own white-label AI call platform, under your brand, with zero development.",
    "partner.hero_cta1": "Start Your Partnership",
    "partner.hero_cta2": "Book a Call",
    "partner.why_title": "Why Partner With Sondos",
    "partner.why_desc":
      "Everything you need to launch and grow your own AI voice platform.",
    "partner.f1_title": "100% Your Brand",
    "partner.f1_desc":
      "No trace of Sondos visible to your clients. Your logo, your domain, your colors.",
    "partner.f2_title": "Dedicated Partner Manager",
    "partner.f2_desc":
      "1-on-1 support via Slack and WhatsApp. We're with you every step.",
    "partner.f3_title": "Cancel Anytime",
    "partner.f3_desc":
      "Flexible monthly billing, no long-term contracts or commitments.",
    "partner.f4_title": "Unlimited Client Accounts",
    "partner.f4_desc":
      "Add as many clients as you want without limits or extra fees.",
    "partner.f5_title": "300+ Ready Integrations",
    "partner.f5_desc":
      "HubSpot, Salesforce, GoHighLevel, and hundreds more out of the box.",
    "partner.f6_title": "150+ Countries for Phone Numbers",
    "partner.f6_desc":
      "Local and international numbers available in over 150 countries.",
    "partner.f7_title": "100+ Languages",
    "partner.f7_desc":
      "With regional dialects and voice cloning for natural conversations.",
    "partner.f8_title": "Compliance Ready",
    "partner.f8_desc":
      "GDPR, TCPA, and Saudi PDPL compliance built into the platform.",
    "partner.opp_title": "AI Market Is Exploding — Will You Be at the Front?",
    "partner.opp1_title": "Your Brand, Your Rules",
    "partner.opp1_desc":
      "Custom domain, logo, and brand colors. Your clients never see Sondos.",
    "partner.opp2_title": "Your Effort = Your Profit",
    "partner.opp2_desc":
      "Set your own prices, keep 100% of the margin. No revenue sharing.",
    "partner.opp3_title": "Growing Market",
    "partner.opp3_desc":
      "The AI voice market is projected to reach trillions. Position yourself now.",
    "partner.pricing_title": "Partner Pricing",
    "partner.price_per_min_label": "Per-Minute Cost",
    "partner.sar_min": "SAR/min",
    "partner.monthly_sub_label": "Monthly Subscription",
    "partner.sar_month": "SAR/mo",
    "partner.annual_price": "Annual plan",
    "partner.billing_label": "Billing",
    "partner.billing_desc": "Stripe integrated, multi-currency support",
    "partner.calc_title": "Partner Profit Calculator",
    "partner.calc_desc": "See how much you could earn as a Sondos partner.",
    "partner.calc_price_label": "Client price per minute (SAR)",
    "partner.calc_minutes_label": "Monthly minutes",
    "partner.sar": "SAR",
    "partner.minutes": "min",
    "partner.calc_revenue": "Your Revenue",
    "partner.calc_cost": "Your Cost",
    "partner.calc_monthly_profit": "Monthly Profit",
    "partner.calc_annual_profit": "Annual Profit",
    "partner.faq_title": "Partner FAQ",
    "partner.faq1_q": "What does the partnership include?",
    "partner.faq1_a":
      "You get a fully white-labeled platform with your own branding, domain, client management dashboard, and access to all Sondos AI features — including voice agents, integrations, phone numbers, and analytics.",
    "partner.faq2_q": "How long does it take to launch?",
    "partner.faq2_a":
      "Most partners launch within 24-48 hours. We handle the technical setup — you focus on acquiring clients.",
    "partner.faq3_q": "Do I need technical skills?",
    "partner.faq3_a":
      "No. The platform is designed for non-technical users. Our partner manager guides you through everything, and the setup is drag-and-drop.",
    "partner.faq4_q": "Can I white label docs and marketing materials?",
    "partner.faq4_a":
      "Yes. We provide white-label documentation, marketing templates, and sales materials that you can customize with your brand.",
  },
  ar: {
    "footer.description_line1": "منصة مركز اتصال ذكية مدعومة بالذكاء الاصطناعي",
    "footer.description_line2": "تعيد تعريف تجربة التواصل مع عملائك.",

    "footer.contact": "تواصل معنا",
    "footer.email": "البريد الإلكتروني",
    "footer.phone": "رقم الهاتف",

    "footer.follow_us": "تابعنا",
    "footer.rights": "جميع الحقوق محفوظة © 2026 Sondos AI",
    "demo.title1": "احجز عرضك التجريبي",
    "demo.subtitle": "املأ النموذج وسيتواصل معك فريقنا خلال 24 ساعة",

    "demo.full_name": "الاسم الكامل *",
    "demo.full_name_placeholder": "اكتب اسمك",

    "demo.email": "البريد الإلكتروني *",
    "demo.phone": "رقم الهاتف *",

    "demo.company": "اسم الشركة *",
    "demo.company_placeholder": "اكتب اسم شركتك",

    "demo.industry": "القطاع *",
    "demo.industry_placeholder":
      "مثال: العقارات، الصحة، التجارة الإلكترونية...",

    "demo.questions": "استفسارات (اختياري)",
    "demo.questions_placeholder": "اكتب سؤالك أو أي تفاصيل إضافية...",

    "demo.submit": "إرسال الطلب 🚀",
    "common.read_more": "اقرأ المزيد",
    "agents.egyptian": "تحدث بالمصرية",

    "agents.egyptian.voice_ready": "المساعد المصري جاهز ✨",
    "agents.egyptian.press_to_start": "دوس وهنبدأ",
    "agents.egyptian.start_conversation": "يلا بينا",
    "agents.egyptian.connecting": "بنتصل دلوقتي…",
    "agents.egyptian.please_wait": "استنى ثانية",
    "agents.egyptian.in_call": "إحنا بنتكلم",
    "agents.egyptian.end_call": "دوس عشان تقفل المكالمة",
    "agents.emirati": "تحدث بالإماراتية",

    "agents.emirati.voice_ready": "المساعد الإماراتي جاهز 👋",
    "agents.emirati.press_to_start": "اضغط وخلّنا نبدأ",
    "agents.emirati.start_conversation": "يلا نبدأ",
    "agents.emirati.connecting": "قاعدين نتصل…",
    "agents.emirati.please_wait": "لحظة بس",
    "agents.emirati.in_call": "نتكلم الحين",
    "agents.emirati.end_call": "اضغط عشان تسكر المكالمة",
    "agents.title": "اختر مساعدك الذكي",
    "agents.choose_dialect": "اختر اللهجة للبدء",
    "agents.ready": "جاهز",
    "agents.soon": "قريباً",
    "agents.voice_ready": "المساعد الصوتي جاهز",
    "agents.press_to_start": "اضغط للبدء",
    "agents.start_conversation": "ابدأ المحادثة",
    "agents.connecting": "جارٍ الاتصال…",
    "agents.please_wait": "يرجى الانتظار لحظة",
    "agents.in_call": "في المحادثة",
    "agents.end_call": "اضغط لإنهاء المكالمة",
    "agents.coming_soon": "المساعد قادم قريباً…",
    "agents.saudi": "تحدث بالسعودية",
    "nav.product": "الرئيسية",
    "nav.pricing": "الأسعار",
    "nav.for_business": "للأعمال",
    "nav.for_developers": "للمطورين",
    "nav.resources": "الموارد",
    "nav.company": "الشركة",
    "nav.login": "دخول",
    "nav.contact_sales": "تواصل معنا",
    "nav.try_free": "جرّب مجاناً",
    "hero.badge": "المنصة الأولى لوكيل الصوت الذكي لأتمتة المكالمات",
    "hero.title": "مركز الاتصال الذكي",
    "hero.title_span": "المستقبل",
    "hero.subtitle":
      "ابنِ وأطلق وأدِر وكلاء صوتيين بالذكاء الاصطناعي يبدون كالبشر، ينفذون المهام، ويتوسعون بسهولة.",
    "hero.cta_demo": "جرّب العرض المباشر",
    "hero.cta_sales": "تواصل مع المبيعات",
    "logo_carousel.title": "تكامل سلس مع أنظمتك الحالية",
    "scale.title": "مبني للتوسع",
    "scale.subtitle": "تعامل مع ملايين المكالمات بموثوقية على مستوى المؤسسات",
    "scale.calls": "مكالمة معالجة",
    "scale.languages": "لغة مدعومة",
    "scale.uptime": "وقت التشغيل",
    "scale.satisfaction": "رضا العملاء",
    "whatis.label": "ما هو سندس AI",
    "whatis.title": "الجيل القادم من التواصل مع العملاء",
    "whatis.desc":
      "سندس AI هي منصة حلول شاملة مدعومة بالذكاء الاصطناعي، تعمل كنظام متكامل لإدارة تفاعلات العملاء وتحسين تجربة التواصل بين الشركات وعملائها.",
    "whatis.f1_title": "محادثات طبيعية",
    "whatis.f1_desc": "وكلاء ذكاء اصطناعي يفهمون السياق ويستجيبون كالبشر",
    "whatis.f2_title": "توجيه ذكي",
    "whatis.f2_desc": "توجيه مكالمات ذكي بناءً على نية العميل واحتياجه",
    "whatis.f3_title": "تحليلات فورية",
    "whatis.f3_desc": "لوحات معلومات حية مع رؤى قابلة للتنفيذ ومقاييس الأداء",
    "whatis.f4_title": "وكلاء ذكيون",
    "whatis.f4_desc":
      "روبوتات صوتية وكتابية قادرة على التعامل مع العملاء بشكل طبيعي.",

    "whatis.f5_title": "أمان متقدم",
    "whatis.f5_desc": "حماية بياناتك وفق أعلى معايير الأمان العالمية.",

    "whatis.f6_title": "سرعة فائقة",
    "whatis.f6_desc": "استجابة فورية وتحليل لحظي لكل مكالمة وتفاعل.",
    "demo.label": "عرض مباشر",
    "demo.title": "شاهد سندس AI في بث مباشر",
    "demo.desc": "اختبر قوة وكلائنا الصوتيين الذكيين مع عرض توضيحي مباشر",
    "demo.start": "ابدأ مكالمة تجريبية",
    "demo.agent": "الوكيل الذكي",
    "demo.speaking": "يتحدث...",
    "testimonials.label": "آراء العملاء",
    "testimonials.title": "ماذا يقول عملاؤنا",
    "talks.label": "لغة طبيعية",
    "talks.title": "يتحدث كالبشر، يفكر كالذكاء الاصطناعي",
    "talks.desc":
      "وكلاؤنا الذكيون يشاركون في محادثات طبيعية وسلسة يحبها العملاء.",
    "highlights.label": "المميزات",
    "highlights.title": "لماذا تختار سندس AI",
    "highlights.h1_title": "تخفيض التكاليف 70%",
    "highlights.h1_desc": "أتمتة المكالمات الروتينية وتقليل التكاليف التشغيلية",
    "highlights.h2_title": "متاح 24/7",
    "highlights.h2_desc":
      "لا تفوت أي مكالمة عميل مع وكلاء ذكاء اصطناعي يعملون دائماً",
    "highlights.h3_title": "أقل من ثانية",
    "highlights.h3_desc": "معالجة فائقة السرعة لمحادثات سلسة",
    "highlights.h4_title": "95% نسبة الحل",
    "highlights.h4_desc": "حل من المكالمة الأولى مدعوم بالأتمتة الذكية",
    "features.label": "المميزات",
    "features.title": "كل ما تحتاجه",
    "features.f1": "توجيه مكالمات ذكي",
    "features.f2": "تحليل المشاعر",
    "features.f3": "دعم متعدد اللغات",
    "features.f4": "تكامل CRM",
    "features.f5": "تسجيل ونسخ المكالمات",
    "features.f6": "تدريب AI مخصص",
    "qa.label": "ضمان الجودة",
    "qa.title": "جودة على مستوى المؤسسات",
    "qa.desc": "كل تفاعل يتم مراقبته وتحليله وتحسينه لأفضل تجربة عملاء.",
    "omni.label": "قنوات متعددة",
    "omni.title": "منصة واحدة، كل القنوات",
    "omni.desc":
      "إدارة المكا؄مات الصوتية والدردشة والبريد الإلكتروني ووسائل التواصل من لوحة واحدة.",
    "omni.voice": "مكالمات صوتية",
    "omni.chat": "دردشة مباشرة",
    "omni.email": "بريد إلكتروني",
    "omni.social": "وسائل التواصل",
    "telephony.label": "الاتصالات",
    "telephony.title": "اتصالات سحابية",
    "telephony.desc":
      "بنية تحتية للاتصالات على مستوى الم �سسات مبنية لعصر السحابة الحديث.",
    "security.label": "الأمان",
    "security.title": "أمان بمستوى البنوك",
    "security.desc": "بياناتك محمية بأعلى معايير الأمان وشهادات الامتثال.",
    "security.f1": "تشفير من طرف إلى طرف",
    "security.f2": "شهادة SOC 2 Type II",
    "security.f3": "متوافق مع GDPR",
    "security.f4": "شهادة ISO 27001",
    "integrations.label": "التكاملات",
    "integrations.title": "تواصل مع أدواتك",
    "integrations.desc": "تكامل سلس مع الأدوات التي تستخدمها بالفعل.",
    "faq.label": "أسئلة شائعة",
    "faq.title": "الأسئلة الشائعة",
    "faq.q1": "كيف يتعامل سندس AI مع اللغات المتعددة؟",
    "faq.a1":
      "وكلاؤنا الذكيون يدعمون أكثر من 40 لغة بطلاقة أصلية، مع كشف وتبديل تلقائي بين اللغات.",
    "faq.q2": "ما هو وقت الإعداد؟",
    "faq.a2":
      "معظم العملاء يبدأون العمل خلال 48 ساعة. فريقنا يتولى الإعداد الكامل.",
    "faq.q3": "هل يمكنني تخصيص صوت الذكاء الاصطناعي؟",
    "faq.a3":
      "نعم، يمكنك الاختيار من بين ملفات صوتية متعددة أو إنشاء صوت مخصص يتناسب مع هوية علامتك التجارية.",
    "faq.q4": "ماذا يحدث عندما لا يستطيع الذكاء الاصطناعي حل المشكلة؟",
    "faq.a4":
      "نظام التصعيد الذكي ينقل المكالمة بسلاسة إلى وكيل بشري مع السياق الكامل.",

    "cta.title": "مستعد لتحويل مركز اتصالك؟",
    "cta.desc":
      "انضم إلى مئات الشركات التي تستخدم سندس AI بالفعل لتقديم تجارب عملاء استثنائية.",
    "cta.button": "ابدأ مجاناً",
    "cta.demo": "حجز عرض توضيحي",
    "footer.desc":
      "منصة مركز اتصال مدعومة بالذكاء الاصطناعي تحول التواصل مع العملاء بوكلاء صوتيين ذكيين.",
    "footer.product": "المنتج",
    "footer.company": "الشركة",
    "footer.resources": "الموارد",
    "footer.legal": "قانوني",
    "footer.about": "عن الشركة",
    "footer.careers": "وظائف",
    "footer.blog": "المدونة",
    "footer.docs": "التوثيق",
    "footer.api": "مرجع API",
    "footer.privacy": "سياسة الخصوصية",
    "footer.terms": "شروط الخدمة",
    "blog.title": "المدونة",
    "blog.subtitle": "رؤى وتحديثات وأفضل الممارسات من فريق سندس AI",
    "blog.read_more": "اقرأ المزيد",
    "blog.back": "العودة للمدونة",
    "blog.min_read": "دقائق قراءة",
    "nav.industries": "القطاعات",
    "nav.partner": "من نحن",
    "hero.title_new": "منصة سندس AI",
    "hero.subtitle_new":
      "نظام حلول متكاملة لتشغيل خدمة العملاء بالذكاء الاصطناعي",
    "hero.desc":
      "سندس AI هي المنصة السعودية المتكاملة لأتمتة المكالمات الهاتفية وإدارة تجربة العملاء بالذكاء الاصطناعي، حيث تتيح للشركات تشغيل وكلاء صوتيين أذكياء لدعم العملاء وحجز المواعيد تلقائيًا. تدعم المنصة أكثر من 40 لغة وتوفّر +300 تكامل مع أنظمة CRM وواتساب، مع امتثال كامل لأنظمة المملكة.",
    "hero.stat1_val": "+50,000",
    "hero.stat1_label": "مكالمة تم حلها",
    "hero.stat2_val": "+40",
    "hero.stat2_label": "لغة ولهجة مدعومة",
    "hero.stat3_val": "+300",
    "hero.stat3_label": "تكامل جاهز",
    "hero.stat4_val": "24/7",
    "hero.stat4_label": "خدمة بلا توقف",
    "hero.cta_try": "جرّب مكالمة مجانية الآن",
    "hero.cta_book": "احجز عرضك التجريبي ",
    "whysondos.title": "لماذا تختار سندس AI لأعمالك في المملكة؟",
    "whysondos.desc":
      "في عالم يتسارع فيه التحول الرقمي — وفي مملكة تقود رؤية 2030 هذا التحول — لم يعد مقبولاً أن ينتظر عملاؤك على الخط أو يفوتهم الرد. سندس AI تحوّل كل مكالمة إلى فرصة، وكل تفاعل إلى تجربة استثنائية.",
    "whysondos.f1_title": "مصمّم للسوق السعودي",
    "whysondos.f1_desc":
      "يفهم اللهجة السعودية والثقافة المحلية. وكيلك الصوتي يتحدث بلغة عملائك — بطبيعية واحترافية.",
    "whysondos.f2_title": "جاهز في 60 ثانية",
    "whysondos.f2_desc":
      "لا تحتاج مبرمجين أو أسابيع إعداد. أنشئ وكيلك الذكي واربطه بأرقامك في دقيقة واحدة.",
    "whysondos.f3_title": "يتكامل مع أنظمتك",
    "whysondos.f3_desc":
      "من أنظمة المستشفيات إلى CRM المبيعات — سندس يتصل بـ+300 أداة تستخدمها فعلاً.",
    "whysondos.f4_title": "آمن ومتوافق",
    "whysondos.f4_desc":
      "حماية كاملة للبيانات وامتثال لأنظمة حماية البيانات الشخصية في المملكة وGDPR.",
    "whysondos.f5_title": "تقارير ذكية",
    "whysondos.f5_desc":
      "كل مكالمة مسجّلة ومُحللة — تسجيلات صوتية، نصوص محادثات، ورسوم بيانية تساعدك في اتخاذ القرار.",
    "whysondos.f6_title": "يعمل وأنت نائم",
    "whysondos.f6_desc":
      "24 ساعة، 7 أيام في الأسبوع. لا إجازات، لا غياب، لا تأخير.",
    "howit.title": "كيف يعمل نظام سندس AI؟",
    "howit.s1_title": "أنشئ وكيلك الذكي",
    "howit.s1_desc":
      "حدد شخصية الوكيل، لغته، ونبرة صوته. ارفع معلومات منشأتك ليتعلم منها.",
    "howit.s2_title": "اربطه بأنظمتك",
    "howit.s2_desc":
      "وصّل الوكيل بتقويمك، نظام CRM، أو أي من +300 تكامل جاهز — بالسحب والإفلات بدون كود.",
    "howit.s3_title": "فعّل الرقم",
    "howit.s3_desc":
      "اختر رقماً سعودياً أو دولياً من المنصة، أو اربط أرقامك الحالية عبر SIP.",
    "howit.s4_title": "راقب النتائج",
    "howit.s4_desc":
      "تابع كل مكالمة من لوحة التحكم: التسجيلات، النصوص، معدلات التحويل، ورضا العملاء.",
    "finalcta.title": "مستقبل المكالمات بدأ — هل أنت مستعد؟",
    "finalcta.desc":
      "الذكاء الاصطناعي الصوتي ليس المستقبل — إنه الحاضر. كل يوم تؤجل فيه، منافسوك يتقدمون. ابدأ اليوم مع سندس AI وحوّل كل مكالمة إلى فرصة.",
    "finalcta.btn1": "ابدأ مجاناً — بدون بطاقة ائتمان",
    "finalcta.btn2": "تحدث مع مستشارنا",
    "finalcta.btn3": "راسلنا على واتساب",
    "partner.hero_title":
      "أطلق منصتك الخاصة للمكالمات الذكية — بعلامتك التجارية",
    "partner.hero_desc":
      "سوق الذكاء الاصطناعي الصوتي ينمو عالمياً — ورؤية 2030 تسرّع التحول الرقمي في المملكة. شارك مع سندس وأطلق منصة مكالمات ذكية بعلامتك التجارية، بدون أي تطوير.",
    "partner.hero_cta1": "ابدأ شراكتك",
    "partner.hero_cta2": "احجز مكالمة",
    "partner.why_title": "لماذا تشترك مع سندس؟",
    "partner.why_desc":
      "كل ما تحتاجه لإطلاق وتنمية منصة صوتية بالذكاء الاصطناعي.",
    "partner.f1_title": "100% علامتك التجارية",
    "partner.f1_desc": "لا أثر لسندس أمام عملائك. شعارك، نطاقك، ألوانك.",
    "partner.f2_title": "مدير شريك مخصص",
    "partner.f2_desc": "دعم فردي عبر Slack وWhatsApp. معك في كل خطوة.",
    "partner.f3_title": "إلغاء في أي وقت",
    "partner.f3_desc": "فوترة شهرية مرنة، بدون عقود طويلة الأمد.",
    "partner.f4_title": "حسابات عملاء غير محدودة",
    "partner.f4_desc": "أضف عدداً غير محدود من العملاء بدون رسوم إضافية.",
    "partner.f5_title": "+300 تكامل جاهز",
    "partner.f5_desc": "HubSpot، Salesforce، GoHighLevel، ومئات غيرها.",
    "partner.f6_title": "+150 دولة لأرقام الهاتف",
    "partner.f6_desc": "أرقام محلية ودولية متاحة في أكثر من 150 دولة.",
    "partner.f7_title": "+40 لغة",
    "partner.f7_desc": "مع لهجات إقليمية واستنساخ صوتي لمحادثات طبيعية.",
    "partner.f8_title": "جاهز للامتثال",
    "partner.f8_desc":
      "GDPR، TCPA، ونظام حماية البيانات السعودي مدمج في المنصة.",
    "partner.opp_title": "سوق AI ينفجر — هل ستكون في المقدمة؟",
    "partner.opp1_title": "علامتك التجارية، قواعدك",
    "partner.opp1_desc":
      "نطاق مخصص، شعار، وألوان علامتك. عملاؤك لن يروا سندس أبداً.",
    "partner.opp2_title": "جهدك = أرباحك",
    "partner.opp2_desc":
      "حدد أسعارك بنفسك واحتفظ بـ 100% من الهامش. بدون مشاركة أرباح.",
    "partner.opp3_title": "سوق متنامي",
    "partner.opp3_desc":
      "سوق الصوت الذكي يتجه نحو تريليونات. ضع نفسك الآن في المقدمة.",
    "partner.pricing_title": "أسعار الشراكة",
    "partner.price_per_min_label": "التكلفة لكل دقيقة",
    "partner.sar_min": "ريال/دقيقة",
    "partner.monthly_sub_label": "الاشتراك الشهري",
    "partner.sar_month": "ريال/شهر",
    "partner.annual_price": "الخطة السنوية",
    "partner.billing_label": "الفوترة",
    "partner.billing_desc": "Stripe متكامل، دعم متعدد العملات",
    "partner.calc_title": "حاسبة أرباح الشريك",
    "partner.calc_desc": "شاهد كم يمكنك أن تكسب كشريك سندس.",
    "partner.calc_price_label": "سعر العميل لكل دقيقة (ريال)",
    "partner.calc_minutes_label": "الدقائق الشهرية",
    "partner.sar": "ريال",
    "partner.minutes": "دقيقة",
    "partner.calc_revenue": "إيراداتك",
    "partner.calc_cost": "تكلفتك",
    "partner.calc_monthly_profit": "الربح الشهري",
    "partner.calc_annual_profit": "الربح السنوي",
    "partner.faq_title": "الأسئلة الشائعة للشركاء",
    "partner.faq1_q": "ماذا تشمل الشراكة؟",
    "partner.faq1_a":
      "تحصل على منصة كاملة بعلامتك التجارية مع نطاقك الخاص، لوحة إدارة العملاء، والوصول لجميع ميزات سندس AI — بما في ذلك الوكلاء الصوتيين، التكاملات، أرقام الهاتف، والتحليلات.",
    "partner.faq2_q": "كم يستغرق الإطلاق؟",
    "partner.faq2_a":
      "معظم الشركاء يطلقون خلال 24-48 ساعة. نحن نتولى الإعداد التقني — أنت تركز على اكتساب العملاء.",
    "partner.faq3_q": "هل أحتاج مهارات تقنية؟",
    "partner.faq3_a":
      "لا. المنصة مصممة للمستخدمين غير التقنيين. مدير الشريك يرشدك في كل شيء، والإعداد بالسحب والإفلات.",
    "partner.faq4_q":
      "هل يمكنني وضع علامتي التجارية على الوثائق والمواد التسويقية؟",
    "partner.faq4_a":
      "نعم. نوفر وثائق وقوالب تسويقية ومواد مبيعات يمكنك تخصيصها بعلامتك التجارية.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("sondos-lang") as Language;
    if (savedLang && (savedLang === "en" || savedLang === "ar")) {
      setLangState(savedLang);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("sondos-lang", newLang);
    document.documentElement.setAttribute(
      "dir",
      newLang === "ar" ? "rtl" : "ltr",
    );
    document.documentElement.setAttribute("lang", newLang);
  };

  const t = (key: string): string => translations[lang][key] || key;

  useEffect(() => {
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
