import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Orders from './pages/Order/Order'
import {Routes,Route} from 'react-router-dom'
const App = () => {
  const url="http://localhost:8080"

  return (
    <div>
      <Navbar/>
      <hr/>
      <div className='app-component' style={{display:'flex'}}>
        <Sidebar/>
        <Routes>
          <Route path="/add" element={<Add url={url}/>}/>
          <Route path="/List" element={<List url={url}/>}/>
          <Route path="/Orders" element={<Orders url={url}/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App