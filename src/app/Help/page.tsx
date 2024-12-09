import React from "react"
import { appostraphe } from "../index";
import Image from "next/image";

const Help = () => {
    return (
      <div className="bg-white text-black min-h-screen p-6 md:p-12">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold">GET HELP</h1>
          <input
            type="text"
            placeholder="What can we help you with?"
            className="w-[457.33px] h-[56px] md:w-1/2 mt-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
        </header>
  
        {/* Content */}
        <div className="flex flex-col md:flex-row ">
          {/* Left Section */}
          <div className="flex-1 border-r gap-[40px]">
            <h2 className="text-xl font-bold mb-4 text-[28px]">
              WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
            </h2>
            <p className="mb-4 text-sm text-gray-700">
              We want to make buying your favorite Nike shoes and gear online fast
              and easy, and we accept the following payment options:
            </p>
            <ul className="text-sm text-gray-700 mb-4 ">
              <li>Visa, Mastercard, Diners Club, Discover, American Express</li>
              <li>Visa Electron, Maestro</li>
            </ul>
            <p className="text-sm text-gray-700 mb-4">
              If you enter your PAN information at checkout, you{appostraphe}ll be able to
              pay for your order with PayTM or a local credit or debit card.
            </p>
            <p className="text-sm text-gray-700 mb-4">
              Nike Members can store multiple debit or credit cards in their
              profile for faster checkout. If you{appostraphe}re not already a Member,{" "}
              <a href="#" className="font-medium text-black underline">
                join us today
              </a>
              .
            </p>
            <div className="flex gap-4 mb-6">
              <button className="bg-black text-white px-6 py-2 rounded-full text-sm">
                JOIN US
              </button>
              <button className="bg-black text-white px-6 py-2 rounded-full text-sm">
                SHOP NIKE
              </button>
            </div>
            <h3 className="font-bold text-lg mb-4">FAQs</h3>
            <div className="text-sm text-gray-700 space-y-4">
              <p>
                <strong className="text-black">Does my card need international purchases enabled?</strong>{" "}
                </p>
                <p>
                Yes, we recommend asking your bank to enable international
                purchases on your card. You will be notified at checkout if
                international purchases need to be enabled.
              </p>
              <p>
                <strong className="text-black">Can I pay for one order with multiple methods?</strong>{" "}
                </p>
                <p>
                No, payment for Nike orders can{appostraphe}t be split between multiple
                payment methods.
              </p>
              <p>
                <strong className="text-black">
                  What payment method is accepted for SNKRS orders?
                </strong>{" "}
                </p>
                <p>
                You can use any accepted credit card to pay for your SNKRS order.
              </p>
              <p>
                <strong className="text-black">Why don{appostraphe}t I see Apple Pay as an option?</strong>
                </p>
                <p>
                 To see Apple Pay as an option in the Nike App or on Nike.com, you{appostraphe}ll need
                to use a compatible Apple device running the latest OS, be signed
                in to your iCloud account and have a supported card in your
                Wallet. Additionally, you{appostraphe}ll need to use Safari to use Apple Pay
                on Nike.com.
              </p>
              <div className="mt-8">
                                  {/* Feedback Section */}
      <div className="text-sm text-gray-700">
        <p className="mb-4">Was this answer helpful?</p>
        <div className="flex items-center space-x-4 ">
          <Image
            src={"/thumbsupordown.PNG"}
            alt="Thumbs Up"
            width={60}
            height={30}
            className="cursor-pointer "
          />
        </div>
      </div>


          </div>
                {/* Related Section */}
                      <div className="mt-6">
        <p className="text-sm font-bold text-gray-600 mb-2">RELATED</p>
        <ul className="space-y-2 ml-[30px]">
          <li>
            <a
              href="#"
              className="text-sm text-black underline"
            >
              WHAT ARE NIKE{appostraphe}S DELIVERY OPTIONS?
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm text-black underline"
            >
              HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
            </a>
          </li>
        </ul>
      </div>
            </div>
          </div>
  
          {/* Right Section */}
          <div className="w-[313.25px] h-[42px] md:w-1/3 ml-4 text-center">
            <h3 className="font-bold text-lg mb-4 ">CONTACT US</h3>
            <Image
            src={"/mobile.png"}
            alt="mobile"
            width={50}
            height={50}
            className="relative mx-auto"
            />
            <div className="space-y-4 text-sm text-gray-700">
              <p className="mt-4 mb-4">
                <strong className="mb-6">000 800 919 0566</strong> <br />
                Products & Orders: 24 hours a day, 7 days a week <br />
                Company Info & Enquiries: 07:30 - 16:30, Monday - Friday
              </p>
              </div>
              <div className="mt-[100px] mb-[100px] text-[16px]">
              <Image
            src={"/camera.PNG"}
            alt="mobile"
            width={60}
            height={0}
            className="relative mx-auto"
            />
              <p className="font-medium">24 hours a day, </p>
             <p className="text-gray-700">7 days a week</p>
             </div>
             <div>
             <Image
            src={"/sms.PNG"}
            alt="mobile"
            width={60}
            height={0}
            className="relative mx-auto">
            </Image>
            <p className="font-medium">We{appostraphe}ll reply within  </p>
            <p className="text-gray-700">five business days</p>
              
              </div>
              <div className="mt-[100px]">
              <Image
            src={"/baloon-nike.PNG"}
            alt="mobile"
            width={60}
            height={0}
            className="relative mx-auto">
            </Image>
                <strong>STORE LOCATOR</strong> <br />
                <p>Find Nike retail stores near you
              </p>
              </div>


    </div>
        </div>
        
      </div>
    );
}

export default Help
