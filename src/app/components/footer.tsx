import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white h-auto py-10 relative">
      {/* Text Section */}
      <div className="flex flex-wrap gap-[50px] md:gap-[100px] lg:gap-[150px] px-6 sm:px-10">
        {/* Column 1 */}
        <div>
          <div className="text-[10px] text-white font-medium space-y-4 mt-4">
            <p>Find A Store</p>
            <p>Become A Member</p>
            <p>Sign Up for Email</p>
            <p>Send Us Feedback</p>
            <p>Student Discounts</p>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <div className="text-[10px] text-gray-500 space-y-4 mt-4">
            <p className="text-white font-medium">Get Help</p>
            <p>Order Status</p>
            <p>Delivery</p>
            <p>Returns</p>
            <p>Payment Options</p>
            <p>Contact Us On Nike.com Inquiries</p>
            <p>Contact Us On All Other Inquiries</p>
          </div>
        </div>

        {/* Column 3 */}
        <div>
          <div className="text-[10px] text-gray-500 space-y-4 mt-4">
            <p className="text-white font-medium">About Nike</p>
            <p>News</p>
            <p>Careers</p>
            <p>Investors</p>
            <p>Sustainability</p>
          </div>
        </div>

        {/* Logos */}
        <div className="absolute top-5 right-5 sm:static sm:mt-4">
          <Image
            src="/logos.png"
            alt="logos"
            width={100}
            height={100}
            className="cursor-pointer"
          />
        </div>
      </div>

      {/* Footer Image */}
      <div className="flex justify-center mt-6">
        <Image
          src="/footer.PNG"
          alt="Wishlist"
          width={200}
          height={200}
          className="cursor-pointer"
        />
      </div>

      {/* Bottom Links */}
      <div className="flex flex-wrap justify-center sm:justify-end gap-4 px-6 sm:px-10 mt-6 text-[10px] text-gray-500">
        <p>Guides</p>
        <p>Terms of Sale</p>
        <p>Terms of Use</p>
        <p>Nike Privacy Policy</p>
      </div>
    </footer>
  );
}
