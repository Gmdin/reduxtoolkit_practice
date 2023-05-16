import React from 'react'
import { useSelector } from 'react-redux'

const DisplayUser = () => {
    const data=useSelector((state)=>{
        return state.users;
    })
    console.log(data)
  return (
    <div>{data.map((current,id)=>(
        <li key={id}>{current}</li>
    ))}</div>
  )
}

export default DisplayUser