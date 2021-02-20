import React from "react";

import Button from "../Button";

import * as S from "./styles";

function Banner() {
  return (
    <S.Container>
      <div>
        <h2>
          Gerencie a sua comunidade com o <br /> <span>Rocketgram</span>.
        </h2>

        <small>*sem obrigações, não é necessário cartão de crédito.</small>
      </div>

      <Button width="366" height="72">
        Comece o seu teste grátis agora
      </Button>
    </S.Container>
  );
}

export default React.memo(Banner);
