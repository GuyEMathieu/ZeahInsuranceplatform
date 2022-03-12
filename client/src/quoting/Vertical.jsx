import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import DriverSelection
 from './DriverSelection';
const steps = [
    {
        label: 'Driver Selection',

    },
    {
        label: 'Create an ad group',

    },
    {
        label: 'Create an ad',

    },
];

export default function VerticalLinearStepper() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };


    const [quote, setQuote] = useState({})
    const handleViews = () => {
        switch(steps[activeStep].label){
            case 'Driver Selection':
                return <DriverSelection setQuote={setQuote} />
            default: 
                return null;
        }
    }
    console.info(quote)

    return (
        <Box >
        <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
            <Step key={step.label}>
                <StepLabel>
                {step.label}
                </StepLabel>
                <StepContent>
                    
                    {handleViews()}

                    <Box sx={{ mb: 2 }}>
                        <div>
                            <Button
                                variant="contained"
                                onClick={handleNext}
                                sx={{ mt: 1, mr: 1 }}
                                fullWidth={false}
                            >
                                {index === steps.length - 1 ? 'Finish' : 'Continue'}
                            </Button>
                            <Button
                                disabled={index === 0}
                                onClick={handleBack}
                                fullWidth={false}
                                sx={{ mt: 1, mr: 1 }}
                            >
                                Back
                            </Button>
                        </div>
                    </Box>
                </StepContent>
            </Step>
            ))}
        </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                    <Typography>All steps completed - you&apos;re finished</Typography>
                    <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                        Reset
                    </Button>
                </Paper>
            )}
        </Box>
    );
}
