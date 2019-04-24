const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  cart: {
    items: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true
        },
        quantity: {
          type: Number,
          required: true
        }
      }
    ]
  }
});

userSchema.methods.addToCart = function(product) {
  const index = this.cart.items.findIndex(
    cp => cp.productId.toString() === product.id.toString()
  );

  if (index >= 0) ++this.cart.items[index].quantity;
  else
    this.cart.items.push({
      productId: product.id,
      quantity: 1
    });

  return this.save();
};

userSchema.methods.removeFromCart = function(id) {
  this.cart.items = this.cart.items.filter(
    item => item.productId.toString() !== id.toString()
  );
  this.save();
};

userSchema.methods.getCart = async function() {
  const user = await this.populate("cart.items.productId").execPopulate();
  return user.cart.items.map(item => {
    return { product: { ...item.productId._doc }, quantity: item.quantity };
  });
};

userSchema.methods.clearCart = function() {
  this.cart.items = [];
  this.save();
};

module.exports = mongoose.model("User", userSchema);
