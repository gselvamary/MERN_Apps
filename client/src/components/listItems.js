import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { Link } from 'react-router-dom';

export const mainListItems = (
    <div>
        <Link style={{ textDecoration: 'none' }} to="/" >
            <ListItem button >
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
            </ListItem>
        </Link>
        <Link style={{ textDecoration: 'none' }} to="/Login" >
            <ListItem button >
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Login" />
            </ListItem>
        </Link>
        <Link style={{ textDecoration: 'none' }} to="/Register" >
            <ListItem button >
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Registration" />
            </ListItem>
        </Link>
        <Link style={{ textDecoration: 'none' }} to="/Profile" >
            <ListItem button >
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Profile" />
            </ListItem>
        </Link>
    </div>
);

export const secondaryListItems = (
    <div>
        <Link style={{ textDecoration: 'none' }} to="/" >
            <ListItem button >
              
                <ListItemText primary="Home" />
            </ListItem>
        </Link>
        <Link style={{ textDecoration: 'none' }} to="/Login" >
            <ListItem button >
               
                <ListItemText primary="Login" />
            </ListItem>
        </Link>
        <Link style={{ textDecoration: 'none' }} to="/Register" >
            <ListItem button >
                
                <ListItemText primary="Registration" />
            </ListItem>
        </Link>
        <Link style={{ textDecoration: 'none' }} to="/Profile" >
            <ListItem button >
               
                <ListItemText primary="Profile" />
            </ListItem>
        </Link>
    </div>
);
export const moreItemList = (
    <div>
        <Link style={{ textDecoration: 'none' }} to="/" >
            <ListItem button >
              
                <ListItemText primary="Home" />
            </ListItem>
        </Link>
        <Link style={{ textDecoration: 'none' }} to="/Login" >
            <ListItem button >
               
                <ListItemText primary="Login" />
            </ListItem>
        </Link>
        <Link style={{ textDecoration: 'none' }} to="/Register" >
            <ListItem button >
                
                <ListItemText primary="Registration" />
            </ListItem>
        </Link>
        <Link style={{ textDecoration: 'none' }} to="/Profile" >
            <ListItem button >
               
                <ListItemText primary="Profile" />
            </ListItem>
        </Link>
    </div>
);