import React, { Children } from 'react'
import {styled} from '@mui/material/styles'
import SimpleBar from 'simplebar-react'

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    
    ({ theme, open }) => ({
        flexGrow: 1,
        backgroundColor: theme.palette.background.page,
        padding: theme.spacing(1),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        /**
        marginLeft: `-${drawerWidth}px`,
            ...(open && {
                transition: theme.transitions.create('margin', {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
        
            marginLeft: 0,
        }),
        */
        marginBottom: 6
    }),
);

// const Main = styled('main')(({theme}) => ({

// }))

const MainContainer = ({children}) => {
    return (
        <Main>
            {children}
        </Main>
    )
}

export default MainContainer