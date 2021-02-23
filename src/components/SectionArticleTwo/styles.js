import styled from "styled-components";

export const Container = styled.section`
  padding: 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 960px) {
    padding: 45px 20px;
  }
`;

export const Article = styled.article`
  div.wrapper {
    display: flex;
    margin-bottom: 44px;

    & > div {
      width: 585px;
      max-width: 100%;

      @media (max-width: 960px) {
        width: 100%;
      }

      p {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 21px;
        color: #adabb5;
      }
    }
  }

  img {
    margin-right: 16px;
    margin-top: 3px;
    cursor: pointer;
    height: 24px;
  }

  h1 {
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    align-items: center;
    color: #38424f;
    margin: 0;

    span {
      color: #4882eb;
    }
  }

  @media (max-width: 960px) {
    h1 {
      font-size: 18px !important;
    }
  }
`;

export const Side = styled.aside`
  padding: 32px;
  width: 412px;
  height: 472px;
  background: #fbfbfb;
  position: sticky;
  top: 20px;
  left: 0;

  h3 {
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    color: #38424f;
    padding-bottom: 16px;
    border-bottom: 1px solid #dadada;
  }

  a {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 21px;
    color: #4882eb;
    display: block;
    margin-bottom: 16px;
  }
`;
