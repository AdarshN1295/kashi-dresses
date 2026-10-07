import { useState } from "react";
import {
  ArrowRight, Shirt, ShieldCheck, Heart, Sparkles, Coins, MapPin, Flower2,
} from "lucide-react";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import Header, { WHATSAPP_URL } from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import CategoryModal from "../components/CategoryModal";
import desktopBanner from "../assets/banners/homepage.webp";
import mobileBanner from "../assets/banners/mobile-banner.webp";

import dramaImage from "../assets/category/drama-dresses.webp";
import rentedLehenga from "../assets/category/rented-lehenga.webp";
import garbaDresses from "../assets/category/garba-dresses.webp";
import contactCTA from "../assets/contact/bg.webp"
import ImageGallery from "../components/ImageGallery";

import policeImage from "../assets/drama/police.webp"
import armyImage from "../assets/drama/army.webp"
import doctorImage from "../assets/drama/doctor.webp"
import bharatMataImage from "../assets/drama/bharat-mata.webp"
import gandhiJiImage from "../assets/drama/gandhi-ji.webp"
import radhaKrishnaImage from "../assets/drama/radha-krishna.webp"
import kalkaMataImage from "../assets/drama/kalka-mata.webp"
import santaImage from "../assets/drama/santa.webp"
import vegetablsImage from "../assets/drama/vegetables.webp"
import fruitsImage from "../assets/drama/fruits.webp"
import AnimalImage from "../assets/drama/animal.webp"

import gownImage from "../assets/lehenga/gown.webp"
import lehengaaImage from "../assets/lehenga/lehengaa.webp"
import saariImage from "../assets/lehenga/saari.webp"
import bridalImage from "../assets/lehenga/bridal.webp"

import chaniyaImage from "../assets/garba/chaniya.webp"
import kathiyawadiImage from "../assets/garba/kathiyawadi.webp"
import digitalImage from "../assets/garba/digital.webp"
import simpleImage from "../assets/garba/simple.webp"
import pastelImage from "../assets/garba/pastel.webp"
import kediyaImage from "../assets/garba/kediya.webp"
import kidsImage from "../assets/garba/kids.webp"
import mensImage from "../assets/garba/mens.webp"

import oxiJewelleryImage from "../assets/garba/oxi.webp"
import goldJewelleryImage from "../assets/garba/gold.webp"

/* Put these images in /public/images/ (or change the paths) */
const IMG = {
  drama: dramaImage,
  lehenga: rentedLehenga,
  garba: garbaDresses,
  royalRed: "/images/royal-red-lehenga.jpg",
  garbaSet: "/images/garba-set.jpg",
  krishna: "/images/krishna-costume.jpg",
  partyWear: "/images/party-wear-lehenga.jpg",
  cta: contactCTA,
};

const CATEGORIES = [
  {
    title: "Drama & Costumes",
    desc: "Mythological, historical, school & fancy dress",
    img: IMG.drama,
    align: "left",
    subcategories: [
      { label: "Police", img: policeImage },
      { label: "Army", img: armyImage },
      { label: "Bharat Mata", img: bharatMataImage },
      { label: "Doctor", img: doctorImage },
      { label: "Gandhi Ji", img: gandhiJiImage },
      { label: "Radha-Krishna", img: radhaKrishnaImage },
      { label: "Kalka Mata", img: kalkaMataImage },
      { label: "Santa Clause", img: santaImage },
      { label: "Vegetables", img: vegetablsImage },
      { label: "Fruits", img: fruitsImage },
      { label: "Animal", img: AnimalImage },
    ],
  },
  {
    title: "Rental Lehengas",
    desc: "Bridal, party wear & traditional",
    img: IMG.lehenga,
    align: "right",
    subcategories: [
      { label: "Evening Gown", img: gownImage },
      { label: "Saari", img: saariImage },    
      { label: "Lehenga", img: lehengaaImage },
      { label: "Bridal", img: bridalImage },
    ],
  },
  {
    title: "Garba & Navratri",
    desc: "Chaniya choli, traditional dresses, kids & group sets",
    img: IMG.garba,
    align: "right",
    subcategories: [
      { label: "Chaniya Choli", img: chaniyaImage },
      { label: "Kathiawadi", img: kathiyawadiImage },
      { label: "Digital", img: digitalImage },
      { label: "Simple & Plain", img: simpleImage },
      { label: "Pastel Color", img: pastelImage },
      { label: "Kediya", img: kediyaImage },
      { label: "Kids", img: kidsImage },
      { label: "Mens", img: mensImage },
    ],
    extraSections: [
    {
      heading: "Jewellery",
      items: [
        { label: "Oxidised Jewellery", img: oxiJewelleryImage },
        { label: "Golden Jewellery", img: goldJewelleryImage },
      ],
    },
  ],
  },
];

