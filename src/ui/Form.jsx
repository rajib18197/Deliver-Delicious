import styled, { css } from "styled-components";

const Form = styled.form`
  padding: 2rem 4rem;

  background-color: #fff;
  border: 1px solid #333;
  border-radius: 4px;

  width: 80rem;

  overflow: hidden;
  font-size: 1.4rem;

  /**************************/
  /* BELOW 944px  */
  /**************************/

  @media (max-width: 59em) {
    padding: 1rem 4rem;
    width: 50rem;
    overflow-y: scroll;
    height: 80vh;
  }

  @media (max-width: 59em) {
    padding: 0rem 2rem;
    width: 35rem;
    overflow-y: scroll;
    height: 80vh;
  }
`;

export default Form;
