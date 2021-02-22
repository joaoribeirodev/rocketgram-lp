import React, { useState, useEffect } from "react";

import Button from "../Button";

import * as S from "./styles";

function HeaderPrices() {
  const [managerBotPrice, setManagerBotPrice] = useState(69);
  const [valueInputPrice, setValueInputPrice] = useState(1);
  const [managerBotChannel, setManagerBotChannel] = useState(49);
  const [valueInputChannel, setValueInputChannel] = useState(1);

  const sumValueBotPrice = () => {
    setValueInputPrice(() => valueInputPrice + 1);
  };

  const minusValueBotPrice = () => {
    setValueInputPrice(() => (valueInputPrice <= 1 ? 1 : valueInputPrice - 1));
  };

  useEffect(() => setManagerBotPrice(() => 69 * valueInputPrice), [
    valueInputPrice,
  ]);

  const sumValueBotChannel = () => {
    setValueInputChannel(() => valueInputChannel + 1);
  };

  const minusValueBotChannel = () => {
    setValueInputChannel(() =>
      valueInputChannel <= 1 ? 1 : valueInputChannel - 1
    );
  };

  useEffect(() => setManagerBotChannel(() => 49 * valueInputChannel), [
    valueInputChannel,
  ]);

  return (
    <S.Container>
      <div className="group-titles">
        <h1>Monte o seu plano</h1>
        <small>Escolha quanto você vai pagar</small>
      </div>

      <S.Wrap>
        <S.Prices>
          <h2>Gerenciamento do Bot</h2>
          <small>*por bot, cobrado mensalmente</small>

          <div className="icons green">
            <img src="/images/icons/icon-bot-white.svg" />
          </div>

          <div className="counter">
            <button
              disabled={managerBotPrice <= 1}
              onClick={minusValueBotPrice}
            >
              <span>-</span>
            </button>
            <input disabled type="text" value={valueInputPrice} />
            <button onClick={sumValueBotPrice}>
              <span>+</span>
            </button>
          </div>

          <div className="price">
            <span>R$</span>
            {managerBotPrice},<sup>00</sup>
          </div>
        </S.Prices>

        <S.Prices>
          <h2>Gerenciamento de grupos/canais</h2>
          <small>*por bot, cobrado mensalmente</small>

          <div className="icons blue">
            <img src="/images/icons/icon-group-chat-white.svg" />
          </div>

          <div className="counter">
            <button
              disabled={managerBotChannel <= 1}
              onClick={minusValueBotChannel}
            >
              <span>-</span>
            </button>
            <input disabled type="text" value={valueInputChannel} />
            <button onClick={sumValueBotChannel}>
              <span>+</span>
            </button>
          </div>

          <div className="price">
            <span>R$</span>
            {managerBotChannel},<sup>00</sup>
          </div>
        </S.Prices>
      </S.Wrap>

      <S.WrapButton>
        <Button width="280" height="56">
          Começar agora!
        </Button>
      </S.WrapButton>
    </S.Container>
  );
}

export default React.memo(HeaderPrices);
