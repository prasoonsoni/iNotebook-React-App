import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
const host = "http://localhost:5000";


const Signup = (props) => {
  const [credentials, setCredentials] = useState({name:"", email: "", password: "", cpassword:"" });
  const navigate = useNavigate();

  const handleClick = async (event) => {
    event.preventDefault();
    const {name, email, password, cpassword} = credentials;
    console.log(credentials)
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, email, password})
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // save auth token and redirect
      localStorage.setItem('token', json.authtoken);
      // redirect using useNavigate hook
      navigate("/login")
      props.showAlert("Account created successfully", "success")
    } else {
      props.showAlert("Cannot create account", "danger")
    }
  }
  const handleOnChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value })
  }
  return (
    <>
      <div className="container my-3">
        <h2>
          Signup Here to get started...
        </h2>
        <form className='my-3'>
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" value={credentials.name} onChange={handleOnChange} className="form-control" name='name' id="name"  placeholder="Enter name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" value={credentials.email} onChange={handleOnChange} className="form-control" name='email' id="email" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" value={credentials.password} onChange={handleOnChange} className="form-control" name='password' id="password" placeholder="Password" minLength={5} required />
          </div>
          <div className="form-group">
            <label htmlFor="cpassword">Confirm Password</label>
            <input type="password" value={credentials.cpassword} onChange={handleOnChange} className="form-control" name='cpassword' id="cpassword" placeholder="Confirm Password" minLength={5} required />
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleClick}>Signup</button>
        </form>
      </div>
    </>
  );
};

export default Signup;
