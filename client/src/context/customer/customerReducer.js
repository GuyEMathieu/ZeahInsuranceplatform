import * as ActionTypes from '../Actions'

// eslint-disable-next-line
export default (state, action) => {
    switch(action.type) {
        case ActionTypes.GET_CUSTOMERS:
            return {
                ...state,
            }
        case ActionTypes.GENERATE_CUSTOMERS:
            return {
                ...state,
                customers: action.payload
            }
        default:
            return state;
    }
}