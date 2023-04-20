function greet(){
    console.log("Hi there!");
    console.log("How are you ?");
}

function sqr(a){ //a -> parameter
    console.log(a**2);
    return a**2;
}

greet(); // non-parameterised function
sqr(8); // parameterised function
let x = sqr(8); // return value
console.log(x);