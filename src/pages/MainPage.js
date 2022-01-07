import React from 'react'
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

const MainPage = ({searchJobs, inputsMain, allbase}) => {
    const divStyle = {
        width: "100%", 
        height: "100vh",
        border: "1px solid blue",
        marginTop: "0px",
        marginBottom: "10px",
        marginLeft: "10px",
        padding: "10px",
        backgroundColor: "aliceblue"
       
    };
    const navigate = useNavigate()
    const gotoJobCard=(arg)=>{
        navigate(`/jobcard/${arg}`)
    }


    return (
        <div>
            <Header/>
            {/* <div class="parallax"></div> */}
            <div className="parallax">
                <div className='mainSearch d-flex column ali-center just-center'>
                    <h1>The Easiest Way to Get Your New Job </h1>
                    <h3>Find jobs, create trackable resumes and enrich your applications.</h3>
                        <div className='inputDiv d-flex just-evenly'>
                            <input type="text" placeholder="Keywords"></input>
                            <select  ref={inputsMain.location}> 
                                <option value="All regions">All regions</option>
                                <option value="Vilnius">Vilnius</option>
                                <option value="Kaunas">Kaunas</option>
                                <option value="Klaipėda">Klaipėda</option>
                                <option value="Šiauliai">Šiauliai</option>
                                <option value="Panevėžys">Panevėžys</option>
                                <option value="Alytus">Alytus</option>
                                <option value="Marijampolė">Marijamplė</option>
                                <option value="Telšiai">Telšiai</option>
                            </select>


                            <select defaultValue="" ref={inputsMain.category}>
                                <option disabled={true} value="">Choose a category...</option>
                                <option value="Design">Design</option>
                                <option value="Development">Development</option>
                                <option value="Marketing">Marketing</option>
                            </select>
                            <button onClick={()=>searchJobs()}>SEARCH JOBS</button>
                        </div>
                </div> 
                <div className='mainB'>
                    <h1>Companies We've Helped</h1>
                    <h4>Some of the companies we've helped recruit excellent applicants over the years.</h4>
                    <img src='https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2013/07/optimizely-logo-final.svg' alt=''></img>
                    <img src='https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2013/07/desk-logo-final.svg' alt=''></img>
                    <img srcSet='https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2013/07/dribbble-logo-final.svg' alt=''></img>
                    <img srcSet='https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2013/07/disqus-logo-final.svg' alt=''></img>
                    <img srcSet='https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2013/07/dolby-logo-final.svg' alt=''></img>
                </div>
                <div className='mainC d-flex '>
                    <div className='flex1 '></div>
                    <div className='flex1 '>
                        <h1>Make Recruiting Your Competitive </h1>
                        <h1>Advantage</h1>
                        <h4>Talent is a top priority for all startup founders and executives</h4>
                        <h4>Jobify offers a way to completely optimize your entire recruiting</h4>
                        <h4>process. Find better candidates, conduct more focused interviews, </h4>
                        <h4>and make data-driven hiring decisions.</h4>
                        <button>GET STARTED</button>

                    </div>
                </div>
            </div>
            {/* <div class="parallax2"></div> */}
            <div className="parallax2">
                <div className='mainD'>
                    <h1>Hundreds of Jobs From All Over the Globe</h1>
                    <div className='jobContainer'>
                        
                        {allbase.map((x, index)=>
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
                    <button className='btnListJob'>LOAD MORE LISTINGS</button>
                </div>
                <div className='mainC d-flex '>
                    
                    <div className='flex2 ml-150'>
                        <h1>Join Thousands of </h1>
                        <h1>Companies That Rely on</h1>
                        <h1>Jobify</h1>
                        <h4>Jobify offers a way to completely optimize your entire</h4>
                        <h4>recruiting process. Find better candidates, conduct</h4>
                        <h4>more focused interviews, and make data-driven hiring </h4>
                        <h4>decisions.</h4>
                        <button >GET STARTED</button>

                    </div>
                    <div className='flex1 '></div>
                </div>
                <div className='mainB'>
                    <h1>Jobify Site Stats</h1>
                    <h4>Here we list our site stats and how many people we’ve helped find a job and companies have found recruits. It's a pretty</h4>
                    <h4>awesome stats area!</h4>
                    <div className='d-flex'>
                        <div className='flex1'>
                           <h1>20</h1>
                           <h3>Jobs Posted</h3>
                        </div>
                        <div className='flex1'>
                            <h1>0</h1>
                            <h3>Jobs Filled</h3>
                        </div>
                        <div className='flex1'>
                            <h1>20</h1>
                            <h3>Companies</h3>
                        </div>
                        <div className='flex1'>
                            <h1>5299</h1>
                            <h3>Members</h3>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default MainPage
