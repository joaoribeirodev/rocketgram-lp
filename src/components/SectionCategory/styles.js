import styled from "styled-components";

export const Container = styled.section`
  padding: 80px;

  h2 {
    margin: 0;
    margin-bottom: 64px;
    font-weight: bold;
    font-size: 32px;
    line-height: 48px;
    text-align: center;
    color: #38424f;
  }

  a {
    display: inline-block;
    width: 204px;
    height: 204px;
    background: #ffffff;
    border: 1px solid #e4e4e4;
    box-sizing: border-box;
    border-radius: 4px;
    margin-bottom: 56px;
    margin-right: 64px;

    img {
      display: block;
      margin: 60px auto 20px auto;
    }

    p {
      font-weight: bold;
      font-size: 16px;
      line-height: 21px;
      text-align: center;
      color: #38424f;
      margin-bottom: 32px;
    }
  }

  @media (max-width: 960px) {
    padding: 45px 20px;

    h2 {
      font-size: 18px !important;
      line-height: 24px;
      margin-bottom: 24px;
    }

    a {
      height: 56px;
      margin-right: 0;
      width: 100%;
      margin-bottom: 24px;

      div {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 56px;
      }

      img {
        display: inline-block;
        margin: 0;
        width: 30px;
        margin-right: 15px;
      }

      p {
        margin: 0;
      }
    }
  }
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
