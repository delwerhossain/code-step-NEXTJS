import React from "react";
import Header from "../components/Header";

export const getStaticProps = async () => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const data = await res.json();
  return { props: { data } }
}
const StaticServerFetch = ({ data }) => {
    console.log(data); 
  return (
    <div> 
      {/* <Header />
      <div>
        {data.map((product) => (
          <h1 className=" ml-10" key={product.id}>
            products name : {product.name}
          </h1>
        ))}
      </div> */}
    </div>
  );
};

export default StaticServerFetch;
