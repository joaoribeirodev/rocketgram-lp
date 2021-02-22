import React from "react";

import * as S from "./styles";

function SectionCategory() {
  return (
    <S.Container>
      <h2>Pesquisar por categoria</h2>

      <S.Wrap>
        <a href="/ajuda/precos-e-pagamento?v=Preços e pagamento">
          <div>
            <img
              src="/images/icons/icon-billing-green.svg"
              alt="ícone de carteira"
            />
            <p>Preços e pagamento</p>
          </div>
        </a>

        <a href="/ajuda/caracteristicas?v=Características">
          <div>
            <img
              src="/images/icons/icon-stars-blue.svg"
              alt="ícone de carteira"
            />
            <p>Características</p>
          </div>
        </a>

        <a href="/ajuda/integracoes?v=Integrações">
          <div>
            <img
              src="/images/icons/icon-b-integrations-blue.svg"
              alt="ícone de carteira"
            />
            <p>Integrações</p>
          </div>
        </a>

        <a href="/ajuda/primeiros-passos?v=Primeiros passos" className="mr-0">
          <div>
            <img
              src="/images/icons/icon-b-idea-yellow.svg"
              alt="ícone de carteira"
            />
            <p>Primeiros passos</p>
          </div>
        </a>

        <a href="/ajuda/privacidade?v=Privacidade">
          <div>
            <img
              src="/images/icons/icon-lock-blue.svg"
              alt="ícone de carteira"
            />
            <p>Privacidade</p>
          </div>
        </a>

        <a href="/ajuda/minha-conta?v=Minha conta">
          <div>
            <img
              src="/images/icons/icon-emoji-red.svg"
              alt="ícone de carteira"
            />
            <p>Minha conta</p>
          </div>
        </a>

        <a href="/ajuda/gerenciamento?v=Gerenciamento">
          <div>
            <img
              src="/images/icons/icon-b-settings-orange.svg"
              alt="ícone de carteira"
            />
            <p>Gerenciamento</p>
          </div>
        </a>

        <a href="/ajuda/outros?v=Outros" className="mr-0">
          <div>
            <img
              src="/images/icons/icon-options-gray.svg"
              alt="ícone de carteira"
            />
            <p>Outros</p>
          </div>
        </a>
      </S.Wrap>
    </S.Container>
  );
}

export default React.memo(SectionCategory);
