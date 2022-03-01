import React, {useState, useEffect} from 'react';
import {
  Grid, TextField, Paper
} from '@mui/material'

export default function PersonalGlance  ({data}) {

  const [glance, setGlance] = useState({
    firstName: '', lastName: '',
    dateOfBirth: '', gender: '',
    email: '', phone: ''
  })

    useEffect(() => {
        if(data){
            setGlance(data)
        }
    },[data])
    return (
        <Paper>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextField label='First Name' value={glance.first_name} disabled/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField label='Lst Name' value={glance.last_name} disabled/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField label='DoB' value={glance.dateOfBirth} disabled/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField label='Gender' value={glance.gender} disabled/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField label='Email' value={glance.email} disabled/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField label='Phone' value={glance.phone} disabled/>
                </Grid>
            </Grid>
        </Paper>
    )
}
