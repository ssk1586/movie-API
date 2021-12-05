import React from "react";
import { IMG_API } from "../../services/movieApi";
import {
  FilmItem,
  Description,
  MovieImg,
  FilmComponent,
  Vote,
  FavoriteItem,
  Red
} from './MovieItem.styled';
import { Badge } from '@material-ui/core';


export const MovieItem = ({ movies, handleFavouritesClick, favouriteComponent }) => {
  
  const FavouriteComponent = favouriteComponent;

  const listContent = movies.map(({ id, title, poster_path, vote_average }) => {
    return (
      <FilmItem key={id}> 
        <Red to = {`/infoMovie/${id}`}>
        <MovieImg src={IMG_API + poster_path} alt={title} />
        </Red>
        <FavoriteItem>
          <Badge badgeContent={vote_average} color={vote_average > 6 ? 'primary' : 'secondary'}/>
        </FavoriteItem>
       
        <Description  >
          {title}
          
          <Vote
            onClick={() => handleFavouritesClick({ id, title, poster_path, vote_average })} 
          >
            <FavouriteComponent size={25} />
					</Vote>
        </Description>

        </FilmItem>
    );
  });
return <FilmComponent>{listContent}</FilmComponent>;
};
