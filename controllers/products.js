const Product = require("../models/product");

exports.getHomepage = async (req, res) => {
  try {
    const products = await Product.find();
    res.render("shop", {
      products,
      pageTitle: "Shop",
      path: "/"
    });
  } catch (err) {
    console.error(err);
  }
};

exports.getAddProduct = (req, res) => {
  res.render("add-product", {
    path: "/admin/add-product",
    pageTitle: "Add product"
  });
};

exports.postAddProduct = (req, res) => {
  const product = new Product({
    title: req.body.title,
    image: req.body.image,
    price: req.body.price,
    description: req.body.description
  });
  product.save();
  res.redirect("/");
};
