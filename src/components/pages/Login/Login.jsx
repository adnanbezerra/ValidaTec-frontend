import { Container, FacaLogin, Label, LoginButton, LoginForm, LoginInput, Redirect } from "./LoginStyle";
import logo from "../../../assets/images/Logo_nitt_Entregaveis-04.png";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../mock/data";
import UserContext from "../../contexts/UserContext";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

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

        const loginInfo = { email, password }

        axios.post(`${BASE_URL}/signin`, loginInfo)
            .then(response => {
                setUser(response.data);
                localStorage.setItem('user', JSON.stringify(response.data));
                navigate('/');
            })
            .catch(error => {
                alert("Erro no login! Tente novamente ou contate o administrador.")
                console.error(error)
            });
    }

    return (
        <Container>
            <LoginForm onSubmit={submitForm}>
                <img src={logo} alt="Logo do NITT" />
                <FacaLogin>Acesse já o portal</FacaLogin>

                <Label>Seu e-mail</Label>
                <LoginInput placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />

                <Label>Sua senha</Label>
                <LoginInput placeholder="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)} />

                <LoginButton>Fazer login</LoginButton>

                <Redirect><Link to={'/register'} style={{ textDecoration: 'none', color: '#0b088f' }}>Não tem uma conta? Crie já!</Link></Redirect>
            </LoginForm>
        </Container>
    )
}