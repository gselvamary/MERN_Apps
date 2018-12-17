import React, { Component } from 'react';
import { Container, Card, CardBody, Button, Form, FormGroup, Input, Label, Row, Col, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchUser, updateUser, deleteUser } from '../actions/userActions';
import { getDepts } from '../actions/deptActions';
import PropTypes from 'prop-types';

class EditUser extends Component {
    state = {
        dropdownOpen: false,
        visible: true,
        deptname: 'Select Your Department',
        regno: '',

    };
    componentDidMount() {

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

    toGetdetails = e => {
        this.props.fetchUser(e);
    };


    onDeleteClick = id => {
        this.props.deleteUser(id);

    };

    render() {
        const { users } = this.props.user;
        const { depts } = this.props.dept;

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
                                    <Input type="text" name="regno1" id="regno1" placeholder="Enter Regno for Details" onChange={this.handleChange} />
                                </Col>
                                <Col xs="6">
                                    <Button color="primary" style={{ marginBottom: '2rem' }} onClick={this.toGetdetails.bind(this, this.state.regno1)}>Get Details</Button>
                                </Col>
                            </Row>

                            <Row></Row>
                            <Row>
                                <Col xs="4">
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
                                                    ))}

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
                                        <Input type="text" name="fname" id="fname" value={users.fname} placeholder="First Name" onChange={this.handleChange} />
                                    </FormGroup>
                                </Col>
                                <Col xs="6">
                                    <FormGroup>
                                        <Label for="lname">Last Name</Label>
                                        <Input type="text" name="lname" id="lname" value={users.lname} placeholder="Last Name" onChange={this.handleChange} />
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs="6">
                                    <FormGroup>
                                        <Label for="email">Email</Label>
                                        <Input type="text" name="email" id="email" value={users.email} placeholder="Email" onChange={this.handleChange} />
                                    </FormGroup>
                                </Col>
                                <Col xs="6">
                                    <FormGroup>
                                        <Label for="mobile">Mobile</Label>
                                        <Input type="mobile" name="mobile" id="mobile" value={users.mobile} placeholder="Mobile" onChange={this.handleChange} />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Form>
                    </CardBody>

                    <Row>   </Row>
                    <Button color="dark" style={{ marginBottom: '2rem' }} onClick={this.onSubmit}>Register</Button>

                </Card>


            </Container >

        );
    }
}


EditUser.propTypes = {
    user: PropTypes.object.isRequired,
    deleteUser: PropTypes.func.isRequired,
    getDepts: PropTypes.func.isRequired,
    fetchUser: PropTypes.func.isRequired,
    updateUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    user: state.user,
    dept: state.dept
});

export default connect(
    mapStateToProps,
    { deleteUser, getDepts, fetchUser, updateUser }
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