import React, { useEffect, useState } from "react";
import Searchbar from "./Searchbar/Searchbar"
import "./Main.css"
import Genres from "./Genres/Genres";

function Main(props){
    const [filteredGenres, setFilteredGenres] = useState([])
    const [searchInput, setSearchInput] = useState("")


    function filterGenres(){
        const filtered = []
        if(props.language === "dutch"){
            props.genres.forEach(genre => {
                genre.forEach(oneGenre => {
                    if(oneGenre.genre !== undefined){
                        if(oneGenre.genre.dutch.toLowerCase().includes(searchInput)){
                            filtered.push(oneGenre)
                        }
                    }
                })
            })
        } else {
            props.genres.forEach(genre => {
                genre.forEach(oneGenre => {
                    if(oneGenre.genre !== undefined){
                        if(oneGenre.genre.english.toLowerCase().includes(searchInput)){
                            filtered.push(oneGenre)
                        }
                    }
                })
            })
        }
        setFilteredGenres(filtered)
    }

    function changeCurrentInput(event){
        console.log(event.target.value)
        if(event.target.value === ""){
            setFilteredGenres([])
            setSearchInput("")
        } else {
            console.log(event.target.value)
            setSearchInput(event.target.value)
        }
    }
    
    useEffect(() => {
        if(searchInput !== ""){
            filterGenres()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchInput])

    console.log("length: ",filteredGenres.length)
    console.log("search:", searchInput.length)
    return(
        <div className="main">
            <Searchbar language={props.language} changeCurrentInput={(e) => changeCurrentInput(e)} />
            <Genres genres={filteredGenres.length > 0 && searchInput.length > 0 ? filteredGenres : props.genres} language={props.language} />
        </div>
    )
}

export default Main