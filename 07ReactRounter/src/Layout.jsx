import  React from 'react'
import Footer from './components/Footer/footer'
import Header from './components/Header/Footer/Header'
import { Outlet } from 'react-router-dom'


function Layout() {
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout