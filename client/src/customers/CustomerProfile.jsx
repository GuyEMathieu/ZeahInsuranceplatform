import React, {useEffect, useState} from 'react';
import {
    Paper, Stack, Box, Button, Typography
} from '@mui/material'
import {styled, useTheme} from '@mui/material/styles'
import { useParams } from 'react-router-dom';
import {useCustomer} from '../hooks/CustomHooks'

import MainContainer from '../components/MainContainer';
import AccordionShell from '../components/AccordionShell';
import PersonalInfo from './PersonalInfo';
import Address from './Address';

const Title = styled(Typography)(({theme}) => ({
    color: theme.palette.text.boldBlue
}))

export default function CustomerProfile() {
    const theme = useTheme();
    const {id} = useParams();
    console.info(typeof(id))

    const {customers, getCustomers, updateCustomer} = useCustomer();

    const [profile, setProfile] = useState(null)

    useEffect(() => {
        if(!customers){
            getCustomers()
        } 

        if(customers && id){
            setProfile(customers.find(c => c._id === +id))
        }

    },[customers, getCustomers, id])

    const [isDisabled, setDisabled] = useState(true);

    const [temp, setTemp] = useState(null)

    const handleChange = e => {
        const {name, value} = e.target;
        
        if(name === 'first_name' || name === 'middleName' || name === 'last_name'
            || name === 'gender' || name === 'dateOfBirth' || name === 'email'
            || name === 'phone'
        ){
            setProfile({...profile, [name]: value})
        } else if(name === 'dlState' || name === 'dlNumber'){
            setProfile({
                ...profile, 
                driverLicense: {
                    ...profile.driverLicense,
                    [name]: value
                }
            })
        } else if(name === 'streetAddress' || name === 'aptNum' || name === 'city'
            || name === 'state' || name === 'zipcode'){
            setProfile({...profile, address: {...profile.address, [name]: value}})
        }
    }

    const onEditable = () => {
        setDisabled(false)
        setTemp(profile)
    }

    const onCancel = () => {
        setDisabled(true)
        setProfile(temp)
        setTemp(null)
    }

    const onSave = () =>{
        updateCustomer(profile)
        setDisabled(true)
        setTemp(null)
    }

    console.table(`${profile}`)
    
    return (
        <Paper>
            <Box  sx={{p: 1, mb: 1, display: 'flex', justifyContent:'flex-end'}}>
                    <Title sx={{flexGrow: 1}}>Customer Profile</Title>
                    {isDisabled
                        ?   <Button 
                                onClick={onEditable}
                                fullWidth={false} 
                                variant='outlined'>
                                Edit
                            </Button>
                        :   null
                    }
                </Box>
            <Stack spacing={1}>
                
                <AccordionShell title={'Personal Info'} isExpanded>
                    <PersonalInfo profile={profile} disabled={isDisabled} handleChange={handleChange} />
                </AccordionShell>

                <AccordionShell title={'Address'} >
                    <Address address={profile?.address} disabled={isDisabled} handleChange={handleChange}  />
                </AccordionShell>
            </Stack>

            {!isDisabled 
                ?   <Stack direction='row' sx={{py: 2}} spacing={2}>
                        <Button 
                            size='large'
                            onClick={onSave}
                            fullWidth={false} variant='outlined'
                            sx={{
                                ':hover': {border: 'none',
                                    backgroundColor: theme.palette.button.orangeHover
                                },
                                backgroundColor: theme.palette.button.orange, 
                                border: 'none', color: 'white'}}
                            >
                                Update
                        </Button>
                        <Button 
                            onClick={onCancel}
                            fullWidth={false} variant='text'>
                                Cancel
                        </Button>
                    </Stack>
                : null
            }
        </Paper>
    )
}