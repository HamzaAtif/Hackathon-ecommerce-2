
import Image from 'next/image';
import React from 'react'
import { appostraphe } from '../index';

const Cart = () => {
    return (
        <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto bg-white rounded-md overflow-hidden">
          <div className="bg-gray-100 py-4 px-6 border-b border-gray-200">
      <div className="flex justify-between items-center text-sm">
        <div className="text-gray-700 font-medium">
          Free Delivery
          <p className="block text-gray-500">Applies to orders of ₹14,000.00 or more.<span className='underline ml-8 text-gy'>  

          View details
    </span></p>
        </div>

      </div>
    </div>
            {/* Header */}
            <div className="p-6 border-b border-gray-200">
              <h1 className="text-2xl font-bold">Bag</h1>
            </div>
    
            {/* Items */}
            <div className="p-6 space-y-6">
              {/* First Product */}
              <div className="flex items-center gap-4">
                <Image
                  src="/man-1-home.png"
                  alt="Nike Dri-FIT ADV TechKnit Ultra"
                  className="w-24 h-24 object-cover rounded-md"
                  width={100}
                  height={100}
                />
                <div className="flex-1">
                  <h2 className="text-lg font-medium">Nike Dri-FIT ADV TechKnit Ultra</h2>
                  <p className="text-sm text-gray-600">Men{appostraphe}s Short-Sleeve Running Top</p>
                  <p className="text-sm text-gray-600">Ashen Slate/Cobalt Bliss</p>
                  <p className="text-sm text-gray-600">Size: L</p>
                  <p className="mt-2 text-gray-800 font-semibold">MRP: ₹ 3,895.00</p>
                </div>
                <button className="text-red-500 hover:text-red-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
    
              {/* Second Product Placeholder */}
              <div className="flex items-center gap-4">
                <div className="w-24 h-24 bg-gray-200 rounded-md" />
                <div className="flex-1">
                  <h2 className="text-lg font-medium">Nike Air Max 97 SE</h2>
                  <p className="text-sm text-gray-600">Men{appostraphe}s Shoes</p>
                  <p className="text-sm text-gray-600">Flat Pewter/Light Bone/Black/White</p>
                  <p className="text-sm text-gray-600">Size: 8</p>
                  <p className="mt-2 text-gray-800 font-semibold">MRP: ₹ 16,995.00</p>
                </div>
                <button className="text-red-500 hover:text-red-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
    
            {/* Summary */}
            <div className="p-6 border-t border-gray-200">
              <div className="flex justify-between text-lg font-medium">
                <span>Subtotal</span>
                <span>₹ 20,890.00</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>Estimated Delivery & Handling</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-lg font-bold mt-4">
                <span>Total</span>
                <span>₹ 20,890.00</span>
              </div>
              <button className="w-full mt-6 bg-black text-white py-3 rounded-md hover:bg-gray-800">
                Member Checkout
              </button>
            </div>
          </div>
        </div>
      );
}

export default Cart
