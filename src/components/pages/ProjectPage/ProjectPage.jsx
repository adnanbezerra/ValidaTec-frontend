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
import { useEffect, useContext } from "react";
import UserContext from "../../contexts/UserContext";
import Evaluate from "./Evaluate";

export default function ProjectPage() {
  const { user, setUser } = useContext(UserContext);
  const project = {
    id: 3,
    name: "Como assim mano slk",
    creators: "Adena, Lele",
    description:
      "Esse é um projeot muito legal pq sim Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit fugiat ducimus animi nulla doloribus tenetur, vel veniam possimus? Atque recusandae odio fuga fugiat reiciendis in voluptates illum ad aspernatur consequuntur!",
    projectPicture:
      "https://epipoca.com.br/wp-content/uploads/2022/04/luffy-one-piece-1015.jpg",
    finalEvaluation: 8,
  };

  useEffect(() => {
    const userFromStorage = localStorage.getItem("user");
    if (userFromStorage) {
      setUser(JSON.parse(userFromStorage));
    }

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
            {project.finalEvaluation
              ? `Nota do Projeto: ${project.finalEvaluation}/10`
              : "Nota do Projeto: N/A"}
          </Score>
          {Evaluate(user, project)}
        </DetailsContainer>
      </Container>
    </>
  );
}
