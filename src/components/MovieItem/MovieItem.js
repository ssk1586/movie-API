import React from "react";
import { IMG_API } from "../../services/movieApi";
import {
  FilmItem,
  Description,
  MovieImg,
  FilmComponent,
  Vote,
  FavoriteItem,
  Red,
  Genre
} from './MovieItem.styled';
import { Badge } from '@material-ui/core';


export const MovieItem = ({ movies, handleFavouritesClick, favouriteComponent }) => {


  const listContent = movies.map(({ id, title, poster_path, vote_average, genres, isLiked }) => {
    const FavouriteComponent = favouriteComponent;

    return (
      <FilmItem key={id}>
        <Red to={`/infoMovie/${id}`}>
          <MovieImg src={IMG_API + poster_path} alt={title} />
        </Red>
        <FavoriteItem>
          <Badge badgeContent={vote_average} color={vote_average > 6 ? 'primary' : 'secondary'} />
        </FavoriteItem>

        <Genre>
          {genres}
        </Genre>
        <Description  >
          {title}

          <Vote
            onClick={() => handleFavouritesClick({ id, title, poster_path, vote_average, genres })}
          >
            <FavouriteComponent size={25} isLiked={isLiked} />
          </Vote>
        </Description>

      </FilmItem>
    );
  });
  return <FilmComponent>{listContent}</FilmComponent>;
};
