import styled from "styled-components";

export const Container = styled.section`
  padding: 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Article = styled.article`
  div.wrapper {
    display: flex;
    align-items: center;
    height: 50px;
    margin-bottom: 44px;
  }

  img {
    margin-right: 16px;
    cursor: pointer;
  }

  h2 {
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
