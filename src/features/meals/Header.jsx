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
`;

const Button = styled.button`
  display: inline-block;
  border: none;
  outline: none;
  padding: 1rem 2rem;
  color: orangered;
  margin-left: auto;

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
    fill: white;
  }
`;

export default function Header({ name }) {
  //   const { popularSlide } = useSelector(getMeals);
  const dispatch = useDispatch();

  function handleIncrease() {
    if (name === "Popular") dispatch(increasePopularSlide());
    if (name === "Recommended") dispatch(increaseRecommendedSlide());
  }

  function handleDecrease() {
    if (name === "Popular") dispatch(decreasePopularSlide());
    if (name === "Recommended") dispatch(decreaseRecommendedSlide());
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
