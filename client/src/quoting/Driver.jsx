import React, {useState, useEffect} from 'react'
import {
    Grid, TextField, MenuItem, Divider,
    Paper, Stack, Button, Typography, styled
} from '@mui/material'
import DatePicker from '@mui/lab/DatePicker';
import EditIcon from '@mui/icons-material/Edit';
import Add from '@mui/icons-material/Add'

import { useDefault } from '../hooks/CustomHooks';

const Typo = styled(Typography)(({theme}) => ({
    color: 'darkblue',
    fontWeight: '600'
}))

export default function Driver(props){
    const {
        driver, isPrimary = false, handleChange= () => {}
    } = props;

    console.info("primary", isPrimary)
    const {defaults, getDefaults} = useDefault();

    useEffect(() =>{
        if(!defaults){
            getDefaults()
        }
    },[defaults, getDefaults])
    const addressString = () => {
        if(driver){
            const address = driver.address;
            let string = `${address?.streetAddress}`
            if(address?.aptNum){
                string = `${string} apt ${address?.aptNum}`
            }
            return `${string}, ${address.city}, ${address.state} ${address.zipcode}`
        }

        return ''
    }

    const showAddress = () => {
        return (
            <React.Fragment>
                <Grid item xs={12} sx={{mt: 2}}>
                    <Typo>Current Address</Typo>
                    <Divider  />
                </Grid>

                <Grid item xs={7}>
                    <TextField
                        label={'Address'} value={addressString()} disabled />
                </Grid>

                <Grid item xs>
                    <Button startIcon={<EditIcon  />} fullWidth={false} variant='text'>Edit</Button>
                </Grid>

                <Grid item xs={12} md={4}>
                    <TextField
                        label='Ownership Type' name={'ownership'}
                        value={driver?.occupation} select>
                        <MenuItem disabled>Select Occupation</MenuItem>
                        {defaults?.ownerships?.map(ownership => (
                            <MenuItem key={ownership._id} value={ownership._id}>{ownership.name}</MenuItem>
                        ))}
                    </TextField>
                </Grid>

                <Grid item xs={12} md={4}>
                    <TextField
                        label='Residence Type' name={'residence'}
                        value={driver?.occupation} select>
                        <MenuItem disabled>Select Occupation</MenuItem>
                        {defaults?.ownerships?.map(ownership => (
                            <MenuItem key={ownership._id} value={ownership._id}>{ownership.name}</MenuItem>
                        ))}
                    </TextField>
                </Grid>

                <Grid item xs={12} md={4}>
                    <TextField
                        label='Years at Current Residence' name={'residenceYears'}
                        value={driver?.yearsAtResidence} select>
                        <MenuItem disabled>Select Occupation</MenuItem>
                        {defaults?.residenceYears?.map(years => (
                            <MenuItem key={years._id} value={years._id}>{years.name}</MenuItem>
                        ))}
                    </TextField>
                </Grid>

                <Grid item xs={12} sx={{mt: 2}} container>
                    <Grid item xs={10}>
                        <Typo>Current Address</Typo>
                    </Grid>
                    <Grid item xs={2}>
                        <Button startIcon={<Add />}>Add</Button>
                    </Grid>
                    
                    <Divider  />
                </Grid>


            </React.Fragment>
        )
    }
    return (
        <Grid container spacing={2} sx={{p:2, }}>
            <Grid container item xs={12} sx={{backgroundColor: 'silver', ml: 1, pb: 1}}>
                <Grid item xs={5}>
                    <Stack>
                        <Typography>Name</Typography>
                        <Typography>{`${driver?.first_name} ${driver.last_name}`}</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={2}>
                    <Stack>
                        <Typography>Date of Birth</Typography>
                        <Typography>{driver?.dateOfBirth}</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={2}>
                    <Stack>
                        <Typography>Gender</Typography>
                        <Typography>{driver?.gender}</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={2}>
                    <Stack>
                        <Typography>SSN</Typography>
                        <Typography>{driver?.ssn}</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={1}>
                    <Button startIcon={<EditIcon  />} variant='text'>Edit</Button>
                </Grid>
            </Grid>

            <Grid item xs={12} sx={{mt: 2}}>
                <Typo>Basic Information</Typo>
                <Divider  />
            </Grid>

            <Grid item xs={12} md={6}>
                <TextField
                    label='Occupation' name={'occupation'}
                    value={driver?.occupation} select>
                    <MenuItem disabled>Select Occupation</MenuItem>
                    {defaults?.occupations?.map(occ => (
                        <MenuItem key={occ._id} value={occ._id}>{occ.name}</MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    label='Marital Status' name={'maritalStatus'}
                    value={driver?.maritalStatus} select>
                    <MenuItem disabled>Select Status</MenuItem>
                    {defaults?.maritalStatuses?.map(status => (
                        <MenuItem key={status._id} value={status._id}>{status.name}</MenuItem>
                    ))}
                </TextField>
            </Grid>

            <Grid item xs={12} sx={{mt: 2}}>
                <Typo>License Information</Typo>
                <Divider  />
            </Grid>

            <Grid item xs={12} md={3}>
                <TextField
                    label={'Age First Licensed'}
                    name={'ageFirstLicensed'}
                    value={driver?.ageFirstLicensed}
                />
            </Grid>
            <Grid item xs={12} md={3}>
                <TextField
                    label={"Driver License State"}
                    name={'dlState'} select
                    value={driver?.driverLicense?.dlState}
                >
                    <MenuItem>Select State</MenuItem>
                    {defaults?.states?.map(state => (
                        <MenuItem key={state._id} value={state._id}>{state.name}</MenuItem>
                    ))}
                </TextField>

                
            </Grid>

            <Grid item xs={12} md={6}>
                <TextField
                    label={'Driver License #'}
                    name={'dlNumber'}
                    value={driver?.driverLicense?.dlNumber}
                />
            </Grid>
            
            {isPrimary ? showAddress() : null}
        </Grid>
    )
}

