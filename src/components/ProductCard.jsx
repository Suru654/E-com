import React, { useContext } from 'react'
import { MyShop } from "../context/MyWebsite";

const ProductCard = ({ product }) => {

  let {setCartItems} = useContext(MyShop)

  return (
    <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
      {/* Image Section */}
      <div className="relative h-64 bg-gray-50 p-6 flex items-center justify-center">
        {/* Category */}
        <span className="absolute top-4 left-4 bg-black text-white text-xs px-3 py-1.5 rounded-full capitalize">
          {product.category}
        </span>

        {/* Wishlist */}
        <button className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white shadow flex items-center justify-center hover:bg-red-50 transition">
          ♡
        </button>

        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Product Information */}
      <div className="p-5">
        <h2 className="text-lg font-semibold text-gray-900 line-clamp-1">
          {product.title}
        </h2>

        <p className="text-sm text-gray-500 mt-2 leading-relaxed line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-4">
          <div className="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-1 rounded-md text-sm font-medium">
            ★ {product.rating.rate}
          </div>

          <span className="text-sm text-gray-400">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mt-5">
          <div>
            <p className="text-xs text-gray-400">Price</p>
            <h3 className="text-2xl font-bold text-gray-900">
              ${product.price}
            </h3>
          </div>

          <button onClick={()=> setCartItems(prev => [...prev, product])} className="bg-black text-white px-3 py-2 sm:px-5 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium hover:bg-gray-800 active:scale-95 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
