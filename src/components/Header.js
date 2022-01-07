import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

const Header = () => {
    const divStyle = {
        width: "100%", 
        height: "50px",
        border: "1px solid blue",
        marginTop: "0px",
        marginBottom: "10px",
        paddingRight: "21px",
        backgroundColor: "aliceblue"
       
      };






    return (
        <div className='sticky top60 d-flex just-evenly header'>
           
            <div>
                <img src='https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2016/04/classic-logo-new.svg' alt=''/>
            </div>
            <div className='d-flex just-evenly'>
                <h4><Link to="/" className='links'> Main </Link></h4>
                <h4><Link to="/findjob" className='links'> Find a Job </Link></h4>
                <h4><Link to="/postjob" className='links'> Post a Job  </Link></h4>
                <button>Login</button>
            </div>
            
        </div>
    )
}

export default Header
