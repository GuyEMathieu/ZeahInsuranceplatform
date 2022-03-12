import React, {forwardRef} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = forwardRef(function Transition(props, ref) {
    function dir(){
        const list = ["up", "down", "left", "right"]
        return list[Math.floor(Math.random() * list.length)]
    }
    return <Slide direction={dir()} ref={ref} {...props} />;
});

export default function AnimatedDialog(props) {
    const {
        open, handleSave, handleClose, 
        children,
    } = props
    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>{"Use Google's location service?"}</DialogTitle>
            
            <DialogContent>
                <DialogContentText>
                    {children}
                </DialogContentText>
            </DialogContent>

            <DialogActions>
                <Button fullWidth={false} variant='text' autoFocus onClick={handleClose}>Cancel</Button>
                <Button fullWidth={false} onClick={handleSave}>Quote</Button>
            </DialogActions>
        </Dialog>
    );
}
