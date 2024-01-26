import React, { Fragment, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Saidbar from '../components/Saidbar'
import axios from 'axios'
const Allusers = () => {
  let [allVAlu,setVAlu]=useState([])
  let [allVAlu2,setVAlu2]=useState([])
  let [all,setAll]=useState([])
  let [ab,setAB]=useState(true)
  let studentsaxios=async ()=>{
    let res=await axios.get('http://localhost:3000/students')
    let dat=await res.data
    setVAlu2(dat)
  }
  let teachersaxios=async ()=>{
    let res=await axios.get('http://localhost:3000/teachers')
    let datas=await res.data
    setVAlu(datas)
  }
  useEffect(()=>{
    studentsaxios()
    teachersaxios()
    setAll([...allVAlu,...allVAlu2])
    // if (allVAlu.length>0) {
    //   setAB(true)
    // }
  },[])
  return (
    <Fragment>
      <Navbar/>
      <Saidbar/>
      <h2 className=' mt-[100px] ml-[400px] text-[50px]'>
          # All Users
      </h2>
        <table className=' w-[1100px]  rounded-md ml-[350px] mt-[10px] text-[#1d292c]'>
        {
          allVAlu.map((e,i)=>(
            <tr className=' p-10' key={i}>
                <td className=' pb-[20px] pt-[20px] pl-[20px] '><img className=' w-[40px] h-[40px] rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVYUbi-Jf5QxIW-koSAO97ZmKrOXadXeJ3xQ&usqp=CAU" alt="alt" /></td>
               <td className=' pb-[20px] pt-[20px] pl-[20px] '> <p><span className=' inline-block text-[#06bcef]'># firstName</span> : {e.firstName}</p></td>
                <td className=' pb-[20px] pt-[20px] pl-[20px] ' ><p><span className=' inline-block text-[#06bcef]'># lastName</span> : {e.lastName}</p></td>
                <td className=' pb-[20px] pt-[20px] pl-[20px] ' ><p><span className=' inline-block text-[#06bcef]'># Age</span> : {e.age}</p></td>
            </tr>
          ))
        }
        {
          allVAlu2.map((e,i)=>(
            <tr className=' p-10' key={i}>
                <td className=' pb-[20px] pt-[20px] pl-[20px]'><img className=' w-[40px] h-[40px] rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVYUbi-Jf5QxIW-koSAO97ZmKrOXadXeJ3xQ&usqp=CAU" alt="alt" /></td>
               <td className=' pb-[20px] pt-[20px] pl-[20px]'> <p><span className=' inline-block text-[#06bcef]'># firstName</span> : {e.firstName}</p></td>
                <td className=' pb-[20px] pt-[20px] pl-[20px]' ><p><span className=' inline-block text-[#06bcef]'># lastName</span> : {e.lastName}</p></td>
                <td className=' pb-[20px] pt-[20px] pl-[20px]' ><p><span className=' inline-block text-[#06bcef]'># Age</span> : {e.age}</p></td>
                {/* <td className=' pb-[20px] pt-[20px] pl-[20px]'>
                <div className=' w-[100px] flex justify-between items-center'>
                  <button onClick={()=>tanlash(e.id)}  className=' text-white bg-yellow-400 p-1 rounded-md hover:text-blue-950'>Edit</button>
                  <button onClick={()=>daleteUsers(e.id)} className=' text-white bg-red-600 p-1 rounded-md hover:text-blue-950'>Dalete</button>
                </div>
                </td> */}
            </tr>
          ))
        }
    </table>
    
    </Fragment>
  )
}

export default Allusers
