import { Container, Search, SearchInput, SearchResultsContainer, UserPicture } from "./HeaderStyle";
import logo from "../../../assets/images/Logo_nitt_Entregaveis-04.png";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../mock/data";
import SearchResult from "./SearchResult";

import userImg from "../../../assets/images/userImg.jpg"

export default function Header() {
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([{name: "adnan", image: "http://"}]);

    return (
        <Container>
            <img src={logo} alt="Logo do NITT" />
            <Search>
                <SearchInput placeholder="Pesquisar..." value={search} onChange={e => handleSearch(e.target.value)} />
                {getSearchResultsDiv()}
            </Search>
            <UserPicture src={userImg} alt="Seu usuário" />
        </Container>
    )

    function handleSearch(newSearch) {
        setSearch(newSearch);
        // getNewSearchedItens(newSearch);
    }

    function getNewSearchedItens(newSearch) {
        axios.get(`${BASE_URL}/patentes?nome=${newSearch}`)
            .then(response => setSearchResults(response.data))
            .catch(error => console.log(error));
    }

    function getSearchResultsDiv() {
        return (
            searchResults[0] ? 
                <SearchResultsContainer>{searchResults.map(result => <SearchResult name={result.name} imagem={result.image} />)}</SearchResultsContainer>
                : ""
        );
    }
}