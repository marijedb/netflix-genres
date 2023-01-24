import React from "react";
import "./Genres.css"
import { nanoid } from 'nanoid'

function Genres(props){
    // console.log("props.genres", props.genres)

    function getGenreHtml(){
        let genreHtml = ""
        if(props.genres.length > 0){
            genreHtml = props.genres.map(genre => {
                let singleLetter = []
                for(let i = 0; i < genre.length; i++){
                    if(genre.length > 1){
                        if(i !== 0){
                            singleLetter.push(<p key={genre[i].code} className="genres--genre">{genre[i].genre}</p>)
                        } else {
                            singleLetter.push(<h4 key={genre[i]} className="genres--letter">{genre[i]}</h4>)
                        }
                    }
                }
                if(singleLetter.length > 0){
                    return <div key={nanoid()} className="genres--subcontainer">{singleLetter}</div>
                } else {
                    return null
                }
            })
            return genreHtml
        } else {
            return <h4 className="genres--loading">Loading genres...</h4>
        }
    }

    return(
        <div className="genres">
            {props.genres.length > 0 ? getGenreHtml() : <h4 className="genres--loading">Loading genres...</h4>}
        </div>
    )
}

export default Genres