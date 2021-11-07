import "./SignIn.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function SignIn(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="signin-screen">
      <div className="helper-text">
        <h3>DON'T HAVE AN ACCOUNT?</h3>
        <Link className="signup-link" to="/signup">
          <h4>SIGN UP <span className="right-chevron">&rsaquo;</span></h4>
        </Link>
      </div>

      <div className="signin-form-wrapper">
        <form
          className="signin-form"
          onSubmit={(e) => {
            e.preventDefault();
            props.handleSignIn(formData);
          }}
        >
          <span className="signin-banner">SIGN IN</span>
          <label className="signin-label">
            USERNAME:
            <input
              className="signin-input"
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
            />
          </label>
          <label className="signin-label">
            PASSWORD:
            <input
              className="signin-input"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </label>
          <button className="signin-button">SIGN IN</button>
        </form>
      </div>

    </div>
  );
}

export default SignIn;
