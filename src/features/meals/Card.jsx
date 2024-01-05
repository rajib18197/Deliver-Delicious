import styled from "styled-components";

const StyledCard = styled.div``;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Text = styled.p`
  font-size: 1.6rem;
  text-align: center;
`;

export default function Card({ meal }) {
  const { Id, Name, ImageUrl } = meal;

  return (
    <StyledCard>
      <Img src={ImageUrl} />
      <Text>{Name}</Text>
    </StyledCard>
  );
}
