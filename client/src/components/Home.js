import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import EditUser from './EditUser';
import Register_1 from './Register_1';
import EditProfile from './EditProfile';
import  DashBoard from './DashBoard';
import Login from './Login';
import { Container } from 'reactstrap';


class Home extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Switch>
                        <Route exact path="/Register" component={Register_1}/>
                        <Route exact path="/EditUser" component={EditUser} />
                        <Route exact path="/" component={Login} />
                        <Route exact path="/Login" component={Login} />
                        <Route exact path="/EditProfile" component={EditProfile}/>
                        <Route exact path="/Dashboard" component={DashBoard}/>
                    </Switch>
                </Container>
            </div>
        );
    }
}

export default Home;
