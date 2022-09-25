import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 50px;
  margin-top: 4rem;
`;

export const Question = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

export const QuestionTitle = styled.h4`
  font-size: 28px;
`;

export const QuestionRadio = styled.div`
  input {
    width: 25px;
    height: 20px;
    margin-top: 1.5rem;
  }
`;
