import { FETCH_ACCESS_TOKEN_LOADING, FETCH_ACCESS_TOKEN_SUCCESS, FETCH_ACCESS_TOKEN_ERROR } from '../../constants';

const INITIAL_STATE = {
    isLoading: true,
    data: [],
    error: ''
}

const reducerFetchTokens = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case FETCH_ACCESS_TOKEN_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_ACCESS_TOKEN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                error: ''

            }
        case FETCH_ACCESS_TOKEN_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
    
        default:
            return state
    }
}

export default reducerFetchTokens;