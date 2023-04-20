function Product(n, p, r) {
  this.name = n;
  this.price = p;
  this.rating = r;
  //   return {x: 10}; // custom returning object best case is not returning anything if you retun premitive it ignores
}

const p = new Product("Macbook", 1500000, 5);
console.log(p);

let x = {
  p: Product,
};

x.p("Airpods", 150000, 5);

console.log(x);