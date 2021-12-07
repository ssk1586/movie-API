import React from "react";

import { IMG_API } from "../../services/movieApi";
import {
    MovieItem,
    MovieImg,
    Description,
    Title,
    About,
    Date,
    Range,
    Button,
    Icons,
    Background,
} from './InfoMovieItem.styled';
import { BsFillPlayFill, BsPeople } from "react-icons/bs";
import { BiTimeFive, BiRadioCircleMarked } from "react-icons/bi";


export const InfoMovieItem = ({ selectedMovie, handleFavouritesClick }) => {
    const { poster_path, original_title, overview, id, backdrop_path,
        release_date, runtime, vote_average, popularity, title } = selectedMovie;

    return (
        <Background key={id} imgUrl={IMG_API + backdrop_path}>
            <MovieItem >
                <MovieImg src={IMG_API + poster_path} alt={id} />

                <Description>
                    <Date>
                        {release_date}
                    </Date>
                    <Title>
                        {original_title}
                    </Title>
                    <About>
                        {overview}
                    </About>
                    <Range>
                        <Icons><BiTimeFive size={17} /><>{runtime} min</></Icons>
                        <Icons><BsPeople size={18} /><>{popularity}</></Icons>
                        <Icons><BiRadioCircleMarked size={22} style={{ color: "red" }} /><>Imdb {vote_average}/10</></Icons>
                    </Range>

                    <Button
                        onClick={() => handleFavouritesClick({ id, title, poster_path, vote_average })}  ><BsFillPlayFill size={25} />
                        <>ADD TO FAVOURITE</>
                    </Button>
                </Description>
            </MovieItem>
        </Background>
    );
};