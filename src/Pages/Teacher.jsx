import React, { Fragment, useEffect, useState } from 'react'
import Saidbar from '../components/Saidbar'
import axios from 'axios'
import Navbar3 from '../components/Navbar3'
import EditTeacher from './EditTeacher'

const Teacher = () => {

  let [sdata,setSdata]=useState([])
  let [x,setX]=useState(false)
  let [editId,setId]=useState('')
  let[ozgaruvchi,setOz]=useState(0)
  let[searchdat,setsearch]=useState([])
  let[a,setA]=useState('')
  let[b,setB]=useState('')



  // edit uchun
  let tanlash=(id)=>{
    setId(id)
    setX(true)
  }

// funksiya dalet
let daleteUsers=async (id)=>{
  axios.delete(`http://localhost:3000/teachers/${id}`)
  setOz(ozgaruvchi+1)
}
// .............................................
  let axiosS=async()=>{
    let res=await axios.get('http://localhost:3000/teachers')
    let datas=await res.data
    setSdata(datas)
  }
  // ..................................................

  let sort=()=>{
    if (b==='') {
      return null
    }
    if (b==='firstName') {
      return (
        
        setSdata( sdata.sort(function (a, b) {
          if (a.firstName.toLowerCase() < b.firstName.toLowerCase()) {
            return 1;
          }
          if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) {
            return -1;
          }
          return 0;
        }))
      )
    }
    if (b==='age') {
      return (
        
        setSdata( sdata.sort(function (a, b) {
          if (a.age < b.age) {
            return -1;
          }
          if (a.age > b.age) {
            return -1;
          }
          return 0;
        }))
      )
    }
    if (b==='lastName') {
      return (
        
        setSdata(sdata.sort(function (a, b) {
          if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) {
            return 1;
          }
          if (a.lastName.toLowerCase() > b.lastName.toLowerCase()) {
            return -1;
          }
          return 0;
        }))
            )
    }
    
  }
 useEffect(()=>{
  sort()
 },[b])
// 
  useEffect(()=>{
      axiosS()
  },[ozgaruvchi])

  return (
    <Fragment>
      <Navbar3 b={b} setB={setB} a={a} setA={setA} searchdat={searchdat} setsearch={setsearch} sdata={sdata}/>
      <Saidbar/>
      <h1 className=' mt-[100px] ml-[400px] text-[80px]'># Teachers Page</h1>
      {
        a?<table className=' w-[1100px]  rounded-md ml-[350px] mt-[10px] text-[#1d292c]'>
        {
          searchdat.map((e,i)=>(
            <tr className=' p-10' key={i}>
                <td className=' pb-[20px] pt-[20px] pl-[20px]'><img className=' w-[40px] h-[40px] rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVYUbi-Jf5QxIW-koSAO97ZmKrOXadXeJ3xQ&usqp=CAU" alt="alt" /></td>
               <td className=' pb-[20px] pt-[20px] pl-[20px]'> <p><span className=' inline-block text-[#06bcef]'># firstName</span> : {e.firstName}</p></td>
                <td className=' pb-[20px] pt-[20px] pl-[20px]' ><p><span className=' inline-block text-[#06bcef]'># lastName</span> : {e.lastName}</p></td>
                <td className=' pb-[20px] pt-[20px] pl-[20px]' ><p><span className=' inline-block text-[#06bcef]'># Age</span> : {e.age}</p></td>
                <td className=' pb-[20px] pt-[20px] pl-[20px]'>
                <div className=' w-[100px] flex justify-between items-center'>
                  <button onClick={()=>tanlash(e.id)}  className=' text-white bg-yellow-400 p-1 rounded-md hover:text-blue-950'>Edit</button>
                  <button onClick={()=>daleteUsers(e.id)} className=' text-white bg-red-600 p-1 rounded-md hover:text-blue-950'>Dalete</button>
                </div>
                </td>
            </tr>
          ))
        }
    </table>:<table className=' w-[1100px]  rounded-md ml-[350px] mt-[10px] text-[#1d292c]'>
          {
            sdata.map((e,i)=>(
              <tr className=' p-10' key={i}>
                  <td className=' pb-[20px] pt-[20px] pl-[20px]'><img className=' w-[40px] h-[40px] rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVYUbi-Jf5QxIW-koSAO97ZmKrOXadXeJ3xQ&usqp=CAU" alt="alt" /></td>
                 <td className=' pb-[20px] pt-[20px] pl-[20px]'> <p><span className=' inline-block text-[#06bcef]'># firstName</span> : {e.firstName}</p></td>
                  <td className=' pb-[20px] pt-[20px] pl-[20px]' ><p><span className=' inline-block text-[#06bcef]'># lastName</span> : {e.lastName}</p></td>
                  <td className=' pb-[20px] pt-[20px] pl-[20px]' ><p><span className=' inline-block text-[#06bcef]'># Age</span> : {e.age}</p></td>
                  <td className=' pb-[20px] pt-[20px] pl-[20px]'>
                  <div className=' w-[100px] flex justify-between items-center'>
                    <button onClick={()=>tanlash(e.id)}  className=' text-white bg-yellow-400 p-1 rounded-md hover:text-blue-950'>Edit</button>
                    <button onClick={()=>daleteUsers(e.id)} className=' text-white bg-red-600 p-1 rounded-md hover:text-blue-950'>Dalete</button>
                  </div>
                  </td>
              </tr>
            ))
          }
      </table>
      }
      {x?<EditTeacher setOz={setOz} ozgaruvchi={ozgaruvchi} setX={setX} editId={editId}/>:null}
    </Fragment>
  )
}

export default Teacher
