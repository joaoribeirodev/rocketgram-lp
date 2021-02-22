import React from "react";

import Menu from "../src/components/Menu";
import Banner from "../src/components/Banner";
import SEO from "../src/components/SEO";
import Footer from "../src/components/Footer";

import HeaderPrices from "../src/components/HeaderPrices";
import SectionTestimonials from "../src/components/SectionTestimonials";
import FAQ from "../src/components/FAQ";

export default function Precos() {
  return (
    <div>
      <SEO />

      <Menu />

      <HeaderPrices />

      <main>
        <SectionTestimonials />
        <FAQ />
        <Banner />
      </main>

      <Footer />
    </div>
  );
}
