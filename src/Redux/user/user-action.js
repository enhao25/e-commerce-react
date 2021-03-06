import { UserActionTypes } from "./user-types";

// Functions that returns object

// Always have a type and a payload
export const setCurrentUser = user => ({
    // Always align the type string to the one at the reducer switch case
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})