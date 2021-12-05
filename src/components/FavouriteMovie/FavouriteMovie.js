import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { MovieItem } from '../MovieItem/MovieItem';
import RemoveFavouriteSpan from '../shared/RemoveFavouriteSpan/RemoveFavouriteSpan';
import ErrorEmpty from '../ErrorEmpty/ErrorEmpty';

import {
    Title,
    ContentContainer,
    ComponentWrapper
} from '../PopularMovie/PopularMovie.styled';

import { deleteFavouriteMovie, getFevouriteMovies } from '../../redux/slices/favouriteMovies'



function FavouriteFilms() {
    
    const favourite = useSelector(getFevouriteMovies);

    const dispatch = useDispatch();

    const removeFavourite = (movie) => {
        dispatch(deleteFavouriteMovie(movie))   
    };

    return (
        <ComponentWrapper>
            <Title>FAVOURITE</Title>
            <ContentContainer>
                
                {favourite.length > 0 ? <MovieItem
                    movies={favourite}
                    handleFavouritesClick={removeFavourite}
                    favouriteComponent={RemoveFavouriteSpan}
                /> : <ErrorEmpty/>}
            </ContentContainer> 
        </ComponentWrapper>
    )
}

export default FavouriteFilms
