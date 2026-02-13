import { useLanguage } from '@/context/LanguageContext';
import logoImg from '@assets/logo_smart_(1)_1770814555470.jpg';

export default function Footer() {
  const { lang, t } = useLanguage();

  const columns = [
    {
      title: t('footer.product'),
      links: [
        { label: lang === 'en' ? 'Features' : 'الميزات', href: '#features' },
        { label: lang === 'en' ? 'Pricing' : 'الأسعار', href: '#highlights' },
        { label: lang === 'en' ? 'Demo' : 'عرض', href: '#demo' },
        { label: lang === 'en' ? 'Integrations' : 'التكاملات', href: '#' },
      ],
    },
    {
      title: t('footer.company'),
      links: [
        { label: t('footer.about'), href: '#' },
        { label: t('footer.careers'), href: '#' },
        { label: t('footer.blog'), href: '#' },
      ],
    },
    {
      title: t('footer.resources'),
      links: [
        { label: t('footer.docs'), href: '#' },
        { label: t('footer.api'), href: '#' },
        { label: lang === 'en' ? 'Support' : 'الدعم', href: '#' },
      ],
    },
    {
      title: t('footer.legal'),
      links: [
        { label: t('footer.privacy'), href: '#' },
        { label: t('footer.terms'), href: '#' },
      ],
    },
  ];

  return (
    <footer className="border-t border-[rgba(90,24,154,0.08)] pt-16 pb-8 px-6" data-testid="section-footer">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-14">
          <div className="col-span-2 md:col-span-1">
            <img src={logoImg} alt="Sondos AI" className="h-10 mb-4 object-contain" />
            <p className="text-[13px] text-[#8878a0] leading-relaxed max-w-[240px]">
              {t('footer.desc')}
            </p>
          </div>
          {columns.map((col, i) => (
            <div key={i}>
              <h4 className="text-[13px] font-semibold text-[#4a3a62] uppercase tracking-wider mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href={link.href}
                      className="text-[14px] text-[#8878a0] hover:text-[#1a0a2e] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-[rgba(90,24,154,0.08)] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-[#8878a0]">
            &copy; {new Date().getFullYear()} Sondos AI. {t('footer.rights')}
          </p>
          <div className="flex items-center gap-5">
            {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-[13px] text-[#8878a0] hover:text-[#1a0a2e] transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
