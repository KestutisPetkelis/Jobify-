import React from 'react'
import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const divStyle = {
        width: "200px",
        minWidth: "200px", 
        height: "600px",
        border: "1px solid blue",
        marginTop: "0px",
        marginBottom: "10px",
        marginLeft: "10px",
        paddingRight: "10px",
        backgroundColor: "lightgreen"
       
    };

    const navigate = useNavigate()          // uzsikraunam navigatoriu per puslapius
    const [categories, setCategories] = useState([])    // masyvas visu kategoriju pavadinimams

    const goToCategoryList = (arg) =>{  // pereinam i daiktu kategorijoje sarasa
        navigate(`/${arg}`)             // kitam puslapyje -> "/kategorijos pavadinimas"
    }

    useEffect (() =>{                   // pasiimam duomenis is serverio 1 karta
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCategories(data)

            })

    },[])

    return (
        <div style={divStyle}> 
            <h3>Category of products</h3>
            {categories.map((x, index)=>
                <div className="category bg-rose" key={index} onClick={()=> goToCategoryList(x)}>  {x[0].toUpperCase()+x.slice(1,x.length)} </div>
            )}
        </div>
    )
}

export default Sidebar
