import React, { useState } from 'react';
import Example2 from "./Example2"


export default function ExampleOne(){
    const [userName, setuserName] = useState("")
    const [listOfNames, setlistOfNames] = useState([])
    
    return(
        <div>
            <label>Enter your name:</label>
            <input onChange={(e) =>
                setuserName(e.target.value)
                }
                type="text"
                placeholder="Name"
            />
            <button OnClick={()=> setlistOfNames(...listOfNames, userName)}>
                Submit
            </button>
            
            <Example2 list={listOfNames} />
        </div>
    )
} 