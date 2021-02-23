import React from "react";

import Menu from "../src/components/Menu";
import Banner from "../src/components/Banner";
import SEO from "../src/components/SEO";
import Footer from "../src/components/Footer";
import Button from "../src/components/Button";

import Header from "../src/components/Header";
import SectionContent from "../src/components/SectionContent";
import SectionWhyRocketgram from "../src/components/SectionWhyRocketgram";

import * as S from "../src/components/SectionWhyRocketgram/styles";

export default function Analise() {
  return (
    <div>
      <SEO />

      <Menu />

      <Header src="/images/headline-analyze.svg">
        <h1>
          Acompanhe o crescimento dos seus canais e grupos no
          <span>Telegram</span> e obtenha insights valiosos.
        </h1>

        <Button width="280" height="56">
          Teste grátis por 7 dias
        </Button>
      </Header>

      <main>
        <SectionContent color="#FFB931" src="/images/trend.svg">
          <div className="icon">
            <img className="icon" src="/images/icons/icon-idea-yellow.svg" />
            <small>DESCUBRA AS TENDÊNCIAS</small>
          </div>

          <h2>
            Analise o comportamento dos membros do grupo para obter insights
          </h2>

          <img
            className="img-mobile"
            width="100%"
            loading="lazy"
            src="/images/trend.svg"
            tabIndex={-1}
          />

          <p>
            Descubra tendências a partir dos hábitos de seus contatos para gerar
            dados valiosos e melhorar cada vez mais a sua estratégia de
            crescimento.
          </p>

          <div className="buttons">
            <Button width="253" height="56">
              Teste grátis por 7 dias
            </Button>
          </div>
        </SectionContent>

        <img src="/images/filete-yellow.png" tabIndex="-1" width="100%" />

        <SectionWhyRocketgram title="Recursos para fazer análises eficientes">
          <S.List>
            <img
              src="/images/icons/icon-group-chat-3-orange.svg"
              alt="Resposta inteligente"
            />

            <h3>Relatórios dos grupos</h3>

            <p>
              Veja as interações de seus contatos nos grupos que você gerencia.
            </p>
          </S.List>

          <S.List>
            <img
              src="/images/icons/icon-ads-green.svg"
              alt="Anúncios automatizados"
            />

            <h3>Resultados do anúncio</h3>

            <p>
              Acompanhe as interações e resultados dos anúncios publicados no
              grupo.
            </p>
          </S.List>

          <S.List>
            <img
              src="/images/icons/icon-clients-blue.svg"
              alt="Filtro de mensagens"
            />

            <h3>Atividade de membros</h3>

            <p>
              Veja o histórico de atividade dos membros do seu grupo através de
              uma timeline.
            </p>
          </S.List>

          <S.List>
            <img
              src="/images/icons/icon-bot-config-red.svg"
              alt="Bloqueio de spam"
            />

            <h3>Automatize ações</h3>

            <p>
              Configure seus bots para interagir com o grupo, melhorando a
              comunicação.
            </p>
          </S.List>
        </SectionWhyRocketgram>

        <Banner />
      </main>

      <Footer />
    </div>
  );
}
