import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Register from './Register';
import EditUser from './EditUser';
import Register_1 from './Register_1';
import Register1 from './Register1';
import Login from './Login';
import { Container } from 'reactstrap';



class Home extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Switch>
                        <Route exact path="/Register" component={Register}/>
                        <Route exact path="/EditUser" component={EditUser} />
                        <Route exact path="/Login" component={Login} />
                        <Route exact path="/Register1" component={Register1}/>
                        <Route exact path="/Register_1" component={Register_1}/>
                    </Switch>
                </Container>
            </div>
        );
    }
}

export default Home;
