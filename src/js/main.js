let buttonStartGame = document.querySelector(".button_start_game");
let gameContent = document.querySelector(".content");

buttonStartGame.addEventListener("click", () => {
    getPage('components/rules_page/rules_page.html').then(letsPlay);
    buttonStartGame.style.display = "none";
});


function letsPlay() {
    let buttonGo = document.querySelector(".game_rules_button-go");
    buttonGo.addEventListener("click", () => {

        let previouscontent = gameContent.childNodes;
        previouscontent.forEach(element => {
            element.remove();
        });
        getPage('components/game_plate/game_plate.html').then(turnCard).then(timeOut);
    });

};


function turnCard() {
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



};


function getPage(url) {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open("GET", url);
        request.onload = function() {
            try {
                if (this.status === 200) {
                    resolve(gameContent.innerHTML = this.response);
                }else {
                    reject(this.status + "" + this.statusText);
                }
            } catch(e) {
                console.log(e);
            }
        }

        request.onerror = function () {
            reject(this.status + "" + this.statusText);
        }

        request.onprogress = function (event) {
            gameContent.innerHTML = `Загружено ${event.loaded} из ${event.total}`;
        };
        request.send();
    });

};

function timeOut(){
    let timeCount = 60;
    let timeCountTime = document.querySelector(".timeCount_time");
        setInterval(() => {
            timeCountTime.innerHTML = --timeCount;
        }, 1000);
}