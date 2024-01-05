import styled from "styled-components";
import Logo from "./Logo";
import { IoLogoGoogle, IoLogoTwitter, IoLogoInstagram } from "react-icons/io";
import img2 from "../assets/Image2.png";

const socialLinks = [
  { id: 1, icon: <IoLogoGoogle /> },
  { id: 2, icon: <IoLogoTwitter /> },
  { id: 3, icon: <IoLogoInstagram /> },
];

const StyledFooter = styled.div`
  padding: 3rem;
  background-color: #f97316;
`;

const Container = styled.div`
  max-width: 100rem;
  margin: auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 9.6rem;
`;

const SubscribeBox = styled.input`
  background-color: #ffffff;
  border: none;
  padding: 0.7rem 2rem;
  border-radius: 6px;
  width: 68%;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  position: relative;

  &::-webkit-input-placeholder {
    color: #c4c2c2;
    font-size: 1.3rem;
    /* transform: translateX(20px); */
  }
`;
const FooterTextBox = styled.div`
  position: relative;
  grid-row: 1 / span 1;
  grid-column: 1 / span 1;
  height: max-content;
  /* background-color: green; */
  margin-top: 3rem;
`;
const FooterImageBox = styled.div`
  grid-row: 1 / span 2;
  grid-column: 2 / -1;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  right: 33%;
  height: 90%;

  transform: translate(0, -50%);

  display: inline-block;
  padding: 1.3rem 2rem;
  background-color: purple;
  color: white;
  border-radius: 10px;
  font-size: 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  outline: none;

  & svg {
    width: 2rem;
    height: 2rem;
    fill: orangered;
  }
`;

const Copyright = styled.div`
  /* background-color: green; */
  align-self: start;

  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-column: 1 / span 1;
  grid-row: 2 / span 1;
`;

const Socials = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
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
  background-color: orangered;
  justify-self: end;

  & svg {
    height: 2rem;
    width: 2rem;
    fill: white;
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
          <Button>Subscribe</Button>
        </FooterTextBox>

        <Copyright>
          <div>
            <Logo color="white">
              Pti<span>.</span>
            </Logo>
            <p>Copyright Tripp.All right Reserved</p>
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
