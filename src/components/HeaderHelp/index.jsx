import React, { useState, useCallback, useEffect } from "react";

import * as S from "./styles";

function HeaderHelp() {
  const [value, setValue] = useState("");
  const [disabled, setDisabled] = useState(true);

  const changeValue = useCallback(({ target }) => setValue(target.value), [
    value,
  ]);

  useEffect(() => setDisabled(!value), [value]);

  return (
    <S.Container>
      <h1>Oi, como a gente pode te ajudar?</h1>

      <div className="input">
        <img src="/images/icons/icon-search-gray.svg" tabIndex={-1} />

        <input
          onChange={changeValue}
          value={value}
          type="text"
          placeholder="Digite a sua dúvida aqui"
        />

        <button disabled={disabled}>Pesquisar</button>
      </div>
    </S.Container>
  );
}

export default React.memo(HeaderHelp);
