import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { navbar } from '../../utils/navbar';
import { activeStyle, Container, Logo, LogoWrapper, NavbarWrapper, NavItem, NavItems } from './style';

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <NavbarWrapper>
      <Container>
        <LogoWrapper onClick={() => navigate('/home')}>
          <Logo></Logo>
          <LogoWrapper.Title>antools.</LogoWrapper.Title>
        </LogoWrapper>

        <NavItems>
            {navbar.map((item) =>
              item.hiddin && 
              <NavItem  key={item.id}>
                <NavLink style={activeStyle} to={item.path}>{item.title}</NavLink>
              </NavItem>
            )}
        </NavItems>

        <button>Sign Up</button>
      </Container>
    </NavbarWrapper>
  )
}

export default Navbar;