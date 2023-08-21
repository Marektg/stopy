import React from 'react'

import { Main, StyledLink, Wrapper } from './nowyStop.styled';

// import Formularz from './formularz'


function Korekta() {


    return (<>
        <Main>
            <Wrapper>
                <StyledLink to="/korekta/033">033</StyledLink>
                <StyledLink to="/korekta/035">035</StyledLink>
                <StyledLink to="/korekta/039">039</StyledLink>
            </Wrapper>
            <Wrapper>
                <StyledLink to="/korekta/045">045</StyledLink>
                <StyledLink to="/korekta/048">048</StyledLink>
                <StyledLink to="/korekta/049">049</StyledLink>
            </Wrapper>
            <Wrapper>
                
                <StyledLink to="/">Powrót</StyledLink>
            </Wrapper>
        </Main>
    </>
    )
}

export default Korekta