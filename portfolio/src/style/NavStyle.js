import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
  height: 4.5rem;
  z-index: 12;
  position: fixed;
  top: 0;
  width: 100%;
  background: rgb(246, 251, 255);
  display:flex;
  justify-content: flex-end;
  transition: all 0.5s;
  border-radius:0.5rem;

`;



export const NavLink = styled(Link)`
  color: grey;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;
