try {
    let a = undefined;
    console.log(a[0]);
} catch (error) {
    console.log("Handeled");
    
} finally{
    console.log("Alwasy");
}