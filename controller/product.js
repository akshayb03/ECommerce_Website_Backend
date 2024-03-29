const Product = require("../models/Products");

const addProductsController = async (req, res) => {
  try {
    const product = new Product({
      id: req.body.id,
      name: req.body.name,
      img: req.body.img,
      price: req.body.price,
      mrp: req.body.mrp,
      rating: req.body.rating,
      ratingTotal: req.body.ratingTotal,
      discount: req.body.discount,
      seller: req.body.seller,
      purl: req.body.purl,
    });

    const addedProduct = await product.save();
    res.status(200);
    res.send(addedProduct);
  } catch (error) {
    res.send({ error: error.message });
  }
};

const showProductsController = async (req, res, next) => {
  const products = await Product.find();
  products && res.status(200) && res.send(products);
};

module.exports = { addProductsController, showProductsController };
