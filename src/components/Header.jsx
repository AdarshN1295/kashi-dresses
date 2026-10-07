import { useState } from "react";
import { Menu, X } from "lucide-react";
import WhatsAppIcon from "../icons/Whatsapp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Collection", href: "#collection-section-layout" },
  { label: "About Us", href: "#about-section-layout" },
  { label: "Rental Process", href: "#rental-process-section-layout" },
  // { label: "Image Gallery", href: "#photo-gallery-section-layout" },
  { label: "Contact", href: "#contact-section-layout" },
];

export const WHATSAPP_URL = "https://wa.me/919826444415"; // replace with real number

export function Logo() {
  return (
    <a href="/" className="flex flex-col items-center leading-none text-[#7A1F1F]">
      <svg viewBox="0 0 40 20" className="w-8 h-4 text-[#B08A5A]" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M20 18c-3-4-3-10 0-15 3 5 3 11 0 15z" />
        <path d="M20 18c-5-1-9-5-10-10 5 0 9 4 10 10z" />
        <path d="M20 18c5-1 9-5 10-10-5 0-9 4-10 10z" />
        <path d="M6 18h28" />
      </svg>
      <span className="font-['Cormorant_Garamond'] text-3xl font-medium -mt-0.5">Kashi</span>
      <span className="text-[9px] tracking-[0.25em] text-[#B08A5A] mt-0.5">RENTAL OUTFITS</span>
    </a>
  );
}

export default function Header({ active = "Home" }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FBF7F1]/95 backdrop-blur border-b border-[#EADBC8] w-full">
      <div className="page-width px-4 sm:px-6 lg:px-10 h-20 flex items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href}
              className={`relative text-sm pb-1 transition-colors ${
                active === l.label
                  ? "text-[#7A1F1F] after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-[#7A1F1F]"
                  : "text-[#2B1A14] hover:text-[#7A1F1F]"
              }`}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"
          className="hidden lg:inline-flex items-center gap-2 rounded-full bg-[#7A1F1F] hover:bg-[#5E1515] text-white text-sm font-medium px-5 py-2.5 transition-colors">
          <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4" /> Enquire on WhatsApp
        </a>

        <button onClick={() => setOpen(!open)} aria-label="Toggle menu"
          className="lg:hidden p-2 text-[#7A1F1F] rounded focus-visible:ring-2 focus-visible:ring-[#7A1F1F]">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[#EADBC8] bg-[#FBF7F1] px-4 pb-5">
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              className={`block py-3 border-b border-[#F0E4D4] text-sm ${
                active === l.label ? "text-[#7A1F1F] font-semibold" : "text-[#2B1A14]"
              }`}>
              {l.label}
            </a>
          ))}
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"
            className="mt-4 flex justify-center items-center gap-2 rounded-full bg-[#7A1F1F] text-white text-sm font-medium px-5 py-3">
            <WhatsAppIcon className="w-4 h-4" /> Enquire on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}