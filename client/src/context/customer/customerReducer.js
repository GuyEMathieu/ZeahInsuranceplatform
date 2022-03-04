import * as ActionTypes from '../Actions'

// eslint-disable-next-line
export default (state, action) => {
    switch(action.type) {
        case ActionTypes.GET_CUSTOMERS:
            return {
                ...state,
            }
        case ActionTypes.FILTER_CUSTOMERS:
            let found;
            if(action.payload.first_name){
                found = state.customers.filter(c => c.first_name === action.payload.first_name)
            }
            return {
                ...state,
                filteredCustomers: found
            }
        case ActionTypes.GENERATE_CUSTOMERS:
            return {
                ...state,
                customers: action.payload
            }
        case ActionTypes.RESET:
            return {
                ...state,
                filteredCustomers: null
            }
        default:
            return state;
    }
}