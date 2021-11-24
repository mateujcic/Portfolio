import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
  height: 7rem;
  display: flex;
  justify-content: left;
  z-index: 12;
  position: fixed;
  top: 0;
  width: 100%;
  background: #1b263b;
  padding-left: 3rem;
`;

export const NavLink = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;
