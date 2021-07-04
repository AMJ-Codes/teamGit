import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import GetLocation from './geolocation/GetLocation';
import Footer from './components/apps/Footer';
import Header from './components/apps/Header';
import Home from './components/apps/Home';

import {
  BrowserRouter as Router
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Home />
      </Router>
      <GetLocation />
      <Footer />
    </div>
  );
}

export default App;