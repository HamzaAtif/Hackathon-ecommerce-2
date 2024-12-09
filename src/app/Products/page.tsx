import Image from "next/image";
import CategoryChips from "../components/CatgegoryChips";
import Link from "next/link";

const products = [
  {
    image: "/shoe-1.png",
    title: "Nike Air Force 1 Mid '07",
    description: "Men's Shoes - 1 Color",
    price: "MRP : ₹ 10 795.00",
  },
  {
    image: "/shoe-2.png",
    title: "Nike Court Vision Low Next Nature",
    description: "Men's Short-Sleeve Fitness Top",
    price: "MRP : ₹ 4 995.00",
  },
  {
    image: "/shoe-3.png",
    title: "Nike Air Force 1 PLT.AF.ORM",
    description: "Women's Shoes - 1 Color",
    price: "MRP : ₹ 8 695.00",
  },
  {
    image: "/shoe-4.png",
    title: "Nike Air Force 1 React",
    description: "Men's Short-Sleeve Fitness Top",
    price: "MRP : ₹ 13 295.00",
  },
  {
    image: "/shoe-5.png",
    title: "Air Jordan 1 Elevate Low",
    description: "Women's Shoes - 1 Color",
    price: "₹ 2,395.00",
  },
  {
    image: "/jersey.png",
    title: "Nike Air Force 1 LV8 3",
    description: "Older Kids' Shoes - 1 Color",
    price: "₹ 7,495.00",
  },
  {
    image: "/Rectangle.png",
    title: "Nike Blazer Low Platform",
    description: "Women's Shoes - 1 Color",
    price: "₹ 7,150.00",
  },
  {
    image: "/Rectangle (1).png",
    title: "Nike Air Force 1 Mid '07",
    description: "Men's Shoes - 1 Color",
    price: "MRP: ₹ 10,795.00",
  },
  {
    image: "/Rectangle (2).png",
    title: "Nike Court Vision Low Next Nature",
    description: "Men's Shoes - 1 Color",
    price: "MRP: ₹ 4,995.00",
  },
  {
    image: "/Rectangle (3).png",
    title: "Nike Air Force 1 PLT.AF.ORM",
    description: "Women's Shoes - 1 Color",
    price: "MRP: ₹ 8,695.00",
  },
  {
    image: "/Rectangle (4).png",
    title: "Nike Air Force 1 React",
    description: "Men's Shoes - 1 Color",
    price: "MRP: ₹ 13,295.00",
  },
  {
    image: "/Rectangle (5).png",
    title: "Air Jordan 1 Elevate Low",
    description: "Women's Shoes - 1 Color",
    price: "MRP: ₹ 7,495.00",
  },
  {
    image: "/Rectangle (6).png",
    title: "Nike Blazer Low Platform",
    description: "Women's Shoes - 1 Color",
    price: "MRP: ₹ 7,150.00",
  },
  {
    image: "/Rectangle (7).png",
    title: "Nike Air Force 1 '07",
    description: "Women's Shoes - 2 Colors",
    price: "MRP: ₹ 10,190.00",
  },
  {
    image: "/Rectangle (8).png",
    title: "Nike ZoomX Vaporfly Next%",
    description: "Men's Running Shoes - 1 Color",
    price: "MRP: ₹ 19,995.00",
  },
  {
    image: "/Rectangle (9).png",
    title: "Nike Pegasus Trail 4",
    description: "Men's Trail Running Shoes - 1 Color",
    price: "MRP: ₹ 12,495.00",
  },
  {
    image: "/Rectangle (10).png",
    title: "Nike Air Max 97 SE",
    description: "Unisex Lifestyle Shoes - 1 Color",
    price: "MRP: ₹ 16,495.00",
  },
  {
    image: "/Rectangle (11).png",
    title: "Nike Dunk Low",
    description: "Men's Shoes - 1 Color",
    price: "MRP: ₹ 11,995.00",
  },
  {
    image: "/Rectangle (12).png",
    title: "Nike Free Run 5.0",
    description: "Women's Running Shoes - 1 Color",
    price: "MRP: ₹ 9,995.00",
  },
  {
    image: "/Rectangle (13).png",
    title: "Nike Metcon 8",
    description: "Men's Training Shoes - 1 Color",
    price: "MRP: ₹ 11,495.00",
  },
  {
    image: "/Rectangle (14).png",
    title: "Nike Infinity Run 3",
    description: "Women's Running Shoes - 1 Color",
    price: "MRP: ₹ 12,495.00",
  },
  {
    image: "/Rectangle (15).png",
    title: "Nike Air Max TW",
    description: "Men's Lifestyle Shoes - 1 Color",
    price: "MRP: ₹ 13,995.00",
  },
  {
    image: "/Rectangle (16).png",
    title: "Nike Zoom Fly 5",
    description: "Unisex Running Shoes - 1 Color",
    price: "MRP: ₹ 14,495.00",
  },
  {
    image: "/Rectangle (17).png",
    title: "Nike Renew Ride 3",
    description: "Women's Running Shoes - 1 Color",
    price: "MRP: ₹ 8,495.00",
  },
  {
    image: "/Rectangle (18).png",
    title: "Nike React Infinity Run Flyknit",
    description: "Men's Running Shoes - 1 Color",
    price: "MRP: ₹ 14,995.00",
  },
  {
    image: "/Rectangle (19).png",
    title: "Nike Revolution 6 Next Nature",
    description: "Women's Running Shoes - 1 Color",
    price: "MRP: ₹ 6,495.00",
  },
  {
    image: "/Rectangle (20).png",
    title: "Nike Zoom Structure 24",
    description: "Men's Running Shoes - 1 Color",
    price: "MRP: ₹ 11,995.00",
  },
  {
    image: "/Rectangle (21).png",
    title: "Nike Air Max SC",
    description: "Men's Shoes - 1 Color",
    price: "MRP: ₹ 9,495.00",
  },
  {
    image: "/Rectangle (22).png",
    title: "Nike Wildhorse 7",
    description: "Women's Trail Running Shoes - 1 Color",
    price: "MRP: ₹ 12,495.00",
  },
  {
    image: "/Rectangle (23).png",
    title: "Nike Zoom Rival Fly 3",
    description: "Men's Running Shoes - 1 Color",
    price: "MRP: ₹ 7,995.00",
  },
];

