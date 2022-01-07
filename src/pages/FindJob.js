import React from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';




const FindJob = ({inputsFind, searchJobs2, allbase}) => {
    const navigate = useNavigate()
    const gotoJobCard=(arg)=>{
        navigate(`/jobcard/${arg}`)
    }


    return (
        <div>
            <Header/>
            <div className='map'>
            
            </div>
            
            <div className='inputDiv2 d-flex just-evenly'>
                <input type="text" placeholder="Keywords"></input>
                <select  ref={inputsFind.location}> 
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


                <select defaultValue="" ref={inputsFind.category}>
                    <option disabled={true} value="">Choose a category...</option>
                    <option value="Design">Design</option>
                    <option value="Development">Development</option>
                    <option value="Marketing">Marketing</option>
                </select>
                <button onClick={()=>searchJobs2()}>SEARCH</button>
            </div>
            <div className='d-flex just-start checkDiv'>
                <div><input type="checkbox"></input><label>FREELANCE</label></div>
                <div><input type="checkbox"></input><label>FULL TIME</label></div>
                <div><input type="checkbox"></input><label>INTERNSHIP</label></div>
                <div><input type="checkbox"></input><label>PART TIME</label></div>
                <div><input type="checkbox"></input><label>TEMPORARY</label></div>
            </div>
            <div className='jobContainer'>
                <div>
                    <div className='countRecords'>Search completed. Found {allbase.length} matching records.</div>
                </div>       
                {allbase.map((x, index)=>
                <div className='job d-flex' onClick={()=>gotoJobCard(x.time)} key={index}>
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

export default FindJob
