import React from "react";
import Searchbar from "./Searchbar/Searchbar"
import "./Main.css"
import Genres from "./Genres/Genres";

function Main(props){
    // console.log(props.genres.codes[0].code)
    return(
        <div className="main">
            {console.log("Im in main!")}
            <Searchbar genres={props.genres} />
            <Genres genres={props.genres} />
        </div>
    )
}

export default Main