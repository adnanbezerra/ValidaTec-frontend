import { SearchContainerMobile, SearchResults, SearchContainer } from "./SearchBoxStyles";
import { AiOutlineSearch } from 'react-icons/ai';
import axios from "axios";
import { BASE_URL } from "../../../mock/data";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBox() {
    const [usersResults, setUsersResults] = useState(false);
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    function handleNewSearch(text) {

        if (text.length < 3) setUsersResults([]);
        console.log(`${BASE_URL}/user/${text}`)

        axios.get(`${BASE_URL}/patents/${text}`)
            .then(response => {
                setUsers(response.data)
                setUsersResults(true);
            })
            .catch(error => {
                console.error(error);
            });
    }

    function getSearchResults() {
        return (
            <SearchResults>
                {(users).map((user) => {
                    return (
                        <div onClick={() => navigateAndUpdatePage(user.id)} style={{ display: 'flex', width: '100%', alignItems: 'center', marginTop: '10px' }}>
                            <img src={user.imageUrl} alt="" />
                            {user.name}
                        </div>
                    )
                })}
            </SearchResults>
        );
    };

    function navigateAndUpdatePage(id) {
        navigate(`/user/${id}`)
    }

    function getSearchContainerForMobile() {
        return (
            <SearchContainerMobile>
                <input
                    onChange={e => handleNewSearch(e.target.value)}
                    placeholder='Search for people'
                />
                <AiOutlineSearch />

            </SearchContainerMobile>
        )
    }

    function getSearchContainerForWeb() {
        return (
            <SearchContainer>
                <input
                    minLength={3}
                    debounceTimeout={300}
                    onChange={e => handleNewSearch(e.target.value)}
                    placeholder='Search for people'
                />
                <AiOutlineSearch />

            </SearchContainer>
        )
    }

    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {getSearchContainerForWeb()};
            {/* {getSearchContainerForMobile()}; */}
            {(usersResults === true) ? getSearchResults() : <></>}
        </div>
    )
}