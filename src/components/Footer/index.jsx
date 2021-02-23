import React from "react";
import Link from "next/link";

import * as S from "./styles";

function Footer() {
  return (
    <S.Container>
      <img src="/images/logo-white.svg" alt="Logotipo Rocketgram" />

      <div>
        <h4>Características</h4>

        <ul>
          <li>
            <Link href="/gerenciamento">Robôs de atendimento</Link>
          </li>
          <li>
            <Link href="/gerenciamento">Gerenciamento de grupos</Link>
          </li>
          <li>
            <Link href="/gerenciamento">Gerenciamento de produtos</Link>
          </li>
          <li>
            <Link href="/gerenciamento">Gerenciamento de contatos</Link>
          </li>
          <li>
            <Link href="/integracoes">Integrações</Link>
          </li>
        </ul>
      </div>

      <div>
        <h4>Preços</h4>

        <ul>
          <li>
            <Link href="/precos">Monte seu plano</Link>
          </li>
        </ul>
      </div>

      <div>
        <h4>Blog</h4>

        <ul>
          <li>
            <Link href="#">Leia nossos artigos</Link>
          </li>
        </ul>
      </div>

      <div>
        <h4>Contate-nos</h4>

        <ul>
          <li>
            <Link href="/ajuda">Central de Ajuda</Link>
          </li>

          <li>
            <Link href="/ajuda">Suporte online</Link>
          </li>

          <li>
            <Link href="/ajuda">contato@rocketgram.com.br</Link>
          </li>
        </ul>
      </div>

      <p>
        <span>© {new Date().getFullYear()} . Todos os direitos reservados</span>{" "}
        . Termos de Uso e Política de Privacidade
      </p>
    </S.Container>
  );
}

export default React.memo(Footer);
