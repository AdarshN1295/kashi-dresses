import { useEffect, useRef } from "react";
import { X } from "lucide-react";

/* Same circular card used for every subcategory and extra section */
function SubCard({ item }) {
  return (
    <a
      href={item.href || "#"}
      className="group flex flex-col items-center text-center"
    >
      <span className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-[#EADBC8] group-hover:border-[#7A1F1F] transition-colors">
        <img
          src={item.img}
          alt={item.label}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </span>
      <span className="mt-3 text-sm text-[#2B1A14] group-hover:text-[#7A1F1F]">
        {item.label}
      </span>
    </a>
  );
}

const GRID = "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-8";

export default function CategoryModal({ category, onClose }) {
  const panelRef = useRef(null);

  // Close on Escape + lock background scroll while open
  useEffect(() => {
    if (!category) return;

    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);

    const prevBody = document.body.style.overflow;
    const prevHtml = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    // Pause smooth-scroll libraries (Lenis) if they expose an instance
    window.lenis?.stop?.();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevBody;
      document.documentElement.style.overflow = prevHtml;
      window.lenis?.start?.();
    };
  }, [category, onClose]);

  // Keep wheel/touch events inside the panel so the page's scroll
  // handlers (Lenis, Locomotive, etc.) never see them.
  // Native listeners are used because React's synthetic events fire too late.
  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    const stop = (e) => e.stopPropagation();
    el.addEventListener("wheel", stop, { passive: true });
    el.addEventListener("touchmove", stop, { passive: true });
    return () => {
      el.removeEventListener("wheel", stop);
      el.removeEventListener("touchmove", stop);
    };
  }, [category]);

  if (!category) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-[#2A120C]/70 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={category.title}
    >
      <div
        ref={panelRef}
        data-lenis-prevent
        data-lenis-prevent-wheel
        data-lenis-prevent-touch
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto overscroll-contain rounded-2xl bg-[#FBF7F1] border border-[#EADBC8] p-6 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 p-2 rounded-full text-[#7A1F1F] hover:bg-[#EADBC8]/60 focus-visible:ring-2 focus-visible:ring-[#7A1F1F]"
        >
          <X className="w-6 h-6" />
        </button>

        <h3 className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl text-[#7A1F1F] text-center">
          {category.title}
        </h3>
        <div className="mx-auto mt-3 h-px w-16 bg-[#B08A5A]" />

        {/* Normal subcategory cards */}
        <div className={`mt-8 ${GRID}`}>
          {category.subcategories.map((s) => (
            <SubCard key={s.label} item={s} />
          ))}
        </div>

        {/* Extra sections (e.g. Jewellery), only if the category has them */}
        {category.extraSections?.map((section) => (
          <div key={section.heading} className="mt-10">
            <h4 className="font-['Cormorant_Garamond'] text-2xl sm:text-3xl text-[#7A1F1F] text-center">
              {section.heading}
            </h4>
            <div className="mx-auto mt-3 h-px w-12 bg-[#B08A5A]" />
            <div className={`mt-6 ${GRID}`}>
              {section.items.map((item) => (
                <SubCard key={item.label} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}