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

  div {
    h2 {
      color: #38424f;
      font-weight: bold;
      font-size: 32px;
      margin-bottom: 8px;

      span {
        color: #1bbef6;
      }
    }

    small {
      color: #adabb5;
      font-size: 18px;
    }
  }
`;
