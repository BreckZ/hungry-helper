import './SignUp.css'
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
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
    <div className="signup-screen">
      <div className="helper-text">
        <h3>HAVE AN ACCOUNT WITH US?</h3>
        <Link className="signup-link" to="signin">
          <h4>SIGN IN <span className="right-chevron">&rsaquo;</span></h4>
        </Link>
      </div>
      <div className="signup-form-wrapper">
        <form
          className="signup-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleSignUp(formData);
          }}
        >
          <span className="signup-banner">SIGN UP</span>
          <label className="signup-label">
            USERNAME:
            <input
              className="signup-input"
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
            />
          </label>
          <label className="signup-label">
            EMAIL:
            <input
              className="signup-input"
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </label>
          <label className="signup-label">
            PASSWORD:
            <input
              className="signup-input"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </label>
          <button className='signup-button'>SIGN UP</button>
        </form>
      </div>
    </div>
  );
}
