import {UserAction, UserActionTypes, UserState} from "../../types/user";

const initialState: UserState = {
    users: [],
    loading: false,
    error: null,
    page: 1,
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
            return {...state, loading: true, error: null, users: []}
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {...state, loading: false, error: null, users: action.payload}
        case UserActionTypes.FETCH_USERS_ERROR:
            return {...state, loading: false, error: action.payload, users: []}
        case UserActionTypes.SET_USERS_PAGE:{
            return {...state, page: action.payload}
        }
        default:
            return state
    }
}
