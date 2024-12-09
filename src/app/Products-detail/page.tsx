import Image from 'next/image';
import React from 'react';

const ProductsDetail = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-6 md:p-12 bg-white min-h-screen">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/Rectangle (24).png"
          alt="Nike Air Force 1"
          width={500} // Specify the width
          height={500} // Specify the height
          className="object-contain rounded-lg"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 px-4 md:px-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center md:text-left">
          Nike Air Force 1 PLT.AF.ORM
        </h1>
        <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base lg:text-lg text-center md:text-left">
          Turn style on its head with this construction on the Air Jordan family. It’s inside-out-inspired
          construction, including unique layering and exposed foam accents, offers the one and the timeless
          Nike Air silhouette details that create the dance stitching on the smooth and overall appeal, while
          the unexpected stitching rich mixture of materials and good midsoles overall edge gives the sneaker an
          ultra-fine look.
        </p>
        <div className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">
          ₹ 8 695.00
        </div>
        <div className="flex justify-center md:justify-start">
          <button className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetail;
