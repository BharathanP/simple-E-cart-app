import { Fragment } from "react/jsx-runtime";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

    export default function Home(){

        const [products,setProducts] = useState([]);
        const [searchParams,setSearchparams] = useSearchParams()

       useEffect(() => {
        fetch('http://localhost:8000/api/v1/product?'+searchParams)
        .then(res => res.json())
        .then( res => setProducts(res.products))
        
    },[searchParams])   

        return <Fragment>

        

        <h1 id="products_heading">Latest Products</h1>

        <section id="products" className="container mt-5">
        <div className="row">
            {products.map(product => <ProductCard product={product} />)}
        
        
      
      </div>
    </section>
    </Fragment>
}