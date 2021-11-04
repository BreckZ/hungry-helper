import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignUp(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const { username, email, password } = formData;
  const { handleSignUp } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className='signup-screen'>
      <div className='helper-text'>
      <h3>ALREADY HAVE AN ACCOUNT WITH US?</h3>
      <Link to='signin'>
        <h4>SIGN IN</h4>
        </Link>
        </div>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSignUp(formData);
      }}>
        <span className="signup-banner">SIGN UP</span>
      <label>
        USERNAME:
        <input
          type='text'
          name='username'
          value={username}
          onChange={handleChange}
        />
      </label>
      <label>
        EMAIL:
          <input
            type='text'
            name='email'
            value={email}
            onChange={handleChange} />
      </label>
      <label>
        PASSWORD:
        <input
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
        />
      </label>
      <br />
      <button>SIGN UP</button>
      </form>
      </div>
  );
}
