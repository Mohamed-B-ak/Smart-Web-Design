import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { useLanguage } from '@/context/LanguageContext';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import logoImg from '@assets/logo_smart_(1)_1770814555470.jpg';

const industryLinks = [
  { en: 'Healthcare', ar: 'القطاع الصحي', href: '/healthcare' },
  { en: 'E-commerce', ar: 'التجارة الإلكترونية', href: '/ecommerce' },
  { en: 'Call Center', ar: 'مراكز الاتصال', href: '/call-center' },
  { en: 'Real Estate', ar: 'العقارات', href: '/real-estate' },
  { en: 'Services', ar: 'الخدمات', href: '/services' },
  { en: 'Restaurant', ar: 'المطاعم', href: '/restaurant' },
  { en: 'Legal', ar: 'القطاع القانوني', href: '/legal' },
  { en: 'Car Dealership', ar: 'معارض السيارات', href: '/car-dealership' },
  { en: 'Debt Collection', ar: 'تحصيل الديون', href: '/debt-collection' },
];

export default function Navigation() {
  const { lang, setLang, t } = useLanguage();
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { label: t('nav.product'), href: '/#whatis', isHash: true },
    { label: t('nav.pricing'), href: '/pricing', isHash: false },
    { label: t('nav.industries'), href: '#', isHash: false, isDropdown: true },
    { label: t('nav.partner'), href: '/partner', isHash: false },
    { label: t('footer.blog'), href: '/blog', isHash: false },
  ];

  return (
    <nav
      data-testid="navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[rgba(255,255,255,0.92)] backdrop-blur-xl border-b border-[rgba(0,0,0,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-[72px] flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 shrink-0" data-testid="link-home">
          <img src={logoImg} alt="Sondos AI" className="h-10 object-contain" />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, i) => {
            if (link.isDropdown) {
              return (
                <div
                  key={i}
                  className="relative group"
                  data-testid="dropdown-industries"
                >
                  <button
                    className="flex items-center gap-1 text-[14px] font-medium text-[#5a5a72] hover:text-[#1a1a2e] transition-colors"
                    data-testid="link-nav-industries"
                  >
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 absolute top-full left-1/2 -translate-x-1/2 pt-3">
                    <div className="bg-white border border-[rgba(0,0,0,0.08)] rounded-xl shadow-lg py-2 min-w-[200px]">
                      {industryLinks.map((industry) => (
                        <Link
                          key={industry.href}
                          href={industry.href}
                          className="block px-4 py-2.5 text-[13px] font-medium text-[#5a5a72] hover:text-[#1a1a2e] hover:bg-[#f8f9fc] transition-colors"
                          data-testid={`link-industry-${industry.href.slice(1)}`}
                        >
                          {lang === 'ar' ? industry.ar : industry.en}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            if (link.isHash) {
              return (
                <a
                  key={i}
                  href={link.href}
                  className="text-[14px] font-medium text-[#5a5a72] hover:text-[#1a1a2e] transition-colors"
                  data-testid={`link-nav-${link.href.replace('/#', '')}`}
                >
                  {link.label}
                </a>
              );
            }

            return (
              <Link
                key={i}
                href={link.href}
                className={`text-[14px] font-medium transition-colors ${
                  location === link.href
                    ? 'text-[#1a1a2e]'
                    : 'text-[#5a5a72] hover:text-[#1a1a2e]'
                }`}
                data-testid={`link-nav-${link.href.slice(1)}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
            className="flex items-center gap-1.5 px-3 py-2 text-[13px] font-medium text-[#5a5a72] hover:text-[#1a1a2e] rounded-full border border-[rgba(0,0,0,0.1)] hover:border-[rgba(0,0,0,0.15)] transition-all"
            data-testid="button-language-toggle"
          >
            <Globe className="w-3.5 h-3.5" />
            {lang === 'en' ? 'العربية' : 'English'}
          </button>
          <a
            href="#"
            className="text-[14px] font-medium text-[#5a5a72] hover:text-[#1a1a2e] transition-colors px-4 py-2"
            data-testid="link-login"
          >
            {t('nav.login')}
          </a>
          <a
            href="#demo"
            className="inline-flex items-center px-5 py-2.5 text-[13px] font-semibold text-white gradient-bg glow rounded-full hover:-translate-y-0.5 transition-all"
            data-testid="link-try-free"
          >
            {t('nav.try_free')}
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-[#1a1a2e] p-2"
          data-testid="button-mobile-menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-[rgba(255,255,255,0.97)] backdrop-blur-xl border-t border-[rgba(0,0,0,0.08)] px-6 py-6 space-y-4">
          {navLinks.map((link, i) => {
            if (link.isDropdown) {
              return (
                <div key={i}>
                  <button
                    onClick={() => setIndustriesOpen(!industriesOpen)}
                    className="flex items-center gap-1 w-full text-[15px] font-medium text-[#5a5a72] hover:text-[#1a1a2e] transition-colors py-2"
                    data-testid="button-mobile-industries"
                  >
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${industriesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {industriesOpen && (
                    <div className="pl-4 space-y-1 mt-1">
                      {industryLinks.map((industry) => (
                        <Link
                          key={industry.href}
                          href={industry.href}
                          className="block text-[14px] text-[#5a5a72] hover:text-[#1a1a2e] transition-colors py-1.5"
                          data-testid={`link-mobile-industry-${industry.href.slice(1)}`}
                        >
                          {lang === 'ar' ? industry.ar : industry.en}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            if (link.isHash) {
              return (
                <a
                  key={i}
                  href={link.href}
                  className="block text-[15px] font-medium text-[#5a5a72] hover:text-[#1a1a2e] transition-colors py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              );
            }

            return (
              <Link
                key={i}
                href={link.href}
                className="block text-[15px] font-medium text-[#5a5a72] hover:text-[#1a1a2e] transition-colors py-2"
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-4 border-t border-[rgba(0,0,0,0.08)] space-y-3">
            <button
              onClick={() => { setLang(lang === 'en' ? 'ar' : 'en'); setMobileOpen(false); }}
              className="flex items-center gap-2 text-[14px] text-[#5a5a72] hover:text-[#1a1a2e]"
            >
              <Globe className="w-4 h-4" />
              {lang === 'en' ? 'العربية' : 'English'}
            </button>
            <a
              href="#demo"
              className="block text-center px-5 py-3 text-[14px] font-semibold text-white gradient-bg glow rounded-full"
              onClick={() => setMobileOpen(false)}
            >
              {t('nav.try_free')}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
