import React, { Component } from 'react';
import { Container } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import { Route, Switch } from 'react-router-dom'
import EditUser from './components/EditUser';
import Register_1 from './components/Register_1';
import EditProfile from './components/EditProfile';
import  DashBoard from './components/DashBoard';
import Login from './components/Login';
import AppNavbar from './components/AppNavbar'
import MoreIconlist from './components/MoreIconlist';




class App extends Component {
  render() {
  
    return (
      <Provider store={store}>
        <div className="App" >
        <Container>
                    <Switch>
                        <Route exact path="/Register" component={Register_1}/>
                        <Route exact path="/EditUser" component={EditUser} />
                        <Route exact path="/" component={DashBoard} />
                        <Route exact path="/Login" component={Login} />
                        <Route exact path="/Profile" component={EditProfile}/>
                        <Route exact path="/Dashboard" component={DashBoard}/>
                        <Route exact path="/AppNavbar" component={AppNavbar}/>
                        <Route exact path="/MoreIconlist" component={MoreIconlist}/>
                    </Switch>
                </Container>

        </div>
      </Provider>
    );
  }
}

export default App;
