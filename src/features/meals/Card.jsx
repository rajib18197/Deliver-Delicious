import { useEffect, useRef } from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 19rem;
  height: 25rem;
  transition: transform 1s ease-in-out;
`;

const Img = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 100%;
`;

const Text = styled.p`
  font-size: 1.6rem;
  text-align: center;
`;

export default function Card({ meal }) {
  const { name, image } = meal;

  return (
    <StyledCard>
      <Img src={image} />
      <Text>{name}</Text>
    </StyledCard>
  );
}
