import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../../mock/data";
import Header from "../../templates/Header/Header";
import { Container, EditButton, EditName, Form, UserName, UserTitle } from "./UserScreenStyles";

export default function UserScreen() {
    const user = { name: 'Adena', email: 'adnan@google.com' }
    const [password, setPassword] = useState("");
    const [disableButton, setDisableButton] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    function submitForm(event) {
        event.preventDefault();
        setDisableButton(true);

        const newUserInfo = { name, email, password };

        axios.put(`${BASE_URL}/user`, newUserInfo)
            .then(response => navigate('/user'))
            .catch(error => {
                setDisableButton(false);
                console.error(error)
            });
    }

    return (
        <>
            <Header />
            <Container>
                <UserTitle>Olá, <UserName>{user.name}</UserName>!</UserTitle>
                <Form onSubmit={submitForm}>
                    <EditName value={name} onChange={e => setName(e.target.value)} placeholder={user.name} />
                    <EditName value={email} onChange={e => setEmail(e.target.value)} placeholder={user.email} />
                    <EditName value={password} onChange={e => setPassword(e.target.value)} placeholder="Insira sua senha" />
                    <EditButton disabled={disableButton}>Atualizar informações</EditButton>
                </Form>
            </Container>
        </>
    )
}