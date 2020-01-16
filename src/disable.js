import React, { useContext, useState } from 'react'
import {context} from './App' 

const Disable = () => {

    const disable = useContext(context)
    console.log(disable)
    const [disabled, setDisable] = useState(false)

    return (
        <div>
           <button disabled={disabled} onClick={()=>{setDisable(disable)}}>click to Disable</button> 
        </div>
    )
}

export default Disable;  
