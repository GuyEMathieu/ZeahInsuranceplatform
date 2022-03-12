import * as ActionTypes from '../Actions'

// eslint-disable-next-line
export default (state, action) => {
    switch(action.type) {
        case ActionTypes.GET_DEFAULTS:
            return {
                ...state,
                defaults: action.payload
            }
        default:
            return state;
    }
}