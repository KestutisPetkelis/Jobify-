import React from 'react'

const Title = () => {
    const divStyle = {
        width: "100%", 
        height: "30px",
        // border: "1px solid blue",
        // marginTop: "0px",
        // marginBottom: "10px",
        // paddingRight: "21px",
        padding: "15px",
        backgroundColor: "black",
        color: "white",
        zIndex: "1"
       
      };


    return (
        <div style={divStyle} className='sticky d-flex just-between ali-center'>
            <img className='titlePic' src='https://public-assets.envato-static.com/assets/logos/envato_market-a5ace93f8482e885ae008eb481b9451d379599dfed24868e52b6b2d66f5cf633.svg'></img>
           
            <button className='titleBtn'>Buy now</button>
        </div>
    )
}

export default Title
