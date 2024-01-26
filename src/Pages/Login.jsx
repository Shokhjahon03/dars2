import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({setX,x}) => {
    let [val,setva]=useState({name:'',parol:''})
let navg=useNavigate()
    let func=()=>{
        if (val.name!=='' && val.parol!=='') {
            setX(true)
           navg('/') 
        }
    }

    let os=(event)=>{
        event.preventDefault()
    }
  return (
    <div className=' w-full h-dvh bg-slate-900 flex justify-center items-center' >
        <form onSubmit={os} className=' rounded-2xl w-[400px] h-[600px] bg-slate-300 flex flex-col items-center justify-around'>
            <h1 className=' font-black'>Ismingizni kiriting va Parol yarating</h1>
            <input onChange={(e)=>setva({name:e.target.value,parol:val.parol})} className=' w-[300px] h-[50px] rounded-xl bg-slate-600 text-white p-2' placeholder='# Ismingiz' type="text" />
            <input onChange={(e)=>setva({name:val.name,parol:e.target.value})} className=' w-[300px] h-[50px] rounded-xl bg-slate-600  text-white p-2 ' placeholder='# parol' type="password" />
            <button className='btn' onClick={()=>func()}> Log In !</button>

        </form>
    </div>
  )
}

export default Login
