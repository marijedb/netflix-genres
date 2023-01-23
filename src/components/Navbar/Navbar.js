import React from "react";
// import logo from "../../images/logo.png;"
import "./Navbar.css"

function Navbar(props){
    return(
        <div className="navbar">
            <img className="navbar--logo" src={props.logo} alt="logo" />
            <div>
                <h3 className="navbar--title">Netflix Genres</h3>
                <p className="navbar--subtitle">Browse Netflix by Genre</p>
            </div>
            <div className="navbar--toggle">
                <p className="navbar--nederlands">Nederlands</p>
                <div className="navbar--toggler">
                    <div className="navbar--toggler--switch"></div>
                </div>
                <p className="navbar--english">English</p>
            </div>
        </div>
    )
}

export default Navbar