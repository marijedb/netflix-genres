
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main';
import logo from './images/logo.png'

function App() {

  // async function fetchData(){
  //   const response = await fetch('https://marijedb.github.io/my-apis/netflix/netflix.json')
  //   const data = await response.json()
  //   console.log(data)
  // }
  
  // fetchData()

  return (
    <div>
      <Navbar logo={logo} />
      <Main />
    </div>
  );
}

export default App;
