// add, remove, and view.

container = [ ];

while(true){
    console.log("(Product) Add, Remove, and View.");
    console.log("1. Adding product");
    console.log("2. Removing previous product");
    console.log("3. Viewing all products");
    console.log();
    
    let choice = Number(prompt("Enter choice: "));
    console.log();
    
    if(choice === 1){
        let productName = String(prompt("Product name: "));
        let productPrice = Number(prompt("Product price: "));
        let productQuantity = Number(prompt("Product quantity: "));
        console.log();
        
        let product = {
            name: productName,
            price: productPrice,
            quantity: productQuantity
        };
        
        container.push(product);
        console.log("Product sucessfully added.");
        console.log();
    }
    
    else if(choice === 2){
        container.pop();
        console.log("Previous product sucessfully removed. ");
        console.log();
    }
    
    else if(choice === 3){
        for(let pro in container){
            console.log(`Product name     : ${container[pro].name}`);
            console.log(`Product price    : ${container[pro].price}`);
            console.log(`Product quantity : ${container[pro].quantity}`);
            console.log();
        }
    }
    
    else{
        console.log("Invalid Input!");
        console.log();
    }
    
}















