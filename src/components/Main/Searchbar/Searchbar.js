import React from "react";
import "./Searchbar.css"

function Searchbar(props){
    return(
        <div className="searchbar">
            {props.language === "dutch" ? 
            <input className="searchbar--input" type="search" placeholder="Zoek onder Genre" onChange={props.changeCurrentInput} />:
            <input className="searchbar--input" type="search" placeholder="Search by Genre" onChange={props.changeCurrentInput} />}

        </div>
    )
}

export default Searchbar