import styled from "styled-components";

export const Container = styled.section`
  padding: 80px;

  small {
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    color: #4882eb;
    display: block;
    margin-bottom: 16px;
  }

  h2 {
    font-weight: bold;
    font-size: 32px;
    margin: 0;
    margin-bottom: 80px;
    color: #38424f;
  }

  @media (max-width: 960px) {
    padding: 40px 10px;

    small {
      font-size: 14px;
      line-height: 19px;
      text-align: center;
    }

    h2 {
      font-size: 18px;
      line-height: 24px;
      text-align: center;
    }
  }
`;

export const ListWhyRocketgram = styled.ul`
  padding: 0;
  margin: 0;
  margin-bottom: 104px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  & > img {
    display: block;
    margin: 0 auto;
  }

  & > img.image-mobile {
    display: none;
  }

  @media (max-width: 960px) {
    justify-content: center;

    & > img.image-mobile {
      display: block;
      width: 100%;
    }

    & > img {
      display: none;
    }
  }
`;

export const List = styled.li`
  width: 216px;
  margin-right: 80px;

  &:last-of-type {
    margin-right: 0;
  }

  img {
    margin-bottom: 8px;
  }

  h3 {
    font-weight: bold;
    font-size: 18px;
    color: #38424f;
    margin: 0;
    margin-bottom: 8px;
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
    color: #adabb5;
  }

  @media (max-width: 960px) {
    margin-right: 0;

    img {
      margin: 20px auto;
      display: block;
    }

    h3,
    p {
      text-align: center;
    }
  }
`;

export const CenterButton = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 96px;

  @media (max-width: 960px) {
    button {
      width: 280px;
      height: 56px;

      span a {
        line-height: 56px;
      }
    }
  }
`;
