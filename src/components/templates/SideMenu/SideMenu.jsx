import { NavbarContainer, NavbarHeader, UserNameSpan } from "./SideMenuStyle";
import { IoMdClose } from 'react-icons/io';
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Navbar({ displaySideMenu, setDisplaySideMenu }) {

    const { user } = useContext(UserContext);
    const verifyUser = user.token !== undefined;

    console.log(user);

    return (
        <NavbarContainer display={displaySideMenu}>
            <NavbarHeader>
                <div>Olá, <UserNameSpan>{getUsername()}</UserNameSpan>!</div>
                <IoMdClose style={{ fontSize: '30px', color: 'white' }} onClick={() => setDisplaySideMenu(false)} />
            </NavbarHeader>
            {verifyUser ? "" : <Link to={'/login'} style={{ textDecoration: 'none', color: '#fff', marginTop: '30px' }}>Fazer login</Link>}
            {verifyUser ? "" : <Link to={'/register'} style={{ textDecoration: 'none', color: '#fff', marginTop: '10px' }}>Cadastrar-se</Link>}
            {verifyUser ? <Link to={'/user'} style={{ textDecoration: 'none', color: '#fff', marginTop: '10px' }}>Seu perfil</Link> : ""}
            {verifyUser ? <Link to={'/projects'} style={{ textDecoration: 'none', color: '#fff', marginTop: '10px' }}>Seus projetos</Link> : ""}
            {verifyUser ? <Link to={'/register-project'} style={{ textDecoration: 'none', color: '#fff', marginTop: '10px' }}>Cadastrar novo projeto</Link> : ""}
            {verifyUser ? <div onClick={logoff} style={{ textDecoration: 'none', color: '#fff', marginTop: '10px' }}>Logoff</div> : ""}
        </NavbarContainer>
    )

    function logoff() {
        axios.post('/logoff', verifyUser ? user.token : "");
    }

    function getUsername() {
        return verifyUser ? user.name : "Novo usuário";
    }
}