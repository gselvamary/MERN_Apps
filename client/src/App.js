import React, { Component } from 'react';
import { Container } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import { Route, Switch } from 'react-router-dom'
import EditUser from './components/EditUser';
import Register_1 from './components/Register_1';
import Layout from './components/Layout';
import DashBoard from './components/DashBoard';
import Login from './components/Login';
import AppNavbar from './components/AppNavbar'
import MoreIconlist from './components/MoreIconlist';
//import { Home } from '@material-ui/icons';
import Home from './components/Home'

import AddSession from './components/AddSession'
import AddQuestion from './components/AddQuestion';
import ViewQuestion from './components/ViewQuestion';
import AddFaculty from './components/AddFaculty'


class App extends Component {
  render() {

    return (
      <Provider store={store}>
        <div className="App" >
          <DashBoard >
            <Container>
              <Switch>
                <Route exact path="/Register" component={Register_1} />
                <Route exact path="/EditUser" component={EditUser} />
                <Route exact path="/" component={Home} />
                <Route exact path="/Login" component={Login} />
                <Route exact path="/Layout" component={Layout} />
                <Route exact path="/Dashboard" component={DashBoard} />
                <Route exact path="/AppNavbar" component={AppNavbar} />
                <Route exact path="/MoreIconlist" component={MoreIconlist} />
                <Route exact path="/addsession" component={AddSession} />
                <Route exact path="/addquestion" component={AddQuestion} />
                <Route exact path="/addfaculty" component={AddFaculty} />
                <Route exact path="/update" component={ViewQuestion} />
              </Switch>
            </Container>
          </DashBoard>
        </div>
      </Provider>
    );
  }
}

export default App;
