import styled from "styled-components";

export const SubmitFormButton = styled.button`
        background-color: #0b088f;
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

export const FormInput = styled.input`
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

export const InputTitle = styled.p`
    color: black;
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 20px;
`

export const Form = styled.form`
    display: flex;
    width: 60%;
    flex-direction: column;    
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding-bottom: 30px;
`

export const PageTitle = styled.p`
    margin-top: 25px;
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 20px;
`

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    z-index: 0;
    position: relative;

    flex-direction: column;
`