import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Main = styled.div`
background-color: #ff671f;
  font-family: serif;
  color: #000000;
  text-align: center;
  padding: 20px;
  height: 100vh;
  display:flex;
  flex-direction: column;
  
  `;

export const StyledLink = styled(NavLink)`
 width: 150px;
    height: 50px;
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
  
 
  
  `;
export const Wrapper = styled.div`
margin: 50px;
padding: 50px;
display: flex;
  flex-direction: column;

`;

export const Paragraf = styled.p`
font-size: 2em;
text-align: center;

`;

export const Label = styled.label`
font-size: 2em;
margin: 20px;
`;
export const Button = styled.button`
width: 100px;
    height: 50px;
    background-color: #adafad;
    border: #adafad 1px solid;
    border-radius: 15px;
  color: #6f7271;
  font-size: 1 em;
  font-weight: 700;
  letter-spacing: 3px;
  margin-left: 20px;



  &:hover {
    color: black;
    box-shadow: 0px 10px 8px 0px rgba(80, 80, 80, 0.75);
  }
`;

