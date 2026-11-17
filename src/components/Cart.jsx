
import React, { useContext } from 'react'
import { MyShop } from '../context/MyWebsite'

const Cart = () => {

  let {cartItems} = useContext(MyShop)

  const subtotal = cartItems.reduce((total, product) => {
    return total + product.price
  }, 0)

  const shipping = cartItems.length > 0 ? 5 : 0
  const total = subtotal + shipping

  return (
    <div className='min-h-screen bg-gray-100 p-4 sm:p-6'>

      <h1 className='text-2xl sm:text-3xl font-bold mb-6'>
        Your Cart ({cartItems.length} items)
      </h1>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>

        {/* Cart Products */}
        <div className='lg:col-span-2 flex flex-col gap-4'>

          {cartItems.length === 0 ? (
            <p className='text-gray-500 text-center py-10 bg-white rounded-xl'>
              Your cart is empty.
            </p>
          ) : (
            cartItems.map((product) => (
              <div
                key={product.id}
                className='bg-white rounded-xl p-4 flex flex-col sm:flex-row gap-4 sm:items-center shadow-sm'
              >

                <div className='w-full sm:w-28 h-40 sm:h-28 flex-shrink-0 flex items-center justify-center'>
                  <img
                    src={product.image}
                    alt={product.title}
                    className='h-full w-full object-contain'
                  />
                </div>

                <div className='flex-1'>
                  <p className='text-xs text-gray-500 uppercase mb-1'>
                    {product.category}
                  </p>

                  <h2 className='font-semibold text-sm sm:text-base line-clamp-2'>
                    {product.title}
                  </h2>

                  <p className='text-yellow-500 text-sm mt-2'>
                    ★ {product.rating?.rate}
                    <span className='text-gray-400 ml-1'>
                      ({product.rating?.count} reviews)
                    </span>
                  </p>

                  <p className='text-lg font-bold mt-2'>
                    ${product.price.toFixed(2)}
                  </p>
                </div>

                <button className='bg-red-50 text-red-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-100 transition'>
                  Remove
                </button>

              </div>
            ))
          )}

        </div>

        {/* Order Summary */}
        <div className='bg-white rounded-xl p-5 shadow-sm h-fit lg:sticky lg:top-6'>

          <h2 className='text-xl font-bold mb-5'>
            Order Summary
          </h2>

          <div className='flex justify-between mb-4 text-gray-600'>
            <span>Products ({cartItems.length})</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className='flex justify-between mb-4 text-gray-600'>
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>

          <div className='border-t pt-4 flex justify-between font-bold text-lg'>
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button
            disabled={cartItems.length === 0}
            className='w-full bg-black text-white py-3 rounded-xl mt-6 font-medium hover:bg-gray-800 transition disabled:bg-gray-400'
          >
            Proceed to Checkout
          </button>

        </div>

      </div>

    </div>
  )
}

export default Cart
