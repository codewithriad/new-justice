import type { Metadata } from "next";
import HeroSlider from "@/components/home/HeroSlider";

export const metadata: Metadata = {
  title: "Justice | Trusted Legal Services",
  description:
    "Explore professional family law, criminal defence, and business law services. Contact our legal team to discuss your needs.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Justice | Trusted Legal Services",
    description:
      "Professional legal guidance for individuals, families, and businesses.",
    type: "website",
    images: ["/images/home-og.jpg"],
  },
};

export default function HomePage() {
  return (
    <main>
      <HeroSlider />
    </main>
  );
}
