import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3.5rem;
      font-weight: 600;
      color: white;

      /**************************/
      /* BELOW 944px */
      /**************************/

      @media (max-width: 59em) {
        font-size: 4.5rem;
        color: #121212;
      }

      @media (max-width: 42em) {
        font-size: 2.8rem;
      }
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
      font-size: 1.6rem;
      font-weight: 400;
      color: #e7e7e7;

      /**************************/
      /* BELOW 944px */
      /**************************/

      @media (max-width: 59em) {
        font-size: 2rem;
        color: #121212;
      }

      /**************************/
      /* BELOW 672px */
      /**************************/
      @media (max-width: 42em) {
        font-size: 1.4rem;
      }
    `}
    
  line-height: 1.4;
`;

export default Heading;
