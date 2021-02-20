import styled from "styled-components";

export const Container = styled.section`
  padding: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ reverse }) => (reverse ? "flex-direction: row-reverse" : "")};

  div.icon {
    display: flex;
    width: 100%;
    height: 40px;
    align-items: center;
    margin-bottom: 20px;

    small {
      color: ${({ color }) => color};
      font-weight: bold;
      font-size: 16px;
      display: block;
    }

    img.icon {
      margin-right: 16px;
    }
  }

  .image {
    ${({ reverse }) => (reverse ? "margin-left: 80px" : "margin-right: 80px")};
  }

  .buttons {
    display: flex;

    button:first-of-type {
      margin-right: 16px;
    }
  }

  h2 {
    font-weight: bold;
    font-size: 24px;
    margin: 0;
    margin-bottom: 16px;
    color: #38424f;
  }

  p {
    font-size: 18px;
    color: #adabb5;
    margin: 0;
    margin-bottom: 56px;
  }
`;
