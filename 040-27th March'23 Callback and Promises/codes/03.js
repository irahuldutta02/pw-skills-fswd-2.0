function createPromise() {
    return new Promise(function exec(resolve, reject) {
      // your code goes here
      setTimeout(function f() {
        console.log("timer done");
        //   resolve("Done");
        reject("Done");
      }, 3000);
    });
}

async function consume(){
    try{
        console.log("Inside function");
        const reponses = await createPromise();
        console.log("Response is ", reponses);
    }catch(err){
        console.log("Handled ", err);
    }
    
}

consume();