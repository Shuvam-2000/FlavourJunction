import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { useEffect, useState } from "react";

const Hero = () => {

    const imgData = [
        {
            url: 'https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg'
        },
        {
            url: 'https://www.foodandwine.com/thmb/jJupeS5vHMkh9TBsJkwdaG1uPY8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Tamarind-Chicken-FT-RECIPE0522-80072d93f7bc4bc7abf1dcf5b5317b0c.jpg'
        },
        {
            url: 'https://www.thespruceeats.com/thmb/fau1kWhyzTAaFRSVIYuDMJ0y7Eo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/blt-wrap-sandwich-479719-hero-01-57705c8c0c6b40da85e3bff657054b07.jpg'
        }
    ];

    const [slider, setSlider] = useState(0);

    const handleSlidePlus = () => {
        setSlider(slider === imgData.length - 1 ? 0 : slider + 1);
    };

    const handleSlideMinus = () => {
        setSlider(slider === 0 ? imgData.length - 1 : slider - 1);
    };


    useEffect(() => {
       const imageSlider = setInterval(() => {
        handleSlidePlus();
       },4000)

       return() => clearInterval((imageSlider))

    },[slider])

  return (
    <>
      <div>
        <div className="w-[90%] mx-auto h-[60vh]">
            <img 
            src={imgData[slider].url} 
            alt="image" 
            className="w-full h-[50vh] rounded opacity-9 sm:h-[80vh]"/>
        </div>
            <h1 className="absolute sm:top-[35%] top-[25%] sm:text-[40px] text-[30px] w-full text-center font-serif sm:text-5xl text-2xl text-slate-200 font-bold">Welcome to <span className="text-black">Flavour</span><span className="text-[#f0b056]">Junction</span></h1>

            <button className="absolute sm:top-[48%] top-[40%] sm:left-[48%] left-[38%] border rounded-lg sm:p-4 p-2 
            border-white font-bold text-white hover:bg-white hover:text-[#f0b056] cursor-pointer" type="button">Order Now</button> 

        <div className="absolute sm:top-1/2 top-1/2 transform -translate-y-1/2  flex justify-between w-full px-5">
            <FaChevronCircleLeft className="sm:w-[50px] w-[40px]" onClick={handleSlidePlus}/>
            <FaChevronCircleRight className="sm:w-[50px]w-[40px] mx-2"onClick={handleSlideMinus}/>
          </div>
      </div>
    </>
  )
}

export default Hero
