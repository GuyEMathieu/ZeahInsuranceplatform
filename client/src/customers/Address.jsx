import React, {useEffect} from 'react'
import {
    Grid, TextField, MenuItem
} from '@mui/material'

import { useDefault } from '../hooks/CustomHooks'

export default function Address ({address, disabled, handleChange}) {
    const {defaults, getDefaults} = useDefault();

    useEffect(() => {
        if(!defaults){
            getDefaults();
        }
    }, [defaults, getDefaults])
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={(address?.aptNum || disabled) ? 11 : 12}>
                <TextField
                    label='Street' name={'street'} onChange={handleChange}
                        value={address?.streetAddress} disabled={disabled}
                    />
            </Grid>

            {(disabled || address?.aptNum) &&
                <Grid item xs={12} md={1}>
                    <TextField
                        onChange={handleChange}
                        label='Apt#' name={'aptNum'}
                            value={address?.aptNum} disabled={disabled}
                        />
                </Grid>
            }

            <Grid item xs={12} md={4}>
                <TextField
                    onChange={handleChange}
                    label='City' name={'city'}
                        value={address?.city} disabled={disabled}
                    />
            </Grid>
            <Grid item xs={12} md={4}>
                <TextField
                    onChange={handleChange}
                    label='State' name={'state'} select
                    value={address?.city} disabled={disabled}
                >
                    <MenuItem disabled>Select State</MenuItem>
                    {defaults?.states?.map(state => (
                        <MenuItem key={state._id} value={state._id}>{state.name}</MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={12} md={4}>
                <TextField
                    onChange={handleChange}
                    label='Zipcode' name={'zipcode'}
                        value={address?.zipcode} disabled={disabled}
                    />
            </Grid>
        </Grid>
    )
}
