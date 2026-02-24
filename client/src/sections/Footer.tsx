import { useLanguage } from "@/context/LanguageContext";
import { Mail, Twitter, Linkedin, Phone } from "lucide-react";
import logoImg from "@assets/LOGO-SONDoS_AI-Photoroom_1770977931329.png";

export default function Footer() {
  const { t } = useLanguage();

  const brandColor = "#5a189a"; // ⚠️ Mets ici la vraie couleur exacte de ton logo si différente

  return (
    <footer className="relative border-t py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center gap-12">
        {/* Brand Section */}
        <div className="flex items-start gap-4 md:ml-auto">
          <img src={logoImg} alt="Sondos AI" className="h-14 object-contain" />

          <p className="text-[16px] text-black leading-relaxed max-w-md font-semibold">
            منصة مركز اتصال ذكية مدعومة بالذكاء الاصطناعي
            <span
              className="block font-bold mt-1"
              style={{ color: brandColor }}
            >
              تعيد تعريف تجربة التواصل مع عملائك.
            </span>
          </p>
        </div>

        {/* Contact & Social */}
        <div className="flex flex-wrap gap-8 font-medium">
          {/* Twitter */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition duration-300 hover:opacity-70"
            style={{ color: brandColor }}
          >
            <Twitter className="w-5 h-5" />
            Twitter
          </a>

          {/* LinkedIn officiel de Sondos */}
          <a
            href="https://linkedin.com/company/sondos-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition duration-300 hover:opacity-70"
            style={{ color: brandColor }}
          >
            <Linkedin className="w-5 h-5" />
            sondos-ai
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/966539332954"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition duration-300 hover:opacity-70"
            style={{ color: brandColor }}
          >
            <Phone className="w-5 h-5" />
            <span dir="ltr">+966 53 933 2954</span>
          </a>

          {/* Email */}
          <a
            href="mailto:info@sondos-ai.online"
            className="flex items-center gap-2 transition duration-300 hover:opacity-70"
            style={{ color: brandColor }}
          >
            <Mail className="w-5 h-5" />
            <span dir="ltr">info@sondos-ai.online</span>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Sondos AI. All rights reserved.
      </div>
    </footer>
  );
}
