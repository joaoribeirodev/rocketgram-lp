import styled from "styled-components";

export const Container = styled.button`
  width: ${({ width }) => (width ? `${width}px` : "180px")};
  height: ${({ height }) => (height ? `${height}px` : "40px")};
  background-color: ${({ bg }) => (bg ? `${bg}` : "#4882EB")};
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  ${({ outline }) => (outline ? `border: 1px solid #4882EB` : "")};

  span {
    font-weight: bold;
    font-size: 14px;
    display: block;
    width: 100%;
    height: 100%;

    a {
      display: block;
      width: 100%;
      line-height: ${({ height }) => (height ? `${height}px` : "40px")};
      height: 100%;
      color: ${({ color }) => (color ? `#${color}` : "#fff")};
    }
  }
`;
