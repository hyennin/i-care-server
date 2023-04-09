import React, { useState } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: white;
  padding: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const MenuList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 1rem;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }
`;

const MenuItem = styled.li`
  margin-right: 1rem;

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const HamburgerIcon = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    background-color: transparent;
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
  }
`;

const Menu = ({ isOpen }) => {
  return (
    <MenuList isOpen={isOpen}>
      <MenuItem>Home</MenuItem>
      <MenuItem>About</MenuItem>
      <MenuItem>Contact</MenuItem>
    </MenuList>
  );
};

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <Nav>
      <h1>My Website</h1>
      <HamburgerIcon onClick={toggleMenu}>&#9776;</HamburgerIcon>
      <Menu isOpen={isOpen} />
    </Nav>
  );
}

export default Header;