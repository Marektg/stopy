import React from 'react'

import { Main, StyledLink, Wrapper } from './nowyStop.styled';

// import Formularz from './formularz'


function NowyStop() {
  

  return (<>
    <Main>
<Wrapper>
      <StyledLink to="/nowy/033">033</StyledLink>
      <StyledLink to="/nowy/035">035</StyledLink>
        <StyledLink to="/nowy/039">039</StyledLink>
      </Wrapper>
      <Wrapper>
      <StyledLink to="/nowy/045">045</StyledLink>
      <StyledLink to="/nowy/048">048</StyledLink>
      <StyledLink to="/nowy/049">049</StyledLink>
      </Wrapper>
      <Wrapper>
      
      <StyledLink to="/">Powrót</StyledLink>
      </Wrapper>
    </Main>
  </>
  )
}

export default NowyStop