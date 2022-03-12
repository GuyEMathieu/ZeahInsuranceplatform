import React, {useState, useEffect} from 'react'
import {
    Grid, TextField, MenuItem, 
    Paper, Stack, Typography
} from '@mui/material'

import { useCustomer, useDefault } from '../hooks/CustomHooks'
import PersonalInfo from '../customers/PersonalInfo';
import Address from '../customers/Address';
import PrimaryDriver from './PrimaryDriver';
const DriverSelection = ({setQuote}) => {
    const {customers, getCustomers} = useCustomer();

    useEffect(() => {
        if(!customers){
            getCustomers();
        }
    },[customers, getCustomers])

    return (
        <Stack spacing={2}>
            <PrimaryDriver setQuote={setQuote}/>
        </Stack>
        
    )
}

export default DriverSelection