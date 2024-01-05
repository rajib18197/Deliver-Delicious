import styled, { css } from "styled-components";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const Menu = styled.div`
  margin-right: auto;
  position: relative;
  width: 100%;
  height: 100%;
`;

const ButtonIcon = styled.button`
  display: inline-block;
  width: 100%;
  font-size: 1.6rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 6px;
  border: none;
  outline: none;
  background-color: white;
  padding: 0 1rem;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  & svg {
    width: 2rem;
    height: 2rem;
    fill: orangered;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 120%;
  left: 0;
  padding: 1rem 0;
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 100%;
`;

const Button = styled.button`
  display: inline-block;
  font-size: 1.5rem;
  text-transform: uppercase;
  border: none;
  outline: none;
  background-color: white;
  padding: 0.3rem 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  ${(props) =>
    props.active === "true" &&
    css`
      background-color: #888;
    `}

  &:hover {
    background-color: #888;
  }
`;

const menuLinks = [
  { id: 1, label: "Home" },
  { id: 2, label: "Details" },
  { id: 3, label: "Category" },
  { id: 4, label: "My Favorites" },
  { id: 5, label: "Profile" },
  { id: 6, label: "Log In/Sign Up" },
];

export default function Menubar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((open) => !open);
  }

  return (
    <Menu>
      <ButtonIcon onClick={handleClick}>
        <span>Menu</span>
        {isOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
      </ButtonIcon>

      {isOpen && (
        <Container>
          {menuLinks.map((link) => (
            <Button
              active={link.label === "Home" ? "true" : "false"}
              key={link.id}
            >
              {link.label}
            </Button>
          ))}
        </Container>
      )}
    </Menu>
  );
}
