import styled from "styled-components";

export const Container = styled.button`
  width: ${({ width }) => (width ? `${width}px` : "180px")};
  height: ${({ height }) => (height ? `${height}px` : "40px")};
  background-color: ${({ bg }) => (bg ? `#${bg}` : "#4882EB")};
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;

  span {
    color: ${({ color }) => (color ? `#${color}` : "#fff")};
    font-weight: bold;
    font-size: 14px;
  }
`;
