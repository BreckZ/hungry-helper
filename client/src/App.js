import './App.css';

import { useState} from 'react'
import { Switch, Route, useHistory } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import SignIn from './screens/SignIn/SignIn';
import SignUp from './screens/SignUp/SignUp';

import { loginUser, registerUser, removeToken, verifyUser } from './services/auth'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const history = useHistory();

  const handleSignIn = async (formData) => {
    const userData = await loginUser(formData)
    setCurrentUser(userData)
    history.push('/');
  }

  const handleSignUp = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push('/');
  };

  const handleSignOut = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  };

  return (
    <div className="App">
      <Layout currentUser={currentUser} handleSignOut={handleSignOut}>
        <Switch>

          <Route path='/signin'>
            <SignIn handleSignIn={handleSignIn}/>
          </Route>

          <Route path='/signup'>
            <SignUp handleSignUp={handleSignUp}/>
          </Route>

        </Switch>
      </Layout>
    </div>
  );
}

export default App;
