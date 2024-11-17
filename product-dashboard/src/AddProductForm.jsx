import React, { useState } from 'react';

function AddProductForm({ addProducts }) {// function to add new product
    //variables for inputs:
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => { //form submission
        e.preventDefault(); //prevent default
        const newProduct = { //new product object
            id: Date.now(), //unique id for time
            name,
            price: parseFloat(price), //price to number
            description,
        };
        addProducts(newProduct);//call addProduct function
        setName('');//reset
        setPrice('');
        setDescription('');
    };
    // create form display which displays name,price,description, add product button
    return ( //update name, price and description:
        <form onSubmit={handleSubmit}>
            <h2>Add New Product</h2>
            <input
                type='text'
                placeholder='Product name'
                value={name}
                onChange={(e) => setName(e.target.value)} />
            <input
                type='number'
                placeholder='Product price'
                value={price}
                onChange={(e) => setPrice(e.target.value)} />
            <textarea
                placeholder='Product Description'
                value={description}
                onChange={(e) => setDescription(e.target.value)} />
            <button type='submit'>Add</button>
        </form>
    )
}
export default AddProductForm;