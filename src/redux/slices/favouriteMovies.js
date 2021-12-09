import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { serializeMovies } from "../../helpers/movies";
import { fetchMovies, fetchGenreMovieList, fetchSearchMovie, fetchMovieRecommendation } from '../../services/movieApi';
import { serializeGenres } from '../../helpers/genres'


const initialState = {
    AllMovies: [],
    favouriteMovies: [],
    recomMovies: [],
    genres: [],
    page: 1,
}

export const fetchAllGenres = createAsyncThunk(
    "movies/fetchAsyncShowGenre",
    async () => {
        try {
            const data = await fetchGenreMovieList();
            return serializeGenres(data.genres);

        } catch (error) {
            console.log('error')
        }
    }
);

export const fetchAllMovies = createAsyncThunk(
    "movies/fetchAllMovies",
    async (_, { getState }) => {
        const { page, genres, favouriteMovies } = getState().movies
        try {
            const movies = await fetchMovies(page);
            const favMoviesIds = favouriteMovies.map(movie => movie.id)
            return serializeMovies(genres, movies.results, favMoviesIds)
        }
        catch (error) {
            console.log('error')
        }
    }

)

export const moviesLoadMore = createAsyncThunk(
    "movies/moviesLoadMore",
    async (_, { dispatch, getState }) => {
        dispatch(increasePage());
        const { page, genres, favouriteMovies } = getState().movies;
        try {
            const movies = await fetchMovies(page);
            const favMoviesIds = favouriteMovies.map(movie => movie.id)
            return serializeMovies(genres, movies.results, favMoviesIds)
        }
        catch (error) {
            console.log('error')
        }
    }

)

export const searchMovies = createAsyncThunk(
    "movies/searchMovies",
    async (serachTerm, { getState }) => {

        const { genres, favouriteMovies } = getState().movies;
        try {
            const movies = await fetchSearchMovie(serachTerm);
            const favMoviesIds = favouriteMovies.map(movie => movie.id)
            return serializeMovies(genres, movies.results, favMoviesIds)
        }
        catch (error) {
            console.log('error')
        };
    }
)

export const recommendation = createAsyncThunk(
    "movies/recommendation",
    async (id, { getState }) => {
        const { genres, favouriteMovies } = getState().movies;
        try {
            const movies = await fetchMovieRecommendation(id);
            const favMoviesIds = favouriteMovies.map(movie => movie.id)
            return serializeMovies(genres, movies.results, favMoviesIds)
        }
        catch (error) {
            console.log('error')
        };
    }
)

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        increasePage: (state) => { state.page += 1 },
        resetPagination: (state) => { state.page = initialState.page },
        addFavouriteMovie: (state, { payload }) => {
            if (!state.favouriteMovies.find(item => item.id === payload.id)) {
                state.AllMovies = state.AllMovies.map(movie => {
                    if (movie.id === payload.id) {
                        return {
                            ...movie,
                            isLiked: true,
                        }
                    }
                    else return movie
                })
                state.favouriteMovies.push(payload)
            } else {
                movieSlice.caseReducers.deleteFavouriteMovie(state, { payload })
            }
        },
        deleteFavouriteMovie: (state, { payload }) => {
            state.AllMovies = state.AllMovies.map(movie => {
                if (movie.id === payload.id) {
                    return {
                        ...movie,
                        isLiked: false,
                    }
                }
                else return movie
            })
            state.favouriteMovies = state.favouriteMovies.filter((movie) => movie.id !== payload.id)
        },
    },

    extraReducers: (builder) => {
        builder.addCase(fetchAllGenres.fulfilled, (state, action) => {
            state.genres = action.payload
        })
        builder.addCase(fetchAllMovies.fulfilled, (state, action) => {
            state.AllMovies = action.payload
        })
        builder.addCase(moviesLoadMore.fulfilled, (state, action) => {
            state.AllMovies.push(...action.payload)
        })
        builder.addCase(searchMovies.fulfilled, (state, action) => {
            state.AllMovies = action.payload
        })
        builder.addCase(recommendation.fulfilled, (state, action) => {
            state.AllMovies = action.payload
        })
    },
});


export const { addFavouriteMovie, deleteFavouriteMovie, increasePage, addMovie, resetPagination } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.AllMovies
export const getFavouriteMovies = (state) => state.movies.favouriteMovies
export const getRecomMovies = (state) => state.movies.AllMovies
export default movieSlice.reducer;

