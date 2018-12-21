import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import Home from './components/Home';



import { Container } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Provider } from 'react-redux';
import store from './store';



class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <Provider store={store}>
        <div className="App" >
          <Container>
    
            <Home></Home>
            {children}
          </Container>

        </div>
      </Provider>
    );
  }
}

export default App;
