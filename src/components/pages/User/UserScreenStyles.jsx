import styled from "styled-components"

const EditButton = styled.button`
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

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    width: 40%;
    align-items: center;
    justify-content: center;
`

const EditName = styled.input`
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

const UserName = styled.span`
    color: #01aff0;
    font-size: 45px;
    font-weight: bold;
`

const UserTitle = styled.p`
    color: #0b088f;
    font-size: 45px;
    font-weight: bold;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    z-index: 0;
    position: relative;

    flex-direction: column;
`

export { Container, UserTitle, UserName, Form, EditButton, EditName };