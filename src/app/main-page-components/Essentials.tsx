import Image from 'next/image';
import React from 'react';
import { appostraphe } from '../index';

const Essentials = () => {
  return (
    <div>
      <div>
        <h1 className="text-xl font-medium text-gray-900 w-[219.59px] h-[27px] mb-4 mt-20 ml-12">
          The Essentials
        </h1>
      </div>
      <div className="flex justify-center bg-white items-center flex-col mt-[50px] px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Image Section */}
        <div className="flex flex-wrap gap-5 justify-center">
          <div className="relative w-[440px] h-[540px]">
            <Image
              src="/essentials-1.png"
              alt="essentials item 1"
              layout="fill"
              objectFit="cover" // Or "contain" depending on your preference
            />
          </div>
          <div className="relative w-[440px] h-[540px]">
            <Image
              src="/essentials-2.png"
              alt="essentials item 2"
              layout="fill"
              objectFit="cover" // Or "contain" depending on your preference
            />
          </div>
          <div className="relative w-[440px] h-[540px]">
            <Image
              src="/essentials-3.png"
              alt="essentials item 3"
              layout="fill"
              objectFit="cover" // Or "contain" depending on your preference
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="flex flex-wrap justify-center gap-8 mt-[70px] ml-0 sm:ml-[30px]">
          {/* Icons Section */}
          <div>
            <h3 className="font-medium text-[20px]">Icons</h3>
            <div className="text-[16px] text-gray-500 space-y-4 mt-4">
              <p>Air Force 1</p>
              <p>Huarache</p>
              <p>Air Max 90</p>
              <p>Air Max 95</p>
            </div>
          </div>

          {/* Shoes Section */}
          <div>
            <h3 className="font-medium text-[20px]">Shoes</h3>
            <div className="text-[16px] text-gray-500 space-y-4 mt-4">
              <p>All Shoes</p>
              <p>Custom Shoes</p>
              <p>Jordan Shoes</p>
              <p>Running Shoes</p>
            </div>
          </div>

          {/* Clothing Section */}
          <div>
            <h3 className="font-medium text-[20px]">Clothing</h3>
            <div className="text-[16px] text-gray-500 space-y-4 mt-4">
              <p>All Clothing</p>
              <p>Modest Wear</p>
              <p>Hoodies & Pullovers</p>
              <p>Shirts & Tops</p>
            </div>
          </div>

          {/* Kids Section */}
          <div>
            <h3 className="font-medium text-[20px]">Kids{appostraphe}</h3>
            <div className="text-[16px] text-gray-500 space-y-4 mt-4">
              <p>Infant & Toddler Shoes</p>
              <p>Kids{appostraphe} Shoes</p>
              <p>Kids{appostraphe} Jordan Shoes</p>
              <p>Kids{appostraphe} Basketball Shoes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Essentials;
