import styled from 'styled-components';

export const LoginBox = styled.div`
    display: inline-block;
    border: 1px solid white;
    border-radius: 10px;
    box-shadow: 0 0 10px gray;
    width: 300px;
    height: 300px;
    margin: auto;
    margin-top: 40px;
`;

export const Input = styled.input`
    border: none;
    border-bottom: 1px solid gray;
    width: 250px;
    padding: 5px;
    margin-top: 10px;
`;

export const Submit = styled.input`
    border: none;
    border-bottom: 1px solid #630000;
    color: black;
    width: 100px;
    padding: 5px;
    font-size: 14px;
    margin-top: 40px;

    :hover {
        background-color: #630000;
        color: white;
        cursor: pointer;
    }
`;

export const Status = styled.div`
    font-size: 20px;
    color: #630000;
    padding: 20px;
`;