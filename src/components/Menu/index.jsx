import React from "react";
import Link from "next/link";

import * as S from "./style";

import Button from "../Button";

function Menu() {
  return (
    <S.Container>
      <S.WrapLinkAndImage>
        <li>
          <Link href="/">
            <img
              className="logo"
              src="/images/logo.svg"
              alt="Logotipo rocketgram"
            />
          </Link>
        </li>

        <li>
          <Link className="linkmenu" href="/carecteristicas">
            Características
          </Link>
        </li>

        <li>
          <Link className="linkmenu" href="/precos">
            Preços
          </Link>
        </li>

        <li>
          <Link className="linkmenu" href="/contato">
            Contate-nos
          </Link>

          <ul>
            <li>
              <img src="/images/icons/icon-idea-gray.png" alt="icone ideia" />
              <Link href="#">Central de ajuda</Link>
            </li>

            <li>
              <img src="/images/icons/icon-chat-gray.png" alt="icone chat" />
              <Link href="#">Suporte online</Link>
            </li>

            <li>
              <img src="/images/icons/icon-mail-gray.png" alt="icone chat" />
              <Link href="#">contato@rocketgram.com.br</Link>
            </li>
          </ul>
        </li>
      </S.WrapLinkAndImage>

      <S.WrapButtons>
        <Link href="/login">Entrar</Link>

        <Button>Teste grátis por 7 dias</Button>
      </S.WrapButtons>
    </S.Container>
  );
}

export default React.memo(Menu);
