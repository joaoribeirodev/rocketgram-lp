/* eslint-disable react/prop-types */
import React from "react";
import Link from "next/link";

import * as S from "./styles";

function Topic({ title, description, destiny }) {
  return (
    <S.Container>
      <img src="/images/question.png" alt="ícone de dúvida" />

      <div>
        <h3>{title}</h3>
        <p>
          {description} <Link href={destiny.to}>{destiny.value}</Link>
        </p>
      </div>
    </S.Container>
  );
}

export default React.memo(Topic);
