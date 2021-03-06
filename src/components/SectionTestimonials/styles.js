import styled from "styled-components";

export const Container = styled.section`
  padding: 80px;
  background: #fbfbfb;

  h2 {
    font-weight: bold;
    font-size: 32px;
    color: #38424f;
    margin: 0;
    margin-bottom: 64px;
    text-align: center;
  }

  @media (max-width: 960px) {
    padding: 80px 20px;

    h2 {
      font-size: 24px !important;
      line-height: 32px;
      margin-bottom: 30px;
    }
  }
`;

export const WrapTestimonials = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Testimonials = styled.div`
  display: flex;
  align-items: center;
  margin-right: 34px;
  width: 575px;

  &:last-of-type {
    margin-right: 0;
  }

  img {
    width: 72px;
    height: 72px;
    position: relative;
    left: 20px;
  }

  div.info {
    padding: 24px;
    box-shadow: 0px 0px 16px rgba(229, 229, 229, 0.4);
    border-radius: 4px;
    padding-left: 40px;

    p {
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      color: #38424f;
      margin: 0;
      margin-bottom: 16px;
    }

    small {
      font-weight: 500;
      font-size: 14px;
      display: block;
      color: #adabb5;
    }
  }

  @media (max-width: 960px) {
    flex-direction: column;

    img {
      left: 0;
      top: 20px;
      width: 56px;
      height: 56px;
    }

    div.info {
      padding: 10px;
      padding-top: 40px;
    }
  }
`;
