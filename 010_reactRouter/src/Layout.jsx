import React from 'react'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Outlet } from 'react-router-dom';



function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />

    
    </>
  )
}

export default Layout



/* 
we created a layout and then we created a outlet 
means it will keep all the header and footer same and only make changes in the outlet


*/