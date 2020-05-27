
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

