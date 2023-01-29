
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main';
import logo from './images/logo.png'
import { useEffect, useState } from 'react';

const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let sortedArrayDutch = [["A"],["B"],["C"],["D"],["E"],["F"],["G"],["H"],["I"],
["J"],["K"],["L"],["M"],["N"],["O"],["P"],["Q"],["R"],["S"],["T"],["U"],["V"],["W"],["X"],["Y"],["Z"]]
let sortedArrayEnglish = [["A"],["B"],["C"],["D"],["E"],["F"],["G"],["H"],["I"],
["J"],["K"],["L"],["M"],["N"],["O"],["P"],["Q"],["R"],["S"],["T"],["U"],["V"],["W"],["X"],["Y"],["Z"]]


function App() {

  
  const [genresDutch, setGenresDutch] = useState(() => JSON.parse(localStorage.getItem("genresDutch")) || [])
  const [genresEnglish, setGenresEnglish] = useState(() => JSON.parse(localStorage.getItem('genresEnglish')) || [])
  const [endedLanguage, setEndedLanguage] = useState(() => JSON.parse(localStorage.getItem("endedLanguage")) || "english")
  const [language,setLanguage] = useState(endedLanguage)
  
  async function fetchData(){
    const response = await fetch('https://marijedb.github.io/my-apis/netflix/netflix.json')
    const data = await response.json()
    const cleanData = data[0].codes

    makeSortedArrayDutch(cleanData)
    makeSortedArrayEnglish(cleanData)
    
    setGenresEnglish(sortedArrayEnglish)
    setGenresDutch(sortedArrayDutch)
  }
  
  function makeSortedArrayDutch(cleanData){
    for(let i = 0; i < alphabet.length; i++) {
        for(let j = 0; j < cleanData.length; j++){
            if(alphabet[i] === cleanData[j].genre.dutch.slice(0,1)){
              sortedArrayDutch[i].push(cleanData[j])
            }
        }
      }
  }
  function makeSortedArrayEnglish(cleanData){
    for(let i = 0; i < alphabet.length; i++) {
        for(let j = 0; j < cleanData.length; j++){
            if(alphabet[i] === cleanData[j].genre.english.slice(0,1)){
              sortedArrayEnglish[i].push(cleanData[j])
            }
        }
      }
  }

  function toggleLanguage(){
    setLanguage(prevLanguage => {
      if(prevLanguage === "dutch"){
        setEndedLanguage("english")
        return "english"
      } else {
        setEndedLanguage("dutch")
        return "dutch"
      }
    })
  }

  function toggleFavorite(event){
    sortedArrayDutch = sortedArrayDutch.map(genre => {
      let newGenres = []
      for(let i = 0; i < genre.length; i++){
           if(genre[i].id === event.target.id){
          newGenres.push({...genre[i], isFavorite: !genre[i].isFavorite})
        } else {
          newGenres.push(genre[i])
        }
      }
      return newGenres
    })
    
    sortedArrayEnglish = sortedArrayEnglish.map(genre => {
      let newGenres = []
      for(let i = 0; i < genre.length; i++){
        if(genre[i].id === event.target.id){
          newGenres.push({...genre[i], isFavorite: !genre[i].isFavorite})
        } else {
          newGenres.push(genre[i])
        }
      }
      return newGenres
    })

    setGenresDutch(sortedArrayDutch)
    setGenresEnglish(sortedArrayEnglish)
  }

  useEffect(() => {
    localStorage.setItem('genresDutch', JSON.stringify(genresDutch))
  }, [genresDutch])

  useEffect(() => {
    localStorage.setItem('genresEnglish', JSON.stringify(genresEnglish))
  }, [genresEnglish])

  useEffect(() => {
    localStorage.setItem('endedLanguage', JSON.stringify(endedLanguage))
  }, [endedLanguage])


  useEffect(()=> {
    if(genresDutch.length !== 0) {
      sortedArrayDutch = genresDutch
      sortedArrayEnglish = genresEnglish
    }
    if(endedLanguage === "english"){
      if(genresEnglish.length === 0){
        fetchData()
      } 
    } else {
      if(genresDutch.length === 0){
        fetchData()
      } 
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div>
      <Navbar logo={logo} language={language} toggleLanguage={() => toggleLanguage()} />
      <Main genres={endedLanguage === "dutch" ? genresDutch : genresEnglish} language={language} toggleFavorite={(e => toggleFavorite(e))} />
    </div>
  );
}

export default App;
