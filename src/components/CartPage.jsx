import { useDispatch, useSelector } from "react-redux";
import { remove, increment, decrement } from "../Store/AddToCart"; 
import { useNavigate } from "react-router-dom";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

const CartPage = () => {
  const showFood = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const removeItem = (id) => {
    dispatch(remove({ id }));
  };

  const incrementItem = (id) => {
    dispatch(increment({ id }));
  };

  const decrementItem = (id) => {
    dispatch(decrement({ id }));
  };

  return (
    <>
      <div className="w-[90%] mx-auto mt-[40px] mb-[40px] font-mono min-h-screen">
        <div>
          <h2 className="text-left text-black sm:text-4xl text-xl">
            Your <span className="text-[#fabb02]">Cart:</span>
          </h2>
          <hr className="sm:w-4/4 w-4/4 h-[1.5px] mt-3 mx-2 bg-gray-300" />
        </div>
        {showFood.length > 0 ? (
          <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 py-8 gap-8 cursor-pointer">
            {showFood.map((food) => (
              <div
                key={food.id}
                className="flex justify-center flex-col items-center border border-gray-200 rounded-lg shadow-lg sm:hover:scale-110 transition-all duration-500"
              >
                <div className="mt-8">
                  <img
                    src={food.image}
                    className="w-[200px] rounded-md h-[180px] object-cover"
                    alt={food.name}
                  />
                </div>
                <div className="flex flex-col items-center font-semibold py-2 gap-2">
                  <p className="text-lg uppercase">{food.name}</p>
                  <p className="text-md text-black">Price: {food.price}</p>
                  <p className="text-sm text-black">Category: {food.category}</p>
                  <div className="flex items-center justify-center gap-4 my-2">
                    <CiCircleMinus
                      className="text-2xl cursor-pointer hover:text-[#fabb02] transition duration-200"
                      onClick={() => decrementItem(food.id)}
                    />
                    <p className="text-lg font-semibold text-black">{food.quantity}</p>
                    <CiCirclePlus
                      className="text-2xl cursor-pointer hover:text-[#fabb02] transition duration-200"
                      onClick={() => incrementItem(food.id)}
                    />
                  </div>
                  <button
                    onClick={() => removeItem(food.id)}
                    className="bg-[#fabb02] text-white transition duration-300 font-semibold rounded-md my-4 py-1 px-2 text-xs sm:text-sm w-[150px]"
                  >
                    Remove Item
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center mt-24">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1170/1170627.png"
              alt="Empty cart"
              className="w-[200px] h-[200px] mb-6 mt-4"
            />
            <p className="sm:text-2xl text-xl text-gray-600 mb-4">Your Cart is Empty!!</p>
            <button
              onClick={() => navigate("/exploremore")}
              className="bg-[#fabb02] text-white transition duration-300 font-semibold rounded-md py-2 px-4 text-sm sm:text-md"
            >
              Order Now
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartPage;
