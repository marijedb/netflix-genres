import React, { useEffect, useState } from "react";
import Searchbar from "./Searchbar/Searchbar"
import "./Main.css"
import Genres from "./Genres/Genres";

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
            const dutchFiltered = combined.filter(genre => {
                let temporaryArray = []
                let tempFirstLetter = ""
                for(let i = 0; i < genre.length; i++){
                    if(genre[i].genre !== undefined){
                        if(genre[i].genre.dutch.toLowerCase().includes(searchInput)){
                            tempFirstLetter = genre[i].genre.dutch.slice(0,1)
                            temporaryArray.push(genre[i])
                        }
                    }
                }
                temporaryArray.unshift(tempFirstLetter)
                filtered.push(temporaryArray)
            })
        } else {
            props.genres.forEach(genre => {
                genre.forEach(oneGenre => {
                    if(oneGenre.genre !== undefined){
                        if(oneGenre.genre.english.toLowerCase().includes(searchInput)){
                            filtered.push([oneGenre])
                        }
                    }
                })
            })
        }

        for(let i = 0; i < filtered.length; i++){
            
        }
        console.log("filtered: ", filtered)
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
            <Searchbar language={props.language} changeCurrentInput={(e) => changeCurrentInput(e)} />
            <Genres genres={filteredGenres.length > 0 && searchInput.length > 0 ? filteredGenres : props.genres} language={props.language} />
        </div>
    )
}

export default Main