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
  ProjectContainer,
  ProjectCreators,
  ProjectDescription,
  ProjectTitle,
} from "../MyProjectsPage/MyProjectsStyles";
import Button from "../../templates/Button/Button";
import axios from "axios";
import { BASE_URL } from "../../../mock/data";

export default function Home() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [myProjects, setMyProjects] = useState([]);
  const [images, setImages] = useState([]);
  const img = [];

  useEffect(() => {
    const userFromStorage = localStorage.getItem("user");
    if (userFromStorage) {
      setUser(JSON.parse(userFromStorage));
      navigate("/", { replace: true });
    }
    const promise = axios.get(`${BASE_URL}/patents`);
    promise.then((response) => setMyProjects(response.data));

    const imgPromise = axios.get(`${BASE_URL}/patents`);
    imgPromise.then((response) => {
      const length = Math.ceil(myProjects.length / 3);
      for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * response.data.length);
        img.push(response.data[index]);
      }
      setImages(img);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getMyProjects() {
    return myProjects.length === 0 ? (
      <NoProjectsText>Sem projetos registrados ainda</NoProjectsText>
    ) : (
      myProjects.map((project, index) => getProjectCard(project, index))
    );
  }

  function getProjectCard(project, index) {
    return (
      <ProjectContainer key={index}>
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
          <Button onClick={() => navigate(`/project/${project.id}`)}>
            Clique aqui para saber mais
          </Button>
        </div>
      </ProjectContainer>
    );
  }

  return (
    <>
      <Header />
      <Container>
        {images.length > 0 ? (
          <Carousel
            centerMode
            infiniteLoop
            autoPlay
            interval={5000}
            showStatus={false}
            showThumbs={false}
          >
            {images.map((project, index) => (
              <ProjectsCarousel
                project={project}
                key={index}
                onClick={() => navigate(`/project/${project.id}`)}
              />
            ))}
          </Carousel>
        ) : (
          ""
        )}
        <h2>Projetos Recentes</h2>
        {getMyProjects()}
      </Container>
    </>
  );
}
