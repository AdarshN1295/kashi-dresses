import { MapPin, Phone, Clock } from "lucide-react";

// Replace with your shop's address, or paste the src from Google Maps > Share > Embed a map
const MAP_SRC =
  "https://www.google.com/maps?q=" +
  encodeURIComponent("Kashi Dresses, YOUR FULL ADDRESS HERE") +
  "&output=embed";

export default function AboutDetails() {
  return (
    <section
      id="about-details"
      className="bg-[#FBF7F1] text-[#2B1A14] py-16 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Column 1: About content */}
        <div>
          <p className="text-sm tracking-[0.15em] font-medium text-[#B08A5A]">
            OUR STORY
          </p>
          <h2 className="font-['Cormorant_Garamond'] mt-3 text-4xl md:text-5xl font-medium leading-[1.1] text-[#7A1F1F]">
            About Kashi Dresses
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#3A2A22]">
            For the past 3 years, Kashi Dresses has been helping girls, kids
            and individuals find beautiful outfits for their special occasions.
            From festive Garba wear to elegant rental lehengas and drama
            costumes, every piece is carefully selected.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#3A2A22]">
            Our owner and family give personal attention to every customer, so
            you always leave with an outfit that fits well and feels right.
          </p>

          <ul className="mt-8 space-y-4 text-[#3A2A22]">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-0.5 text-[#7A1F1F] shrink-0" />
              <span>Your shop address here</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="w-5 h-5 mt-0.5 text-[#7A1F1F] shrink-0" />
              <span>+91 00000 00000</span>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="w-5 h-5 mt-0.5 text-[#7A1F1F] shrink-0" />
              <span>Mon – Sun, 10:00 AM – 8:00 PM</span>
            </li>
          </ul>
        </div>

        {/* Column 2: Google Map */}
        <div className="w-full h-80 sm:h-96 lg:h-[460px] rounded-2xl overflow-hidden border border-[#F3E6D6] shadow-lg">
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
    </section>
  );
}