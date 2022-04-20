import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
const host = "http://localhost:5000";

const Login = (props) => {
    
    const [credentials, setCredentials] = useState({email:"", password:""});
    const navigate = useNavigate();
    const handleClick = async (event) => {
        event.preventDefault();
        const response = await fetch(`${host}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(credentials)
        });
        const json = await response.json();
        console.log(json);
        if(json.success){
           console.log(json.authtoken)
        } else {
            console.log(json.message)
        }
    }

    const handleOnChange = (event)=>{
        setCredentials({...credentials, [event.target.name]:event.target.value})
    }


    return (
        <>
            <div className="container my-3">
                <h2>
                    Login Here
                </h2>
                <form className='my-3'>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" value={credentials.email} onChange={handleOnChange} className="form-control" name='email' id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Password</label>
                        <input type="password" value={credentials.password} onChange={handleOnChange} className="form-control" name='password' id="password" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleClick}>Login</button>
                </form>
            </div>
        </>
    );
};

export default Login;
