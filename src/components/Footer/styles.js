import styled from "styled-components";

export const Container = styled.footer`
  background: #38424f;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (max-width: 960px) {
    flex-direction: column;
    padding: 20px;

    img {
      margin-top: 10px !important;
      margin-bottom: 30px;
      width: 124px !important;
    }

    & > div {
      height: auto;

      h4 {
        margin-top: 0;
      }
    }
  }

  p {
    color: #fff;
    font-weight: 500;
    font-size: 14px;
    width: 100%;
    text-align: center;
    margin-bottom: 33px;

    span {
      color: #adabb5;
    }
  }

  img {
    width: 222px;
    height: 56px;
    margin-top: 30px;
  }

  div {
    h4 {
      font-weight: bold;
      font-size: 16px;
      color: #adabb5;
      margin-bottom: 24px;
    }

    ul {
      margin: 0;
      padding: 0;
      list-style: none;

      li {
        font-weight: 500;
        font-size: 14px;
        margin-bottom: 14px;

        &:last-of-type {
          margin-bottom: 72px;
        }

        a {
          text-decoration: none;
          color: #fff;
        }
      }
    }
  }
`;
