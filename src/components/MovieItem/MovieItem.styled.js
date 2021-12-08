import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const FilmItem = styled.div`
    width: 200px;
    background-color: #19181F;
    overflow: hidden;
    border-radius: 10px;
`;

export const ImgWrapper = styled(Link)`

`;

export const Description = styled.h3`
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    margin: 0;
    gap: 20px;
    color: white;
`;

export const MovieImg = styled.img`
    max-width: 100%;
`;

export const FilmComponent = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: center;
    max-width: 1160px;
    padding: 0 0 50px 0;
`;

export const Vote = styled.span`
    color: white;
    cursor: pointer;
`;

export const FavoriteItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Genre = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 20px;
    color: gray;
    font-size: 12px;
`;