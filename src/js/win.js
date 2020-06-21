/*this function in called by checkDataName() in game.js*/
function win(){
    let background = document.querySelector(".background");
    background.style.backgroundImage = "url('src/images/background/win.png')";
    background.style.backgroundSize = "500px";
    getPage("components/win_page/win_page.html").then(tryAgain).then(winBalloonAnimation);
        
}

