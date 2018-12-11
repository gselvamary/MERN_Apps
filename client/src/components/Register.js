import React, { Component } from 'react';
import { Container, Card, CardBody, Button, Form, FormGroup, Input, Label, ListGroup, ListGroupItem, ListGroupItemHeading } from 'reactstrap';
import { connect } from 'react-redux';
import { getUsers, deleteUser, registerUser } from '../actions/userActions';
import PropTypes from 'prop-types';

class Register extends Component {

    componentDidMount() {
        this.props.getUsers();
    };
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
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
    };

    onDeleteClick = id => {
        this.props.deleteUser(id);
    };

    render() {
        const { users } = this.props.user;
        return (
            <Container>
                <Card>

                    <CardBody>
                        <Form onSubmit={this.onSubmit}  >
                            <FormGroup>
                                <Label for="regno">Reg. No.:</Label>
                                <Input name="regno" id="regno" placeholder="Reg. No." onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="fname">First Name</Label>
                                <Input type="text" name="fname" id="fname" placeholder="First Name" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="lname">Last Name</Label>
                                <Input type="text" name="lname" id="lname" placeholder="Last Name" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input type="text" name="password" id="password" placeholder="Password" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password1">Re-Password</Label>
                                <Input type="text" name="password1" id="password1" placeholder="Re-Password" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="dept_id">Department</Label>
                                <Input name="dept_id" id="dept_id" placeholder="Id" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input type="text" name="email" id="email" placeholder="Email" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="mobile">Mobile</Label>
                                <Input type="mobile" name="mobile" id="mobile" placeholder="Mobile" onChange={this.handleChange} />
                            </FormGroup>
                        </Form>
                        <Button color="dark" style={{ marginBottom: '2rem' }} onClick={this.onSubmit}>Register</Button>

                    </CardBody>
                </Card>
                <br></br>
                <ListGroup>
                    {users.map(({ _id, regno, fname }) => (
                        <ListGroupItemHeading key={_id}>
                            <ListGroupItem>
                                <Button className="remove-btn" color="danger" size="sm"
                                    onClick={this.onDeleteClick.bind(this, _id)}
                                >
                                    &times;
                                    </Button>
                                {regno} - {fname}
                            </ListGroupItem>
                        </ListGroupItemHeading>
                    ))}
                </ListGroup>
            </Container>

        );
    }
}


Register.propTypes = {
    getUsers: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    deleteUser: PropTypes.func.isRequired,
    registerUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    user: state.user
});

export default connect(
    mapStateToProps,
    { getUsers, deleteUser, registerUser }
)(Register);


  /*
 
      */