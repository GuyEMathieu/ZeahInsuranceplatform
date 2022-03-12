import React, {useState} from 'react';
import { useTheme } from '@mui/material/styles';
import {Accordion, Button} from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import ExpandLess from '@mui/icons-material/ExpandLess';
export default function AccordionShell({isExpanded = false, title, children}) {
    const theme = useTheme();
    const [expanded, setExpanded] = useState(isExpanded)
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
                    {title}
                </Typography>
            </AccordionSummary>

            <AccordionDetails sx={{py: 2, px:1}}>
                {children}

                <Button sx={{ml: 1}} 
                    onClick={() => setExpanded(false)}
                    fullWidth={false} 
                    startIcon={<ExpandLess  />} 
                    variant={'text'}>
                        Collapse
                </Button>
            </AccordionDetails>
        </Accordion>
    );
}
