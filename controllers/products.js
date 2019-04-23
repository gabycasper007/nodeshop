const Product = require("../models/product");

exports.getHomepage = (req, res) => {
  res.render("shop", {
    products: Product.fetchAll(),
    pageTitle: "PUG Shop",
    path: "/"
  });
};

exports.getAddProduct = (req, res) => {
  res.render("add-product", {
    path: "/admin/add-product",
    pageTitle: "Add product"
  });
};

exports.postAddProduct = (req, res) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};
