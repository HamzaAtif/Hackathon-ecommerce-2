"use client";
import { appostraphe } from '../index';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Gearup = () => {
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
      <div className="text-center pt-[66px] flex w-full mx-auto px-4 mt-[50px]">
        <h1 className="text-2xl font-medium text-gray-900 w-[219.59px] h-[27px] mb-[30px]">
          Gear Up
        </h1>
        <div className="flex justify-end items-center w-full mt-4 sm:mt-0">
          <p className="text-gray-700 text-lg mr-4">Shop Men{appostraphe}s</p>
          <div className="space-x-4 flex">
            <Button
              className="rounded-full w-[48px] h-[48px] text-2xl sm:text-3xl"
              variant="outline"
              onClick={() => handleScroll('left')}
            >
              &lt;
            </Button>
            <Button
              className="rounded-full w-[48px] h-[48px] text-2xl sm:text-3xl"
              variant="outline"
              onClick={() => handleScroll('right')}
            >
              &gt;
            </Button>
          </div>
        </div>
        <div className="flex justify-end items-center w-full mt-4 sm:mt-0">
          <p className="text-gray-700 text-lg mr-4">Shop Women{appostraphe}s</p>
          <div className="space-x-4">
            <Button
              className="rounded-full w-[48px] h-[48px] text-2xl sm:text-3xl"
              variant="outline"
              onClick={() => handleScroll('left')}
            >
              &lt;
            </Button>
            <Button
              className="rounded-full w-[48px] h-[48px] text-2xl sm:text-3xl"
              variant="outline"
              onClick={() => handleScroll('right')}
            >
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
            className="ml-2 flex overflow-hidden scroll-smooth space-x-4 md:space-x-6"
            ref={imagesRef}
          >
            <div className="flex gap-[20px]">
              {/* Card 1 */}
              <div className="min-w-[300px] max-w-[350px] ml-[50px]">
                <div className="h-[300px] w-full relative">
                  <Image
                    alt="Nike Air Max Pulse"
                    src="/man-1-home.png"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                    priority
                  />
                </div>
                <div className="text-[#111111] w-full h-[48px] mt-4 flex justify-between items-center sm:flex-col ">
                  <h2 className="text-[16px] font-medium">Nike Dri-FIT ADV TechKnit Ultra</h2>
                  <p className="text-sm">₹ 3 895</p>
                </div>
                <p className="mt-2">Men{appostraphe}s Short-Sleeve Running Top</p>
              </div>

              {/* Card 2 */}
              <div className="min-w-[300px] max-w-[350px] mr-[100px]">
                <div className="h-[300px] w-full relative">
                  <Image
                    alt="Nike Air Max Pulse"
                    src="/man-2-home.png"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                    priority
                  />
                </div>
                <div className="text-[#111111] w-full h-[48px] mt-4 flex justify-between items-center sm:flex-col">
                  <h2 className="text-[16px] font-medium">Nike Dri-FIT Challenger</h2>
                  <p className="text-sm">₹ 2 495</p>
                </div>
                <p className="mt-2">Men{appostraphe}s 18cm (approx.) 2-in-1 Shorts</p>
              </div>

              {/* Card 3 */}
              <div className="min-w-[300px] max-w-[350px]">
                <div className="h-[300px] w-full relative">
                  <Image
                    alt="Nike Air Max Pulse"
                    src="/girl-1.png"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                    priority
                  />
                </div>
                <div className="text-[#111111] w-full h-[48px] mt-4 flex justify-between items-center sm:flex-col">
                  <h2 className="text-[16px] font-medium">Nike Dri-FIT ADV Run Division</h2>
                  <p className="text-sm">₹ 5 295</p>
                </div>
                <p className="mt-2">Women{appostraphe}s Long-Sleeve Running Top</p>
              </div>

              {/* Card 4 */}
              <div className="min-w-[300px] max-w-[350px]">
                <div className="h-[300px] w-full relative">
                  <Image
                    alt="Nike Air Max Pulse"
                    src="/girl-2.png"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                    priority
                  />
                </div>
                <div className="text-[#111111] w-full h-[48px] mt-4 flex justify-between items-center sm:flex-col">
                  <h2 className="text-[16px] font-medium">Nike Fast</h2>
                  <p className="text-sm">₹ 3 795</p>
                </div>
                <p className="mt-2">Women{appostraphe}s Mid-Rise Running Leggings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gearup;
