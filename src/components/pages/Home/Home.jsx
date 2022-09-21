import { useContext, useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import UserContext from "../../contexts/UserContext";
import Header from "../../templates/Header/Header";
import { Container } from "./HomeStyles";
import ProjectsCarousel from "./ProjectsCarousel";
import {
  NoProjectsText,
  ProjectButton,
  ProjectContainer,
  ProjectCreators,
  ProjectDescription,
  ProjectTitle,
} from "../MyProjectsPage/MyProjectsStyles";

export default function Home() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    const userFromStorage = localStorage.getItem("user");
    if (userFromStorage) {
      setUser(JSON.parse(userFromStorage));
      navigate("/", { replace: true });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [myProjects, setMyProjects] = useState([
    {
      id: 1,
      name: "Como assim mano slk",
      creators: "Adena, Lele",
      description: "Esse é um projeot muito legal pq sim",
      projectPicture:
        "https://img.a.transfermarkt.technology/portrait/big/353108-1605189960.jpg?lm=1",
    },
    {
      id: 2,
      name: "Como assim mano slk",
      creators: "Adena, Lele",
      description: "Esse é um projeot muito legal pq sim",
      projectPicture:
        "https://img.a.transfermarkt.technology/portrait/big/353108-1605189960.jpg?lm=1",
    },
  ]);

  const images = [
    {
      image:
        "https://epipoca.com.br/wp-content/uploads/2022/04/luffy-one-piece-1015.jpg",
      title: "Nome do Projeto",
    },
    {
      image:
        "https://epipoca.com.br/wp-content/uploads/2022/04/luffy-one-piece-1015.jpg",
      title: "Nome do Projeto",
    },
    {
      image:
        "https://epipoca.com.br/wp-content/uploads/2022/04/luffy-one-piece-1015.jpg",
      title: "Nome do Projeto",
    },
  ];

  function getMyProjects() {
    return myProjects.length === 0 ? (
      <NoProjectsText>Sem projetos registrados ainda</NoProjectsText>
    ) : (
      myProjects.map((project, index) => getProjectCard(project, index))
    );
  }

  function getProjectCard(project, index) {
    return (
      <ProjectContainer
        onClick={() => navigate(`/project/${project.id}`)}
        key={index}
      >
        <img src={project.projectPicture} alt="" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: "10px",
          }}
        >
          <ProjectTitle>{project.name}</ProjectTitle>
          <ProjectCreators>Criadores: {project.creators}</ProjectCreators>
          <ProjectDescription>{project.description}</ProjectDescription>
          <ProjectButton>Clique aqui para saber mais</ProjectButton>
        </div>
      </ProjectContainer>
    );
  }

  return (
    <>
      <Header />
      <Container>
        <Carousel
          centerMode
          infiniteLoop
          autoPlay
          interval={5000}
          showStatus={false}
          showThumbs={false}
        >
          {images.map((project, index) => (
            <ProjectsCarousel project={project} key={index} />
          ))}
        </Carousel>
        <h2>Projetos Recentes</h2>
        {getMyProjects()}
      </Container>
    </>
  );
}
