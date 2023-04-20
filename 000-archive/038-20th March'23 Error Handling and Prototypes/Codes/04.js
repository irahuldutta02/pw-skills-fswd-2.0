const Product = (n, p, r) => {
  this.name = n;
  this.price = p;
  this.rating = r;
};

// arrow function can't be used as function constructor 


const p = new Product("IphoneX", 1555555, 5);
console.log(p);