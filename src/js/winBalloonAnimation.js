
function winBalloonAnimation(){
    let leftBalloons = Array.from(document.querySelectorAll(".balloon_left"));
    let rightBalloons =  Array.from(document.querySelectorAll(".balloon_right"));
    animateBallons(leftBalloons);
    animateBallons(rightBalloons);  
};

function animateBallons(arrayFromLeftBallons){
    let firstBallon = filteEveryFirstBalloons(arrayFromLeftBallons);
    let secondBalloon = filteEverySecondBalloons(arrayFromLeftBallons);
    firstBallon.forEach(element => {
        animateFly("animate_fly", element);    
    });
    secondBalloon.forEach(element => {
        animateFly("animate_fly2", element);
    });
};

function animateFly(animationName, element){
    let delayTime = Math.floor(Math.random()*5);
    element.style.animationDelay = delayTime + "s";
    element.classList.add(animationName);
};

function filteEveryFirstBalloons(array){
    let items = array.filter(function(_, i){
        return i % 2 === 0;
    });
    return Array.from(items);  
};

function filteEverySecondBalloons(array){
    let items2 = array.filter(function(_, i){
        return i % 2 != 0;
    });
    return Array.from(items2);
};