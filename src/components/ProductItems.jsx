import React from "react";
import ProductCard from "./ProductCard.jsx";
import Data from "../data/Data.js";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const ProductItems  = () => {
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);
  const handleToast = (name) => toast.success(`Added ${name} `);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
        {Data.filter((food) => {
          if (category === "All") {
            return food.name.toLowerCase().includes(search.toLowerCase());
          } else {
            return (
              category === food.category &&
              food.name.toLowerCase().includes(search.toLowerCase())
            );
          }
        }).map((Product) => (
          <ProductCard
            key={Product.id}
            id={Product.id}
            name={Product.name}
            price={Product.price}
            desc={Product.desc}
            rating={Product.rating}
            img={Product.img}
            handleToast={handleToast}
          />
        ))}
      </div>
    </>
  );
};

export default ProductItems;