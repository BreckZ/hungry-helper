import './App.css';

import { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'

import Layout from './components/Layout/Layout.jsx'



function App() {
  return (
    <div className="App">
      <Layout>
      <Switch>

      </Switch>
      </Layout>
      
    </div>
  );
}

export default App;