export default function Products() {
  return (
    <div className="flex flex-wrap md:flex-nowrap">
      {/* Sidebar (Filters) */}
      <aside className="w-full md:w-1/4 p-4">
        <div className="space-y-4">
          <h3 className="font-bold text-lg">New(500)</h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>Shoes</li>
            <li>Sports Bras</li>
            <li>Tops & T-Shirts</li>
            <li>Hoodies & Sweatshirts</li>
            <li>Jackets</li>
            <li>Trousers & Tights</li>
            <li>Shorts</li>
            <li>Tracksuits</li>
            <li>Jumpsuits & Rompers</li>
            <li>Skirts & Dresses</li>
            <li>Socks</li>
            <li>Accessories & Equipment</li>
          </ul>

          <h3 className="font-medium text-lg">Gender</h3>
          <ul className="text-sm text-gray-700">
            <li>
              <input type="checkbox" className="mr-2" /> Men
            </li>
            <li>
              <input type="checkbox" className="mr-2" /> Women
            </li>
            <li>
              <input type="checkbox" className="mr-2" /> Unisex
            </li>
          </ul>

          <h3 className="font-medium text-lg">Shop By Price</h3>
          <ul className="text-sm text-gray-700">
            <li>
              <input type="checkbox" className="mr-2" /> Under ₹2,500
            </li>
            <li>
              <input type="checkbox" className="mr-2" /> ₹2,501 - ₹5,000
            </li>
          </ul>
        </div>
      </aside>

      {/* Product Grid */}
      <div className="w-full md:w-3/4 p-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="p-4 hover:scale-105 transition-transform duration-200 shadow-sm"
            ><Link href={`/Products-detail?title=${encodeURIComponent(
              product.title
            )}`}>
              <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={300}
                className="w-full rounded h-auto cursor-pointer"
              />
            </Link>
            <p className="text-sm text-orange-500 mt-2">Just In</p>
            <p className="font-medium">{product.title}</p>
            <p className="text-sm text-gray-600">{product.description}</p>
            <p className="font-medium">MRP: {product.price}</p>
          </div>
        ))}
        
        </div>
        <CategoryChips/>
      </div>
    </div>
  );
}
