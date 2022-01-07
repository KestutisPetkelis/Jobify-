import React from 'react'
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export const CategoryList = () => {
    
    const divStyle = {
        width: "90%", 
        height: "100 vh",
        border: "1px solid blue",
        marginTop: "0px",
        marginBottom: "10px",
        marginLeft: "10px",
        paddingRight: "21px",
        backgroundColor: "lightblue"
       
    };

    const [listItems, setListItems] = useState([])
    const {categoryName} = useParams() //turi sutapti su is 
                    // <Route path="/:categoryName" element={<CategoryList/>} >

    const navigate = useNavigate()       // uzsikraunam navigatoriu per puslapius

    const goToItem = (arg1, arg2) =>{  // pereinam i daiktu kategorijoje sarasa
        console.log("click", arg1, arg2,(`/${arg1}/${arg2}`) )
        navigate(`/${arg1}/${arg2}`)     // kitam puslapyje -> "/kategorijos pavadinimas/daikto Id"
       
    }
       
    useEffect (() =>{                   // pasiimam duomenis is serverio 1 karta
        fetch(`https://fakestoreapi.com/products/category/${categoryName}` )
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setListItems(data)

            })

    },[categoryName]) // kadangi eina "categoryName" kintamojo pasikeitimas
                      // nekeiciant puslapio, tai reikia jo pasikeitimus
                      // stebeti, kitaip FETCH'as suveikis TIK 1 KARTA ISVIS

    return (
        <div style={divStyle}>
            <h3>Products in category "{categoryName}"</h3>
            <div className='d-flex f-wrap'> 
            
            {listItems.map((x, index)=>
                
               <div className="productCard" key={index}> 
                <h4 >{x.title}</h4>
                <img src={x.image} alt='' className='imgCard p-cursor' onClick={()=> goToItem(x.category,x.id)}></img>
                {/* <p>{x.description}</p> */}
                <h5>Price: {x.price} €</h5>
                </div>
            )}
            </div>
            
        </div>
    )
}

export default  CategoryList