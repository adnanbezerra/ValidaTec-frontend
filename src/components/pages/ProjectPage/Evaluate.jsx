import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL, config } from "../../../mock/data";
import UserContext from "../../contexts/UserContext";
import Button from "../../templates/Button/Button";
import { ButtonContainer } from "./PojectPageStyles";

export default function Evaluate(props) {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  function handleDelete() {
    const id = props.project.id;
    const promise = axios.delete(
      `${BASE_URL}/patent/${id}`,
      config(user.token)
    );
    promise.then(() => {
      navigate("/", { replace: true });
    });
  }

  /*   if (props.user.isAdmin === true) { */
  return (
    <ButtonContainer>
      <Button onClick={() => navigate(`/evaluate/${props.project.id}`)}>
        Avaliar
      </Button>
      <Button onClick={handleDelete}>Excluir</Button>
    </ButtonContainer>
  );
}
/* } */
