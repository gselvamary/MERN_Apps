import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { getUsers } from '../actions/userActions';
import PropTypes from 'prop-types';
import ButtonAppBar from './ButtonAppBar';
import MyButton from './MyButton'
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockIcon from '@material-ui/icons/LockOutlined';
import { Paper, Typography, OutlinedInput, MenuItem, Select, FormControl, InputLabel } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
    main: {
        marginTop: '10%',
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 600,
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


class Register_1 extends Component {

    state = {
        labelWidth: 0,
    };


    componentDidMount() {
        this.props.getUsers();
        this.setState({
            labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
        });
    };

    onSelect = event => {
        this.setState({ regno: event.target.value });
    };


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });

    };

    render() {
        const { users } = this.props.user;
        const { classes } = this.props;

        return (
            <div>
                <ButtonAppBar title="MyPage" linkname="Login" to="/Login" />
                <main className={classes.main}>

                    <CssBaseline />
                    <Paper className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Add Faculty
            </Typography>
                        <form className={classes.form} onSubmit={this.onSubmit}>
                            <Grid container spacing={24}>

                                <Grid item sm={12} xs={12}>
                                    <FormControl fullWidth variant="outlined" className={classes.formControl}>

                                        <InputLabel ref={ref => { this.InputLabelRef = ref; }} htmlFor="idlabel">Select Faculty</InputLabel>
                                        <Select
                                            value={this.state.regno}
                                            onChange={this.onSelect}
                                            input={<OutlinedInput labelWidth={this.state.labelWidth} name="user" id="idlabel" />}
                                        >

                                            {users.map(({ regno, fname }) => {
                                                return (
                                                    <MenuItem key={regno} value={regno}>
                                                        {regno} - {fname}
                                                    </MenuItem>
                                                );
                                            })}
                                        </Select>
                                    </FormControl>
                                    <br></br>

                                </Grid>

                            </Grid>

                            <br></br>
                            <MyButton sm={6} xs={12} type="submit" onClick={this.onSubmit} fullWidth variant="contained" className={classes.submit} label="Register" />

                            <br></br> </form>
                    </Paper>
                </main>

            </div>
        );
    }
}


Register_1.propTypes = {
    getUsers: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    classes: PropTypes.object,
};

const mapStateToProps = state => ({
    user: state.user,

});

export default connect(
    mapStateToProps,
    { getUsers }
)(withStyles(styles)(Register_1));

