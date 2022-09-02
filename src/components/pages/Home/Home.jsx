import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import Header from "../../templates/Header/Header";
import { Container } from "./HomeStyles";

export default function Home() {

    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    useEffect(() => {
        const userFromStorage = localStorage.getItem('user');
        if (userFromStorage) {
            setUser(JSON.parse(userFromStorage));
            navigate('/', { replace: true });
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Header />
            <Container>
                Oii
            </Container>
        </>
    )
}