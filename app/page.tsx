import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page | New Justice",
  description: "This is the home page of our website",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Home Page | New Justice",
    description: "This is the home page of our website",
    url: `${process.env.My_Domain}`,
    siteName: "New Justice",
    images: [
      {
        url: "https://www.newjustice.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "New Justice",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <h1>Hello, Home Page!</h1>
    </>
  );
}
