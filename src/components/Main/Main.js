import React from "react";
import Searchbar from "./Searchbar/Searchbar"
import "./Main.css"
import Genres from "./Genres/Genres";

function Main(){
    return(
        <div className="main">
            <Searchbar />
            <Genres />
        </div>
    )
}

export default Main