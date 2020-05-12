

function turnCard() {
    let clickCount = 0;
    let cardBack = document.querySelectorAll(".card_back");
    let cardFace = document.querySelectorAll(".card_face");
    let cardsDataName = []; 

        cardFace.forEach(cardFace => {
            cardFace.addEventListener("click", (e) => {
             
                clickCount +=1;
                    let targetFace = e.target;
                    let targetBack = targetFace.nextElementSibling;
                    targetFace.style.transform = "rotateY(-180deg)";
                    targetBack.style.transform = "rotateY(0)";
        
                    let dataName = targetFace.dataset.name;
                    cardsDataName.push(dataName);
                    targetFace.classList.add("selectedCard");
                    targetBack.classList.add("selectedCard");
                    
            });
          
        });
    
};

function checkCards(array){
        clickCount = 0;
    let selectedCards = document.querySelectorAll(".selectedCard");
        console.log(selectedCards);
        let firstCard = array[0];
        let secondCard = array[1];
        if(firstCard === secondCard){
            console.log("thesame");
            selectedCards.forEach(element => {
                element.style.filter = "brightness(15%)";
                element.classList.remove("selectedCard");
            });
            array.splice(0, 2);     
        }else{
            console.log("notThesame");
            selectedCards.forEach(element => {
                
                if(element.classList.contains("card_face")){
                    element.style.transform = "rotateY(0)";
                    element.classList.remove("selectedCard");
                }
                if(element.classList.contains("card_back")){
                    element.style.transform = "rotateY(180deg)";
                    element.classList.remove("selectedCard");
                }
                array.splice(0, 2);
            });
          
           
        }
            
}



  /* function turnCard() {
    let cardBack = document.querySelectorAll(".card_back");
    let cardFace = document.querySelectorAll(".card_face");
    cardFace.forEach(cardFace => {
        cardFace.addEventListener("click", (e) => {
            let targetFace = e.target;
            let targetBack = targetFace.nextElementSibling;
            targetFace.style.transform = "rotateY(-180deg)";
            targetBack.style.transform = "rotateY(0)";
        })

    });

    cardBack.forEach(cardBack => {
        cardBack.addEventListener("click", (e) => {
            let targetBack = e.target;
            let targetFace = e.target.previousElementSibling;
            targetBack.style.transform = "rotateY(180deg)";
            targetFace.style.transform = "rotateY(0)";
        })

    });



};*/


/*function checkCards(array){
        let selectedCards = document.querySelectorAll(".selectedCard");
        console.log(selectedCards);
        let firstCard = cardsDataName[0];
        let secondCard = cardsDataName[1];
        if(firstCard === secondCard){
            cardsDataName.splice(0, 2);
            clickCount = 0;
            selectedCards.forEach(element => {
                element.style.filter = "blur(2px)";
            });
          
             
        }else{
            selectedCards.forEach(element => {
                clickCount = 0;
                cardsDataName.splice(0, 2);
                if(element.classList.contains("card_face")){
                    element.style.transform = "rotateY(0)";
                    element.classList.remove("selectedCard");
                }
                if(element.classList.contains("card_back")){
                    element.style.transform = "rotateY(180deg)";
                    element.classList.remove("selectedCard");
                }
                
               
            });
          
           
        }
    
}
*/