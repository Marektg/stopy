import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Main = styled.div`
background-color: #ff671f;
  font-family: serif;
  color: #000000;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  
  @media screen and (min-width: 768px) {  
    flex-direction: row;
  }
  
  `;

export const StyledLink = styled(NavLink)`
 width: 250px;
    height: 100px;
    background-color: #adafad;
    border: #adafad 1px solid;
    border-radius: 15px;
  color: #6f7271;
  font-size: 1.5em;
  font-weight: 700;
  letter-spacing: 3px;
display: flex;
align-items: center;
justify-content: space-around;
text-decoration: none;

  &:hover {
    color: black;
    box-shadow: 0px 10px 8px 0px rgba(80, 80, 80, 0.75);
  }
  
  @media screen and (min-width: 768px) {
    width: 250px;
  };
  @media screen and (min-width: 1200px) {
    width: 250px;
  }
  
  `;
