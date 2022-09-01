import { Container, SideMenuContainer } from "./HeaderStyle";
import logo from "../../../assets/images/Logo_nitt_Entregaveis-04.png";
import { useState } from "react";
import Navbar from "../SideMenu/SideMenu";
import { AiOutlineMenu } from 'react-icons/ai'
import { Link } from "react-router-dom";
import SearchBox from "../SearchBox/SearchBox";

export default function Header() {
    const [displaySideMenu, setDisplaySideMenu] = useState(false);

    return (
        <Container>
            <Link to={'/'}><img src={logo} alt="Logo do NITT" /></Link>

            <SearchBox />

            <SideMenuContainer onClick={() => setDisplaySideMenu(true) }><AiOutlineMenu style={{fontSize: '30px'}} /></SideMenuContainer>
            <Navbar displaySideMenu={displaySideMenu} setDisplaySideMenu={setDisplaySideMenu} />
        </Container>
    )
}