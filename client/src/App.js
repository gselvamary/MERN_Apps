import React, { Component } from 'react';
import { Container } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import { Route, Switch, Redirect } from 'react-router-dom'
import Register_1 from './components/Register_1';
import DashBoard from './components/DashBoard';
import Login from './components/Login';
import PropTypes from 'prop-types';






import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import Home from "./components/Home";
import PrivateRoute from "./components/private-route/PrivateRoute";
import MyHome from "./components/MyHome";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./Login";
  }
}



class App extends Component {

  render() {

    return (
      <Provider store={store}>
        <div className="App" >
         
          <Container>

            <Route exact path="/Register" component={Register_1} />
            <Route exact path="/Login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/Dashboard" component={DashBoard} />
              <PrivateRoute exact path="/Home" component={MyHome} />
              <PrivateRoute exact path="/" component={Home} />

            </Switch>

          </Container>

        </div>
      </Provider>
    );
  }
}


export default App;
