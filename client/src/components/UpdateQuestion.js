import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { getUsers, deleteUser, registerUser } from '../actions/userActions';
import { getDepts } from '../actions/deptActions';
import PropTypes from 'prop-types';
import Input from './Input'
import MyButton from './MyButton'
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Create from '@material-ui/icons/Create';
import { Paper, Typography, Select, OutlinedInput, MenuItem, FormControl, InputLabel, Divider } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';


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
    button: {
        backgroundColor: '#4caf50',
        margin: theme.spacing.unit,

    },
    green: {
        backgroundColor: '#4caf50',

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
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});


class UpdateQuestion extends Component {
    state = {
        labelWidth: 0,
        level: '',
        qdescription: 'Question Description',
        file_name: 'No file Selected',
        pictures: {},
        selectedFile: null,
        loaded: 0,
    };

    componentDidMount() {
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
    handleChange1 = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            qdescription: e.target.value
        });

    };

    handleChange2 = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            file_name: e.target.value
        });
        console.log(this.state.file_name);

    };

    onSelect = event => {
        this.setState({ level: event.target.value });
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
        const { classes } = this.props;
        return (
            <div>
                <main className={classes.main}>
                    <CssBaseline />
                    <Paper className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <Create />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Update Question
            </Typography>
                        <br />  <br />  <br />
                        <form className={classes.form} onSubmit={this.onSubmit}>
                            <Grid container spacing={24}>
                            <Grid item sm={6} xs={12}>
                                    <Input id="qid" name="qid" label="Question Id" value="12" />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <Input id="qname" name="qname" label="Question Name" value ="mine"  onChange={this.handleChange} />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <FormControl fullWidth variant="outlined" className={classes.formControl}>
                                        <InputLabel
                                            ref={ref => {
                                                this.InputLabelRef = ref;
                                            }}
                                            htmlFor="level"
                                        >
                                            Select Level
                                        </InputLabel>
                                        <Select disabled
                                            value={this.state.level}
                                            onChange={this.handleChange}
                                            input={
                                                <OutlinedInput
                                                    labelWidth={this.state.labelWidth}
                                                    name="level"
                                                    id="level"
                                                />
                                            }
                                        >
                                            <MenuItem value={1}>Level 1</MenuItem>
                                            <MenuItem value={2}>Level 2</MenuItem>
                                            <MenuItem value={3}>Level 3</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <FormControl fullWidth variant="outlined" className={classes.formControl}>
                                        <InputLabel
                                            ref={ref => {
                                                this.InputLabelRef = ref;
                                            }}
                                            htmlFor="session"
                                        >
                                            Select Sesssion
                                        </InputLabel>
                                        <Select disabled
                                            value={this.state.session}
                                            onChange={this.handleChange}
                                            input={
                                                <OutlinedInput
                                                    labelWidth={this.state.labelWidth}
                                                    name="session"
                                                    id="session"
                                                />
                                            }
                                        >
                                            <MenuItem value={1}>session 1</MenuItem>
                                            <MenuItem value={2}>session 2</MenuItem>
                                            <MenuItem value={3}>session 3</MenuItem>
                                            <MenuItem value={4}>session 4</MenuItem>
                                            <MenuItem value={5}>session 5</MenuItem>
                                            <MenuItem value={6}>session 6</MenuItem>
                                            <MenuItem value={7}>session 7</MenuItem>
                                            <MenuItem value={8}>session 8</MenuItem>
                                            <MenuItem value={9}>session 9</MenuItem>
                                            <MenuItem value={10}>session 10</MenuItem>
                                        </Select>
                                    </FormControl>

                                </Grid>
                                <Grid item sm={12} xs={12}>
                                    <TextField fullWidth onChange={this.handleChange1}
                                        id="qdes"
                                        name="qdes"
                                        value ="old description"
                                        label="Question Description"
                                        multiline
                                        className={classes.textField}
                                        margin="normal"
                                        variant="outlined"

                                    />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <Input id="equation" name="equation" label="Equation" onChange={this.handleChange} />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <MyButton label="Add Equation" />
                                </Grid>
                                <Grid item sm={12} xs={12}>
                                    <TextField fullWidth
                                        id="preview"
                                        name="preview"
                                        label="Question Description Preview"
                                        multiline
                                        className={classes.textField}
                                        margin="normal"
                                        variant="outlined"
                                        value={this.state.qdescription}
                                        disabled

                                    />
                                </Grid>
                                <Grid item sm={2} xs={12}>
                                    <input
                                        accept="image/*"
                                        className={classes.input}
                                        id="file"
                                        name="file"
                                        //    multiple
                                        type="file"
                                        onClick={this.handleChange2}
                                    />
                                    <label htmlFor="file">
                                        <Button fullWidth variant="outlined" component="span" className={classes.button}>
                                            File
                                         </Button>
                                    </label>
                                </Grid>

                                <Grid item sm={10} xs={12}>
                                    <Input name="filename" id="filename" label="File Name" value={this.state.file_name} />
                                </Grid>
                            </Grid>

                            <br></br>
                            <Divider />
                            <br></br>
                            <Typography component="h1" variant="h5">Test Cases </Typography>
                            <br></br>
                            <Chip
                                label="RULE 1: Set Test Cases to 0, If not needed"
                                color="secondary"
                                variant="default"
                            />
                            {" "}
                            <Chip
                                label="RULE 2: Input & Output is Must"
                                color="secondary"
                                variant="default"
                            />
                            <br></br>
                            <br></br>
                            <br></br>
                            <Grid container spacing={24}>
                                <Grid item sm={6} xs={12}>
                                    <Chip className={classes.green}
                                        label="INPUT"
                                        variant="default"
                                    />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <Chip className={classes.green}
                                        label="OUTPUT"
                                        variant="default"
                                    />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <Input name="test1" id="test1" label="Test Case 1" onChange={this.handleChange} />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <Input name="test11" id="test11" label="Test Case 1" onChange={this.handleChange} />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <Input id="test2" name="test2" label="Test Case 2" onChange={this.handleChange} />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <Input id="test22" name="test22" label="Test Case 2" onChange={this.handleChange} />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <Input name="test3" id="test3" label="Test Case 3" onChange={this.handleChange} />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <Input name="test33" id="test33" label="Test Case 3" onChange={this.handleChange} />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <Input name="test4" id="test4" label="Test Case 4" onChange={this.handleChange} />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <Input name="test44" id="test44" label="Test Case 4" onChange={this.handleChange} />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <Input id="test5" name="test5" label="Test Case 5" onChange={this.handleChange} />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <Input name="test6" id="test6" label="Test Case 6" onChange={this.handleChange} />
                                </Grid>
                            </Grid>
                            <br></br>
                            <br></br>
                            <MyButton sm={6} xs={12} type="submit" onClick={this.onSubmit} fullWidth variant="contained" className={classes.submit} label="Update Question" />
                            <br></br>
                            <br></br>

                        </form>
                    </Paper>
                </main>
            </div>
        );
    }
}


UpdateQuestion.propTypes = {
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
)(withStyles(styles)(UpdateQuestion));
