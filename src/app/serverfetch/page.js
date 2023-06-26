const productList = async() => {
    const res = await fetch("https://dummyjson.com/products");
    const result = await res.json()
    return result.products
    
}

const page = async () => {
    let products = await productList()
    return (
      <div>
        {products.map((product) => (
          <h1 className=" ml-10" key={product.id}>products name : {product.title}</h1>
        ))}
      </div>
    );
};

export default page;