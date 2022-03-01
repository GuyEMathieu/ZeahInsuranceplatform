import {createContext, useReducer} from 'react';
import { v4 as uid } from 'uuid';
import * as ActionTypes from '../Actions'
import customerReducer from './customerReducer';

import { CUSTOMERS } from '../../data/customers';
import { GENDERS } from '../../data/defaults';



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


const generateCustomers = () =>{
    let customers = [];

    CUSTOMERS.forEach(element => {
        customers.push({...element, gender: (GENDERS.find(g => g.name === element.gender))._id, _id: uid()})
    });

    return customers;
}