import React from "react";
import Link from "next/link";

import * as S from "./styles";

function SectionCategory() {
  return (
    <S.Container>
      <h2>Pesquisar por categoria</h2>

      <S.Wrap>
        <Link href="/ajuda/precos-e-pagamento?v=Preços e pagamento">
          <div className="pai">
            <div>
              <img
                src="/images/icons/icon-billing-green.svg"
                alt="ícone de carteira"
              />
              <p>Preços e pagamento</p>
            </div>
          </div>
        </Link>

        <Link href="/ajuda/caracteristicas?v=Características">
          <div className="pai">
            <div>
              <img
                src="/images/icons/icon-stars-blue.svg"
                alt="ícone de carteira"
              />
              <p>Características</p>
            </div>
          </div>
        </Link>

        <Link href="/ajuda/integracoes?v=Integrações">
          <div className="pai">
            <div>
              <img
                src="/images/icons/icon-b-integrations-blue.svg"
                alt="ícone de carteira"
              />
              <p>Integrações</p>
            </div>
          </div>
        </Link>

        <Link
          href="/ajuda/primeiros-passos?v=Primeiros passos"
          className="mr-0"
        >
          <div className="pai">
            <div>
              <img
                src="/images/icons/icon-b-idea-yellow.svg"
                alt="ícone de carteira"
              />
              <p>Primeiros passos</p>
            </div>
          </div>
        </Link>

        <Link href="/ajuda/privacidade?v=Privacidade">
          <div className="pai">
            <div>
              <img
                src="/images/icons/icon-lock-blue.svg"
                alt="ícone de carteira"
              />
              <p>Privacidade</p>
            </div>
          </div>
        </Link>

        <Link href="/ajuda/minha-conta?v=Minha conta">
          <div className="pai">
            <div>
              <img
                src="/images/icons/icon-emoji-red.svg"
                alt="ícone de carteira"
              />
              <p>Minha conta</p>
            </div>
          </div>
        </Link>

        <Link href="/ajuda/gerenciamento?v=Gerenciamento">
          <div className="pai">
            <div>
              <img
                src="/images/icons/icon-b-settings-orange.svg"
                alt="ícone de carteira"
              />
              <p>Gerenciamento</p>
            </div>
          </div>
        </Link>

        <Link href="/ajuda/outros?v=Outros" className="mr-0">
          <div className="pai">
            <div>
              <img
                src="/images/icons/icon-options-gray.svg"
                alt="ícone de carteira"
              />
              <p>Outros</p>
            </div>
          </div>
        </Link>
      </S.Wrap>
    </S.Container>
  );
}

export default React.memo(SectionCategory);
