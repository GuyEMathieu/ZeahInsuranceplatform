import React, {useState, useEffect} from 'react';
import {styled, Box} from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import SimpleBar from 'simplebar-react'


import CustomerProfile from './CustomerProfile';
import Opportunity from './Opportunity';

import { useParams } from 'react-router-dom';
import { useCustomer } from '../hooks/CustomHooks';

const Div = styled('div')(({theme}) => ({
    padding: theme.spacing(2),
    display: 'block',
    backgroundColor: '#E0DBDB',
}))
export default function CustomerMain() {
    const {id} = useParams();
    const {customers, getCustomers} = useCustomer();

    const [profile, setProfile] = useState(null)

    useEffect(() => {
        if(!customers){
            getCustomers()
        } 

        if(customers && id){
            setProfile(customers.find(c => c._id === +id))
        }

    },[customers, getCustomers, id])
    const [value, setValue] = React.useState('Profile');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Div>
            <SimpleBar style={{ maxHeight:'100vh', height: '100vh' }}>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Profile" value="Profile" />
                            <Tab label="Opportunities" value="Opportunities" />
                        </TabList>
                        </Box>
                        <TabPanel value="Profile" sx={{px: 0}}>
                            <CustomerProfile  />
                        </TabPanel>
                        <TabPanel value="Opportunities" sx={{px: 0}}>
                            <Opportunity primary={profile} />
                        </TabPanel>
                    </TabContext>
                </Box>
            </SimpleBar>
        </Div>
    );
}
