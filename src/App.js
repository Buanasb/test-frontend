import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Index } from '../src/screen/Index';

function App() {
  return (
    <Router>
      <Route path='/' component={Index}></Route>
    </Router>
  );
}

export default App;
