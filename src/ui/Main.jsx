import styled from "styled-components";
import MealContainer from "../features/meals/MealContainer";
import { useDispatch, useSelector } from "react-redux";
import { fetchMeals, getMeals } from "../features/meals/mealSlice";
import { useEffect } from "react";
import ErrorMsg from "./Error";
import Spinner from "./Spinner";

const StyledMain = styled.div`
  max-width: 100rem;
  margin: 10rem auto;
`;

export default function Main() {
  const dispatch = useDispatch();
  const { results, status, error, popularSlide, recommendedSlide } =
    useSelector(getMeals);

  const popularList = results?.filter((res) => res.isPopular);
  console.log(popularList);
  const recommendedList = results?.filter((res) => res.isRecommended);
  console.log(recommendedList);

  useEffect(
    function () {
      dispatch(fetchMeals());
    },
    [dispatch]
  );

  if (status === "failed")
    return <ErrorMsg title={"Getting Meals Error!"} msg={error} />;

  return (
    <StyledMain>
      {status === "loading" && <Spinner />}
      {status === "success" && (
        <>
          <MealContainer
            list={popularList}
            slide={popularSlide}
            name={"Popular"}
          />

          <MealContainer
            list={recommendedList}
            slide={recommendedSlide}
            name={"Recommended"}
          />
        </>
      )}
    </StyledMain>
  );
}
