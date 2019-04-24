const Product = require("../models/product");
const Order = require("../models/order");

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
  try {
    const products = await req.user.getCart();

    res.render("shop/cart", {
      path: "/cart",
      products: products.map(product => {
        return {
          ...product.product,
          quantity: product.quantity
        };
      }),
      pageTitle: "Your Cart"
    });
  } catch (error) {
    console.error(error);
  }
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

exports.postOrder = async (req, res) => {
  try {
    const products = await req.user.getCart();
    const order = new Order({
      user: req.user.id,
      products
    });
    await order.save();
    await req.user.clearCart();
    res.redirect("/");
  } catch (error) {
    console.error(error);
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id });
    res.render("shop/orders", {
      orders: addTotalToOrders(orders),
      path: "/orders",
      pageTitle: "Your orders"
    });
  } catch (error) {
    console.error(error);
  }
};

const addTotalToOrders = orders => {
  const newOrders = orders.map(order => {
    return {
      id: order.id,
      products: order.products,
      total: order.products.reduce(
        (acc, cur) => +(acc + cur.product.price * cur.quantity).toFixed(2),
        0
      )
    };
  });
  return newOrders;
};
