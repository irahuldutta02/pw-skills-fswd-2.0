let myHeros = ["thor", "spiderman"];
let dcHeros = ["batman", "flash", "superman"];

let superPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpidermanPower: function(){
    console.log(`spidy power is ${this.spiderman}`);
  }
};

Object.prototype.hitesh = function(){ // all arrays and objects has acces because every thing in js is object
    console.log(`Hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){ // only array has acces
    console.log(`hey hitesh`);
}

console.log(myHeros.hey());