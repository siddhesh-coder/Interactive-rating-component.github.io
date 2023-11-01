'use strict';

const card = document.querySelector("[data-card]");
const ratingBtns = document.querySelectorAll("[data-rating-btn]");
const submitBtn = document.querySelector("[data-submit-btn]");
const value = document.querySelector("[data-rated-value]");

let lastRatedValue = NaN; //to keep track of last rate

for(let i = 0, len = ratingBtns.length; i<len ; i++){
    ratingBtns[i].addEventListener("click", function(){
        if(lastRatedValue){
            ratingBtns[lastRatedValue - 1].classList.remove("selected");
        }
    
        lastRatedValue = Number(this.textContent);
        ratingBtns[i].classList.add("selected");
    });
}

submitBtn.addEventListener("click", function(){
    if(lastRatedValue){
        card.classList.add("rated-state");
    }
   value.textContent = lastRatedValue;
   
})
