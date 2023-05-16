import React from 'react'
import { fakeUserData } from '../api'
import { useDispatch } from 'react-redux'
import { addUser } from '../store/slices/userSclice'
import DisplayUser from './DisplayUser'
const Adduser = () => {
    const dispatch=useDispatch();
    const AddNewUser=()=>{
      const payload=fakeUserData();
      dispatch(addUser(payload));
    }
  return (
    <>
    <div>users list</div>
    <button onClick={AddNewUser}>Add new user</button>
    <DisplayUser/>
    </>
  )
}

export default Adduser