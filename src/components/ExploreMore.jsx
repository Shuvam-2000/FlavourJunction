import { OurFood } from "../Data/ourFood";
import { useState } from "react";

const ExploreMore = () => {

  const [filterFood, setFilterFood] =useState(OurFood)
  const [originalFood] = useState(OurFood);  // making a copy of the originl data

    // filter by price
    const filterByTwoHundred = () => {
        const filterItem = originalFood.filter((item) => {
                              return(
                                item.price <= '₹200'
                              )
        })
        setFilterFood(filterItem)
      }

    const filterByFourHundred = () => {
        const filterItem = originalFood.filter((item) => {
                              return(
                                item.price > '₹200' && item.price <='₹500'
                              )
        })
        setFilterFood(filterItem)
      }

    const filterByEightHundred = () => {
        const filterItem = originalFood.filter((item) => {
                              return(
                                item.price > '₹500' && item.price <= '₹850'
                              )
        })
        setFilterFood(filterItem)
      }

    const filterByNineHundred = () =>{
        const filterItem = originalFood.filter((item) => {
                              return(
                                item.price > '₹850'
                              )
        })
        setFilterFood(filterItem)
      }

    // show all products
    const allProducts = () => {
        setFilterFood(originalFood)
      }

    // filter by categories
    const filterByChicken = () => {
        const categories = originalFood.filter((item) => {
                          return(
                            item.category == 'chicken'
                          )
        })
        setFilterFood(categories);
      };

    const filterByPizza = () => {
        const categories = originalFood.filter((item) => {
                          return(
                            item.category == 'pizza'
                          )
        })
        setFilterFood(categories);
      };
 
  return (
    <>
      <div className="w-[90%] mx-auto mt-[40px] font-serif">
        <div>
          <h2 className="text-center text-black sm:text-4xl text-2xl font-bold py-5 pb-10">Explore <span className="text-[#fabb02]">Our Meals</span></h2>
            <div className="text-center flex flex-wrap sm:gap-6 gap-4 justify-evenly mb-6">
              <button className="border border-[#fabb02] text-black py-2 px-4 rounded-md font-medium hover:bg-[#fabb02] hover:text-white transition duration-300 text-sm sm:text-base" onClick={allProducts}>All Products</button>
              <button className="border border-[#fabb02] text-black py-2 px-4 rounded-md font-medium hover:bg-[#fabb02] hover:text-white transition duration-300 text-sm sm:text-base" onClick={filterByTwoHundred}>Rs 200</button>
              <button className="border border-[#fabb02] text-black py-2 px-4 mx-2 rounded-md font-medium hover:bg-[#fabb02] hover:text-white transition duration-300 text-sm sm:text-base" onClick={filterByFourHundred}>Rs 600</button>
              <button className="border border-[#fabb02] text-black py-2 px-4 rounded-md font-medium hover:bg-[#fabb02] hover:text-white transition duration-300 text-sm sm:text-base" onClick={filterByEightHundred}>Rs 850</button>
              <button className="border border-[#fabb02] text-black py-2 px-4 rounded-md font-medium hover:bg-[#fabb02] hover:text-white transition duration-300 text-sm sm:text-base" onClick={filterByNineHundred}>Rs 900</button>
              <button className="border border-[#fabb02] text-black py-2 px-4 rounded-md font-medium hover:bg-[#fabb02] hover:text-white transition duration-300 text-sm sm:text-base" onClick={filterByChicken}>Chicken</button>
              <button className="border border-[#fabb02] text-black py-2 px-4 rounded-md font-medium hover:bg-[#fabb02] hover:text-white transition duration-300 text-sm sm:text-base" onClick={filterByPizza}>Pizza</button>
            </div>
        </div>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 py-14 gap-4">
          {
            filterFood.map((food) => (
              <div key={food.id} className="flex justify-center flex-col items-center">
                <div>
                  <img src={food.image} alt={food.name} className="w-[180px] rounded-md h-[160px] object-cover"/>
                </div>
                <div className="flex flex-col items-center font-semibold uppercase py-2 gap-2">
                  <p className="text-lg">{food.name}</p>
                  <p className="text-md text-black">{food.price}</p>
                  <p className="text-sm text-black">{food.category}</p>
                  <button className="border border-[#fabb02] text-black hover:bg-[#fabb02] hover:text-white transition duration-300 font-semibold rounded-md my-4 py-2 text-sm md:text-base w-[150px]">Add To Cart</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
}

export default ExploreMore;
