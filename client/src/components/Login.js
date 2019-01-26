import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { loginUser } from "../actions/authActions";
import { getUsers } from "../actions/userActions";
import classnames from "classnames";
import { connect } from "react-redux";



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
    backgroundColor: '#4caf50'
  },
});


class Login extends Component {
  state = {
    errors: {},
    regno: '',
    password: ''
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const userData = {
      regno: this.state.regno,
      password: this.state.password
    };
    this.props.loginUser(userData);
  //  console.log(userData);
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/Dashboard"); // push user to dashboard when they login
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
  render() {

    const { errors } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <main className={classes.main}>
          <CssBaseline />
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
        </Typography>
            <form className={classes.form} onSubmit={this.onSubmit}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="regno">Registration Number</InputLabel>
                <Input id="regno" name="regno" onChange={this.handleChange}
                  className={classnames("", {
                    invalid: errors.regno || errors.regnonotfound
                  })} />
                <span className="red-text">
                  {errors.regno}
                  {errors.regnonotfound}
                </span>

              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input name="password" type="password" id="password" onChange={this.handleChange}
                  className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect
                  })} />
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              </FormControl>
              <br></br>
              <Button
                fullWidth
                variant="contained"
                className={classes.submit}
                type="submit"
              >
                LOGIN
          </Button>
              <br></br>
            </form>

          </Paper>
        </main>
      </div>
    );
  };
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  getUsers: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  user: state.user,
});
export default connect(
  mapStateToProps,
  { loginUser, getUsers }
)(withStyles(styles)(Login));




