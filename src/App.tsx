import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Footer from './components/footer/Footer';

import TerminalFeature from './components/terminal/additionalFeatures/feature';


function App() {
  return (
    <div className="App">
      <Main /> 
      <Footer />
    </div>
  );
}

export default App;
