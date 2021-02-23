import styled from "styled-components";

export const Container = styled.section`
  background: #fbfbfb;
  padding: 80px;
  padding-bottom: 145px;

  @media (max-width: 960px) {
    padding: 80px 10px;

    img {
      width: 100%;
    }
  }

  h2 {
    margin: 0;
    margin-bottom: 45px;
    text-align: center;
    font-weight: bold;
    font-size: 24px;
    color: #38424f;

    @media (max-width: 960px) {
      font-size: 18px;
    }
  }
`;
