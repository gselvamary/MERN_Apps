import React from 'react';
import PropTypes from 'prop-types';

import ButtonAppBar from './ButtonAppBar';
import Input from './Input'
import MyButton from './MyButton'
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
//import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 800,
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

function Register1(props) {
    const { classes } = props;

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
                        Registration
                    </Typography>
                    <form className={classes.form}  >
                        <Grid container spacing={24}>
                            <Grid item sm={6} xs={12}>
                                <Input id="fname" name="fname" label="First Name" autoFocus />
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <Input id="lname" name="lname" label="Last Name" autoFocus />
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <Input name="password" type="password" id="password" label="Password" />
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <Input name="password1" type="password1" id="password1" label="Repeat Password" />
                            </Grid>
                            <Grid item xs={12} >
                                <Input name="dept_id" type="dept_id" id="dept_id" label="Department" />
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <Input id="email" name="email" autoFocus label="Email ID" />
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <Input name="mobile" type="mobile" id="mobile" label="Mobile Number" autoFocus />
                            </Grid>
                        </Grid>
                        <MyButton type="submit" fullWidth variant="contained" color="primary" className={classes.submit} label="Register" />
                    </form>
                </Paper>
            </main>
        </div>
    );
}

Register1.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Register1);