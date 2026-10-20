import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about our company, mission, and values. Discover how we can help you achieve your goals and why we are the right choice for your needs.",
  alternates: {
    canonical: "/about",
  },
};

const AboutPage = () => {
  return (
    <>
      <section>
        <h1>About Us</h1>
      </section>
    </>
  );
};

export default AboutPage;
