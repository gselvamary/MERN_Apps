import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import { Typography, CssBaseline, Paper, Button } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from "react-router-dom";




const styles = theme => ({
    palette: {
        color1: {
            main: '#d81b60',
        },
        color2: {
            main: '#388e3c',
        },
    },
    main: {
        marginTop: '10%',
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 450,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
});



class MyHome extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/MyHome");
        }
    }
    render() {
        const { classes } = this.props;
        return (
            <div >
                <main className={classes.main}>
                    <CssBaseline />
                    <Paper className={classes.paper}>
                        <Typography component="h1" variant="h5">
                            Home
                    </Typography>
                        <br>
                        </br>
                        <br></br>
                        <Button color="secondary" variant="contained" onClick={this.onLogoutClick}> Logout </Button>
                    </Paper></main>
            </div>
        );
    }
}

MyHome.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});



export default connect(
    mapStateToProps,
    { logoutUser }
)(withStyles(styles)(withRouter(MyHome)));