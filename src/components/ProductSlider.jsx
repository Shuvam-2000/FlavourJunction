import { topPicks } from "../Data/data.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ProductSlider = () => {
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

  return (
    <>
      <div className="w-[90%] mx-auto font-serif">
        <h2 className="font-bold text-4xl text-center">What's on <span className="text-[#fabb02]">your mind?</span></h2>
        <div className="py-20">
        <Slider {...settings}>
          {topPicks.map((item) => (
            <div className="bg-[white] rounded-md" key={item.id}>
              <div className="flex justify-center items-center rounded-t-xl">
                <img src={item.img} alt="slider image" className="w-[200px] rounded-full h-[200px] object-cover"/>
              </div>
                <div className="flex flex-col justify-center items-center gap-2 p-4">
                  <p className="text-xl font-semibold">{item.title}</p>
                  <p className="text-xl font-semibold">{item.price}</p>
                  <button className="bg-yellow-500 w-[100px] hover:bg-yellow-600 text-white 
                  font-semibold rounded-md my-6 py-[15px] text-[12px]">Add To Cart</button>
                </div>
              </div>
            ))}
            </Slider>
          </div>
      </div>
    </>
  );
};

export default ProductSlider;
