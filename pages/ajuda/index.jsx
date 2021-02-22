import React from "react";

import Menu from "../../src/components/Menu";
import Banner from "../../src/components/Banner";
import SEO from "../../src/components/SEO";
import Footer from "../../src/components/Footer";

import HeaderHelp from "../../src/components/HeaderHelp";
import SectionCategory from "../../src/components/SectionCategory";

export default function Precos() {
  return (
    <div>
      <SEO />

      <Menu />

      <HeaderHelp />

      <main>
        <SectionCategory />
        <Banner />
      </main>

      <Footer />
    </div>
  );
}
