import './App.css';
import React, { Fragment} from 'react';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';


import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
const  App = () => (
<Fragment>
   <Router>
      <Navbar/>
      <Routes>
         <section className="container"> 
            <Route path="/" element={<Landing/>} /> 
         </section>
         <section className="container">
            <Route path="/register" element={<Register/>} /> 
         </section>  
         <section className="container"> 
            <Route path="/login" element={<Login/>} />
         </section> 
      </Routes> 
   </Router>     
</Fragment>
 
  

);
 
export default App;
