import React, { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import * as urlSlug from "url-slug";

import * as S from "./styles";

function HeaderHelp() {
  const [value, setValue] = useState("");
  const [disabled, setDisabled] = useState(true);
  const router = useRouter();

  const changeValue = useCallback(({ target }) => setValue(target.value), [
    value,
  ]);

  const searchEvent = useCallback(() => {
    const slug = urlSlug.convert(value, {
      separator: "-",
      transformer: false,
    });

    const upperFirstLetter = `${value[0].toUpperCase()}${value.slice(1)}`;

    router.push(`/ajuda/${slug}?v=${upperFirstLetter}`);
  }, [value]);

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

        <button disabled={disabled} onClick={searchEvent}>
          Pesquisar
        </button>
      </div>
    </S.Container>
  );
}

export default React.memo(HeaderHelp);
