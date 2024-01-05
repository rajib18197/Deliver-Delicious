import styled from "styled-components";
import Heading from "./Heading";
import img1 from "../assets/Image1.png";

const StyledHero = styled.div`
  max-width: 100rem;
  margin: 10rem auto;
  background-color: #eab308;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 9.6rem;
  border-radius: 20px;
  padding: 4rem;

  /**************************/
  /* BELOW 944px */
  /**************************/

  @media (max-width: 59em) {
    grid-template-columns: 1fr;
    gap: 4.6rem;
    background: none;
  }

  @media (max-width: 42em) {
    margin: 3rem 0;
  }
`;

const HeroTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-left: 5rem;

  /**************************/
  /* BELOW 944px */
  /**************************/

  @media (max-width: 59em) {
    text-align: center;
    padding-left: 0;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  /**************************/
  /* BELOW 944px */
  /**************************/

  @media (max-width: 59em) {
    max-width: 100%;
    width: 90rem;
    justify-self: center;
  }

  /**************************/
  /* BELOW 944px */
  /**************************/
`;
const HeroImageBox = styled.div`
  position: relative;
  @media (max-width: 59em) {
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 75%;
      background-color: #eab308;
      z-index: -2;
    }
  }
`;

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
