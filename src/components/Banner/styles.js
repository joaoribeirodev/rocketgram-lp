import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  background-image: url(/images/bg-banner.svg);
  background-repeat: no-repeat;
  height: 259px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 960px) {
    & > button {
      width: 328px;
      height: 56px;

      span a {
        line-height: 56px;
      }
    }
  }

  div {
    h2 {
      color: #38424f;
      font-weight: bold;
      font-size: 32px;
      margin-bottom: 8px;

      @media (max-width: 960px) {
        font-size: 18px;
        line-height: 24px;
        text-align: center;
      }

      span {
        color: #1bbef6;
      }
    }

    small {
      color: #adabb5;
      font-size: 18px;

      @media (max-width: 960px) {
        font-size: 12px;
        text-align: center;
        display: block;
      }
    }
  }
`;
