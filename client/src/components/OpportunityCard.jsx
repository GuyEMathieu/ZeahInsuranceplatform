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

export default function OpportunityCard({line, handleSelection}) {
    const theme = useTheme();
    const {lineName, isSelected = false} = line;


    const style = {
        color: theme.palette.background.boldBlue,
        py: 'auto',
        fontSize: 150,
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
    console.info(`${lineName} selected: ${isSelected}`)
    return (
        <Card sx={{
            maxWidth: 300,
            borderRadius: 10,
            backgroundColor: isSelected ? theme.palette.background.sidebar : null
        }}>
            <CardContent sx={{justifyContent: 'center'}} onClick={() => handleSelection(lineName)}>
                <Avatar 
                    sx={{
                        backgroundColor: isSelected === true ? theme.palette.text.primary : null,  
                        width: 150, height: 150, mb: 5, 
                        mx: 'auto', borderRadius: '50%', px: 'auto'}}
                >
                    {isSelected ? <CheckRoundedIcon style={style} /> : getIcon()}
                </Avatar>
                
                <Typography 
                    sx={{
                        ":focus":false,
                        color: isSelected === true 
                            ? theme.palette.text.primary 
                            : theme.palette.text.boldBlue
                        }} 
                    variant='h3' align='center'
                >
                    {lineName}
                </Typography>
            </CardContent>
        </Card>
    );
}
