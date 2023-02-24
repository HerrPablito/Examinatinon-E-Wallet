import './App.css'
import Home from './view/Home/Home'
import AddCard from './view/Addcard/Addcard'
import Card from './Components/Card/Card';
import { Navigate } from 'react-router-dom';



function App() {



  return (
    <div className="App">
      < Home />
      < AddCard />
      
 
    </div>
  )
}

export default App
