import React from "react";
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
                <p className="navbar--dutch">NL</p>
                <div className="navbar--toggler" onClick={props.toggleLanguage}>

                    {props.language === "dutch" ? 
                    <div className="navbar--toggler--switch dutch"></div> : 
                    <div className="navbar--toggler--switch english"></div>
                    }

                </div>
                <p className="navbar--english">ENG</p>
            </div>
        </div>
    )
}

export default Navbar