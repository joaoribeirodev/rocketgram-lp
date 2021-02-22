/* eslint-disable react/prop-types */
import React from "react";

import Button from "../Button";

import * as S from "./styles";

function SectionWhyRocketgram({ title, children }) {
  return (
    <S.Container>
      <small>Por que o Rocketgram?</small>
      <h2>{title}</h2>

      <S.ListWhyRocketgram>{children}</S.ListWhyRocketgram>

      <S.CenterButton>
        <Button>Teste grátis por 7 dias</Button>
      </S.CenterButton>
    </S.Container>
  );
}

export default React.memo(SectionWhyRocketgram);
