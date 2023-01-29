import React, { useEffect, useState } from "react";
import Searchbar from "./Searchbar/Searchbar"
import Favorites from "./Favorites/Favorites";
import star from "../../images/star.png"
import starYellow from "../../images/star-yellow.png"
import alarm from "../../images/alarm.png"
import "./Main.css"
import Genres from "./Genres/Genres";
import Reset from "./Reset/Reset";

function Main(props){
    const [filteredGenres, setFilteredGenres] = useState([])
    const [searchInput, setSearchInput] = useState("")


    function filterGenres(){
        let filtered = []
        const combined = []
        props.genres.forEach(genre => {
            if (genre.length > 1){
                combined.push(genre)
            }
        })
        if(props.language === "dutch"){ 
            combined.forEach(genre => {
                let temporaryArray = []
                let firstLetter = ""
                for(let i = 0; i < genre.length; i++){
                    if(genre[i].genre !== undefined){
                        if(genre[i].genre.dutch.toLowerCase().includes(searchInput.toLowerCase())){
                            firstLetter = genre[i].genre.dutch.slice(0,1)
                            temporaryArray.push(genre[i])
                        }
                    }
                }
                temporaryArray.unshift(firstLetter)
                filtered.push(temporaryArray)
            })
        } else {
            combined.forEach(genre => {
                let temporaryArray = []
                let firstLetter = ""
                for(let i = 0; i < genre.length; i++){
                    if(genre[i].genre !== undefined){
                        if(genre[i].genre.english.toLowerCase().includes(searchInput.toLowerCase())){
                            firstLetter = genre[i].genre.english.slice(0,1)
                            temporaryArray.push(genre[i])
                        }
                    }
                }
                temporaryArray.unshift(firstLetter)
                filtered.push(temporaryArray)
            })
        }

        for(let i = 0; i < filtered.length; i++){
            
        }
        setFilteredGenres(filtered)
    }

    function changeCurrentInput(event){
        if(event.target.value === ""){
            setFilteredGenres([])
            setSearchInput("")
        } else {
            setSearchInput(event.target.value)
        }
    }
    
    useEffect(() => {
        if(searchInput !== ""){
            filterGenres()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchInput])


    return(
        <div className="main">
            <Searchbar 
                language={props.language} 
                changeCurrentInput={(e) => changeCurrentInput(e)} 
            />
            <Reset 
                language={props.language}
                resetPage={props.resetPage}
                alarmIcon={alarm}
            />
            <Favorites 
                genres={filteredGenres.length > 0 && searchInput.length > 0 ? filteredGenres : props.genres}
                favoriteIcon={starYellow}
                toggleFavorite={props.toggleFavorite}
                language={props.language}
            />
            <Genres 
                genres={filteredGenres.length > 0 && searchInput.length > 0 ? filteredGenres : props.genres} 
                language={props.language} 
                starIcon={star}
                favoriteIcon={starYellow}
                toggleFavorite={props.toggleFavorite}
            />
        </div>
    )
}

export default Main