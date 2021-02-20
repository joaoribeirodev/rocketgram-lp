/* eslint-disable react/prop-types */
import React from "react";
import Link from "next/link";

import * as S from "./styles";

function Button({ width, height, outline, color, bg, children }) {
  return (
    <S.Container
      width={width}
      height={height}
      outline={outline}
      color={color}
      bg={bg}
    >
      <span tabIndex="-1">
        <Link href="/">{children}</Link>
      </span>
    </S.Container>
  );
}

export default React.memo(Button);
