import React from "react"
import { Link } from "react-router-dom";

function Header(){
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">FuturEdu</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#"><Link to="/">Home</Link></a>
                </li>
                <li className="nav-item  active">
                    <a className="nav-link" href="#"><Link to="/etech">Future Tech</Link></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#"><Link to="/prereqs">Prerequisites</Link></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#"><Link to="/skills">Skills</Link></a>
                </li>
            </ul>
            </div>
        </nav>
        </div>
    )
}
export default Header;
