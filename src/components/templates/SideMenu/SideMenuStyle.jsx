import styled from "styled-components";

const NavbarHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 25px;
`

const UserNameSpan = styled.span`
    font-weight: bold;
`

const NavbarContainer = styled.div`
    font-size: 20px;
    padding: 20px 20px;
    box-sizing: border-box;
    flex-direction: column;
    width: 40%;
    height: 100%;
    position: fixed;
    right: 0;
    top: 0;
    width: 30%;
    background-color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: #3c3aa2;
    color: white;

    display: ${props => props.display ? "flex" : "none"}
`

export { NavbarContainer, NavbarHeader, UserNameSpan }