"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Mail, Twitter, Linkedin, Phone } from "lucide-react";
import logoImg from "@assets/LOGO-yosr.png";

const CSS = `
  .foot-root {
    font-family: 'din-next-lt-arabic-b4fd9f01e2', sans-serif;
    position: relative;
    padding: 64px 24px;
    background: white;
    border-top: 1px solid rgba(0,0,0,0.08);
  }
  .foot-wrap {
    max-width: 1152px; /* max-w-6xl */
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 48px;
  }
  
  /* Brand Section */
  .foot-brand {
    display: flex;
    align-items: flex-start;
    gap: 16px;
  }
  .foot-logo {
    height: 56px;
    object-fit: contain;
  }
  .foot-desc {
    font-size: 16px;
    color: black;
    line-height: 1.625;
    max-width: 448px; /* max-w-md */
    font-weight: 600;
  }
  .foot-desc-highlight {
    display: block;
    font-weight: 700;
    margin-top: 4px;
    color: #5a189a; /* Loun li kan kayn */
  }

  /* Contact & Social Links */
  .foot-links {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    font-weight: 500;
  }
  .foot-link {
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    transition: opacity 0.3s ease;
    color: #5a189a; /* Loun li kan kayn */
  }
  .foot-link:hover {
    opacity: 0.7;
  }
  .foot-link svg {
    width: 20px;
    height: 20px;
  }

  /* Copyright Section */
  .foot-copyright {
    margin-top: 48px;
    text-align: center;
    font-size: 14px; /* text-sm */
    color: #6b7280; /* text-gray-500 */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
  .foot-policy-link {
    font-weight: 500;
    color: #5a189a; /* Loun li kan kayn */
    text-decoration: none;
    transition: opacity 0.3s ease;
  }
  .foot-policy-link:hover {
    opacity: 0.7;
  }

  /* Responsive (md breakpoint = 768px) */
  @media (min-width: 768px) {
    .foot-wrap {
      flex-direction: row;
      align-items: center;
    }
    .foot-brand {
      margin-left: auto; /* md:ml-auto */
    }
  }
`;

export default function Footer() {
  const { lang, t } = useLanguage();

  return (
    <>
      <style>{CSS}</style>

      <footer
        className="foot-root"
        dir={lang === "ar" ? "rtl" : "ltr"}
      >
        <div className="foot-wrap">
          
          {/* Brand Section */}
          <div className="foot-brand">
            <img src={logoImg} alt="Sondos AI" className="foot-logo" />
            <p className="foot-desc">
              {t("footer.description_line1")}
              <span className="foot-desc-highlight">
                {t("footer.description_line2")}
              </span>
            </p>
          </div>

          {/* Contact & Social */}
          <div className="foot-links">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="foot-link">
              <Twitter />
              Twitter
            </a>

            <a href="https://linkedin.com/company/sondos-ai" target="_blank" rel="noopener noreferrer" className="foot-link">
              <Linkedin />
              sondos-ai
            </a>

            <a href="https://wa.me/966539332954" target="_blank" rel="noopener noreferrer" className="foot-link">
              <Phone />
              <span dir="ltr">+966 11 510 2700</span>
            </a>

            <a href="mailto:info@sondos-ai.com" className="foot-link">
              <Mail />
              <span dir="ltr">info@sondos-ai.com</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="foot-copyright">
          <div>© {new Date().getFullYear()} Sondos AI. All rights reserved.</div>
          <a href="/policy" className="foot-policy-link">
            {lang === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}
          </a>
        </div>
      </footer>
    </>
  );
}