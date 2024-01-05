import styled from "styled-components";

const Logo = styled.h3`
  font-size: 2rem;
  font-weight: 600;

  & span {
    color: ${(props) => props.color};
  }
`;

export default Logo;
