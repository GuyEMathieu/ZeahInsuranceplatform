import React, {useEffect, useState} from 'react';
import {
    Grid
} from '@mui/material'
import {useCustomer} from '../hooks/CustomHooks'
import PersonalGlance from '../components/PersonalGlance'

export default function CustomerProfile() {
    const {customers, getCustomers} = useCustomer();

    const [profile, setProfile] = useState(null)

    useEffect(() => {
        if(!customers){
            getCustomers()
        } else {
            setProfile(customers[2])
        }
    },[customers, getCustomers])

    
    return (
        <Grid container spacing={2} sx={{m: 1}}>
            <Grid item xs={4} sx={{display: {xs: 'none', sm: 'none', md: 'none', lg: 'block'}}}>
                <PersonalGlance sx={{p: 2}} data={profile}/>
            </Grid>

            <Grid item xs >

            </Grid>
        </Grid>
    )
}

