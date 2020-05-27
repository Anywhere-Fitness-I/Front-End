import {FETCH_DATA} from './actions/index'

export const initialState = {
    isUpdating: false,
    pageUpdating: false,
    classes: [],
}

export const Reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA:
            return {
                ...state,
                isUpdating: !state.isUpdating
            }
            default:
                return state;
    }
}