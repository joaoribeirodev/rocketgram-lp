import React from "react";

import * as S from "./style";

function SectionAtende() {
  return (
    <S.Container>
      <h2>
        Seu atendimento mais ágil com os <br /> recursos do Rocketgram
      </h2>

      <img src="/images/agile.svg" alt="Agilize" />
    </S.Container>
  );
}

export default React.memo(SectionAtende);
