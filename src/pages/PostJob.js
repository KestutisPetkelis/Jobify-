import React from 'react'
import Header from '../components/Header';

const PostJob = ({saveJob, inputsPostJob}) => {
    return (
        <div>
            <Header/>
            <div className='d-flex column postDiv'>
                <div>
                    <label>HAVE AN ACCOUNT?</label>
                    <div  className='d-flex just-between ali-center signDiv'>
                        <span>If you don't have an account you can create one below by entering your email address/username. </span>
                        <button className='btnsmall'>SIGN IN</button>
                    </div>
                </div>
                <div>
                    <label>YOUR EMAIL</label><br></br>
                    <input type="text" placeholder='you@yourdomain.com'></input>
                </div>
                <div>
                    <label>PASSWORD</label><br></br>
                    <input type="text"></input><br></br>
                    <span>Passwords must be at least 8 characters long.</span>
                </div>
                <div>
                    <label>VERIFY PASSWORD</label><br></br>
                    <input type="text"></input>
                </div>
                <div>
                    <label>COMPANY</label><br></br>
                    <input type="text" ref={inputsPostJob.company}></input>
                </div>
                <div>
                    <label>JOB TITLE</label><br></br>
                    <input type="text" ref={inputsPostJob.position}></input>
                </div>
                <div>
                    <label>LOCATION (OPTIONAL)</label><br></br>
                    <input type="text" placeholder='e.g. "London"'></input>
                    <span>Leave this blank if the location is not important</span>
                </div>
                <div>
                    <label>APPLICATION EMAIL/URL</label><br></br>
                    <input type="text" placeholder='Enter an email address or website URL'></input>
                </div>
                <div>
                    <label>JOB REGION</label><br></br>
                    <select  ref={inputsPostJob.location} defaultValue="">
                        <option disabled={true} value="">Choose a region...</option>
                        <option value="Vilnius">Vilnius</option>
                        <option value="Kaunas">Kaunas</option>
                        <option value="Klaipėda">Klaipėda</option>
                        <option value="Šiauliai">Šiauliai</option>
                        <option value="Panevėžys">Panevėžys</option>
                        <option value="Alytus">Alytus</option>
                        <option value="Marijampolė">Marijampolė</option>
                        <option value="Telšiai">Telšiai</option>
                    </select>
                    
                </div>
                <div>
                    <label>JOB TYPE</label><br></br>
                    <select ref={inputsPostJob.jobType}>
                        <option value="Freelance">Freelance</option>
                        <option value="Full Time">Full Time</option>
                        <option value="Internship">Internship</option>
                        <option value="Part Time">Part Time</option>
                        <option value="Temporary">Temporary</option>
                    </select>
                    
                </div>
                <div>
                    <label>JOB CATEGORY</label><br></br>
                    <select defaultValue="" ref={inputsPostJob.category}>
                        <option disabled={true} value="">Choose a category...</option>
                        <option value="Design">Design</option>
                        <option value="Development">Development</option>
                        <option value="Marketing">Marketing</option>
                    </select>
                    
                </div>
                <div>
                    <label>FEATURED IMAGE(OPTIONAL)</label><br></br>
                    <button className='btn'>CHOOSE IMAGE</button>
                    <h5>Used for the Job Spotlight display </h5>
                </div>
                <div>
                    <label>DESCRIPTION</label><br></br>
                    <div className='editmenu'> Edit Menu</div>
                    <textarea rows="10" ></textarea>
                </div>
                <div>
                    <h3>Company Details</h3>
                    <label>LOGO(OPTIONAL)</label><br></br>
                    <button className='btn'>CHOOSE IMAGE</button>
                    <h5>Maximum file size: 2MB. </h5>
                </div>
                <div>
                    <label>DESCRIPTION</label><br></br>
                    <div className='editmenu'>Edit Menu</div>
                    <textarea rows="10" ></textarea>
                </div>
                <div>
                    <label>FACEBOOK USERNAME (OPTIONAL)</label><br></br>
                    <input type="text"placeholder='yourcompany'></input>
                </div>
                <div>
                    <label>LINKEDIN USERNAME (OPTIONAL)</label><br></br>
                    <input type="text" placeholder='yourcompany'></input>
                </div>
                <div>
                    <button className='btn'>PREVIEW</button>
                    <button className='btn' onClick={()=>saveJob()}>SAVE DRAFT</button>
                </div>
            </div>
        </div>
    )
}

export default PostJob
