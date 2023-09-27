const modalContainer = document.getElementById("modal-container");
const modalOverlay = document.getElementById("modal-overlay");

const cartBtn = document.getElementById("cart-btn");



const displayCart = () => {
    modalContainer.innerHTML= "";
    modalContainer.style.display= "block";  
    modalOverlay.style.display="block";

    //modal Header
     const modalHeader = document.createElement("div"); 

    const modalClose = document.createElement("div");
    modalClose.innerText= "❌";
    modalClose.className= "modal-close";

    modalHeader.append(modalClose);

    modalClose.addEventListener("click" , ()=>{
        modalContainer.style.display= "none";  
        modalOverlay.style.display="none";

    })

    

    const modalTitle= document.createElement("div");
    modalTitle.innerText= "Cart";
    modalTitle.className= "modal-title";
    modalHeader.append(modalTitle)  ;

    modalContainer.append(modalHeader); 

    cart.forEach((product) => {
        const modalBody = document.createElement("div");
        modalBody.className= "modal-body";
        modalBody.innerHTML= `
        <div class="product">
            <img class="product-img" src="${product.img}" />
            <div class="product-info"> 
                <h4>${product.productName}</h4>
            </div>
            <div class="quantity">
                <span class="quantity-btn-decrease" style="cursor:pointer">-</span>
                <span class="quantity-input">${product.quantity}</span>
                <span class="quantity-btn-increase" style="cursor:pointer">+</span>
            </div>
            <div class="price">${product.price * product.quantity} $</div>
            <div class="delete-product">❌</div>
        </div>
        `;

        modalContainer.append(modalBody); 

        /*quatity modification buttons*/
        const decrease = modalBody.querySelector(".quantity-btn-decrease");
        decrease.addEventListener("click" ,()=> {
            if(product.quantity !== 1){
                product.quantity--;
            displayCart();
            }
            
        } )
        
        const increase = modalBody.querySelector(".quantity-btn-increase");
        increase.addEventListener("click", ()=>{
        product.quantity++;
        displayCart();
    })
    
        

        const modalFooter = document.createElement("div");
        modalFooter.className="modal-footer"; 
        modalFooter.innerHTML= `<div class="total-price">total :)</div>
        
        `;
        modalContainer.append(modalFooter);

    
    });
};
 
cartBtn.addEventListener("click" , displayCart);
