import styled from "styled-components";

export const Container = styled.section`
  padding: 80px;

  h2 {
    font-weight: bold;
    font-size: 32px;
    line-height: 48px;
    text-align: center;
    color: #38424f;
    margin: 0;
    margin-bottom: 68px;
  }

  footer {
    display: flex;
    justify-content: center;

    p {
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      text-align: center;
      color: #38424f;

      a {
        color: #4882eb;
      }
    }
  }
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
