import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = ({setsearch,searchdat,sdata,a,setA,setB}) => {
    let navg=useNavigate()
    let [searchVal,setVal]=useState('')
    let [das,setDas]=useState([])
    let axiosS=async()=>{
        let res=await axios.get('http://localhost:3000/students')
        let datas=await res.data
        setDas(datas)
      }
    let searchfunction=()=>{
        
        let newarr=das.filter((e)=>e.firstName.toLowerCase().includes(searchVal.toLowerCase()))
        setA(searchVal)
        setsearch(newarr)
    }



useEffect(()=>{
axiosS()
searchfunction()
},[searchVal])
  return (
    <div>
      <nav className=' w-full h-[80px] fixed top-0 left-0 flex justify-center items-center drop-shadow-lg'>
        <div className="container">
          <div className="navbar flex justify-around pl-[150px]">
              <div className=' flex justify-between items-center'>
              <input onChange={(e)=>setVal(e.target.value)} type='search' placeholder='Search' className=' bg-white w-[400px] pl-[20px] border-solid border-2 border-[#090941] rounded-lg'/>
              <i className=' text-[25px] bx bx-search-alt-2  text-[#090941]'></i>
              </div>
              <div className=' flex items-center justify-between w-[150px]'>
                <p>SORT :</p>
                <select onChange={(e)=>setB(e.target.value)} className=' rounded-md  border-solid border-2 border-[#090941]' name="name" id="">
                  <option value="age">age</option>
                  <option value="firstName">firstName</option>
                  <option value="lastName">lastName</option>
                </select>
              </div>
              <button onClick={()=>navg('/akjfdhjkfhfh')} className=' bg-[#48ad4a] text-white p-2 rounded-lg hover:bg-lime-500'>
                Admim Settings
              </button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar2
