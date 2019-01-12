import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, ListGroup, ListGroupItem, ListGroupItemHeading } from 'reactstrap';
import { connect } from 'react-redux';
import { getUsers, deleteUser, registerUser } from '../actions/userActions';
import { getDepts } from '../actions/deptActions';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import ButtonAppBar from './ButtonAppBar';
import Input from './Input'
import MyButton from './MyButton'
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockIcon from '@material-ui/icons/LockOutlined';
import { Paper, Typography, Select, OutlinedInput, MenuItem, FormControl, InputLabel } from '@material-ui/core';
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
        this.props.getDepts();
        this.setState({
            labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
        });
    };
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });

    };
    onSelect = event => {
        this.setState({ dept_id: event.target.value });
    };
    onDismiss = () => {
        this.setState({ visible: false });
    }

    handleToggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    };
    toggle = () => {
        this.setState({
            visible: !this.state.visible
        });
    };


    onSubmit = e => {
        e.preventDefault();
        const newUser = {
            regno: this.state.regno,
            fname: this.state.fname,
            lname: this.state.lname,
            password: this.state.password,
            dept_id: this.state.dept_id,
            email: this.state.email,
            mobile: this.state.mobile,
        }
        //Add user via registerUser:
        this.props.registerUser(newUser);

        // alert(this.state.regno + this.state.fname + this.state.lname + this.state.password + this.state.dept_id + this.state.email + this.state.mobile)
        //   alert("User Registration is Successful");

    };
    onClick = () => {
        alert(this.state.regno)
    }
    onDeleteClick = id => {
        this.props.deleteUser(id);

    };

    render() {
        const { users } = this.props.user;
        const { depts } = this.props.dept;
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
                            Register your Account
            </Typography>
                        <form className={classes.form} onSubmit={this.onSubmit}>
                            <Grid container spacing={24}>
                                <Grid item sm={12} xs={12}>
                                    <Input id="regno" name="regno" label="Registration Number" autoFocus onChange={this.handleChange} />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <Input id="fname" name="fname"  label="First Name" autoFocus onChange={this.handleChange} />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <Input id="lname" name="lname"  label="Last Name" onChange={this.handleChange} autoFocus />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <Input name="password" id="password"  onChange={this.handleChange} label="Password" />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <Input name="password1" id="password1"  onChange={this.handleChange} label="Repeat Password" />
                                </Grid>
                                <Grid item sm={12} xs={12}>

                                    <FormControl fullWidth variant="outlined"   className={classes.formControl}>

                                        <InputLabel ref={ref => { this.InputLabelRef = ref; }} htmlFor="idlabel">Select Department</InputLabel>
                                        <Select
                                            value={this.state.dept_id}
                                            onChange={this.onSelect}
                                            input={<OutlinedInput labelWidth={this.state.labelWidth} name="dept" id="idlabel" />}
                                        >
                                            {depts.map(({ _id, dept_id, dept_name }) => {
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
                                    <Input id="email" name="email"  autoFocus onChange={this.handleChange} label="Email ID" />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <Input name="mobile" id="mobile" required label="Mobile Number" onChange={this.handleChange} autoFocus />
                                </Grid>
                            </Grid>

                            <br></br>
                            <MyButton sm={6} xs={12} type="submit" onClick={this.onSubmit} fullWidth variant="contained"  className={classes.submit} label="Register" />

                            <br></br> </form>
                    </Paper>
                </main>
                <br></br>
                <br></br>
                <br></br>
                <Link style={{ textDecoration: 'none' }} to="/EditUser">
                    <Button color="dark" style={{ marginBottom: '2rem' }}>Edit Profile</Button>
                </Link>


                <br></br>
                <br></br>
                <br></br>
                <ListGroup>
                    {users.map(({ _id, regno, fname }) => (
                        <ListGroupItemHeading key={_id}>
                            <ListGroupItem>
                                <Button className="remove-btn" color="danger" size="sm" onClick={this.onDeleteClick.bind(this, regno)}>
                                    &times;
                </Button>
                                {regno} - {fname}
                            </ListGroupItem>
                        </ListGroupItemHeading>
                    ))}
                </ListGroup>
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
};

const mapStateToProps = state => ({
    user: state.user,
    dept: state.dept
});

export default connect(
    mapStateToProps,
    { getUsers, deleteUser, registerUser, getDepts }
)(withStyles(styles)(Register_1));


/*
</FormControl>

                                        <InputLabel ref={ref => {
                                            this.InputLabelRef = ref;
                                        }}
                                            htmlFor="outlined-age-simple"
                                        >
                                            Select Department </InputLabel>
                                        <Select value={this.state.dept_id} onChange={this.handleChange} input={<OutlinedInput
                                            labelWidth={this.state.labelWidth} name="dept_name" id="outlined-age-simple" />
                                        }
                                        >
                                            {depts.map(({ _id, dept_id, dept_name }) => (
                                                <div key={_id}>
                                                    <MenuItem onClick={this.onSelect} id="dept_id" value={dept_id} name={dept_name}>{dept_name}</MenuItem>
                                                </div>
                                            ))}
                                        </Select>

*/