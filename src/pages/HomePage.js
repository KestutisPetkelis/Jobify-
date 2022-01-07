import React from 'react'

export const HomePage = () => {
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

    return (
        <div style={divStyle}>
           <h1>Our Shop Home Page</h1> 
        </div>
    )
}

export default HomePage
