/*function that creates an array with images and doubles it*/
function getImages(url) {
    const imagesUrl = {
        star:{
            url: "src/images/cards/cactus.png",
            id: "cactus"
        },
        arrow:{
            url: "src/images/cards/cat.png",
            id: "cat"
        },
        corcle:{
            url: "src/images/cards/dino.png",
            id: "dino"
        },
        heart:{
            url: "src/images/cards/ghost.png",
            id: "ghost"
        },
        light:{
            url: "src/images/cards/icecream.png",
            id: "icecream"
        },
        treangle:{
            url: "src/images/cards/rabbit.png",
            id: "rabbit"
        }
    
    };
    return new Promise((resolve, reject) => {
        const values = Object.values(imagesUrl);
        let elements = [];
        for (const key in values) {
            if (values.hasOwnProperty(key)) {
                const element = values[key];
                elements.push(element);    
            };
        };
        let doubleImagesArray = elements.concat(elements);
        
        cardImages = doubleImagesArray;
      
        resolve(cardImages);
        reject(this.status + "" + this.statusText);
                
    });

};

/*function that shuffles 12 images*/

    function shuffle(){
        for (let i = cardImages.length - 1; i > 0; i--){
           let randomNumber = Math.floor(Math.random() * (i + 1)) //случайный индек от 0 до i
           let currentnumber = cardImages[i];
           cardImages[i] = cardImages[randomNumber];
           cardImages[randomNumber] = currentnumber;
       }
   };


/*function that creates 12 cards*/

   function createCards(){
    let cardsConteiner = document.querySelector(".cards_conteiner");
       for (const key in cardImages) {
           if (cardImages.hasOwnProperty(key)) {
               const element =cardImages[key];
               let card = document.createElement("div");
               card.classList.add("card");
               cardsConteiner.append(card);
               let cardFace = document.createElement("div");
               cardFace.classList.add("card_face");
               cardFace.setAttribute("data-name", `${element.id}`);
               card.append(cardFace);
               let cardBack = document.createElement("div");
               cardBack.classList.add("card_back");
               cardBack.style.backgroundImage = `url(${element.url})`;
               cardBack.innerHTML = "back";
               cardFace.after(cardBack)    
           };
       };  
   };

function timeOut(){
    let timeCount = 60;
    let timeCountTime = document.querySelector(".timeCount_time");
        setInterval(() => {
            timeCountTime.innerHTML = --timeCount;
        }, 1000);
};