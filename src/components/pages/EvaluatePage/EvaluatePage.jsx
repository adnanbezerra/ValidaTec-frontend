import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import { Container, Title } from "./EvaluatePageStyle";
import Question from "./Question";
import Button from "../../templates/Button/Button";
import { useState } from "react";

export default function EvaluatePage(props) {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [answer, setAnswer] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
    fifth: "",
    sixth: "",
    seventh: "",
    eighth: "",
    nineth: "",
    tenth: "",
  });
  const questions = [
    {
      question:
        "O projeto pode ser facilmente integrado ao ecossistema de inovação e aceito pelo público?",
      answer: answer.first,
    },
    {
      question:
        "Quão organizada, competente e qualificada é a liderança do projeto?",
      answer: answer.second,
    },
    {
      question: "O quão madura e desenvolvida está a ideia?",
      answer: answer.third,
    },
    {
      question:
        "Quão fácil é tornar a ideia conhecida pelo público alvo? Ela pode ser facilmente viralizada?",
      answer: answer.fourth,
    },
    {
      question:
        "Refere-se a objetividade da implementação da solução tecnológica",
      answer: answer.fifth,
    },
    {
      question:
        "O projeto é bem nichado e tem um público alvo bem definido e facilmente perceptível?",
      answer: answer.sixth,
    },
    {
      question:
        "Quais possíveis parcerias para desenvolvimento da solução tecnológica e conteúdo quantitativo e qualitativo?",
      answer: answer.seventh,
    },
    {
      question:
        "O quão fácil é simplificar o projeto, de modo que ele consuma o mínimo possível, maximizando a taxa de lucro?",
      answer: answer.eighth,
    },
    {
      question:
        "Quais políticas municipais, estaduais e nacionais de incentivo a área de conhecimento da tecnologia? Quais incentivos para desenvolvimento da tecnologia?",
      answer: answer.nineth,
    },
    {
      question:
        "Se a solução proposta tem viabilidade financeira. Quais investimentos financeiro, tempo e RH são viáveis?",
      answer: answer.tenth,
    },
  ];

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
    if (!userFromStorage) {
      navigate("/", { replace: true });
    }
    setUser(JSON.parse(userFromStorage));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleEvaluation() {}

  return (
    <Container>
      <Title>Avaliando o projeto: {project.name}</Title>
      <form onSubmit={handleEvaluation}>
        {questions.map((question, index) => (
          <Question question={question} key={index} />
        ))}
        <Button>Enviar</Button>
      </form>
    </Container>
  );
}
