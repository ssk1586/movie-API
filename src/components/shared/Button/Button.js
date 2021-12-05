import React from 'react'
import {CustomButton} from './ButtonStyle';

function CustButton({text, onClick}) {
    return <CustomButton
                onClick={onClick}>   
                {text}
            </CustomButton>
}

export default CustButton;
