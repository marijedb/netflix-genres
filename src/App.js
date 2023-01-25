
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main';
import logo from './images/logo.png'
import { useEffect, useState } from 'react';

const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const sortedArrayDutch = [["A"],["B"],["C"],["D"],["E"],["F"],["G"],["H"],["I"],
["J"],["K"],["L"],["M"],["N"],["O"],["P"],["Q"],["R"],["S"],["T"],["U"],["V"],["W"],["X"],["Y"],["Z"]]
const sorterdArrayEnglish = [["A"],["B"],["C"],["D"],["E"],["F"],["G"],["H"],["I"],
["J"],["K"],["L"],["M"],["N"],["O"],["P"],["Q"],["R"],["S"],["T"],["U"],["V"],["W"],["X"],["Y"],["Z"]]


function App() {

  
  const [genres, setGenres] = useState([])
  const [language,setLanguage] = useState("dutch")
  
  async function fetchData(){
    const response = await fetch('https://marijedb.github.io/my-apis/netflix/netflix.json')
    const data = await response.json()
    const cleanData = data[0].codes

    makeSorterdArrayDutch(cleanData)
    makeSorterdArrayEnglish(cleanData)

    console.log(sortedArrayDutch)
    
    setGenres(sortedArrayDutch)
  }
  
  function makeSorterdArrayDutch(cleanData){
    for(let i = 0; i < alphabet.length; i++) {
        for(let j = 0; j < cleanData.length; j++){
            if(alphabet[i] === cleanData[j].genre.dutch.slice(0,1)){
              sortedArrayDutch[i].push(cleanData[j])
            }
        }
      }
  }
  function makeSorterdArrayEnglish(cleanData){
    for(let i = 0; i < alphabet.length; i++) {
        for(let j = 0; j < cleanData.length; j++){
            if(alphabet[i] === cleanData[j].genre.english.slice(0,1)){
              sorterdArrayEnglish[i].push(cleanData[j])
            }
        }
      }
  }

  function toggleLanguage(){
    setLanguage(prevLanguage => {
      if(prevLanguage === "dutch"){
        setGenres(sorterdArrayEnglish)
        return "english"
      } else {
        setGenres(sortedArrayDutch)
        return "dutch"
      }
    })
  }

  useEffect(()=> {
    fetchData()
  },[])

  return (
    <div>
      <Navbar logo={logo} language={language} toggleLanguage={() => toggleLanguage()} />
      <Main genres={genres} language={language} />
    </div>
  );
}

export default App;
