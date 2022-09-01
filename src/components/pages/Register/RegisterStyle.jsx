import styled from "styled-components";

const Label = styled.p`
    color: black;
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 20px;
`

const LoginInput = styled.input`
    border-radius: 5px;
    border: 1px solid #b3b3b3;
    box-sizing: border-box;

    width: 70%;
    height: 50px;
    font-size: 20px;
    padding-left: 20px;
    font-size: 20px;

    margin-bottom: 20px;
`

export const Redirect = styled.p`
    margin-top: 35px;
    font-size: 20px;
`

const LoginButton = styled.button`
    background-color: ${props => props.disabled ? "#514edb" : "#0b088f"};
    border-radius: 5px;
    border: 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    margin-top: 15px;

    width: 70%;
    height: 50px;
    color: white;
    font-size: 20px;

    :hover{
        cursor: pointer;
        transform: scale(1.1);
        transition-duration: 0.2s;
    }
`

const FacaLogin = styled.p`
    margin-top: 30px;
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 20px;
`

const LoginForm = styled.form`
    border-radius: 5px;
    width: 60%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 50px 30px;
    box-sizing: border-box;

    img{
        width: 300px;
    }
`

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;

    background-color: #514edb;
`

export { Container, LoginForm, FacaLogin, LoginButton, LoginInput, Label }