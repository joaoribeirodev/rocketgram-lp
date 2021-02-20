import React from "react";

import * as S from "./styles";

function Header({ src, children }) {
  return (
    <S.Container>
      <div>{children}</div>

      <img src={src} alt="Ilustrção" />
    </S.Container>
  );
}

export default React.memo(Header);
