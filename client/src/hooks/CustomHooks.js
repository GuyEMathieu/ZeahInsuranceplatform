import {useContext} from 'react';

import { CustomerContext } from '../context/customer/CustomerState';
import { DefaultContext } from '../context/defaults/DefaultState';


export const  useCustomer = () =>{
    return useContext(CustomerContext)
}

export const  useDefault = () =>{
    return useContext(DefaultContext)
}