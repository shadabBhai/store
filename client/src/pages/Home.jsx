import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    const API_CALL = async () => {
      const url =
        "https://real-time-amazon-data.p.rapidapi.com/search?query=Phone&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL";
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "b905d7a30dmsh182fcd9d17fc234p19799cjsna0f8b32331e9",
          "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setProducts(result?.data?.products);
      } catch (error) {
        console.error(error);
      }
    };
    API_CALL();
  }, []);

  return !products ? (
    <>loading</>
  ) : (
    <div className=" h-[90vh] grid grid-cols-4 m-[4vh] overflow-auto gap-2">
      {products.map((product) => (
        <ProductCard data={product} />
      ))}
    </div>
  );
};

export default Home;
