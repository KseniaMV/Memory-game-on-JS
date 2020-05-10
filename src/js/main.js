let buttonStartGame = document.querySelector(".button_start_game");
let gameContent = document.querySelector(".content");
let cardImages = [];

/*download page with rules*/
buttonStartGame.addEventListener("click", () => {
    getPage('components/rules_page/rules_page.html').then(letsPlay);
    buttonStartGame.style.display = "none";
});

/*start game, download page with game table*/
function letsPlay() {
    let buttonGo = document.querySelector(".game_rules_button-go");
    buttonGo.addEventListener("click", () => {

        let previouscontent = gameContent.childNodes;
        previouscontent.forEach(element => {
            element.remove();
        });
        getPage('components/game_plate/game_plate.html').then(getImages).then(shuffle).then(createCards).then(turnCard).then(timeOut);
    });

};
