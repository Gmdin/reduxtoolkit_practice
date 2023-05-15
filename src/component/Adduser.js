import React from 'react'
import { fakeUserData } from '../api'

const Adduser = () => {
    const AddNewUser=()=>{
      const payload=fakeUserData();
      console.log(payload)
    }
  return (
    <>
    <div>users list</div>
    <button onClick={AddNewUser}>Add new user</button>
    </>
  )
}

export default Adduser