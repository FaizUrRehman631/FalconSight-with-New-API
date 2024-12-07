import React from 'react'
import loading from "./loading.gif"

const Spiner=()=> {
    return (
      <div className='text-center'>
         <img className='my-3' src={loading} alt="loading" style={{width: "60px", height:"60px"}}/>
      </div>
    )
}

export default Spiner
