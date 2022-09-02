import axios from "axios";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL, config } from "../../../mock/data";
import UserContext from "../../contexts/UserContext";
import Header from "../../templates/Header/Header";
import { Container, Form, FormInput, InputTitle, PageTitle, SubmitFormButton } from "./CreateProjectStyle";

export default function CreateProject() {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [creators, setCreators] = useState("");
    const [description, setDescription] = useState("");
    const [projectPicture, setProjectPicture] = useState("");

    useEffect(() => {
        const userFromStorage = localStorage.getItem('user');
        if (userFromStorage) {
            setUser(JSON.parse(userFromStorage));
            navigate('/register-project', { replace: true });
        } else {
            navigate('/login', { replace: true });
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function submitForm(event) {
        event.preventDefault();

        const header = config(user.token === undefined ? "" : user.token);
        const body = { name, creators, description, projectPicture }

        axios.post(`${BASE_URL}/patent`, body, header)
            .then(response => {
                alert("Projeto cadastrado com sucesso! Em breve ele será avaliado pela moderação.");
                navigate('/', { replace: true });
            })
            .catch(error => {
                console.error(error);
                alert("Falha no cadastro. Consulte a moderação para saber mais")
            })
    }

    return (
        <>
            <Header />
            <Container>
                <PageTitle>Cadastre já o seu projeto!</PageTitle>
                <Form onSubmit={submitForm}>
                    <InputTitle>Nome do projeto</InputTitle>
                    <FormInput value={name} onChange={e => setName(e.target.value)} placeholder='Insira o nome do projeto...' />

                    <InputTitle>Criadores do projeto</InputTitle>
                    <FormInput value={creators} onChange={e => setCreators(e.target.value)} placeholder='Insira os criadores do projeto...' />

                    <InputTitle>Descrição do projeto</InputTitle>
                    <FormInput value={description} onChange={e => setDescription(e.target.value)} placeholder='Insira a descrição do projeto...' />

                    <InputTitle>Link para uma imagem do projeto</InputTitle>
                    <FormInput value={projectPicture} onChange={e => setProjectPicture(e.target.value)} placeholder='Insira uma imagem para o projeto...' />

                    <SubmitFormButton>Submeter projeto!</SubmitFormButton>
                </Form>
            </Container>
        </>
    )
}