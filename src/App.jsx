import { Fragment, useState } from 'react'
import './App.css'
import 'react-router-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NoteFount from './Pages/NoteFount'
import Allusers from './Pages/Allusers'
import Student from './Pages/Student'
import Teacher from './Pages/Teacher'
import AddStudents  from './Pages/AddStudents'
import AddTeacher from './Pages/AddTeacher'
import Login from './Pages/Login'
function App() {
  let[x,setX]=useState(false)
  return (
    <Fragment>
     <BrowserRouter>
     {
      x? <Routes>
      <Route path='/' element={<Allusers/>}/>
      <Route path='/stud' element={<Student/>}/>
      <Route path='/tech' element={<Teacher/>}/>
      <Route path='/adds' element={<AddStudents/>}/>
      <Route path='/addt' element={<AddTeacher/>}/>
      <Route path='/*' element={<NoteFount/>}/>
    </Routes>:<Login setX={setX} x={x}/>
     }
     </BrowserRouter>
    </Fragment>
  )
}

export default App
