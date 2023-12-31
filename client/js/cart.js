const modalContainer = document.getElementById("modal-container");
const modalOverlay = document.getElementById("modal-overlay");

const cartBtn = document.getElementById("cart-btn");

const cartCounter= document.getElementById("cart-counter");

const displayCart = () => 
{
    modalContainer.innerHTML= "";
    modalContainer.style.display= "block";  
    modalOverlay.style.display="block";
    //modal Header

     const modalHeader = document.createElement("div"); 

    // modal Header: close button

     const modalClose = document.createElement("div");
       modalClose.innerText= "❌";
       modalClose.className= "modal-close";

     modalHeader.append(modalClose);

    // function: close modal

    modalClose.addEventListener("click" , ()=>{
        modalContainer.style.display= "none";  
        modalOverlay.style.display="none";

    })
    // Modal Header: title.

     const modalTitle= document.createElement("div");

       modalTitle.innerText= "Cart";
       modalTitle.className= "modal-title";

       modalHeader.append(modalTitle)  ;

      modalContainer.append(modalHeader); 
     
      //Modal Cart layout
      
      if(cart.length > 0){
    
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

         //quantity modification buttons

        const decrease = modalBody.querySelector(".quantity-btn-decrease");
        decrease.addEventListener("click" ,()=> {
            if(product.quantity !== 1){
                product.quantity--;
            displayCart();
            displayCartCounter();
            }
            
        });
        
        const increase = modalBody.querySelector(".quantity-btn-increase");
        increase.addEventListener("click", ()=>{
        product.quantity++;
        displayCart();
        displayCartCounter();
         });

         //delete

         const deleteProduct = modalBody.querySelector(".delete-product");

         deleteProduct.addEventListener("click", ()=>{
            deleteCartProduct(product.id);
         });

    });
            //footer: total price del carrito

      const total = cart.reduce((acc, el)=> acc + el.price * el.quantity,0);

      const modalFooter = document.createElement("div");
      modalFooter.className="modal-footer"; 
      modalFooter.innerHTML= `
      <div class="total-price">Total ${total}</div>
      <button class="btn-primary" id="checkout-btn">go to checkout</button>
      <div id="button-checkout"></div>
      `;
      modalContainer.append(modalFooter);
    }else{
        const modalText = document.createElement("h2");
        modalText.className = "modal-body";
        modalText.innerText= "Your cart is empty";
        modalContainer.append(modalText);

    }
};

    cartBtn.addEventListener("click" , displayCart);

    const deleteCartProduct = (id)=> {
        const findId = cart.findIndex((element)=> element.id === id);
        console.log(findId);
        cart.splice(findId, 1);
        displayCart();
        displayCartCounter();
    };
    const displayCartCounter= ()=>{
        const cartlength = cart.reduce((acc, el)=> acc + el.quantity,0);
        console.log(cartlength);
        cartCounter.style.display= "block";
        cartCounter.innerText= cartlength;
        }


