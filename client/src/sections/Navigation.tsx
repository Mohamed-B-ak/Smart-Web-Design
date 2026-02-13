import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';
import logoImg from '@assets/logo_smart_(1)_1770814555470.jpg';

interface NavigationProps {
  onNavigate?: (page: string) => void;
}

export default function Navigation({ onNavigate }: NavigationProps) {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t('nav.product'), href: '#whatis', page: null },
    { label: t('nav.pricing'), href: '#highlights', page: null },
    { label: t('nav.for_business'), href: '#features', page: null },
    { label: t('nav.resources'), href: '#faq', page: null },
    { label: t('footer.blog'), href: '#', page: 'blog' },
  ];

  const handleNavClick = (e: React.MouseEvent, link: { href: string; page: string | null }) => {
    if (link.page && onNavigate) {
      e.preventDefault();
      onNavigate(link.page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (link.href.startsWith('#') && onNavigate) {
      onNavigate('home');
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

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
        <a href="#" onClick={handleLogoClick} className="flex items-center gap-2 shrink-0" data-testid="link-home">
          <img src={logoImg} alt="Sondos AI" className="h-10 object-contain" />
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={(e) => handleNavClick(e, link)}
              className="text-[14px] font-medium text-[#5a5a72] hover:text-[#1a1a2e] transition-colors"
              data-testid={`link-nav-${link.page || link.href.replace('#', '')}`}
            >
              {link.label}
            </a>
          ))}
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
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="block text-[15px] font-medium text-[#5a5a72] hover:text-[#1a1a2e] transition-colors py-2"
              onClick={(e) => { handleNavClick(e, link); setMobileOpen(false); }}
            >
              {link.label}
            </a>
          ))}
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
