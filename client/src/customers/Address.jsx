import React from 'react'
import {
    Grid, TextField, MenuItem
} from '@mui/material'


export default function Address ({address, disabled}) {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={(address?.aptNum || disabled) ? 11 : 12}>
                <TextField
                    label='Street' name={'street'}
                        value={address?.streetAddress} disabled={disabled}
                    />
            </Grid>

            {(disabled || address?.aptNum) &&
                <Grid item xs={12} md={1}>
                    <TextField
                        label='Apt#' name={'aptNum'}
                            value={address?.aptNum} disabled={disabled}
                        />
                </Grid>
            }

            <Grid item xs={12} md={4}>
                <TextField
                    label='City' name={'city'}
                        value={address?.city} disabled={disabled}
                    />
            </Grid>
            <Grid item xs={12} md={4}>
                <TextField
                    label='State' name={'state'} select
                        value={address?.city} disabled={disabled}
                >
                    <MenuItem disabled>Select State</MenuItem>
                </TextField>
            </Grid>
            <Grid item xs={12} md={4}>
                <TextField
                    label='Zipcode' name={'zipcode'}
                        value={address?.zipcode} disabled={disabled}
                    />
            </Grid>
        </Grid>
    )
}
