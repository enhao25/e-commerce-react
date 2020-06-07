import React from 'react';

import './CustomButton.scss';
// import { CustomButtonContainer } from './CustomButton.styles'

// const CustomButton = ({ children, ...props }) => (
//     <CustomButtonContainer {...props}>
//         {children}
//     </CustomButtonContainer>
// )

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
    <button className={`${inverted ? 'inverted' : ''} 
        ${isGoogleSignIn ? 'google-sign-in' : ''} 
        custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;