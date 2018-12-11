import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import Register from './components/Register';
import { Container } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Provider } from 'react-redux';
import store from './store';



class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App" > 
     <Container>
       <AppNavbar />
       <Register />
     </Container>

      </div>
      </Provider>
    );
  }
}

export default App;
