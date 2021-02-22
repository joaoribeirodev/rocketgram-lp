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
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
