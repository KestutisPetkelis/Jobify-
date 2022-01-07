import React from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useContext } from 'react';
import { MyContext } from '../contexts/MyContext';

import { FaFacebookF } from "react-icons/fa";
import { IoPricetag } from "react-icons/io5";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialGooglePlus } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaEnvelope } from "react-icons/fa";


const JobCard = () => {

    const divStyle = {
        width: "100%", 
        height: "160px",
        // border: "1px solid blue",
        marginTop: "0px",
        // marginBottom: "10px",
        // marginLeft: "10px",
       padding: "40px",
        
        backgroundColor: "rgb(224, 244, 244)"
       
      };

    const {time}=useParams()
    const contextItem = useContext(MyContext)
    
    const thisJob = contextItem.find(x => x.time===Number(time))
    const relatedJobs = contextItem.filter(x => x.category===thisJob.category)
    console.log(time, contextItem, thisJob, relatedJobs)
    
    const navigate = useNavigate()
    const gotoJobCard=(arg)=>{
        navigate(`/jobcard/${arg}`)
        window.scrollTo({top:0,behavior:'smooth'}) // grazina i puslapio virsu
        
    }
    
    
    // Data is taimestamp'o //
    const getTime=(arg)=>{
        const date = new Date(arg)
        const month = date.getMonth()
        const day = date.getDate()
        const year = date.getFullYear()
        return (`${year}-${month+1}-${day}`)
    }




    return (
        
        <div >
            <Header/>
            <div style={divStyle} className='oneJob'>
                <h1>{thisJob.position}</h1>
                <span className='jobType' style={{backgroundColor: `${thisJob.typeColor}`}}>{thisJob.jobType}</span>
                <span>{thisJob.location}</span>
                <span>Posted {getTime(thisJob.time)}</span>
                <span>{thisJob.category}</span>
            </div>
            <div className='d-flex ali-start just-evenly jobOne'>
                <img className='imgJob' src={thisJob.logo} alt=''></img>
                <div className='jobOneSmall'>
                    <h2>Job categories</h2>
                    <h4 className='c-pointer'> <IoPricetag/> {thisJob.category}</h4>
                    <h2>Share Posting</h2>
                    <h3> <TiSocialTwitter className='c-pointer'/><TiSocialFacebook className='c-pointer'/> <TiSocialGooglePlus className='c-pointer'/> <TiSocialLinkedin className='c-pointer'/> <FaEnvelope className='c-pointer'/></h3>
                </div>
                <div className='jobOneSmall '>
                    <h2>Company Social Profiles</h2>
                    <h4 className='c-pointer'> <FaFacebookF/> Facebook</h4>
                    <button className='btnApplyJob'> APPLY FOR JOB</button><br></br>
                    <button className='btnListJob' style={{margin: " 10px 0"}}> LOGIN TO BOOKMARK THIS JOB</button>
                </div>

            </div>
            <div className='overview'>
                <h2>Overview</h2>
                <img src='https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2014/03/hero-job-image.jpg'></img>
            </div>
                <h2>Related Jobs</h2>
                <div className='jobContainer'>
                        
                        {relatedJobs.map((x, index)=>
                        <div className='job d-flex' onClick={()=>gotoJobCard(Number(x.time))} key={index}>
                            <div className='flex1'>
                                <img src={x.logo} alt=''></img>
                            </div>
                            <div className='flex3 d-flex column just-center'>
                                <p className=' p-position'>{x.position}</p>
                                <p className=' p-position'>{x.category}</p>
                            </div>
                            <div className='flex2 d-flex ali-center just-center'>
                                <p>{x.location}</p>
                            </div>
                            <div className='flex2 d-flex ali-center just-center p-type'>
                                <p style={{backgroundColor: `${x.typeColor}`}}>{x.jobType}</p>
                            </div>
                            
                        </div>    
                        )}
                        
                    </div>


            
        </div>
    )
}

export default JobCard
