const shopContent = document.getElementById("shopContent");
const cart = [];

///product store layout

productos.forEach((product)=>{
    const content = document.createElement("div");
    content.className="card";
    content.innerHTML = `<img src="${product.img}">
    <h3>${product.productName}</h3>
    <p>${product.price} $ </p>
    `;
    shopContent.append(content);
    
    const buyButton = document.createElement("button");
    buyButton.innerText= "Buy";
    
    content.append(buyButton);

    ///add to cart functionality
    
    buyButton.addEventListener("click", ()=>{ 
        const repeated  = cart.some((repeated)=> repeated.id === product.id); 
        if(repeated){
            cart.map((prod)=> {
                if(prod.id === product.id){
                    prod.quantity++;
                    displayCartCounter();
                }
            });
        }else{
            cart.push({

                id: product.id,
                productName:product.productName,
                price: product.price,
                quantity: product.quantity,
                img: product.img,
    
            });
            displayCartCounter();
        }
        
    })

    
});
