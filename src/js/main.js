let cardBack = document.querySelector(".prov2");
let cardFace = document.querySelector(".prov");
let buttonStartGame = document.querySelector(".button_start_game");

/*cardBack.addEventListener("click", function () { //animate rotation to front side
    console.log("re");
    cardFace.style.transform = "rotateY(0)";
    cardBack.style.transform = "rotateY(180deg)";

});


cardFace.addEventListener("click", function () {
    console.log("ds"); //animate rotation to front side
    cardFace.style.transform = "rotateY(-180deg)"; //animate rotation to back side
    cardBack.style.transform = "rotateY(0)";

});
*/

buttonStartGame.addEventListener("click", () => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'components/game_plate/game_plate.html');
    xhr.send();
    xhr.onload = function () {
        if (xhr.status != 200) { 
            alert('Ошибка: ' + xhr.status);
            return;
        }else{
            let response = xhr.response;
            document.querySelector(".content").innerHTML = (response);
        }

        // получим ответ из xhr.response
    };

    xhr.onprogress = function (event) {
        // выведем прогресс
        alert(`Загружено ${event.loaded} из ${event.total}`);
    };

    xhr.onerror = function () {
        alert("job,rf");
    };
})