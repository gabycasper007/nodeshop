const Product = require("../models/product");

exports.getAddProduct = (req, res) => {
  res.render("shop/add-product", {
    path: "/admin/add-product",
    pageTitle: "Add product"
  });
};

exports.postAddProduct = async (req, res) => {
  const product = new Product({
    title: req.body.title,
    image: req.body.image,
    description: req.body.description,
    price: req.body.price,
    userId: req.user
  });
  try {
    await product.save();
    res.redirect("/admin/products");
  } catch (err) {
    console.error(err);
  }
};

exports.viewProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.render("admin/products", {
      products,
      pageTitle: "Admin products",
      path: "/admin/products",
      isAdmin: true
    });
  } catch (err) {
    console.error(err);
  }
};

exports.editProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.render("shop/add-product", {
      product,
      path: "/admin/product/patch/" + product.id,
      method: "PATCH"
    });
  } catch (error) {
    console.error(error);
  }
};

exports.patchProduct = async (req, res) => {
  try {
    await Product.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/admin/products/" + req.params.id);
  } catch (error) {
    console.error(error);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.redirect("/admin/products/");
  } catch (error) {
    console.error(error);
  }
};
