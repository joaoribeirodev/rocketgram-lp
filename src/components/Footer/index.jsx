import React from "react";
import * as S from "./styles";

function Footer() {
  return (
    <S.Container>
      <img src="/images/logo-white.svg" alt="Logotipo Rocketgram" />

      <div>
        <h4>Características</h4>

        <ul>
          <li>
            <a href="#">Robôs de atendimento</a>
          </li>
          <li>
            <a href="#">Gerenciamento de grupos</a>
          </li>
          <li>
            <a href="#">Gerenciamento de produtos</a>
          </li>
          <li>
            <a href="#">Gerenciamento de contatos</a>
          </li>
          <li>
            <a href="#">Integrações</a>
          </li>
        </ul>
      </div>

      <div>
        <h4>Preços</h4>

        <ul>
          <li>
            <a href="#">Monte seu plano</a>
          </li>
        </ul>
      </div>

      <div>
        <h4>Blog</h4>

        <ul>
          <li>
            <a href="#">Leia nossos artigos</a>
          </li>
        </ul>
      </div>

      <div>
        <h4>Contate-nos</h4>

        <ul>
          <li>
            <a href="#">Central de Ajuda</a>
          </li>

          <li>
            <a href="#">Suporte online</a>
          </li>

          <li>
            <a href="#">contato@rocketgram.com.br</a>
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
