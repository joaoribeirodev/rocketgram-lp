import React, { useState } from "react";
import Link from "next/link";

import * as S from "./style";

import Button from "../Button";

function Menu() {
  const [open, setOpen] = useState(false);

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
          <Link className="linkmenu" href="/gerenciamento">
            Características
          </Link>
        </li>

        <li>
          <Link className="linkmenu" href="/precos">
            Preços
          </Link>
        </li>

        <li>
          <Link className="linkmenu" href="/ajuda">
            Contate-nos
          </Link>

          <ul>
            <li>
              <img src="/images/icons/icon-idea-gray.png" alt="icone ideia" />
              <Link href="/ajuda">Central de ajuda</Link>
            </li>

            <li>
              <img src="/images/icons/icon-chat-gray.png" alt="icone chat" />
              <Link href="/ajuda">Suporte online</Link>
            </li>

            <li>
              <img src="/images/icons/icon-mail-gray.png" alt="icone chat" />
              <Link href="/ajuda">contato@rocketgram.com.br</Link>
            </li>
          </ul>
        </li>
      </S.WrapLinkAndImage>

      <S.WrapButtons>
        <Link href="/login">Entrar</Link>

        <Button>Teste grátis por 7 dias</Button>

        <button className="menu-mobile" onClick={() => setOpen(!open)}>
          <img
            src="/images/icons/icon-menu-gray.png"
            alt="menu"
            tabIndex={-1}
          />
        </button>
      </S.WrapButtons>

      <S.MenuMobile open={open}>
        <div className="logo-and-close">
          <img
            className="logo"
            src="/images/logo.svg"
            alt="Logotipo rocketgram"
          />

          <button onClick={() => setOpen(!open)}>
            <img src="/images/icons/icon-close-gray.png" tabIndex={-1} />
          </button>
        </div>
        <ul>
          <li>
            <Link className="linkmenu" href="/gerenciamento">
              Características
            </Link>
          </li>

          <li>
            <Link className="linkmenu" href="/precos">
              Preços
            </Link>
          </li>

          <li>
            <Link className="linkmenu" href="#">
              Contate-nos
            </Link>

            <ul>
              <li>
                <img src="/images/icons/icon-idea-gray.png" alt="icone ideia" />
                <Link href="/ajuda">Central de ajuda</Link>
              </li>

              <li>
                <img src="/images/icons/icon-chat-gray.png" alt="icone chat" />
                <Link href="/ajuda">Suporte online</Link>
              </li>

              <li>
                <img src="/images/icons/icon-mail-gray.png" alt="icone chat" />
                <Link href="/ajuda">contato@rocketgram.com.br</Link>
              </li>
            </ul>
          </li>
        </ul>
        <div className="wrap-mobile">
          <Link href="/login">Entrar</Link>
          <Button width="296" height="48">
            Teste grátis por 7 dias
          </Button>
        </div>
      </S.MenuMobile>
    </S.Container>
  );
}

export default React.memo(Menu);
