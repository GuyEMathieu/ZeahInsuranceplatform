import React from 'react';
import {
    Grid, TextField, MenuItem
} from '@mui/material'
import DatePicker from '@mui/lab/DatePicker';

import { useEffect } from 'react';

import { useDefault } from '../hooks/CustomHooks';

const PersonalInfo = ({profile, disabled, handleChange}) => {
    const {defaults, getDefaults} = useDefault();

    useEffect(() => {
        if(!defaults){
            getDefaults()
        }
    },[defaults, getDefaults])

    const handleDateChange = date => {
        const e = {target: {
            name: 'dateOfBirth',
            value: date
        }}

        handleChange(e)
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={(profile?.middleName || !disabled) ? 5.5 : 6}>
                <TextField
                    label='First Name' name='first_name'  onChange={handleChange}
                    value={profile?.first_name} disabled={disabled}
                />
            </Grid>

            {(!disabled || profile?.middleName) && 
                <Grid item xs={12} md={1}>
                    <TextField
                        label='M.I.' name='middleName' onChange={handleChange}
                        value={profile?.middleName} disabled={disabled}
                    />
                </Grid>
            }

            <Grid item xs={12} md={(profile?.middleName || !disabled) ? 5.5 : 6}>
                <TextField
                    label='Last Name' name='last_name' onChange={handleChange}
                    value={profile?.last_name} disabled={disabled}
                />
            </Grid>

            <Grid item xs={12} md={6}>
                <TextField
                    label='Gender' name='gender' onChange={handleChange}
                    value={profile?.gender || ''}
                    select disabled={disabled}
                >
                    <MenuItem disabled>Select Gender</MenuItem>
                    {defaults?.genders?.map(gender => (
                        <MenuItem key={gender._id} value={gender._id}>{gender.name}</MenuItem>
                    ))}
                </TextField>
            </Grid>

            <Grid item xs={12} md={6}>
                <DatePicker
                    label="Date of Birth"
                    inputFormat="MM/dd/yyyy"
                    value={profile?.dateOfBirth}
                    onChange={date => handleDateChange(date)}
                    renderInput={(params) => <TextField {...params} />}
                />
            </Grid>

            <Grid item xs={12} md={6}>
                <TextField
                    label='Email' name='email'
                    value={profile?.email} disabled={disabled}
                    onChange={handleChange}
                />
            </Grid>

            <Grid item xs={12} md={6}>
                <TextField
                    label='Phone' name='phone'
                    value={profile?.phone} disabled={disabled}
                    onChange={handleChange}
                />
            </Grid>

            <Grid item xs={12} md={6}>
                <TextField
                    label='Driver State' name='dlState'
                    value={profile?.driverLicense?.dlState || ''}
                    onChange={handleChange}
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
                    onChange={handleChange}
                    label='Driver Number' name='dlNumber'
                    value={profile?.driverLicense?.dlNumber} disabled={disabled}
                />
            </Grid>
        </Grid>
    )
}

export default PersonalInfo