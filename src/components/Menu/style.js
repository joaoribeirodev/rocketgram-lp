import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
  height: 50px;
  padding: 8px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WrapLinkAndImage = styled.ul`
  padding: 0;
  display: flex;
  list-style: none;
  margin: 0;

  img.logo {
    margin-right: 100px;
  }

  li {
    position: relative;

    &:hover > ul {
      visibility: visible;
      opacity: 1;
      display: block;
    }

    &:hover > a.linkmenu {
      color: #4882eb;
    }

    ul {
      background: #fff;
      width: 290px;
      padding: 20px;
      position: absolute;
      top: 35px;
      left: 10px;
      margin: 0;
      padding: 20px;
      list-style: none;
      background: #fbfbfb;
      border: 1px solid #e4e4e4;
      box-sizing: border-box;
      box-shadow: 0px 0px 16px rgba(229, 229, 229, 0.4);
      border-radius: 4px;
      visibility: hidden;
      opacity: 0;
      display: none;
      transition: all 0.3s linear;

      li {
        margin-bottom: 25px;
        display: flex;
        align-items: center;

        img {
          width: 21px;
          height: 21px;
          object-fit: contain;
          margin-right: 15px;
        }

        &:last-of-type {
          margin-bottom: 0;
        }

        a {
          color: #38424f;
          display: block;
        }
      }
    }

    a {
      color: #adabb5;
      line-height: 36px;
      margin-right: 48px;
      text-decoration: none;
      transition: all 0.3s linear;
    }
  }
`;

export const WrapButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
    color: #4882eb;
    margin-right: 25px;
  }
`;
