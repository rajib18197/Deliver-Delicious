import styled from "styled-components";
import Search from "./Search";
import { BiUser } from "react-icons/bi";
import Menubar from "./Menubar";
import Logo from "./Logo";

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 0.8fr 2fr 0.7fr 0.8fr;
  align-items: center;
  max-width: 100rem;
  margin: 0 auto;
  padding: 2rem 0 1rem 0;

  @media (max-width: 59em) {
    padding: 2rem 2rem 1rem 2rem;
  }

  @media (max-width: 42em) {
    grid-template-columns: 0.3fr 1fr 1fr;
  }
`;

const UserButton = styled.button`
  display: inline-block;
  border: none;
  outline: none;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: orangered;
  justify-self: end;

  & svg {
    height: 2.5rem;
    width: 2.5rem;
    fill: white;
  }

  @media (max-width: 42em) {
    display: none;
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <Logo color="#121212">
        pti<span>.</span>
      </Logo>
      <Search />
      <Menubar />
      <UserButton>
        <BiUser />
      </UserButton>
    </Nav>
  );
}
