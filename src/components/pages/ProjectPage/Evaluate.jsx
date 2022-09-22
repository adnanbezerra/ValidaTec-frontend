import { useNavigate } from "react-router-dom";
import Button from "../../templates/Button/Button";
import { ButtonContainer } from "./PojectPageStyles";

export default function Evaluate(props) {
  const navigate = useNavigate;

  async function handleDelete(e) {
    const id = e.target.value.id;
    navigate("/", { replace: true });
  }

  if (props.isAdmin === true) {
    return (
      <ButtonContainer>
        <Button onClick={() => navigate(`/evaluate/${props.project.id}`)}>
          Avaliar
        </Button>
        <Button onClick={handleDelete}>Excluir</Button>
      </ButtonContainer>
    );
  }
}
