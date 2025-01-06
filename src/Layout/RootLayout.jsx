
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
function RootLayout() {
  return (
    <>
    <Navbar></Navbar>
    <Outlet></Outlet>
    </>
  )
}

export default RootLayout