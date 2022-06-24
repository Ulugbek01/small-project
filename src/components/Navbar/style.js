import styled from "styled-components";
import { ReactComponent as logo } from "../../assets/icons/logo.svg";

export const NavbarWrapper = styled.div`
  padding-top: 26px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--width);
  margin: 0 auto;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Logo = styled(logo)`
  margin-right: 12px;
`;

LogoWrapper.Title = styled.h3`
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;
  color: var(--primary-color);
`;

export const NavItems = styled.div`
  display: flex;
  align-items: center;
`;

export const NavItem = styled.div`
  a {
    position: relative;
  }

  a::after {
    content: "";
    width: 0;
    height: 1px;
    background: rgba(255, 255, 255, 0.55);
    position: absolute;
    left: 0;
    bottom: -2px;
    transition: all 0.37s ease-in-out;
  }

  a:hover::after {
    content: "";
    width: 100%;
    height: 1px;
    background: rgba(255, 255, 255, 0.55);
    position: absolute;
    left: 0;
    bottom: -2px;
  }

  &:not(:last-child) {
    margin-right: 40px;
  }
`;

export const activeStyle = ({ isActive }) => {
  return {
    color: isActive ? "#fff" : "rgba(255, 255, 255, 0.55)",
  };
};
