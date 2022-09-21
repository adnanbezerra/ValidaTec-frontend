import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  z-index: 0;
  position: absolute;
  flex-direction: column;
  z-index: 1;
`;

export const PageTitle = styled.p`
  color: #0b088f;
  font-size: 45px;
  font-weight: bold;
  margin-bottom: 25px;
`;

export const NoProjectsText = styled.p`
  color: #000;
  font-weight: bold;
  font-size: 32px;
`;

export const ProjectContainer = styled.div`
  display: flex;
  width: 80%;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: fit-content;
  padding: 20px;
  margin-bottom: 20px;
  z-index: 1;

  img {
    border-radius: 5px;
    width: 200px;
    height: fit-content;
  }
`;

export const ProjectTitle = styled.p`
  font-size: 25px;
  font-weight: bold;
`;

export const ProjectCreators = styled.p`
  margin-top: 10px;
  font-size: 15px;
  color: #424242;
`;

export const ProjectDescription = styled.p`
  margin-top: 10px;
  font-size: 20px;
`;

export const ProjectButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #00aff0;
  height: 3rem;
  width: 12rem;
  margin-top: 8rem;
  color: #ffffff;

  :hover {
    cursor: pointer;
  }
`;
