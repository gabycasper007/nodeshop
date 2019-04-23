const products = [];

module.exports = class Product {
  constructor(title) {
    this.title = title;
    this.id = Math.random();
    this.image =
      "https://cdn.pixabay.com/photo/2016/03/31/20/51/book-1296045_960_720.png";
    this.price = 19.99;
    this.description =
      "A very interesting book about so many even more interesting things!";
  }

  save() {
    products.push(this);
  }

  static fetchAll() {
    return products;
  }
};
