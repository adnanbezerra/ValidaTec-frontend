import Header from "../../templates/Header/Header";
import {
  ButtonContainer,
  Container,
  Creator,
  Description,
  DetailsContainer,
  ImageContainer,
  Score,
  Title,
} from "./PojectPageStyles";
import Button from "../../templates/Button/Button";
import { useNavigate } from "react-router-dom";

export default function ProjectPage() {
  const navigate = useNavigate();
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

  async function handleDelete(e) {
    const id = e.target.value.id;
    navigate("/", { replace: true });
  }

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
          <ButtonContainer>
            <Button onClick={() => navigate(`/evaluate/${project.id}`)}>
              Avaliar
            </Button>
            <Button onClick={handleDelete}>Excluir</Button>
          </ButtonContainer>
        </DetailsContainer>
      </Container>
    </>
  );
}
