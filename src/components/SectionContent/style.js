import styled from "styled-components";

export const Container = styled.section`
  padding: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ reverse }) => (reverse ? "flex-direction: row-reverse" : "")};

  img.img-mobile {
    display: none;
  }

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

    @media (max-width: 960px) {
      display: none;
    }
  }

  .buttons {
    display: flex;

    button:first-of-type {
      margin-right: 16px;
    }

    @media (max-width: 960px) {
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;

      button:first-of-type {
        margin-right: 0;
        margin-bottom: 24px;
      }
    }
  }

  h2 {
    font-weight: bold;
    font-size: 24px;
    margin: 0;
    margin-bottom: 16px;
    color: #38424f;

    @media (max-width: 960px) {
      font-size: 18px;
      line-height: 24px;
    }
  }

  p {
    font-size: 18px;
    color: #adabb5;
    margin: 0;
    margin-bottom: 56px;
  }

  @media (max-width: 960px) {
    padding: 80px 10px;

    img.img-mobile {
      display: block;
      margin: 30px 0;
    }
  }
`;
