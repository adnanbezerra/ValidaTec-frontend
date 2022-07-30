import styled from "styled-components";

const Search = styled.div`
    display: flex;
    flex-direction: column;    
`

const SearchResultsContainer = styled.div`
    display: flex;

`

const UserPicture = styled.img`
    width: 80px !important;
    height: 80px;
    border-radius: 50%;
    border: 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const SearchResultContainer = styled.div``

const SearchInput = styled.input`
    width: 250px;
    height: 50px;
    padding-left: 20px;
    box-sizing: border-box;
    border-radius: 10px;
    border: 1px solid #b3b3b3;
`

const Container = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: sticky;
    top: 0;
    z-index: 2;

    img {
        width: 200px;
        
    }
`

export {Container, SearchInput, Search, SearchResultsContainer, SearchResultContainer, UserPicture};