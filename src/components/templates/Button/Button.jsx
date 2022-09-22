import { ProjectButton } from "./ButtonStyles";

export default function Button(props) {
  return (
    <ProjectButton onClick={props.onClick}>{props.children}</ProjectButton>
  );
}
