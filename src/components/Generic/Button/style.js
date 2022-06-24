import styled from "styled-components";

export const Container = styled.button`
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: ${({ height }) => (height ? `${height}px` : "100%")};
  background: #ff6e30;
  font-family: "Poppins";
  border-radius: 8px;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
  border: none;
  &:active {
    transform: scale(0.98);
  }
`;
