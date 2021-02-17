import React from "react";
import * as S from "./styles";

function Button({ children }) {
  return (
    <S.Container>
      <span tabIndex="-1">{children}</span>
    </S.Container>
  );
}

export default React.memo(Button);
