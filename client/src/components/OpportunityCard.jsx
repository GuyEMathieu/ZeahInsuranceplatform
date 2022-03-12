import React, {useState} from 'react';
import Icon from '@mui/material/Icon';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Stack';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import DirectionsCar from '@mui/icons-material/DirectionsCar'
import HomeIcon from '@mui/icons-material/Home';
import ApartmentIcon from '@mui/icons-material/Apartment';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import SentimentSatisfiedRoundedIcon from '@mui/icons-material/SentimentSatisfiedRounded';
import DirectionsBoatFilledRoundedIcon from '@mui/icons-material/DirectionsBoatFilledRounded';

export default function OpportunityCard({lineName, handleSelection, selected}) {
    const theme = useTheme();

    const style = {
        color: theme.palette.background.boldBlue,
        py: 'auto',
        fontSize: 50,
        pb: 1
    }

    const getIcon = () => {
        switch(lineName){
            case 'Life':
                return < SentimentSatisfiedRoundedIcon style={style} />
            case 'Condo':
                return < ApartmentIcon style={style} />
            case 'Home':
                return < HomeIcon style={style} />
            case 'Renters':
                return < MapsHomeWorkIcon style={style} />
            case 'Auto':
                return < DirectionsCar style={style} />
            case 'Boat':
                return < DirectionsBoatFilledRoundedIcon style={style} />
            default: 
                return null;
        }
    }
    return (
        <Card sx={{
            borderRadius: 10,
            backgroundColor: selected === lineName ? theme.palette.background.sidebar : "#E0DBDB"
        }}>
            <CardContent sx={{justifyContent: 'center'}} onClick={() => handleSelection(lineName)}>
                <Avatar 
                    sx={{
                        backgroundColor: selected === lineName ? theme.palette.text.primary : null,  
                        width: 50, height: 50, mb: 5, 
                        mx: 'auto', borderRadius: '50%', px: 'auto'}}
                >
                    {selected === lineName ? <CheckRoundedIcon style={style} /> : getIcon()}
                </Avatar>
                
                <Typography 
                    sx={{
                        ":focus":false,
                        color: selected === lineName 
                            ? "white" 
                            : theme.palette.text.boldBlue
                        }} 
                    variant='h4' align='center'
                >
                    {lineName}
                </Typography>
            </CardContent>
        </Card>
    );
}
