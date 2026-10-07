// lucide-react has no WhatsApp/brand icon, so this small SVG matches its stroke style.
export default function WhatsAppIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3.5 20.5l1.3-4.2A8.5 8.5 0 1 1 8 19.4l-4.5 1.1z" />
      <path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1.2-1.6-2-1-1 .8c-1-.4-2.1-1.5-2.5-2.5l.8-1-1-2L9 8.5z" />
    </svg>
  );
}