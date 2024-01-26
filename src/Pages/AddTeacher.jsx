import React, { useEffect, useState } from 'react'
import Saidbar from '../components/Saidbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddSTeacher = () => {


  let[c,setC]=useState(false)

  let navg=useNavigate()
  let [newuser,setnnewUser]=useState({
    firstName:'',
    lastName:'',
    age:''
  })

  let addedstudent=()=>{
    
    if (newuser.firstName!=='' && newuser.lastName!=='' && newuser.age!=='') {
      axios.post('http://localhost:3000/teachers',newuser)
      navg('/tech')
    }else{
      setC(true)
    }
  }
  let onsubmited=(event)=>{
    event.preventDefault()
  }
  return (
    <div>
      <Saidbar/>
      <div className=' mt-[80px] ml-[400px] w-[700px] rounded-2xl h-[600px] p-5 bg-[#090941]'>
        <form onSubmit={onsubmited} className=' w-full h-full flex flex-col gap-[25px]'>
            <label className=' text-white flex flex-col gap-4' htmlFor="#1"><p><span className=' inline-block text-[#06bcef]'>#</span> Firstname</p>
            <input onChange={(e)=>setnnewUser({firstName:e.target.value,lastName:newuser.lastName,age:newuser.age})} className=' pl-[20px] rounded-lg h-[50px]' id='#1' type="text" placeholder='#firstname'/>
            </label>
              
            
            <label className='text-white flex flex-col gap-4' htmlFor="#1"><p><span className=' inline-block text-[#06bcef]'>#</span> Firstname</p>
            <input  onChange={(e)=>setnnewUser({firstName:newuser.firstName,lastName:e.target.value,age:newuser.age})} className=' pl-[20px] rounded-lg h-[50px]' id='#1' type="text" placeholder='#lastname'/>
            </label>

            <label className='text-white flex flex-col gap-4' htmlFor="#1"><p><span className=' inline-block text-[#06bcef]'>#</span> Age</p>
            <input  onChange={(e)=>setnnewUser({firstName:newuser.firstName,lastName:newuser.lastName,age:e.target.value})} className=' w-[100px] pl-[20px] rounded-lg h-[50px]' id='#1' type="number" placeholder='#Age'/>
            </label>

            <div className=' w-[200px] flex items-center gap-5'>
              <button onClick={()=>addedstudent()} className=' bg-lime-500 rounded-xl p-3 text-white hover:border-solid hover:border-2 hover:border-sky-500'>
                AddStudent
              </button>
              <button onClick={()=>navg('/tech')} className=' bg-red-600 rounded-xl p-3 text-white hover:border-solid hover:border-2 hover:border-sky-500'>
              Cancellation
              </button>
            </div>
            <p className='text-white text-[55px] '><span className=' inline-block text-[#06bcef]'>#</span> Add Teacher information</p>
        </form>
      </div>
      <div className={c?' absolute top-[200px] left-[1200px] rounded-xl bg-red-600 w-[300px] h-[200px] text-white p-4':'hidden'}>
      <i className=' text-[100px] bx bxl-xing' ></i>
      <h2>Forma ma'lumotlari to'liq emas <br />
        iltimos qo'shayotgan ma'lumotlaringiz to'liqligini tekshiring
      </h2>
      </div>
    </div>
  )
}

export default AddSTeacher
