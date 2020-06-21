function loseSadSmileAnimation(){
    let leftSadSmile = Array.from(document.querySelectorAll(".sad_smile_left"));
    let rightSadSmile =  Array.from(document.querySelectorAll(".sad_smile_right"));
    animateBallons(leftSadSmile);   /*animateBallons in winBalloonAnimation.js*/
    animateBallons(rightSadSmile);
    
};
