import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { getUsers, deleteUser } from '../actions/userActions';
import { getDepts } from '../actions/deptActions';
import { registerUser } from "../actions/authActions";
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";
import ButtonAppBar from './ButtonAppBar';
import Input from './Input'
import MyButton from './MyButton'
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockIcon from '@material-ui/icons/LockOutlined';
import { Paper, Typography, Select, OutlinedInput, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import classnames from "classnames";

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
        DOB: new Date(),
        errors: {}
    };


    componentDidMount() {
        this.props.getUsers();
        this.props.getDepts();
        this.setState({
            labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
        });
        // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
        this.props.history.push("/MyHome");
      }
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });

    };
    onSelect = event => {
        this.setState({ dept_id: event.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        const newUser = {
            regno: this.state.regno,
            fname: this.state.fname,
            lname: this.state.lname,
            password: this.state.password,
            password1: this.state.password1,
            dept_id: this.state.dept_id,
            email: this.state.email,
            mobile: this.state.mobile,
        }
        //Add user via registerUser:
        this.props.registerUser(newUser, this.props.history);

        // alert(this.state.regno + this.state.fname + this.state.lname + this.state.password + this.state.dept_id + this.state.email + this.state.mobile)
        //   alert("User Registration is Successful");

    };


    render() {
        const { depts } = this.props.dept;
        const { classes } = this.props;
        const { errors } = this.state;
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
                            Register your Account
            </Typography>
                        <form className={classes.form} onSubmit={this.onSubmit}>
                            <Grid container spacing={24}>
                                <Grid item sm={12} xs={12}>
                                    <Input id="regno" name="regno" label="Registration Number" autoFocus onChange={this.handleChange}
                                        className={classnames("", {
                                            invalid: errors.regno
                                        })} />
                                    <span className="red-text">{errors.regno}</span>
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <Input id="fname" name="fname" label="First Name" autoFocus onChange={this.handleChange}
                                        className={classnames("", {
                                            invalid: errors.fname
                                        })} />
                                    <span className="red-text">{errors.fname}</span>
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <Input id="lname" name="lname" label="Last Name" onChange={this.handleChange}
                                        className={classnames("", {
                                            invalid: errors.lname
                                        })} />
                                    <span className="red-text">{errors.lname}</span>
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <Input name="password" id="password" onChange={this.handleChange} label="Password"
                                        className={classnames("", {
                                            invalid: errors.password
                                        })} />
                                    <span className="red-text">{errors.password}</span>
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <Input name="password1" id="password1" onChange={this.handleChange} label="Repeat Password"
                                        className={classnames("", {
                                            invalid: errors.password1
                                        })} />
                                    <span className="red-text">{errors.password1}</span>
                                </Grid>
                                <Grid item sm={12} xs={12}>

                                    <FormControl fullWidth variant="outlined" className={classes.formControl}>

                                        <InputLabel ref={ref => { this.InputLabelRef = ref; }} htmlFor="idlabel">Select Department</InputLabel>
                                        <Select
                                            value={this.state.dept_id}
                                            onChange={this.onSelect}
                                            input={<OutlinedInput labelWidth={this.state.labelWidth} name="dept" id="idlabel" />}
                                        >
                                            {depts.map(({ dept_id, dept_name }) => {
                                                return (
                                                    <MenuItem key={dept_id} value={dept_id}>
                                                        {dept_name}
                                                    </MenuItem>
                                                );
                                            })}
                                        </Select>
                                    </FormControl>

                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <Input id="email" name="email" type="email" autoFocus onChange={this.handleChange} label="Email ID" />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <Input name="mobile" id="mobile" required label="Mobile Number" onChange={this.handleChange} autoFocus />
                                </Grid>

                            </Grid>

                            <br></br>
                            <MyButton sm={6} xs={12} type="submit" onClick={this.onSubmit} fullWidth variant="contained" className={classes.submit} label="Register" />

                            <br></br> </form>
                    </Paper>
                </main>
                <br></br>
                <br></br>

            </div>
        );
    }
}


Register_1.propTypes = {
    getUsers: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    deleteUser: PropTypes.func.isRequired,
    registerUser: PropTypes.func.isRequired,
    getDepts: PropTypes.func.isRequired,
    classes: PropTypes.object,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    user: state.user,
    dept: state.dept,
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { getUsers, deleteUser, registerUser, getDepts }
)(withStyles(styles)(withRouter(Register_1)));

