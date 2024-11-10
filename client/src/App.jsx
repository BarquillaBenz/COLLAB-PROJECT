import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// PAGES
import Login from './components/login/Login.jsx'
import UserDashboard from './components/user/UserDashboard.jsx'
import AdminDashboard from './components/admin/AdminDashboard.jsx'
import Inventory from './components/admin/Inventory.jsx'
import AddEquipment from './components/admin/AddEquipment.jsx'

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/loginpage' element={<Login></Login>}></Route>
        <Route path='/userpage' element={<UserDashboard></UserDashboard>}></Route>
        <Route path='/adminpage' element={<AdminDashboard></AdminDashboard>}></Route>
        <Route path='/inventorypage' element={<Inventory></Inventory>}></Route>
        <Route path='/addequipment' element={<AddEquipment></AddEquipment>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
