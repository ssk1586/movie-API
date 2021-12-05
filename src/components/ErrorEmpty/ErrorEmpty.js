import React from 'react'

import {
    ComponentWrapper,
    Button,
} from './ErrorEmpty.styled'

import { BiBomb } from "react-icons/bi";



function ErrorEmpty() {
    return (
        <ComponentWrapper>
            <BiBomb color='white' size={80}/>
            <h1>Uh oh.</h1>
            <p>Keep calm and add movies to your favourite list</p>
            <Button to='/'>GO TO POPULAR MOVIES</Button>
        </ComponentWrapper>
    )
}

export default ErrorEmpty
