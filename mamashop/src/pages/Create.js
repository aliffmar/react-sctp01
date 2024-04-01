import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const dbLink = process.env.REACT_APP_DB_LINK;

const Create = () => {
  const [product, setProduct] = useState({
    name: '',
    cost: '',
    description: '',
    // Add additional fields here if needed
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      // Replace 'dbLink' with your backend API endpoint for creating products
      await axios.post(dbLink + '/create', product);
      navigate('/'); // Navigate to the desired route after successful creation
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <h1>Add New Product</h1>
      <input
        type="text"
        placeholder="Product Name"
        name="name"
        value={product.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        placeholder="Product Cost"
        name="cost"
        value={product.cost}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        placeholder="Product Description"
        name="description"
        value={product.description}
        onChange={handleChange}
        required
      />
      {/* Add additional input fields for other product details as needed */}
      
      <button className="btn btn-primary" onClick={handleClick}>Add</button>
    </div>
  );
};

export default Create;
