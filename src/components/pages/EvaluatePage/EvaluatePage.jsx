import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import {
  Container,
  Question,
  QuestionRadio,
  QuestionTitle,
  Title,
} from "./EvaluatePageStyle";
import Button from "../../templates/Button/Button";
import Header from "../../templates/Header/Header";
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

  /* useEffect(() => {
    const userFromStorage = localStorage.getItem("user");
    if (!userFromStorage) {
      navigate("/", { replace: true });
    }
    setUser(JSON.parse(userFromStorage));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); */

  async function handleEvaluation() {}

  return (
    <Container>
      <Header />
      <Title>Avaliando o projeto: {project.name}</Title>
      <form onSubmit={handleEvaluation}>
        <Question>
          <QuestionTitle>
            O projeto pode ser facilmente integrado ao ecossistema de inovação e
            aceito pelo público?
          </QuestionTitle>
          <QuestionRadio
            onChange={(e) => {
              setAnswer({ ...answer, first: e.target.value });
            }}
          >
            <input type="radio" value="1" id="1" />
            <label for="1">1</label>
            <input type="radio" value="2" />
            <input type="radio" value="3" />
            <input type="radio" value="4" />
            <input type="radio" value="5" />
            <input type="radio" value="6" />
            <input type="radio" value="7" />
            <input type="radio" value="8" />
            <input type="radio" value="9" />
            <input type="radio" value="10" />
          </QuestionRadio>
        </Question>
        <Question>
          <QuestionTitle>
            Quão organizada, competente e qualificada é a liderança do projeto?
          </QuestionTitle>
          <QuestionRadio
            onChange={(e) => {
              setAnswer({ ...answer, second: e.target.value });
            }}
          >
            <input type="radio" value="1" />
            <input type="radio" value="2" />
            <input type="radio" value="3" />
            <input type="radio" value="4" />
            <input type="radio" value="5" />
            <input type="radio" value="6" />
            <input type="radio" value="7" />
            <input type="radio" value="8" />
            <input type="radio" value="9" />
            <input type="radio" value="10" />
          </QuestionRadio>
        </Question>
        <Question>
          <QuestionTitle>
            O quão madura e desenvolvida está a ideia?
          </QuestionTitle>
          <QuestionRadio
            onChange={(e) => {
              setAnswer({ ...answer, third: e.target.value });
            }}
          >
            <input type="radio" value="1" />
            <input type="radio" value="2" />
            <input type="radio" value="3" />
            <input type="radio" value="4" />
            <input type="radio" value="5" />
            <input type="radio" value="6" />
            <input type="radio" value="7" />
            <input type="radio" value="8" />
            <input type="radio" value="9" />
            <input type="radio" value="10" />
          </QuestionRadio>
        </Question>
        <Question>
          <QuestionTitle>
            Quão fácil é tornar a ideia conhecida pelo público alvo? Ela pode
            ser facilmente viralizada?
          </QuestionTitle>
          <QuestionRadio
            onChange={(e) => {
              setAnswer({ ...answer, fourth: e.target.value });
            }}
          >
            <input type="radio" value="1" />
            <input type="radio" value="2" />
            <input type="radio" value="3" />
            <input type="radio" value="4" />
            <input type="radio" value="5" />
            <input type="radio" value="6" />
            <input type="radio" value="7" />
            <input type="radio" value="8" />
            <input type="radio" value="9" />
            <input type="radio" value="10" />
          </QuestionRadio>
        </Question>
        <Question>
          <QuestionTitle>
            Refere-se a objetividade da implementação da solução tecnológica
          </QuestionTitle>
          <QuestionRadio
            onChange={(e) => {
              setAnswer({ ...answer, fifth: e.target.value });
            }}
          >
            <input type="radio" value="1" />
            <input type="radio" value="2" />
            <input type="radio" value="3" />
            <input type="radio" value="4" />
            <input type="radio" value="5" />
            <input type="radio" value="6" />
            <input type="radio" value="7" />
            <input type="radio" value="8" />
            <input type="radio" value="9" />
            <input type="radio" value="10" />
          </QuestionRadio>
        </Question>
        <Question>
          <QuestionTitle>
            O projeto é bem nichado e tem um público alvo bem definido e
            facilmente perceptível?
          </QuestionTitle>
          <QuestionRadio
            onChange={(e) => {
              setAnswer({ ...answer, sixth: e.target.value });
            }}
          >
            <input type="radio" value="1" />
            <input type="radio" value="2" />
            <input type="radio" value="3" />
            <input type="radio" value="4" />
            <input type="radio" value="5" />
            <input type="radio" value="6" />
            <input type="radio" value="7" />
            <input type="radio" value="8" />
            <input type="radio" value="9" />
            <input type="radio" value="10" />
          </QuestionRadio>
        </Question>
        <Question>
          <QuestionTitle>
            Quais possíveis parcerias para desenvolvimento da solução
            tecnológica e conteúdo quantitativo e qualitativo?
          </QuestionTitle>
          <QuestionRadio
            onChange={(e) => {
              setAnswer({ ...answer, seventh: e.target.value });
            }}
          >
            <input type="radio" value="1" />
            <input type="radio" value="2" />
            <input type="radio" value="3" />
            <input type="radio" value="4" />
            <input type="radio" value="5" />
            <input type="radio" value="6" />
            <input type="radio" value="7" />
            <input type="radio" value="8" />
            <input type="radio" value="9" />
            <input type="radio" value="10" />
          </QuestionRadio>
        </Question>
        <Question>
          <QuestionTitle>
            O quão fácil é simplificar o projeto, de modo que ele consuma o
            mínimo possível, maximizando a taxa de lucro?
          </QuestionTitle>
          <QuestionRadio
            onChange={(e) => {
              setAnswer({ ...answer, eighth: e.target.value });
            }}
          >
            <input type="radio" value="1" />
            <input type="radio" value="2" />
            <input type="radio" value="3" />
            <input type="radio" value="4" />
            <input type="radio" value="5" />
            <input type="radio" value="6" />
            <input type="radio" value="7" />
            <input type="radio" value="8" />
            <input type="radio" value="9" />
            <input type="radio" value="10" />
          </QuestionRadio>
        </Question>
        <Question>
          <QuestionTitle>
            Quais políticas municipais, estaduais e nacionais de incentivo a
            área de conhecimento da tecnologia? Quais incentivos para
            desenvolvimento da tecnologia?
          </QuestionTitle>
          <QuestionRadio
            onChange={(e) => {
              setAnswer({ ...answer, nineth: e.target.value });
            }}
          >
            <input type="radio" value="1" />
            <input type="radio" value="2" />
            <input type="radio" value="3" />
            <input type="radio" value="4" />
            <input type="radio" value="5" />
            <input type="radio" value="6" />
            <input type="radio" value="7" />
            <input type="radio" value="8" />
            <input type="radio" value="9" />
            <input type="radio" value="10" />
          </QuestionRadio>
        </Question>
        <Question>
          <QuestionTitle>
            Se a solução proposta tem viabilidade financeira. Quais
            investimentos financeiro, tempo e RH são viáveis?
          </QuestionTitle>
          <QuestionRadio
            onChange={(e) => {
              setAnswer({ ...answer, tenth: e.target.value });
            }}
          >
            <input type="radio" value="1" />
            <input type="radio" value="2" />
            <input type="radio" value="3" />
            <input type="radio" value="4" />
            <input type="radio" value="5" />
            <input type="radio" value="6" />
            <input type="radio" value="7" />
            <input type="radio" value="8" />
            <input type="radio" value="9" />
            <input type="radio" value="10" />
          </QuestionRadio>
        </Question>
        <Button>Enviar</Button>
      </form>
    </Container>
  );
}
