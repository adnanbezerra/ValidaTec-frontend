import styled from "styled-components";

export default function ProjectsCarousel({ project, onClick }) {
  return (
    <Container onClick={onClick}>
      <img src={project.projectPicture} alt={`imagem de ${project.name}`} />
    </Container>
  );
}

const Container = styled.div`
  :hover {
    cursor: pointer;
  }
`;
