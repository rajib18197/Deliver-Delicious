import styled from "styled-components";
import MealContainer from "../features/meals/MealContainer";

const StyledMain = styled.div`
  max-width: 100rem;
  margin: 10rem auto;
`;

export default function Main() {
  return (
    <StyledMain>
      <MealContainer />
      <MealContainer />
    </StyledMain>
  );
}
