import React from "react"
import { Link } from "react-router-dom";

import "../style/header.css";

function Header(props){

    let color = "white";
    let pos = "absolute";
    if (props.Color === "black") {
        color = "black"
        pos="relative"
    }

    return (
        <div className="navbar-wrapper" style={{position:pos}}>
        <nav className="navbar navbar-expand-lg navbar-light">
            <Link to="/"><a className={"navbar-brand text-"+color} id="logo-text" href="#">FuturEdu</a></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">
                    <i class="fas fa-bars" style={{color:color, fontSize:"28px"}}></i>
                </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#"><Link to="/">Home</Link></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"><Link to="/etech">Future Tech</Link></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"><Link to="/prereqs">Prerequisites</Link></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"><Link to="/skills">Skills</Link></a>
                </li>
            </ul>
            </div>
        </nav>
        </div>
    )
}
export default Header;
