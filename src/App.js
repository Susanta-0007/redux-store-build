import React from 'react'
import {BrowserRouter ,Routes,Route} from "react-router-dom"
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Navbar from './Components/Navbar';



const App = () => {
  return (
    <BrowserRouter>
     <Navbar/>
      <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;