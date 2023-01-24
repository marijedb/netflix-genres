import React from "react";
import "./Genres.css"

function Genres(){
    return(
        <div className="genres">
            <div className="genres--subcontainer">
                <h4 className="genres--letter">A</h4>
                <p className="genres--genre">Action</p>
                <p className="genres--genre">Adventure</p>
                <p className="genres--genre">Kinderproducties over geloof en spiritualiteit</p>
            </div>
            <div className="genres--subcontainer">
                <h4 className="genres--letter">B</h4>
                <p className="genres--genre">Bandit</p>
            </div>
        </div>
    )
}

export default Genres