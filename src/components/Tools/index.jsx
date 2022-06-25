import React from 'react'
import {useNavigate} from 'react-router-dom';
import { tools } from '../../utils/tools';
import { CardsWrapper, Container, ToolsCard, ToolsSection } from './style';
import {ReactComponent as Heart} from '../../assets/icons/icons_like.svg';
import {ReactComponent as FolderAdd} from '../../assets/icons/folder-add.svg';

export const Tools = () => {
  const navigate = useNavigate();
  return (
    <ToolsSection>
      <Container>
        <ToolsSection.Title className="title to-center">Most Popular Tools</ToolsSection.Title>
        <ToolsSection.Dscr className="discription to-center">
          Tools for the best Designers and Developers
          most popularly used in the world
        </ToolsSection.Dscr>

        <CardsWrapper>
          {tools.map(({id, name, icon: Icon, use, discription}) => 
            <ToolsCard key={id}>
              <ToolsCard.Top>
                <div>
                  <Icon/>
                </div>
                <div className='tools-info'>
                  <p className='tool-name'>{name}</p>
                  <p className='use'>{use}</p>
                </div>
              </ToolsCard.Top>
              <p className="dscr">{discription}</p>

              <ToolsCard.Bottom>
                <div className='icons-wrapper'>
                  <ToolsCard.IconWrapper className="heart-icon__wrapper"><Heart className='heart-icon'/></ToolsCard.IconWrapper>
                  <ToolsCard.IconWrapper><FolderAdd/></ToolsCard.IconWrapper>
                </div>
                <ToolsCard.Button onClick={() => navigate(`/home/cardvisit:${id}`)}>Visit</ToolsCard.Button>
              </ToolsCard.Bottom>
            </ToolsCard>
          )}
        </CardsWrapper>
      </Container>
    </ToolsSection>
  )
}

export default Tools;