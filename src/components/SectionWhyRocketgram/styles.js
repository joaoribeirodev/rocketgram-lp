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
`;

export const List = styled.li`
  width: 216px;
  margin-right: 80px;

  &:last-of-type {
    margin-right: 0;
  }

  image {
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
`;

export const CenterButton = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 96px;
`;
