import Image from 'next/image';
import React from 'react';
import { Button } from "@/components/ui/button"

const MainPageShoe = () => {
    return (
        <div className="flex justify-center bg-white items-center flex-col px-4 sm:px-6 lg:px-10">
            {/* Image Section */}
            <div className="relative w-full max-w-[1244px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
                <Image
                    src="/Main-page-shoe.png"
                    alt="pulse shoe"
                    layout="fill"
                    objectFit="cover" // Adjusts to keep the image content proportional
                />
            </div>

            {/* Content Section */}
            <div className="flex flex-col items-center justify-center text-center mt-6 sm:mt-8 md:mt-10">
                {/* Title */}
                <h1 className="text-[16px] sm:text-[19px] font-medium">First Look</h1>

                {/* Main Heading */}
                <h1 className="mt-3 text-[30px] sm:text-[40px] md:text-[50px] font-bold">
                    NIKE AIR MAX PULSE
                </h1>

                {/* Description */}
                <p className="mt-4 sm:mt-6 md:mt-8 text-[#111111] leading-6 font-normal text-[12px] sm:text-[14px] md:text-[15px] max-w-[300px] sm:max-w-[400px] md:max-w-[511px]">
                    Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
                    —designed to push you past your limits and help you go to the max.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                    <Button className="rounded-full">Notify Me</Button>
                    <Button className="rounded-full">Shop Air Max</Button>
                </div>
            </div>
        </div>
    );
};

export default MainPageShoe;
