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

export default function Gerenciamento() {
  return (
    <div>
      <SEO />

      <Menu />

      <Header src="/images/manage-headline.svg">
        <h1>
          Gerencie a sua comunidade no <span>Telegram</span> com facilidade,
          rapidez e eficiência.
        </h1>

        <Button width="280" height="56">
          Teste grátis por 7 dias
        </Button>
      </Header>

      <main>
        <SectionContent color="#00BEF6" src="/images/group-and-contact.svg">
          <div className="icon">
            <img
              className="icon"
              src="/images/icons/icon-group-chat-blue.svg"
            />
            <small>GRUPOS E CONTATOS</small>
          </div>

          <h2>
            Visualize de forma rápida todos os grupos e contatos que você está
            gerenciando
          </h2>

          <p>
            Através do nosso painel, você terá acesso a todo o histórico de
            dados e contatos dos grupos que você estiver gerenciando para
            oferecer um atendimento WOW.
          </p>

          <div className="buttons">
            <Button width="253" height="56">
              Teste grátis por 7 dias
            </Button>
          </div>
        </SectionContent>

        <img src="/images/filete-blue.png" tabIndex="-1" width="100%" />

        <SectionWhyRocketgram title="Recursos para gerenciar seus grupos">
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
              src="/images/icons/icon-ads-blue.svg"
              alt="Anúncios automatizados"
            />

            <h3>Anúncios automatizados</h3>

            <p>Agende mensagens importantes para postar automaticamente.</p>
          </S.List>

          <S.List>
            <img
              src="/images/icons/icon-b-message-purple.svg"
              alt="Filtro de mensagens"
            />

            <h3>Filtro de mensagens</h3>

            <p>Apague mensagens inapropriadas ou links indesejados.</p>
          </S.List>

          <S.List>
            <img
              src="/images/icons/icon-alert-red.svg"
              alt="Bloqueio de spam"
            />

            <h3>Bloqueio de spam</h3>

            <p>Detectemensagens ofensivas e restrinja postagens de membros.</p>
          </S.List>
        </SectionWhyRocketgram>

        <Banner />
      </main>

      <Footer />
    </div>
  );
}
