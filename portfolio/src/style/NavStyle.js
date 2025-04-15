import styled from "styled-components";
// import { NavLink as Link } from "react-router-dom";
// import { HashLink as Link } from 'react-router-hash-link';



export const Nav = styled.nav`
  height: 4.5rem;
  z-index: 12;
  position: fixed;
  top: 0;
  width: 100%;
  background: rgb(246, 251, 255);
  display: flex;
  justify-content: flex-end;
  transition: all 0.5s;
  border-radius: 0.5rem;

  @media(max-width: 24em){
    justify-content: center;
  }
  @media(max-width: 30em){
    justify-content: center;
  }
  @media(max-width: 46.8em){
    justify-content: center;
  }
`;

export const NavLink = `
  color: #272727;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-family: Averta-ExtraBold;
`;
