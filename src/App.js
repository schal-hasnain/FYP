import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../src/App.css';
import {FooterContainer} from './components/Footer'
import Navbar from './components/Navbar.js';
import Home from './components/Pages/Home';
import About from './components/Pages/About'
import Contact from './components/Pages/Contact';
import SignIn from './components/Pages/SignIn'
import SignUp from './components/Pages/SignUp'



function App() {
  return (
    
    <Router>
     <Navbar/>
     <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contactus' component={Contact} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
      </Switch>
      <FooterContainer/>
    </Router>
    

  );
}

export default App;
