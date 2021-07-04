import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import GetLocation from './geolocation/GetLocation';
import Footer from './components/apps/Footer'
import {
  BrowserRouter as Router
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <GetLocation />
      <Router>
        <OwApp />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
