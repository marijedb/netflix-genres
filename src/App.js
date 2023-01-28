
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

  
  const [genres, setGenres] = useState(() => JSON.parse(localStorage.getItem("genres")) || [])
  const [language,setLanguage] = useState("english")
  
  async function fetchData(){
    const response = await fetch('https://marijedb.github.io/my-apis/netflix/netflix.json')
    const data = await response.json()
    const cleanData = data[0].codes

    makeSortedArrayDutch(cleanData)
    makeSortedArrayEnglish(cleanData)
    
    setGenres(sortedArrayEnglish)
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
        setGenres(sortedArrayEnglish)
        return "english"
      } else {
        setGenres(sortedArrayDutch)
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

    if(language === "dutch"){
      setGenres(sortedArrayDutch)
    } else {
      setGenres(sortedArrayEnglish)
    }

    // setGenres(prevGenres => prevGenres.map(genre => {
    //   let newGenres = []
    //   for(let i = 0; i < genre.length; i++){
    //       if(genre[i].id === event.target.id){
    //         newGenres.push({...genre[i], isFavorite: !genre[i].isFavorite})
    //       } else {
    //         newGenres.push(genre[i])
    //       }
    // }
    // return newGenres
    // }));
  }

  useEffect(() => {
    localStorage.setItem('genres', JSON.stringify(genres))
  }, [genres])

  useEffect(()=> {
    if(genres.length === 0){
      fetchData()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div>
      <Navbar logo={logo} language={language} toggleLanguage={() => toggleLanguage()} />
      <Main genres={genres} language={language} toggleFavorite={(e => toggleFavorite(e))} />
    </div>
  );
}

export default App;
