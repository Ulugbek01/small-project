import styled from "styled-components";

export const ToolsSection = styled.section``;

export const Container = styled.div`
  max-width: var(--width);
  margin: 0 auto;
  padding: 200px 0;
`;

ToolsSection.Title = styled.h1``;

ToolsSection.Dscr = styled.p`
  max-width: 428px;
  margin: 25px auto 0;
`;

export const CardsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 90px 0;
  gap: 24px;
  /* justify-content: space-between; */
`;

export const ToolsCard = styled.div`
  width: 32%;
  padding: 32px;
  border-radius: 15px;

  .dscr {
    line-height: 30px;
    color: var(--secondary-color);
    margin: 30px 0;
  }

  &:hover {
    background: rgba(40, 48, 54, 0.6);
    backdrop-filter: blur(50px);
  }

  &:hover .heart-icon__wrapper {
    background: #283036;
    box-shadow: 0px 5px 10px -3px rgba(18, 18, 18, 0.15);
  }

  &:hover .heart-icon path {
    fill: #fd3b41;
    fill-opacity: 1;
  }
`;

ToolsCard.Top = styled.div`
  display: flex;

  .tools-info {
    margin-left: 30px;
  }

  .tool-name {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    color: rgba(255, 255, 255, 0.78);
  }

  .use {
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: rgba(255, 165, 55, 0.55);
  }
`;

ToolsCard.Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .icons-wrapper {
    display: flex;
  }
`;

ToolsCard.IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 8px;

  &:not(:last-child) {
    margin-right: 12px;
  }
`;

ToolsCard.Button = styled.button`
  width: 106px;
  height: 42px;
  background: #ff6e30;
  border-radius: 8px;
  border: none;
  outline: none;
  font-family: "Poppins";
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  cursor: pointer;
`;
