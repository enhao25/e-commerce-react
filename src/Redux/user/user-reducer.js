const INITIAL_STATE = {
    currentUser: null
}

// If state is not set, state will = initial state
// Function that gets a state and action and then return a new state
const userReducer = (state = INITIAL_STATE, action) => {
    // We can use if else state instead of switch statement as well
    switch(action.type) {
        case "SET_CURRENT_USER":
            return {
                ...state, 
                currentUser: action.payload
            }
        default:
            return state
    }
}

export default userReducer;