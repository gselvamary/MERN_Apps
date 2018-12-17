import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Register from './Register';
import EditUser from './EditUser';
import { Container } from 'reactstrap';



class Home extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Switch>
                       
                        <Route exact path="/" component={Register} />
                        <Route exact path="/EditUser" component={EditUser} />
                    </Switch>
                    </Container>
                    </div>
        );
    }
}

export default Home;
