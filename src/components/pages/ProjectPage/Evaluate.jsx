import { useNavigate } from "react-router-dom";
import Button from "../../templates/Button/Button";
import { ButtonContainer } from "./PojectPageStyles";

export default function Evaluate(props) {
  const navigate = useNavigate();
  async function handleDelete() {
    const id = props.project.id;
    /* TODO: requisition to delete */
    navigate("/", { replace: true });
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
