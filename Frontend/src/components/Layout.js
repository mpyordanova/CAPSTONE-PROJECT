import React, {Component} from 'react'
import { makeStyles } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import clsx from 'clsx'
const drawerWidth = 240
const useStyles = makeStyles({
    page:{
        background: '#f9f9f9',
        width: '100%'
    },
    drawer: {
        width: drawerWidth 

    }
})
 export default function Layout({children}) {
    const classes = useStyles();
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <Typography>
                        My Albums
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer 
            className={classes.drawer}
            variant="permanent"
            anchor="right" 
            classes={{paper: classes.drawerPaper }}
            >
                <div>
                    <Typography>
                        My pictures
                    </Typography>
                </div>
            </Drawer>
        <div>
            {children}
        </div>
        </div>
    )
 }