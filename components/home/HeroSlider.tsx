"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Scale,
  ShieldCheck,
  Building2,
} from "lucide-react";
import Image from "next/image";

const slides = [
  {
    id: "family",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85",
    alt: "Family law attorney consulting with a client in an office",
    eyebrow: "FAMILY LAW",
    title: "Protecting What Matters Most.",
    subtitle: "Compassionate guidance. Clear legal direction.",
    description:
      "Family matters require more than legal knowledge. We provide thoughtful guidance through difficult decisions, helping you protect your interests and plan your next chapter.",
    primary: "Book a Consultation",
    secondary: "Explore Family Law",
    href: "/services/family-law",
    theme: "bg-[#1A365D]",
    accent: "bg-[#D4AF37]",
    textAccent: "text-[#D4AF37]",
    icon: Scale,
    number: "01",
    label: "Family & Relationships",
  },
  {
    id: "criminal",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=85",
    alt: "Criminal defence lawyer consulting with a client in a courtroom",
    eyebrow: "CRIMINAL DEFENCE",
    title: "Your Rights. Your Defence. Your Future.",
    subtitle: "Strategic representation when it matters most.",
    description:
      "Facing a criminal allegation can be overwhelming. Get clear guidance, a carefully considered defence strategy, and representation focused on protecting your legal rights.",
    primary: "Get Legal Help",
    secondary: "Explore Criminal Defence",
    href: "/services/criminal-defense",
    theme: "bg-[#1A202C]",
    accent: "bg-[#9B2C2C]",
    textAccent: "text-[#FCA5A5]",
    icon: ShieldCheck,
    number: "02",
    label: "Rights & Representation",
  },
  {
    id: "business",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
    alt: "Business law consultation with legal documents and a laptop",
    eyebrow: "BUSINESS LAW",
    title: "Protect Your Business. Move Forward.",
    subtitle: "Commercial clarity for confident decisions.",
    description:
      "From commercial agreements to business disputes, get practical legal guidance designed to help you manage risk, protect your interests, and move forward with confidence.",
    primary: "Discuss Your Business",
    secondary: "Explore Business Law",
    href: "/services/business-law",
    theme: "bg-[#0F172A]",
    accent: "bg-[#059669]",
    textAccent: "text-[#6EE7B7]",
    icon: Building2,
    number: "03",
    label: "Commercial & Corporate",
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const slide = slides[active];
  const Icon = slide.icon;
  const alt = slide.alt ?? `${slide.label} legal services`;

  const previous = () => {
    setActive((current) => (current - 1 + slides.length) % slides.length);
  };

  const next = () => {
    setActive((current) => (current + 1) % slides.length);
  };

  return (
    <section
      aria-label="Our legal services"
      className={`relative isolate overflow-hidden transition-colors duration-500 ${slide.theme}`}
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full border border-white/10" />
        <div className="absolute -right-12 -top-12 h-72 w-72 rounded-full border border-white/10" />
        <div className="absolute bottom-0 right-0 h-2/3 w-1/2 bg-gradient-to-l from-white/[0.06] to-transparent" />
        <div className="absolute bottom-10 right-10 text-[18rem] font-bold leading-none text-white/[0.035]">
          {slide.number}
        </div>
      </div>

      <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-10 lg:px-16">
        {/* Content */}
        <div
          key={slide.id}
          className="animate-in fade-in slide-in-from-bottom-3 duration-500"
        >
          <div className="mb-7 flex items-center gap-3">
            <span className={`h-[2px] w-10 ${slide.accent}`} />
            <p className="text-sm font-semibold tracking-[0.22em] text-white/75">
              {slide.eyebrow}
            </p>
          </div>

          <h1 className="max-w-2xl font-serif text-4xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {slide.title}
          </h1>

          <h2
            className={`mt-6 text-lg font-medium sm:text-xl ${slide.textAccent}`}
          >
            {slide.subtitle}
          </h2>

          <p className="mt-5 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
            {slide.description}
          </p>

          {/* CTA buttons */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className={`inline-flex min-h-12 items-center justify-center gap-2 rounded px-6 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${slide.accent}`}
            >
              {slide.primary}
              <ArrowRight size={18} />
            </Link>

            <Link
              href={slide.href}
              className="inline-flex min-h-12 items-center justify-center rounded border border-white/60 px-6 py-3 font-medium text-white transition hover:bg-white hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {slide.secondary}
            </Link>
          </div>

          <p className="mt-8 text-sm text-white/55">
            Confidential enquiries · Professional legal guidance
          </p>
        </div>

        {/* Visual panel */}
        <div
          key={`${slide.id}-visual`}
          className="relative hidden min-h-[390px] items-center justify-center md:flex"
        >
          <div className="relative aspect-[4/5] w-full max-w-[390px] overflow-hidden border border-white/15 bg-white/[0.04]">
            {/* Background image */}
            <Image
              src={slide.image}
              alt={alt}
              fill
              sizes="(min-width: 1024px) 390px, 42vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority={active === 0}
            />

            {/* Dark overlay for text readability */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/95 via-[#0F172A]/35 to-[#0F172A]/20"
            />

            {/* Decorative frame */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-5 border border-white/30"
            />

            {/* Practice icon */}
            <div className="absolute left-10 top-10 flex h-16 w-16 items-center justify-center border border-white/40 bg-black/20 backdrop-blur-sm">
              <Icon
                size={34}
                strokeWidth={1.3}
                className={slide.textAccent}
                aria-hidden="true"
              />
            </div>

            {/* Slide number */}
            <span className="absolute right-10 top-10 font-serif text-5xl text-white/70">
              {slide.number}
            </span>

            {/* Bottom content */}
            <div className="absolute bottom-10 left-10 right-10 border-t border-white/40 pt-6">
              <p
                className={`text-xs font-semibold tracking-[0.2em] ${slide.textAccent}`}
              >
                PRACTICE AREA {slide.number}
              </p>

              <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-white">
                {slide.label}
              </h2>

              <div className={`mt-5 h-1 w-14 ${slide.accent}`} />
            </div>
          </div>
        </div>
      </div>

      {/* Slider controls */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 pb-8 md:px-10 lg:px-16">
        <div className="flex items-center gap-3">
          {slides.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show ${item.eyebrow} slide`}
              aria-current={active === index ? "true" : undefined}
              className={`h-1.5 transition-all duration-300 ${
                active === index
                  ? "w-12 bg-white"
                  : "w-6 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}

          <span className="ml-3 text-sm tracking-widest text-white/60">
            {slide.number} / 03
          </span>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={previous}
            aria-label="Previous slide"
            className="flex h-11 w-11 items-center justify-center border border-white/25 text-white transition hover:bg-white hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            <ArrowLeft size={18} />
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="flex h-11 w-11 items-center justify-center border border-white/25 text-white transition hover:bg-white hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
