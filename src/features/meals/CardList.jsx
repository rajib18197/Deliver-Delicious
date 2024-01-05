import styled from "styled-components";
import Card from "./Card";
import { useEffect, useRef } from "react";

const CardContainer = styled.div`
  position: relative;
  height: 30rem;
  transition: all 1s;
`;

export default function CardList({ list, slide }) {
  const ref = useRef();
  console.log(slide);

  useEffect(
    function () {
      // console.log(ref.current.children);
      [...ref.current.children].forEach((img, i) => {
        img.style.transform = `translateX(${100 * (i - slide)}%)`; // -500, -400, -300, -200, -100, 0, 100, 200
      });
    },
    [slide]
  );

  return (
    <CardContainer ref={ref}>
      {list.map((meal) => (
        <Card meal={meal} key={meal.id} />
      ))}
    </CardContainer>
  );
}
