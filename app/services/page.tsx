import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "This is the services page of our website",
  alternates: {
    canonical: "/services",
  },
};

const ServicesPage = () => {
  return <div>ServicesPage</div>;
};

export default ServicesPage;
