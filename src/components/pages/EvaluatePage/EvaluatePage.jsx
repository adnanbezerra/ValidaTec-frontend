import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
import axios from "axios";
import { BASE_URL, config } from "../../../mock/data";

export default function EvaluatePage() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [project, setProject] = useState({});
  const params = useParams();
  const [answer, setAnswer] = useState({
    patentId: 0,
    firstQuestion: 0,
    secondQuestion: 0,
    thirdQuestion: 0,
    fourthQuestion: 0,
    fifthQuestion: 0,
    sixthQuestion: 0,
    seventhQuestion: 0,
    eighthQuestion: 0,
    ninthQuestion: 0,
    tenthQuestion: 0,
    finalEvaluation: 0,
  });

  useEffect(() => {
    const userFromStorage = localStorage.getItem("user");
    if (!userFromStorage) {
      navigate("/", { replace: true });
    }
    setUser(JSON.parse(userFromStorage));

    if (user.isAdmin !== true) {
      navigate("/", { replace: true });
    }

    const promise = axios.get(`${BASE_URL}/patent/${params.id}`);
    promise.then((response) => setProject(response.data));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleEvaluation(e) {
    e.preventDefault();
    const final =
      (Number(answer.firstQuestion) +
        Number(answer.secondQuestion) +
        Number(answer.thirdQuestion) +
        Number(answer.fourthQuestion) +
        Number(answer.fifthQuestion) +
        Number(answer.sixthQuestion) +
        Number(answer.seventhQuestion) +
        Number(answer.eighthQuestion) +
        Number(answer.ninthQuestion) +
        Number(answer.tenthQuestion)) /
      10;

    setAnswer({ ...answer, finalEvaluation: final, patentId: project.id });
    const promise = axios.post(
      `${BASE_URL}/evaluation`,
      answer,
      config(user.token)
    );
    promise
      .then(() => navigate(`/project/${project.id}`))
      .catch((err) => {
        console.error(err);
      });
  }

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
              setAnswer({ ...answer, firstQuestion: e.target.value });
            }}
          >
            <label htmlFor="1">1</label>
            <input type="radio" value="1" id="1" />
            <label htmlFor="2">2</label>
            <input type="radio" value="2" id="2" />
            <label htmlFor="3">3</label>
            <input type="radio" value="3" id="3" />
            <label htmlFor="4">4</label>
            <input type="radio" value="4" id="4" />
            <label htmlFor="5">5</label>
            <input type="radio" value="5" id="5" />
            <label htmlFor="6">6</label>
            <input type="radio" value="6" id="6" />
            <label htmlFor="7">7</label>
            <input type="radio" value="7" id="7" />
            <label htmlFor="8">8</label>
            <input type="radio" value="8" id="8" />
            <label htmlFor="9">9</label>
            <input type="radio" value="9" id="9" />
            <label htmlFor="10">10</label>
            <input type="radio" value="10" id="10" />
          </QuestionRadio>
        </Question>
        <Question>
          <QuestionTitle>
            Quão organizada, competente e qualificada é a liderança do projeto?
          </QuestionTitle>
          <QuestionRadio
            onChange={(e) => {
              setAnswer({ ...answer, secondQuestion: e.target.value });
            }}
          >
            <label htmlFor="1">1</label>
            <input type="radio" value="1" id="1" />
            <label htmlFor="2">2</label>
            <input type="radio" value="2" id="2" />
            <label htmlFor="3">3</label>
            <input type="radio" value="3" id="3" />
            <label htmlFor="4">4</label>
            <input type="radio" value="4" id="4" />
            <label htmlFor="5">5</label>
            <input type="radio" value="5" id="5" />
            <label htmlFor="6">6</label>
            <input type="radio" value="6" id="6" />
            <label htmlFor="7">7</label>
            <input type="radio" value="7" id="7" />
            <label htmlFor="8">8</label>
            <input type="radio" value="8" id="8" />
            <label htmlFor="9">9</label>
            <input type="radio" value="9" id="9" />
            <label htmlFor="10">10</label>
            <input type="radio" value="10" id="10" />
          </QuestionRadio>
        </Question>
        <Question>
          <QuestionTitle>
            O quão madura e desenvolvida está a ideia?
          </QuestionTitle>
          <QuestionRadio
            onChange={(e) => {
              setAnswer({ ...answer, thirdQuestion: e.target.value });
            }}
          >
            <label htmlFor="1">1</label>
            <input type="radio" value="1" id="1" />
            <label htmlFor="2">2</label>
            <input type="radio" value="2" id="2" />
            <label htmlFor="3">3</label>
            <input type="radio" value="3" id="3" />
            <label htmlFor="4">4</label>
            <input type="radio" value="4" id="4" />
            <label htmlFor="5">5</label>
            <input type="radio" value="5" id="5" />
            <label htmlFor="6">6</label>
            <input type="radio" value="6" id="6" />
            <label htmlFor="7">7</label>
            <input type="radio" value="7" id="7" />
            <label htmlFor="8">8</label>
            <input type="radio" value="8" id="8" />
            <label htmlFor="9">9</label>
            <input type="radio" value="9" id="9" />
            <label htmlFor="10">10</label>
            <input type="radio" value="10" id="10" />
          </QuestionRadio>
        </Question>
        <Question>
          <QuestionTitle>
            Quão fácil é tornar a ideia conhecida pelo público alvo? Ela pode
            ser facilmente viralizada?
          </QuestionTitle>
          <QuestionRadio
            onChange={(e) => {
              setAnswer({ ...answer, fourthQuestion: e.target.value });
            }}
          >
            <label htmlFor="1">1</label>
            <input type="radio" value="1" id="1" />
            <label htmlFor="2">2</label>
            <input type="radio" value="2" id="2" />
            <label htmlFor="3">3</label>
            <input type="radio" value="3" id="3" />
            <label htmlFor="4">4</label>
            <input type="radio" value="4" id="4" />
            <label htmlFor="5">5</label>
            <input type="radio" value="5" id="5" />
            <label htmlFor="6">6</label>
            <input type="radio" value="6" id="6" />
            <label htmlFor="7">7</label>
            <input type="radio" value="7" id="7" />
            <label htmlFor="8">8</label>
            <input type="radio" value="8" id="8" />
            <label htmlFor="9">9</label>
            <input type="radio" value="9" id="9" />
            <label htmlFor="10">10</label>
            <input type="radio" value="10" id="10" />
          </QuestionRadio>
        </Question>
        <Question>
          <QuestionTitle>
            Refere-se a objetividade da implementação da solução tecnológica
          </QuestionTitle>
          <QuestionRadio
            onChange={(e) => {
              setAnswer({ ...answer, fifthQuestion: e.target.value });
            }}
          >
            <label htmlFor="1">1</label>
            <input type="radio" value="1" id="1" />
            <label htmlFor="2">2</label>
            <input type="radio" value="2" id="2" />
            <label htmlFor="3">3</label>
            <input type="radio" value="3" id="3" />
            <label htmlFor="4">4</label>
            <input type="radio" value="4" id="4" />
            <label htmlFor="5">5</label>
            <input type="radio" value="5" id="5" />
            <label htmlFor="6">6</label>
            <input type="radio" value="6" id="6" />
            <label htmlFor="7">7</label>
            <input type="radio" value="7" id="7" />
            <label htmlFor="8">8</label>
            <input type="radio" value="8" id="8" />
            <label htmlFor="9">9</label>
            <input type="radio" value="9" id="9" />
            <label htmlFor="10">10</label>
            <input type="radio" value="10" id="10" />
          </QuestionRadio>
        </Question>
        <Question>
          <QuestionTitle>
            O projeto é bem nichado e tem um público alvo bem definido e
            facilmente perceptível?
          </QuestionTitle>
          <QuestionRadio
            onChange={(e) => {
              setAnswer({ ...answer, sixthQuestion: e.target.value });
            }}
          >
            <label htmlFor="1">1</label>
            <input type="radio" value="1" id="1" />
            <label htmlFor="2">2</label>
            <input type="radio" value="2" id="2" />
            <label htmlFor="3">3</label>
            <input type="radio" value="3" id="3" />
            <label htmlFor="4">4</label>
            <input type="radio" value="4" id="4" />
            <label htmlFor="5">5</label>
            <input type="radio" value="5" id="5" />
            <label htmlFor="6">6</label>
            <input type="radio" value="6" id="6" />
            <label htmlFor="7">7</label>
            <input type="radio" value="7" id="7" />
            <label htmlFor="8">8</label>
            <input type="radio" value="8" id="8" />
            <label htmlFor="9">9</label>
            <input type="radio" value="9" id="9" />
            <label htmlFor="10">10</label>
            <input type="radio" value="10" id="10" />
          </QuestionRadio>
        </Question>
        <Question>
          <QuestionTitle>
            Quais possíveis parcerias para desenvolvimento da solução
            tecnológica e conteúdo quantitativo e qualitativo?
          </QuestionTitle>
          <QuestionRadio
            onChange={(e) => {
              setAnswer({ ...answer, seventhQuestion: e.target.value });
            }}
          >
            <label htmlFor="1">1</label>
            <input type="radio" value="1" id="1" />
            <label htmlFor="2">2</label>
            <input type="radio" value="2" id="2" />
            <label htmlFor="3">3</label>
            <input type="radio" value="3" id="3" />
            <label htmlFor="4">4</label>
            <input type="radio" value="4" id="4" />
            <label htmlFor="5">5</label>
            <input type="radio" value="5" id="5" />
            <label htmlFor="6">6</label>
            <input type="radio" value="6" id="6" />
            <label htmlFor="7">7</label>
            <input type="radio" value="7" id="7" />
            <label htmlFor="8">8</label>
            <input type="radio" value="8" id="8" />
            <label htmlFor="9">9</label>
            <input type="radio" value="9" id="9" />
            <label htmlFor="10">10</label>
            <input type="radio" value="10" id="10" />
          </QuestionRadio>
        </Question>
        <Question>
          <QuestionTitle>
            O quão fácil é simplificar o projeto, de modo que ele consuma o
            mínimo possível, maximizando a taxa de lucro?
          </QuestionTitle>
          <QuestionRadio
            onChange={(e) => {
              setAnswer({ ...answer, eighthQuestion: e.target.value });
            }}
          >
            <label htmlFor="1">1</label>
            <input type="radio" value="1" id="1" />
            <label htmlFor="2">2</label>
            <input type="radio" value="2" id="2" />
            <label htmlFor="3">3</label>
            <input type="radio" value="3" id="3" />
            <label htmlFor="4">4</label>
            <input type="radio" value="4" id="4" />
            <label htmlFor="5">5</label>
            <input type="radio" value="5" id="5" />
            <label htmlFor="6">6</label>
            <input type="radio" value="6" id="6" />
            <label htmlFor="7">7</label>
            <input type="radio" value="7" id="7" />
            <label htmlFor="8">8</label>
            <input type="radio" value="8" id="8" />
            <label htmlFor="9">9</label>
            <input type="radio" value="9" id="9" />
            <label htmlFor="10">10</label>
            <input type="radio" value="10" id="10" />
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
              setAnswer({ ...answer, ninthQuestion: e.target.value });
            }}
          >
            <label htmlFor="1">1</label>
            <input type="radio" value="1" id="1" />
            <label htmlFor="2">2</label>
            <input type="radio" value="2" id="2" />
            <label htmlFor="3">3</label>
            <input type="radio" value="3" id="3" />
            <label htmlFor="4">4</label>
            <input type="radio" value="4" id="4" />
            <label htmlFor="5">5</label>
            <input type="radio" value="5" id="5" />
            <label htmlFor="6">6</label>
            <input type="radio" value="6" id="6" />
            <label htmlFor="7">7</label>
            <input type="radio" value="7" id="7" />
            <label htmlFor="8">8</label>
            <input type="radio" value="8" id="8" />
            <label htmlFor="9">9</label>
            <input type="radio" value="9" id="9" />
            <label htmlFor="10">10</label>
            <input type="radio" value="10" id="10" />
          </QuestionRadio>
        </Question>
        <Question>
          <QuestionTitle>
            Se a solução proposta tem viabilidade financeira. Quais
            investimentos financeiro, tempo e RH são viáveis?
          </QuestionTitle>
          <QuestionRadio
            onChange={(e) => {
              setAnswer({ ...answer, tenthQuestion: e.target.value });
            }}
          >
            <label htmlFor="1">1</label>
            <input type="radio" value="1" id="1" />
            <label htmlFor="2">2</label>
            <input type="radio" value="2" id="2" />
            <label htmlFor="3">3</label>
            <input type="radio" value="3" id="3" />
            <label htmlFor="4">4</label>
            <input type="radio" value="4" id="4" />
            <label htmlFor="5">5</label>
            <input type="radio" value="5" id="5" />
            <label htmlFor="6">6</label>
            <input type="radio" value="6" id="6" />
            <label htmlFor="7">7</label>
            <input type="radio" value="7" id="7" />
            <label htmlFor="8">8</label>
            <input type="radio" value="8" id="8" />
            <label htmlFor="9">9</label>
            <input type="radio" value="9" id="9" />
            <label htmlFor="10">10</label>
            <input type="radio" value="10" id="10" />
          </QuestionRadio>
        </Question>
        <Button>Enviar</Button>
      </form>
    </Container>
  );
}
