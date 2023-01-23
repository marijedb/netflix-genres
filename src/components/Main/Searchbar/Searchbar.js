import React from "react";
import "./Searchbar.css"

function Searchbar(){
    return(
        <div className="searchbar">
            <input className="searchbar--input" type="search" placeholder="Search by Genre" />
        </div>
    )
}

export default Searchbar