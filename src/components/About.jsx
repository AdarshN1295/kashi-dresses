import { useState, useEffect } from "react";
import { ArrowRight, X, MapPin, Phone, Clock } from "lucide-react";
import aboutImage from "../assets/about/about.webp";

// Replace the address, or paste the src from Google Maps > Share > Embed a map
const MAP_SRC =
  "https://www.google.com/maps?q=" +
  encodeURIComponent("Kashi Dresses,119 banganga main road, indore, madhya pradesh") +
  "&output=embed";

export default function About() {
  const [open, setOpen] = useState(false);

  // Close on Escape + lock page scroll while the popup is open
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <>
      <section
        id="about-section-layout"
        className="relative overflow-hidden bg-[#FBF7F1] text-[#2B1A14] border-b-8 border-[#FBF7F1] w-full"
      >
        {/* Background image (full section) */}
        <img
          src={aboutImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-right"
        />

        {/* Cream overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FBF7F1] via-[#FBF7F1]/90 to-[#FBF7F1]/10 lg:via-[#FBF7F1]/80" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 lg:py-24 min-h-[420px] flex items-center page-width">
          <div className="max-w-xl">
            <p className="text-sm tracking-[0.15em] font-medium text-[#B08A5A]">
              ABOUT KASHI DRESSES
            </p>
            <h2 className="font-['Cormorant_Garamond'] mt-3 text-4xl md:text-5xl font-medium leading-[1.1] text-[#7A1F1F]">
              Dressing Up Moments, <br />
              One Outfit at a Time.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#3A2A22]">
              For the past 3 years, Kashi Dresses has been helping girls, kids
              and individuals find beautiful outfits for their special
              occasions.
              <br />
              <br />
              From festive Garba wear to elegant rental lehengas and drama
              costumes, we offer a carefully selected collection with personal
              attention from our owner and family.
            </p>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#7A1F1F] hover:bg-[#5E1515] text-white text-sm font-medium px-6 py-3.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#7A1F1F]"
            >
              Know More About Us <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Popup */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="about-modal-title"
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#FBF7F1] text-[#2B1A14] shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute top-3 right-3 z-10 grid place-items-center w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#7A1F1F] shadow transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 p-6 sm:p-8 lg:p-10">
              {/* Column 1: About content */}
              <div className="flex flex-col justify-center">
                <p className="text-sm tracking-[0.15em] font-medium text-[#B08A5A]">
                  OUR STORY
                </p>
                <h3
                  id="about-modal-title"
                  className="font-['Cormorant_Garamond'] mt-3 text-3xl md:text-4xl font-medium leading-[1.1] text-[#7A1F1F]"
                >
                  About Kashi Dresses
                </h3>
                <p className="mt-4 text-base leading-relaxed text-[#3A2A22]">
                  For the past 3 years, Kashi Dresses has been helping girls,
                  kids and individuals find beautiful outfits for their special
                  occasions. From festive Garba wear to elegant rental lehengas
                  and drama costumes, every piece is carefully selected.
                </p>
                <p className="mt-3 text-base leading-relaxed text-[#3A2A22]">
                  Our owner and family give personal attention to every
                  customer, so you always leave with an outfit that fits well
                  and feels right.
                </p>

                <ul className="mt-6 space-y-3 text-[#3A2A22]">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-0.5 text-[#7A1F1F] shrink-0" />
                    <span>119 Banganga Main Road Indore, Madhya Pradesh 452015</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 mt-0.5 text-[#7A1F1F] shrink-0" />
                    <span>+91 98264 44415</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 mt-0.5 text-[#7A1F1F] shrink-0" />
                    <span>Mon – Sun, 9:00 AM – 11:00 PM</span>
                  </li>
                </ul>
              </div>

              {/* Column 2: Google Map */}
              <div className="w-full h-72 sm:h-80 lg:h-full lg:min-h-[380px] rounded-xl overflow-hidden border border-[#F3E6D6]">
                <iframe
                  title="Kashi Dresses location"
                  src={MAP_SRC}
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}