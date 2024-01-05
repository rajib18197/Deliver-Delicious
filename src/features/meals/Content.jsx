import styled from "styled-components";
import CardList from "./CardList";

const StyledContent = styled.div`
  overflow: hidden;
`;

export default function Content({ list, slide }) {
  return (
    <StyledContent>
      <CardList list={list} slide={slide} />
    </StyledContent>
  );
}
