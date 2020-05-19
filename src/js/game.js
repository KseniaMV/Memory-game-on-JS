/*
1 - сформировать список из выбранных эелементов
2 - получить их имена
3 - сравнить их имена
4- пока имена сравнисваются, запретить выполение клика
5 - после сравнения выполняется действие либо затемнить похожие карты либо перевернуть не совпавшие
6 - очисть списки*/

function game(){
    let cardsDataName = [];
    let clickcount = 0;
    let cardFace = document.querySelectorAll(".card_face");
    cardFace.forEach(cardFace =>{
        cardFace.addEventListener("click", (e) => {
            if(clickcount < 2){
                let targetFace = e.target;
                turnCard(targetFace);
                getDataName(targetFace, cardsDataName);
                    clickcount++;
               
            }
            if(cardsDataName.length == 2){
                setTimeout(() => {
                     checkDataName(cardsDataName);
                }, 500);
                setTimeout(() => {
                    clickcount = 0;
               }, 600);

               

                              
            }
        })   
    })
}


function turnCard(element){
    let targetBack = element.nextElementSibling;
    element.style.transform = "rotateY(-180deg)";
    targetBack.style.transform = "rotateY(0)";
    element.classList.add("selectedCard");
    targetBack.classList.add("selectedCard");

}
function getDataName(element, array){
    let dataName = element.dataset.name;
    array.push(dataName);
}

function checkDataName(array){
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
                console.log("not the same");
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
    }
        
    


