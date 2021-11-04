import './SignIn.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function SignIn() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const { username, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form>
      <h2>SIGN IN</h2>
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
        PASSWORD:
      <input
        type='password'
        name='password'
        value={password}
        onChange={handleChange}
      />
      </label>
      <Link>SIGN IN</Link>
      <button>SIGN IN</button>
    </form>
  )
}

export default SignIn
