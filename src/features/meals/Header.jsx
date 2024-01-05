import styled from "styled-components";
import Heading from "../../ui/Heading";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  display: inline-block;
  border: none;
  outline: none;
  padding: 1rem 2rem;
  color: orangered;
  margin-left: auto;

  & svg {
    height: 2rem;
    width: 2rem;
    fill: white;
  }
`;

const Icons = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  & svg {
    height: 2rem;
    width: 2rem;
    fill: white;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <Heading as="h3">Popular</Heading>
      <Button>Add More</Button>
      <Icons>
        <IoIosArrowBack />
        <IoIosArrowForward />
      </Icons>
    </StyledHeader>
  );
}
