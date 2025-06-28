"use client";

const foods = [
  { id: 1, name: "Burger Deluxe", price: "$8.99", image: "/burger.jpg" },
  { id: 2, name: "Cheese Pizza", price: "$12.50", image: "/pizza.jpg" },
  { id: 3, name: "Fried Chicken", price: "$10.00", image: "/chicken.jpg" },
];

const FoodList = () => {
  return (
    <div className="w-full lg:w-[90%] lg:mx-auto mt-8 text-black">
      <h2 className="text-lg font-semibold text-black mb-4">Foods in Store</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {foods.map((food) => (
          <div key={food.id} className="bg-white p-4 rounded-xl shadow-sm text-center">
            <img src={food.image} alt={food.name} className="w-24 h-24 object-cover mx-auto rounded-full mb-2" />
            <h3 className="text-gray-800 font-semibold">{food.name}</h3>
            <p className="text-green-600 font-bold">{food.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodList;
