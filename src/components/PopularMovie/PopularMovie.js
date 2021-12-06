import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';

import { MovieItem } from '../MovieItem/MovieItem';
import { fetchMovies } from '../../services/movieApi';
import CustomButton from '../shared/Button/Button';
import AddFavouriteSpan from '../shared/AddFavouriteSpan/AddFavouriteSpan';

import { loadMore, getAllMovies, addFavouriteMovie, addMovie, fetchAsyncShowGenre, getMoviesWithGenres } from '../../redux/slices/favouriteMovies';

import {
    ComponentWrapper,
    Title,
    Button,
    Content
} from './PopularMovie.styled';



function PopularMovie() {

    const movies = useSelector(getAllMovies)

    const [page, setPage] = useState(1)

    const dispatch = useDispatch();

    useEffect(() => {

        // const data = async (page) => {
        //     await dispatch(fetchAsyncShowGenre())
        //     await  dispatch(getMoviesWithGenres(page))
        // }
        // data(page)

        fetchMovies(page)
            .then((data) => {
                if (page === 1) {
                    dispatch(addMovie(data.results))
                } else {
                    dispatch(loadMore(data.results))
                }
            });
    }, [page]);
    
    const addFavourite = (movies) => {
        dispatch(addFavouriteMovie(movies))
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
                    onClick={() => {setPage(prePage => prePage + 1)}}
                />
            </Button>
        </ComponentWrapper>
    );
};

export default PopularMovie;
