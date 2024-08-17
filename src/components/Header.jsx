import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import {  Link } from "react-router-dom";

const Header = () => {

  // side navbar 
  const[showSideBar, setSideBar] = useState(false)

  const handlesidebar = () => {
      setSideBar(!showSideBar)
    }

  return (
    <div className='flex justify-between py-[15px] px-[20px] bg-[#f1f3f5] border-b font-serif cursor-pointer'>
      <div>
        <h1 className='sm:text-3xl text-2xl font-bold'>
        Flavour
        <span className='text-[#fabb02]'>
        Junction</span></h1>
      </div>

      <div>
        <ul className='sm:flex gap-9 text-[15px] font-bold py-[6px] hidden border-b'>
          <Link to='/'>
            <li className="hover:text-[#fabb02]">Home</li>
          </Link>
          <Link to='/About Us'>
            <li className="hover:text-[#fabb02]">About Us</li>
          </Link>
          <Link to='/Explore Menu'>
            <li className="hover:text-[#fabb02]">Explore Menu</li>
          </Link>
          <Link to='/ Sign In'>
            <li className="hover:text-[#fabb02]">Sign In</li>
          </Link>
        </ul>
      </div>
      {
        showSideBar?(<div className="bg-[#f1f3f5] border-b z-10 w-[200px] absolute top-0 right-0 text-center h-[100vh] flex items-start justify-center">

          <MdClose size="30px"
          className="absolute top-2 left-4 cursor-pointer" 
          onClick={() => setSideBar(!showSideBar)}/>

          <FaCartShopping size="30px" 
          className="absolute bottom-40 top-68 mx-8 my-18 hover:text-[#fabb02]" 
          onClick={() => setSideBar(!showSideBar)}/>

          <ul className='flex text-[15px] font-bold py-[6px] pt-[12vw] flex-col space-y-20'>
            <Link to='/'>
              <li className="hover:text-[#fabb02]" onClick={() => setSideBar(!showSideBar)}>Home</li>
            </Link>
            <Link to='/About Us'>
              <li className="hover:text-[#fabb02]" onClick={() => setSideBar(!showSideBar)}>About Us</li>
            </Link>
            <Link to='/Explore Menu'>
              <li className="hover:text-[#fabb02]" onClick={() => setSideBar(!showSideBar)}>Explore More</li>
            </Link>
            <Link to='/ Sign In'>
              <li className="hover:text-[#fabb02]" onClick={() => setSideBar(!showSideBar)}>Sign In</li>
            </Link>
          </ul>
      </div>
      ) : (
        "" 
      )} 

      <div>
        <p>
        <FaCartShopping size="30px" className="hidden sm:block  mb-2 hover:text-[#fabb02]"/>
        </p>
        <p>
        <GiHamburgerMenu size="30px"className="block sm:hidden cursor-pointer" onClick={handlesidebar}/> 
        </p>
      </div>
    </div>
  )
}

export default Header;


