import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { Link } from 'react-router-dom';

import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import NetworkWifiRoundedIcon from '@mui/icons-material/NetworkWifiRounded';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0),
    margin: theme.spacing(0),
    backgroundColor: theme.palette.background.sidebar,
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const CustomLink = styled(Link)(({theme}) => ({
    textDecoration: 'none',
    color: theme.palette.text.primary
}))
const Text = styled(ListItemText)(({theme}) => ({
    color: theme.palette.text.black
}))

export default function Sidebar({open, handleDrawerClose}) {
    const theme = useTheme();

    return (
        <Drawer
            sx={{
                backgroundColor: theme.palette.background.sidebar,
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </DrawerHeader>

            <Divider />

            <List sx={{flexGrow: 1, margin: 0, padding: 0, backgroundColor: theme.palette.background.sidebar}}>
                <CustomLink to='/'>
                    <ListItem button>
                        <ListItemIcon>
                            <AccountCircleRoundedIcon /> 
                        </ListItemIcon>
                        <Text primary={'Customers'}  />
                    </ListItem>
                </CustomLink>

                <Divider />

                <CustomLink to='/quotes'>
                    <ListItem button>
                        <ListItemIcon>
                            <NetworkWifiRoundedIcon /> 
                        </ListItemIcon>
                        <Text primary={'Quote'} />
                    </ListItem>
                </CustomLink>
            </List>

        </Drawer>
    );
}