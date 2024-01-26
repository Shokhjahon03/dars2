import axios from 'axios'
import React, { useEffect, useState} from 'react'

const EditStudents = ({setX,editId,setOz,ozgaruvchi}) => {
// ma'lumotlar1
  let[editmal,setEdit]=useState({firstName:'',lastName:'',age:''})
  let[change,setchande]=useState({firstName:'',lastName:'',age:''})



// funksitya1
  let axiosID=async ()=>{
    let res= await axios.get(`http://localhost:3000/students/${editId}`)
    let dataid=await res.data
    setchande(dataid)
  }


// funksiya2
  let saveEditId=async()=>{
    axios.put(`http://localhost:3000/students/${editId}`,change)
    setX(false)
    setOz(ozgaruvchi+1)
  }

// funksiya4
let onsubmited=(e)=>{
  e.preventDefault()
}

useEffect(()=>{
axiosID()
},[])

  return (
    <div className='fixed top-0 left-0 w-full h-dvh opacity-90 bg-white z-10 flex justify-center items-center'>
        <form onSubmit={onsubmited} className=' w-[400px] h-[500px] bg-black opacity-100 rounded-2xl p-4 flex flex-col gap-5'>
        <label className='text-white flex flex-col gap-4' htmlFor="firstName"><p><span className=' inline-block text-[#06bcef]'>#</span> Firstname</p>
            <input onChange={(e)=>setchande({firstName:e.target.value,lastName:change.lastName,age:change.age})} name='firstName' value={change.firstName} className=' border-solid border-2 border-sky-500 bg-black pl-[20px] rounded-lg h-[50px]' id='firstName' type="text" placeholder='#firstname'/>
            </label>
            <label className='text-white flex flex-col gap-4' htmlFor="#1"><p><span className=' inline-block text-[#06bcef]'>#</span> Lastname</p>
            <input onChange={(e)=>setchande({firstName:change.firstName,lastName:e.target.value,age:change.age})}  name='lastName' value={change.lastName} className=' border-solid border-2 border-sky-500 pl-[20px] rounded-lg h-[50px]' id='#1' type="text" placeholder='#lastname'/>
            </label>
            <label className='text-white flex flex-col gap-4' htmlFor="#1"><p><span className=' inline-block text-[#06bcef]'>#</span> Age</p>
            <input onChange={(e)=>setchande({firstName:change.firstName,lastName:change.lastName,age:e.target.value})} name='age' value={change.age} className=' border-solid border-2 border-sky-500 w-[100px] pl-[20px] rounded-lg h-[50px]' id='#1' type="number" placeholder='#Age'/>
            </label>
            <div className='w-full flex justify-evenly items-center'>
              
            <button className='text-white bg-amber-400 w-[100px] h-[40px] rounded-lg' onClick={()=>saveEditId()}>
              save
            </button>
            <button className='text-white bg-teal-500 w-[100px] h-[40px] rounded-lg' onClick={()=>setX(false)}>
            void
            </button>
            </div>
        </form>
    </div>
  )
}

export default EditStudents
