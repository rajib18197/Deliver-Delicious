import styled from "styled-components";
import Heading from "./Heading";
import img1 from "../assets/Image1.png";

const StyledHero = styled.div`
  max-width: 100rem;
  margin: 10rem auto;
  background-color: #f97316;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 9.6rem;
  border-radius: 20px;
  padding: 4rem;
`;

const HeroTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-left: 5rem;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;
const HeroImageBox = styled.div``;

export default function Hero() {
  return (
    <StyledHero>
      <HeroTextBox>
        <Heading as="h1">
          Deliver Food to your <br /> Door Step|
        </Heading>
        <Heading as="h4">Authentic Food|, Quick Service, Fast Delivery</Heading>
      </HeroTextBox>

      <HeroImageBox>
        <Img src={img1} />
      </HeroImageBox>
    </StyledHero>
  );
}
