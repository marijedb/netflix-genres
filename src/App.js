
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main';
import logo from './images/logo.png'
import { useEffect, useState } from 'react';

const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]


function App() {

  
  const [genres, setGenres] = useState([])
  
  async function fetchData(){
    console.log("im in fetchData()")
    const response = await fetch('https://marijedb.github.io/my-apis/netflix/netflix.json')
    const data = await response.json()
    const sortedArray = [["A"],["B"],["C"],["D"],["E"],["F"],["G"],["H"],["I"],
    ["J"],["K"],["L"],["M"],["N"],["O"],["P"],["Q"],["R"],["S"],["T"],["U"],["V"],["W"],["X"],["Y"],["Z"]]
    for(let i = 0; i < alphabet.length; i++) {
        for(let j = 0; j < data.codes.length; j++){
            if(alphabet[i] === data.codes[j].genre.slice(0,1)){
              sortedArray[i].push(data.codes[j])
            }
        }
    }
    setGenres(sortedArray)
  }

  useEffect(()=> {
    console.log("Im in useEffect!")
    fetchData()
  },[])

  return (
    <div>
      {console.log("im in return!")}
      <Navbar logo={logo} />
      <Main genres={genres} />
    </div>
  );
}

export default App;
