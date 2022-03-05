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

    const {customers, getCustomers} = useCustomer();

    const [profile, setProfile] = useState(null)

    useEffect(() => {
        if(!customers){
            getCustomers()
        } 

        if(customers && id){
            setProfile(customers.find(c => c._id === `${id}`))
        }
    },[customers, getCustomers, id])

    const [isDisabled, setDisabled] = useState(true)
    
    return (
        <MainContainer>
            <Paper>
                <Box  sx={{p: 1, mb: 1, display: 'flex', justifyContent:'flex-end'}}>
                        <Title sx={{flexGrow: 1}}>Customer Profile</Title>
                        {isDisabled
                            ?   <Button 
                                    onClick={() => setDisabled(false)}
                                    fullWidth={false} 
                                    variant='outlined'>
                                    Edit
                                </Button>
                            :   null
                        }
                    </Box>
                <Stack spacing={1}>
                    
                    <AccordionShell title={'Personal Info'} isExpanded>
                        <PersonalInfo profile={profile} disabled={isDisabled} />
                    </AccordionShell>

                    <AccordionShell title={'Address'} >
                        <Address address={profile?.address} disabled={isDisabled} />
                    </AccordionShell>
                </Stack>

                {!isDisabled 
                    ?   <Stack direction='row' sx={{py: 2}} spacing={2}>
                            <Button 
                                size='large'
                                onClick={() => setDisabled(false)}
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
                                onClick={() => setDisabled(true)}
                                fullWidth={false} variant='text'>
                                    Cancel
                            </Button>
                        </Stack>
                    : null
                }
            </Paper>
        </MainContainer>
    )
}