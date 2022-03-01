import {useContext} from 'react';

import { CustomerContext } from '../context/customer/CustomerState';


export const  useCustomer = () =>{
    return useContext(CustomerContext)
}