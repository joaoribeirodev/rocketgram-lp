import React from "react";

import Menu from "../src/components/Menu";
import Banner from "../src/components/Banner";
import SEO from "../src/components/SEO";
import Footer from "../src/components/Footer";
import Button from "../src/components/Button";

import Header from "../src/components/Header";
import SectionContent from "../src/components/SectionContent";
import SectionWhyRocketgram from "../src/components/SectionWhyRocketgram";

export default function Integracoes() {
  return (
    <div>
      <SEO />

      <Menu />

      <Header src="/images/integration.svg">
        <h1>
          O Rocketgram fica ainda mais poderoso quando integrado com outras
          ferramentas.
        </h1>

        <Button width="280" height="56">
          Teste grátis por 7 dias
        </Button>
      </Header>

      <main>
        <SectionContent color="#FF316F;" src="/images/trigger.svg">
          <div className="icon">
            <img
              className="icon"
              src="/images/icons/icon-integrations-red.svg"
            />
            <small>MAIS PODER PARA VOCÊ</small>
          </div>

          <h2>
            Integre o Rocketgram com as maiores plataformas de e-commerce do
            mercado
          </h2>

          <p>
            Com as integrações, você poderá configurar os robôs para interagir
            com cada gatilho recebido pela sua plataforma de e-commerce
            favorita.
          </p>

          <div className="buttons">
            <Button width="253" height="56">
              Teste grátis por 7 dias
            </Button>
          </div>
        </SectionContent>

        <img src="/images/filete-red.png" tabIndex="-1" width="100%" />

        <SectionWhyRocketgram title="Integre com as principais plataformas do mercado">
          <img src="/images/ecommerce-platforms.png" alt="ecommerce" />
        </SectionWhyRocketgram>

        <Banner />
      </main>

      <Footer />
    </div>
  );
}
