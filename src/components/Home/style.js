import styled from "styled-components";
import { ReactComponent as facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as twitter } from "../../assets/icons/twitter.svg";

export const HomeSection = styled.section``;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--width);
  margin: 0 auto;
  padding-top: 50px;

  & > div {
    width: 50%;
  }
`;

HomeSection.Info = styled.div``;

HomeSection.Title = styled.h1`
  .point {
    color: #ff6e30;
  }
`;

HomeSection.Dscr = styled.p`
  margin: 30px 0 60px 0;
`;

HomeSection.Input = styled.input`
  width: 500px;
  height: 64px;
  background: #283036;
  border-radius: 15px;
  border: none;
  outline: none;
  color: var(--secondary-color);
  padding: 8px 12px 8px 18px;
  position: relative;
`;

HomeSection.InputWrapper = styled.div`
  max-width: 500px;
  position: relative;

  .btn {
    position: absolute;
    right: 12px;
    bottom: 8px;
  }
`;

HomeSection.SocialNetworks = styled.div`
  display: flex;
  align-items: center;
`;

HomeSection.ImgWrapper = styled.div`
  position: relative;

  img {
    width: 90%;
    position: absolute;
    right: -50px;
    top: -150px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 58px;
  height: 58px;
`;

export const Facebook = styled(facebook)``;

export const Instagram = styled(instagram)``;

export const Twitter = styled(twitter)``;
