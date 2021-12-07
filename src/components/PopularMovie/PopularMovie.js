import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MovieItem } from '../MovieItem/MovieItem';

import CustomButton from '../shared/Button/Button';
import AddFavouriteSpan from '../shared/AddFavouriteSpan/AddFavouriteSpan';

import {
    getAllMovies,
    fetchAllMovies,
    fetchAllGenres,
    moviesLoadMore,
    resetPagination,
    addFavouriteMovie
} from '../../redux/slices/favouriteMovies';

import {
    ComponentWrapper,
    Title,
    Button,
    Content
} from './PopularMovie.styled';



function PopularMovie() {

    const movies = useSelector(getAllMovies)

    console.log(movies)
    const dispatch = useDispatch();

    const handleLoadMore = () => {
        dispatch(moviesLoadMore())
    }

    const loadFilms = useCallback(() => {
        dispatch(resetPagination())
        dispatch(fetchAllGenres())
        dispatch(fetchAllMovies())
    }, [dispatch])

    useEffect(() => {
        loadFilms();
    }, [loadFilms, dispatch]);

    const addFavourite = (movie) => {
        dispatch(addFavouriteMovie(movie))
    };



    return (
        <ComponentWrapper>
            <Content>
                <Title>POPULAR RIGHT NOW</Title>
                {movies.length > 0 && <MovieItem
                    movies={movies}
                    handleFavouritesClick={addFavourite}
                    favouriteComponent={AddFavouriteSpan}
                />}
            </Content>
            <Button>
                <CustomButton
                    text='SEE MORE'
                    onClick={handleLoadMore}
                />
            </Button>
        </ComponentWrapper>
    );
};

export default PopularMovie;
