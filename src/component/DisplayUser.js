import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser,deleteUsers } from '../store/slices/userSclice';

const DisplayUser = () => {
  const dispatch=useDispatch();
  const deleteUser=(id)=>{
    dispatch(removeUser(id));  
  }
    const data=useSelector((state)=>{
        return state.users;
    })
    const deleteAllUser=()=>{
      dispatch(deleteUsers()); 
    }
  return (
    <div>{data.map((current,id)=>(
        <li key={id}>{current}
        <button onClick={()=>deleteUser(id)}>delete</button>
        </li>
        
    ))}
    <button onClick={deleteAllUser}  >Delete all Users</button>
    </div>
  )
}

export default DisplayUser