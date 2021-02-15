import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/pages/Home';
import Services from './Components/pages/Services';
import Products from './Components/pages/Products';
import Signup from './Components/pages/Signup';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Switch>
    <Route path="/" component={Home} exact/>
    <Route path="/services" component={Services} exact/>
    <Route path="/products" component={Products} exact/>  
    <Route path="/sign-up" component={Signup} exact/>
    </Switch>
    </Router>
    </>
  );
}

export default App;
