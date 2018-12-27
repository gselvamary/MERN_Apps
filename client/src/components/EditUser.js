import React, { Component } from 'react';
import { Container, Card, CardBody, Button, Form, FormGroup, Input, Label, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchUser, getUsers, updateUser, deleteUser } from '../actions/userActions';
//import { getDepts } from '../actions/deptActions';
import PropTypes from 'prop-types';



class EditUser extends Component {

    componentDidMount() {
        // this.props.getUsers();
        //  this.props.getDepts();
        this.forceUpdate();
    };
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };


    onGetdetails = () => {
        this.props.fetchUser(this.state.regno);

    }

    onDeleteClick = regno => {
        this.props.deleteUser(regno);
    };



    onSubmit = id => {
        id.preventDefault();
        const val = {
            regno: this.state.regno,
            fname: this.state.fname,
            lname: this.state.lname,
            password: this.state.password,
            dept_id: this.state.dept_id,
            email: this.state.email,
            mobile: this.state.mobile,
        }
        this.props.updateUser(val);

    }
    render() {
        const { users } = this.props.user;

        return (
            <Container>

                <Card >
                    <header align="center" className="w3-container w3-black">
                        <h5>Profile</h5>
                    </header>
                    <CardBody >
                        <Form onSubmit={this.onSubmit}  >
                            <Row>
                                <Col xs="6">
                                    <Input type="text" name="regno" id="regno" placeholder="Enter Regno for Details" onChange={this.handleChange} />
                                </Col>
                                <Col xs="6">
                                    <Button color="primary" style={{ marginBottom: '2rem' }} onClick={this.onGetdetails}>Get Details</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="6">
                                    <FormGroup>
                                        <Label for="fname">First Name</Label>
                                        <Input type="text" name="fname" id="fname" placeholder={users.fname} onChange={this.handleChange} />
                                    </FormGroup>
                                </Col>
                                <Col xs="6">
                                    <FormGroup>
                                        <Label for="lname">Last Name</Label>
                                        <Input type="text" name="lname" id="lname" placeholder={users.lname} onChange={this.handleChange} />
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs="6">
                                    <FormGroup>
                                        <Label for="email">Email</Label>
                                        <Input type="text" name="email" id="email" placeholder={users.email} onChange={this.handleChange} />
                                    </FormGroup>
                                </Col>
                                <Col xs="6">
                                    <FormGroup>
                                        <Label for="mobile">Mobile</Label>
                                        <Input type="mobile" name="mobile" id="mobile" placeholder={users.mobile} onChange={this.handleChange} />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="6">
                                    <FormGroup>
                                        <Label for="password">Password</Label>
                                        <Input type="text" name="password" id="password" placeholder="" onChange={this.handleChange} />
                                    </FormGroup>
                                </Col>
                                <Col xs="6">
                                    <FormGroup>
                                        <Label for="password1">Re-Password</Label>
                                        <Input type="text" name="password1" id="password1" placeholder="" onChange={this.handleChange} />
                                    </FormGroup>
                                </Col></Row>
                            <Row>
                            </Row>
                        </Form>
                    </CardBody>

                    <Row>   </Row>
                    <Button color="dark" style={{ marginBottom: '2rem' }} onClick={this.onSubmit}>Update Details</Button>

                </Card>


            </Container >

        );
    }
}


EditUser.propTypes = {
    user: PropTypes.object.isRequired,
    getUsers: PropTypes.func.isRequired,
    deleteUser: PropTypes.func.isRequired,
    fetchUser: PropTypes.func.isRequired,
    updateUser: PropTypes.func.isRequired,

};


const mapStateToProps = state => ({
    user: state.user,
    dept: state.dept
});

export default connect(
    mapStateToProps,
    { deleteUser, fetchUser, getUsers, updateUser }
)(EditUser);


/*
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

    */