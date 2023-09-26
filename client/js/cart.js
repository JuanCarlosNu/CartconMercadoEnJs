const modalContainer = document.getElementById("modal-container");
const modalOverlay = document.getElementById("modal-overlay");


const displayCart = ()=>{
    //modal Header
     const modalHeader = document.createElement("div"); 
    const modalClose = document.createElement("span");
    modalClose.innerText= "❌";
    modalClose.className= "modal-close";
    modalHeader.append(modalClose);

    const modalTitle= document.createElement("div");
    modalTitle.innerText= "carrio";
    modalTitle.className= "modal-title";
    modalHeader.append(modalTitle);

    modalContainer.append(modalHeader); 


}
