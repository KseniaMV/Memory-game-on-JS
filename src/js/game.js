function turnCard() {
    let cardBack = document.querySelectorAll(".card_back");
    let cardFace = document.querySelectorAll(".card_face");
    let cardsDataName = [];
    let check = false;
    if(check == false){
        cardFace.forEach(cardFace => {
            cardFace.addEventListener("click", (e) => {
            let targetFace = e.target;
            let targetBack = targetFace.nextElementSibling;
            targetFace.style.transform = "rotateY(-180deg)";
            targetBack.style.transform = "rotateY(0)";
            let dataName = targetFace.dataset.name;
            cardsDataName.push(dataName);
            targetFace.classList.add("selectedCard");
            targetBack.classList.add("selectedCard");
            checkCount(cardsDataName, check)              
            });
        })
    }
   
}

function checkCount(array){
    let cardsCount = array.length;
    if(cardsCount == 2){
        checkCards(array);
        console.log(check);                    
    };
}

function checkCards(array) {
    setTimeout(() => {
        let selectedCards = document.querySelectorAll(".selectedCard");
        let firstCard = array[0];
        let secondCard = array[1];
        if (firstCard === secondCard) {
            selectedCards.forEach(element => {
                element.style.filter = "brightness(15%)";
                element.classList.remove("selectedCard");
            });
            array.splice(0, 2);
        }else{

            selectedCards.forEach(element => {
                if (element.classList.contains("card_face")) {
                    element.style.transform = "rotateY(0)";
                    element.classList.remove("selectedCard");
                }
                if (element.classList.contains("card_back")) {
                    element.style.transform = "rotateY(180deg)";
                    element.classList.remove("selectedCard");
                }
                array.splice(0, 2);
            });
        };
        
    }, 300);

     
};
