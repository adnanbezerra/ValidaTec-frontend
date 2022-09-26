import Header from "../../templates/Header/Header";
import {
  Container,
  Creator,
  Description,
  DetailsContainer,
  ImageContainer,
  Score,
  Title,
} from "./PojectPageStyles";
import { useEffect, useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";
import Evaluate from "./Evaluate";
import axios from "axios";
import { BASE_URL } from "../../../mock/data";
import { useParams } from "react-router-dom";

export default function ProjectPage() {
  const { user, setUser } = useContext(UserContext);
  const [project, setProject] = useState({});
  const [evaluation, setEvaluation] = useState(0);
  const params = useParams();

  useEffect(() => {
    const userFromStorage = localStorage.getItem("user");
    if (userFromStorage) {
      setUser(JSON.parse(userFromStorage));
    }
    const promise = axios.get(`${BASE_URL}/patent/${params.id}`);
    promise.then((response) => setProject(response.data));

    const evaluation = axios.get(`${BASE_URL}/evaluation/${params.id}`);
    evaluation.then((response) => setEvaluation(response.data.finalEvaluation));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <Container>
        <ImageContainer>
          <img src={project.projectPicture} alt={project.name} />
        </ImageContainer>
        <DetailsContainer>
          <div>
            <Title>{project.name}</Title>
            <Creator>Criadores: {project.creators}</Creator>
          </div>
          <Description>
            <span>Descrição:</span> {project.description}
          </Description>
          <Score>
            {evaluation
              ? `Nota do Projeto: ${evaluation}/10`
              : "Nota do Projeto: N/A"}
          </Score>
          <Evaluate project={project} />
        </DetailsContainer>
      </Container>
    </>
  );
}
