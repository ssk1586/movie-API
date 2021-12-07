export const extractGenresForMovies = (genre_ids, genres) => {
    return genre_ids.map(id => {
        for (const key in genres) {
            if (key === id.toString()) {
                return (genres[key])
            }
        }
    })

}

export const serializeMovies = (genres, movies, favMoviesIds) => {
    return movies.map(movie => {
        return {
            ...movie,
            genres: extractGenresForMovies(movie.genre_ids, genres),
            isLiked: favMoviesIds.includes(movie.id),
        }
    })
}

