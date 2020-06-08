import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './WithSpinner.styles';

// The function takes in a wrapped component and returns another function
// the returned function takes in props, if it is loading, returns the spinner,
// else return the wrapped component
const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) : (<WrappedComponent {...otherProps} />)
}

export default WithSpinner;