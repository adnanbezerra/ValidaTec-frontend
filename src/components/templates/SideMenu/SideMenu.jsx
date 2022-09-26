import { NavbarContainer, NavbarHeader, UserNameSpan } from "./SideMenuStyle";
import { IoMdClose } from "react-icons/io";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL, config } from "../../../mock/data";

export default function Navbar({ displaySideMenu, setDisplaySideMenu }) {
  const { user, setUser } = useContext(UserContext);
  const verifyUser = user.token !== undefined;

  return (
    <NavbarContainer display={displaySideMenu}>
      <NavbarHeader>
        <div>
          Olá, <UserNameSpan>{getUsername()}</UserNameSpan>!
        </div>
        <IoMdClose
          style={{ fontSize: "30px", color: "white" }}
          onClick={() => setDisplaySideMenu(false)}
        />
      </NavbarHeader>
      {verifyUser ? (
        ""
      ) : (
        <Link
          to={"/login"}
          style={{ textDecoration: "none", color: "#fff", marginTop: "30px" }}
        >
          Fazer login
        </Link>
      )}
      {verifyUser ? (
        ""
      ) : (
        <Link
          to={"/register"}
          style={{ textDecoration: "none", color: "#fff", marginTop: "10px" }}
        >
          Cadastrar-se
        </Link>
      )}
      {verifyUser ? (
        <Link
          to={"/user"}
          style={{ textDecoration: "none", color: "#fff", marginTop: "10px" }}
        >
          Seu perfil
        </Link>
      ) : (
        ""
      )}
      {verifyUser ? (
        <Link
          to={"/my-projects"}
          style={{ textDecoration: "none", color: "#fff", marginTop: "10px" }}
        >
          Seus projetos
        </Link>
      ) : (
        ""
      )}
      {verifyUser ? (
        <Link
          to={"/register-project"}
          style={{ textDecoration: "none", color: "#fff", marginTop: "10px" }}
        >
          Cadastrar novo projeto
        </Link>
      ) : (
        ""
      )}
      {verifyUser ? (
        <Link
          to={"/login"}
          style={{ textDecoration: "none", color: "#fff", marginTop: "10px" }}
        >
          <div onClick={logoff}>Logoff</div>
        </Link>
      ) : (
        ""
      )}
    </NavbarContainer>
  );

  async function logoff() {
    const promise = axios.delete(`${BASE_URL}/logoff`, config(user.token));

    promise
      .then((response) => {
        localStorage.removeItem("user");
        setUser({});
      })
      .catch((error) => {
        console.error(error);
        alert("Falha ao fazer logoff! Contate o administrador.");
      });
  }

  function getUsername() {
    return verifyUser ? user.name : "Novo usuário";
  }
}
