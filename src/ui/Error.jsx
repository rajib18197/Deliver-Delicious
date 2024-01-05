import styled from "styled-components";
import { MdOutlineErrorOutline } from "react-icons/md";

const StyledErrorMsg = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  row-gap: 1.5rem;
  column-gap: 2rem;

  & svg {
    width: 2rem;
    height: 2rem;
    fill: orange;
    grid-row: 1 / span 2;
  }
`;

const Title = styled.h5`
  font-size: 1.6rem;
  text-transform: uppercase;
`;

const Message = styled.p`
  color: red;
`;
export default function ErrorMsg({ title, msg }) {
  return (
    <StyledErrorMsg>
      <MdOutlineErrorOutline />
      <Title></Title>
      <Message></Message>
    </StyledErrorMsg>
  );
}
