import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Security from "./Pages/Security";
import Nature from "./Pages/Nature";
import Transport from "./Pages/Transport";


export default class App extends Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path = '/' element={<Home/>}/>
          <Route path ='/Security' element={<Security />}/>
          <Route path ='/Nature' element={<Nature />}/>
          <Route path ='/Transport' element={<Transport />}/>
        </Routes>
      </Router>
    );
  }
}
