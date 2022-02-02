import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Navbar = (props) => {
    const location = useLocation();
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('token');
        props.showAlert("Logout successfully", 'success')
        navigate('/login')
        console.log("logout")
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">
                    iNotebook
                </Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    {localStorage.getItem('token') && <ul className="navbar-nav">
                        <li className={`nav-item ${location.pathname === "/" ? "active" : ""}`}>
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li className={`nav-item ${location.pathname === "/about" ? "active" : ""}`}>
                            <Link className="nav-link" to="/about">
                                About
                            </Link>
                        </li>
                    </ul>}
                </div>
                <div className="flex-row-reverse bd-highlight">
                    {!localStorage.getItem('token') ? <div><Link className={`btn btn${location.pathname === "/login" ? "" : "-outline"}-primary mx-1`} to='/login' role="button">Login</Link>
                        <Link className={`btn btn${location.pathname === "/signup" ? "" : "-outline"}-primary mx-1`} to='/signup' role="button">Signup</Link></div>
                        : <Link className="btn btn-danger mx-1" to={''} role="button" style={{ "display": "" }} onClick={logout}><i className="fa-solid fa-arrow-right-from-bracket" ></i>  Logout</Link>}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
