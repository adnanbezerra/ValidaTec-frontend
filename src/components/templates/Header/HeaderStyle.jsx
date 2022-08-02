import styled from "styled-components";

const SideMenuContainer = styled.div`
    background-color: #01aff0;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const SearchContainer = styled.div`
    width: 300px;
    border-radius: 10px;
    box-sizing: border-box;
    border: 1px solid #b3b3b3;
    padding: 0 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`

const SearchInput = styled.input`
    width: 220px;
    height: 50px;
    border: 0;
    outline: none;
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

export {Container, SearchInput, SearchContainer, SideMenuContainer};