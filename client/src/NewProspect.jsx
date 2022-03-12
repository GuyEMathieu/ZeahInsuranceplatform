import React, {useState} from 'react'
import {
    Paper, TextField, Typography,
    MenuItem, Button, styled, 
    Divider, Avatar, Stack, Grid
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { DatePicker } from '@mui/lab';

import PersonIcon from '@mui/icons-material/Person';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import { GENDERS, SUFFIXES } from './data/defaults';

const Typo = styled(Typography)(({theme}) => ({
    paddingBottom: theme.spacing(1),
    color: 'darkblue',
    fontWeight: 'bold'
}))

const Div = styled('div')(({theme}) => ({
    padding: theme.spacing(3),
    backgroundColor: '#E0DBDB',
    height: '100vh',
    maxHeight: '100vh'
}))


export default function NewProspect() {
    const theme = useTheme();

    const [prospect, setProspect] = useState({});
    
    const handleAddressChange = e => {
        const {name, value} = e.target;
        setProspect(prev =>{
            return {
                ...prev,
                address: {
                    ...prev.address,
                    [name]: value
                }
            }
        })
    }

    const handleNewProspect = () => {

    }

    return (
        <Div>
            <Typo variant={'h6'}>Begin Quoting</Typo>
            <Paper sx={{px: 0, py: 2, maxWidth: '60vw'}}>
                <Stack direction={'row'} spacing={2} alignItems='center' sx={{px:2}}>
                    <Avatar >
                        <PersonIcon fontSize='large'/>
                    </Avatar>
                    <Typo sx={{pt:1}} alignContent={'center'}>Create New Prospect</Typo>
                </Stack>
                <Divider sx={{my: 3}} />

                <Grid container spacing={2} sx={{px: 2}}>
                    <Grid item xs={10} sm={10} md={10} lg={5}>
                        <TextField 
                            label='First Name' name='first_name'
                            value={prospect?.first_name} 
                            onChange={e => setProspect({...prospect, [e.target.name]: e.target.value})} />
                    </Grid>

                    <Grid item xs={2} sm={2} md={2} lg={1}>
                        <TextField 
                            label='M.I.' name='middle_name'
                            value={prospect?.middle_name} 
                            onChange={e => setProspect({...prospect, [e.target.name]: e.target.value})} />
                    </Grid>

                    <Grid item xs={10} sm={9} md={10} lg={5}>
                        <TextField 
                            label='Last Name' name='last_name'
                            value={prospect?.last_name} 
                            onChange={e => setProspect({...prospect, [e.target.name]: e.target.value})} />
                    </Grid>

                    <Grid item xs={2} sm={2} md={2} lg={1}>
                        <TextField 
                            label='Suffix' name='suffix'
                            value={prospect?.suffix} select
                            onChange={e => setProspect({...prospect, [e.target.name]: e.target.value})}>
                                <MenuItem value={null}>Select</MenuItem>
                                {SUFFIXES.map(suffix => (
                                    <MenuItem key={suffix._id} value={suffix._id}>{suffix.name}</MenuItem>
                                ))}
                        </TextField>
                    </Grid> 

                    <Grid item xs={12} md={6} lg={4}>
                        <DatePicker
                            label="Date of Birth"
                            value={prospect?.dateOfBirth}
                            onChange={(newValue) => setProspect({...prospect, dateOfBirth: newValue})}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </Grid>

                    <Grid item xs={12} md={6} lg={4}>
                        <TextField 
                            label='Gender' name='gender'
                            value={prospect?.gender} select
                            onChange={e => setProspect({...prospect, [e.target.name]: e.target.value})}>
                                <MenuItem value={null}>Select</MenuItem>
                                {GENDERS.map(gender => (
                                    <MenuItem key={gender._id} value={gender._id}>{gender.name}</MenuItem>
                                ))}
                        </TextField>
                    </Grid> 

                    <Grid item xs={12} sx={{my: 2}}>
                        <Divider  />
                    </Grid>

                    <Grid item xs={12}>
                        <Typo>Current Home Address</Typo>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={6}>
                        <TextField 
                            label='Address' name='street'
                            value={prospect?.address?.street} 
                            onChange={handleAddressChange} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <TextField 
                            label='Apt / Suite' name='aptNum'
                            value={prospect?.address?.aptNum} 
                            onChange={handleAddressChange} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <TextField 
                            label='Building' name='building'
                            value={prospect?.address?.building} 
                            onChange={handleAddressChange} />
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={6}>
                        <TextField 
                            label='City' name='city'
                            value={prospect?.address?.city} 
                            onChange={handleAddressChange} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <TextField 
                            label='State' name='state' select
                            value={prospect?.address?.state} 
                            onChange={handleAddressChange}>
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <TextField 
                            label='Zip' name='zip'
                            value={prospect?.address?.zip} 
                            onChange={handleAddressChange} />
                    </Grid>

                    <Grid item xs={12} sx={{my: 2}}>
                        <Divider  />
                    </Grid>

                    <Grid item xs={12}>
                        <Typo>Contact Information</Typo>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField
                            type={'email'} label='Email'
                            name={'email'} value={prospect?.contactInfo?.email}
                            onChange={e => setProspect({...prospect, [e.target.name]: e.target.value})}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <TextField
                            type={'tel'} label='Phone'
                            name={'phone'} value={prospect?.contactInfo?.phone}
                            onChange={e => setProspect({...prospect, [e.target.name]: e.target.value})}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={2}>
                        <TextField
                            label='Ext'
                            name={'phoneExt'} value={prospect?.contactInfo?.phoneExt}
                            onChange={e => setProspect({...prospect, [e.target.name]: e.target.value})}
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Button variant='contained' onClick={handleNewProspect}>Create New Prospect</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant='text' fullWidth={false} style={{justifyContent: 'flex-start'}} startIcon={<ChevronLeftIcon  />}>Back To Search</Button>
                    </Grid>
                </Grid>
            </Paper>
        </Div>
    )
}


