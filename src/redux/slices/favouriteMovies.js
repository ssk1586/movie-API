import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMovies, fetchGenreMovieList } from '../../services/movieApi';


const initialState = {
    AllMovies: [],
    favouriteMovies: [],
    genres: [],
}

// export const fetchAsyncShowGenre = createAsyncThunk(
//     "movies/fetchAsyncShowGenre",
//     async () => {
//         try {
//             const genres = await fetchGenreMovieList();   
//             return genres.genres;

//         } catch (error) {
//             console.log('error')
//         };
//    }
// );

// export const getMoviesWithGenres = createAsyncThunk(
//     "movies/getMoviesWithGenres",
//     async (page, {getState}) => {
//         try {
//             const movies = await fetchMovies(page).then(data => data.results);
//             const { genres } = getState().movies

//             // genres.map(item => console.log(item.name))
            
//             movies.map(item => item.genre_ids.map(id => {
//                 if (id == genres.id) {

//                     return 
//                 }
//                 return 0;
//             }))
//             console.log(movies)
//         } catch (error) {
//             console.log('error')
//         };
//    }
// );
  

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovie: (state, { payload }) => { state.AllMovies = payload},
        loadMore: (state, { payload }) => {state.AllMovies.push(...payload)},
        addFavouriteMovie: (state, { payload }) => {
            if (!state.favouriteMovies.find(item => item.id === payload.id)) {  
                state.favouriteMovies.push(payload)
            }
        },
        deleteFavouriteMovie: (state, { payload }) => { state.favouriteMovies =  state.favouriteMovies.filter((movie) => movie.id !== payload.id) },
    },

    // extraReducers: (builder) => {
    //     builder.addCase(fetchAsyncShowGenre.fulfilled, (state, action) => {
    //         state.genres = action.payload
    //     })
    //   },
});


export const { addMovie, addFavouriteMovie, deleteFavouriteMovie, loadMore } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.AllMovies
export const getFevouriteMovies = (state) => state.movies.favouriteMovies
export default movieSlice.reducer;

