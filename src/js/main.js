
let buttonStartGame = document.querySelector(".button_start_game");
let gameContent = document.querySelector(".content");

buttonStartGame.addEventListener("click", () => {
    getGameComponent('components/rules_page/rules_page.html', letsPlay);
});


function letsPlay(){
    let buttonGo = document.querySelector(".game_rules_button-go"); 
    buttonGo.addEventListener("click", () => {

        let previouscontent = gameContent.childNodes;
        previouscontent.forEach(element => {
            element.remove();
        });
        getGameComponent('components/game_plate/game_plate.html', turnCard);
    
    });
    
};







function turnCard(){
    let cardBack = document.querySelectorAll(".card_back");
    let cardFace = document.querySelectorAll(".card_face");
   cardFace.forEach(cardFace => {
       cardFace.addEventListener("click", (e)=>{
           let targetFace = e.target;
           let targetBack = targetFace.nextElementSibling;
           targetFace.style.transform = "rotateY(-180deg)";
           targetBack.style.transform = "rotateY(0)";
       })
       
   });

    cardBack.forEach(cardBack => {
       cardBack.addEventListener("click", (e)=>{
           let targetBack = e.target;
           let targetFace = e.target.previousElementSibling;
           targetBack.style.transform = "rotateY(180deg)";
           targetFace.style.transform = "rotateY(0)";
       })
       
   });
           
           
            
};


function getGameComponent(url, actionFunction){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `${url}`); //game field with card
    xhr.send();
    xhr.onload = function () {
        if (xhr.status != 200) { 
            gameContent.innerHTML = 'Ошибка: ' + xhr.status;
            return;
        }else{
            let response = xhr.response;
            gameContent.innerHTML = (response);
            let action = actionFunction();
        }
        
    };
    
    xhr.onprogress = function (event) {
    
        gameContent.innerHTML = `Загружено ${event.loaded} из ${event.total}`;
    };
    
    xhr.onerror = function () {
        alert("job,rf");
    };
    
};
