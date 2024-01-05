import styled from "styled-components";

const Input = styled.input`
  border: none;
  background-color: #f0e9e9;
  border-radius: 3px;
  padding: 0.8rem 1.2rem;

  /**************************/
  /* BELOW 672px  */
  /**************************/

  @media (max-width: 42em) {
    padding: 0.7rem;
  }
`;

export default Input;
