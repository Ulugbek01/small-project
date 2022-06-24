import React from 'react'
import Button from '../Generic/Button';
import { HomeSection, Container, Facebook, Instagram, Twitter, IconWrapper } from './style';
import homeimg from '../../assets/imgs/home-img.png';

export const Home = () => {
  return (
    <HomeSection>
      <Container>
        <HomeSection.Info>
          <HomeSection.Title className='title'>
            Awesome tools for
            Designer & Developer<span className='point'>.</span>
          </HomeSection.Title>
          <HomeSection.Dscr className="discription">Antool is a web collection of information on paid or free Design and Development tools</HomeSection.Dscr>
          
          <HomeSection.InputWrapper>
            <HomeSection.Input placeholder="find more than 430+ tools..." />
            <Button className="btn" width={130} height={48}>Search</Button>
          </HomeSection.InputWrapper>

          <HomeSection.SocialNetworks>
            <IconWrapper><Facebook/></IconWrapper>
            <IconWrapper><Instagram/></IconWrapper>
            <IconWrapper><Twitter/></IconWrapper>
          </HomeSection.SocialNetworks>
        </HomeSection.Info>

        <HomeSection.ImgWrapper>
          <img src={homeimg} alt="home-img" />
        </HomeSection.ImgWrapper>


      </Container>
    </HomeSection>
  )
}

export default Home;