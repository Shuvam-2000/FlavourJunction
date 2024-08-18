import { Link } from "react-router-dom"
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className="w-ful bg-black text-white">
      <div className="justify-around font-serif pt-5 cursor-pointer hover: text-white grid grid-cols-2 sm:grid-cols-4 py-5 pl-2 ">

        <div className="mx-2 sm:mx-4">
            <h2 className="font-bold text-[22px]">Flavour<span className="text-[#fabb02]">Junction</span></h2>
            <p className="text-[15px] text-gray">© 2024 Bundl Technologies Pvt. Ltd</p>
            <h2 className="sm:mt-2 mt-1">Connect With Us:-</h2>
          <div className="flex gap-2 mt-1">
            <FaFacebook className="mt-2 w-[20px] hover:text-[#fabb02]"/>
            <FaInstagramSquare className="mt-2 w-[20px] hover:text-[#fabb02]"/>
            <FaSquareXTwitter className="mt-2 w-[20px] hover:text-[#fabb02]"/>
            <FaLinkedin className="mt-2 w-[20px] hover:text-[#fabb02]"/>
            <FaYoutube className="mt-2 w-[20px] hover:text-[#fabb02]"/>
          </div>
        </div>

        <div className="mx-14">
            <h2 className="font-bold mb-3 text-[16px] sm:text-[25px]">Company</h2>
            <Link to="/">
              <p className="text-[15px] sm:text-[20px] mb-2 text-[gray] hover:text-[white]">Home</p>
            </Link>
            <Link to="/aboutus">
              <p className="text-[15px] sm:text-[20px] mb-2 text-[gray] hover:text-[white]">About</p>
            </Link>
            <Link to="/exploremore">
              <p className="text-[15px] sm:text-[20px] mb-2 text-[gray] hover:text-[white]">Explore Menu</p>
            </Link>
              <p className="text-[12px] sm:text-[20px] mb-2 text-[gray] hover:text-[white]">Carriers</p>
        </div>

        <div className="mx-2 sm:mx-4"> 
            <h2 className="font-bold mb-3 text-[16px] sm:text-[25px]">Help & Support</h2>
            <p className="text-[15px] sm:text-[20px] mb-2 text-[gray] hover:text-[white]">Company</p>
            <p className="text-[15px] sm:text-[20px] mb-2 text-[gray] hover:text-[white]">Partner With US</p>
            <p className="text-[15px] sm:text-[20px] mb-2 text-[gray] hover:text-[white]">Ride With Us</p>
        </div>

        <div className="mx-14 mt-2 sm:mt-0">
            <h2 className="font-bold mb-3 text-[15px] sm:text-[25px]">We deliver Up</h2>
            <p className="text-[15px] sm:text-[20px] mb-2 text-[gray] hover:text-[white]">Bangalore</p>
            <p className="text-[15px] sm:text-[20px] mb-2 text-[gray] hover:text-[white]">Gurugram</p>
            <p className="text-[15px] sm:text-[20px] mb-2 text-[gray] hover:text-[white]">Delhi</p>
            <p className="text-[15px] sm:text-[20px] mb-2 text-[gray] hover:text-[white]">Mumbai</p>   
        </div>
        </div>
    </div>
    </> 
  )
}

export default Footer
