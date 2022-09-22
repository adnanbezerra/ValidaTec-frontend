import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
  margin-left: 5rem;
  margin-right: 1rem;
  display: flex;
  height: 60%;
`;

export const ImageContainer = styled.div`
  margin-right: 2rem;

  img {
    width: 36rem;
    height: 27rem;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 1rem;
`;

export const Creator = styled.p`
  font-size: 25px;
  color: #6f6f6f;
`;

export const Description = styled.p`
  font-size: 30px;

  span {
    font-weight: 700;
  }
`;

export const Score = styled.p`
  font-size: 35px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;

  button {
    margin-top: 1rem;
  }
`;
