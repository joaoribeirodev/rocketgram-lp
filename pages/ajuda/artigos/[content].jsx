/* eslint-disable no-undef */
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
  let result = [];

  const data = await fetch(
    `${process.env.API_URL}/api/articles/${context.params.content}`
  );

  if (data.ok) {
    const json = await data.json();
    result = json;
  }

  return {
    props: { result },
  };
}

export default Article;
