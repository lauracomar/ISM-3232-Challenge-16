import React from 'react'; // import react and product item
import ProductItem from './ProductItem';

function ProductList({ products }) { //display list of products
    return ( // takes products from app maps over and displays item:
        <div>
            <h2>Products</h2>
            <ul>
                {products.map((product) => (
                    <ProductItem
                        key={product.id}
                        product={product}
                    />
                ))}
            </ul>
        </div>
    );
}

export default ProductList; // export to main