import React, { useEffect, useState } from "react";
import axios from "axios";
import { type } from "os";
import { error } from "console";

// defining product type
type Product = {
    id: number;
    name: string;
    description: string;
    brand: string;
    price: number;
    rating: number;
    numberOfReviews: number;
    imageUrl: string;
}

const emptyProducts: Product[] = [];

function Products() {

    // initializing empty array of products state hook
    const [products, setProducts]: [Product[], (products: Product[]) => void]
        = useState(emptyProducts);

    // effect hook
    // calls api and puts response into statehook's setProducts function
    useEffect(() => {
        
        // We are feeding the HTTP Response Body- response.data- into our setProducts function from our state hook.
        axios.get<Product[]>("https://localhost:5283/catalog",
            {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response) => setProducts(response.data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="content">
            <ul className="products">
                
                {/* refers to api db info */}
                {products.map((product) => (
                    <li key={product.id}>
                    <div className="product">
                        <img
                            className="product-image"
                            src={product.imageUrl}
                            alt="product"
                        />
                        <div className="product-name">
                            <a href="product.html">{product.name}</a>
                        </div>
                        <div className="product-brand">{product.brand}</div>
                        <div className="product-price">{product.price}</div>
                        <div className="product-rating">
                            {product.rating} Stars ({product.numberOfReviews} reviews)
                        </div>
                    </div> 
                </li>
                ))}
                ;
            </ul>
        </div>
    );
}

export default Products;