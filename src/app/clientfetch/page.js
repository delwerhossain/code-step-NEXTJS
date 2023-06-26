"use client";
import { useEffect, useState } from "react";


const ClientFetch = () => {
const [products, setProducts] = useState([])
useEffect(() => {
  fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => setProducts(data.products));
    }, [])

return (
  <div>
    {products.map((product) => (
      <h1 className=" ml-10" key={product.id}>
        products name : {product.title}
      </h1>
    ))}
  </div>
);
};

export default ClientFetch;
