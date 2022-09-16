import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
  z-index: 0;
  position: relative;

  img {
    height: 700px;
  }

  h2 {
    font-weight: 700;
    font-size: 50px;
    align-self: flex-start;
    margin: 30px 0 30px 140px;
  }

  .legend {
    font-size: 40px;
  }
`;

export { Container };
