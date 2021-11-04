import './App.css';

import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/signin'>
            <h1>SIGN IN</h1>
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
