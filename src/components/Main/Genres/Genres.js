import React from "react";
import "./Genres.css"
import { nanoid } from 'nanoid'

function Genres(props){

    function getGenreHtml(){
        let genreHtml = ""
        if(props.genres.length > 0){
            genreHtml = props.genres.map(genre => {
                let singleLetter = []

                for(let i = 0; i < genre.length; i++){
                    if(genre.length > 1){
                        if(i !== 0){
                            props.language === "dutch" ? 
                            singleLetter.push(<div 
                                    key={nanoid()} 
                                    className={`genres--genre-container ${genre[i].isFavorite ? "hide" : ""}`}
                                    >
                                    <img id={genre[i].id} 
                                        src={genre[i].isFavorite ? props.favoriteIcon : props.starIcon} 
                                        className="genres--genre--favorite"
                                        onClick={props.toggleFavorite} 
                                        alt="star Icon" 
                                    />
                                    <a href={genre[i].link} 
                                        key={genre[i].code} 
                                        className="genres--genre" 
                                        target="_blank" 
                                        rel="noreferrer">{genre[i].genre.dutch}
                                    </a>
                                    <p className="genre--genre--code">{genre[i].code}</p>
                                </div>) :
                            singleLetter.push(<div 
                                key={nanoid()} 
                                className={`genres--genre-container ${genre[i].isFavorite ? "hide" : ""}`}>
                                <img 
                                    id={genre[i].id} 
                                    src={genre[i].isFavorite ? props.favoriteIcon : props.starIcon} 
                                    className="genres--genre--favorite" 
                                    onClick={props.toggleFavorite} 
                                    alt="star Icon" 
                                />
                                <a 
                                    href={genre[i].link} 
                                    key={genre[i].code} 
                                    className="genres--genre" 
                                    target="_blank" 
                                    rel="noreferrer">{genre[i].genre.english}
                                </a>
                                <p className="genre--genre--code">{genre[i].code}</p>
                                </div>)
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
            {props.language === "dutch" ? props.genres.length > 0 ? getGenreHtml() : <h4 className="genres--loading">Genres aan het laden...</h4>:
            props.genres.length > 0 ? getGenreHtml() : <h4 className="genres--loading">Loading Genres...</h4>}
        </div>
    )
}

export default Genres