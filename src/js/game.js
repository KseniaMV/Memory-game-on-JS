let score = 0;
let check = false;

function game(){
    let cardsDataName = [];
    let cardFace = document.querySelectorAll(".card_face");
    if(check === false){
        cardFace.forEach(card => {
            card.addEventListener("click", (e)=>{
                let targetFace = e.target; 
                getDataName(targetFace, cardsDataName);
                turnCard(targetFace);
                let cardCount = cardsDataName.length;
                if(cardCount === 2){
                    check = true;
                    return new Promise(resolve=>{
                        setTimeout(() => {
                            checkDataName(cardsDataName);
                            resolve();
                        }, 500);
                        
                    }).then(()=>check = false);   
                } 
            });
        });
    }
}

function turnCard(element){
    let targetBack = element.nextElementSibling;
    element.style.transform = "rotateY(-180deg)";
    targetBack.style.transform = "rotateY(0)";
    element.classList.add("selectedCard");
    targetBack.classList.add("selectedCard");
};

function getDataName(element, array){
    let dataName = element.dataset.name;
    array.push(dataName);
};

function checkDataName(array){
        let selectedCards = document.querySelectorAll(".selectedCard");
        let firstCard = array[0];
        let secondCard = array[1];
        if (firstCard === secondCard) {
            selectedCards.forEach(element => {
                element.style.filter = "brightness(15%)";
                element.classList.remove("selectedCard");   
            });
            score += 1;
            document.querySelector(".score_count").innerHTML = score;
            array.splice(0, 2);
            if(score == 6){ 
                setTimeout(() => {
                    win();    /*win.js*/
                }, 500);    
            }
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
    };



