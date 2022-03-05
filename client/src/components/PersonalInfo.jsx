import React from 'react';
import {
    Grid, TextField, MenuItem
} from '@mui/material'

import { useEffect } from 'react';

import { useDefault } from '../hooks/CustomHooks';

const PersonalInfo = ({profile, disabled}) => {
    const {defaults, getDefaults} = useDefault();

    useEffect(() => {
        if(!defaults){
            getDefaults()
        }
    },[defaults, getDefaults])

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={(profile?.middleName || !disabled) ? 5.5 : 6}>
                <TextField
                    label='First Name' name='first_name'
                    value={profile?.first_name} disabled={disabled}
                />
            </Grid>

            {(!disabled || profile?.middleName) && 
                <Grid item xs={12} md={1}>
                    <TextField
                        label='M.I.' name='middleName'
                        value={profile?.middleName} disabled={disabled}
                    />
                </Grid>
            }

            <Grid item xs={12} md={(profile?.middleName || !disabled) ? 5.5 : 6}>
                <TextField
                    label='Last Name' name='last_name'
                    value={profile?.last_name} disabled={disabled}
                />
            </Grid>

            <Grid item xs={12} md={6}>
                <TextField
                    label='Gender' name='gender'
                    value={profile?.gender || ''}
                    select disabled={disabled}
                >
                    <MenuItem disabled>Select State</MenuItem>
                    {defaults?.states?.map(state => (
                        <MenuItem key={state._id} value={state._id}>{state.name}</MenuItem>
                    ))}
                </TextField>
            </Grid>

            <Grid item xs={12} md={6}>
                <TextField
                    label='Date of Birth' name='dateOfBirth'
                    value={profile?.dateOfBirth} disabled={disabled}
                />
            </Grid>

            <Grid item xs={12} md={6}>
                <TextField
                    label='Email' name='email'
                    value={profile?.email} disabled={disabled}
                />
            </Grid>

            <Grid item xs={12} md={6}>
                <TextField
                    label='Phone' name='phone'
                    value={profile?.phone} disabled={disabled}
                />
            </Grid>

            {/* <Grid item xs={12} md={6}>
                <TextField
                    label='Driver State' name='dlState'
                    value={profile?.driverLicense?.dlState || ''}
                    select disabled={disabled}
                >
                    <MenuItem disabled>Select State</MenuItem>
                    {defaults?.states?.map(state => (
                        <MenuItem key={state._id} value={state._id}>{state.name}</MenuItem>
                    ))}
                </TextField>
            </Grid>

            <Grid item xs={12} md={6}>
                <TextField
                    label='Driver Number' name='dlNumber'
                    value={profile?.driverLicense?.dlNumber} disabled={disabled}
                />
            </Grid> */}
        </Grid>
    )
}

export default PersonalInfo