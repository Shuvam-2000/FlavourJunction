import { prodcutData } from "../Data/aboutdata";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutUS = () => {

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
          <p className="text-xs sm:text-xl mb-4 mx-auto text-gray-900 mt-8 text-center sm:max-w-3xl tracking-wider sm:font-mono font-medium">
            We build innovative products & solutions that deliver unparalleled convenience to urban consumers
          </p>
          <h2 className="sm:text-4xl text-2xl mb-2 font-mono text-center text-gray-900 mt-14 tracking-wider">
            Where Do<span className="text-yellow-500"> We Belong?</span>
          </h2>
          <p className="text-center mt-5 font-mono sm:tracking-wider text-gray-600">Our Corporate Solutions:</p>
          <div className="py-10">
            <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 py-8 gap-8">
              {prodcutData.map((item) => (
              <div className="bg-[white] cursor-pointer border border-gray-200 rounded-lg shadow-lg" key={item.id}>
                <div className="flex justify-center items-center sm:pt-6 pt-6">
                  <img src={item.url} alt="slider image" className="w-[200px] rounded-full h-[200px] object-cover"/>
                </div>
                <div className="flex flex-col justify-center items-center gap-2 p-4">
                  <p className="text-xl font-bold">{item.title}</p>
                  <button className="border w-[120px] bg-[#fabb02] text-white font-bold rounded-md my-6 py-[8px] text-[12px] sm:hover:scale-110 transition-all duration-500">Explore</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default AboutUS;
