import React from 'react';
import {
    Grid
} from '@mui/material'

import PersonalGlance from './components/PersonalGlance'

export default function CustomerProfile() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={4} sx={{display: {xs: 'block', sm: 'block', md: 'none', lg: 'none'}}}>
                <PersonalGlance />
            </Grid>
        </Grid>
    )
}

