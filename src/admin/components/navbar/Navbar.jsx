import React from 'react';
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      <nav id='navbar' className='bg-zinc-950 w-[85vw] h-[7vh] flex items-center'>
        <div className="container-fluid py-3 px-4">
          <div className="navbar_content flex justify-between items-center">
            <div className="navbar_menu ">
              <IoMenu className='text-3xl text-[#fff]' />
            </div>
            <div className="navbar_profile_icon flex items-center">
              <div className="profile_menu_icon w-[30px] h-[30px] bg-[#fff] rounded-full flex items-center justify-center">
                <span className='text-sky-500 font-semibold text-lg'>M</span>
              </div>
              <h4 className='text-[#fff] font-semibold text-lg ms-2'>Muhammad Shayan</h4>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
