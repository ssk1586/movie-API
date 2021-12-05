import { Link } from "react-router-dom";
import styled from "styled-components/macro";

export const ComponentWrapper = styled.div`
    min-width: 150px;
    min-height: 200px;
    background-color: #19181F;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 20px;
    margin: 50px;
    color: white;
`;

export const Button = styled(Link)`
    margin-top: 10px;
    padding: 12px;
    background-color: #0F1115;
    text-decoration: none;
    color: white;
    border-radius: 10px;

    &:hover {
        background-color: #FF2626;
    }
`;


