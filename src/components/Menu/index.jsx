import React from "react";
import * as S from "./style";

import Button from "../Button";

function Menu() {
  return (
    <S.Container>
      <S.WrapLinkAndImage>
        <li>
          <a href="/">
            <img
              className="logo"
              src="/images/logo.svg"
              alt="Logotipo rocketgram"
            />
          </a>
        </li>

        <li>
          <a className="linkmenu" href="/carecteristicas">
            Características
          </a>
        </li>

        <li>
          <a className="linkmenu" href="/precos">
            Preços
          </a>
        </li>

        <li>
          <a className="linkmenu" href="/contato">
            Contate-nos
          </a>

          <ul>
            <li>
              <img src="/images/icons/icon-idea-gray.png" alt="icone ideia" />
              <a href="#">Central de ajuda</a>
            </li>

            <li>
              <img src="/images/icons/icon-chat-gray.png" alt="icone chat" />
              <a href="#">Suporte online</a>
            </li>

            <li>
              <img src="/images/icons/icon-mail-gray.png" alt="icone chat" />
              <a href="#">contato@rocketgram.com.br</a>
            </li>
          </ul>
        </li>
      </S.WrapLinkAndImage>

      <S.WrapButtons>
        <a href="/login">Entrar</a>

        <Button>Teste grátis por 7 dias</Button>
      </S.WrapButtons>
    </S.Container>
  );
}

export default React.memo(Menu);
