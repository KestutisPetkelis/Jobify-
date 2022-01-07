import React from 'react'

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Product = () => {
    const divStyle = {
        width: "80%", 
        height: "70%",
        maxHeight: "70%",
        border: "1px solid blue",
        marginTop: "0px",
        marginBottom: "10px",
        marginLeft: "10px",
        padding: "21px",
        backgroundColor: "lightblue"
       
    };
    const {categoryName, id} = useParams()
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)    // tikrinimui ar uzsikrove is serverio
    console.log ("Product puslapis", categoryName, id)

    useEffect (() =>{                   // pasiimam duomenis is serverio 1 karta
        fetch(`https://fakestoreapi.com/products/${id}` )
            .then(res => res.json())
            .then(data => {
                console.log("duomenys",data)
                setItem(data)
                setLoading(false) // pakeiciam reiksme kai pilnai gaunam duomenis is serverio
            })

    },[id])

    // console.log(item.rating.count, item.rating.rate)
    if(loading){                    // tikrinam ar uzsikrove is serverio
        return <p>loading....</p>
    }

    return (
        <div style={divStyle} className='d-flex singleItem'>
            <div className='flex1'>
                <img src={item.image} alt='' className='imgCard2' ></img>
            </div>
            <div className='flex1 singleItem'>
                <h3 >{item.title}</h3>
                
                <p>{item.description}</p>
                <h5>Price: {item.price} €</h5>
                <h5>Count: {item.rating?.count}</h5>
                <h5>Rating: {item.rating?.rate}</h5> 
                <h5>{id}</h5>
            </div>
            
        </div>
    )
}
export default Product