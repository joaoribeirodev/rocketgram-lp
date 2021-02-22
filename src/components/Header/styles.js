import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: calc(100vh - 50px);
  display: flex;
  justify-content: space-between;
  /* flex-wrap: wrap-reverse; */
  align-items: center;

  img {
    width: 50%;
  }

  button {
    margin-left: 80px;
  }

  h1 {
    font-weight: bold;
    font-size: 32px;
    color: #38424f;
    margin: 0;
    margin-bottom: 47px;
    width: 568px;
    padding-left: 80px;

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
