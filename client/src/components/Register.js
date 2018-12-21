import React, { Component } from 'react';
import { Container, Card, CardBody, Button, Form, FormGroup, Input, Label, ListGroup, ListGroupItem, ListGroupItemHeading, Row, Col, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';
import { getUsers, deleteUser, registerUser } from '../actions/userActions';
import { getDepts } from '../actions/deptActions';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import ButtonAppBar from './ButtonAppBar';


class Register extends Component {
    state = {
        dropdownOpen: false,
        visible: true,
        deptname: 'Select Department'
    };
    componentDidMount() {
        this.props.getUsers();
        this.props.getDepts();
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

        return (
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

        );
    }
}


Register.propTypes = {
    getUsers: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    deleteUser: PropTypes.func.isRequired,
    registerUser: PropTypes.func.isRequired,
    getDepts: PropTypes.func.isRequired,

};

const mapStateToProps = state => ({
    user: state.user,
    dept: state.dept
});

export default connect(
    mapStateToProps,
    { getUsers, deleteUser, registerUser, getDepts }
)(Register);


/*


    */