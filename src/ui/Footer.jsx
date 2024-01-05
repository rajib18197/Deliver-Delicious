import styled from "styled-components";
import Logo from "./Logo";
import { IoLogoGoogle, IoLogoTwitter, IoLogoInstagram } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import img2 from "../assets/Image2.png";

const socialLinks = [
  { id: 1, icon: <IoLogoGoogle /> },
  { id: 2, icon: <IoLogoTwitter /> },
  { id: 3, icon: <IoLogoInstagram /> },
];

const StyledFooter = styled.div`
  padding: 3rem;
  background-color: #eab308;
`;

const Container = styled.div`
  max-width: 100rem;
  margin: auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 9.6rem;

  /**************************/
  /* BELOW 944px */
  /**************************/

  @media (max-width: 59em) {
    grid-template-columns: 1fr;
    justify-content: center;
    align-content: center;
  }
`;

const SubscribeBox = styled.input`
  background-color: #ffffff;
  border: none;
  padding: 0.7rem 2rem;
  border-radius: 11px;
  width: 68%;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  position: relative;

  &::-webkit-input-placeholder {
    color: #c4c2c2;
    font-size: 1.3rem;
  }

  /**************************/
  /* BELOW 944px */
  /**************************/

  @media (max-width: 59em) {
    /* margin: 0 auto; */
    width: 100%;
  }
`;
const FooterTextBox = styled.div`
  position: relative;
  grid-row: 1 / span 1;
  grid-column: 1 / span 1;
  height: max-content;
  margin-top: 3rem;

  /**************************/
  /* BELOW 944px */
  /**************************/

  @media (max-width: 59em) {
    margin-bottom: 3rem;
    /* width: max-content;
    margin: auto; */
  }
`;
const FooterImageBox = styled.div`
  grid-row: 1 / span 2;
  grid-column: 2 / -1;

  /**************************/
  /* BELOW 944px */
  /**************************/

  @media (max-width: 59em) {
    display: none;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  right: 33%;
  height: 90%;

  transform: translate(0, -50%);

  display: inline-block;
  padding: 1.3rem 2rem;
  background-color: #ea580c;
  color: white;
  border-radius: 10px;
  font-size: 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  outline: none;
  gap: 0.6rem;

  & svg {
    width: 2rem;
    height: 2rem;
    fill: white;
  }

  @media (max-width: 59em) {
    right: 1%;
    transform: translate(0, -50%);
    background: none;
    color: #ea580c;

    & svg {
      fill: #ea580c;
    }
  }
`;

const Copyright = styled.div`
  align-self: start;

  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-column: 1 / span 1;
  grid-row: 2 / span 1;

  & p {
    color: #121212;
    font-size: 1.5rem;
    padding-left: 1rem;
    font-weight: 600;
  }
  /**************************/
  /* BELOW 944px */
  /**************************/

  @media (max-width: 59em) {
    flex-direction: column;
    text-align: center;
    gap: 2rem;

    & p {
      margin-top: 1rem;
    }
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  /**************************/
  /* BELOW 944px */
  /**************************/

  @media (max-width: 59em) {
    order: -1;
  }
`;

const SocialButton = styled.button`
  display: inline-block;
  border: none;
  outline: none;
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  justify-self: end;

  & svg {
    height: 2rem;
    width: 2rem;
    fill: #ea580c;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  transform: translateY(-30px);
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <FooterTextBox>
          <SubscribeBox placeholder="Enter Your Email" />
          <Button>
            Subscribe <FaArrowRightLong />
          </Button>
        </FooterTextBox>

        <Copyright>
          <div>
            <Logo color="white">
              Pti<span>.</span>
            </Logo>
            <p>Copyright&copy;Tripp.All right Reserved</p>
          </div>

          <Socials>
            {socialLinks.map((link) => (
              <SocialButton key={link.id}>{link.icon}</SocialButton>
            ))}
          </Socials>
        </Copyright>

        <FooterImageBox>
          <Img src={img2} />
        </FooterImageBox>
      </Container>
    </StyledFooter>
  );
}
