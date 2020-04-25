import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import MyForm from './MyForm'
import MyResult from './MyResult'


function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={MyForm} />
        <Route path="/result" component={MyResult} />
      </Router>  
    </div>
  );
}

export default App;
