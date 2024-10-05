import { OurFood } from "../Data/ourFood";
import { useState } from "react";
import { add } from "../Store/AddToCart.jsx"
import { useDispatch } from "react-redux";

const ExploreMore = () => {

  const [filterFood, setFilterFood] = useState(OurFood);
  const [originalFood] = useState(OurFood);
  const [showFilters, setShowFilters] = useState(false);  // State to toggle filters visibility

  // Toggle the filter display
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  // filter by price
  const filterByTwoHundred = () => {
    const filterItem = originalFood.filter((item) => item.price <= '₹200');
    setFilterFood(filterItem);
  };

  const filterByFourHundred = () => {
    const filterItem = originalFood.filter((item) => item.price > '₹200' && item.price <= '₹500');
    setFilterFood(filterItem);
  };

  const filterByEightHundred = () => {
    const filterItem = originalFood.filter((item) => item.price > '₹500' && item.price <= '₹850');
    setFilterFood(filterItem);
  };

  const filterByNineHundred = () => {
    const filterItem = originalFood.filter((item) => item.price > '₹850');
    setFilterFood(filterItem);
  };

  const allProducts = () => {
    setFilterFood(originalFood);
  };

  const filterByChicken = () => {
    const categories = originalFood.filter((item) => item.category === 'chicken');
    setFilterFood(categories);
  };

  const filterByPizza = () => {
    const categories = originalFood.filter((item) => item.category === 'pizza');
    setFilterFood(categories);
  };

  const dispatch = useDispatch()

  const addToCart = (FoodItem) => {
    dispatch(add(FoodItem))
  }

  return (
    <>
      <div className="w-[90%] mx-auto mt-[40px] mb-[40px] font-mono">
        <div>
          <h2 className="text-center text-black sm:text-4xl text-2xl font-bold py-5 pb-10">
            Explore <span className="text-[#fabb02]">Our Meals</span>
          </h2>

          {/* Filter button for mobile */}
          <div className="sm:hidden mb-4 text-center">
            <button
              className="border border-[#fabb02] text-white py-2 px-4 rounded-md font-medium bg-[#fabb02] text-sm"
              onClick={toggleFilters}
            >
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
          </div>

          {/* Filters Section */}
          <div
            className={`${
              showFilters ? 'block' : 'hidden'
            } sm:block mb-6`}  // Hidden by default on mobile, shown on larger screens
          >
            <div className="flex flex-wrap sm:gap-6 gap-4 justify-evenly sm:overflow-hidden overflow-x-auto">
              <button
                className="border border-[#fabb02] text-white py-2 px-4 rounded-md font-medium bg-[#fabb02] transition duration-300 text-sm sm:text-base"
                onClick={allProducts}
              >
                All Products
              </button>
              <button
                className="border border-[#fabb02] text-white py-2 px-4 rounded-md font-medium bg-[#fabb02] transition duration-300 text-sm sm:text-base"
                onClick={filterByTwoHundred}
              >
                Rs 200
              </button>
              <button
                className="border border-[#fabb02] text-white py-2 px-4 mx-2 rounded-md font-medium bg-[#fabb02] transition duration-300 text-sm sm:text-base"
                onClick={filterByFourHundred}
              >
                Rs 600
              </button>
              <button
                className="border border-[#fabb02] text-white py-2 px-4 rounded-md font-medium bg-[#fabb02] transition duration-300 text-sm sm:text-base"
                onClick={filterByEightHundred}
              >
                Rs 850
              </button>
              <button
                className="border border-[#fabb02] text-white py-2 px-4 rounded-md font-medium bg-[#fabb02] transition duration-300 text-sm sm:text-base"
                onClick={filterByNineHundred}
              >
                Rs 900
              </button>
              <button
                className="border border-[#fabb02] text-white py-2 px-4 rounded-md font-medium bg-[#fabb02] transition duration-300 text-sm sm:text-base"
                onClick={filterByChicken}
              >
                Chicken
              </button>
              <button
                className="border border-[#fabb02] text-white py-2 px-4 rounded-md font-medium bg-[#fabb02] transition duration-300 text-sm sm:text-base"
                onClick={filterByPizza}
              >
                Pizza
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 py-8 gap-8 cursor-pointer">
          {filterFood.map((food) => (
            <div key={food.id} className="flex justify-center flex-col items-center border border-gray-200 rounded-lg shadow-lg">
              <div className="mt-8">
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-[200px] rounded-md h-[180px] object-cover"
                />
              </div>
              <div className="flex flex-col items-center font-semibold py-2 gap-2">
                <p className="text-lg uppercase">{food.name}</p>
                <p className="text-md text-black">Price: {food.price}</p>
                <p className="text-sm text-black">Category: {food.category}</p>
                <button onClick={() => addToCart(food)} className="bg-[#fabb02] text-white font-semibold rounded-md my-4 py-1 px-2 text-xs sm:text-sm w-[150px] sm:hover:scale-110 transition-all duration-500">
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExploreMore;
