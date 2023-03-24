class Product {
  // properties and behaviours -> functions -> member functionslity

  name;
  price;
  #rating;

  constructor(n, p, r) {
    this.name = n;
    this.price = p;
    this.#rating = r;
    console.log("Calling the constrructor");
  }

  get getRating() {
    return this.#rating;
  }

  set setRating(r) {
    this.#rating = r;
  }

  static custom() {
    console.log("Calling static method");
  }

  display() {
    console.log("displaying the current product");
    console.log(this);
  }
}

const p = new Product("Iphone", "100000", "4.5");
// class members
// console.log(p);
// class member function
// console.log(p.display());
Product.custom();
console.log(p.getRating);
p.setRating = 10;
console.log(p.getRating);
