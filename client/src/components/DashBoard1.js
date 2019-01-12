import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import { CssBaseline, AppBar, Toolbar, IconButton, Typography, Drawer, Divider } from '@material-ui/core';
import { List } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mainListItems, secondaryListItems } from './listItems';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIconlist from './MoreIconlist';


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
    title: {
        flexGrow: 1,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBar1: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    toolbar: theme.mixins.toolbar,
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },

    menuButton1: {
        marginRight: 0,
        [theme.breakpoints.up('sm')]: {
            marginRight: 10,
        }
    },

    menuButtonHidden: {
        display: 'none',
    },

    drawerPaper: {
        //position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing.unit * 7,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9,
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        height: '100vh',
        overflow: 'auto',
    },

    h5: {
        marginBottom: theme.spacing.unit * 2,
    },

    toolbarIcon: {
        display: 'flex',
        alignItems: 'left',
        //  justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
});


class Layout extends React.Component {
    state = {
        open: true

    };
    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };



    render() {
        const { classes, children } = this.props;



        return (

            <div className="centered" >
                <div className={classes.root}>
                    <CssBaseline />
                    <Layout title="Home"
                    <main className={classes.content}>
                        {children}
                    </main>
            </div>

   )   }
}




export default withStyles(styles)(Layout);

/*


*/