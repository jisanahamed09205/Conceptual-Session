import { useLoaderData } from "react-router-dom";

import { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {

    const {products} = useLoaderData();
    // console.log(products);


    // const [products,setProducts] = useState([]);

    // useEffect(()=>{
    //     fetch(`https://dummyjson.com/products`)
    //     .then(res => res.json())
    //     .then(data => setProducts(data))
    // },[])
    // console.log(products);

    return (
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
            {
                products.map((product)=> <Product key={product.id} product={product}></Product>)
            }
        </div>
    );
};

export default Products;