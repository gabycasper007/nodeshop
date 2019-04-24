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
    res.render("shop/product-detail", {
      product,
      pageTitle: product.title,
      path: "/products/" + product.id
    });
  } catch (error) {
    console.error(error);
  }
};

exports.getCart = async (req, res) => {
  const user = await req.user.populate("cart.items.productId").execPopulate();
  res.render("shop/cart", {
    path: "cart",
    products: user.cart.items,
    pageTitle: "Your Cart"
  });
};

exports.postCart = async (req, res) => {
  try {
    const product = await Product.findById(req.body.productId);
    await req.user.addToCart(product);
    res.redirect("/cart");
  } catch (error) {
    console.error(error);
  }
};

exports.cartDeleteItem = async (req, res) => {
  try {
    await req.user.removeFromCart(req.body.productId);
    res.redirect("/cart");
  } catch (error) {
    console.error(error);
  }
};
