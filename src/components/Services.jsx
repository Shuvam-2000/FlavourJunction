import { useNavigate } from "react-router-dom";
import servicesData from "../Data/ServicesData.js"; 

const Services = () => {
  const navigate = useNavigate(); 

  return (
    <>
      <div className="w-[90%] mx-auto mt-10 mb-10 font-mono min-h-screen">
        <div className="mb-6">
          <h2 className="text-left text-black sm:text-4xl text-2xl font-bold">
            Our <span className="text-[#fabb02]">Services</span>
          </h2>
          <hr className="w-full h-[2px] mt-3 bg-gray-300" />
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              onClick={() => navigate(service.path)} 
              className="flex flex-col items-center text-center border border-gray-200 rounded-lg shadow-lg sm:hover:shadow-xl transition-transform duration-300 hover:scale-105 p-8 cursor-pointer"
            >
              <div className="flex items-center justify-center mb-4">
                <span className="text-4xl">{service.icon}</span>
              </div>
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
