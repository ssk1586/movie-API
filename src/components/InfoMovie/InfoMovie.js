import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { fetchMovieInformation } from '../../services/movieApi';
import {
    addFavouriteMovie,
    recommendation,
    getRecomMovies,
    getFavouriteMovies,
} from '../../redux/slices/favouriteMovies'

import { MovieItem } from '../MovieItem/MovieItem';
import { InfoMovieItem } from '../InfoMovieItem/InfoMovieItem';
import AddFavouriteSpan from '../shared/AddFavouriteSpan/AddFavouriteSpan';
import { ContentWrapper, RecomMovieWrapper } from '../InfoMovieItem/InfoMovieItem.styled'
import { Title } from '../PopularMovie/PopularMovie.styled'



function InfoMovie() {
    const [selectedMovie, setSelectedMovie] = useState({})
    const recomMovies = useSelector(getRecomMovies).slice(0,20)
    const favMovies = useSelector(getFavouriteMovies)
    const [disabled, setDisabled] = useState(false)

    const dispatch = useDispatch();
    const params = useParams(getRecomMovies);

    const addFavourite = (movie) => {
        dispatch(addFavouriteMovie(movie))
        setDisabled(true)
    };


    useEffect(() => {
        fetchMovieInformation(params.id)
            .then(data => setSelectedMovie(data))
        dispatch(recommendation(params.id))

        if (movieExists(favMovies, params.id)) {
            setDisabled(true)
        } else {
            setDisabled(false)
        }
    }, [params.id, movieExists])


    
function movieExists(movie, id) {
    return movie.some((foundMovis) => {
        return foundMovis.id == id;
    }
);
}
   
    return (
        <ContentWrapper>
            <InfoMovieItem
                selectedMovie={selectedMovie}
                handleFavouritesClick={addFavourite}
                disabled={disabled}
            />

            <RecomMovieWrapper>
                <Title>RECOMMENDATION</Title>
                <MovieItem
                    movies={recomMovies}
                    handleFavouritesClick={addFavourite}
                    favouriteComponent={AddFavouriteSpan}
                />
            </RecomMovieWrapper>
        </ContentWrapper>
    );
};

export default InfoMovie;
