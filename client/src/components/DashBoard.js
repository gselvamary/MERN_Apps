import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';

import { CssBaseline, AppBar, Toolbar, IconButton, Typography, Drawer, Hidden, Divider, Grid, MenuItem } from '@material-ui/core';
import { Folder } from '@material-ui/icons';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { List, Menu, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ButtonAppBar from './ButtonAppBar';

const drawerWidth = 250;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    menuButton: {
        marginRight: 0,
        [theme.breakpoints.up('sm')]: {
            marginRight: 10,
        }
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
});



class Layout extends React.Component {
    state = {
        mobileOpen: false,
        anchorEl: null,
    };

    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };


    render() {
        const { classes, children } = this.props;
        const { mobileOpen } = this.state;
        const { anchorEl } = this.state;
        const drawer = (
            <div>
                <Divider />

                <List>
                    <Link style={{ textDecoration: 'none' }} to="/" >
                        <ListItem button >
                            <ListItemIcon>
                                <Folder />
                            </ListItemIcon>
                            <ListItemText primary="Home" />

                        </ListItem>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="/components/AddDept" >
                        <ListItem button >
                            <ListItemIcon>
                                <Folder />
                            </ListItemIcon>
                            <ListItemText primary="Add Dept" />

                        </ListItem>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="/components/Register" >
                        <ListItem button >
                            <ListItemIcon>
                                <Folder />
                            </ListItemIcon>
                            <ListItemText primary="Registration" />

                        </ListItem>
                    </Link>
                </List>


            </div>
        );
        return (
            <Fragment>
                <div className="centered" >
                    <div className={classes.root}>
                        <CssBaseline />
                        <AppBar position="fixed" className={classes.appBar}>
                            <Toolbar>
                                <Grid item xs={12}>
                                    <Typography flex="1" variant="h6" color="inherit" noWrap>
                                        ICT LAB
                                </Typography> </Grid>
                                <Grid item xs={1} >
                                    <IconButton className={classes.menuButton}
                                        color="inherit"
                                        aria-label="More"
                                        aria-haspopup="true"
                                        onClick={this.handleClick}
                                    >
                                        <MoreVertIcon />
                                    </IconButton>
                                    <Menu
                                        id="simple-menu"
                                        anchorEl={anchorEl}
                                        open={Boolean(anchorEl)}
                                        onClose={this.handleClose}
                                    >         <List>

                                            <Link style={{ textDecoration: 'none' }} to="/" >
                                                <MenuItem button >C Programming</MenuItem>
                                            </Link>


                                            <Link style={{ textDecoration: 'none' }} to="/components/AddDept" >
                                                <MenuItem button >My P  rofile</MenuItem>
                                            </Link>
                                            <Link style={{ textDecoration: 'none' }} to="/components/Register" >
                                                <MenuItem button >My Courses</MenuItem>
                                            </Link>
                                        </List>
                                    </Menu>
                                </Grid>

                            </Toolbar>
                        </AppBar>
                        <nav className={classes.drawer}>
                            {/* The implementation can be swap with js to avoid SEO duplication of links. */}
                            <Hidden smUp implementation="css">
                                <Drawer
                                    container={this.props.container}
                                    variant="temporary"
                                    open={mobileOpen}
                                    onClose={this.handleDrawerToggle}
                                    classes={{
                                        paper: classes.drawerPaper,
                                    }}
                                    ModalProps={{
                                        keepMounted: true, // Better open performance on mobile.
                                    }}
                                >
                                    {drawer}
                                </Drawer>
                            </Hidden>
                            <Hidden xsDown implementation="css">
                                <Drawer
                                    classes={{
                                        paper: classes.drawerPaper,
                                    }}
                                    variant="permanent"
                                    open
                                >
                                    {drawer}
                                </Drawer>
                            </Hidden>
                        </nav>
                        <main className={classes.content}>
                            {children}
                        </main>
                    </div>

                </div>
            </Fragment>
        );
    }
}




export default withStyles(styles)(Layout);