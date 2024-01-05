import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3.7rem;
      font-weight: 600;
      color: white;
    `}

  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 1.8rem;
      font-weight: 400;
      color: #1b1818;
    `}

  ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 1.8rem;
      font-weight: 400;
      color: white;
    `}
    
  line-height: 1.4;
`;

export default Heading;
