import { prodcutData } from "../Data/aboutdata";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const AboutUS = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  // image for the hero section
  const imgData = [
    {
      url: 'https://blog.spacematrix.com/sites/default/files/styles/resp_large_breakpoints_theme_archi_dark_wide_1x/public/blog/Resized%20Images-05%20%285%29.jpg'
    }
  ];

  return (
    <>
      <div className="w-[90%] mx-auto h-[100%] mb-10 font-serif">
        <img 
          src={imgData[0].url} 
          alt="Company About Image" 
          className="w-full h-[50vh] rounded sm:h-[80vh] object-cover"
        />
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center">
          <h1 className="text-black font-bold sm:text-5xl text-xl sm:mt-8 mt-0">
            Welcome to <span className="text-white sm:text-5xl text-xl">Flavour</span><span className="text-[#f0b056]">Junction</span>
          </h1>
          <p className='text-white font-bold sm:text-3xl text-xl sm:mt-6 mt-2'>
            Join Us!!
          </p>
          <div className="sm:mt-6 mt-4 flex flex-col items-center">
            <input 
              type="text" 
              placeholder="Search for jobs..." 
              className="sm:w-[400px] p-1 mb-2 sm:mb-4 rounded-md border border-gray-300 text-center"
            />
            <button 
              className="w-[100px] sm:w-[200px] p-1 bg-[#fabb02] text-white rounded-md font-bold hover:bg-[#f0b056]">
              Search
            </button>
          </div>
        </div>
        <div>
          <p className="text-xl sm:text-xl mb-4 mx-auto text-gray-900 mt-8 text-center sm:max-w-3xl">
            We build innovative products & solutions that deliver unparalleled convenience to urban consumers
          </p>
          <h2 className="sm:text-4xl text-2xl mb-4font-medium text-gray-900 mt-8">
            Where Do<span className="text-yellow-500"> We Belong?</span>
          </h2>
          <div className="py-10">
            <Slider {...settings}>
              {prodcutData.map((item) => (
              <div className="bg-[white] rounded-md cursor-pointer" key={item.id}>
                <div className="flex justify-center items-center sm:pt-6 pt-6">
                  <img src={item.url} alt="slider image" className="w-[200px] rounded-full h-[200px] object-cover"/>
                </div>
                <div className="flex flex-col justify-center items-center gap-2 p-4">
                  <p className="text-xl font-bold">{item.title}</p>
                  <button className="border border-[#fabb02] w-[120px] hover:bg-[#fabb02] hover:text-white text-black
                  duration-300 font-bold rounded-md my-6 py-[15px] text-[12px]">Explore</button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        </div>
      </div>
    </>
  );
};

export default AboutUS;