const FEATURED = [
  { name: "Royal Red Lehenga", tag: "For Weddings & Functions", img: IMG.royalRed },
  { name: "Traditional Garba Set", tag: "Navratri Special", img: IMG.garbaSet },
  { name: "Krishna Costume", tag: "Drama & Cultural Events", img: IMG.krishna },
  { name: "Party Wear Lehenga", tag: "For Special Occasions", img: IMG.partyWear },
];

const HIGHLIGHTS = [
  { icon: Shirt, title: "Wide Variety", desc: "for all age groups" },
  { icon: Sparkles, title: "Well Maintained", desc: "clean & good condition" },
  { icon: Coins, title: "Affordable Rental", desc: "premium looks within budget" },
  { icon: MapPin, title: "Easy Pickup", desc: "convenient location" },
];

const STEPS = [
  { title: "Choose Your Outfit", desc: "Select the outfit you love and share your preferred size and occasion with us." },
  { title: "Check Availability", desc: "Contact us on WhatsApp or call us to confirm availability, rental details and pricing." },
  { title: "Confirm Your Rental", desc: "Once everything is confirmed, we'll reserve your outfit for the required date" },
  { title: "Pickup & Enjoy", desc: "Collect your outfit from Kashi Dresses, get ready for your occasion and return it as agreed." },
];

const PHONE_URL = "tel:+919826444415";
const INSTAGRAM_URL = "https://www.instagram.com/kashi_fashion_gallary";

const serif = "font-['Cormorant_Garamond']";

const LENIS_OPTIONS = {
  autoRaf: true,
  lerp: 0.08,
  smoothWheel: true,
  anchors: { offset: -80 },
};

