import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const dbLink = process.env.REACT_APP_DB_LINK;

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const res = await axios.get(dbLink);
        setProducts(res.data.products);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllProducts();
  }, []);

  // Move console.log here if you want to log products after they are fetched
  console.log(products);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${dbLink}/${id}`);
      setProducts(products.filter((product) => product.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <h1>Product List</h1>
      <div>
        {products.length > 0 ? (
          products.map((product) => (
            <div className="mt-2" key={product.id}>
              <h2>{product.name}</h2>
              <p>Cost: {product.cost}</p>
              <p>Description: {product.description}</p>
              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={() => {
                  navigate(`/products/update/${product.id}`, {
                    state: product,
                  });
                }}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => handleDelete(product.id)}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Products;
