import { Container, FacaLogin, Label, LoginButton, LoginForm, LoginInput } from "./LoginStyle";
import logo from "../../../assets/images/Logo_nitt_Entregaveis-04.png";
import { useContext, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../mock/data";
import UserContext from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    function submitForm(event) {
        event.preventDefault();

        const loginInfo = { email, password }

        axios.post(`${BASE_URL}/login`, loginInfo)
            .then(response => {
                setUser(response.data);
                navigate('/');
            })
            .catch(error => console.error(error))
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
            </LoginForm>
        </Container>
    )
}