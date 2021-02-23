import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
  height: 50px;
  padding: 8px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 999;
`;

export const WrapLinkAndImage = styled.ul`
  padding: 0;
  display: flex;
  list-style: none;
  margin: 0;

  @media (max-width: 996px) {
    li:not(:first-of-type) {
      display: none;
    }
  }

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

  button.menu-mobile {
    background: transparent;
    border: none;
    outline: none;
    display: none;

    img {
      outline: none;
    }
  }

  a {
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
    color: #4882eb;
    margin-right: 25px;
  }

  @media (max-width: 996px) {
    button.menu-mobile {
      display: block;
    }

    button:first-of-type {
      display: none;
    }

    a {
      display: none;
    }
  }
`;

export const MenuMobile = styled.div`
  position: fixed;
  background: #fff;
  padding: 15px;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 9;
  transition: transform 0.2s ease-in;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};

  div.wrap-mobile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > a {
      border: 1px solid #4882eb;
      box-sizing: border-box;
      border-radius: 4px;
      display: block;
      width: 296px;
      height: 48px;
      margin-bottom: 16px;
      font-size: 16px;
      color: #4882eb;
      line-height: 48px;
      text-align: center;
    }
  }

  @media (min-width: 960px) {
    display: none;
  }

  div.logo-and-close {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;

    button {
      background: transparent;
      border: none;
      outline: none;

      img {
        outline: none;
      }
    }
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    margin-bottom: 260px;

    li {
      font-size: 16px;
      line-height: 21px;
      color: #adabb5;
      margin-bottom: 24px;

      &:hover > ul {
        display: inline-block;
      }

      ul {
        padding: 20px;
        display: none;

        li {
          font-weight: bold;
          font-size: 14px;
          line-height: 19px;
          color: #38424f;
        }
      }
    }
  }
`;
