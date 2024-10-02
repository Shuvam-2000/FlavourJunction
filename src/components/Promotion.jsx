const Delivery = () => {
    return (
      <>
        <div className="w-full py-8 px-4">
          <h3 className="text-[#fabb02] font-mono sm:text-3xl text-xl text-center pb-10">Get Your Delicious & <span className="text-black">Healthy Meal</span></h3>
          <div className="flex justify-center items-center flex-col mb-12">
            <img className="w-[200px] sm:w-[400px]" src="https://media.designrush.com/inspiration_images/256686/conversions/Food_Delivery_3_c6e96ba529ad-mobile.jpg" alt="Food Delivery" />
            <h1 className="font-mono sm:text-2xl text-sm text-center mx-10 my-4"><span className="text-[#fabb02]">Download The App</span> & Get Your Favorite Food Quickly</h1>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold sm:py-3 sm:px-4 py-3 px-2 text-xs sm:text-sm rounded">Download Now</button>
            <div className="mt-4 border-black"></div>
          </div>
        </div>
      </>
    )
  }
  
  export default Delivery