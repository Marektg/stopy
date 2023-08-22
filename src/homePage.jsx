import React from 'react'
import { Main, StyledLink } from './homePage.styled';


const HomePage = props => {

  return (
    <Main>
  
      <StyledLink to="/nowy">Nowy stop</StyledLink>
      {/*<StyledLink to="/korekta">Korekta stopu</StyledLink>*/}
     
    </Main>
  )
}


export default HomePage