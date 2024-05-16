// import React from 'react'

import { Triangle } from "react-loader-spinner";
// import logo from "../../assets/images/DWC-Logo.png"

const IsLoading = () => {

  return (
    <div style={{width:"100%", height:"100vh", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>

        {/* <i style={{fontSize:"15px", color:"#0a4757", marginBottom:"40px"}}>SWYS</i> */}

        {/* <img src={logo} className="w-[50px] mb-[20px]" alt="Logo" /> */}

        <Triangle
            visible={true}
            height="80"
            width="80"
            color="#eedfb0"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            />

        <i style={{fontSize:"17px", color:"#eedfb0", marginTop:"30px"}}>Loading...</i>

    </div>
  )
}

export default IsLoading