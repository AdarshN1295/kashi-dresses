// import { Instagram } from "lucide-react";
import WhatsAppIcon from "../icons/Whatsapp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Logo, NAV_LINKS, WHATSAPP_URL } from "./Header";

export default function Footer({ active = "Home" }) {
  return (
    <footer className="bg-[#FBF7F1] w-full">
      <div className="page-width px-4 sm:px-6 lg:px-10">
        <div className="border-t border-[#EADBC8] py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <Logo />

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.href}
                className={`text-sm ${active === l.label ? "text-[#7A1F1F]" : "text-[#2B1A14] hover:text-[#7A1F1F]"}`}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4 text-[#2B1A14]">
            <a href="http://instagram.com/kashi_fashion_gallary" target="_blank" rel="noreferrer" aria-label="Instagram"
              className="hover:text-[#7A1F1F]">
              <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="WhatsApp"
              className="hover:text-[#7A1F1F]">
              <FontAwesomeIcon icon={faWhatsapp} className="w-6 h-6" />
            </a>
          </div>
        </div>
        <p className="text-center text-xs text-[#8A7563] pb-6">
          © {new Date().getFullYear()} Kashi Rental Outfits. All rights reserved <br />- <b>Website by: </b> Adarsh Nigam
        </p>
      </div>
    </footer>
  );
}