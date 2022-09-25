import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../../mock/data";
import UserContext from "../../contexts/UserContext";
import Header from "../../templates/Header/Header";
import {
  Container,
  NoProjectsText,
  PageTitle,
  ProjectContainer,
  ProjectCreators,
  ProjectDescription,
  ProjectTitle,
} from "./MyProjectsStyles";
import Button from "../../templates/Button/Button";

export default function MyProjectPage() {
  const { user, setUser } = useContext(UserContext);
  const [myProjects, setMyProjects] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const userFromStorage = localStorage.getItem("user");
    if (userFromStorage) {
      setUser(JSON.parse(userFromStorage));
      navigate("/my-projects", { replace: true });
    } else {
      navigate("/login", { replace: true });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/patents/${user.name}`)
      .then((response) => {
        setMyProjects(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getMyProjects() {
    return myProjects.length === 0 ? (
      <NoProjectsText>Sem projetos registrados ainda</NoProjectsText>
    ) : (
      myProjects.map((project) => getProjectCard(project))
    );
  }

  function getProjectCard(project) {
    return (
      <ProjectContainer onClick={() => navigate(`/project/${project.id}`)}>
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
          <Button>Clique aqui para saber mais</Button>
        </div>
      </ProjectContainer>
    );
  }

  return (
    <>
      <Header />
      <Container>
        <PageTitle>Seus projetos</PageTitle>
        {getMyProjects()}
      </Container>
    </>
  );
}
