import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Services from './Components/Services';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


const App = () => {
  return(
    <>
    <Navbar/>
    <Routes>
      <Route exact path="/" Component={Home}/>
      <Route exact path="/contact" Component={Contact}/>
      <Route exact path="/about" Component={About}/>
      <Route exact path="/Services" Component={Services}/>
       {/* below line of code is to navigate to home page if user types anything random in the url */}
       <Route path="*" element={<Navigate to ="/" />}/> 
    </Routes>
    <Footer/>
    </>
  )
}

export default App;
