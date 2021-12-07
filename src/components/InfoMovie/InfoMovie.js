import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { fetchMovieInformation } from '../../services/movieApi';
import { addFavouriteMovie, recommendation, getRecomMovies } from '../../redux/slices/favouriteMovies'

import { MovieItem } from '../MovieItem/MovieItem';
import { InfoMovieItem } from '../InfoMovieItem/InfoMovieItem';
import AddFavouriteSpan from '../shared/AddFavouriteSpan/AddFavouriteSpan';
import { ContentWrapper, RecomMovieWrapper } from '../InfoMovieItem/InfoMovieItem.styled'
import { Title } from '../PopularMovie/PopularMovie.styled'



function InfoMovie() {
    const [selectedMovie, setSelectedMovie] = useState({})
    const recomM = useSelector(getRecomMovies)

    const dispatch = useDispatch();
    const params = useParams(getRecomMovies);

    useEffect(() => {
        fetchMovieInformation(params.id)
            .then(data => setSelectedMovie(data))
        dispatch(recommendation(params.id))
    }, [params.id])

    const save = (movie) => {
        dispatch(addFavouriteMovie(movie))
    }


    return (
        <ContentWrapper>
            <InfoMovieItem
                selectedMovie={selectedMovie}
                handleFavouritesClick={save}
            />

            <RecomMovieWrapper>
                <Title>RECOMMENDATION</Title>
                <MovieItem
                    movies={recomM}
                    handleFavouritesClick={save}
                    favouriteComponent={AddFavouriteSpan}
                />
            </RecomMovieWrapper>
        </ContentWrapper>
    );
};

export default InfoMovie;
