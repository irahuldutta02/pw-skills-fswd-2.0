class Product {
  // properties and behaviours -> functions -> member functionslity

  constructor(n, p, r) {
    this.name = n;
    this.price = p;
    this.rating = r;
    console.log("Calling the constrructor");
  }

  name;
  price;
  rating;

  display() {
    console.log("displaying the current product");
    console.log(this);
  }
}

const p = new Product("Iphone", "100000", "4.5");
// class members
console.log(p);
// class member method
p.display();
