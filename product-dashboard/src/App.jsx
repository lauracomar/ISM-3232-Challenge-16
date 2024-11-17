import React, { useState } from 'react'; //import react and useState from react library
import ProductList from './ProductList'; // import product list
import AddProductForm from './AddProductForm' // import addproductform

function App() { //app that manages the list of products
  const [products, setProducts] = useState([ //list of products as array
    { id: 1, name: 'Squishmallow', price: 30, description: 'Soft, squishy, egg-shaped plush toys' },
    { id: 2, name: 'Flower Wine Glasses', price: 40, description: '6 pcs Flower shped Wine Glass' },
  ]);
  const addProduct = (newProduct) => { //function to add new products
    setProducts([...products, newProduct]); //add new products to the list / the "[...products]" = creates new array and takes the elements of the current array
  };
  return ( // return to display product list and add product form
    <div>
      <h1>Products</h1>
      <ProductList products={products} />
      <AddProductForm addProduct={addProduct} />
    </div>
  ); // line 16: put products to product list, line 17: put addproduct fundtion to adproductform
}

export default App; // export app to main file