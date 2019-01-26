import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSessions, registerSession } from '../actions/sessionActions';
import PropTypes from 'prop-types';
import ButtonAppBar from './ButtonAppBar';
import Input from './Input'
import MyButton from './MyButton'
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Create from '@material-ui/icons/Create';
import { Paper, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';


const styles = theme => ({
    main: {
        marginTop: 'auto',
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 'auto',
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
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
});


class AddSession extends Component {
    state = {
        labelWidth: 0,
    };


    componentDidMount() {
        this.props.getSessions();
    };
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });

    };

    onSubmit = e => {
        e.preventDefault();
        const newSession = {
            session1: this.state.session1,
            session2: this.state.session2,
            session3: this.state.session3,
            session4: this.state.session4,
            session5: this.state.session5,
            session6: this.state.session6,
            session7: this.state.session7,
            session8: this.state.session8,
            session9: this.state.session9,
            session10: this.state.session10,

        }
        alert(this.state.session1 + this.state.session6);
        //Add user via registerUser:
        this.props.registerSession(newSession);

    };


    render() {
        const { sessions } = this.props.session;
        const { classes } = this.props;
        return (
            <div>
                <ButtonAppBar title="MyPage" linkname="Login" to="/Login" />
                <main className={classes.main}>

                    <CssBaseline />
                    <Paper className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <Create />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Session Name
            </Typography>

                        <form className={classes.form} onSubmit={this.onSubmit}>
                            <Grid container spacing={24}>
                                <Grid item sm={6} xs={12}>
                                    <Input id="session1" name="session1" value ={this.state.session1} label="Session 1" onChange={this.handleChange} />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <Input id="session2" name="session2" label="Session 2" onChange={this.handleChange} />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <Input id="session3" name="session3" label="Session 3" onChange={this.handleChange} />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <Input name="session4" id="session4" label="Session 4" onChange={this.handleChange} />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <Input name="session5" id="session5" label="Session 5" onChange={this.handleChange} />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <Input id="session6" name="session6" label="Session 6" onChange={this.handleChange} />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <Input name="session7" id="session7" label="Session 7" onChange={this.handleChange} />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <Input name="session8" id="session8" label="Session 8" onChange={this.handleChange} />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <Input id="session9" name="session9" label="Session 9" onChange={this.handleChange} />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <Input name="session10" id="session10" label="Session 10" onChange={this.handleChange} />
                                </Grid>
                            </Grid>

                            <br></br>
                            <MyButton sm={6} xs={12} type="submit" onClick={this.onSubmit} fullWidth variant="contained" className={classes.submit} label="Add Session" />

                            <br></br> </form>
                          
                    </Paper>
                </main>
            </div>
        );
    }
}


AddSession.propTypes = {
    getSessions: PropTypes.func.isRequired,
    session: PropTypes.object.isRequired,
    registerSession: PropTypes.func.isRequired,
    classes: PropTypes.object,
};

const mapStateToProps = state => ({
    session: state.session
});

export default connect(
    mapStateToProps,
    { getSessions, registerSession }
)(withStyles(styles)(AddSession));
