import React from "react";
import "./Searchbar.css"

function Searchbar(props){
    return(
        <div className="searchbar">
            {props.language === "Nederlands" ? 
            <input className="searchbar--input" type="search" placeholder="Zoek onder Genre" />:
            <input className="searchbar--input" type="search" placeholder="Search by Genre" />}

        </div>
    )
}

export default Searchbar