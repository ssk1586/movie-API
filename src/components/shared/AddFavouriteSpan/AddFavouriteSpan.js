import React from 'react'
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";



function AddFavouriteSpan({ isLiked }) {
    return (
        <> {
            isLiked ?
                (<AiFillHeart size={20} style={{ color: 'red' }} />) :
                <AiOutlineHeart size={20} style={{ color: 'red' }} />
        }
        </>
    )
}

export default AddFavouriteSpan
