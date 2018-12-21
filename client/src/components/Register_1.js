import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Container, Card, CardBody, Button, Form, FormGroup, Label, ListGroup, ListGroupItem, ListGroupItemHeading, Row, Col, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';
import { getUsers, deleteUser, registerUser } from '../actions/userActions';
import { getDepts } from '../actions/deptActions';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import ButtonAppBar from './ButtonAppBar';
import SelectBox from './SelectBox';
import Input from './Input'
import MyButton from './MyButton'
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import { Typography, Select, OutlinedInput, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
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


class Register extends Component {
    state = {
        dropdownOpen: false,
        visible: true,
        dept_name: 'Select Department',
        LabelWidth: 0
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
    onSelect = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
            deptname: e.target.name
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
        //Add user  via registerUser:
        this.props.registerUser(newUser);
        alert("User Registration is Successful");

    };
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
                <main >

                    <CssBaseline />
                    <Paper className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Registration
                    </Typography>
                        <form className={classes.form} onSubmit={this.onSubmit} >
                            <Grid container spacing={24}>
                                <Grid item sm={6} xs={12}>
                                    <Input id="fname" name="fname" label="First Name" autoFocus />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <Input id="lname" name="lname" label="Last Name" autoFocus />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <Input name="password" id="password" label="Password" />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <Input name="password1" id="password1" label="Repeat Password" />
                                </Grid>
                                <Grid item xs={12} >
                                    <FormControl fullWidth variant="outlined" className={classes.formControl}>
                                        <InputLabel
                                            ref={ref => {
                                                this.InputLabelRef = ref;
                                            }}
                                            htmlFor="dept_id"
                                        >
                                            {this.state.dept_name}
                                        </InputLabel>


                                        <Select
                                            value={this.state.dept_name}
                                            onChange={this.handleChange}
                                            input={
                                                <OutlinedInput
                                                    labelWidth={this.state.labelWidth}
                                                    name="Department"
                                                    id="dept_id"
                                                />
                                            }
                                        >
                                            {depts.map(({ _id, dept_id, dept_name, dept_sname }) => (
                                                <div key={_id}>
                                                    <MenuItem value={dept_id} onClick={this.onSelect} id="dept_id" name={dept_name}>{dept_name} </MenuItem>
                                                </div>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <Input id="email" name="email" autoFocus label="Email ID" />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <Input name="mobile" id="mobile" label="Mobile Number" autoFocus />
                                </Grid>
                            </Grid>
                            <MyButton type="submit" fullWidth variant="contained" color="primary" className={classes.submit} label="Register" />
                        </form>
                    </Paper>
                </main>


                <Container>
                    <ButtonAppBar title="MyPage" linkname="Login" to="/Login" />
                    <br></br>
                    <br></br>
                    <Card>
                        <header align="center" className="w3-container w3-black">
                            <h5>Student Registration</h5>
                        </header>

                        <CardBody >
                            <Form onSubmit={this.onSubmit}  >
                                <Row>
                                    <Col xs="6">
                                        <FormGroup>
                                            <Label for="regno">Reg. No.:</Label>
                                            <Input name="regno" value={users.regno} id="regno" placeholder="Reg. No." onChange={this.handleChange} />
                                        </FormGroup>
                                    </Col>

                                    <Col xs="3">
                                        <FormGroup>
                                            <Label>Department</Label>
                                            <FormGroup  >
                                                <ButtonDropdown id="dept_id" value={this.state.dept_id} isOpen={this.state.dropdownOpen} toggle={this.handleToggle}>
                                                    <DropdownToggle caret > {this.state.deptname}</DropdownToggle>
                                                    <DropdownMenu >
                                                        {depts.map(({ _id, dept_id, dept_name, dept_sname }) => (
                                                            <div key={_id}>
                                                                <DropdownItem onClick={this.onSelect} value={dept_id} id="dept_id" name={dept_name}>
                                                                    {dept_name}
                                                                </DropdownItem>
                                                            </div>
                                                        ))

                                                        }

                                                    </DropdownMenu>
                                                </ButtonDropdown>
                                            </FormGroup>
                                        </FormGroup>
                                    </Col>
                                </Row>


                                <Row>
                                    <Col xs="6">
                                        <FormGroup>
                                            <Label for="fname">First Name</Label>
                                            <Input type="text" name="fname" id="fname" value={this.state.fname} placeholder="First Name" onChange={this.handleChange} />
                                        </FormGroup>
                                    </Col>
                                    <Col xs="6">
                                        <FormGroup>
                                            <Label for="lname">Last Name</Label>
                                            <Input type="text" name="lname" id="lname" placeholder="Last Name" onChange={this.handleChange} />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs="6">
                                        <FormGroup>
                                            <Label for="password">Password</Label>
                                            <Input type="text" name="password" id="password" placeholder="Password" onChange={this.handleChange} />
                                        </FormGroup>
                                    </Col>
                                    <Col xs="6">
                                        <FormGroup>
                                            <Label for="password1">Re-Password</Label>
                                            <Input type="text" name="password1" id="password1" placeholder="Re-Password" onChange={this.handleChange} />
                                        </FormGroup>
                                    </Col></Row>
                                <Row>
                                    <Col xs="6">
                                        <FormGroup>
                                            <Label for="email">Email</Label>
                                            <Input type="text" name="email" id="email" placeholder="Email" onChange={this.handleChange} />
                                        </FormGroup>
                                    </Col>
                                    <Col xs="6">
                                        <FormGroup>
                                            <Label for="mobile">Mobile</Label>
                                            <Input type="mobile" name="mobile" id="mobile" placeholder="Mobile" onChange={this.handleChange} />
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Form>
                        </CardBody>

                        <Row>   </Row>
                        <Button color="dark" style={{ marginBottom: '2rem' }} onClick={this.onSubmit}>Register</Button>
                        <Row>   </Row>
                        <Link style={{ textDecoration: 'none' }} to="/EditUser" >
                            <Button color="dark" style={{ marginBottom: '2rem' }} >Edit Profile</Button>
                        </Link>
                    </Card>

                    <br></br>
                    <br></br>
                    <br></br>
                    <ListGroup>
                        {users.map(({ _id, regno, fname }) => (
                            <ListGroupItemHeading key={_id}>
                                <ListGroupItem>
                                    <Button className="remove-btn" color="danger" size="sm"
                                        onClick={this.onDeleteClick.bind(this, regno)}
                                    >
                                        &times;
                                    </Button>
                                    {regno} - {fname}
                                </ListGroupItem>
                            </ListGroupItemHeading>
                        ))}
                    </ListGroup>
                    <br></br>
                    <br></br>
                </Container >
            </div>
        );
    }
}


Register.propTypes = {
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
)(withStyles(styles)(Register));


/*


    */