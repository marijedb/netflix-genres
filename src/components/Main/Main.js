import React from "react";
import Searchbar from "./Searchbar/Searchbar"
import "./Main.css"
import Genres from "./Genres/Genres";

function Main(props){
    return(
        <div className="main">
            {console.log("Im in main!")}
            <Searchbar genres={props.genres} language={props.language} />
            <Genres genres={props.genres} language={props.language} />
        </div>
    )
}

export default Main