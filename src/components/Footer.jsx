const Footer = () => {
  return (
    <>
    <div className="w-ful bg-black text-white">
      <div className="justify-around font-serif pt-5 cursor-pointer hover: text-white grid grid-cols-2 sm:grid-cols-4 py-5 pl-2 ">

        <div className="mx-4">
            <h2 className="font-bold text-[22px]">Flavour<span className="text-[#fabb02]">Junction</span></h2>
            <p className="text-[15px] text-gray">© 2024 Bundl Technologies Pvt. Ltd</p>
        </div>

        <div className="mx-12">
            <h2 className="font-bold mb-3 text-[16px] sm:text-[25px]">Company</h2>
            <p className="text-[15px] sm:text-[20px] mb-2 text-[gray] hover:text-[white]">About</p>
            <p className="text-[15px] sm:text-[20px] mb-2 text-[gray] hover:text-[white]">Carrers</p>
            <p className="text-[15px] sm:text-[20px]] mb-2 text-[gray] hover:text-[white]">Teams</p>
            <p className="text-[15px] sm:text-[20px] mb-2 text-[gray] hover:text-[white]">Specials</p>
        </div>

        <div className="mx-4"> 
            <h2 className="font-bold mb-3 text-[16px] sm:text-[25px]">Help & Support</h2>
            <p className="text-[15px] sm:text-[20px] mb-2 text-[gray] hover:text-[white]">Company</p>
            <p className="text-[15px] sm:text-[20px] mb-2 text-[gray] hover:text-[white]">Partner With US</p>
            <p className="text-[15px] sm:text-[20px] mb-2 text-[gray] hover:text-[white]">Ride With Us</p>
        </div>

        <div className="mx-10">
            <h2 className="font-bold mb-3 text-[16px] sm:text-[25px]">We deliver Up</h2>
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
