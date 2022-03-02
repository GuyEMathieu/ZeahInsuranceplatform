import {createContext, useReducer} from 'react';
import { v4 as uid } from 'uuid';
import * as ActionTypes from '../Actions'
import customerReducer from './customerReducer';

import { generateCustomers} from '../../data/customers';



export const CustomerContext = createContext();



const CustomerState = props => {
    const initialState = {
        customers: generateCustomers(),
    }

    const [state, dispatch] = useReducer(customerReducer, initialState)

    const getCustomers = async () => {
        try {

            if(this.initialState.customers === null){
                
            }else{
                dispatch({
                    type: ActionTypes.GET_CUSTOMERS
                })
            }
        } catch(err){

        }
    }

    return (
        <CustomerContext.Provider
            value= {{
                customers: state.customers,

                getCustomers
            }}>
                {props.children}
        </CustomerContext.Provider>
    )
}

export default CustomerState
