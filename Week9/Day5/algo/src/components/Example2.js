import React from 'react'

export default function ListOfNames(props){
    const {list} = props
    return(
        <div>
            <h1>List Of Names</h1>
            <ul> 
                {list?.map((userName)=>(
                    <li>{userName}</li>
                ))}
            </ul>
        </div>
    )
}