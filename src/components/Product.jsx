import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/cartSlice";
import { toast } from "react-hot-toast";
// import {add, remove} from

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed successfully");
  };

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added successfully");
  };

  return (
    <div
      className="flex flex-col items-center justify-between hover:scale-110 
    transition duration-300 ease-in shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] gap-3 p-4 mt-10 ml-5 rounded-xl"
    >
      <div className="">
        <p className="text-gray-700 font-semibold text-lg truncate w-40 mt-1">
          {post.title.split(" ").slice(0, 4).join(" ") + "..."}
        </p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
          {post.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>
      <div className="h-[180px]">
        <img className="h-full w-full" src={post.image} />
      </div>

      <div className="flex gap-12 items-center w-full mt-5 justify-between">
        <div>
          <p className="text-green-600 font-semibold">${post.price}</p>
        </div>

        {cart.some((p) => p.id === post.id) ? (
          <button
            className="text-gray-700 p-1 px-3 uppercase text-[12px] border-2 font-semibold border-gray-700 rounded-full hover:bg-gray-700 hover:text-white   transition duration-300 ease-in"
            onClick={removeFromCart}
          >
            Remove Item
          </button>
        ) : (
          <button
            className="text-gray-700 p-1 px-3 uppercase text-[12px] border-2 font-semibold border-gray-700 rounded-full hover:bg-gray-700 hover:text-white   transition duration-300 ease-in"
            onClick={addToCart}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
