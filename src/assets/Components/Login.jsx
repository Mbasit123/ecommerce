import React, { useState } from 'react'
import{useDispatch} from "react-redux"
import { setLogin } from '../../Slice'
import { useNavigate } from 'react-router-dom'
const user={
    name:"Basit",
    password:"12345678"
}

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")

    const userLogin=async()=>{
        if(username===user.name && password===user.password ){
            dispatch(
                    setLogin({
                        user:{
                            username:username,
                            password:password
                        }
                    }
                    )
                
            )
            useNavigate("login")
        }
        else{

            alert("Wrong information!")
        }
    }

  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center'>
<input type='text' placeholder='Enter Username' className='border rounded-md p-2' onChange={(e)=>setUsername(e.target.value)}/>
<input type='text' placeholder='Enter Password' className='border rounded-md p-2'onChange={(e)=>setPassword(e.target.value)}/>
<button  className='border rounded-md p-2 mt-2' onClick={()=>userLogin()}>Submit</button>
    </div>
  )
}

export default Login

// we Use Redux for state Management and want same data on multiple pages