import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { useRef } from 'react';
import { useState } from 'react';

import './App.css';
import Header from './components/Header';
import Title from './components/Title';
import MainPage from './pages/MainPage';
import FindJob from './pages/FindJob';
import PostJob from './pages/PostJob';
import JobCard from './pages/JobCard';

import { MyContext } from './contexts/MyContext';


function App() {
  const divStyle = {
    width: "100%", 
    minHeight: "100vh",
    // border: "1px solid blue",
    marginTop: "0px",
    marginBottom: "10px",
    // marginLeft: "10px",
    // padding: "10px",
    // backgroundColor: "aliceblue"
   
  };
  const [allBase, setAllBase] = useState([
    {
      logo: "https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2014/03/company-logo-pinterest.jpg",
      position: "Web designer",
      company: "Pinterest",
      location: "Kaunas",
      jobType: "Freelance",
      category: "Design",
      typeColor: "red",
      time: 1641461585359
    },
    {
      logo: "https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2014/03/company-logo-pinterest.jpg",
      position: "Web developer",
      company: "Okcupid",
      location: "Vilnius",
      jobType: "Full Time",
      category: "Development",
      typeColor: "green",
      time: 1641461799824
    },
    {
      logo: "https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2016/04/company-logo-desk.jpg",
      position: "Web designer",
      company: "Desk",
      location: "Kaunas",
      jobType: "Part Time",
      category: "Design",
      typeColor: "blue",
      time: 1641480654144
    },
    {
      logo: "https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2013/03/company-logo-paypal.jpg",
      position: "Web designer",
      company: "PayPal",
      location: "Klaipėda",
      jobType: "Internship",
      category: "Design",
      typeColor: "grey",
      time: 1641480695298
    },
    {
      logo: "https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2013/03/company-logo-starbucks.jpg",
        position: "Web designer",
      company: "Starbucks",
      location: "Kaunas",
      jobType: "Temporary",
      category: "Design",
      typeColor: "pink",
      time: 1641480747015
    },


  ])


  const inputsPostJob ={
    logo: useRef(),
    position: useRef(),
    company: useRef(),
    location: useRef(),
    jobType: useRef(), 
    category: useRef()
  }
  const inputsMain ={ // inputai is MainPage
    location: useRef(),
    category: useRef()
  }
  const inputsFind ={ // inputai is FindPage
    location: useRef(),
    category: useRef()
  }

  const searchJobs = () =>{ // ieskom supaprastintai
    const loc = inputsMain.location.current.value
    const categ = inputsMain.category.current.value
    const time = new Date()
    console.log ("click", loc, categ, time)
    
  }
  const searchJobs2 = () =>{ // ieskom isplestai
    const loc = inputsFind.location.current.value
    const categ = inputsFind.category.current.value
    const time = new Date()
    console.log ("click2", loc, categ, time)
    
  }

  const saveJob=()=>{         // idedam nauja irasa i duomenu baze
    const newJob={logo: "https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2013/03/company-logo-starbucks.jpg",
      position: inputsPostJob.position.current.value,
      company: inputsPostJob.company.current.value,
      location: inputsPostJob.location.current.value,
      jobType: inputsPostJob.jobType.current.value,
      category: inputsPostJob.category.current.value,
      time: Number(new Date())
    }
  if(inputsPostJob.jobType.current.value==="Freelance") newJob.typeColor = "red"
  if(inputsPostJob.jobType.current.value==="Full Time") newJob.typeColor = "green"
  if(inputsPostJob.jobType.current.value==="Part Time") newJob.typeColor = "blue"
  if(inputsPostJob.jobType.current.value==="Internship") newJob.typeColor = "grey"
  if(inputsPostJob.jobType.current.value==="Temporary") newJob.typeColor = "pink"

  setAllBase([...allBase,newJob]) 


    console.log ("click", newJob, newJob.typeColor)
  }

  return (
    <div className="App" style={divStyle}>
      <Title/>
      <BrowserRouter>
        <MyContext.Provider value={allBase}>
        {/* <Header/> */}
        <div >
        
        
          <Routes>
            <Route path="/" element={<MainPage inputsMain={inputsMain} searchJobs={searchJobs} allbase ={allBase}/>}></Route>
            <Route path="/findjob" element={<FindJob inputsFind={inputsFind} searchJobs2={searchJobs2} allbase ={allBase}/>}></Route>
            <Route path="/postjob" element={<PostJob inputsPostJob={inputsPostJob}saveJob={saveJob}/>} ></Route>
            <Route path="/jobcard/:time" element={<JobCard />} ></Route>           
          </Routes>
           
        </div>
        </MyContext.Provider>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
