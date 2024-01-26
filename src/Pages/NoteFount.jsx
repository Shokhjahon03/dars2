import React from 'react'
import 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const NoteFount = () => {

    let navg=useNavigate()
  return (
    <div className='P404 w-full relative h-dvh flex justify-center items-center text-[40px]'>
      <button onClick={()=>navg('/')} className=' hover:text-sky-500 text-white w-[400px] h-[100px] rounded-md bg-black absolute top-[450px] left-[70px] hover:border-solid hover:border-2 hover:border-sky-500'>
            G0 Home
      </button>
    </div>
  )
}

export default NoteFount
