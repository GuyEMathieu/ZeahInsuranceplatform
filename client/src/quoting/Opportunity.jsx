import React, {useState} from 'react'
import {Container, Grid} from '@mui/material'
import MainContainer from '../components/MainContainer'
import OpportunityCard from '../components/OpportunityCard'

export default function Opportunity  () {

    const [selectedLines, setSelectedLines] = useState(null)
    const [lines, setLines] = useState([
        {
            lineName: 'Auto',
            isSelected: false,
        },
        {
            lineName: 'Condo',
            isSelected: false,
        },
        {
            lineName: 'Home',
            isSelected: false,
        },
        {
            lineName: 'Life',
            isSelected: false,
        },
        {
            lineName: 'Renters',
            isSelected: false,
        },
        {
            lineName: 'Boat',
            isSelected: false,
        },
    ])

    const handleSelection = lineName => {
        if(selectedLines?.includes(lineName)){
            setSelectedLines(selectedLines.filter(s => s !== lineName))
        } else {
            setSelectedLines([...selectedLines || [], lineName])
        }
        
        const selection = lines.find(s => s.lineName === lineName);
        selection.isSelected = !selection.isSelected
        setLines(lines.map(line => line.lineName === lineName ? selection : line))
    }
    return (
        <MainContainer>            
            <Container sx={{m: 5}}>
                <Grid spacing={2} container>
                    {lines.map(line => (
                        <Grid item sm={12} md={6} lg={3} key={line.lineName}>
                            <OpportunityCard line={line} handleSelection={handleSelection}/>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </MainContainer>

        
    )
}
