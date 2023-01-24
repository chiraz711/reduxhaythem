import React from 'react'
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { updateUser } from "../config/actions"
import { useNavigate } from "react-router-dom";
import { useState } from "react"

function UpdateUsers() {
    const {id} = useParams()
    const user = useSelector(data=>data.users.find((u)=>u.id===parseInt(id)));
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleClick = () => {
        dispatch(updateUser({
            id:id,
            name:name,
            email:email
        }))
        navigate('/')
      }

  return (
    <form>
    <label>Name</label>
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
    <label>Email</label>
    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
    <button onClick={handleClick}>Enregistrer</button>
</form>
  )
}
export default UpdateUsers