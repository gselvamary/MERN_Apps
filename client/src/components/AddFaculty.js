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
import { Paper, Typography, OutlinedInput, MenuItem, Select, FormControl, InputLabel } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import AddFacultyList from './AddFacultyList';
import AutoComplete from 'material-ui/AutoComplete';

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
        searchText: '',
        regno: ''

    };


    componentDidMount() {
        this.props.getUsers();

    };
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });

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


    onClick = () => {
        alert(this.state.regno)
    }

    handleUpdateInput = (searchText) => {
        this.setState({
            searchText: searchText,
        });
    };

    handleNewRequest = () => {
        this.setState({
            searchText: '',
        });
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
                            Add Faculty
            </Typography>
                        <form className={classes.form} onSubmit={this.onSubmit}>
                            <Grid container spacing={24}>

                                <Grid item sm={12} xs={12}>
                                    <FormControl fullWidth variant="outlined" className={classes.formControl}>

                                        <InputLabel ref={ref => { this.InputLabelRef = ref; }} htmlFor="idlabel"></InputLabel>
                                        <Select
                                            value={this.state.regno}
                                            onChange={this.handleChange}
                                        >
                                            {users.map(({ _id, regno, fname }) => {
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
                <br></br>
                <br></br>
                <br></br>
                <Link style={{ textDecoration: 'none' }} to="/EditUser">
                    <Button color="dark" style={{ marginBottom: '2rem' }}>Edit Profile</Button>
                </Link>
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

