import styled from "styled-components";

import { CiSearch } from "react-icons/ci";

const StyledSearch = styled.div`
  margin-left: auto;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Input = styled.input`
  background-color: #ffffff;
  border: none;
  padding: 0.7rem 2rem;
  border-radius: 6px;
  width: 100%;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  margin-left: -3.25rem;

  &::-webkit-input-placeholder {
    color: #c4c2c2;
    font-size: 1.3rem;
    transform: translateX(20px);
  }
`;

const Button = styled.button`
  border: none;
  /* background-color: #53616d; */
  background: none;
  position: relative;
  z-index: 1000;

  & svg {
    height: 1.8rem;
    width: 1.8rem;
    fill: #ff9100;
  }
`;

export default function Search() {
  return (
    <StyledSearch>
      <Button>
        <CiSearch />
      </Button>
      <Input type="text" placeholder="Search Audiobook" />
    </StyledSearch>
  );
}
