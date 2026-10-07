import { useState } from "react";
import { ArrowRight } from "lucide-react";

/* ------------------------------------------------------------------
   Add your photos here. Either import them like in About.jsx:
     import g1 from "../assets/gallery/g1.webp";
   and use `src: g1`, or put them in /public/images/gallery/ and use
   the string path as below.
   category must match one of the filter names in CATEGORIES.
------------------------------------------------------------------- */
const PHOTOS = [
  { src: "/images/gallery/1.webp", alt: "Colourful lehengas on display", category: "Lehengas" },
  { src: "/images/gallery/2.webp", alt: "Store interior with warm lighting", category: "Store Interior" },
  { src: "/images/gallery/3.webp", alt: "Kids wear hanging on a rail", category: "Kids Wear" },
  { src: "/images/gallery/4.webp", alt: "Embroidered chaniya choli", category: "Chaniya Choli" },
  { src: "/images/gallery/5.webp", alt: "Red festive outfits", category: "Dresses" },
  { src: "/images/gallery/6.webp", alt: "Folded outfits on shelves", category: "Store Interior" },
  { src: "/images/gallery/7.webp", alt: "Garba wear collection", category: "Chaniya Choli" },
  { src: "/images/gallery/8.webp", alt: "Trial area with mirror", category: "Store Interior" },
];

const CATEGORIES = ["All", "Lehengas", "Chaniya Choli", "Dresses", "Kids Wear", "Store Interior"];

const INITIAL_COUNT = 8;

export default function ImageGallery() {
  const [active, setActive] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filtered = active === "All" ? PHOTOS : PHOTOS.filter((p) => p.category === active);
  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);

  const changeCategory = (cat) => {
    setActive(cat);
    setShowAll(false);
  };

  return (
    <section
      id="photo-gallery-section-layout"
      className="scroll-mt-20 bg-[#FBF7F1] text-[#2B1A14] py-12 lg:py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-[#B08A5A]/60" />
            <p className="text-sm tracking-[0.15em] font-medium text-[#B08A5A]">OUR STORE</p>
            <span className="h-px w-8 bg-[#B08A5A]/60" />
          </div>
          <h2 className="font-['Cormorant_Garamond'] mt-2 text-4xl md:text-5xl font-medium leading-[1.1] text-[#7A1F1F]">
            Store Gallery
          </h2>
          <p className="mt-4 text-base text-[#3A2A22]">
            Take a glimpse of our store and explore our beautiful collection in person.
          </p>
        </div>

        {/* Filter chips */}
        <div className="mt-6 flex flex-wrap justify-center gap-3" role="tablist" aria-label="Gallery categories">
          {CATEGORIES.map((cat) => {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => changeCategory(cat)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#7A1F1F] ${
                  isActive
                    ? "bg-[#7A1F1F] text-white"
                    : "bg-[#F3EEE7] text-[#2B1A14] hover:bg-[#EADBC8]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Grid: first row of 4 is taller, second row shorter, repeating */}
        {visible.length > 0 ? (
          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-3.5">
            {visible.map((photo, i) => (
              <div
                key={photo.src + i}
                className={`overflow-hidden rounded-2xl bg-[#F3E6D6] ${
                  i % 8 < 4 ? "h-44 sm:h-56 lg:h-60" : "h-36 sm:h-44 lg:h-44"
                }`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-10 text-center text-[#3A2A22]">No photos in this category yet.</p>
        )}

        {/* View more / less */}
        {filtered.length > INITIAL_COUNT && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 rounded-full border border-[#7A1F1F] text-[#7A1F1F] hover:bg-[#7A1F1F] hover:text-white text-sm font-medium px-8 py-3.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#7A1F1F]"
            >
              {showAll ? "Show Fewer Photos" : "View More Photos"}
              <ArrowRight className={`w-4 h-4 transition-transform ${showAll ? "-rotate-90" : ""}`} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}