import { Container, SearchContainer, SearchInput, SideMenuContainer } from "./HeaderStyle";
import logo from "../../../assets/images/Logo_nitt_Entregaveis-04.png";
import { useContext, useState } from "react";

import Navbar from "../SideMenu/SideMenu";
import SearchContext from "../../contexts/SearchContext";
import { AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai'
import { Link } from "react-router-dom";

export default function Header() {
    const { search, setSearch } = useContext(SearchContext);
    const [displaySideMenu, setDisplaySideMenu] = useState(false);

    return (
        <Container>
            <Link to={'/'}><img src={logo} alt="Logo do NITT" /></Link>
            <SearchContainer>
                <SearchInput placeholder="Pesquisar..." value={search} onChange={e => setSearch(e.target.value)} />
                <Link to={'/search'} style={{ color: "#3f3f3f", textDecoration: 'none' }} ><AiOutlineSearch style={{ fontSize: '25px' }} /></Link>
            </SearchContainer>
            <SideMenuContainer onClick={() => setDisplaySideMenu(true) }><AiOutlineMenu style={{fontSize: '30px'}} /></SideMenuContainer>
            <Navbar displaySideMenu={displaySideMenu} setDisplaySideMenu={setDisplaySideMenu} />
        </Container>
    )
}