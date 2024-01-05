import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: white;
    background-color: #f97316;

    &:hover {
      background-color: #ea580c;
    }
  `,
};

const Button = styled.button`
  border: none;
  border-radius: 4px;
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};

export default Button;
