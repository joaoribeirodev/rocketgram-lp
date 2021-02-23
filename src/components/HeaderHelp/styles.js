import styled from "styled-components";

export const Container = styled.header`
  background: #fbfbfb;
  padding: 80px;
  background-image: url(/images/bg-banner.png);
  background-repeat: no-repeat;
  background-position: center center;

  h1 {
    font-weight: bold;
    font-size: 32px;
    line-height: 48px;
    text-align: center;
    color: #38424f;
    margin: 0;
    margin-bottom: 40px;
  }

  div.input {
    width: 616px;
    height: 72px;
    padding-left: 28px;
    padding-right: 8px;
    border: 1px solid #e4e4e4;
    box-sizing: border-box;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    background: #fff;

    input {
      flex: 1;
      display: block;
      height: 100%;
      border: none;
      margin-left: 20px;
      outline: none;
      font-size: 16px;
    }

    button {
      padding: 16px;
      color: #fff;
      border-radius: 4px;
      outline: none;
      border: none;
      background: #4882eb;

      &:not(:disabled) {
        box-shadow: 0px 0px 4px rgba(72, 130, 235, 0.5);
      }

      &:disabled {
        background: #dadada !important;
      }
    }
  }

  @media (max-width: 960px) {
    padding: 80px 20px;
    background-position: 0 0;

    h1 {
      font-size: 24px !important;
      line-height: 32px;
    }

    div.input {
      width: 100%;
      padding-left: 5px;

      input {
        font-size: 12px !important;
      }
    }
  }
`;
