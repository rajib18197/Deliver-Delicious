import styled from "styled-components";
import Heading from "../../ui/Heading";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";

import {
  decreasePopularSlide,
  decreaseRecommendedSlide,
  getMeals,
  increasePopularSlide,
  increaseRecommendedSlide,
} from "./mealSlice";
import Modal from "../../ui/Modal";
import CreateMeal from "./CreateMeal";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  margin-top: 5rem;
`;

const Button = styled.button`
  display: inline-block;
  border: none;
  outline: none;
  padding: 1rem 2rem;
  color: #f97316;
  margin-left: auto;
  background: none;

  & svg {
    height: 2rem;
    width: 2rem;
    fill: white;
  }
`;

const Icons = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  & svg {
    height: 2rem;
    width: 2rem;
    fill: #4d4949;
    cursor: pointer;
  }
`;

export default function Header({ name }) {
  const { results, popularSlide, recommendedSlide } = useSelector(getMeals);
  const dispatch = useDispatch();
  console.log(popularSlide);

  const popularList = results?.filter((res) => res.isPopular);
  const recommendedList = results?.filter((res) => res.isRecommended);

  function handleIncrease() {
    if (name === "Popular" && popularSlide < popularList.length - 1)
      dispatch(increasePopularSlide());

    if (name === "Recommended" && recommendedSlide < recommendedList.length - 1)
      dispatch(increaseRecommendedSlide());
  }

  function handleDecrease() {
    if (name === "Popular" && popularSlide !== 0)
      dispatch(decreasePopularSlide());

    if (name === "Recommended" && recommendedSlide !== 0)
      dispatch(decreaseRecommendedSlide());
  }

  return (
    <StyledHeader>
      <Heading as="h3">{name}</Heading>

      <Modal>
        <Modal.Open opens="add-food">
          <Button>Add More</Button>
        </Modal.Open>

        <Modal.Window windowName="add-food">
          <CreateMeal />
        </Modal.Window>
      </Modal>

      <Icons>
        <IoIosArrowBack onClick={handleDecrease} />
        <IoIosArrowForward onClick={handleIncrease} />
      </Icons>
    </StyledHeader>
  );
}
