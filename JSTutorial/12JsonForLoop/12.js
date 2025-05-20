// add, remove, and view.

container = [ ];

while(true){
    console.log("(Product) Add, Remove, and View.");
    console.log("1. Add product");
    console.log("2. Remove product");
    console.log("3. View all products");
    console.log("4, View specific product")
    console.log("5. Update Product")
    console.log("6. Exit")
    console.log();

    let choice = Number(prompt("Enter choice: "));
    console.log();
    
    if(choice === 1){
        let productId = Number(prompt("Product id: "));
        let productName = String(prompt("Product name: "));
        let productPrice = Number(prompt("Product price: "));
        let productQuantity = Number(prompt("Product quantity: "));
        console.log();
        
        let product = {
            id: productId,
            name: productName,
            price: productPrice,
            quantity: productQuantity
        };
        
        container.push(product);
        console.log("Product successfully added.");
        console.log();
    }
    
    else if(choice === 2){
        let productView1 = Number(prompt("Product id: "));
        console.log();
        
        for(let pro in container){
            if(productView1 === container[pro].id){
                container.splice(pro, 1);
                break;
            }
        }

        console.log("Previous product successfully removed. ");
        console.log();
    }
    
    else if(choice === 3){
        for(let pro in container){
            console.log(`Product id       : ${container[pro].id}`);
            console.log(`Product name     : ${container[pro].name}`);
            console.log(`Product price    : ${container[pro].price}`);
            console.log(`Product quantity : ${container[pro].quantity}`);
            console.log();
        }
    }
    
    else if(choice === 4){
        let productView2 = Number(prompt("Product id: "));
        console.log();
        
        for(let pro in container){
            if(productView2 === container[pro].id){
                console.log(`Product name     : ${container[pro].name}`);
                console.log(`Product price    : ${container[pro].price}`);
                console.log(`Product quantity : ${container[pro].quantity}`);
                console.log();
            }
        }
    }
    
    else if(choice === 5){
        let productView3 = Number(prompt("Product id: "));
        console.log();
        
        for(let pro in container){
            if(productView3 === container[pro].id){
                let productId = Number(prompt("New Product id: "));
                let productName = String(prompt("New Product name: "));
                let productPrice = Number(prompt("New Product price: "));
                let productQuantity = Number(prompt("New Product quantity: "));
                console.log();
                
                container[pro].id = productId;
                container[pro].name = productName;
                container[pro].price = productPrice;
                container[pro].quantity = productQuantity;
                
                console.log("Product successfully update.");
                console.log();
            }   
            
            else{
                console.log("Id not found!");
            }
        }       
    }
    
    else if(choice === 6){
        let exit = String(prompt("Type Exit to confirm: "));
        
        if(exit === "Exit"){
            console.log();
            console.log("Thank you! Hope you enjoyed using my mini system!");
            break;
        }
    }
    
    else{
        console.log("Invalid Input!");
        console.log();
    }
}
    















