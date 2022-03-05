import React, {useState} from 'react';
import { useTheme } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionShell(props) {
    const theme = useTheme();
    const [expanded, setExpanded] = useState(props.isExpanded)
    return (
        <Accordion expanded={expanded}>
            <AccordionSummary
                onClick={() => setExpanded(!expanded)}
                sx={{px: 2, my: 0, backgroundColor: theme.palette.background.paperHeader}}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography 
                    sx={{py: 0, color: theme.palette.text.boldBlue}}
                >
                    {props.title}
                </Typography>
            </AccordionSummary>

            <AccordionDetails sx={{py: 2, px:1}}>
                {props.children}
            </AccordionDetails>
        </Accordion>
    );
}
