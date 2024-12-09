"use client"
import {appostraphe} from '../index'
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const MainPageShoes = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const imagesRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (imagesRef.current) {
      const width = imagesRef.current.offsetWidth;
      if (direction === 'right') {
        setScrollPosition(scrollPosition + width);
      } else {
        setScrollPosition(scrollPosition - width);
      }
    }
  };

  // Update the scroll position based on the state
  useEffect(() => {
    if (imagesRef.current) {
      imagesRef.current.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    }
  }, [scrollPosition]);

  return (
    <div className="bg-white">
      {/* Header Section */}
      <div className="text-center pt-[66px] flex w-full mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-900] w-[219.59px] h-[27px]">Best of Air Max</h1>
        <div className="flex justify-end items-center w-full mt-4 sm:mt-0">
          <p className="text-gray-700 text-lg mr-4">Shop</p>
          <div className="space-x-4">
            <Button className="rounded-full w-[48px] h-[48px] text-2xl sm:text-3xl" variant="outline" onClick={() => handleScroll('left')}>
              &lt;
            </Button>
            <Button className="rounded-full w-[48px] h-[48px] text-2xl sm:text-3xl" variant="outline" onClick={() => handleScroll('right')}>
              &gt;
            </Button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="text-gray-600 body-font">
        <div className="container px-4 py-8">
          {/* Image Cards */}
          <div
            className=" ml-8 flex overflow-hidden scroll-smooth space-x-4 md:space-x-6 "
            ref={imagesRef}
          >
            {/* Card 1 */}
            <div className="min-w-[280px] sm:min-w-[360px] md:min-w-[441.36px]">
              <div className="h-[441.36px] w-full">
                <Image
                  alt="Nike Air Max Pulse"
                  src="/main-shoe-2.png"
                  width={512}
                  height={256}
                  className="object-cover object-center w-full h-full"
                />
              </div>
              <div className='flex text-[#111111] w-[425.36px] h-[48px]'>
              <h2 className="text-[18px] font-medium mt-4 ">Nike Air Max Pulse</h2>
              <p className='lg:ml-[200px] mt-5 sm:mt-10 sm:ml-[0px]'>₹ 13 995</p>
              </div>
              <p className="text-base leading-relaxed mt-2 ">
              Women{appostraphe}s Shoes
              </p>
            </div>

            {/* Card 2 */}
            <div className="min-w-[280px] sm:min-w-[360px] md:min-w-[441.36px]">
              <div className="h-[441.36px] w-full">
                <Image
                  alt="Nike Air Max Pulse"
                  src="/main-shoe-2.png"
                  width={512}
                  height={256}
                  className="object-cover object-center w-full h-full"
                />
              </div>
              <div className='flex text-[#111111] w-[425.36px] h-[48px]'>
              <h2 className="text-[18px] font-medium mt-4 ">Nike Air Max Pulse</h2>
              <p className='lg:ml-[200px] mt-5 sm:mt-10 sm:ml-[0px]'>₹ 13 995</p>
              </div>
              <p className="text-base leading-relaxed mt-2 ">
              Men{appostraphe}s Shoes
              </p>
            </div>

            {/* Card 3 */}
            <div className="min-w-[280px] sm:min-w-[360px] md:min-w-[441.36px]">
              <div className="h-[441.36px] w-full ">
                <Image
                  alt="The 400 Blows"
                  src="/main-shoe-3.png"
                  width={512}
                  height={256}
                  className="object-cover object-center w-full h-full"
                />
              </div>
              <div className='flex text-[#111111] w-[425.36px] h-[48px]'>
              <h2 className="text-[18px] font-medium mt-4 ">Nike Air Max 97 SE</h2>
              <p className='lg:ml-[200px] mt-5 sm:mt-10 sm:ml-[0px]'>₹ 16 995</p>
              </div>
              <p className="text-base leading-relaxed mt-2 ">
              Men{appostraphe}s Shoes
              </p>
            </div>

            {/* Card 4 */}
            <div className="min-w-[280px] sm:min-w-[360px] md:min-w-[441.36px]">
              <div className="h-[441.36px] w-full">
                <Image
                  alt="Future Strides"
                  src="/main-shoe-4.png"
                  width={512}
                  height={256}
                  className="object-cover object-center w-full h-full"
                />
            <div className='flex text-[#111111] w-[431.36px] h-[48px]'>
              <h2 className="text-[18px] font-medium mt-4 ">Nike Air Max SYSTM</h2>
              <p className='lg:ml-[200px] mt-5 sm:mt-10 sm:ml-[0px]'>₹ 16 995</p>
              </div>
              <p className="text-base leading-relaxed mt-2 ">
              Women{appostraphe}s Shoes
              </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPageShoes;
