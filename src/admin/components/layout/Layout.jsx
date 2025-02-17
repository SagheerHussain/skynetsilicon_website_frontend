import React from 'react'
import { Navbar, Footer, Sidebar } from '../index';

const Layout = ({ children }) => {
    return (
        <>
            <div className="flex overflow-x-hidden relative">
                <div className='w-[15vw] fixed top-0 h-screen '>
                    <Sidebar />
                </div>
                <div className={`ms-[15vw]`}>
                    <Navbar />
                    <div className="bg-[#17171a]">
                        {children}
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Layout
