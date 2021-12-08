import styled from "styled-components/macro";

export const MovieItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 70px;
    padding: 30px;
`;

export const Background = styled.div`
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

export const MovieImg = styled.img`
    width: 310px;
    height: 460px;
    border-radius: 10px;
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    color: white;
    max-width: 550px;
`;

export const Title = styled.div`
    font-size: 38px;
    font-weight: bold;
`;

export const About = styled.div`
    font-size: 14px;
    color: white;
`;

export const Date = styled.div``;

export const Range = styled.div`
    display: flex;
    gap: 30px;
`;

export const Button = styled.button`
    padding: 8px 15px;
    
    background-color:  ${props => props.color};
    max-width: 260px;
    text-decoration: none;
    color: #ffff;
    border-radius: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    cursor: pointer;
    border: none;
`;

export const Icons = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`;

export const ContentWrapper = styled.div`
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const RecomMovieWrapper = styled.div`
    background-color: #0F1115;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    padding: 0 50px;
    margin: 50px;
`;