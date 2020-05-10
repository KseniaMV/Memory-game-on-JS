
/*function that create a xmlhttprequest and download a page*/
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

/*function that creates an array with images and doubles it*/
/*function getImages(url) {
    const imagesUrl = {
        star:{
            url: "src/images/star.jpg",
            id: "star"
        },
        arrow:{
            url: "src/images/arrow.jpg",
            id: "arrow"
        },
        corcle:{
            url: "src/images/circle.jpg",
            id: "circle"
        },
        heart:{
            url: "src/images/heart.jpg",
            id: "heart"
        },
        light:{
            url: "src/images/light.jpg",
            id: "light"
        },
        treangle:{
            url: "src/images/treangle.jpg",
            id: "treangle"
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

 /*   function shuffle(){
        for (let i = cardImages.length - 1; i > 0; i--){
           let randomNumber = Math.floor(Math.random() * (i + 1)) //случайный индек от 0 до i
           let currentnumber = cardImages[i];
           cardImages[i] = cardImages[randomNumber];
           cardImages[randomNumber] = currentnumber;
       }
   };


/*function that creates 12 cards*/

 /*  function createCards(){
    let cardsConteiner = document.querySelector(".cards_conteiner");
       for (const key in cardImages) {
           if (cardImages.hasOwnProperty(key)) {
               const element =cardImages[key];
               let card = document.createElement("div");
               card.classList.add("card");
               cardsConteiner.append(card);
               let cardFace = document.createElement("div");
               cardFace.classList.add("card_face");
               cardFace.classList.add(`${element.id}`);
               card.append(cardFace);
               let cardBack = document.createElement("div");
               cardBack.classList.add("card_back");
               cardBack.style.backgroundImage = `url(${element.url})`;
               cardBack.innerHTML = "back";
               cardFace.after(cardBack)    
           };
       };  
   };

/*function that turns card back on click*/
 /*  function turnCard() {
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

/*time count back*/

/*function timeOut(){
    let timeCount = 60;
    let timeCountTime = document.querySelector(".timeCount_time");
        setInterval(() => {
            timeCountTime.innerHTML = --timeCount;
        }, 1000);
};*/