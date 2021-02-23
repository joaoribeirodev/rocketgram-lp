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

export default function Organize() {
  return (
    <div>
      <SEO />

      <Menu />

      <Header src="/images/headline-organize.svg">
        <h1>
          Organize e agilize o atendimento dos seus clientes no{" "}
          <span>Telegram</span> através de chatbots.
        </h1>

        <Button width="280" height="56">
          Teste grátis por 7 dias
        </Button>
      </Header>

      <main>
        <SectionContent color="#7F31FF" src="/images/bot-automation.svg">
          <div className="icon">
            <img
              className="icon"
              src="/images/icons/icon-bot-config-purple.svg"
            />
            <small>AUTOMAÇÃO DE BOTS</small>
          </div>

          <h2>Configure seus bots e ganhe mais agilidade no atendimento</h2>

          <img
            className="img-mobile"
            width="100%"
            loading="lazy"
            src="/images/bot-automation.svg"
            tabIndex={-1}
          />

          <p>
            Programe seu bot para responder às principais dúvidas dos usuários e
            gatilhos gerados pelas plataformas de vendas, aumentendo a
            eficiência e reduzindo o tempo de resposta.
          </p>

          <div className="buttons">
            <Button width="253" height="56">
              Teste grátis por 7 dias
            </Button>
          </div>
        </SectionContent>

        <img src="/images/filete-purple.png" tabIndex="-1" width="100%" />

        <SectionWhyRocketgram title="Recursos para organizar sua comunidade">
          <S.List>
            <img
              src="/images/icons/icon-automatic-message-yellow.svg"
              alt="Resposta inteligente"
            />

            <h3>Resposta inteligente</h3>

            <p>
              Responda automaticamente aos membros do grupo com mensagens
              pré-configuradas.
            </p>
          </S.List>

          <S.List>
            <img
              src="/images/icons/icon-ads-red.svg"
              alt="Anúncios automatizados"
            />

            <h3>Disparo por gatilhos</h3>

            <p>
              Use os gatilhos da sua plataforma de e-commerce favorita para
              disparar ações.
            </p>
          </S.List>

          <S.List>
            <img
              src="/images/icons/icon-clients-blue.svg"
              alt="Filtro de mensagens"
            />

            <h3>Filtro de mensagens</h3>

            <p>Detectemensagens ofensivas e restrinja postagens de membros.</p>
          </S.List>

          <S.List>
            <img
              src="/images/icons/icon-bot-config-red.svg"
              alt="Bloqueio de spam"
            />

            <h3>Bloqueio de spam</h3>

            <p>Apague mensagens inapropriadas ou links indesejados.</p>
          </S.List>
        </SectionWhyRocketgram>

        <Banner />
      </main>

      <Footer />
    </div>
  );
}
