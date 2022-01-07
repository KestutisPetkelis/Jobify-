import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import './App.css';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import { CategoryList } from './pages/CategoryList';
import {Product} from './pages/Product';


function App() {
  const divStyle = {
    width: "100%", 
    height: "100vh",
    // border: "1px solid blue",
    marginTop: "0px",
    marginBottom: "10px",
    marginLeft: "10px",
    padding: "10px",
    backgroundColor: "aliceblue"
   
  };





  return (
    <div className="App" style={divStyle}>
      <BrowserRouter>
      <h4><Link to="/"> Home page </Link></h4> 
        {/* <h4><Link to="/:categoryName"> Category content </Link></h4> */}
        {/* <h4><Link to="/:categoryName/:id"> Product </Link></h4> */}
        <div className='d-flex'>
        
        <Sidebar/>
          <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/:categoryName" element={<CategoryList/>} ></Route>
            <Route path="/:categoryName/:id" element={<Product />} ></Route>
           
          </Routes>
           
        </div>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
