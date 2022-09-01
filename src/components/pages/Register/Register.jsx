import { Container, FacaLogin, Label, LoginButton, LoginForm, LoginInput, Redirect } from "./RegisterStyle";
import logo from "../../../assets/images/Logo_nitt_Entregaveis-04.png";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../mock/data";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";

export default function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")
    const navigate = useNavigate();
    const [disable, setDisable] = useState(false);

    const { setUser } = useContext(UserContext);

    useEffect(() => {
        const userFromStorage = localStorage.getItem('user');
        if (userFromStorage) {
            setUser(JSON.parse(userFromStorage));
            navigate('/');
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function submitForm(event) {
        event.preventDefault();

        const registerInfo = { name: userName, email, password }

        axios.post(`${BASE_URL}/signup`, registerInfo)
            .then(response => {
                alert("Cadastro feito com sucesso!");
                navigate('/login');
            })
            .catch(error => {
                alert("Erro no cadastro! Tente novamente ou contate o administrador.")
                console.error(error)
            })
    }

    useEffect(() => {
        arePasswordsEqual();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [password, confirmPassword])

    return (
        <Container>
            <LoginForm onSubmit={submitForm}>
                <img src={logo} alt="Logo do NITT" />

                <FacaLogin>Cadastre-se no portal</FacaLogin>

                <Label>E-mail</Label>
                <LoginInput placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />

                <Label>Nome do usuário</Label>
                <LoginInput placeholder="Nome do usuário" value={userName} onChange={e => setUserName(e.target.value)} />

                <Label>Senha</Label>
                <LoginInput placeholder="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)} />

                <Label>Confirmar senha</Label>
                <LoginInput placeholder="Confirmar senha" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />

                {getButton()}

                <Redirect><Link to={'/register'} style={{ textDecoration: 'none', color: '#0b088f' }}>Não tem uma conta? Crie já!</Link></Redirect>
            </LoginForm>
        </Container>
    )

    function getButton() {
        return (disable ? <LoginButton disabled={true}>Registrar-se</LoginButton> : <LoginButton disabled={false}>Registrar-se</LoginButton>)
    }

    function arePasswordsEqual() {
        if (confirmPassword === "") setDisable(false);
        else if (confirmPassword !== "" && confirmPassword === password) setDisable(false);
        else setDisable(true);
    }
}