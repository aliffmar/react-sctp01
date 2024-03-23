import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const dbLink = process.env.REACT_APP_DB_LINK;

const Update = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const productToEdit = location.state;

  const [product, setProduct] = useState({
    name: productToEdit.name,
    cost: productToEdit.cost,
    description: productToEdit.description,
  });

  const productId = location.pathname.split('/')[3]; // Extract product ID from URL

  const handleChange = (e) => {
    setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${dbLink}/products/${productId}`, product);
      navigate('/products');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <h1>Updating Product Details for: {productToEdit.name}</h1>
      <label>New Name</label>
      <input
        type="text"
        placeholder={productToEdit.name}
        onChange={handleChange}
        name="name"
      />
      <label>New Cost</label>
      <input
        type="text"
        placeholder={productToEdit.cost}
        onChange={handleChange}
        name="cost"
      />
      <label>New Description</label>
      <input
        type="text"
        placeholder={productToEdit.description}
        onChange={handleChange}
        name="description"
      />
      <button className="btn btn-primary" onClick={handleClick}>
        Update
      </button>
    </div>
  );
};

export default Update;
