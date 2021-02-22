/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import Link from "next/link";

import * as S from "./styles";

function SectionArticles({ children }) {
  const [query, setQuery] = useState("");

  useEffect(
    () =>
      setQuery(decodeURIComponent(window.location.search.replace("?v=", ""))),
    []
  );

  return (
    <S.Container>
      <S.Article>
        <div className="wrapper">
          <img
            src="/images/icons/icon-arrow-left-gray.svg"
            alt="ícone de flecha apontando para esquerda"
          />
          <h2>
            Artigos populares sobre <span>{query}</span>
          </h2>
        </div>

        {children}
      </S.Article>

      <S.Side>
        <h3>Tópicos mais buscados na categoria</h3>

        <Link href="/">Assinatura e recorrência</Link>

        <Link href="/">Como montar meu plano?</Link>

        <Link href="/">Como mudar a forma de pagamento?</Link>

        <Link href="/">Perdi meu cartão, e agora?</Link>

        <Link href="/">Posso pagar com dois cartões?</Link>

        <Link href="/">O Rocketgram concede descontos em volume?</Link>

        <Link href="/">Recebi uma cobrança indevida</Link>

        <Link href="/">Posso cancelar a qualquer momento?</Link>
      </S.Side>
    </S.Container>
  );
}

export default React.memo(SectionArticles);
