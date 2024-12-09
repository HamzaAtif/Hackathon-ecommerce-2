// pages/checkout.js
import Image from 'next/image';
import React from 'react';

const Checkout = () => {
  return (
    <div className="bg-white text-black min-h-screen p-6 md:p-12">
      {/* Content */}
      <div className="flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="flex-1 border-r gap-[40px]">
          <div className="min-h-screen bg-white text-gray-900 font-sans">
            <div className="max-w-5xl mx-auto px-6 py-8">
              {/* Header */}
              <h1 className="text-2xl font-semibold mb-4">How would you like to get your order?</h1>
              <p className="text-sm text-gray-600 mb-6">
                Customs regulations for India require a copy of the recipients KYC. The address on the KYC
                needs to match the shipping address. Our courier will contact you via SMS/email to obtain a
                copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing
                customs (including sharing it with customs officials) for all orders and returns. If your KYC
                does not match your shipping address, please click the link for more information.
                <a href="#" className="text-blue-600 underline ml-1">Learn More</a>.
              </p>

              {/* Deliver It Section */}
              <button className="w-[440px] h-[82px] flex items-center border border-gray-400 rounded-lg px-4 py-3 mb-8 hover:shadow-lg">
                <Image src="/deliver.PNG" alt="Deliver Icon" className="w-6 h-6 mr-3" width={100} height={100} />
                Deliver It
              </button>

              {/* Address Form */}
              <div>
                <h2 className="text-lg font-semibold mb-4">Enter your name and address:</h2>
                <form className="space-y-4">
                  <div>
                    <input
                      placeholder="First Name"
                      type="text"
                      className="mt-1 block w-[440px] h-[56px] border border-gray-300 rounded-lg p-2"
                    />
                  </div>
                  <div>
                    <input
                      placeholder="Last Name"
                      type="text"
                      className="mt-1 block w-[440px] h-[56px] border border-gray-300 rounded-lg p-2"
                    />
                  </div>
                  <div>
                    <input
                      placeholder="Address Line 1"
                      type="text"
                      className="mt-1 block w-[440px] h-[56px] border border-gray-300 rounded-lg p-2"
                    />
                    <p className="text-gray-400 text-[11px]">We do not ship to P.O. boxes</p>
                  </div>
                  <div>
                    <input
                      placeholder="Address Line 2"
                      type="text"
                      className="w-[440px] h-[56px] mt-1 block border border-gray-300 rounded-lg p-2"
                    />
                  </div>
                  <div>
                    <input
                      placeholder="Address Line 3"
                      type="text"
                      className="mt-1 block w-[440px] h-[56px] border border-gray-300 rounded-lg p-2"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <input
                        placeholder="Postal Code"
                        type="text"
                        className="mt-1 block w-[211.19px] h-[56px] border border-gray-300 rounded-lg p-2"
                      />
                    </div>
                    <div>
                      <input
                        placeholder="Locality"
                        type="text"
                        className="relative right-[100px] lg:right-[280px] inline mt-1 w-[211.19px] h-[56px] border border-gray-300 rounded-lg p-2"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700">State/Territory</label>
                    <select
                      id="state"
                      className="mt-1 block w-[211.19px] h-[56px] border border-gray-300 rounded-lg p-2"
                    >
                      <option value="">Select State</option>
                      <option value="India">India</option>
                      {/* Add more options if needed */}
                    </select>
                  </div>
                </form>
              </div>

              {/* Contact Information Section */}
              <div className="mt-8 space-y-6">
                <h2 className="text-lg font-semibold">Whats your contact information?</h2>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                  />
                  <p className='text-gray-400 text-[11px]'>A confirmation email will be sent after checkout.</p>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                  />
                  <p className='text-gray-400 text-[11px]'>A carrier might contact you to confirm delivery.</p>
                </div>
              </div>

              {/* PAN Section */}
              <div className="mt-8 space-y-6">
                <h2 className="text-lg font-semibold">Whats your PAN?</h2>
                <div>

                  <input
                    type="text"
                    placeholder="PAN"
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                  />
                </div>
                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="save-pan"
                    className="mt-1 h-4 w-4 border-gray-300 rounded"
                  />
                  <label htmlFor="save-pan" className="text-sm text-gray-700">
                    Save PAN details to Nike Profile
                  </label>
                </div>
              </div>

              {/* Terms & Conditions */}
              <div className="mt-8">
                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1 h-4 w-4 border-gray-300 rounded"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-700">
                    I have read and consent to eShopWorld processing my information in accordance with the{' '}
                    <a href="#" className="text-gray-600 underline">Privacy Statement</a> and{' '}
                    <a href="#" className="text-gray-600 underline">Cookie Policy</a>. eShopWorld is a trusted Nike partner.
                  </label>
                </div>
              </div>

              {/* Continue Button */}
              <div className="mt-8">
                <button
                  type="button"
                  className="w-full py-3 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed"
                  disabled
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className=" ml-4 text-center">
        <div className="ml-4 text-center">
          <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Order Summary</h2>
            <div className="mt-4 border-b pb-4">
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>₹ 20,890.00</p>
              </div>
              <div className="flex justify-between mt-2">
                <p>Delivery/Shipping</p>
                <p>Free</p>
              </div>
              <div className="flex justify-between mt-4 font-semibold text-lg">
                <p>Total</p>
                <p>₹ 20,890.00</p>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                (The total reflects the price of your order, including all duties and taxes)
              </p>
            </div>

            <div className="mt-6">
              <p className="text-gray-600 text-sm">Arrives Mon, 27 Mar - Wed, 12 Apr</p>
            </div>

            <div className="mt-4">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/man-1-home.png"
                  alt="Nike Dri-FIT ADV Shirt"
                  className="w-[208px] h-[208px] object-cover rounded-lg"
                  width={208}
                  height={208}
                />
                <div>
                  <p className="font-semibold">Nike Dri-FIT ADV Techknit Ultra Mens Short-Sleeve Running Top</p>
                  <p className="text-sm text-gray-500">Qty: 1</p>
                  <p className="text-sm text-gray-500">Size: L</p>
                  <p className="text-gray-800 mt-1">₹ 3,895.00</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Image
                  src="/main-shoe-3.png"
                  alt="Nike Air Max 97"
                  className="w-[208px] h-[208px] object-cover rounded-lg"
                  width={208}
                  height={208}
                />
                <div>
                  <p className="font-semibold">Nike Air Max 97 SE Mens Shoes</p>
                  <p className="text-sm text-gray-500">Qty: 1</p>
                  <p className="text-sm text-gray-500">Size: 7</p>
                  <p className="text-gray-800 mt-1">₹ 16,995.00</p>
                </div>
              </div>
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
