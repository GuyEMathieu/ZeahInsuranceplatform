import React, {useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import { useNavigate } from 'react-router-dom';

import MainContainer from '../components/MainContainer';

import {
    Grid, TextField, Paper, Divider,
    Typography, Button, Stack, MenuItem, 
} from '@mui/material'

import { useCustomer } from '../hooks/CustomHooks';
import { stringifyAddress } from '../utils/formatter';

export default function CustomerSearch(){
    const navigate = useNavigate();

    const [searchParams, setSearchParams] = useState(null)
    const handleSearchParams = e => {
        const {name, value} = e.target;
        setSearchParams(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const {
        customers, filteredCustomers, getCustomers, 
        searchCustomers, resetCustomers
    } = useCustomer();

    useEffect(() => {
        if(!customers){
            getCustomers()
        }
    },[customers, getCustomers])

    const activateUpdateBtn = () => {
        if(searchParams?.policyNumber || searchParams?.first_name 
            || searchParams?.last_name || searchParams?.streetAddress 
            || searchParams?.city || searchParams?.state || searchParams?.zipcode ){
            return false
        }

        if(filteredCustomers){
            resetCustomers()
        }
        return true;
    }

    const handleSearch = () =>{
        searchCustomers(searchParams)
        console.table(searchParams)
    }

    const handleSelection = customer => {
        navigate(`/customers/${customer._id}/profile`)
    }

    return (
        <MainContainer>
            <Paper sx={{m: 0, pl: 0, pr: 0, py: 0}}>  
                <Stack sx={{backgroundColor: "#C9CBCE", p: 1.5, borderTop:'6px solid #00A3E1'}}> 
                    <Typography>Customer Search</Typography>
                </Stack> 
                
                <Stack sx={{m: 2}}>
                    <Grid container spacing={2} >
                        
                        <Grid item sm={12} md={6}>
                            <TextField 
                                label = 'Policy #' name='policyNumber'
                                value={searchParams?.policyNumber}
                                onChange={handleSearchParams} />
                        </Grid>
                        
                        <Grid item sm={12} md={6} />

                        <Grid item sm={12}>
                            <Typography><strong>Or</strong></Typography>
                        </Grid>

                        <Grid item sm={12} md={6}>
                            <TextField 
                                label = 'First Name' name='first_name'
                                value={searchParams?.first_name}
                                onChange={handleSearchParams} />
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <TextField 
                                label = 'Last Name' name='last_name'
                                value={searchParams?.last_name} 
                                onChange={handleSearchParams} />
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <TextField 
                                label = 'Address' name='streetAddress'
                                value={searchParams?.streetAddress}
                                onChange={handleSearchParams} />
                        </Grid>

                        <Grid item sm={12} md={3}>
                            <TextField 
                                label = 'State' name='state'
                                value={searchParams?.state} select
                                onChange={handleSearchParams}>
                                    <MenuItem>Select State</MenuItem>
                            </TextField>
                        </Grid>

                        <Grid item sm={12} md={3}>
                            <TextField 
                                label = 'Zipcode' name='zipcode'
                                value={searchParams?.zipcode}
                                onChange={handleSearchParams} />
                        </Grid>

                        <Grid item sm={12} md={6}>
                            <TextField 
                                label ='Phone Number' name='phone'
                                value={searchParams?.phone}
                                onChange={handleSearchParams} />
                        </Grid>

                        <Grid item sm={12} md={6}>
                            <TextField 
                                label = 'Email' name='email'
                                value={searchParams?.email} 
                                onChange={handleSearchParams}/>
                        </Grid>

                        

                        <Grid item sm={12} container sx={{mt: 2}}>
                            <Stack direction={'row'} spacing={2}>
                                <Button 
                                    onClick={handleSearch}
                                    disabled={activateUpdateBtn()}
                                    fullWidth={false} >
                                    Search
                                </Button>
                            </Stack>
                        </Grid>

                        {filteredCustomers 
                            ?   <Grid item sm={12} container sx={{mt: 3}}>
                                    <Grid item sm={12}>
                                        <Typography><strong>Search Results</strong></Typography>
                                        <Divider />
                                    </Grid>

                                    <Grid item sm={12} sx={{pt: 3, pb: 2}}>
                                        <Typography>Click on a name to view policies and claims</Typography>
                                    </Grid>

                                    <Grid item sm={12}>
                                        <StickyHeadTable customers={filteredCustomers} handleSelection={handleSelection}/>
                                    </Grid>
                                </Grid>
                            : null
                        }

                    </Grid>
                </Stack>
            </Paper>
        </MainContainer>
    )
}

function StickyHeadTable({customers, handleSelection}) {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <TableContainer>
            <Table  aria-label="sticky table">
            <TableHead>
                <TableRow sx={{backgroundColor: "#C9CBCE"}}>
                    <TableCell sx={{width: 2}}>#</TableCell>
                    <TableCell>Full Name</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>Phone Number</TableCell>
                    <TableCell>Date of Birth</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {customers?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((customer, i) => {
                    return (
                    <TableRow hover tabIndex={-1} key={customer._id} onClick={() => handleSelection(customer)}>
                        <TableCell>{i + 1}</TableCell>
                        <TableCell>{`${customer.first_name} ${customer.last_name}`}</TableCell>
                        <TableCell>{stringifyAddress(customer.address)}</TableCell>
                        <TableCell>{customer.phone}</TableCell>
                        <TableCell>{customer.dateOfBirth}</TableCell>
                    </TableRow>
                    ); 
                })} 
            </TableBody>
            </Table>

            <TablePagination
            rowsPerPageOptions={[5, 10, 25, 100]}
            component="div"
            count={customers.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
        </TableContainer>
    );
}