import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  margin-bottom: 52px;
  width: 525px;
  max-width: 100%;

  img {
    margin-right: 12px;
    object-fit: contain;
    height: 25px;
  }

  h3 {
    font-weight: bold;
    font-size: 16px;
    line-height: 21px;
    color: #38424f;
    margin: 0;
    margin-bottom: 8px;
  }

  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    color: #adabb5;
  }

  a {
    color: #4882eb;
  }
`;