function SectionTitle({ children }) {
  return (
    <div className="text-center">
      <h2 className={`${serif} text-4xl md:text-[42px] font-medium text-[#3A1410]`}>{children}</h2>
      <div className="mt-2 flex items-center justify-center gap-3 text-[#B08A5A]">
        <span className="h-px w-12 bg-[#D9C3A5]" />
        <Flower2 className="w-4 h-4" strokeWidth={1.4} />
        <span className="h-px w-12 bg-[#D9C3A5]" />
      </div>
    </div>
  );
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <ReactLenis root options={LENIS_OPTIONS}>
      <main className="bg-[#FBF7F1] text-[#2B1A14]">
        <Header />
        {/* HERO */}
        <section className="relative overflow-hidden">
          <picture>
            <source media="(min-width: 768px)" srcSet={desktopBanner} />
            <img
              src={mobileBanner}
              alt="Rental lehengas, Garba dresses and drama costumes at Kashi Dresses"
              fetchPriority="high"
              className="absolute inset-0 w-full h-full object-cover object-right"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-[#F6EEE3] via-[#F6EEE3]/90 md:via-[#F6EEE3]/70 to-transparent" />
          <div className="relative px-4 sm:px-6 lg:px-10 py-20 md:py-28 lg:py-32 w-full">
            <div className="page-width">
              <p className="text-sm tracking-[0.2em] text-[#9A6B3F]">TRADITIONAL&nbsp; | &nbsp;DRAMA&nbsp; | &nbsp;FESTIVE</p>
              <h1 className={`${serif} mt-5 text-5xl md:text-6xl font-medium leading-[1.05] text-[#3A1410]`}>
                Beautiful Outfits for Every Occasion
              </h1>
              <p className="mt-6 text-base md:text-lg leading-relaxed text-[#2B1A14]">
                Drama costumes, rental lehengas and Garba dresses to make your special moments even more memorable.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"
                  className="inline-flex text-white items-center gap-2 rounded-md bg-[#7A1F1F] hover:bg-[#5E1515] px-6 py-3 text-sm font-medium transition-colors">
                  <FontAwesomeIcon icon={faWhatsapp} className="text-lg" /> Chat on WhatsApp
                </a>
                <a href={PHONE_URL}
                  className="inline-flex text-[#7A1F1F] items-center gap-2 rounded-md border border-[#7A1F1F] hover:bg-white hover:text-[#3A1410] px-6 py-3 text-sm font-medium transition-colors">
                  <FontAwesomeIcon icon={faPhone} /> Call Us
                </a>
                <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer"
                  className="inline-flex items-center text-[#7A1F1F] gap-2 rounded-md border border-[#7A1F1F] hover:bg-white hover:text-[#3A1410] px-6 py-3 text-sm font-medium transition-colors">
                  <FontAwesomeIcon icon={faInstagram} className="text-lg" /> Instagram
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm">
                {[[Shirt, "Wide Variety"], [ShieldCheck, "Well Maintained"], [Heart, "Affordable Rental"]].map(([Icon, label]) => (
                  <span key={label} className="inline-flex items-center gap-2">
                    <Icon className="w-5 h-5 text-[#7A1F1F]" strokeWidth={1.5} /> {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SHOP BY CATEGORY */}
        <section id="collection-section-layout" className="w-full px-4 sm:px-6 lg:px-8 py-16">
          <SectionTitle>Shop by Category</SectionTitle>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 page-width">
            {CATEGORIES.map((c) => (
              <button
                type="button"
                key={c.title}
                onClick={() => setActiveCategory(c)}
                className="group relative h-64 rounded-xl overflow-hidden text-left focus-visible:ring-2 focus-visible:ring-[#7A1F1F]"
              >
                <img src={c.img} alt={c.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className={`absolute inset-0 ${c.align === "left"
                  ? "bg-gradient-to-r from-[#2A120C]/85 via-[#2A120C]/40 to-transparent"
                  : "bg-gradient-to-l from-[#2A120C]/85 via-[#2A120C]/40 to-transparent"}`} />
                <div className={`relative h-full flex flex-col justify-center p-7 text-white ${c.align === "right" ? "items-end" : ""}`}>
                  <div className="max-w-[60%]">
                    <h3 className={`${serif} text-3xl leading-tight`}>{c.title}</h3>
                    <p className="mt-3 text-xs leading-relaxed text-white/85">{c.desc}</p>
                    <span className="mt-5 inline-flex w-7 h-7 items-center justify-center rounded-full bg-white text-[#3A1410]">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Modal rendered once, outside the loop */}
        <CategoryModal category={activeCategory} onClose={() => setActiveCategory(null)} />

        {/* FEATURED COLLECTION
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-12 pb-10">
          <div className="relative">
            <SectionTitle>Featured Collection</SectionTitle>
            <a href="/collection"
              className="hidden md:inline-flex absolute right-0 top-3 items-center gap-2 text-sm text-[#7A1F1F] hover:underline">
              View All <ArrowRight className="w-4 h-4" />
            </a>
          </div>  
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURED.map((p) => (
              <a key={p.name} href="/collection" className="group">
                <div className="aspect-[5/4] rounded-md overflow-hidden bg-[#EFE3D3]">
                  <img src={p.img} alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="mt-3 flex items-center justify-between px-1">
                  <div>
                    <h3 className="text-sm font-semibold text-[#2B1A14]">{p.name}</h3>
                    <p className="text-xs text-[#8A7563] mt-0.5">{p.tag}</p>
                  </div>
                  <span className="w-8 h-8 rounded-full border border-[#7A1F1F] text-[#7A1F1F] flex items-center justify-center group-hover:bg-[#7A1F1F] group-hover:text-white transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section> */}

        {/* HIGHLIGHTS BAND */}
        <section className="bg-[#F3E6D6] w-full">
          <div className="page-width px-4 sm:px-6 lg:px-10 py-6 grid grid-cols-2 lg:grid-cols-4 gap-y-6">
            {HIGHLIGHTS.map(({ icon: Icon, title, desc }, i) => (
              <div key={title}
                className={`flex items-center justify-center gap-4 px-3 ${i > 0 ? "lg:border-l lg:border-[#D9C3A5]" : ""}`}>
                <Icon className="w-9 h-9 text-[#9A6B3F] shrink-0" strokeWidth={1.2} />
                <div>
                  <p className="text-sm font-semibold text-[#3A1410]">{title}</p>
                  <p className="text-xs text-[#8A7563]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <About />

        {/* HOW IT WORKS */}
        <section id="rental-process-section-layout" className="w-full px-4 sm:px-6 py-14">
          <SectionTitle>How Renting From Kashi Works</SectionTitle>
          <ol className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 page-width">
            {STEPS.map((s, i) => (
              <li key={s.title} className="relative text-center">
                <span className="mx-auto w-14 h-14 rounded-full bg-[#F1E2CF] text-[#9A6B3F] flex items-center justify-center text-base">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {i < STEPS.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-5 -right-5 w-3.5 h-3.5 text-[#C9B092]" />
                )}
                <h3 className="mt-4 font-semibold text-[#2B1A14]">{s.title}</h3>
                <p className="mt-2 text-sm text-[#8A7563] max-w-[13rem] mx-auto leading-relaxed">{s.desc}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* CTA BANNER */}
        <section id="contact-section-layout" className="w-full px-4 sm:px-6 lg:px-8 pb-6">
          <div className="relative rounded-xl overflow-hidden page-width">
            <img src={IMG.cta} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#4A2416] via-[#4A2416]/85 to-transparent" />
            <div className="relative px-6 md:px-12 py-10 text-white max-w-xl">
              <h2 className={`${serif} text-3xl md:text-4xl`}>Let's Find the Right Outfit for You.</h2>
              <p className="mt-3 text-sm md:text-base text-white/90">
                Looking for a Garba dress, rental lehenga or costume for a special occasion? Get in touch with us and we'll be happy to help.
              </p>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#7A1F1F] hover:bg-[#5E1515] px-6 py-3 text-sm font-medium transition-colors">
                <FontAwesomeIcon icon={faWhatsapp} className="text-lg" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
        {/* <ImageGallery /> */}

        <Footer />
      </main>
    </ReactLenis>
  );
}