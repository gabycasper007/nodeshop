const Product = require("../models/product");

exports.getHomepage = async (req, res) => {
  try {
    const products = await Product.find();
    res.render("shop", {
      products,
      pageTitle: "Shop",
      path: "/",
      list: true
    });
  } catch (err) {
    console.error(err);
  }
};

exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.render("products/product-detail", {
      product,
      pageTitle: product.title,
      path: "/products/" + product._id
    });
  } catch (error) {
    console.error(error);
  }
};
