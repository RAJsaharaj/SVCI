import React from "react";
import  "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import  "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/Navbar";
import Onethsection from "./components/Onethsection";
import Twosection from "./components/Twosection";
import Icon from "./components/Icon";
import Foursection from "./components/Foursection";
import Fivesection from "./components/Fivesection";
import Footer from "./components/Footer";
import Iconbar from "./components/Iconbar";
// import { Redirect, Route, Switch } from "react-router-dom";

const App = () =>{
  return(
    <>
        <Navbar />
       <Onethsection />
       <Twosection />
       <Icon />
       <Foursection />
       <Fivesection />
       <Footer />
       <Iconbar />
      {/* <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch> */}

    </>
  );
};

export default App;