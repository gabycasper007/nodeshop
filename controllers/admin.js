exports.postAddProduct = async (req, res, next) => {
  const product = new Product({
    title: req.body.title,
    image: req.body.image,
    price: req.body.description,
    price: req.body.price
  });
  try {
    await product.save();
    res.redirect("/admin/products");
  } catch (err) {
    console.error(err);
  }
};
