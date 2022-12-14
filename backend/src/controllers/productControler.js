import uuid from 'uuid/v4.js'

const DUMMY_PRODUCTS = []; // not a database, just some in-memory storage for now

export const getProducts = (req, res, next) => {
    res.status(200).json({ products: DUMMY_PRODUCTS });
  };

export const postProduct = (req, res, next) => {
    const { title, price } = req.body;
  
    if (!title || title.trim().length === 0 || !price || price <= 0) {
      return res.status(422).json({
        message: 'Invalid input, please enter a valid title and price.'
      });
    }
  
    const createdProduct = {
      id: uuid(),
      title,
      price
    };
  
    DUMMY_PRODUCTS.push(createdProduct);
  
    res
      .status(201)
      .json({ message: 'Created new product.', product: createdProduct });
  };