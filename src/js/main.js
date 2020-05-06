
let buttonStartGame = document.querySelector(".button_start_game");

buttonStartGame.addEventListener("click", () => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'components/game_plate/game_plate.html');
    xhr.send();
    xhr.onload = function () {
        if (xhr.status != 200) { 
            document.querySelector(".content").innerHTML = 'Ошибка: ' + xhr.status;
            return;
        }else{
            let response = xhr.response;
            document.querySelector(".content").innerHTML = (response);
            turnCard();
        }
    };

    xhr.onprogress = function (event) {

        document.querySelector(".content").innerHTML = `Загружено ${event.loaded} из ${event.total}`;
    };

    xhr.onerror = function () {
        alert("job,rf");
    };
});

function turnCard(){
    let cards = document.querySelectorAll(".card")
    let cardBack = document.querySelectorAll(".card_back");
    let cardFace = document.querySelectorAll(".card_face");
   cardFace.forEach(cardFace => {
       cardFace.addEventListener("click", (e)=>{
           let targetFace = e.target;
           let targetBack = targetFace.nextElementSibling;
           console.log(targetBack);
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
