import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../src/App.css";
import { FooterContainer } from "./components/Footer";
import Navbar from "./components/Navbar.js";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import SignIn from "./components/Pages/SignIn";
import SignUp from "./components/Pages/SignUp";
import NavbarDashboard from "./components/Navbar-Dashboard";
import { auth } from "./config/Firebase-config";
import DocProfile from "./components/Pages/DocProfile";
import SearchDoctors from "./components/SearchDoctorsResult";
import Sign2 from "./sign2";

function App() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  auth.onAuthStateChanged((user) => {
    if (user) {
      return setIsUserSignedIn(true);
    }

    setIsUserSignedIn(false);
  });

  if (isUserSignedIn === true) {
    return (
      <Router>
        <NavbarDashboard />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/docprofile" component={DocProfile}/>
          <Route path="/about" component={About} />
          <Route path="/contactus" component={Contact} />
          <Route path="/signin" component={Sign2} />
          <Route path="/signup" component={SignUp} />
          <Route path="/searchDoctor" component={SearchDoctors}/> 
          
          <Route />
        </Switch>
        <FooterContainer />
      </Router>
    );
  } else {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/docprofile" component={DocProfile}/>
          <Route path="/about" component={About} />
          <Route path="/contactus" component={Contact} />
          <Route path="/signin" component={Sign2} />
          <Route path="/signup" component={SignUp} />
          <Route path="/searchDoctor" component={SearchDoctors}/> 
          
          <Route />
        </Switch>
        <FooterContainer />
      </Router>
    );
  }
}

export default App;
