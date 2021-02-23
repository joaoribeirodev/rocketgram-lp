/* eslint-disable react/prop-types */
import React from "react";

import * as S from "./style";

function SectionContent({ src, srcset, color, reverse, children }) {
  return (
    <S.Container color={color} reverse={reverse}>
      <img className="image" src={src} alt="imagem" srcSet={srcset} />

      <div>{children}</div>
    </S.Container>
  );
}

export default React.memo(SectionContent);
