import React, {useState} from 'react'
import {
    Paper, Grid, Button,
    Divider, Stack
} from '@mui/material'

import OpportunityCard from '../components/OpportunityCard'
import AnimatedDialog from '../components/AnimatedDialog'
import AccordionShell from '../components/AccordionShell'
import Driver from '../quoting/Driver'


import ChevronLeft from '@mui/icons-material/ChevronLeft'
import EditIcon from '@mui/icons-material/Edit'
import { Typography } from '@mui/material'

export default function Opportunity  ({primary}) {

    console.info("Hello")
    const [quote, setQuote] = useState(null)
    const [selected, setSelected] = useState(null)
    const [lines] = useState(['Auto', 'Condo', 'Home', 'Life', 'Renters', 'Boat'])

    const handleSelection = lineName => {
        setSelected(lineName)
    }

    const [openOpportunities, setOpenOpportunities] = useState(false)
    const onNew = () => {
        setSelected(null)
        setOpenOpportunities(true)
    }

    const handleCancel = () => {
        setOpenOpportunities(false)
    }

    const handleSave = () => {
        setQuote({drivers: [primary]})
        setOpenOpportunities(false)
    }

    const OppCards = () => {
        return (
            <Grid container spacing={2}>
                {lines.map(line => (
                    <Grid item sm={12} md={6} lg={4} key={line}>
                        <OpportunityCard lineName={line} selected={selected} handleSelection={handleSelection} />
                    </Grid>
                ))}
            </Grid>
        )
    }


    
    return (
            <Grid container spacing={2}>
                {!quote ? 
                    <Grid item xs={12} >
                        <Paper sx={{mx: 0}}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Button fullWidth={false} onClick={onNew}>New</Button>
                                </Grid> 

                                <Grid item xs={12}>
                                    <Divider  />
                                </Grid>
                            </Grid>
                            <AnimatedDialog 
                                open={openOpportunities} 
                                handleClose={handleCancel} 
                                handleSave={handleSave}
                                sx={{maxWidth: '80vw'}}>
                                <OppCards  />
                            </AnimatedDialog>
                        </Paper>
                    </Grid>
                    :
                    <Grid item xs={8} >
                        <Grid container spacing={2}>
                            <Grid item xs={10} spacing={2}>
                                <Stack spacing={2}>
                                    <AccordionShell 
                                        isExpanded
                                        title={`${primary?.first_name} ${primary?.last_name} (Primary)`}>
                                        <Driver driver={primary} isPrimary />
                                    </AccordionShell>
                                    <AccordionShell 
                                        isExpanded={false}
                                        title={`${primary?.first_name} ${primary?.last_name} (Primary)`}>
                                        <Driver driver={primary}/>
                                    </AccordionShell>
                                </Stack>
                            </Grid>
                            <Grid item xs>
                                <Button 
                                    onClick={() => {setQuote(null)}}
                                    startIcon={<ChevronLeft/>}
                                    fullWidth={false} 
                                    variant='outlined'>Opportunities</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                }
            </Grid>
    )
}


