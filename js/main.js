const paginationItem=document.querySelectorAll(".pagination__item");
console.log(paginationItem);

paginationItem.forEach((el) =>{
    el.onclick= () =>{
        paginationItem.forEach((el) =>{

        })
    }
})

let product__card = document.querySelectorAll(".product__card");

product__card.forEach((item)=>{
    let product__arrow = item.querySelector(".product__arrow");
    let modal_section = document.querySelector(".modal-section");
    product__arrow.onclick = function(){
        modal_section.classList.add("modal-section_active");
    }
    let close_btn = document.querySelector(".close_btn");
    console.log(close_btn);
    close_btn.onclick = function(){
        modal_section.classList.remove("modal-section_active");
    }
})


