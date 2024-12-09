import { Button } from "@/components/ui/button";

// components/CategoryChips.jsx
export default function CategoryChips() {
    const categories = [
      "Best Selling Products",
      "Best Shoes",
      "New Basketball Shoes",
      "New Football Shoes",
      "New Men's Shoes",
      "New Running Shoes",
      "Best Men's Shoes",
      "New Jordan Shoes",
      "Best Women's Shoes",
      "Best Training & Gym",
    ];
  
    return (
        
      <div className=" text-black py-4 px-6">
        <hr className="mt-40 mb-[100px]"/>
        <h2 className="text-xl font-medium mb-4">Related Categories</h2>
        <div className="flex flex-wrap gap-3">
          {categories.map((category, index) => (
            <Button
              key={index}
              className="px-4 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    );
  }
  