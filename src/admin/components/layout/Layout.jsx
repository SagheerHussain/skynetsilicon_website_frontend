import React from 'react'
import { Navbar, Footer, Sidebar } from '../index';

const Layout = ({ children }) => {
    return (
        <>
            <div className="flex">
                <div className='w-[300px] fixed top-0 h-screen '>
                    <Sidebar />
                </div>
                <div className={`ms-[300px]`}>
                    <Navbar />
                    {children}
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Layout
