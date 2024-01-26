import React, { Fragment, useReducer, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Saidbar = () => {
  let[a,setA]=useState(true)

  let func=()=>{
    if(a!==true){
      setA(true)
    }
    if (a!==false) {
      setA(false)
    }
  }
  // ................

  let reducer=(state,action)=>{
    if (action.type==='SUN') {
      document.querySelector('body').setAttribute('class' ,'sun')
    }
    if (action.type==='MUN') {
      document.querySelector('body').setAttribute('class' ,'mun')
    }
  }
  let [state,dispatch]=useReducer(reducer,document.querySelector('body'))
  return (
    <Fragment>
      <div className=' w-[300px] h-dvh fixed top-0 left-0 bg-[#090941]'>
        <div className='user w-full h-[80px] p-4 text-white flex justify-evenly items-center'>
            <img className='w-[40px] h-[40px] rounded-full' src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="alt" />
            <p>ADMIN NAME</p>
        </div>
        <div className=' text-white w-full pt-[50px] pl-[55px] flex flex-col gap-[30px] items-start'>
          <button onClick={()=>func()} className='flex gap-3 items-center hover:text-sky-500'>
        <i class='bx bx-menu text-[40px]'></i>
             
            </button>
        <NavLink to='/'>
          <div className=' w-full flex gap-3 items-center hover:text-sky-500'>
          <i className=' text-[40px] bx bx-home-alt'  ></i>
              <p className={a ?'block':'hidden'}>Home</p>
            </div>
          </NavLink>
          <NavLink to='/tech'>
          <div className=' w-full flex gap-3 items-center hover:text-sky-500'>
            <i className=' text-[40px] bx bx-shape-circle'></i>
              <p className={a ?'block':'hidden'}>Teachers</p>
            </div>
          </NavLink>
          <NavLink to='/stud'>
          <div className=' w-full flex gap-3 items-center hover:text-sky-500'>
          <i className=' text-[40px] bx bxl-stripe'></i>
              <p className={a ?'block':'hidden'}>Students</p>
            </div>
          </NavLink>
          <NavLink to='/addt' >
          <div className=' w-full flex gap-3 items-center hover:text-sky-500'>
          <i className=' text-[40px] bx bx-add-to-queue'></i>
              <p className={a ?'block':'hidden'}>AddTeachers</p>
            </div>
          </NavLink>
          <NavLink to='/adds'>
          <div className=' w-full flex gap-3 items-center hover:text-sky-500'>
          <i className='bx bxs-add-to-queue text-[40px]' ></i>
              <p className={a ?'block':'hidden'}>AddStudent</p>
            </div>
          </NavLink>
          <button onClick={()=>dispatch({type:'SUN'})} className=' w-full flex gap-3 items-center hover:text-sky-500'>
          <i className='bx bxs-sun text-[40px]'  ></i>
              <p className={a ?'block':'hidden'}>Light</p>
            </button>
            <button onClick={()=>dispatch({type:'MUN'})} className=' w-full flex gap-3 items-center hover:text-sky-500'>
            <i className= ' text-[40px] bx bx-moon' ></i>
              <p className={a ?'block':'hidden'}>Durk</p>
            </button>
         
        </div>
      </div>
    </Fragment>
  )
}

export default Saidbar
