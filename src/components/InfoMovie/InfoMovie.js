import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';

import { fetchMovieInformation, fetchMovieRecommendation } from '../../services/movieApi';
import { addFavouriteMovie } from '../../redux/slices/favouriteMovies'

import { MovieItem } from '../MovieItem/MovieItem';
import {InfoMovieItem} from '../InfoMovieItem/InfoMovieItem';
import AddFavouriteSpan from '../shared/AddFavouriteSpan/AddFavouriteSpan';
import { ContentWrapper, RecomMovieWrapper } from '../InfoMovieItem/InfoMovieItem.styled'
import { Title } from '../PopularMovie/PopularMovie.styled'



function InfoMovie() {
    const [selectedMovie, setSelectedMovie] = useState({})
    const [recomMovie, setRecomMovie] = useState([]);

    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        fetchMovieInformation(params.id)
            .then(data => setSelectedMovie(data))
        fetchMovieRecommendation(params.id)
            .then(data => setRecomMovie(data.results.splice(1,20)))   
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
                    movies={recomMovie}
                    handleFavouritesClick={save}
                    favouriteComponent={AddFavouriteSpan}
                />
            </RecomMovieWrapper>
        </ContentWrapper>
    );
};

export default InfoMovie;
