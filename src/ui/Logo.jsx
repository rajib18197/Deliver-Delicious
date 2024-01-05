import styled from "styled-components";

const Logo = styled.h3`
  font-size: 2.5rem;
  font-weight: 600;
  font-family: "Ubuntu", sans-serif;
  color: #121212;

  & span {
    color: ${(props) => props.color};
  }
`;

export default Logo;
