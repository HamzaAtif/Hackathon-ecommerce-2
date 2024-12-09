import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import { appostraphe } from '../index';

const DontMiss = () => {
  return (
    <div>
      <div>
        <h1 className="text-[30px] font-medium text-gray-900 w-[219.59px] h-[27px] mb-4 mt-20 ml-12">
          Don{appostraphe}t Miss
        </h1>
      </div>
      <div className="flex justify-center bg-white items-center flex-col mt-[50px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="relative w-full max-w-[1400px] h-[400px] sm:h-[500px] md:h-[600px]">
          <Image
            src="/black-jacket-man.png"
            alt="pulse shoe"
            layout="fill"
            objectFit="cover" // Or "contain" depending on your preference
          />
        </div>
        <div className="flex flex-col items-center justify-center mt-8">
          <div className="h-[60px]">
            <h1 className="mt-3 text-[32px] sm:text-[40px] md:text-[50px] text-center">
              FLIGHT ESSENTIALS
            </h1>
          </div>
          <p className="mt-[20px] sm:mt-[30px] text-[#111111] leading-6 flex items-center font-normal text-[15px] text-center max-w-[90%] sm:max-w-[70%] md:max-w-[531px] mb-5">
            Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
          </p>
          <div className="h-[45px] mt-4">
            <Button className="rounded-full mr-3">Shop</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DontMiss;
