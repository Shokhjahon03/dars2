import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  let navg=useNavigate()
  return (
    <div>
      <nav className='bg-white w-full h-[80px] fixed top-0 left-0 flex justify-center items-center drop-shadow-lg'>
        <div className="container">
          <div className="navbar flex  justify-around items-center pl-[150px]">
              <h2 className=' text-[30px] font-black uppercase'>welcome admin</h2>
              {/* <div className=' flex items-center justify-between w-[150px]'>
                <p>SORT :</p>
                <select className=' rounded-md  border-solid border-2 border-[#090941]' name="name" id="">
                  <option value=""></option>
                  <option value="firstName">firstName</option>
                  <option value="lastName">lastName</option>
                </select>
              </div> */}
              <button onClick={()=>navg('hjhqgdhgahgf')} className=' bg-[#48ad4a] text-white p-2 rounded-lg hover:bg-lime-500'>
                Admim Settings
              </button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
