import React from 'react';

function ProductItem({ product }) { //display product details 
    return ( // display name, price and description:
        <li>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
        </li>
    );
}
export default ProductItem;