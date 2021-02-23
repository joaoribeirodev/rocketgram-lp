import React from "react";

import Menu from "../src/components/Menu";
import Banner from "../src/components/Banner";
import SEO from "../src/components/SEO";
import Footer from "../src/components/Footer";
import Button from "../src/components/Button";

import Header from "../src/components/Header";
import SectionContent from "../src/components/SectionContent";
import SectionAtende from "../src/components/SectionAtende";

export default function Home() {
  return (
    <div>
      <SEO />

      <Menu />

      <Header src="/images/ilustration.svg">
        <h1>
          Gerencie seus canais e grupos no <span>Telegram</span> de forma
          descomplicada e automatizada.
        </h1>

        <Button width="280" height="56">
          Teste grátis por 7 dias
        </Button>
      </Header>

      <main>
        <SectionContent color="#46bf1b" src="/images/manage.svg">
          <div className="icon">
            <img className="icon" src="/images/icons/icon-settings-green.svg" />
            <small>GERENCIE</small>
          </div>

          <h2>
            Faça a gestão dos seus grupos com facilidade, rapidez e eficiência
          </h2>

          <img
            className="img-mobile"
            width="100%"
            loading="lazy"
            src="/images/manage.svg"
            tabIndex={-1}
          />

          <p>
            Nossas ferramentas são projetadas para atender com qualidade
            qualquer canal ou grupo no Telegram. Planeje, configure os bots e
            acompanhe os resultados.
          </p>

          <div className="buttons">
            <Button width="253" height="56">
              Teste grátis por 7 dias
            </Button>

            <Button
              width="253"
              height="56"
              outline
              bg="transparent"
              color="4882EB"
            >
              Mais sobre gerenciamento
            </Button>
          </div>
        </SectionContent>

        <SectionContent reverse color="#FF316F" src="/images/analyze.svg">
          <div className="icon">
            <img className="icon" src="/images/icons/icon-search-pink.svg" />
            <small>ANALISE</small>
          </div>

          <h2>Acompanhe as métricas dos seus grupos no Telegram</h2>

          <img
            className="img-mobile"
            width="100%"
            loading="lazy"
            src="/images/analyze.svg"
            tabIndex={-1}
          />

          <p>
            Obtenha dados de atividades nos seus grupos e canais do Telegram
            para impulsionar as suas estratégias de crescimento.
          </p>

          <div className="buttons">
            <Button width="253" height="56">
              Teste grátis por 7 dias
            </Button>

            <Button
              width="253"
              height="56"
              outline
              bg="transparent"
              color="4882EB"
            >
              Mais sobre métricas
            </Button>
          </div>
        </SectionContent>

        <SectionContent color="#FFB931" src="/images/organize.svg">
          <div className="icon">
            <img
              className="icon"
              src="/images/icons/icon-bot-config-yellow.svg"
            />
            <small>ORGANIZE</small>
          </div>

          <h2>
            Crie robôs para organizar seu atendimento de forma automatizada
          </h2>

          <img
            className="img-mobile"
            width="100%"
            loading="lazy"
            src="/images/organize.svg"
            tabIndex={-1}
          />

          <p>
            Ofereça uma experiência personalizada e eficiente para os seus
            clientes através dos nossos robôs de atendimento.
          </p>

          <div className="buttons">
            <Button width="253" height="56">
              Teste grátis por 7 dias
            </Button>

            <Button
              width="253"
              height="56"
              outline
              bg="transparent"
              color="4882EB"
            >
              Mais sobre organização
            </Button>
          </div>
        </SectionContent>

        <SectionContent reverse color="#77CCFC" src="/images/integrations.svg">
          <div className="icon">
            <img
              className="icon"
              src="/images/icons/icon-integrations-blue.svg"
            />
            <small>INTEGRE</small>
          </div>

          <h2>
            Conecte o Rocketgram às principais plataformas de e-commerce do
            mercado
          </h2>

          <img
            className="img-mobile"
            width="100%"
            loading="lazy"
            src="/images/integrations.svg"
            tabIndex={-1}
          />

          <p>
            Configure os gatilhos e eventos para garantir a execução da sua
            estratégia para obter resultados de forma ágil e otimizada.
          </p>

          <div className="buttons">
            <Button width="253" height="56">
              Teste grátis por 7 dias
            </Button>

            <Button
              width="253"
              height="56"
              outline
              bg="transparent"
              color="4882EB"
            >
              Mais sobre integrações
            </Button>
          </div>
        </SectionContent>

        <SectionAtende />

        <Banner />
      </main>

      <Footer />
    </div>
  );
}
