import React from 'react'
// import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Login from './Login'
import Call from './Call'
import Order from './Order'

function App() {
  return (
    
    <Router>
      <div className="app">
        
        <Routes>
            <Route path="/" element={[<Header />, <Home />]} /> 
            <Route path="/checkout" element={[<Header/>,<Checkout/> ]}/>
            <Route path="/login" element={<Login/>}/>
            <Route path='/Call' element={<Call/>}/>
            <Route path='/Order' element={<Order/>}/>

        </Routes>
      </div>
    </Router> 

  );
}

export default App;
