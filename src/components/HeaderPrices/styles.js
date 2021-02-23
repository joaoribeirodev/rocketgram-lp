import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px;
  background-image: url(/images/bg-banner.png);
  background-repeat: no-repeat;
  background-position: center center;

  div.group-titles {
    margin-bottom: 40px;

    h1 {
      text-align: center;
      margin-top: 0;
      margin-bottom: 8px;
      font-weight: bold;
      font-size: 32px;
      color: #38424f;
    }

    small {
      font-weight: bold;
      font-size: 24px;
      color: #adabb5;
      display: block;
    }
  }

  @media (max-width: 960px) {
    padding: 80px 10px;

    h1 {
      font-size: 24px;
      line-height: 32px;
    }

    small {
      font-size: 18px !important;
      line-height: 24px;
      text-align: center;
      font-weight: normal !important;
    }
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 40px;
`;

export const Prices = styled.div`
  width: 350px;
  max-width: 95%;
  background: #ffffff;
  border: 1px solid #e4e4e4;
  box-sizing: border-box;
  border-radius: 4px;
  margin-right: 16px;
  padding: 24px 47px;

  @media (max-width: 960px) {
    margin: 20px auto;
  }

  h2 {
    font-weight: bold;
    font-size: 16px;
    line-height: 21px;
    text-align: center;
    color: #38424f;
    margin: 0;
    margin-bottom: 8px;
  }

  small {
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    color: #adabb5;
    margin-bottom: 28px;
    display: block;
  }

  div.icons {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 24px auto;
    align-self: center;
  }

  div.icons.green {
    background: #71d74d;
  }

  div.icons.blue {
    background: #7f31ff;
  }

  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    text-align: center;
    color: #adabb5;
    margin-bottom: 24px;
  }

  div.counter {
    display: flex;
    justify-content: center;
    margin-bottom: 27px;

    button {
      margin-right: 4px;
      border: none;
      background: rgba(72, 130, 235, 0.1);
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
      width: 32px;
      height: 32px;

      span {
        color: #4882eb;
        opacity: 1;
      }
    }

    input {
      display: inline-block;
      width: 56px;
      height: 32px;
      margin-right: 4px;
      text-align: center;
      font-weight: 500;
      font-size: 14px;
      line-height: 19px;
      color: #38424f;
      border: 1px solid #e4e4e4;
      box-sizing: border-box;
      border-radius: 4px;
    }
  }

  div.price {
    font-weight: bold;
    font-size: 32px;
    text-align: center;
    color: #38424f;

    span {
      font-size: 16px;
    }
  }
`;

export const WrapButton = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 56px;
`;
