/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import ReactHtmlParser from "react-html-parser";

import Menu from "../../../src/components/Menu";
import Banner from "../../../src/components/Banner";
import SEO from "../../../src/components/SEO";
import Footer from "../../../src/components/Footer";

import SectionArticleTwo from "../../../src/components/SectionArticleTwo";

function Article({ result }) {
  return (
    <div>
      <SEO />

      <Menu />

      <main>
        <SectionArticleTwo>{ReactHtmlParser(result.content)}</SectionArticleTwo>
        <Banner />
      </main>

      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const data = await fetch(
    `http://localhost:3000/api/articles/${context.params.content}`
  );
  const json = await data.json();
  const result = json;

  return {
    props: { result },
  };
}

export default Article;
