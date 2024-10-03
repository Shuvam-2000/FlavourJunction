import { useState } from "react";
import { MdClose } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import cart_icon from "../assets/cart_icon.png"
import menu_icon from "../assets/menu_icon.png"

const Header = () => {

  // state for side navbar in mobile view 
  const[showSideBar, setSideBar] = useState(false)

  // add to cart functionality
  const cartCount = useSelector((state) => state.cart.length);

  return (
    <div className='flex justify-between py-[12px] px-[20px] bg-[#f1f3f5] border-b font-mono cursor-pointer'>
      <div>
        <h1 className='sm:text-3xl text-xl font-bold'>
        Flavour
        <span className='text-[#fabb02]'>
        Junction</span></h1>
      </div>

      <div>
        <ul className='sm:flex gap-9 text-[15px] font-bold text-base py-[6px] hidden'>
          <NavLink to='/'>
            <li className="hover:text-[#fabb02]">Home</li>
            <hr className="w-3/2 border-none h-[1.5px] bg-[#fabb02] hidden"/>
          </NavLink>
          <NavLink to='/exploremore'>
            <li className="hover:text-[#fabb02]">Our Menu</li>
            <hr className="w-3/2 border-none h-[1.5px] bg-[#fabb02] hidden"/>
          </NavLink>
          <NavLink to='/aboutus'>
            <li className="hover:text-[#fabb02]">About Us</li>
            <hr className="w-3/2 border-none h-[1.5px] bg-[#fabb02] hidden"/>
          </NavLink>
          <NavLink to='/signin'>
            <li className="hover:text-[#fabb02]">Sign In</li>
            <hr className="w-3/2 border-none h-[1.5px] bg-[#fabb02] hidden"/>
          </NavLink>
        </ul>
      </div>
      {
        showSideBar?(<div className="bg-[#f1f3f5] border-b z-10 w-[200px] absolute top-0 right-0 text-center h-[100vh] flex items-start justify-center">

          <MdClose size="30px"
          className="absolute top-2 left-4 cursor-pointer" 
          onClick={() => setSideBar(!showSideBar)}/>

          <ul className='flex text-[15px] font-bold py-[6px] pt-[12vw] flex-col space-y-20'>
            <NavLink to='/'>
              <li className="hover:text-[#fabb02]" onClick={() => setSideBar(!showSideBar)}>Home</li>
            </NavLink>
            <NavLink to='/exploremore'>
              <li className="hover:text-[#fabb02]" onClick={() => setSideBar(!showSideBar)}>Our Menu</li>
            </NavLink>
            <NavLink to='/aboutus'>
              <li className="hover:text-[#fabb02]" onClick={() => setSideBar(!showSideBar)}>About Us</li>
            </NavLink>
            <NavLink to='/signin'>
              <li className="hover:text-[#fabb02]" onClick={() => setSideBar(!showSideBar)}>Sign In</li>
            </NavLink>
          </ul>
      </div>
      ) : (
        null 
      )} 

      <div className="flex items-center gap-4">
          {/* Cart Icon */}
          <div className="group relative">
            <NavLink to='/cartpage' className="relative">
              <img src={cart_icon} alt="cart-icon" className="w-4 sm:w-6" />
              <p className="absolute sm:right-[-5px] right-[-6px] sm:bottom-[-5px] bottom-[-7px] w-4 text-center leading-4 bg-[#fabb02] text-white aspect-square rounded-full text-[8px]">
                {cartCount}
              </p>
            </NavLink>
          </div>

          {/* Menu Icon */}
          <img 
            src={menu_icon} 
            alt="menu-icon" 
            className="sm:w-5 w-4 cursor-pointer sm:hidden" 
            onClick={() => setSideBar(!showSideBar)} 
          />
        </div>
      </div>
      )
}

export default Header;


