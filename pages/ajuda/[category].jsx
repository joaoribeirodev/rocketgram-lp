/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

import Menu from "../../src/components/Menu";
import Banner from "../../src/components/Banner";
import SEO from "../../src/components/SEO";
import Footer from "../../src/components/Footer";

import SectionArticles from "../../src/components/SectionArticles";
import Topic from "../../src/components/Topic";

function Category({ result }) {
  return (
    <div>
      <SEO />

      <Menu />

      <main>
        <SectionArticles>
          {result.map((item) => (
            <Topic
              key={Math.random()}
              title={item.title}
              description={item.description}
              destiny={{ to: item.link, value: "Leia mais" }}
            />
          ))}
        </SectionArticles>
        <Banner />
      </main>

      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const data = await fetch(
    `http://localhost:3000/api/categories/${context.params.category}`
  );
  const json = await data.json();
  const result = json;

  return {
    props: { result },
  };
}

export default Category;
