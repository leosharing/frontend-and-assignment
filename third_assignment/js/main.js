let getFaq = document.querySelectorAll(".faq");
let getFaqAns = document.querySelectorAll(".faq__ans");
let getFaqicon = document.querySelectorAll("i");

for (let x = 0; x < getFaq.length; x++) {
    getFaq[x].addEventListener('click', function(){
            getFaqAns[x].classList.toggle("show");

            getFaqicon[x].classList.toggle("fa-plus");
            getFaqicon[x].classList.toggle("fa-minus");
            
            
        });
    }
    
let parent = document.querySelector(".p-bloc--faqs");
let refer = document.querySelector(".faq")[1];
let 

