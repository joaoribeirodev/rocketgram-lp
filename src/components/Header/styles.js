import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: calc(100vh - 50px);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap-reverse;
  align-items: center;

  img {
    width: 50%;

    @media (max-width: 960px) {
      width: 100%;
    }
  }

  button {
    margin-left: 80px;

    @media (max-width: 960px) {
      margin: 0 auto;
    }
  }

  h1 {
    font-weight: bold;
    font-size: 32px;
    color: #38424f;
    margin: 0;
    margin-bottom: 47px;
    width: 568px;
    max-width: 100%;
    padding-left: 80px;

    @media (max-width: 960px) {
      padding: 10px;
      font-size: 24px;
      line-height: 32px;
      text-align: center;
      width: 100%;
    }

    span {
      color: #1bbef6;
    }
  }

  h1.center {
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 32px;
    color: #38424f;
  }
`;
