import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
const Navbar = () => {
    const location = useLocation();
    useEffect(() => {
        console.log(location.pathname);
    }, []);
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">
                    iNotebook
                </Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className={`nav-item ${location.pathname==="/"?"active":""}`}>
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li className={`nav-item ${location.pathname==="/about"?"active":""}`}>
                            <Link className="nav-link" to="/about">
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
